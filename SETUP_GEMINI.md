# Setting up the Gemini AI Fallback

This guide walks you through hooking up the free Google Gemini API to power Sari's "I don't know that" fallback. The integration follows a strict security model — **your API key never leaves Netlify's server environment** and is never visible to anyone visiting the site.

---

## How it works

```
User question
   │
   ▼
[1] Off-topic / gibberish guards     ──► refuse politely if unrelated
   │
   ▼
[2] Local rule-based FAQ matcher     ──► confident match? answer from KB
   │  (no confident match)
   ▼
[3] Netlify Function /api/ask        ──► forwards to Gemini with a strict
   │  (server-side, key hidden)         system prompt scoped to ESG
   ▼
[4] Gemini 2.0 Flash response        ──► sanitized + displayed with a
                                          "✨ Generated via Gemini" tag
```

The chatbot **always tries the rule-based knowledge first**. Gemini only fires when the local FAQ returns no match. This keeps your free Gemini quota for the questions that genuinely need it.

---

## Step 1 — Get your free Gemini API key

1. Open <https://aistudio.google.com/apikey> in a browser.
2. Sign in with the Google account you want billing tied to (the free tier is generous — no card required).
3. Click **"Create API key"** → pick **"Create API key in new project"** (or pick an existing project).
4. Copy the key. It looks like `AIzaSyB...` (about 39 characters).

**⚠ Treat this key like a password.** Anyone with it can use your quota. Don't paste it in chat, screenshots, code, or git.

---

## Step 2 — Add the key to Netlify (NEVER to the repo)

1. Open your Netlify dashboard → pick the **Elmu.AI** site.
2. Go to **Site configuration → Environment variables** (left sidebar).
3. Click **"Add a variable"** → **"Add a single variable"**.
4. Fill in:
   - **Key:** `GEMINI_API_KEY`
   - **Values:** paste your Gemini key
   - **Scopes:** check **"Functions"** (production)
   - **Deploy contexts:** **"All deploy contexts"** (or just Production if you prefer)
5. Click **"Create variable"**.
6. **Redeploy** the site — Netlify needs to restart functions for the new env var to take effect. Go to **Deploys → Trigger deploy → Deploy site**.

Verify by opening `https://YOUR-SITE.netlify.app/api/ask` directly in a browser — you should see `{"error":"Method not allowed"}` (this proves the function is alive; it's just rejecting GET because it only accepts POST). If you see a 404, the function didn't deploy yet.

---

## Step 3 — Update the allowed origins (one-time)

The function only accepts requests from origins you allow. Open `netlify/functions/ask.js` and find the `ALLOWED_ORIGINS` set near the top:

```js
const ALLOWED_ORIGINS = new Set([
  'https://elmu-ai.netlify.app',   // <-- change to YOUR actual deploy URL
  'https://elmu.ai',                // custom domain if you have one
  'https://www.elmu.ai',
  'http://localhost:8888',
  'http://localhost:3000',
  'http://127.0.0.1:8888',
]);
```

Replace `elmu-ai.netlify.app` with your real Netlify URL. Commit and push. After Netlify redeploys (~30 seconds), the function is live.

---

## Step 4 — Test it

Open your live site in a browser and ask Sari something that is **definitely not** in the local FAQ:

> "Explain how to calculate the Sharpe ratio for an ESG portfolio"

If everything is set up correctly:
- You'll see "Sari sedang berpikir..." (thinking indicator) for 2-5 seconds.
- The answer appears with a small grey tag at the bottom: **✨ Generated via Gemini · not from the curated knowledge base. Always verify with the source.**

If you instead see the regular "Saya belum punya jawaban..." fallback, something is wrong — see Troubleshooting below.

---

## Security guarantees (what's protected)

| Concern | How it's handled |
|---|---|
| **Key in browser DevTools?** | Never. The key is read from `process.env.GEMINI_API_KEY` inside the Netlify Function. The browser only sees `/api/ask` URLs. |
| **Key in git history?** | Never. `.gitignore` blocks `.env*` files. Only `.env.example` (placeholder) is committed. |
| **Key in `netlify.toml`?** | Never. The toml file is committed and public-readable. Real keys live in the Netlify dashboard. |
| **Anyone can hit `/api/ask` from any site?** | No. CORS allow-lists only your deploy URL (and localhost for dev). Requests from other origins return 403. |
| **Someone spams the endpoint to drain your quota?** | Rate-limited to 30 requests per IP per 10 minutes (in-memory bucket). Cold starts reset it, so this is best-effort, not bulletproof. |
| **Long prompts that stuff your context window?** | Input capped at 800 chars; output capped at 512 tokens. |
| **Gemini wandering off-topic?** | System prompt locks it to "Indonesian ESG and sustainable finance" and tells it to refuse off-topic requests. |
| **Gemini returning unsafe content?** | Built-in safety filters at `BLOCK_MEDIUM_AND_ABOVE` for harassment/hate/explicit/dangerous categories. |
| **Gemini returning `<script>` to XSS your site?** | Server-side sanitizer strips `<script>`, `<iframe>`, and `on*=` attributes before responding. |

---

## Troubleshooting

**Symptom:** Sari uses the local "I don't know" fallback even for unusual queries that should hit Gemini.
- Open DevTools → Network tab → ask a question → look for the `/api/ask` request.
  - **No request at all?** The client-side `askGeminiFallback()` may have failed silently — check the Console tab for errors.
  - **Request returns 403?** Your origin isn't in `ALLOWED_ORIGINS`. Add your Netlify URL and redeploy.
  - **Request returns 503 with "API key not configured"?** You haven't set `GEMINI_API_KEY` in Netlify env vars, or you set it but didn't redeploy.
  - **Request returns 429?** You hit the per-IP rate limit. Wait 10 minutes.
  - **Request returns 502?** Gemini API itself failed. Check <https://status.cloud.google.com>.

**Symptom:** Free quota exhausted faster than expected.
- Gemini 2.0 Flash free tier: 15 requests per minute, 1500 requests per day (per project). Check usage at <https://aistudio.google.com/apikey>.
- If you need more, switch the model in `ask.js` to `gemini-1.5-flash-8b` (cheaper) or upgrade to a paid plan.

**Symptom:** Local development with `netlify dev` can't reach the function.
- Install Netlify CLI: `npm install -g netlify-cli`.
- Create a local `.env` file (gitignored) with `GEMINI_API_KEY=your-key-here`.
- Run `netlify dev` from the project root. Visit `http://localhost:8888`.

---

## Local development

```bash
# one-time setup
npm install -g netlify-cli
cp .env.example .env
# edit .env and paste your real GEMINI_API_KEY

# start dev server (serves static site + functions)
netlify dev
# open http://localhost:8888
```

The `.env` file is gitignored — your local key never reaches the remote.
