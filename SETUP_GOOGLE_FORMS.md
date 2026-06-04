# Setting Up the "Nilai Sari" Google Form

Why Google Forms instead of Netlify Forms? **Because Netlify Forms is paused on your account** (free-tier credit limit exceeded → deploys + forms suspended until next month or upgrade). Google Forms is:

- **Free, unlimited submissions** — no quota, no credit limit
- **Auto-linked to a Google Sheet** — sortable, filterable, chartable
- **Built-in email notifications** — every submission can ping your inbox
- **Charts come free** — Google Forms auto-generates summary charts for each question (perfect screenshot material for your assignment)

This document walks you through:
1. Creating the form (copy-paste the 16 CUQ questions below)
2. Enabling email notifications
3. Pasting the form URL into `index.html` so the "⭐ Nilai Sari" button opens it

Total time: about **10 minutes**.

---

## How it works after setup

```
User clicks ⭐ Nilai Sari (bottom of page)
   ↓
JavaScript checks: is RATING_FORM_URL set in index.html?
   ↓
   Yes → opens your Google Form in a new tab
        ↓
        User fills 16 CUQ questions + optional name + comments
        ↓
        User clicks Submit
        ↓
        ├─→ Saved as a new row in your linked Google Sheet
        └─→ Email notification fired to you (if you enabled it)
```

If `RATING_FORM_URL` is empty, the old in-app modal still works (saves to the user's browser only, with an export-to-JSON button as backup).

---

## Step 1 — Create the Google Form

1. Go to <https://forms.google.com>
2. Click the **+ Blank form** card (top-left)
3. **Title:** `Rate Sari / Nilai Sari — Quick Feedback`
4. **Description:** paste:
   ```
   Help us evaluate Elemu Lestari (elmu.ai), an ESG-investing education chatbot. 8 quick statements — about 1 minute. Scale: 1 (Strongly Disagree) to 5 (Strongly Agree).

   Bantu kami mengevaluasi Elemu Lestari (elmu.ai), chatbot edukasi investasi ESG. 8 pernyataan singkat — sekitar 1 menit. Skala: 1 (Sangat Tidak Setuju) sampai 5 (Sangat Setuju).
   ```

---

## Step 2 — Add the 8 survey questions (ELUTS, short version)

> **Use the brand-new custom questions** — the full bilingual copy-paste blocks + academic justification live in **`QUESTIONNAIRE_ELUTS.md`** (section *"RECOMMENDED: the short version"*). These replace the old copy-pasted CUQ items, per your lecturer's feedback.

For **each** of the 8 questions: click **+ Add question** → choose **Linear scale** → set **scale 1 to 5** → set the labels **1 = Strongly Disagree / Sangat Tidak Setuju** and **5 = Strongly Agree / Sangat Setuju** → mark it **Required**.

> Tip: build the first question fully (scale + labels + Required), then click the **duplicate icon** (two squares) 7 times and just edit each one's text. Much faster than rebuilding 8 times.

**Each question is bilingual — paste English on line 1, Indonesian on line 2** (press Enter between them). The 8 questions measure:

| # | Construct | # | Construct |
|---|---|---|---|
| 1 | First impression / onboarding | 5 | Clarity of explanations |
| 2 | Navigation / ease of use | 6 | Trust / credibility |
| 3 | Understanding the user | 7 | Engagement / personality |
| 4 | Usefulness | 8 | Overall / recommendation |

> **Why a 5-point scale, not 7?** It's quicker for casual respondents and matches what most people are used to. The respondent only ever picks **1–5** — the "0–100" you may have seen is just the final score *you* compute from those answers (see `QUESTIONNAIRE_ELUTS.md` → *Scoring*).

> **Already built the old 16-question form?** Easiest fix: open it, delete the questions you don't need (16 → 8), switch the scale from 1–7 to 1–5, and update the wording. The form link stays the same, so nothing in the code changes.

---

## Step 3 — Add the open-text follow-up fields

After question 8, add **2 more questions** (these are **not** required):

1. **Short answer**: `Name / Nama (optional / opsional)` — optional name
2. **Paragraph**: `Comments or suggestions / Saran atau kritik (optional / opsional)` — comments

---

## Step 4 — Enable email notifications

1. In the form editor, click the **Responses** tab (top, next to Questions)
2. Click the **three-dot menu** (vertical ⋮) in the top-right of that tab
3. Click **"Get email notifications for new responses"**

That's it. Every new submission pings your Google account's email within ~1 minute.

> If you want the email to go to a different address, you'd use Google Apps Script — but for an academic assignment, the default Gmail notification is fine.

---

## Step 5 — Link the form to a Google Sheet (auto-generated)

1. Still in the **Responses** tab
2. Click the **green Sheets icon** (top-right of the responses summary)
3. Choose **Create a new spreadsheet** → name it `Elemu Lestari — Sari Ratings`
4. Click **Create**

Every submission now appears as a new row in that sheet. You can:

- Apply filters
- Compute the mean CUQ score with `=AVERAGE(F2:F)` (or whichever column holds the score)
- Build pivot tables / charts for your assignment writeup
- Download as `.xlsx` or `.csv` anytime

> **Computing the final CUQ score** from raw 1-7 scores:
> For each row, `(Q1−1) + (7−Q2) + (Q3−1) + (7−Q4) + … + (Q15−1) + (7−Q16)`, then multiply by `100/96`.
> Result is a single 0–100 usability score (higher = better).

---

## Step 6 — Get the form URL

1. Top-right of the form editor → click **Send**
2. Click the **link icon** (chain) in the dialog that appears
3. Optionally tick **"Shorten URL"** (gives you a `https://forms.gle/abc123` link instead of the long one)
4. Click **Copy**

Save this URL — you'll paste it into `index.html` in the next step.

---

## Step 7 — Paste the URL into `index.html`

1. Open `index.html` in your editor
2. Search for **`RATING_FORM_URL`** (around line 994, inside the `<script>` block, just above `const CUQ_ITEMS`)
3. You'll see:
   ```js
   const RATING_FORM_URL = '';
   ```
4. Replace the empty string with your form URL:
   ```js
   const RATING_FORM_URL = 'https://forms.gle/YOUR_SHORT_CODE';
   ```
5. Save the file

Commit and push:
```
git add index.html
git commit -m "feat: wire Nilai Sari button to Google Form"
git push origin main
```

(If Netlify is still paused, you can host this as a static file anywhere — GitHub Pages, Vercel, Cloudflare Pages — all free, all unlimited. See "Hosting alternatives" at the bottom of this file.)

---

## Step 8 — Test it

1. Open the live site in a private/incognito tab
2. Click **⭐ Nilai Sari** at the bottom of the page
3. A new tab opens with your Google Form
4. Fill in some test answers + submit
5. Check:
   - ✅ Your Google Sheet has a new row
   - ✅ Your inbox has an email notification (within ~1 min)

Done.

---

## Bonus — Pre-filling the `lang` field automatically

The button code in `index.html` already appends `?lang=id` or `?lang=en` to the form URL based on which language the user has selected. If you want Google Forms to **automatically pre-select** the "Bahasa yang dipakai" question based on that param:

1. In the form editor, click the three-dot menu (top right) → **Get pre-filled link**
2. Fill in only the "Bahasa yang dipakai" question with a sample value, e.g. `Indonesian (id)`
3. Click **Get link** → Google gives you a URL like:
   ```
   https://docs.google.com/forms/d/e/.../viewform?usp=pp_url&entry.1234567890=Indonesian+%28id%29
   ```
4. Note the `entry.1234567890` number — that's the field's internal ID
5. In `index.html`, find the line in `openCUQModal()` that builds the URL and replace with:
   ```js
   url += joiner + 'usp=pp_url&entry.1234567890=' + encodeURIComponent(L==='id' ? 'Indonesian (id)' : 'English (en)');
   ```

This step is **optional**. The simpler version (which just appends `?lang=id`) still works fine — the user just has to pick the language themselves on the form.

---

## For your assignment writeup

Google Forms gives you, for free:

| What | Where to find it |
|---|---|
| **Total response count** | Responses tab → big number at the top |
| **Per-question summary charts** | Responses tab → "Summary" sub-tab — bar chart for each Likert item |
| **Raw CSV / Excel export** | Linked Google Sheet → File → Download → `.csv` or `.xlsx` |
| **Time-series of responses** | Linked Google Sheet → Insert → Chart → use the auto-timestamp column |
| **Per-respondent breakdown** | Responses tab → "Individual" sub-tab |

You can paste a screenshot of the **Summary** sub-tab directly into your dissertation as proof of n responses + per-item distributions.

---

## Spam / abuse protection

Google Forms gives you several knobs in **Settings → Responses**:

- **Limit to 1 response per user** — requires Google sign-in but eliminates ballot stuffing
- **Collect email addresses** — optional, useful if you want to follow up with respondents
- **Show progress bar** — improves completion rate
- **Confirmation message** — customise the "Thanks!" screen they see after submitting

For an academic study, I'd recommend **"Limit to 1 response per user"** = ON. It ensures each respondent counts once.

---

## Hosting alternatives (since Netlify is paused)

Your site is a pure-static HTML/JS folder — it can run on **any** static host. Free options:

| Host | Free tier | Setup difficulty | Notes |
|---|---|---|---|
| **GitHub Pages** | Unlimited bandwidth, public repos | 5 min | Settings → Pages → enable. Your repo is already on GitHub. |
| **Cloudflare Pages** | 500 builds/month, unlimited bandwidth | 10 min | Connect to GitHub repo, auto-deploys on push |
| **Vercel** | 100 GB bandwidth/month | 10 min | Connect to GitHub, auto-deploys on push |
| **Render** | 750 hours/month | 10 min | Static-site preset |

Caveat: if you migrate off Netlify, your **`/api/ask` Gemini proxy stops working** (it's a Netlify Function). On GitHub Pages it would 404. Options:
- Move the Gemini proxy to Cloudflare Workers (free 100k requests/day)
- Or temporarily disable Gemini AI fallback (the local FAQ still handles ~95% of questions)

For the rating system itself, the Google Forms approach is **host-agnostic** — it works the same whether the site is on Netlify, GitHub Pages, your laptop, or anywhere else.

---

## Why this is better than the previous Netlify Forms approach

| | Netlify Forms (old) | Google Forms (new) |
|---|---|---|
| **Cost** | Free tier capped at 100/month | Free, unlimited |
| **Blocked by Netlify credit limit?** | Yes — currently | No — independent |
| **Charts for assignment** | Manual (export CSV → make chart) | Auto-generated |
| **Spreadsheet integration** | Manual (CSV download) | Native (linked Sheet) |
| **Email notifications** | Yes (dashboard config) | Yes (one click) |
| **Setup time** | ~5 min | ~10 min (one-time only) |
| **Spam protection** | Honeypot only | Sign-in option + honeypot |
| **Anonymity** | Anonymous by default | Anonymous by default |
| **Works if site moves off Netlify** | No | Yes |

The trade-off: 5 extra minutes of setup, in exchange for no quota cap, no credit limit, and free charts.

---

## Troubleshooting

**"I pasted the URL but the button still opens the in-app modal."**
- The check is `RATING_FORM_URL.length > 20`. If your URL is shorter than 20 characters, lengthen it (use the full `https://docs.google.com/forms/...` form instead of the shortened `forms.gle/...`).
- Hard-refresh (Ctrl+Shift+R) — your browser may be caching the old `index.html`.
- Open DevTools Console — type `RATING_FORM_URL` and press Enter. If it's `''`, your edit didn't save.

**"The form opens but the lang param doesn't pre-fill."**
- That's expected unless you completed the **Bonus — Pre-filling** step above. The plain `?lang=id` query param is appended but Google Forms doesn't bind it automatically — you need the field's `entry.NNNNN` ID for that.

**"I want to disable the in-app modal entirely."**
- Currently, when `RATING_FORM_URL` is set, the modal never opens — clicks go straight to Google Forms. So you don't need to do anything else. The modal code is kept as a fallback in case the URL is removed (or for offline development).

**"How do I export the linked Google Sheet for my assignment?"**
- Open the Sheet → File → Download → **Microsoft Excel (.xlsx)** or **Comma-separated values (.csv)**. Both work in Excel, Sheets, or Python pandas (`pd.read_csv`).
