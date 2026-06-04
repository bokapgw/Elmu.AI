# ELUTS — Elemu Lestari Usability & Trust Survey

A **brand-new, custom evaluation instrument** for the Sari chatbot, written to replace the directly-reused CUQ. This document is your reference for:

1. The 16 new questions (copy-paste ready, bilingual) — for your Google Form
2. The academic justification — for your methodology chapter
3. How to analyse the responses (reliability, scoring) — for your results chapter

---

## ⚠️ Read this first — an honest academic note

Your lecturer asked you not to "copy-paste from the example." Two things are worth knowing:

1. **Reusing a *validated* instrument verbatim (CUQ, SUS, etc.) *with a citation* is normally good practice, not plagiarism.** Validated instruments are reused precisely *because* they are tested and comparable. So if your only worry was plagiarism, citing the CUQ would have been fine.

2. **However**, a lecturer often asks for a *custom* instrument for good reasons: to show you can *design* a measurement tool, and to *tailor* it to your specific context (an ESG-education chatbot for Indonesian retail investors — quite different from the healthcare chatbot the CUQ was built for). That is exactly what this new instrument does.

**Best move:** use this custom instrument, but in your write-up, *cite the frameworks it draws on* (below). That gives you the originality your lecturer wants **and** the academic grounding an examiner wants. If you're unsure, show her this construct table and ask if it meets her expectation before you collect more responses.

> This is guidance, not a guarantee about your specific marking scheme — always confirm with your lecturer.

---

## The instrument at a glance

- **Name:** Elemu Lestari Usability & Trust Survey (ELUTS)
- **Items:** 16 statements
- **Constructs:** 8 (2 items each — one positive, one negative)
- **Scale:** 7-point Likert (1 = Strongly Disagree → 7 = Strongly Agree)
- **Scoring:** reverse-code the negative items, sum, normalise to 0–100 (formula below)
- **Languages:** Indonesian + English (bilingual, presented together)

**Why a custom instrument is defensible (construct validity):** every item maps to an established usability/acceptance construct drawn from three foundational frameworks. The *wording* is original and ESG-specific; the *constructs* are borrowed and cited.

| Framework | What we borrowed | Reference (verify in your citation manager) |
|---|---|---|
| **CUQ** — Chatbot Usability Questionnaire | The idea of measuring chatbot personality, understanding, and error-handling; the alternating positive/negative item design | Holmes, S., Moorhead, A., Bond, R., Zheng, H., Coates, V., & McTear, M. (2019). *Usability testing of a healthcare chatbot.* Proceedings of the 31st European Conference on Cognitive Ergonomics (ECCE 2019). |
| **SUS** — System Usability Scale | Ease of use, navigation, perceived complexity; the 0–100 normalised scoring style | Brooke, J. (1996). *SUS: A 'quick and dirty' usability scale.* In *Usability Evaluation in Industry* (pp. 189–194). Taylor & Francis. |
| **TAM** — Technology Acceptance Model | Perceived usefulness and behavioural intention to use | Davis, F. D. (1989). *Perceived usefulness, perceived ease of use, and user acceptance of information technology.* MIS Quarterly, 13(3), 319–340. |

> ⚠️ I have given these references from well-known foundational sources, but **double-check the exact year, page numbers, and DOI in your own library database** before citing — don't take any reference second-hand.

---

## The 8 constructs and why each one matters here

| # | Construct | Why it matters for *this* chatbot |
|---|---|---|
| 1 | **First impression / onboarding** | Directly tests your lecturer's exact concern: does a brand-new user know how to start? |
| 2 | **Navigation** | Can users move between Chat / Learn / News without confusion? |
| 3 | **Understanding the user** | Does the rule-based NLU correctly interpret everyday Indonesian phrasing? |
| 4 | **Relevance / usefulness** | Are answers on-topic for Indonesian ESG investing specifically? |
| 5 | **Clarity of explanations** | Education goal — is jargon explained? (ties to your "Explain simply" feature) |
| 6 | **Trust / credibility** | *Critical for financial information* — do users trust the ESG facts given? |
| 7 | **Engagement / personality** | Is "Sari" pleasant and human enough to keep using? |
| 8 | **Learning value / intention** | Did it build ESG confidence? Would they use it again? (TAM behavioural intention) |

The first two constructs were added specifically in response to your lecturer's navigation feedback — a nice detail to mention in your write-up ("the instrument was refined after formative expert feedback").

---

## The 16 questions (copy-paste into your Google Form)

Each item is **English first, Indonesian second** — paste both lines into one question's title box (press Enter between them). All use the **same 1–7 Linear Scale** with labels **1 = Strongly Disagree / Sangat Tidak Setuju** and **7 = Strongly Agree / Sangat Setuju**, and all are **Required**.

> The order alternates positive / negative on purpose — this controls "acquiescence bias" (people who just agree with everything). **Keep them in this exact order**, because the scoring formula assumes odd-numbered items are positive and even-numbered items are negative.

### Q1 — First impression *(positive)*
```
When I first opened Sari, it was clear how to begin asking questions.
Saat pertama membuka Sari, jelas bagaimana cara mulai bertanya.
```
### Q2 — First impression *(negative)*
```
At the start, I felt unsure about what I could do or ask.
Di awal, saya bingung apa yang bisa saya lakukan atau tanyakan.
```
### Q3 — Navigation *(positive)*
```
Moving between the Chat, Learn, and News sections felt easy.
Berpindah antara bagian Chat, Belajar, dan Berita terasa mudah.
```
### Q4 — Navigation *(negative)*
```
I found the layout confusing to find my way around.
Menurut saya tata letaknya membingungkan untuk dijelajahi.
```
### Q5 — Understanding *(positive)*
```
Sari understood my questions, even when I used everyday language.
Sari memahami pertanyaan saya, bahkan saat saya pakai bahasa sehari-hari.
```
### Q6 — Understanding *(negative)*
```
Sari often misunderstood what I was asking.
Sari sering salah memahami maksud pertanyaan saya.
```
### Q7 — Relevance *(positive)*
```
The answers were relevant and useful for ESG investing in Indonesia.
Jawabannya relevan dan berguna untuk investasi ESG di Indonesia.
```
### Q8 — Relevance *(negative)*
```
Sari's answers often felt off-topic or unhelpful.
Jawaban Sari sering terasa melenceng atau kurang membantu.
```
### Q9 — Clarity *(positive)*
```
Sari explained ESG terms in a way that was easy to understand.
Sari menjelaskan istilah ESG dengan cara yang mudah dipahami.
```
### Q10 — Clarity *(negative)*
```
The explanations were too technical or full of jargon.
Penjelasannya terlalu teknis atau penuh istilah rumit.
```
### Q11 — Trust *(positive)*
```
I felt I could trust the ESG information Sari gave me.
Saya merasa bisa memercayai informasi ESG yang diberikan Sari.
```
### Q12 — Trust *(negative)*
```
I was unsure whether Sari's information was accurate or reliable.
Saya ragu apakah informasi Sari akurat atau dapat diandalkan.
```
### Q13 — Engagement *(positive)*
```
Chatting with Sari felt natural and pleasant.
Mengobrol dengan Sari terasa alami dan menyenangkan.
```
### Q14 — Engagement *(negative)*
```
Interacting with Sari felt robotic or impersonal.
Berinteraksi dengan Sari terasa kaku atau seperti robot.
```
### Q15 — Learning value *(positive)*
```
Using Sari made me more confident about ESG investing.
Menggunakan Sari membuat saya lebih percaya diri soal investasi ESG.
```
### Q16 — Learning intention *(negative)*
```
I would not choose a chatbot like Sari to learn about investing.
Saya tidak akan memilih chatbot seperti Sari untuk belajar investasi.
```

### Plus the open-text fields (not required)
- `Name / Nama (optional / opsional)` — Short answer
- `Comments or suggestions / Saran atau kritik (optional / opsional)` — Paragraph

### New form title & description
**Title:**
```
Rate Sari / Nilai Sari — Usability & Trust Survey
```
**Description:**
```
Help us evaluate Elemu Lestari (elmu.ai), an ESG-investing education chatbot. Please rate 16 short statements about your experience. Scale: 1 (Strongly Disagree) to 7 (Strongly Agree).

Bantu kami mengevaluasi Elemu Lestari (elmu.ai), chatbot edukasi investasi ESG. Nilai 16 pernyataan singkat tentang pengalaman kamu. Skala: 1 (Sangat Tidak Setuju) sampai 7 (Sangat Setuju).
```

---

## Scoring (same formula as before — your calculation tool still works)

For each respondent:

```
For positive items (Q1,3,5,7,9,11,13,15):  points = answer − 1     (so 7 → 6, 1 → 0)
For negative items (Q2,4,6,8,10,12,14,16):  points = 7 − answer     (so 1 → 6, 7 → 0)

Total = sum of all 16 points        (maximum = 16 × 6 = 96)
ELUTS score = Total × (100 / 96)    (gives a 0–100 score; higher = better)
```

Interpretation bands (same as the in-app result screen):

| Score | Meaning |
|---|---|
| 80–100 | Excellent usability |
| 65–79 | Good usability |
| 50–64 | Acceptable usability |
| below 50 | Below acceptable |

> Because the scale and formula are unchanged, your existing **CUQ-Calculation-Tool.xlsx** still works — you only need to update the *question wording* in the sheet's labels, not the formulas.

---

## Analysing your results (for the results chapter)

1. **Report your sample size (n).** For a Master's usability study, even **n = 8–15** is commonly accepted for formative evaluation — but state it honestly and note it as a limitation if small.

2. **Report the mean ELUTS score** and standard deviation across all respondents.

3. **Report internal-consistency reliability (Cronbach's α).** Once you have roughly **≥ 10 responses**, compute Cronbach's alpha across the 16 items (after reverse-coding the negative ones). Rule of thumb: **α ≥ 0.70** = acceptable reliability. Excel, SPSS, JASP (free), or Python (`pingouin.cronbach_alpha`) can all compute it. This single number is strong evidence your custom instrument is reliable — examiners love seeing it.

4. **Optionally report per-construct means.** Because items are grouped into 8 constructs, you can show a small bar chart: "Trust scored highest (M = …), Navigation lowest (M = …)" — this turns raw numbers into insight and directly answers your lecturer's navigation concern with data.

5. **Triangulate with the open-text comments.** Quote 2–3 representative free-text responses to add qualitative depth.

---

## How to phrase it in your methodology chapter (a template)

> *"User experience was evaluated using a purpose-built 16-item Usability & Trust Survey (ELUTS). Rather than adopting an existing instrument verbatim, the survey was designed specifically for the ESG-education context of this study, with items grounded in three established frameworks: the Chatbot Usability Questionnaire (Holmes et al., 2019), the System Usability Scale (Brooke, 1996), and the Technology Acceptance Model (Davis, 1989). Sixteen items were distributed across eight constructs — first impression, navigation, understanding, relevance, clarity, trust, engagement, and learning intention — with each construct measured by one positively- and one negatively-worded item to mitigate acquiescence bias. Responses used a 7-point Likert scale and were normalised to a 0–100 composite score. Internal consistency was assessed using Cronbach's alpha (α = …)."*

Fill in the alpha once you have it. This paragraph alone shows design competence, theoretical grounding, and methodological rigour.

---

## About your friend's existing response (the CSV)

Your friend rated Sari using the **old** CUQ questions, so that single response is **not directly compatible** with these new items. Options:

- **Simplest:** treat it as a *pilot/pre-test* response (you can mention "the instrument was piloted with one user before full deployment") and **don't** include it in the final ELUTS dataset.
- **Or:** ask your friend to re-do the new 16-question form (2 minutes) so all responses use the same instrument.

Either is fine — just don't mix old-CUQ and new-ELUTS scores in the same average, because the questions differ.

> The CSV you tried to attach didn't reach me (it came through empty). If you'd like me to look at it, drag the file into the chat again, or tell me its full path on disk and I'll read it.
