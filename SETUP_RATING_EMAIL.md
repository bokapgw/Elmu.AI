# Setting Up Email Notifications for "Nilai Sari" Ratings

Every time someone clicks **⭐ Nilai Sari**, fills out the questionnaire and submits, their response is:

1. ✅ Saved locally in their browser (so they can export it as JSON themselves)
2. ✅ Sent to **Netlify Forms** on the server (you can download a CSV anytime)
3. ✅ Emailed to you — once you complete the **5-minute setup below**

---

## How it works (architecture)

```
User clicks "Nilai Sari"
   ↓
Fills 16-question CUQ + name + comments
   ↓
Clicks Submit
   ↓
   ├─→ Saved to user's localStorage  (always works, even offline)
   └─→ POST / with form-name=sari-rating
        ↓
        Netlify's form parser catches it
        ↓
        ├─→ Logged in Netlify dashboard → Forms → sari-rating
        └─→ Email notification fired to you   ← needs one-time setup
```

There's no backend code — Netlify Forms handles everything. The hidden form template at the bottom of `index.html` is what Netlify scans at build time to register the endpoint.

---

## Step 1 — Confirm the form was detected

After your next deploy (push the latest commit, wait for Netlify to publish):

1. Open <https://app.netlify.com>
2. Click your **elemu-lestari** site
3. In the left sidebar, click **Forms**
4. You should see **`sari-rating`** in the list

If it's not there yet:
- Make sure the deploy completed successfully (Deploys tab → green "Published" badge on the latest commit)
- Hard-refresh the Forms page (Ctrl+Shift+R) — sometimes the list lags behind the deploy by a minute
- If it still doesn't appear after 2-3 minutes, check the Deploys tab → click your latest deploy → "Deploy log" — search for "form" to see Netlify's form-parsing output

---

## Step 2 — Add your email as a notification recipient

1. Still in the Netlify dashboard, click **`sari-rating`** in the Forms list
2. Click **Settings & usage** (top right of the form page)
3. Scroll down to the **Form notifications** section
4. Click **Add notification** → choose **Email notification**
5. Fill in:
   - **Event to listen for:** `New form submission`
   - **Form:** `sari-rating` (should already be selected)
   - **Email to notify:** *your email address* (e.g. `bokapgwj@gmail.com`)
6. Click **Save**

Done. Every new "Nilai Sari" submission will now land in your inbox within ~30 seconds.

---

## What you'll see in each email

Each notification email contains:

| Field | Example |
|---|---|
| `ts` | `2026-05-28T07:42:13.851Z` (when they submitted) |
| `lang` | `id` or `en` |
| `user_name` | Whatever they typed (optional) |
| `comments` | Free-text feedback (optional) |
| `cuq_score` | Final CUQ score on the 0–100 scale (e.g. `78.5`) |
| `raw_scores` | JSON array of all 16 raw scores (for academic analysis) |
| `site_url` | Page URL they were on |
| `user_agent` | Browser fingerprint (useful for "works on Chrome but not Safari" debugging) |

---

## Step 3 — Download all submissions as CSV

For your assignment writeup, you'll probably want to analyse all responses at once.

1. Netlify dashboard → your site → **Forms** → click **`sari-rating`**
2. You'll see every submission listed
3. Click **Download as CSV** (top-right of the submissions list)
4. Open in Excel / Google Sheets / Python pandas — every field is a column

The Netlify dashboard also gives you basic statistics (submission count over time, spam-filter results, etc.) at no extra cost.

---

## Quotas to be aware of

- **Free tier:** 100 form submissions per month per site
- **Pro tier:** 1,000 per month
- **Business tier:** 10,000 per month

For an academic assignment you'll be well under 100. If your project blows up, the upgrade path is one click.

If you ever bump against the free-tier ceiling, the in-page localStorage backup still works — users can manually export their own rating with the "Export Responses (JSON)" button in the modal, and you can ask them to email it to you.

---

## Spam protection (already built in)

The hidden form includes a `netlify-honeypot="bot-field"` attribute. Bots typically auto-fill every field they see, so any submission where `bot-field` is non-empty is silently dropped. You won't see spam in your inbox.

---

## Alternative — Google Forms (if you prefer)

If you'd rather use Google Forms (which has linked Sheets, charts, etc.):

1. Create a form at <https://forms.google.com> with these short-answer fields:
   - Timestamp, Language, Name, Comments, CUQ Score, Raw Scores, Site URL
2. Click **Send** → **<>** (embed icon) → copy the form URL
3. In `index.html`, find `_postRatingToNetlify(entry)` (inside `submitCUQ`) and replace it with a second `fetch` to your Google Form's submission endpoint
4. Set up email notifications inside Google Forms: **Responses** tab → 3-dot menu → **Get email notifications for new responses**

Note: Google Forms requires you to find each field's internal `entry.NNNNN` ID (open the form, inspect the input elements). It's more work than Netlify Forms — that's why Netlify Forms is the default here.

---

## Troubleshooting

**Symptom:** I submitted a test rating but no email arrived.
- Check the Netlify Forms page — is the submission there? If yes, the issue is just the email notification config (re-check Step 2).
- Check spam folder.
- Check whether the notification email is the one you can actually access (a typo here is the #1 cause).

**Symptom:** Form doesn't appear in the Netlify Forms list at all.
- The hidden detection form must be in `index.html` at deploy time. If you deployed an old version before adding it, redeploy:
  ```
  Netlify dashboard → Deploys → Trigger deploy → Clear cache and deploy site
  ```

**Symptom:** I'm seeing spam submissions.
- The `bot-field` honeypot should catch most. If something gets through, enable **reCAPTCHA** on the form: Forms page → Settings & usage → Form processing → Enable reCAPTCHA 2.
