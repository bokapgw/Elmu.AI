# ELUTS — Elemu Lestari Usability & Trust Survey

A **brand-new, custom evaluation instrument** for the Sari chatbot, replacing the directly-reused CUQ. This is your reference for the new questions, the academic justification, and how to analyse responses.

---

## ⭐ First — clearing up the "0–100" confusion

You worried that a 0–100 scale is too much for busy people. Good news — **nobody is ever asked to rate 0–100.**

- **What a respondent actually does:** clicks a number from **1 to 5** for each short statement. (1 = Strongly Disagree → 5 = Strongly Agree.) That's the whole task.
- **The 0–100** is just the **final score *you* calculate afterwards** from their 1–5 answers, for your results chapter. The respondent never sees it.

So the scale people use is the simple, familiar **1–5**. To make it *faster*, the lever is **fewer questions** — which is why the recommended version below is only **8 questions (~1 minute)**.

---

## ✅ RECOMMENDED: the short version (8 questions · 1–5 scale · ~1 minute)

This is what your `index.html` now uses, and what I recommend for your Google Form. One question per construct, all positively worded (no confusing "do I agree it's bad?" items), so it's fast and friendly for casual respondents.

**This replaces your current 16 CUQ questions in the Google Form.** Each question:
- **Type:** Linear scale
- **Range:** 1 to 5
- **Label 1:** `Strongly Disagree / Sangat Tidak Setuju`
- **Label 5:** `Strongly Agree / Sangat Setuju`
- **Required:** Yes

Paste each two-line block (English on line 1, Indonesian on line 2) as the question title:

### Q1 — First impression
```
When I first opened Sari, it was clear how to start.
Saat pertama membuka Sari, jelas cara memulainya.
```
### Q2 — Navigation
```
Sari was easy to navigate and find my way around.
Sari mudah dijelajahi — navigasinya gampang.
```
### Q3 — Understanding
```
Sari understood my questions well.
Sari memahami pertanyaan saya dengan baik.
```
### Q4 — Usefulness
```
Sari's answers were useful and relevant to ESG investing.
Jawaban Sari berguna dan relevan untuk investasi ESG.
```
### Q5 — Clarity
```
Sari explained things in a way that was easy to understand.
Sari menjelaskan dengan cara yang mudah dipahami.
```
### Q6 — Trust
```
I could trust the information Sari gave me.
Saya bisa memercayai informasi yang diberikan Sari.
```
### Q7 — Engagement
```
Talking to Sari felt pleasant and natural.
Mengobrol dengan Sari terasa menyenangkan dan alami.
```
### Q8 — Overall / recommendation
```
Overall, I would recommend Sari for learning about ESG.
Secara keseluruhan, saya akan merekomendasikan Sari untuk belajar ESG.
```

### Plus 2 optional open-text fields (not required)
- `Name / Nama (optional / opsional)` — Short answer
- `Comments or suggestions / Saran atau kritik (optional / opsional)` — Paragraph

### New form title & description
**Title:** `Rate Sari / Nilai Sari — Quick Feedback`
**Description:**
```
Help us evaluate Elemu Lestari (elmu.ai), an ESG-investing education chatbot. 8 quick statements — about 1 minute. Scale: 1 (Strongly Disagree) to 5 (Strongly Agree).

Bantu kami mengevaluasi Elemu Lestari (elmu.ai), chatbot edukasi investasi ESG. 8 pernyataan singkat — sekitar 1 menit. Skala: 1 (Sangat Tidak Setuju) sampai 5 (Sangat Setuju).
```

---

## How to update your existing Google Form (fastest path)

You already built a form. You have two options:

**Option A — edit the existing form (keeps the same link, so `RATING_FORM_URL` stays valid):**
1. Open your form at <https://forms.google.com> → your "Nilai Sari" form
2. Delete the old questions you don't need (you're going from 16 → 8). Click each question → trash icon.
3. Change the remaining questions' **scale from 1–7 to 1–5** (if they were 7) and update the text to the 8 questions above.
4. Done — the link is unchanged, so nothing in the code needs updating.

**Option B — build a fresh form:** create a new one, then paste the new link into `RATING_FORM_URL` in `index.html` (around line 1009) and re-commit.

> **Option A is less work** because the form link stays the same.

---

## Scoring (the 0–100 you compute afterwards)

All 8 items are positive, so:

```
For each respondent:
  points = (Q1 − 1) + (Q2 − 1) + ... + (Q8 − 1)     (each item: 5 → 4 points, 1 → 0)
  maximum possible = 8 × 4 = 32
  ELUTS score = points × (100 / 32)                  (gives 0–100; higher = better)
```

Or even simpler for a quick report: just take the **average of all answers** (a number between 1 and 5) and, if you want a percentage, do `(average − 1) / 4 × 100`.

| Score | Meaning |
|---|---|
| 80–100 | Excellent |
| 65–79 | Good |
| 50–64 | Acceptable |
| below 50 | Needs improvement |

---

## ⚠️ Honest academic note (worth reading)

Your lecturer asked you not to "copy-paste from the example." Two things:

1. **Reusing a *validated* instrument verbatim *with a citation* is normally fine, not plagiarism.** So citing the CUQ would have been acceptable.
2. **But** a custom instrument tailored to *your* context (ESG education for Indonesian retail investors) shows design skill and fits better — which is likely what she wants.

This instrument gives you both: original wording, grounded in established frameworks (cited below). **Show her this construct table and confirm it meets her expectation before collecting lots of responses.**

> This is general guidance, not a guarantee about your specific marking scheme — always confirm with your lecturer.

### Construct mapping + citations (for your methodology chapter)

Each item maps to an established usability/acceptance construct:

| Q | Construct | Borrowed from |
|---|---|---|
| 1 | First impression / onboarding | CUQ |
| 2 | Navigation / ease of use | SUS |
| 3 | Understanding the user | CUQ |
| 4 | Perceived usefulness | TAM |
| 5 | Clarity of explanations | (education-specific) |
| 6 | Trust / credibility | trust-in-information literature |
| 7 | Engagement / personality | CUQ |
| 8 | Behavioural intention | TAM |

| Framework | Reference (verify exact details in your library database) |
|---|---|
| **CUQ** | Holmes, S., Moorhead, A., Bond, R., Zheng, H., Coates, V., & McTear, M. (2019). *Usability testing of a healthcare chatbot.* Proc. 31st European Conference on Cognitive Ergonomics (ECCE 2019). |
| **SUS** | Brooke, J. (1996). *SUS: A 'quick and dirty' usability scale.* In *Usability Evaluation in Industry* (pp. 189–194). Taylor & Francis. |
| **TAM** | Davis, F. D. (1989). *Perceived usefulness, perceived ease of use, and user acceptance of information technology.* MIS Quarterly, 13(3), 319–340. |

> ⚠️ I've given these foundational references in good faith — **double-check the exact year, pages, and DOI yourself** before citing. Never cite a reference second-hand.

### Methodology paragraph (template)

> *"User experience was evaluated with a purpose-built 8-item Usability & Trust Survey designed specifically for this ESG-education chatbot. Each item measured a distinct construct — first impression, navigation, understanding, usefulness, clarity, trust, engagement, and behavioural intention — grounded in three established frameworks: the Chatbot Usability Questionnaire (Holmes et al., 2019), the System Usability Scale (Brooke, 1996), and the Technology Acceptance Model (Davis, 1989). Responses used a 5-point Likert scale and were normalised to a 0–100 composite. A brief instrument was chosen to maximise completion rates among time-constrained retail-investor respondents."*

---

## Analysing the results (results chapter)

1. **Report n** (number of respondents). For a Master's formative study, n = 8–15 is commonly accepted — state it and note small n as a limitation.
2. **Report the mean ELUTS score** (and standard deviation).
3. **Reliability (Cronbach's α):** once you have ~10+ responses, compute alpha across the 8 items. α ≥ 0.70 = acceptable. Free tools: JASP, or Python `pingouin.cronbach_alpha`. (With only 8 items this is a "good-to-have"; if α is low, just report it honestly.)
4. **Per-item bar chart:** Google Forms auto-generates one per question — screenshot the "Trust" and "Navigation" items to directly show your lecturer's feedback was addressed.
5. **Quote 2–3 open-text comments** for qualitative depth.

---

## Your friend's existing response (the CSV / PDF)

Your friend rated Sari on the **old CUQ questions (5-point)**, so that single response is **not compatible** with these new items. Options:
- **Simplest:** treat it as a *pilot test* ("the instrument was piloted with one user before deployment") and don't include it in the final dataset.
- **Or:** ask your friend to redo the new 8-question form (1 minute).

Either is fine — **don't average old-CUQ and new-ELUTS scores together** (different questions).

---

## Appendix — the fuller 16-item version (only if you want more rigour)

If your lecturer wants a more rigorous psychometric instrument (2 items per construct, with reverse-coded items to control "yes-bias"), use the 16-item version below on a 1–5 scale. It takes ~2–3 minutes instead of ~1.

> Reverse-coded ("negative") items must be flipped before scoring: `points = 5 − answer`. The chatbot code handles this automatically via each item's polarity tag.

| # | Item (EN / ID) | Polarity |
|---|---|---|
| 1 | When I first opened Sari, it was clear how to begin. / Saat pertama membuka Sari, jelas cara memulainya. | + |
| 2 | At the start, I felt unsure what I could do or ask. / Di awal, saya bingung apa yang bisa saya lakukan atau tanyakan. | − |
| 3 | Moving between Chat, Learn, and News felt easy. / Berpindah antara Chat, Belajar, dan Berita terasa mudah. | + |
| 4 | I found the layout confusing. / Tata letaknya membingungkan untuk dijelajahi. | − |
| 5 | Sari understood me, even in everyday language. / Sari memahami saya, bahkan dengan bahasa sehari-hari. | + |
| 6 | Sari often misunderstood my questions. / Sari sering salah memahami pertanyaan saya. | − |
| 7 | The answers were useful and relevant to ESG investing. / Jawabannya berguna dan relevan untuk investasi ESG. | + |
| 8 | Sari's answers often felt off-topic. / Jawaban Sari sering terasa melenceng. | − |
| 9 | Sari explained ESG terms clearly. / Sari menjelaskan istilah ESG dengan jelas. | + |
| 10 | The explanations were too technical or jargon-heavy. / Penjelasannya terlalu teknis atau penuh istilah rumit. | − |
| 11 | I could trust the ESG information Sari gave. / Saya bisa memercayai informasi ESG dari Sari. | + |
| 12 | I was unsure if Sari's information was reliable. / Saya ragu apakah informasi Sari dapat diandalkan. | − |
| 13 | Chatting with Sari felt natural and pleasant. / Mengobrol dengan Sari terasa alami dan menyenangkan. | + |
| 14 | Interacting with Sari felt robotic. / Berinteraksi dengan Sari terasa kaku seperti robot. | − |
| 15 | Using Sari made me more confident about ESG. / Memakai Sari membuat saya lebih percaya diri soal ESG. | + |
| 16 | I would not use a chatbot like Sari to learn investing. / Saya tidak akan memakai chatbot seperti Sari untuk belajar investasi. | − |
