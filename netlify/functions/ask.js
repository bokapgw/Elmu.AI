// ============================================================
// Elemu Lestari · /api/ask — Gemini-backed fallback proxy
// ------------------------------------------------------------
// Why a Netlify Function?
//   * The free Google Gemini API key MUST stay server-side. If we called
//     Gemini directly from the browser, anyone could open DevTools, copy
//     the key, and spend the user's quota. By proxying through a Netlify
//     Function, the key lives ONLY in Netlify env vars and is never
//     visible to any user.
//
// Security posture
//   1. API key read from process.env.GEMINI_API_KEY (set in Netlify
//      dashboard, never committed to git).
//   2. Input is length-capped (≤ 800 chars) to block prompt-stuffing.
//   3. Output is length-capped server-side (max 512 tokens) so a runaway
//      response can't drain quota.
//   4. CORS allow-listed to the deployed site origin (and localhost for
//      `netlify dev`). No `*` wildcard.
//   5. Method allow-list: POST only.
//   6. Soft IP rate limit: each IP gets 30 requests / 10 minutes via an
//      in-memory bucket (resets on cold start; good enough for an
//      assignment demo, NOT production).
//   7. System prompt locks Gemini to ESG / Indonesian sustainable finance.
//      Off-topic refusals come from the model itself.
//   8. Bilingual: client sends `lang: 'id' | 'en'`. System prompt switches
//      voice + tone accordingly (plain "Bahasa Awam" Indonesian for ID).
// ============================================================

// Allowed origins — add your Netlify deploy URL + any custom domain here.
// `null` and `file://` are blocked. localhost is allowed for `netlify dev`.
const ALLOWED_ORIGINS = new Set([
  'https://elemu-lestari.netlify.app',   // production deploy URL (Netlify-assigned)
  'https://elmu.ai',                      // custom domain (if set)
  'https://www.elmu.ai',
  'http://localhost:8888',                // netlify dev default
  'http://localhost:3000',
  'http://127.0.0.1:8888',
]);

// Soft rate limit (per IP). Resets on cold start.
const RATE_BUCKETS = new Map(); // ip -> { count, windowStart }
const RATE_WINDOW_MS = 10 * 60 * 1000;  // 10 minutes
const RATE_MAX = 30;                    // 30 requests / window / IP

function rateLimit(ip) {
  const now = Date.now();
  const b = RATE_BUCKETS.get(ip);
  if (!b || now - b.windowStart > RATE_WINDOW_MS) {
    RATE_BUCKETS.set(ip, { count: 1, windowStart: now });
    return true;
  }
  if (b.count >= RATE_MAX) return false;
  b.count++;
  return true;
}

function corsHeaders(origin) {
  const allowOrigin = ALLOWED_ORIGINS.has(origin) ? origin : '';
  return {
    'Access-Control-Allow-Origin': allowOrigin,
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Content-Type': 'application/json; charset=utf-8',
    'Cache-Control': 'no-store',
  };
}

// System prompt — RESTRICTED to Indonesian ESG / sustainable finance.
// Both languages share the same scope-locking; only voice differs.
function buildSystemPrompt(lang) {
  const isID = lang === 'id';
  const scope = isID
    ? `Kamu adalah "Sari", asisten investasi ESG dari Elemu Lestari (elmu.ai), khusus untuk investor ritel Indonesia.

SCOPE — kamu HANYA boleh menjawab tentang:
- ESG (Lingkungan, Sosial, Tata Kelola) dan istilah Indonesia "LST"
- Regulasi OJK (POJK 51/2017, POJK 13/2025, POJK 14/2023, POJK 17/2023, POJK 18/2023, POJK 60/2017, SEOJK 16/2021, dll)
- Keuangan berkelanjutan Indonesia (TKBI, KKUB, JETP, ETM, sukuk hijau)
- Indeks saham ESG Indonesia (IDX ESG Leaders, SRI-KEHATI, IHSG, MSCI)
- Krisis MSCI Indonesia Januari 2026
- Tata kelola perusahaan (free-float, beneficial ownership, coordinated trading)
- Cara screening saham ESG, greenwashing, dan pendidikan investor ritel

KALAU pertanyaannya DI LUAR SCOPE ini (resep masakan, olahraga, coding, hiburan, dll), tolak dengan sopan dan arahkan kembali ke topik ESG. Jangan jawab.

GAYA BAHASA — WAJIB "Bahasa Awam":
- Pakai bahasa Indonesia sehari-hari, JANGAN campur Inggris kecuali untuk akronim global (ESG, OJK, MSCI, IDX, IHSG).
- Jelaskan seperti ke orang yang belum pernah investasi sama sekali — tapi tetap profesional.
- Hindari jargon. Kalau harus pakai istilah teknis (misal "free-float"), langsung jelaskan dalam tanda kurung pakai bahasa awam.
- Pakai analogi sederhana kalau membantu (misal "saham itu seperti memiliki sepotong kecil perusahaan").
- Singkat dan jelas (maksimal 200 kata). Pakai bullet points kalau ada lebih dari 3 poin.

KEJUJURAN:
- JANGAN mengarang nomor regulasi, tahun, atau angka spesifik. Kalau tidak yakin, bilang "saya tidak tahu pasti — coba cek langsung di sumber resmi OJK".
- Selalu sebutkan "ini bukan saran beli/jual saham — konsultasi dengan penasihat berlisensi OJK" kalau pertanyaan mendekati saran investasi.

FORMAT OUTPUT: HTML sederhana. Gunakan <strong>...</strong> untuk penekanan, <em>...</em> untuk istilah asing, <br> untuk baris baru, dan <ul><li>...</li></ul> untuk daftar. JANGAN gunakan markdown.`
    : `You are "Sari", an ESG investment assistant from Elemu Lestari (elmu.ai), built specifically for Indonesian retail investors.

SCOPE — you may ONLY answer questions about:
- ESG (Environmental, Social, Governance) and the Indonesian term "LST"
- OJK regulations (POJK 51/2017, POJK 13/2025, POJK 14/2023, POJK 17/2023, POJK 18/2023, POJK 60/2017, SEOJK 16/2021, etc.)
- Indonesian sustainable finance (TKBI, KKUB, JETP, ETM, green sukuk)
- Indonesian ESG indices (IDX ESG Leaders, SRI-KEHATI, IHSG, MSCI)
- The January 2026 MSCI Indonesia crisis
- Corporate governance (free-float, beneficial ownership, coordinated trading)
- ESG stock screening, greenwashing, and retail investor education

If the question is OUTSIDE this scope (recipes, sports, coding, entertainment, etc.), politely refuse and redirect to ESG topics. Do not answer.

VOICE:
- Explain like to someone who has never invested before — but stay professional.
- Use simple language. Where a technical term is necessary, define it inline with a brief parenthetical.
- Use simple analogies where helpful (e.g. "a stock is like owning a small slice of a company").
- Keep answers concise — max 200 words. Use bullet points only when there are 3+ items.

HONESTY:
- Do NOT invent regulation numbers, dates, or specific figures. If unsure, say "I don't have the exact figure — check OJK's official document".
- Always include "this is not buy/sell advice — consult an OJK-licensed advisor" if the question leans toward investment advice.

OUTPUT FORMAT: simple HTML only. Use <strong>...</strong> for emphasis, <em>...</em> for foreign terms, <br> for new lines, and <ul><li>...</li></ul> for lists. DO NOT use markdown.`;
  return scope;
}

exports.handler = async (event, context) => {
  const origin = event.headers.origin || event.headers.Origin || '';
  const headers = corsHeaders(origin);

  // CORS preflight
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 204, headers, body: '' };
  }
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, headers, body: JSON.stringify({ error: 'Method not allowed' }) };
  }

  // CORS guard
  if (!headers['Access-Control-Allow-Origin']) {
    return { statusCode: 403, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ error: 'Origin not allowed' }) };
  }

  // Rate limit
  const ip = (event.headers['x-nf-client-connection-ip']
            || event.headers['client-ip']
            || event.headers['x-forwarded-for']
            || 'anon').split(',')[0].trim();
  if (!rateLimit(ip)) {
    return { statusCode: 429, headers, body: JSON.stringify({ error: 'Rate limit: max 30 requests per 10 minutes per IP. Coba lagi nanti.' }) };
  }

  // Parse body
  let body;
  try {
    body = JSON.parse(event.body || '{}');
  } catch (e) {
    return { statusCode: 400, headers, body: JSON.stringify({ error: 'Invalid JSON body' }) };
  }

  let { query, lang, history } = body;
  if (typeof query !== 'string' || !query.trim()) {
    return { statusCode: 400, headers, body: JSON.stringify({ error: 'Missing query' }) };
  }
  query = query.trim();
  if (query.length > 800) {
    return { statusCode: 400, headers, body: JSON.stringify({ error: 'Query too long (max 800 chars)' }) };
  }
  lang = lang === 'en' ? 'en' : 'id';
  // History: optional, last 3 turns of {role:'user'|'bot', text:string}
  const safeHistory = Array.isArray(history)
    ? history.slice(-3).filter(h => h && typeof h.text === 'string' && h.text.length <= 500).map(h => ({
        role: h.role === 'bot' || h.role === 'model' ? 'model' : 'user',
        text: h.text.slice(0, 500),
      }))
    : [];

  // Read API key from server env (NEVER from client, NEVER in code)
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return {
      statusCode: 503,
      headers,
      body: JSON.stringify({
        error: 'Gemini API key not configured on server. Admin: set GEMINI_API_KEY env var in Netlify dashboard.',
      }),
    };
  }

  // Build Gemini request
  const systemPrompt = buildSystemPrompt(lang);
  const contents = [];
  for (const h of safeHistory) {
    contents.push({ role: h.role, parts: [{ text: h.text }] });
  }
  contents.push({ role: 'user', parts: [{ text: query }] });

  // Gemini 1.5 Flash — most stable + most generous free tier
  // (15 RPM / 1500 RPD on the free tier as of early 2026).
  // If you have access, you can swap to 'gemini-2.0-flash' or
  // 'gemini-2.5-flash' for newer models.
  const GEMINI_MODEL = 'gemini-1.5-flash';
  const GEMINI_URL = 'https://generativelanguage.googleapis.com/v1beta/models/' + GEMINI_MODEL + ':generateContent?key=' + encodeURIComponent(apiKey);

  const geminiBody = {
    systemInstruction: { parts: [{ text: systemPrompt }] },
    contents,
    generationConfig: {
      temperature: 0.7,
      topP: 0.9,
      topK: 40,
      maxOutputTokens: 512,
    },
    // Safety: block obviously harmful content (Gemini defaults are usually OK)
    safetySettings: [
      { category: 'HARM_CATEGORY_HARASSMENT',        threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
      { category: 'HARM_CATEGORY_HATE_SPEECH',       threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
      { category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
      { category: 'HARM_CATEGORY_DANGEROUS_CONTENT', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
    ],
  };

  let resp;
  try {
    // 25-second timeout (Netlify functions max out at 26s on free tier)
    const ctl = new AbortController();
    const timeoutId = setTimeout(() => ctl.abort(), 25000);
    resp = await fetch(GEMINI_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(geminiBody),
      signal: ctl.signal,
    });
    clearTimeout(timeoutId);
  } catch (e) {
    return {
      statusCode: 502,
      headers,
      body: JSON.stringify({
        error: lang === 'id'
          ? 'Gagal terhubung ke layanan AI. Coba lagi sebentar.'
          : 'Failed to reach AI service. Please try again shortly.',
      }),
    };
  }

  if (!resp.ok) {
    const errText = await resp.text().catch(() => '');
    // Log to Netlify function logs (developer-only, server-side).
    console.error('[ask] Gemini returned non-OK:', resp.status, errText.slice(0, 800));
    // Parse the upstream error to surface a SAFE detail to the client.
    // Strip anything that looks like a key fragment defensively.
    let upstreamDetail = '';
    try {
      const parsed = JSON.parse(errText);
      upstreamDetail = (parsed && parsed.error && parsed.error.message) || '';
    } catch (e) {
      upstreamDetail = errText.slice(0, 200);
    }
    // Redact anything that looks like an API key (AIza... is the Google AI key prefix)
    upstreamDetail = upstreamDetail.replace(/AIza[A-Za-z0-9_-]{20,}/g, '[REDACTED-KEY]');
    return {
      statusCode: 502,
      headers,
      body: JSON.stringify({
        error: (lang === 'id'
          ? 'Layanan AI sedang bermasalah (kode ' + resp.status + ').'
          : 'AI service is having issues (code ' + resp.status + ').'),
        upstream_status: resp.status,
        upstream_detail: upstreamDetail || '(no detail provided)',
        model: GEMINI_MODEL,
      }),
    };
  }

  let data;
  try {
    data = await resp.json();
  } catch (e) {
    return { statusCode: 502, headers, body: JSON.stringify({ error: 'Bad response from AI service' }) };
  }

  // Extract the answer text from Gemini's response
  const answer = data?.candidates?.[0]?.content?.parts?.map(p => p.text).join('') || '';
  if (!answer) {
    // Maybe blocked by safety filter
    const finishReason = data?.candidates?.[0]?.finishReason || 'unknown';
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        answer: lang === 'id'
          ? '<em>Maaf, saya tidak bisa menjawab pertanyaan itu (alasan: ' + finishReason + '). Coba ubah formulasi pertanyaannya.</em>'
          : '<em>Sorry, I cannot answer that question (reason: ' + finishReason + '). Try rephrasing.</em>',
        source: 'gemini',
        blocked: true,
      }),
    };
  }

  // Light sanitization — strip <script>, <iframe>, on* attributes that the
  // model might emit accidentally. Keep simple HTML tags the chatbot uses.
  const sanitized = answer
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
    .replace(/<iframe[^>]*>[\s\S]*?<\/iframe>/gi, '')
    .replace(/\s+on\w+\s*=\s*"[^"]*"/gi, '')
    .replace(/\s+on\w+\s*=\s*'[^']*'/gi, '');

  return {
    statusCode: 200,
    headers,
    body: JSON.stringify({
      answer: sanitized,
      source: 'gemini',
      model: 'gemini-2.0-flash',
    }),
  };
};
