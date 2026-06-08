# Reconnect Sari's AI fallback (Cloudflare Workers)

**Why:** Sari answers most questions from her local knowledge base. For anything she *doesn't* know, she asks an AI. That AI used to run on a **Netlify Function** (`/api/ask`) — but your site is now on **GitHub Pages**, which can't run server code, so that call just 404s and the AI never responds.

**Fix:** host the tiny AI proxy on **Cloudflare Workers** (free, ~100,000 requests/day). It works with GitHub Pages, and your Gemini API key stays **server-side** (never shipped to the browser).

Total time: ~10 minutes. No command line needed — all in the browser.

```
Browser (GitHub Pages)  ──POST──►  Cloudflare Worker  ──►  Google Gemini
                                          │
                                          └─ GEMINI_API_KEY lives here (a secret), never in the page
```

---

## Step 1 — Get a Gemini API key (free)

1. Go to **<https://aistudio.google.com/app/apikey>** and sign in with your Google account.
2. Click **Create API key** → copy it (looks like `AIza...`).
3. Keep it somewhere safe for Step 5. **Do not paste it into any code or commit it.**

---

## Step 2 — Create a free Cloudflare account

1. Go to **<https://dash.cloudflare.com/sign-up>** and sign up (free, no card).
2. Verify your email and log in to the dashboard.

---

## Step 3 — Create the Worker

1. In the left sidebar, click **Compute (Workers)** → **Workers & Pages**.
2. Click **Create application** → **Create Worker**.
3. Name it something like **`sari-ai`** → click **Deploy** (it deploys a hello-world for now).
4. Click **Edit code**.

---

## Step 4 — Paste the Worker code

1. In the editor, **select all** the existing code and delete it.
2. Open **`cloudflare-worker.js`** from this project, copy **everything**, and paste it in.
3. Click **Deploy** (top-right).

---

## Step 5 — Add your secret + origin

Back on the Worker's page, go to **Settings → Variables and Secrets** (older UI: **Settings → Variables**):

1. **Add a Secret:**
   - Variable name: **`GEMINI_API_KEY`**
   - Value: paste your Gemini key from Step 1
   - Type: **Secret** (encrypted) → **Save / Deploy**
2. **Add a plain Variable:**
   - Variable name: **`ALLOWED_ORIGIN`**
   - Value: **`https://bokapgw.github.io`** (your GitHub Pages origin — no trailing slash, no `/Elmu.AI`)
   - Type: **Text** → **Save / Deploy**

> The `ALLOWED_ORIGIN` makes the Worker only answer requests coming from your site. The `GEMINI_API_KEY` is encrypted and never visible in the browser.

---

## Step 6 — Copy the Worker URL

On the Worker's overview page you'll see its URL, something like:

```
https://sari-ai.YOUR-SUBDOMAIN.workers.dev
```

Copy it.

---

## Step 7 — Paste the URL into the site

1. Open **`index.html`**, search for **`AI_PROXY_URL`** (near the top, just under `RATING_FORM_URL`).
2. You'll see:
   ```js
   const AI_PROXY_URL = '';
   ```
3. Paste your Worker URL inside the quotes:
   ```js
   const AI_PROXY_URL = 'https://sari-ai.YOUR-SUBDOMAIN.workers.dev';
   ```
4. Save, then commit + push:
   ```powershell
   cd C:\Users\User\Desktop\Claude\Sessions\elemu-lestari; git add index.html; git commit -m "chore: wire Sari AI fallback to Cloudflare Worker"; git push origin main
   ```

---

## Step 8 — Test it

1. Wait ~1–2 min for GitHub Pages to rebuild → open `https://bokapgw.github.io/Elmu.AI/` → **Ctrl+Shift+R**.
2. Ask something **not** in the knowledge base and clearly ESG, e.g. *"How does double materiality apply to Indonesian palm oil firms?"*
3. You should get an answer tagged **"✨ AI-generated answer · always verify with the official source."**
4. To confirm the wiring: **F12 → Network tab** → ask again → you'll see a request to your `...workers.dev` URL return **200** (not 404).

---

## Quick test without deploying (optional)

In your browser console on the live site, after Step 7 is pushed:

```js
fetch(AI_PROXY_URL, {
  method:'POST',
  headers:{'Content-Type':'application/json'},
  body: JSON.stringify({ query:'what is double materiality?', lang:'en', history:[] })
}).then(r=>r.json()).then(console.log)
```

You should see `{ answer: "..." }`.

---

## Cost & limits

- **Cloudflare Workers free tier:** ~100,000 requests/day. Way more than an academic demo needs.
- **Gemini free tier:** generous per-minute/day limits on `gemini-2.0-flash`. If you hit the limit, Sari **silently falls back** to her local knowledge base (no error shown to the user — that behavior is already built in).
- The Worker caps input at 800 chars and output at 512 tokens, so a runaway prompt can't rack up usage.

---

## Security notes (this keeps your key safe)

- ✅ `GEMINI_API_KEY` is a **Cloudflare Secret** — encrypted, server-side, never in `index.html` or the repo.
- ✅ `ALLOWED_ORIGIN` restricts who can call the Worker.
- ✅ Output is sanitized (script/iframe/on-handlers stripped) before it reaches the page.
- ⚠️ **Never** put the Gemini key in `index.html`, `cloudflare-worker.js`, or any committed file. It only ever goes in the Cloudflare dashboard.

---

## Troubleshooting

| Symptom | Fix |
|---|---|
| AI never answers; Network shows 404 | `AI_PROXY_URL` still empty or wrong. Re-check Step 7 and that you pushed. |
| Network shows 403 `origin_not_allowed` | `ALLOWED_ORIGIN` doesn't match exactly. Use `https://bokapgw.github.io` (no slash, no path). |
| Network shows 500 `server_not_configured` | `GEMINI_API_KEY` secret not set on the Worker. Redo Step 5. |
| Network shows 429 | You hit Gemini's free rate limit. Sari falls back to local KB automatically; try again in a minute. |
| Works locally with `netlify dev` but not on Pages | Local dev uses `/api/ask`; production needs `AI_PROXY_URL` set. Both can coexist. |

---

## What if I don't want to do this?

Totally fine — Sari is **fully functional without it**. The local knowledge base answers the vast majority of ESG questions, and for anything it doesn't cover it shows a graceful "I'm not sure, did you mean…" reply with suggestions. The AI fallback is a *nice-to-have* for open-ended questions, not a requirement. You can set `AI_PROXY_URL` any time later.
