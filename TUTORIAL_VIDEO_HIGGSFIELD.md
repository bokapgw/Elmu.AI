# Sari tutorial video, production kit (Higgsfield + screen recording)

A ~75-second "how to use Sari" video. Higgsfield generates the cinematic parts
(a talking Sari avatar + b-roll), but it cannot record your real UI, so the
actual walkthrough shots are screen recordings of the live site. You assemble
both in CapCut (free). Total hands-on time: about 30-45 minutes.

**What you need**
- A Higgsfield account (higgsfield.ai), free credits are enough for 3 short clips
- `avatar.png` from this repo (Sari's portrait, used for the talking-avatar shots)
- Windows Game Bar for screen recording: press **Win + Alt + R** to start/stop
- CapCut (free) for assembly, captions, and music
- The live site: https://bokapgw.github.io/Elmu.AI/

**Format:** 16:9 landscape, 1080p (right for an assignment submission or slide
embed). If you also want an Instagram/TikTok cut, re-frame the same timeline to
9:16 in CapCut at the end.

---

## 1 · The three Higgsfield clips (AI-generated)

Higgsfield works best with an image + a prompt. For clips A and C use their
talking-avatar / "speak" style tool and upload `avatar.png`; for clip B use
image-to-video or text-to-video with a camera preset.

**Clip A, opening hook (5 s), talking avatar**
- Upload: `avatar.png`
- Script line (Indonesian): *"Bingung mulai belajar investasi ESG? Kenalin, aku Sari."*
- Prompt/style: `Friendly young Indonesian woman in a green batik blouse, warm
  smile, speaking directly to camera, soft studio light, clean cream background,
  subtle head movement, professional but approachable`
- Camera preset: static or very slow push-in. Keep motion LOW so the lip-sync stays clean.

**Clip B, transition b-roll (4 s), cinematic**
- Prompt: `Aerial dolly-in over lush green Indonesian rice terraces transitioning
  toward a modern Jakarta skyline at golden hour, cinematic, soft haze, smooth
  slow camera movement, hopeful mood`
- Camera preset: Dolly In (slow). No text needed, captions go on top in CapCut.

**Clip C, closing CTA (5 s), talking avatar**
- Upload: `avatar.png`
- Script line: *"Gratis, tanpa daftar. Coba sekarang di elmu.ai!"*
- Same style prompt as Clip A.

> Tip: generate 2 takes of A and C and keep the one with the cleaner mouth
> movement. Short scripts (under 10 words) lip-sync far better.

---

## 2 · The five screen recordings (real UI)

Record at 100% browser zoom, one action per clip, cursor moving slowly. Before
recording, open an **incognito/private window**, that makes the site treat you
as a first-time visitor so the welcome card and starter chips appear (they are
hidden after the first visit because of localStorage).

| # | What to record (8-15 s each) | Exact actions |
|---|---|---|
| R1 | First open | Load the site, let the welcome card + 4 starter chips render, hover them slowly |
| R2 | The 3 tabs | Click Tanya → Belajar → Saran, one beat on each |
| R3 | Guided start | Back on Tanya, click the chip "Saya baru, mulai dari mana?", scroll the answer |
| R4 | Ask + simplify | Type "Apa itu greenwashing?", send, then click 💡 "Jelaskan sederhana" on the answer |
| R5 | Extras | Toggle language ID→EN, toggle dark mode, hover the "?" help button |

---

## 3 · Timeline, script, and captions

VO = voiceover. Record it yourself on your phone, or skip VO and use captions
only (works fine for an assignment). English alternates in parentheses.

| Time | Visual | VO (Indonesian) | On-screen caption |
|---|---|---|---|
| 0:00-0:05 | Clip A (avatar hook) | (spoken by avatar) | Kenalin: Sari 🌿 |
| 0:05-0:09 | Clip B (b-roll) | "Elemu Lestari, cara mudah paham investasi hijau di Indonesia." *(The easy way to understand green investing in Indonesia.)* | ELMU.AI |
| 0:09-0:17 | R1 | "Buka situsnya, langsung ada pertanyaan siap-ketuk. Nggak perlu bingung mulai dari mana." *(Open the site, tap-ready questions are waiting.)* | Langsung bisa mulai |
| 0:17-0:27 | R2 | "Ada tiga bagian: Tanya untuk ngobrol dengan Sari, Belajar untuk materi bertahap, Saran untuk rekomendasi sesuai profilmu." *(Three tabs: Ask, Learn, Advise.)* | Tanya · Belajar · Saran |
| 0:27-0:38 | R3 | "Baru pertama kali? Ketuk 'Saya baru, mulai dari mana', Sari memandu langkah demi langkah." *(New? Sari guides you step by step.)* | Dipandu Sari 🌿 |
| 0:38-0:52 | R4 | "Tanya apa saja, misalnya greenwashing. Kalau jawabannya masih terasa berat, satu tombol bikin versi sederhananya." *(Ask anything, one tap simplifies the answer.)* | 💡 Jelaskan sederhana |
| 0:52-1:02 | R5 | "Ada dua bahasa, mode gelap, dan tombol bantuan kapan pun kamu butuh." *(Two languages, dark mode, help anytime.)* | ID / EN · 🌙 |
| 1:02-1:07 | Clip C (avatar CTA) | (spoken by avatar) | bokapgw.github.io/Elmu.AI |

---

## 4 · Assembly in CapCut

1. New project, 16:9, drop clips in the order above.
2. Trim each screen recording to its beat, cut dead cursor time.
3. Add captions (Text → subtitles), white text with a soft dark backdrop, bottom third.
4. Music: pick a calm acoustic track from CapCut's royalty-free library, volume ~20% under VO.
5. Transitions: simple 0.3 s cross-dissolve between sections only, none between R-clips.
6. Export: 1080p, 30 fps, MP4.

## 5 · Honest limits

- Claude cannot log into Higgsfield or spend your credits, the three AI clips
  are the only manual generation steps, everything else here is copy-paste.
- Higgsfield renames tools between versions; whatever the current name, you
  need: (1) a talking-avatar-from-photo tool for clips A/C, (2) any
  image/text-to-video with camera presets for clip B.
- Keep the avatar clips short. Long AI lip-sync is where realism falls apart.
