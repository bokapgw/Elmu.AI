# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this project is

**Elemu Lestari** (elmu.ai) — a bilingual (Indonesian/English) ESG investment education chatbot for Indonesian retail investors. The AI assistant is named "Sari" and is scoped strictly to Indonesian ESG, OJK regulations, and sustainable finance.

Deployed on Netlify as a static site + serverless function. No framework, no build step — `netlify.toml` sets `publish = "."`.

## Local development

```bash
# One-time setup
npm install -g netlify-cli
cp .env.example .env
# Edit .env and paste your real GEMINI_API_KEY

# Start dev server (static site + Netlify Functions together)
netlify dev
# Open http://localhost:8888
```

The `.env` file is gitignored. For production, set `GEMINI_API_KEY` in the Netlify dashboard under Site → Site configuration → Environment variables (scope: Functions).

## Refreshing market data manually

```bash
pip install yfinance feedparser
python fetch_data.py
```

This rewrites `stocks.js` and `news.js` — both are auto-generated globals and must not be edited by hand. The GitHub Actions workflow (`.github/workflows/refresh-data.yml`) runs this automatically Monday–Friday at 17:00 WIB (10:00 UTC).

## Architecture

### Answer pipeline (client-side, in `index.html`)
1. **Off-topic / gibberish guard** — rejects unrelated questions before spending any quota
2. **Local rule-based FAQ matcher** — scores against `window.KNOWLEDGE_DATA` (keyword + phrase matching); a confident match answers immediately without an API call
3. **Gemini fallback** — `POST /api/ask` → `netlify/functions/ask.js` → Google Gemini; fires only when the local KB has no confident match

### Key files

| File | Role |
|---|---|
| `index.html` | Entire frontend — CSS, JS, and HTML in one large file; no build step |
| `netlify/functions/ask.js` | Serverless Gemini proxy; holds all security controls (CORS, rate limiting, sanitization) |
| `knowledge.js` | Curated Q&A knowledge base (`window.KNOWLEDGE_DATA`); **edit this file to add or update Sari's answers** |
| `stocks.js` | Auto-generated market data (`window.STOCKS_DATA`); written by `fetch_data.py` |
| `news.js` | Auto-generated RSS headlines (`window.NEWS_DATA`); written by `fetch_data.py` |
| `fetch_data.py` | Daily data refresher — pulls IDX prices via yfinance, RSS feeds via feedparser, computes hybrid ESG scores |

### Data globals loaded via `<script>` tags
All three data files expose browser globals (`window.STOCKS_DATA`, `window.NEWS_DATA`, `window.KNOWLEDGE_DATA`) and are loaded before `index.html`'s inline JS runs. There is no module bundler.

### Gemini model fallback chain (`ask.js`)
The function tries models in order and caches the first working one for the lifetime of the function instance:
`gemini-1.5-flash` → `gemini-1.5-flash-8b` → `gemini-2.0-flash` → `gemini-2.5-flash`

### ESG index membership (in `fetch_data.py`)
`KEHATI_SRI`, `IDX_ESG_LEADERS`, and `SYARIAH` are curated sets — not pulled from an API. They should be updated twice yearly (March/September) after IDX's major index review. `CURATED_ESG_PILLARS` holds the (E, S, G) tuple for each ticker and also needs periodic review against public sustainability reports.

### Hybrid ESG score formula
`0.5 × IDX-pillar average + 0.3 × financial-health proxy + 0.2 × index-membership bonus`
Financial health = normalized composite of P/E (inverted), dividend yield, and market cap (log scale). Membership: 10 = KEHATI+ESG Leaders, 9 = ESG Leaders only, 7.5 = KEHATI only, 5 = Syariah, 0 = none.

## Adding knowledge base entries

Edit `knowledge.js` — add entries to the `entries` array using the format documented at the top of that file. Each entry has `kw_id`/`kw_en` keyword arrays and `a_id`/`a_en` HTML answer strings. Multi-word phrases in keyword arrays get a +0.5 scorer bonus for verbatim matches. Reload the page after editing.

## Security constraints (do not relax)

- `GEMINI_API_KEY` must stay in Netlify env vars only — never in code or `netlify.toml`
- `ALLOWED_ORIGINS` in `ask.js` must be an explicit allowlist — no `*` wildcard
- Input is capped at 800 chars; output at 512 tokens (prompt-stuffing / quota protection)
- Gemini output is sanitized server-side: `<script>`, `<iframe>`, and `on*=` attributes are stripped before the response reaches the browser
- Rate limit: 30 requests / 10 min / IP (in-memory bucket, resets on cold start)
