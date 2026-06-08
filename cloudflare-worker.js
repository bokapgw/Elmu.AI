/* ============================================================================
   Elemu Lestari · Sari · Cloudflare Worker (Gemini proxy)
   ----------------------------------------------------------------------------
   This runs on Cloudflare Workers (free tier, ~100k requests/day) and gives the
   GitHub Pages site a working AI fallback. The browser POSTs to this Worker; the
   Worker calls Google Gemini using a key that stays SERVER-SIDE (never shipped to
   the browser). It replaces the old Netlify Function that 404s on GitHub Pages.

   Deploy steps: see SETUP_CLOUDFLARE_AI.md. In short, in the Cloudflare dashboard
   you set:
     • Secret    GEMINI_API_KEY   = your Google AI Studio key
     • Variable  ALLOWED_ORIGIN   = https://bokapgw.github.io   (your Pages origin)
   Then paste the Worker URL into index.html → const AI_PROXY_URL = '...'.

   Request  (POST, JSON):  { "query": "...", "lang": "id"|"en", "history": [...] }
   Response (JSON):        { "answer": "..." }   or   { "error": "..." }
   ============================================================================ */

const MODELS = ['gemini-2.0-flash', 'gemini-1.5-flash']; // tried in order
const MAX_INPUT_CHARS = 800;
const MAX_OUTPUT_TOKENS = 512;

export default {
  async fetch(request, env) {
    const origin = request.headers.get('Origin') || '';
    const allow = env.ALLOWED_ORIGIN || '';
    const cors = corsHeaders(allow || origin);

    // CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: cors });
    }
    if (request.method !== 'POST') {
      return json({ error: 'method_not_allowed' }, 405, cors);
    }
    // Lightweight origin allowlist (defense in depth; the key is the real secret)
    if (allow && origin && origin !== allow) {
      return json({ error: 'origin_not_allowed' }, 403, cors);
    }
    if (!env.GEMINI_API_KEY) {
      return json({ error: 'server_not_configured' }, 500, cors);
    }

    let body;
    try { body = await request.json(); }
    catch (e) { return json({ error: 'bad_json' }, 400, cors); }

    const query = String((body && body.query) || '').slice(0, MAX_INPUT_CHARS).trim();
    const lang = (body && body.lang === 'en') ? 'en' : 'id';
    const history = Array.isArray(body && body.history) ? body.history.slice(-3) : [];
    if (!query) return json({ error: 'empty_query' }, 400, cors);

    // Build Gemini "contents": prior turns + current question.
    const contents = [];
    for (const h of history) {
      const role = (h && h.role === 'model') ? 'model' : 'user';
      const text = String((h && h.text) || '').replace(/<[^>]+>/g, '').slice(0, 500);
      if (text) contents.push({ role, parts: [{ text }] });
    }
    contents.push({ role: 'user', parts: [{ text: query }] });

    const payload = {
      system_instruction: { parts: [{ text: systemPrompt(lang) }] },
      contents,
      generationConfig: { maxOutputTokens: MAX_OUTPUT_TOKENS, temperature: 0.4 },
    };

    for (const model of MODELS) {
      try {
        const url = 'https://generativelanguage.googleapis.com/v1beta/models/'
          + model + ':generateContent?key=' + env.GEMINI_API_KEY;
        const r = await fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
        if (r.status === 429) return json({ error: 'rate_limited' }, 429, cors);
        if (!r.ok) continue; // 400/404 etc → try the next model
        const data = await r.json();
        const parts = data && data.candidates && data.candidates[0]
          && data.candidates[0].content && data.candidates[0].content.parts;
        const text = Array.isArray(parts) ? parts.map(p => p.text || '').join('').trim() : '';
        if (text) return json({ answer: sanitize(text) }, 200, cors);
      } catch (e) { /* try next model */ }
    }
    return json({ error: 'no_answer' }, 502, cors);
  },
};

function systemPrompt(lang) {
  const base =
    "You are Sari, the ESG assistant of Elemu Lestari (elmu.ai), an educational tool for Indonesian retail investors. " +
    "Scope: ONLY Indonesian ESG, OJK regulation, sustainable finance, and green investment products. " +
    "Rules: (1) Educational only, never give personalized buy/sell advice. " +
    "(2) If you are unsure of a specific number, date, or regulation code, say so plainly and suggest checking the primary source; do NOT invent citations. " +
    "(3) Keep answers short (3-6 short lines), plain language, simple HTML allowed (<strong>, <br>, <em>, <ul><li>). Do not use em-dashes. " +
    "(4) Never mention which AI model or vendor you are. " +
    "(5) Politely refuse off-topic (non-ESG) questions.";
  return lang === 'en'
    ? base + " Answer in English."
    : base + " Jawab dalam Bahasa Indonesia yang santai dan mudah dipahami.";
}

function corsHeaders(origin) {
  return {
    'Access-Control-Allow-Origin': origin || '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': '86400',
  };
}

function json(obj, status, cors) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: { 'Content-Type': 'application/json', ...cors },
  });
}

// Strip anything dangerous before it reaches the browser (defense in depth).
function sanitize(s) {
  return String(s)
    .replace(/<\s*(script|iframe|style|object|embed)[^>]*>[\s\S]*?<\s*\/\s*\1\s*>/gi, '')
    .replace(/<\s*(script|iframe|style|object|embed)[^>]*\/?>/gi, '')
    .replace(/\son\w+\s*=\s*("[^"]*"|'[^']*'|[^\s>]+)/gi, '')
    .replace(/javascript:/gi, '');
}
