/* ============================================================
   Elmu · knowledge.js
   ----------------------------------------------------------------
   EXTENDED KNOWLEDGE BASE for Sari. Add new Q&A entries here
   without touching index.html. Reload the page after editing.

   FORMAT — each entry is an object in the `entries` array:
   {
     id:        "unique-string",            // optional, used for dedup
     kw_id:     ["kata kunci","frasa lain"],// Indonesian keywords/phrases
     kw_en:     ["keyword","other phrase"], // English keywords/phrases
     a_id:      "<strong>Jawaban</strong> Anda di sini. HTML diperbolehkan.",
     a_en:      "<strong>Answer</strong> here in English. HTML allowed."
   }

   Tips:
   - Use multi-word phrases in kw_id/kw_en (e.g. "carbon credit","jetp 2025")
     because Elmu gives a +0.5 score boost for verbatim phrase matches.
   - You can use HTML in answers: <strong>, <br>, <ul><li>, <em>, <span class='accent'>.
   - Keep answers short (3-6 lines). Long walls of text are harder to read on mobile.
   - Test by reloading the page and asking Sari the keywords.
   ============================================================ */
window.KNOWLEDGE_DATA = {
  updated: "2026-05-24",
  source: "Curated knowledge extensions. Edit this file directly to add or modify entries.",
  entries: [

    {
      id:'idx-carbon',
      kw_id:['idxcarbon','idx carbon','bursa karbon','bursa karbon indonesia','perdagangan karbon','karbon kredit indonesia'],
      kw_en:['idxcarbon','idx carbon','indonesia carbon exchange','carbon trading indonesia','carbon credit indonesia'],
      a_id:"<strong>IDXCarbon</strong> 🌳 adalah Bursa Karbon Indonesia, diluncurkan resmi oleh Presiden Joko Widodo pada <strong>26 September 2023</strong>. Dikelola oleh PT Bursa Efek Indonesia (BEI) sebagai infrastruktur perdagangan unit karbon (carbon credits) dalam negeri.<br><br>" +
            "<strong>Apa yang diperdagangkan?</strong><br>" +
            "• <strong>SPE-GRK</strong> (Sertifikat Pengurangan Emisi Gas Rumah Kaca) — pengurangan emisi dari proyek hijau<br>" +
            "• <strong>PTBAE-PU</strong> — Persetujuan Teknis Batas Atas Emisi Pengguna<br><br>" +
            "<strong>Untuk investor ritel:</strong> akses langsung masih terbatas. Tapi banyak perusahaan IDX (PLN, Pertamina, Adaro, Indocement, Semen Indonesia) sudah mulai aktif di IDXCarbon — kredit karbon jadi <em>revenue stream</em> tambahan dan ukuran kepatuhan ESG.",
      a_en:"<strong>IDXCarbon</strong> 🌳 is Indonesia\'s Carbon Exchange, officially launched by President Joko Widodo on <strong>26 September 2023</strong>. Operated by Indonesia Stock Exchange (IDX) as the domestic infrastructure for trading carbon units (carbon credits).<br><br>" +
            "<strong>What\'s traded?</strong><br>" +
            "• <strong>SPE-GRK</strong> — Greenhouse Gas Emission Reduction Certificates from green projects<br>" +
            "• <strong>PTBAE-PU</strong> — Technical Approvals for Emission Upper Limits<br><br>" +
            "<strong>For retail investors:</strong> direct access is still limited. But many IDX-listed companies (PLN, Pertamina, Adaro, Indocement, Semen Indonesia) are actively trading on IDXCarbon — credits are an extra revenue stream and an ESG-compliance signal."
    },

    {
      id:'net-zero-2060',
      kw_id:['net zero','net zero 2060','target karbon','nzeb','nzeb 2060','target emisi','enhanced ndc','ndc'],
      kw_en:['net zero','net zero 2060','indonesia net zero','indonesia emission target','enhanced ndc','indonesia ndc'],
      a_id:"<strong>Net Zero Indonesia 2060</strong> 🎯 — Indonesia berkomitmen mencapai <em>net zero emissions</em> paling lambat tahun <strong>2060</strong> atau lebih cepat, sesuai dokumen <strong>Enhanced NDC</strong> (Nationally Determined Contribution) 2022.<br><br>" +
            "<strong>Target sementara:</strong><br>" +
            "• 2030: pengurangan emisi <strong>31.89%</strong> (unconditional) atau <strong>43.20%</strong> (conditional, dengan bantuan internasional) dari skenario business-as-usual<br>" +
            "• Pensiun PLTU batubara dipercepat — 2040an<br>" +
            "• Bauran energi terbarukan minimal 23% di 2025, 31% di 2050<br><br>" +
            "<strong>Implikasi investor:</strong> saham fossil fuel (Adaro, PTBA, Medco) menghadapi <em>transition risk</em>. Saham renewables, EV, dan grid infrastructure punya prospek strukturalnya.",
      a_en:"<strong>Indonesia Net Zero 2060</strong> 🎯 — Indonesia is committed to achieving <em>net zero emissions</em> by <strong>2060</strong> at the latest, or sooner, per the <strong>Enhanced NDC</strong> (Nationally Determined Contribution) 2022.<br><br>" +
            "<strong>Interim targets:</strong><br>" +
            "• 2030: emissions reduction of <strong>31.89%</strong> (unconditional) or <strong>43.20%</strong> (conditional with international aid) from business-as-usual<br>" +
            "• Accelerated coal plant retirement — by the 2040s<br>" +
            "• Renewable energy share min 23% by 2025, 31% by 2050<br><br>" +
            "<strong>Investor implications:</strong> fossil fuel stocks (Adaro, PTBA, Medco) face <em>transition risk</em>. Renewables, EVs, and grid infrastructure stocks have structural upside."
    },

    {
      id:'jetp',
      kw_id:['jetp','just energy transition','energi adil','20 miliar','transisi energi','transisi energi adil'],
      kw_en:['jetp','just energy transition','indonesia energy transition','20 billion energy','indonesia jetp'],
      a_id:"<strong>JETP Indonesia</strong> (Just Energy Transition Partnership) 🤝 adalah komitmen pendanaan <strong>USD 20 miliar</strong> dari konsorsium negara-negara maju (G7 + Norwegia + Denmark) yang dipimpin AS dan Jepang, diumumkan saat <strong>G20 Bali 2022</strong>.<br><br>" +
            "<strong>Tujuan utama:</strong><br>" +
            "• Pensiun dini PLTU batubara<br>" +
            "• Akselerasi energi terbarukan (target: 34% bauran energi di 2030, dari ~12% saat ini)<br>" +
            "• Puncak emisi sektor listrik 290 MtCO2 di 2030 (5 tahun lebih cepat)<br><br>" +
            "<strong>Komposisi USD 20 miliar:</strong> USD 10 miliar dari pemerintah negara maju, USD 10 miliar dari swasta (termasuk BlackRock, Citi, HSBC, Deutsche Bank).<br><br>" +
            "<strong>Implikasi investor ESG:</strong> saham PLN supply chain, manufaktur EV, dan green sukuk pemerintah jadi target alokasi.",
      a_en:"<strong>Indonesia JETP</strong> (Just Energy Transition Partnership) 🤝 is a <strong>USD 20 billion</strong> funding commitment from a consortium of developed countries (G7 + Norway + Denmark) led by the US and Japan, announced at <strong>G20 Bali 2022</strong>.<br><br>" +
            "<strong>Main goals:</strong><br>" +
            "• Early retirement of coal-fired power plants<br>" +
            "• Renewable energy acceleration (target: 34% energy mix by 2030, from ~12% today)<br>" +
            "• Power sector emissions to peak at 290 MtCO2 by 2030 (5 years earlier)<br><br>" +
            "<strong>USD 20B composition:</strong> USD 10B from developed-country governments, USD 10B from private sector (incl. BlackRock, Citi, HSBC, Deutsche Bank).<br><br>" +
            "<strong>ESG investor implications:</strong> PLN supply chain, EV manufacturing, and government green sukuk become allocation targets."
    },

    {
      id:'pojk-51',
      kw_id:['pojk 51','pojk 51 2017','keuangan berkelanjutan','sustainable finance pojk','aturan ojk esg','laporan keberlanjutan'],
      kw_en:['pojk 51','pojk 51 2017','sustainable finance pojk','indonesia esg regulation','sustainability report indonesia'],
      a_id:"<strong>POJK 51/2017</strong> 📋 adalah Peraturan OJK tentang Penerapan Keuangan Berkelanjutan bagi Lembaga Jasa Keuangan, Emiten, dan Perusahaan Publik.<br><br>" +
            "<strong>Kewajiban utama:</strong><br>" +
            "• <strong>Sustainability Report</strong> wajib disampaikan setiap tahun (terpisah atau terintegrasi dengan annual report)<br>" +
            "• Rencana Aksi Keuangan Berkelanjutan (RAKB) — strategi 5 tahunan<br>" +
            "• Penerapan 8 prinsip keuangan berkelanjutan (responsible investment, sustainable strategy, dll.)<br><br>" +
            "<strong>Untuk investor ritel:</strong> sebelum beli saham, cek <em>sustainability report</em> perusahaan tersebut. Yang serius akan punya laporan rinci dengan data terukur (emisi, gender ratio, training hours, dsb), bukan sekadar narasi marketing.<br><br>" +
            "<strong>Penegakan:</strong> sanksi administratif kalau tidak patuh — denda, peringatan, sampai pencabutan izin.",
      a_en:"<strong>POJK 51/2017</strong> 📋 is the OJK regulation on Sustainable Finance Implementation for Financial Service Institutions, Issuers, and Public Companies.<br><br>" +
            "<strong>Main obligations:</strong><br>" +
            "• Annual <strong>Sustainability Report</strong> required (separate or integrated with annual report)<br>" +
            "• Sustainable Finance Action Plan (RAKB) — 5-year strategy<br>" +
            "• Implementation of 8 sustainable finance principles (responsible investment, sustainable strategy, etc.)<br><br>" +
            "<strong>For retail investors:</strong> before buying a stock, check the company\'s <em>sustainability report</em>. Serious ones publish detailed reports with measurable data (emissions, gender ratio, training hours, etc.), not just marketing narratives.<br><br>" +
            "<strong>Enforcement:</strong> administrative sanctions for non-compliance — fines, warnings, up to license revocation."
    },

    {
      id:'transition-risk',
      kw_id:['transition risk','risiko transisi','stranded asset','aset terdampar','fossil fuel risk','risiko fossil','risiko karbon'],
      kw_en:['transition risk','stranded asset','fossil fuel risk','carbon risk','climate risk'],
      a_id:"<strong>Transition Risk</strong> ⚠️ adalah risiko finansial yang muncul ketika ekonomi global beralih ke <em>low-carbon</em>. Untuk investor Indonesia, ini sangat relevan karena banyak saham besar di sektor fossil fuel.<br><br>" +
            "<strong>3 jenis transition risk:</strong><br>" +
            "1. <strong>Policy risk</strong> — pajak karbon, larangan ekspor batubara, mandate energi terbarukan<br>" +
            "2. <strong>Technology risk</strong> — solar/wind/EV jadi lebih murah dari fossil → demand turun<br>" +
            "3. <strong>Market risk</strong> — investor global divest fossil fuel → harga saham anjlok<br><br>" +
            "<strong>Stranded assets:</strong> aset (tambang batubara, PLTU, kilang minyak) yang nilainya jadi nol sebelum umur ekonomisnya habis karena transisi.<br><br>" +
            "<strong>Mitigasi:</strong> diversifikasi sektor, hindari konsentrasi tinggi di fossil fuel, cek <em>transition plan</em> perusahaan (apakah mereka punya rencana shift ke renewables?).",
      a_en:"<strong>Transition Risk</strong> ⚠️ is financial risk arising when the global economy shifts to <em>low-carbon</em>. Highly relevant for Indonesian investors given the large fossil-fuel sector representation on IDX.<br><br>" +
            "<strong>3 types of transition risk:</strong><br>" +
            "1. <strong>Policy risk</strong> — carbon tax, coal export bans, renewable mandates<br>" +
            "2. <strong>Technology risk</strong> — solar/wind/EV becomes cheaper than fossil → demand drops<br>" +
            "3. <strong>Market risk</strong> — global investors divest fossil fuel → stock prices crash<br><br>" +
            "<strong>Stranded assets:</strong> assets (coal mines, coal plants, oil refineries) whose value drops to zero before economic life ends due to the transition.<br><br>" +
            "<strong>Mitigation:</strong> diversify sectors, avoid high concentration in fossil fuels, check company <em>transition plans</em> (do they have a credible shift to renewables?)."
    }

    // ↓ Add new entries below — see format at top of file ↓

  ]
};
