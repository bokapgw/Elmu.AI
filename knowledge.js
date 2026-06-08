/* ============================================================
   Elmu · knowledge.js
   ----------------------------------------------------------------
   EXTENDED KNOWLEDGE BASE for Sari. Add new Q&A entries here
   without touching index.html. Reload the page after editing.

   FORMAT, each entry is an object in the `entries` array:
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
  updated: "2026-05-26-v2",
  source: "Curated knowledge extensions. Edit this file directly to add or modify entries.",
  entries: [

    {
      id:'regtech-esg', intent:'definitional',
      kw_id:['regtech','reg tech','teknologi regulasi','regtech esg','regtech untuk esg','regtech indonesia','teknologi esg','teknologi pelaporan keberlanjutan','suptech'],
      kw_en:['regtech','reg tech','regulatory technology','regtech esg','regtech for esg','regtech indonesia','suptech','esg technology','esg reporting technology','technology for esg'],
      a_id:"<strong>RegTech untuk ESG di Indonesia</strong> 🛠️<br>" +
            "<strong>RegTech</strong> (Regulatory Technology) adalah teknologi/software yang membantu perusahaan memenuhi kewajiban regulasi secara lebih cepat, murah, dan akurat. Untuk ESG, RegTech menyasar bagian tersulit dari keuangan berkelanjutan: <em>mengukur dan melaporkan</em> data non-keuangan.<br><br>" +
            "<strong>Perannya di pasar Indonesia:</strong><br>" +
            "• <strong>Pelaporan keberlanjutan</strong>, bank dan emiten wajib menerbitkan Laporan Keberlanjutan sesuai <strong>POJK 51/2017</strong>. RegTech mengotomasi pengumpulan data, format, dan publikasinya.<br>" +
            "• <strong>Data &amp; rating ESG</strong>, mengumpulkan dan menilai data E/S/G (titik lemah yang nyata, MSCI menyoroti masalah kualitas data Indonesia saat krisis 2026).<br>" +
            "• <strong>Akuntansi karbon</strong>, mengukur emisi Scope 1/2/3 dan mengelola kredit untuk IDXCarbon.<br>" +
            "• <strong>SupTech</strong>, di sisi regulator, OJK memakai teknologi pengawasan untuk memantau kepatuhan dalam skala besar.<br><br>" +
            "<strong>Kenapa penting:</strong> data ESG yang andal adalah fondasi keuangan berkelanjutan yang bisa dipercaya. RegTech yang baik berarti risiko greenwashing lebih kecil. <em>(Gambaran umum, verifikasi vendor/standar spesifik ke sumber primer.)</em>",
      a_en:"<strong>RegTech for ESG in Indonesia</strong> 🛠️<br>" +
            "<strong>RegTech</strong> (Regulatory Technology) is software that helps companies meet regulatory obligations faster, cheaper, and more accurately. For ESG, it targets the hardest part of sustainable finance: <em>measuring and reporting</em> non-financial data.<br><br>" +
            "<strong>Where it fits in the Indonesian market:</strong><br>" +
            "• <strong>Sustainability reporting</strong>, banks and listed issuers must publish a Sustainability Report (<em>Laporan Keberlanjutan</em>) under OJK\'s <strong>POJK 51/2017</strong>. RegTech automates the data collection, formatting, and disclosure.<br>" +
            "• <strong>ESG data &amp; ratings</strong>, gathering and scoring E/S/G data (a real weak spot, MSCI flagged Indonesian data-quality issues in the 2026 crisis).<br>" +
            "• <strong>Carbon accounting</strong>, measuring Scope 1/2/3 emissions and managing credits for IDXCarbon.<br>" +
            "• <strong>SupTech</strong>, on the regulator side, OJK uses supervisory technology to monitor compliance at scale.<br><br>" +
            "<strong>Why it matters:</strong> reliable ESG data is the foundation of trustworthy sustainable finance. Better RegTech means fewer greenwashing risks. <em>(General overview, verify specific vendors/standards against primary sources.)</em>"
    },

    {
      id:'companies-esg-examples', intent:'definitional',
      kw_id:['perusahaan yang menerapkan','contoh perusahaan','perusahaan esg','perusahaan yang sudah menerapkan','contoh perusahaan esg','perusahaan keberlanjutan','siapa yang menerapkan','perusahaan yang menerapkan esg','contoh emiten esg','perusahaan implementasi esg'],
      kw_en:['companies implementing','which companies','company examples','examples of companies','companies that adopted','companies doing esg','companies implementing esg','companies implementing sustainable finance','who implements esg','esg companies indonesia','companies implemented','already implemented','companies that implemented','sustainable finance companies'],
      a_id:"<strong>Perusahaan Indonesia yang sudah menerapkan ESG / keuangan berkelanjutan</strong> 🇮🇩🌱<br>" +
            "Contoh yang bagus dijadikan rujukan, sebagian besar menerbitkan Laporan Keberlanjutan sesuai <strong>POJK 51/2017</strong> dan masuk indeks ESG seperti <strong>IDX ESG Leaders</strong> atau <strong>SRI-KEHATI</strong>:<br><br>" +
            "• <strong>Bank Mandiri</strong>, portofolio pembiayaan berkelanjutan, target penurunan emisi, dan penyaluran KUR ke pelaku UMKM (pilar sosial).<br>" +
            "• <strong>BCA &amp; BRI</strong>, green financing, perbankan digital tanpa kertas, program inklusi keuangan.<br>" +
            "• <strong>Telkom Indonesia</strong>, mengarahkan pusat data ke energi yang lebih hijau dan efisien.<br>" +
            "• <strong>Unilever Indonesia</strong>, sourcing berkelanjutan, pengurangan plastik, dan program akses air bersih.<br>" +
            "• <strong>BUMN energi</strong> (Pertamina, PLN), proyek transisi/hijau dan partisipasi di IDXCarbon.<br><br>" +
            "<strong>Cara verifikasi:</strong> baca <em>Laporan Keberlanjutan</em> tahunan perusahaan di halaman investor relations-nya, atau cek apakah ia konstituen indeks IDX ESG Leaders / SRI-KEHATI. <em>(Contoh untuk edukasi, selalu konfirmasi data terkini di laporan resmi perusahaan.)</em>",
      a_en:"<strong>Indonesian companies already doing ESG / sustainable finance</strong> 🇮🇩🌱<br>" +
            "Good examples to point to, most publish a Sustainability Report (<em>Laporan Keberlanjutan</em>) under <strong>POJK 51/2017</strong> and sit in ESG indices like <strong>IDX ESG Leaders</strong> or <strong>SRI-KEHATI</strong>:<br><br>" +
            "• <strong>Bank Mandiri</strong>, sustainable-financing portfolio, emission-reduction targets, and KUR micro-loans channelled to MSMEs (social pillar).<br>" +
            "• <strong>BCA &amp; BRI</strong>, green financing, paperless digital banking, financial-inclusion programs.<br>" +
            "• <strong>Telkom Indonesia</strong>, moving data centers toward greener, more efficient energy.<br>" +
            "• <strong>Unilever Indonesia</strong>, sustainable sourcing, plastic reduction, and clean-water access programs.<br>" +
            "• <strong>State energy players</strong> (Pertamina, PLN), green/transition projects and IDXCarbon participation.<br><br>" +
            "<strong>How to verify:</strong> read the company\'s annual <em>Sustainability Report</em> on its investor-relations page, or check whether it\'s a constituent of the IDX ESG Leaders / SRI-KEHATI index. <em>(Examples for education, always confirm current data in the company\'s own disclosures.)</em>"
    },

    {
      id:'idx-carbon',
      kw_id:['idxcarbon','idx carbon','bursa karbon','bursa karbon indonesia','perdagangan karbon','karbon kredit indonesia'],
      kw_en:['idxcarbon','idx carbon','indonesia carbon exchange','carbon trading indonesia','carbon credit indonesia'],
      a_id:"<strong>IDXCarbon</strong> 🌳 adalah Bursa Karbon Indonesia, diluncurkan resmi oleh Presiden Joko Widodo pada <strong>26 September 2023</strong>. Dikelola oleh PT Bursa Efek Indonesia (BEI) sebagai infrastruktur perdagangan unit karbon (carbon credits) dalam negeri.<br><br>" +
            "<strong>Apa yang diperdagangkan?</strong><br>" +
            "• <strong>SPE-GRK</strong> (Sertifikat Pengurangan Emisi Gas Rumah Kaca), pengurangan emisi dari proyek hijau<br>" +
            "• <strong>PTBAE-PU</strong>, Persetujuan Teknis Batas Atas Emisi Pengguna<br><br>" +
            "<strong>Untuk investor ritel:</strong> akses langsung masih terbatas. Tapi banyak perusahaan IDX (PLN, Pertamina, Adaro, Indocement, Semen Indonesia) sudah mulai aktif di IDXCarbon, kredit karbon jadi <em>revenue stream</em> tambahan dan ukuran kepatuhan ESG.",
      a_en:"<strong>IDXCarbon</strong> 🌳 is Indonesia\'s Carbon Exchange, officially launched by President Joko Widodo on <strong>26 September 2023</strong>. Operated by Indonesia Stock Exchange (IDX) as the domestic infrastructure for trading carbon units (carbon credits).<br><br>" +
            "<strong>What\'s traded?</strong><br>" +
            "• <strong>SPE-GRK</strong>, Greenhouse Gas Emission Reduction Certificates from green projects<br>" +
            "• <strong>PTBAE-PU</strong>, Technical Approvals for Emission Upper Limits<br><br>" +
            "<strong>For retail investors:</strong> direct access is still limited. But many IDX-listed companies (PLN, Pertamina, Adaro, Indocement, Semen Indonesia) are actively trading on IDXCarbon, credits are an extra revenue stream and an ESG-compliance signal."
    },

    {
      id:'net-zero-2060',
      kw_id:['net zero','net zero 2060','target karbon','nzeb','nzeb 2060','target emisi','enhanced ndc','ndc'],
      kw_en:['net zero','net zero 2060','indonesia net zero','indonesia emission target','enhanced ndc','indonesia ndc'],
      a_id:"<strong>Net Zero Indonesia 2060</strong> 🎯, Indonesia berkomitmen mencapai <em>net zero emissions</em> paling lambat tahun <strong>2060</strong> atau lebih cepat, sesuai dokumen <strong>Enhanced NDC</strong> (Nationally Determined Contribution) 2022.<br><br>" +
            "<strong>Target sementara:</strong><br>" +
            "• 2030: pengurangan emisi <strong>31.89%</strong> (unconditional) atau <strong>43.20%</strong> (conditional, dengan bantuan internasional) dari skenario business-as-usual<br>" +
            "• Pensiun PLTU batubara dipercepat, 2040an<br>" +
            "• Bauran energi terbarukan minimal 23% di 2025, 31% di 2050<br><br>" +
            "<strong>Implikasi investor:</strong> saham fossil fuel (Adaro, PTBA, Medco) menghadapi <em>transition risk</em>. Saham renewables, EV, dan grid infrastructure punya prospek strukturalnya.",
      a_en:"<strong>Indonesia Net Zero 2060</strong> 🎯, Indonesia is committed to achieving <em>net zero emissions</em> by <strong>2060</strong> at the latest, or sooner, per the <strong>Enhanced NDC</strong> (Nationally Determined Contribution) 2022.<br><br>" +
            "<strong>Interim targets:</strong><br>" +
            "• 2030: emissions reduction of <strong>31.89%</strong> (unconditional) or <strong>43.20%</strong> (conditional with international aid) from business-as-usual<br>" +
            "• Accelerated coal plant retirement, by the 2040s<br>" +
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
      simple_id:"<strong>POJK 51/2017</strong> itu aturan dari pengawas keuangan Indonesia (OJK) yang mewajibkan semua bank besar, perusahaan terbuka, dan lembaga keuangan di Indonesia untuk menerbitkan <em>laporan tahunan</em> tentang bagaimana mereka peduli pada lingkungan dan masyarakat, bukan cuma mengejar untung. Ini fondasi keuangan berkelanjutan Indonesia sejak 2017.<br><br><strong>Praktiknya:</strong> kalau cari saham hijau, baca Laporan Keberlanjutan emiten dulu, itu wajib mereka publikasikan karena POJK 51.",
      simple_en:"<strong>POJK 51/2017</strong> is a rule from Indonesia\'s financial regulator (OJK) that requires all big banks, listed companies, and financial institutions to publish a <em>yearly report</em> explaining how they\'re caring for the environment and society, not just chasing profit. It\'s been the foundation of sustainable finance in Indonesia since 2017.<br><br><strong>Practical takeaway:</strong> when looking for green stocks, read an issuer\'s Sustainability Report first, they\'re legally required to publish it under POJK 51.",
      a_id:"<strong>POJK 51/2017</strong> 📋 adalah Peraturan OJK tentang Penerapan Keuangan Berkelanjutan bagi Lembaga Jasa Keuangan, Emiten, dan Perusahaan Publik.<br><br>" +
            "<strong>Kewajiban utama:</strong><br>" +
            "• <strong>Sustainability Report</strong> wajib disampaikan setiap tahun (terpisah atau terintegrasi dengan annual report)<br>" +
            "• Rencana Aksi Keuangan Berkelanjutan (RAKB), strategi 5 tahunan<br>" +
            "• Penerapan 8 prinsip keuangan berkelanjutan (responsible investment, sustainable strategy, dll.)<br><br>" +
            "<strong>Untuk investor ritel:</strong> sebelum beli saham, cek <em>sustainability report</em> perusahaan tersebut. Yang serius akan punya laporan rinci dengan data terukur (emisi, gender ratio, training hours, dsb), bukan sekadar narasi marketing.<br><br>" +
            "<strong>Penegakan:</strong> sanksi administratif kalau tidak patuh, denda, peringatan, sampai pencabutan izin.",
      a_en:"<strong>POJK 51/2017</strong> 📋 is the OJK regulation on Sustainable Finance Implementation for Financial Service Institutions, Issuers, and Public Companies.<br><br>" +
            "<strong>Main obligations:</strong><br>" +
            "• Annual <strong>Sustainability Report</strong> required (separate or integrated with annual report)<br>" +
            "• Sustainable Finance Action Plan (RAKB), 5-year strategy<br>" +
            "• Implementation of 8 sustainable finance principles (responsible investment, sustainable strategy, etc.)<br><br>" +
            "<strong>For retail investors:</strong> before buying a stock, check the company\'s <em>sustainability report</em>. Serious ones publish detailed reports with measurable data (emissions, gender ratio, training hours, etc.), not just marketing narratives.<br><br>" +
            "<strong>Enforcement:</strong> administrative sanctions for non-compliance, fines, warnings, up to license revocation."
    },

    {
      id:'transition-risk',
      kw_id:['transition risk','risiko transisi','stranded asset','aset terdampar','fossil fuel risk','risiko fossil','risiko karbon'],
      kw_en:['transition risk','stranded asset','fossil fuel risk','carbon risk','climate risk'],
      a_id:"<strong>Transition Risk</strong> ⚠️ adalah risiko finansial yang muncul ketika ekonomi global beralih ke <em>low-carbon</em>. Untuk investor Indonesia, ini sangat relevan karena banyak saham besar di sektor fossil fuel.<br><br>" +
            "<strong>3 jenis transition risk:</strong><br>" +
            "1. <strong>Policy risk</strong>, pajak karbon, larangan ekspor batubara, mandate energi terbarukan<br>" +
            "2. <strong>Technology risk</strong>, solar/wind/EV jadi lebih murah dari fossil → demand turun<br>" +
            "3. <strong>Market risk</strong>, investor global divest fossil fuel → harga saham anjlok<br><br>" +
            "<strong>Stranded assets:</strong> aset (tambang batubara, PLTU, kilang minyak) yang nilainya jadi nol sebelum umur ekonomisnya habis karena transisi.<br><br>" +
            "<strong>Mitigasi:</strong> diversifikasi sektor, hindari konsentrasi tinggi di fossil fuel, cek <em>transition plan</em> perusahaan (apakah mereka punya rencana shift ke renewables?).",
      a_en:"<strong>Transition Risk</strong> ⚠️ is financial risk arising when the global economy shifts to <em>low-carbon</em>. Highly relevant for Indonesian investors given the large fossil-fuel sector representation on IDX.<br><br>" +
            "<strong>3 types of transition risk:</strong><br>" +
            "1. <strong>Policy risk</strong>, carbon tax, coal export bans, renewable mandates<br>" +
            "2. <strong>Technology risk</strong>, solar/wind/EV becomes cheaper than fossil → demand drops<br>" +
            "3. <strong>Market risk</strong>, global investors divest fossil fuel → stock prices crash<br><br>" +
            "<strong>Stranded assets:</strong> assets (coal mines, coal plants, oil refineries) whose value drops to zero before economic life ends due to the transition.<br><br>" +
            "<strong>Mitigation:</strong> diversify sectors, avoid high concentration in fossil fuels, check company <em>transition plans</em> (do they have a credible shift to renewables?)."
    },

    {
      id:'ihsg',
      kw_id:['ihsg','indeks harga saham gabungan','jakarta composite','jakarta composite index','jci','jci index','indeks gabungan','indeks saham indonesia','indeks utama','indeks bursa'],
      kw_en:['ihsg','jci','jakarta composite','jakarta composite index','indonesia main index','indonesia stock index','idx index'],
      a_id:"<strong>IHSG</strong> = <em>Indeks Harga Saham Gabungan</em> 📈 (alias <strong>JCI</strong> / Jakarta Composite Index), indeks utama Bursa Efek Indonesia yang melacak SEMUA saham yang tercatat di IDX.<br><br>" +
            "<strong>Cara baca:</strong><br>" +
            "• IHSG = 7.000 berarti rata-rata saham IDX naik dari basis 100 di tahun 1982<br>" +
            "• IHSG naik → pasar bullish, IHSG turun → pasar bearish<br>" +
            "• YTD % menunjukkan perubahan dari awal tahun<br><br>" +
            "<strong>Konteks 2026:</strong> setelah krisis MSCI Januari 2026, IHSG anjlok dari ~7.500 ke ~6.200 (turun ~17%). Mei 2026 YTD sekitar -29%.<br><br>" +
            "<strong>Cara investasi IHSG:</strong><br>" +
            "• Reksa dana indeks yang melacak IHSG (mis. <em>Reksa Dana Indeks IHSG</em>)<br>" +
            "• ETF IHSG (XIIT, XCID, dll.)<br>" +
            "• Beli sekumpulan saham LQ45 sebagai proxy aktif<br><br>" +
            "💡 IHSG bukan saham individual, kamu tidak bisa beli \"saham IHSG\". Yang dibeli adalah produk yang melacak indeksnya.",
      a_en:"<strong>IHSG</strong> = <em>Indeks Harga Saham Gabungan</em> 📈 (also called <strong>JCI</strong> / Jakarta Composite Index), the main Indonesia Stock Exchange index tracking ALL listed IDX stocks.<br><br>" +
            "<strong>How to read:</strong><br>" +
            "• IHSG = 7,000 means average IDX stock prices rose from base 100 in 1982<br>" +
            "• IHSG up → bullish market, IHSG down → bearish market<br>" +
            "• YTD % shows the change since the start of the year<br><br>" +
            "<strong>2026 context:</strong> after the January 2026 MSCI crisis, IHSG fell from ~7,500 to ~6,200 (down ~17%). May 2026 YTD around -29%.<br><br>" +
            "<strong>How to invest in IHSG:</strong><br>" +
            "• Index mutual funds tracking IHSG (e.g. <em>Reksa Dana Indeks IHSG</em>)<br>" +
            "• IHSG ETFs (XIIT, XCID, etc.)<br>" +
            "• Buy a basket of LQ45 large-caps as an active proxy<br><br>" +
            "💡 IHSG is NOT an individual stock, you can\'t buy \"IHSG shares\". You buy products that track the index."
    },
    {
      id:'esg-stocks-list',
      kw_id:['saham esg','saham yang esg','list saham esg','daftar saham esg','saham mana esg','saham apa saja esg','mau investasi esg','mau beli saham esg','invest in stocks esg','wanna invest esg','stocks that have esg','saham hijau','saham hijau indonesia','saham berkelanjutan'],
      kw_en:['esg stocks','stocks esg','list esg stocks','want invest esg','wanna invest esg','stocks that have esg','green stocks','sustainable stocks indonesia','which stocks are esg','what stocks are esg'],
      a_id:"<strong>Saham ESG di IDX</strong> 🌿, list saham yang masuk indeks ESG resmi <em>KEHATI SRI</em> dan <em>IDX ESG Leaders</em>:<br><br>" +
            "<strong>🏦 Perbankan:</strong><br>" +
            "• <strong>BBCA</strong> (Bank Central Asia), KEHATI + ESG Leaders<br>" +
            "• <strong>BMRI</strong> (Bank Mandiri), KEHATI + ESG Leaders<br>" +
            "• <strong>BBRI</strong> (Bank Rakyat Indonesia), KEHATI + ESG Leaders<br>" +
            "• <strong>BBNI</strong> (Bank Negara Indonesia), KEHATI<br><br>" +
            "<strong>📞 Telekomunikasi:</strong><br>" +
            "• <strong>TLKM</strong> (Telkom Indonesia), KEHATI + ESG Leaders<br><br>" +
            "<strong>🛒 Consumer Staples:</strong><br>" +
            "• <strong>UNVR</strong> (Unilever Indonesia), KEHATI + ESG Leaders<br>" +
            "• <strong>ICBP</strong> (Indofood CBP), KEHATI<br>" +
            "• <strong>INDF</strong> (Indofood), KEHATI<br><br>" +
            "<strong>🏭 Industrial / Auto:</strong><br>" +
            "• <strong>ASII</strong> (Astra International), KEHATI + ESG Leaders<br><br>" +
            "<strong>💊 Healthcare:</strong><br>" +
            "• <strong>KLBF</strong> (Kalbe Farma), KEHATI + ESG Leaders<br><br>" +
            "<strong>⚡ Utilities &amp; Materials:</strong><br>" +
            "• <strong>PGAS</strong> (Gas Negara) · <strong>JSMR</strong> (Jasa Marga) · <strong>SMGR</strong> (Semen Indonesia) · <strong>INTP</strong> (Indocement), semua KEHATI<br><br>" +
            "<strong>⚠ Disclaimer:</strong> Ini <em>bukan</em> rekomendasi beli/jual. Lakukan riset mandiri + konsultasi penasihat berlisensi OJK. Untuk strategi personal, pakai tab <strong>Saran</strong>.",
      a_en:"<strong>ESG Stocks on IDX</strong> 🌿, stocks listed in the official <em>KEHATI SRI</em> and <em>IDX ESG Leaders</em> indices:<br><br>" +
            "<strong>🏦 Banking:</strong><br>" +
            "• <strong>BBCA</strong> (Bank Central Asia), KEHATI + ESG Leaders<br>" +
            "• <strong>BMRI</strong> (Bank Mandiri), KEHATI + ESG Leaders<br>" +
            "• <strong>BBRI</strong> (Bank Rakyat Indonesia), KEHATI + ESG Leaders<br>" +
            "• <strong>BBNI</strong> (Bank Negara Indonesia), KEHATI<br><br>" +
            "<strong>📞 Telecom:</strong><br>" +
            "• <strong>TLKM</strong> (Telkom Indonesia), KEHATI + ESG Leaders<br><br>" +
            "<strong>🛒 Consumer Staples:</strong><br>" +
            "• <strong>UNVR</strong> (Unilever Indonesia), KEHATI + ESG Leaders<br>" +
            "• <strong>ICBP</strong> (Indofood CBP), KEHATI<br>" +
            "• <strong>INDF</strong> (Indofood), KEHATI<br><br>" +
            "<strong>🏭 Industrial / Auto:</strong><br>" +
            "• <strong>ASII</strong> (Astra International), KEHATI + ESG Leaders<br><br>" +
            "<strong>💊 Healthcare:</strong><br>" +
            "• <strong>KLBF</strong> (Kalbe Farma), KEHATI + ESG Leaders<br><br>" +
            "<strong>⚡ Utilities &amp; Materials:</strong><br>" +
            "• <strong>PGAS</strong> (Gas Negara) · <strong>JSMR</strong> (Jasa Marga) · <strong>SMGR</strong> (Semen Indonesia) · <strong>INTP</strong> (Indocement), all KEHATI<br><br>" +
            "<strong>⚠ Disclaimer:</strong> This is <em>not</em> buy/sell advice. Do your own research + consult an OJK-licensed advisor. For a personal strategy, use the <strong>Saran</strong> tab."
    },

    {
      id:'pojk-51-overview',
      kw_id:['pojk 51','pojk 51 2017','pojk 51/2017','peraturan ojk 51','keuangan berkelanjutan ojk','sustainable finance ojk','peraturan keuangan berkelanjutan'],
      kw_en:['pojk 51','pojk 51 2017','ojk regulation 51','sustainable finance regulation','indonesia sustainable finance law'],
      a_id:"<strong>POJK 51/2017</strong> 📜, Peraturan OJK <em>Nomor 51/POJK.03/2017</em> tentang Penerapan Keuangan Berkelanjutan, ditetapkan 18 Juli 2017 (Lembaran Negara 2017 No. 169).<br><br>" +
            "<strong>Siapa wajib patuh:</strong><br>" +
            "• <strong>LJK</strong> (Lembaga Jasa Keuangan), perbankan, pasar modal, asuransi, dana pensiun, pembiayaan, dll.<br>" +
            "• <strong>Emiten</strong>, pihak yang melakukan penawaran umum<br>" +
            "• <strong>Perusahaan Publik</strong>, saham dimiliki ≥300 pemegang dengan modal disetor ≥Rp3 miliar<br><br>" +
            "<strong>Inti kewajiban:</strong><br>" +
            "1. Menerapkan 8 prinsip Keuangan Berkelanjutan (Pasal 2)<br>" +
            "2. Menyusun <strong>RAKB</strong> (Rencana Aksi Keuangan Berkelanjutan) tahunan & 5-tahunan<br>" +
            "3. Menerbitkan <strong>Sustainability Report</strong> setiap tahun<br>" +
            "4. Mempublikasikan laporan di situs web paling lambat 30 April<br><br>" +
            "<strong>Sanksi pelanggaran:</strong> teguran atau peringatan tertulis (Pasal 13).",
      a_en:"<strong>POJK 51/2017</strong> 📜, OJK Regulation <em>No. 51/POJK.03/2017</em> on Sustainable Finance Implementation, issued 18 July 2017 (State Gazette 2017 No. 169).<br><br>" +
            "<strong>Who must comply:</strong><br>" +
            "• <strong>FSIs</strong> (Financial Service Institutions), banking, capital markets, insurance, pension funds, financing, etc.<br>" +
            "• <strong>Issuers</strong>, parties making public offerings<br>" +
            "• <strong>Public Companies</strong>, shares owned by ≥300 holders with paid-in capital ≥IDR 3 billion<br><br>" +
            "<strong>Core obligations:</strong><br>" +
            "1. Apply 8 Sustainable Finance principles (Article 2)<br>" +
            "2. Prepare <strong>RAKB</strong> (Sustainable Finance Action Plan) annually + 5-year horizon<br>" +
            "3. Publish a <strong>Sustainability Report</strong> every year<br>" +
            "4. Publish the report on company website by 30 April<br><br>" +
            "<strong>Sanctions:</strong> written warning or reprimand (Article 13)."
    },

    {
      id:'pojk-51-principles',
      kw_id:['8 prinsip','delapan prinsip','prinsip keuangan berkelanjutan','prinsip pojk 51','sustainable finance principles','prinsip esg ojk'],
      kw_en:['8 principles','sustainable finance principles','pojk 51 principles','principles of sustainable finance indonesia'],
      a_id:"<strong>8 Prinsip Keuangan Berkelanjutan</strong> (Pasal 2 POJK 51/2017) 🌿<br><br>" +
            "1. <strong>Investasi bertanggung jawab</strong>, pendekatan investasi yang meyakini keuntungan jangka panjang bergantung pada sistem ekonomi/sosial/lingkungan/tata kelola<br>" +
            "2. <strong>Strategi &amp; praktik bisnis berkelanjutan</strong>, meminimalkan dampak negatif &amp; mengintegrasikan ESG di setiap lini bisnis<br>" +
            "3. <strong>Pengelolaan risiko sosial &amp; lingkungan</strong>, mengintegrasikan risiko sosial/LH dalam manajemen risiko<br>" +
            "4. <strong>Tata kelola</strong>, transparan, akuntabel, bertanggung jawab, independen, setara, wajar<br>" +
            "5. <strong>Komunikasi informatif</strong>, komunikasi strategi, tata kelola, kinerja, prospek ke pemangku kepentingan<br>" +
            "6. <strong>Inklusif</strong>, pemerataan akses produk/jasa ke seluruh wilayah Indonesia, terutama masyarakat yang kurang akses<br>" +
            "7. <strong>Pengembangan sektor unggulan prioritas</strong>, porsi lebih besar untuk sektor prioritas pembangunan berkelanjutan + mitigasi iklim<br>" +
            "8. <strong>Koordinasi &amp; kolaborasi</strong>, sinergi antar pemangku kepentingan, kementerian, lembaga, sektor jasa keuangan",
      a_en:"<strong>8 Sustainable Finance Principles</strong> (POJK 51/2017 Article 2) 🌿<br><br>" +
            "1. <strong>Responsible investment</strong>, investment approach believing long-term returns depend on economic/social/environmental/governance systems<br>" +
            "2. <strong>Sustainable business strategy &amp; practice</strong>, minimizing negative impact &amp; integrating ESG across business lines<br>" +
            "3. <strong>Social &amp; environmental risk management</strong>, embedding social/environmental risk into risk management<br>" +
            "4. <strong>Governance</strong>, transparent, accountable, responsible, independent, equal, fair<br>" +
            "5. <strong>Informative communication</strong>, communicating strategy, governance, performance, prospects to stakeholders<br>" +
            "6. <strong>Inclusive</strong>, equitable access to products/services across Indonesia, especially underserved communities<br>" +
            "7. <strong>Priority sector development</strong>, larger allocation to priority sectors for sustainable development + climate mitigation<br>" +
            "8. <strong>Coordination &amp; collaboration</strong>, synergy across stakeholders, ministries, institutions, financial sector"
    },

    {
      id:'rakb-action-plan',
      kw_id:['rakb','rencana aksi keuangan berkelanjutan','sustainable finance action plan','rencana aksi ojk','action plan keuangan berkelanjutan'],
      kw_en:['rakb','sustainable finance action plan','indonesia sustainable finance action plan','ojk action plan'],
      a_id:"<strong>RAKB, Rencana Aksi Keuangan Berkelanjutan</strong> 📋 (Pasal 4–7 + Lampiran I POJK 51/2017)<br><br>" +
            "Dokumen tertulis yang wajib disusun setiap tahun oleh setiap LJK, menjelaskan rencana kegiatan untuk menerapkan Keuangan Berkelanjutan dalam <strong>jangka pendek (1 tahun)</strong> dan <strong>jangka panjang (5 tahun)</strong>.<br><br>" +
            "<strong>Wajib mencakup:</strong><br>" +
            "• Ringkasan eksekutif (visi-misi, tujuan, program, sumber daya)<br>" +
            "• Proses penyusunan (siapa yang dilibatkan, rujukan)<br>" +
            "• Faktor penentu (strategi bisnis, kapasitas, kebijakan pemerintah, dll.)<br>" +
            "• Prioritas Rencana Aksi (lihat di bawah)<br>" +
            "• Tindak lanjut &amp; sistem monitoring-evaluasi<br><br>" +
            "<strong>3 prioritas yang harus dipilih (Pasal 7):</strong><br>" +
            "a. Pengembangan <em>Produk &amp; Jasa Keuangan Berkelanjutan</em><br>" +
            "b. Pengembangan kapasitas intern LJK<br>" +
            "c. Penyesuaian organisasi, manajemen risiko, tata kelola, atau SOP<br><br>" +
            "<strong>Penyerahan:</strong> disusun Direksi, disetujui Dewan Komisaris, dikomunikasikan ke pemegang saham &amp; seluruh organisasi. Disampaikan ke OJK paling lambat 31 Januari (bagi yang tidak wajib rencana bisnis).",
      a_en:"<strong>RAKB, Sustainable Finance Action Plan</strong> 📋 (POJK 51/2017 Articles 4–7 + Annex I)<br><br>" +
            "Written document each FSI must prepare annually, describing planned activities to implement Sustainable Finance for the <strong>short term (1 year)</strong> and <strong>long term (5 years)</strong>.<br><br>" +
            "<strong>Must contain:</strong><br>" +
            "• Executive summary (vision-mission, objectives, programs, resources)<br>" +
            "• Drafting process (who is involved, references)<br>" +
            "• Determining factors (business strategy, capacity, government policy, etc.)<br>" +
            "• Action priorities (see below)<br>" +
            "• Follow-up &amp; monitoring-evaluation system<br><br>" +
            "<strong>3 priorities to choose from (Article 7):</strong><br>" +
            "a. Development of <em>Sustainable Financial Products &amp; Services</em><br>" +
            "b. Internal capacity development<br>" +
            "c. Organizational adjustment, risk management, governance, or SOP changes<br><br>" +
            "<strong>Submission:</strong> drafted by Board of Directors, approved by Board of Commissioners, communicated to shareholders &amp; all organizational levels. Submitted to OJK by 31 January (for FSIs not required to submit business plans)."
    },

    {
      id:'sustainability-report-structure',
      kw_id:['sustainability report','laporan keberlanjutan','isi sustainability report','struktur sustainability report','format laporan keberlanjutan','wajib lapor keberlanjutan'],
      kw_en:['sustainability report','sustainability report structure','sustainability report contents','sustainability report indonesia','sustainability report pojk'],
      a_id:"<strong>Struktur Laporan Keberlanjutan</strong> 📊 (Lampiran II POJK 51/2017)<br><br>" +
            "Laporan Keberlanjutan wajib memuat informasi minimum berikut:<br><br>" +
            "1. <strong>Strategi keberlanjutan</strong><br>" +
            "2. <strong>Ikhtisar kinerja ESG</strong> (3 tahun terakhir):<br>" +
            "&nbsp;&nbsp;• Ekonomi: produksi, pendapatan, laba, produk hijau, pelibatan lokal<br>" +
            "&nbsp;&nbsp;• Lingkungan: energi, emisi, limbah, keanekaragaman hayati<br>" +
            "&nbsp;&nbsp;• Sosial: dampak positif &amp; negatif ke masyarakat<br>" +
            "3. <strong>Profil singkat</strong> (visi-misi, alamat, skala, struktur saham, wilayah operasional)<br>" +
            "4. <strong>Penjelasan Direksi</strong> (kebijakan, tantangan, pencapaian)<br>" +
            "5. <strong>Tata kelola keberlanjutan</strong> (siapa bertanggung jawab, pengembangan kompetensi, manajemen risiko)<br>" +
            "6. <strong>Kinerja keberlanjutan</strong>:<br>" +
            "&nbsp;&nbsp;• Ekonomi (target vs aktual)<br>" +
            "&nbsp;&nbsp;• Sosial (ketenagakerjaan, masyarakat, TJSL)<br>" +
            "&nbsp;&nbsp;• Lingkungan (biaya LH, energi, emisi, limbah, biodiversity)<br>" +
            "&nbsp;&nbsp;• Tanggung jawab produk/jasa<br>" +
            "7. <strong>Verifikasi independen</strong> (jika ada)<br>" +
            "8. <strong>Umpan balik pembaca</strong><br><br>" +
            "<strong>Tenggat publikasi:</strong> 30 April tahun berikutnya. Wajib di-publish di situs web perusahaan.",
      a_en:"<strong>Sustainability Report Structure</strong> 📊 (POJK 51/2017 Annex II)<br><br>" +
            "The Sustainability Report must include the following minimum information:<br><br>" +
            "1. <strong>Sustainability strategy</strong><br>" +
            "2. <strong>3-year ESG performance summary</strong>:<br>" +
            "&nbsp;&nbsp;• Economic: production, revenue, profit, green products, local engagement<br>" +
            "&nbsp;&nbsp;• Environmental: energy, emissions, waste, biodiversity<br>" +
            "&nbsp;&nbsp;• Social: positive &amp; negative impact on community<br>" +
            "3. <strong>Brief profile</strong> (vision-mission, address, scale, ownership, operational regions)<br>" +
            "4. <strong>Board explanation</strong> (policy, challenges, achievements)<br>" +
            "5. <strong>Sustainability governance</strong> (who is responsible, competency development, risk management)<br>" +
            "6. <strong>Sustainability performance</strong>:<br>" +
            "&nbsp;&nbsp;• Economic (target vs actual)<br>" +
            "&nbsp;&nbsp;• Social (labor, community, CSR)<br>" +
            "&nbsp;&nbsp;• Environmental (env. cost, energy, emissions, waste, biodiversity)<br>" +
            "&nbsp;&nbsp;• Product/service responsibility<br>" +
            "7. <strong>Independent verification</strong> (if any)<br>" +
            "8. <strong>Reader feedback</strong><br><br>" +
            "<strong>Publication deadline:</strong> 30 April of the following year. Must be published on the company website."
    },

    {
      id:'pojk-51-timeline',
      kw_id:['kapan pojk 51 berlaku','timeline pojk 51','jadwal pojk 51','phase pojk 51','tahap penerapan pojk 51','siapa wajib pojk 51 duluan'],
      kw_en:['pojk 51 timeline','pojk 51 phases','pojk 51 effective date','who must comply pojk 51 first'],
      a_id:"<strong>Timeline Penerapan POJK 51/2017</strong> 📅 (Pasal 3)<br><br>" +
            "Penerapan bertahap berdasarkan ukuran &amp; jenis lembaga:<br><br>" +
            "• <strong>1 Jan 2019</strong>, Bank BUKU 3, BUKU 4, bank asing<br>" +
            "• <strong>1 Jan 2020</strong>, Bank BUKU 1 &amp; BUKU 2; perusahaan pembiayaan (konvensional &amp; syariah); modal ventura; asuransi &amp; reasuransi; LPEI; BPJS; Emiten (selain skala kecil &amp; menengah); Perusahaan Publik<br>" +
            "• <strong>1 Jan 2022</strong>, BPR BPRKU 3 + BPRS setara; perusahaan efek yang mengelola rekening efek nasabah; Emiten skala menengah<br>" +
            "• <strong>1 Jan 2024</strong>, BPR BPRKU 1 &amp; 2 + BPRS setara; Emiten skala kecil; perusahaan efek non-custodian; pergadaian; penjaminan<br>" +
            "• <strong>1 Jan 2025</strong>, Dana pensiun dengan aset ≥Rp 1 triliun<br><br>" +
            "<strong>Catatan:</strong> jika sebuah LJK juga merupakan Emiten/Perusahaan Publik, kewajiban berlaku pada tanggal yang lebih awal.",
      a_en:"<strong>POJK 51/2017 Implementation Timeline</strong> 📅 (Article 3)<br><br>" +
            "Phased rollout by institution size &amp; type:<br><br>" +
            "• <strong>1 Jan 2019</strong>, BUKU 3 &amp; BUKU 4 banks, foreign banks<br>" +
            "• <strong>1 Jan 2020</strong>, BUKU 1 &amp; BUKU 2 banks; financing companies (conventional &amp; sharia); venture capital; insurance &amp; reinsurance; LPEI; BPJS; Issuers (except small &amp; medium scale); Public Companies<br>" +
            "• <strong>1 Jan 2022</strong>, BPR BPRKU 3 + equivalent sharia BPR; securities companies managing customer accounts; medium-scale Issuers<br>" +
            "• <strong>1 Jan 2024</strong>, BPR BPRKU 1 &amp; 2 + equivalent sharia BPR; small-scale Issuers; non-custodian securities companies; pawn shops; guarantee firms<br>" +
            "• <strong>1 Jan 2025</strong>, Pension funds with assets ≥IDR 1 trillion<br><br>" +
            "<strong>Note:</strong> if an FSI is also an Issuer/Public Company, the earlier effective date applies."
    },

    {
      id:'green-projects-ojk',
      kw_id:['proyek hijau','green project indonesia','jenis proyek esg','kegiatan hijau','sektor hijau','contoh proyek keuangan berkelanjutan'],
      kw_en:['green projects indonesia','green sectors','green project examples','sustainable finance project examples'],
      a_id:"<strong>Jenis Proyek Hijau yang Diakui OJK</strong> 🌿 (Penjelasan Pasal 7 POJK 51/2017)<br><br>" +
            "Contoh proyek yang sejalan dengan Keuangan Berkelanjutan:<br><br>" +
            "• <strong>⚡ Energi terbarukan</strong>, pembangkit listrik tenaga air, panas bumi, angin, surya, biogas, biomass<br>" +
            "• <strong>💡 Efisiensi energi</strong>, penggantian chiller AC, mesin tekstil hemat energi, lampu hemat energi, renovasi gedung<br>" +
            "• <strong>🌾 Pertanian berkelanjutan</strong>, pertanian organik, wirausaha pupuk kompos<br>" +
            "• <strong>🐟 Perikanan berkelanjutan</strong>, penangkapan tanpa jala pukat harimau atau peledak<br>" +
            "• <strong>🏢 Bangunan hijau</strong>, pembangunan gedung ramah lingkungan (Greenship/LEED)<br>" +
            "• <strong>🏞️ Pariwisata ramah lingkungan</strong>, wisata yang menjaga keanekaragaman hayati, konservasi fauna<br><br>" +
            "<strong>Implikasi untuk investor:</strong> perusahaan yang fokus pada sektor-sektor ini cenderung mendapat akses pembiayaan ESG (green sukuk, green bonds) dan masuk indeks ESG IDX/KEHATI.",
      a_en:"<strong>Green Project Types Recognized by OJK</strong> 🌿 (POJK 51/2017 Article 7 Elucidation)<br><br>" +
            "Example projects aligned with Sustainable Finance:<br><br>" +
            "• <strong>⚡ Renewable energy</strong>, hydro, geothermal, wind, solar, biogas, biomass power plants<br>" +
            "• <strong>💡 Energy efficiency</strong>, chiller AC replacement, energy-efficient textile machines, LED lighting, building retrofits<br>" +
            "• <strong>🌾 Sustainable agriculture</strong>, organic farming, compost-fertilizer micro-enterprises<br>" +
            "• <strong>🐟 Sustainable fisheries</strong>, fishing without trawls or explosives<br>" +
            "• <strong>🏢 Green buildings</strong>, eco-friendly construction (Greenship/LEED certified)<br>" +
            "• <strong>🏞️ Eco-tourism</strong>, tourism preserving biodiversity, fauna conservation<br><br>" +
            "<strong>Investor implication:</strong> companies focused on these sectors tend to access ESG financing (green sukuk, green bonds) and join IDX/KEHATI ESG indices."
    },

    {
      id:'idx-esg-leaders-methodology',
      kw_id:['idx esg leaders','idxesgl','methodology idx esg','metodologi idx esg','cara hitung idx esg','idx esg leaders adalah','seleksi idx esg'],
      kw_en:['idx esg leaders','idxesgl','idx esg methodology','idx esg leaders methodology','how is idx esg leaders calculated'],
      a_id:"<strong>IDX ESG Leaders Index</strong> 🌿 (kode: <strong>IDXESGL</strong>)<br><br>" +
            "Indeks resmi BEI yang mengukur kinerja harga saham <em>leaders</em> dalam rating ESG tanpa kontroversi signifikan. Diluncurkan dengan base date <strong>4 Februari 2014</strong> (base value 100).<br><br>" +
            "<strong>Metodologi:</strong> <em>Capped Free Float Adjusted Market Capitalization Weighted Average and ESG Tilt Factored</em><br>" +
            "• Bobot maksimum per saham: <strong>15%</strong><br>" +
            "• Berbobot pada free-float (saham yang benar-benar beredar bebas), bukan total saham<br>" +
            "• Ditambah faktor <em>ESG tilt</em> dari rating risiko ESG Sustainalytics<br><br>" +
            "<strong>Universe seleksi:</strong> konstituen IDX80 yang punya rating risiko ESG dari Sustainalytics.<br><br>" +
            "<strong>3 kriteria seleksi:</strong><br>" +
            "1. Eksklusi saham dengan kontroversi kategori 4 (impact tinggi) &amp; 5 (impact parah)<br>" +
            "2. Eksklusi saham dengan rating risiko ESG <em>high</em> &amp; <em>severe</em><br>" +
            "3. Dari sisa, pilih saham dengan rating risiko ESG <strong>terendah</strong> (min 15, max 30 konstituen)<br><br>" +
            "<strong>Evaluasi periodik:</strong><br>" +
            "• <em>Major</em> (awal Maret &amp; September), seleksi ulang konstituen + adjustment ESG tilt + free-float + capping<br>" +
            "• <em>Minor</em> (awal Juni &amp; Desember), adjustment saja, tanpa seleksi ulang<br>" +
            "• Efektif: Rabu ke-3 bulan evaluasi · diumumkan ≥5 hari bursa sebelumnya",
      a_en:"<strong>IDX ESG Leaders Index</strong> 🌿 (code: <strong>IDXESGL</strong>)<br><br>" +
            "IDX's official index measuring price performance of ESG <em>leaders</em> without significant controversies. Launched with base date <strong>4 February 2014</strong> (base value 100).<br><br>" +
            "<strong>Methodology:</strong> <em>Capped Free Float Adjusted Market Capitalization Weighted Average and ESG Tilt Factored</em><br>" +
            "• Max weight per stock: <strong>15%</strong><br>" +
            "• Weighted by free-float (actually circulating shares), not total shares<br>" +
            "• Plus an <em>ESG tilt</em> factor derived from Sustainalytics ESG risk rating<br><br>" +
            "<strong>Selection universe:</strong> IDX80 constituents that have Sustainalytics ESG risk rating.<br><br>" +
            "<strong>3 selection criteria:</strong><br>" +
            "1. Exclude stocks with controversies category 4 (high impact) &amp; 5 (severe impact)<br>" +
            "2. Exclude stocks with ESG risk rating <em>high</em> &amp; <em>severe</em><br>" +
            "3. From remainder, select stocks with the <strong>lowest</strong> ESG risk ratings (min 15, max 30 constituents)<br><br>" +
            "<strong>Periodic evaluation:</strong><br>" +
            "• <em>Major</em> (early March &amp; September), full reselection + ESG tilt + free-float + capping update<br>" +
            "• <em>Minor</em> (early June &amp; December), adjustment only, no reselection<br>" +
            "• Effective: 3rd Wednesday of evaluation month · announced ≥5 exchange days prior"
    },

    {
      id:'sustainalytics-esg',
      kw_id:['sustainalytics','rating risiko esg','esg risk rating','kategori rating esg','sumber rating esg idx','controversies sustainalytics'],
      kw_en:['sustainalytics','esg risk rating','sustainalytics rating','idx esg data source','controversy ratings sustainalytics'],
      a_id:"<strong>Sustainalytics, Penyedia Data ESG IDX</strong> 📊<br><br>" +
            "<strong>Sustainalytics</strong> adalah lembaga riset ESG &amp; tata kelola global yang dimiliki Morningstar. IDX bermitra resmi dengan Sustainalytics untuk data rating ESG yang dipakai di indeks IDX ESG Leaders.<br><br>" +
            "<strong>Dua metrik utama:</strong><br>" +
            "1. <strong>ESG Risk Rating</strong>, skor risiko material ESG yang belum dikelola perusahaan<br>" +
            "&nbsp;&nbsp;• Kategori: <em>negligible · low · medium · high · severe</em><br>" +
            "&nbsp;&nbsp;• IDX mengeksklusi kategori high &amp; severe dari ESG Leaders<br>" +
            "2. <strong>Controversies Assessment</strong>, penilaian insiden/kontroversi material<br>" +
            "&nbsp;&nbsp;• Kategori 1 (minor) sampai 5 (severe)<br>" +
            "&nbsp;&nbsp;• <strong>Kategori 4</strong>: dampak tinggi ke lingkungan/masyarakat + risiko bisnis tinggi, masalah struktural/sistemik, manajemen tidak memadai<br>" +
            "&nbsp;&nbsp;• <strong>Kategori 5</strong>: dampak parah, risiko bisnis serius, perilaku <em>egregious</em>, manajemen kontroversi buruk<br>" +
            "&nbsp;&nbsp;• IDX mengeksklusi kategori 4 &amp; 5 dari ESG Leaders<br><br>" +
            "Sustainalytics melakukan asesmen ESG untuk IDX setiap <strong>Januari–Februari</strong> &amp; <strong>Juli–Agustus</strong>, dipakai sebagai dasar evaluasi major IDX ESG Leaders di Maret &amp; September.",
      a_en:"<strong>Sustainalytics, IDX's ESG Data Provider</strong> 📊<br><br>" +
            "<strong>Sustainalytics</strong> is a global ESG &amp; governance research firm owned by Morningstar. IDX officially partners with Sustainalytics for the ESG rating data used in the IDX ESG Leaders index.<br><br>" +
            "<strong>Two main metrics:</strong><br>" +
            "1. <strong>ESG Risk Rating</strong>, score of material ESG risks the company has not yet managed<br>" +
            "&nbsp;&nbsp;• Categories: <em>negligible · low · medium · high · severe</em><br>" +
            "&nbsp;&nbsp;• IDX excludes high &amp; severe categories from ESG Leaders<br>" +
            "2. <strong>Controversies Assessment</strong>, assessment of material incidents/controversies<br>" +
            "&nbsp;&nbsp;• Category 1 (minor) up to 5 (severe)<br>" +
            "&nbsp;&nbsp;• <strong>Category 4</strong>: high impact on environment/society + high business risk, structural/systemic problems, inadequate management<br>" +
            "&nbsp;&nbsp;• <strong>Category 5</strong>: severe impact, serious business risk, egregious behavior, poor controversy management<br>" +
            "&nbsp;&nbsp;• IDX excludes categories 4 &amp; 5 from ESG Leaders<br><br>" +
            "Sustainalytics conducts the ESG assessment for IDX every <strong>January–February</strong> &amp; <strong>July–August</strong>, used as input for IDX ESG Leaders major evaluations in March &amp; September."
    },

    {
      id:'esg-tilt-factor',
      kw_id:['esg tilt factor','tilt factor','rumus esg tilt','perhitungan bobot esg','z score esg','rumus idx esg','formula idx esg leaders'],
      kw_en:['esg tilt factor','tilt factor formula','idx esg weighting','z-score esg','idx esg leaders formula'],
      a_id:"<strong>ESG Tilt Factor, Rumus Matematika IDX ESG Leaders</strong> 🧮<br><br>" +
            "ESG Tilt Factor adalah <em>multiplier</em> yang membuat saham dengan ESG lebih baik mendapat bobot lebih tinggi di indeks. Dihitung dari z-score rating risiko ESG.<br><br>" +
            "<strong>Step 1, Hitung z-score per saham:</strong><br>" +
            "<code>z<sub>i</sub> = −(x<sub>i</sub> − μ) / σ</code><br>" +
            "Dimana x<sub>i</sub> = rating risiko ESG saham, μ = rata-rata, σ = standar deviasi. Tanda negatif: rating risiko ESG yang LEBIH RENDAH = z-score LEBIH TINGGI = bobot lebih besar.<br><br>" +
            "<strong>Step 2, Konversi ke ESG Tilt Factor:</strong><br>" +
            "<code>ESG_TF<sub>i</sub> = 1 + z<sub>i</sub></code> jika z ≥ 0<br>" +
            "<code>ESG_TF<sub>i</sub> = 1 / (1 − z<sub>i</sub>)</code> jika z &lt; 0<br>" +
            "Rounded ke 2 desimal.<br><br>" +
            "<strong>Step 3, Hitung market cap teradjust:</strong><br>" +
            "<code>MC<sub>i</sub> = P<sub>i</sub> × S<sub>i</sub> × FF<sub>i</sub> × ESG_TF<sub>i</sub></code><br>" +
            "Dimana P=harga, S=saham listed, FF=free-float ratio, ESG_TF=tilt factor.<br><br>" +
            "<strong>Step 4, Capping 15%:</strong> jika ada saham berbobot &gt;15%, market cap-nya dipangkas mengikuti formula <code>MC<sub>s</sub> = (s × c)/(1 − (s × c)) × MC<sub>t</sub></code>.<br><br>" +
            "<strong>Catatan free-float (sejak Maret 2021):</strong> saham scripless yang dimiliki investor &lt;5%, <em>tidak termasuk</em> saham manajemen &amp; treasury stock.",
      a_en:"<strong>ESG Tilt Factor, IDX ESG Leaders Math</strong> 🧮<br><br>" +
            "The ESG Tilt Factor is a <em>multiplier</em> that gives stocks with better ESG higher weight in the index. Computed from the z-score of the ESG risk rating.<br><br>" +
            "<strong>Step 1, Compute z-score per stock:</strong><br>" +
            "<code>z<sub>i</sub> = −(x<sub>i</sub> − μ) / σ</code><br>" +
            "Where x<sub>i</sub> = stock's ESG risk rating, μ = mean, σ = standard deviation. Negative sign: LOWER ESG risk rating = HIGHER z-score = larger weight.<br><br>" +
            "<strong>Step 2, Convert to ESG Tilt Factor:</strong><br>" +
            "<code>ESG_TF<sub>i</sub> = 1 + z<sub>i</sub></code> if z ≥ 0<br>" +
            "<code>ESG_TF<sub>i</sub> = 1 / (1 − z<sub>i</sub>)</code> if z &lt; 0<br>" +
            "Rounded to 2 decimals.<br><br>" +
            "<strong>Step 3, Compute adjusted market cap:</strong><br>" +
            "<code>MC<sub>i</sub> = P<sub>i</sub> × S<sub>i</sub> × FF<sub>i</sub> × ESG_TF<sub>i</sub></code><br>" +
            "Where P=price, S=listed shares, FF=free-float ratio, ESG_TF=tilt factor.<br><br>" +
            "<strong>Step 4, 15% cap:</strong> if any stock exceeds 15% weight, its market cap is reduced per the formula <code>MC<sub>s</sub> = (s × c)/(1 − (s × c)) × MC<sub>t</sub></code>.<br><br>" +
            "<strong>Free-float definition (since March 2021):</strong> scripless shares owned by investors with &lt;5% ownership, <em>excluding</em> management &amp; treasury stock."
    },

    {
      id:'tjsl-keuangan-berkelanjutan',
      kw_id:['tjsl','tanggung jawab sosial dan lingkungan','csr keuangan berkelanjutan','alokasi tjsl','tjsl pojk 51'],
      kw_en:['tjsl','csr indonesia','csr sustainable finance','social environmental responsibility indonesia'],
      a_id:"<strong>TJSL, Tanggung Jawab Sosial dan Lingkungan</strong> 🤝 (Pasal 8 POJK 51/2017)<br><br>" +
            "TJSL adalah istilah resmi OJK untuk <em>Corporate Social Responsibility</em> di Indonesia.<br><br>" +
            "<strong>Kewajiban:</strong><br>" +
            "• LJK yang wajib TJSL <strong>HARUS</strong> mengalokasikan sebagian dana TJSL untuk mendukung Keuangan Berkelanjutan<br>" +
            "• Emiten &amp; Perusahaan Publik non-LJK yang wajib TJSL <strong>BOLEH</strong> mengalokasikan dana TJSL untuk Keuangan Berkelanjutan<br>" +
            "• Alokasi harus dituangkan dalam RAKB; pelaporan masuk Sustainability Report<br><br>" +
            "<strong>Contoh alokasi TJSL untuk Keuangan Berkelanjutan:</strong><br>" +
            "1. Pembiayaan usaha mikro yang <em>feasible</em> tapi belum punya akses keuangan<br>" +
            "2. Pelatihan bisnis berkelanjutan untuk calon nasabah<br>" +
            "3. Kampanye <em>sustainable production &amp; consumption</em><br>" +
            "4. Subsidi premi asuransi untuk petani, nelayan, masyarakat rentan bencana",
      a_en:"<strong>TJSL, Social and Environmental Responsibility</strong> 🤝 (POJK 51/2017 Article 8)<br><br>" +
            "TJSL is OJK's official term for <em>Corporate Social Responsibility</em> in Indonesia.<br><br>" +
            "<strong>Obligations:</strong><br>" +
            "• FSIs required to do TJSL <strong>MUST</strong> allocate part of TJSL funds to support Sustainable Finance<br>" +
            "• Non-FSI Issuers &amp; Public Companies required to do TJSL <strong>MAY</strong> allocate TJSL to Sustainable Finance<br>" +
            "• Allocation must be in the RAKB; usage reported in Sustainability Report<br><br>" +
            "<strong>Examples of TJSL allocation for Sustainable Finance:</strong><br>" +
            "1. Micro-enterprise financing, <em>feasible</em> businesses lacking financial access<br>" +
            "2. Sustainable business training for prospective customers<br>" +
            "3. <em>Sustainable production &amp; consumption</em> campaigns<br>" +
            "4. Insurance premium subsidies for farmers, fishers, disaster-vulnerable communities"
    },

    {
      id:'emiten-vs-perusahaan-publik',
      kw_id:['emiten','perusahaan publik','beda emiten perusahaan publik','definisi emiten','definisi perusahaan publik','apa itu emiten','apa itu perusahaan publik'],
      kw_en:['issuer','public company','difference issuer public company','what is issuer','what is public company indonesia'],
      a_id:"<strong>Emiten vs Perusahaan Publik</strong> 🏢 (definisi OJK)<br><br>" +
            "Banyak orang mengira dua istilah ini sama, sebenarnya beda.<br><br>" +
            "<strong>Emiten</strong> = pihak yang melakukan <em>penawaran umum</em> (public offering). Biasanya menerbitkan saham/obligasi melalui IPO atau penawaran lanjutan.<br><br>" +
            "<strong>Perusahaan Publik</strong> = perseroan dengan kriteria:<br>" +
            "• Saham dimiliki paling sedikit <strong>300 pemegang</strong><br>" +
            "• Modal disetor paling sedikit <strong>Rp 3 miliar</strong><br>" +
            "• Atau jumlah lain yang ditetapkan peraturan pemerintah<br><br>" +
            "<strong>Implikasi:</strong><br>" +
            "• Semua Emiten yang tercatat di BEI biasanya juga Perusahaan Publik<br>" +
            "• Tapi sebuah Perusahaan Publik bisa saja BUKAN Emiten (jika tidak pernah <em>public offering</em>)<br>" +
            "• Keduanya WAJIB patuh POJK 51/2017 tentang Keuangan Berkelanjutan",
      a_en:"<strong>Issuer (Emiten) vs Public Company (Perusahaan Publik)</strong> 🏢 (OJK definitions)<br><br>" +
            "Many people think these are the same, they're actually different.<br><br>" +
            "<strong>Issuer</strong> = party that conducts a <em>public offering</em>. Typically issues shares/bonds through IPO or follow-on offerings.<br><br>" +
            "<strong>Public Company</strong> = a corporation meeting these criteria:<br>" +
            "• Shares owned by at least <strong>300 holders</strong><br>" +
            "• Paid-in capital of at least <strong>IDR 3 billion</strong><br>" +
            "• Or other thresholds set by government regulation<br><br>" +
            "<strong>Implications:</strong><br>" +
            "• All Issuers listed on IDX are typically also Public Companies<br>" +
            "• But a Public Company may NOT be an Issuer (if it never made a public offering)<br>" +
            "• Both MUST comply with POJK 51/2017 on Sustainable Finance"
    },

    {
      id:'buku-bank-classification',
      kw_id:['buku 1','buku 2','buku 3','buku 4','klasifikasi bank','kategori bank','bukti kegiatan usaha','bank umum buku'],
      kw_en:['buku 1','buku 2','buku 3','buku 4','indonesia bank classification','bank tier indonesia'],
      a_id:"<strong>Klasifikasi BUKU Bank Indonesia</strong> 🏦<br><br>" +
            "<strong>BUKU</strong> = <em>Bank Umum berdasarkan Kegiatan Usaha</em>. Klasifikasi OJK berdasarkan modal inti bank, menentukan kegiatan usaha yang diizinkan.<br><br>" +
            "<strong>4 tingkatan BUKU:</strong><br>" +
            "• <strong>BUKU 1</strong>, modal inti &lt; Rp 1 triliun · kegiatan paling terbatas<br>" +
            "• <strong>BUKU 2</strong>, modal inti Rp 1–5 triliun · kegiatan menengah<br>" +
            "• <strong>BUKU 3</strong>, modal inti Rp 5–30 triliun · kegiatan luas<br>" +
            "• <strong>BUKU 4</strong>, modal inti &gt; Rp 30 triliun · kegiatan paling luas, termasuk valas internasional<br><br>" +
            "<strong>Implikasi untuk Keuangan Berkelanjutan:</strong> Bank BUKU 3, BUKU 4, dan bank asing wajib patuh POJK 51 sejak <strong>1 Januari 2019</strong> (paling awal). BUKU 1 &amp; 2 mulai 2020.<br><br>" +
            "<strong>Contoh:</strong> BBCA, BMRI, BBRI, BBNI semuanya BUKU 4, wajib paling awal.",
      a_en:"<strong>Indonesian BUKU Bank Classification</strong> 🏦<br><br>" +
            "<strong>BUKU</strong> = <em>Bank Umum berdasarkan Kegiatan Usaha</em> (Commercial Banks by Business Activity). OJK classification by core capital, determining allowed activities.<br><br>" +
            "<strong>4 BUKU tiers:</strong><br>" +
            "• <strong>BUKU 1</strong>, core capital &lt; IDR 1 trillion · most limited activities<br>" +
            "• <strong>BUKU 2</strong>, core capital IDR 1–5 trillion · mid-tier activities<br>" +
            "• <strong>BUKU 3</strong>, core capital IDR 5–30 trillion · broad activities<br>" +
            "• <strong>BUKU 4</strong>, core capital &gt; IDR 30 trillion · widest activities, including international forex<br><br>" +
            "<strong>Sustainable Finance implications:</strong> BUKU 3, BUKU 4, and foreign banks must comply with POJK 51 from <strong>1 January 2019</strong> (earliest). BUKU 1 &amp; 2 start 2020.<br><br>" +
            "<strong>Examples:</strong> BBCA, BMRI, BBRI, BBNI are all BUKU 4, earliest required to comply."
    },

    {
      id:'sanksi-pelanggaran-pojk',
      kw_id:['sanksi pojk 51','hukuman pelanggaran esg','sanksi tidak lapor sustainability','sanksi keuangan berkelanjutan','apa hukumannya kalau tidak patuh esg'],
      kw_en:['pojk 51 sanctions','penalty esg violation indonesia','sustainability report sanction','non-compliance sanction esg indonesia'],
      a_id:"<strong>Sanksi Pelanggaran POJK 51/2017</strong> ⚠️ (Pasal 13)<br><br>" +
            "Sanksi yang dapat dijatuhkan OJK:<br><br>" +
            "<strong>Untuk LJK yang melanggar:</strong><br>" +
            "• Pasal 2 ayat (1), kewajiban penerapan Keuangan Berkelanjutan<br>" +
            "• Pasal 3 sampai Pasal 7, RAKB &amp; prioritas<br>" +
            "• Pasal 8 ayat (1), alokasi TJSL<br>" +
            "• Pasal 10, Sustainability Report<br>" +
            "• Pasal 12, publikasi laporan<br>" +
            "→ <strong>Sanksi administratif berupa teguran atau peringatan tertulis</strong><br><br>" +
            "<strong>Untuk Emiten/Perusahaan Publik non-LJK yang melanggar:</strong><br>" +
            "• Pasal 2 ayat (1), Pasal 10, atau Pasal 12<br>" +
            "→ Sama: <strong>teguran atau peringatan tertulis</strong><br><br>" +
            "<strong>Catatan:</strong> sanksi POJK 51 relatif ringan (teguran/peringatan). Tapi reputasi penting, perusahaan yang ditegur OJK terkait sustainability bisa kehilangan kepercayaan investor ESG (terutama dana ESG luar negeri yang punya screening ketat) dan keluar dari indeks IDX ESG Leaders / KEHATI SRI.",
      a_en:"<strong>POJK 51/2017 Violation Sanctions</strong> ⚠️ (Article 13)<br><br>" +
            "Sanctions OJK can impose:<br><br>" +
            "<strong>For FSIs violating:</strong><br>" +
            "• Article 2(1), Sustainable Finance implementation obligation<br>" +
            "• Articles 3–7, RAKB &amp; priorities<br>" +
            "• Article 8(1), TJSL allocation<br>" +
            "• Article 10, Sustainability Report<br>" +
            "• Article 12, report publication<br>" +
            "→ <strong>Administrative sanction: written warning or reprimand</strong><br><br>" +
            "<strong>For non-FSI Issuers/Public Companies violating:</strong><br>" +
            "• Article 2(1), Article 10, or Article 12<br>" +
            "→ Same: <strong>written warning or reprimand</strong><br><br>" +
            "<strong>Note:</strong> POJK 51 sanctions are relatively light (warning/reprimand). But reputation matters, a company reprimanded by OJK over sustainability can lose ESG-investor trust (especially overseas ESG funds with strict screening) and get dropped from IDX ESG Leaders / KEHATI SRI indices."
    },

    {
      id:'hybrid-esg-score',
      kw_id:['hybrid esg score','skor esg hybrid','hybrid score','komposit esg','elemu lestari esg','elmu esg score','formula esg elemu','metodologi esg elemu lestari','cara hitung skor esg sari'],
      kw_en:['hybrid esg score','composite esg score','elemu lestari esg score','sari esg formula','how is esg score calculated','esg methodology elemu'],
      a_id:"<strong>Hybrid ESG Score Elemu Lestari</strong> 🧮<br><br>" +
            "Skor komposit 0–10 yang transparan, dihitung dari 3 sumber publik (tanpa API berbayar):<br><br>" +
            "<strong>Formula:</strong><br>" +
            "<code>composite = 0.5 × pillar_avg + 0.3 × financial_health + 0.2 × membership</code><br><br>" +
            "<strong>Komponen:</strong><br>" +
            "1. <strong>Pillar avg (50%)</strong>, rata-rata E + S + G dari skor pilar ESG (saat ini illustrative; ideal: Sustainalytics/MSCI berbayar)<br>" +
            "2. <strong>Financial health (30%)</strong>, proxy dari yfinance: P/E inverse + dividend yield + log(market cap), dinormalisasi 0–10<br>" +
            "3. <strong>Membership (20%)</strong>, bonus indeks:<br>" +
            "&nbsp;&nbsp;• 10 = KEHATI + IDX ESG Leaders<br>" +
            "&nbsp;&nbsp;• 9 = IDX ESG Leaders saja<br>" +
            "&nbsp;&nbsp;• 7.5 = KEHATI saja<br>" +
            "&nbsp;&nbsp;• 5 = Syariah saja<br>" +
            "&nbsp;&nbsp;• 0 = none<br><br>" +
            "<strong>Top 5 saham (data sampel Mei 2026):</strong> ASII 8.03, TLKM 7.91, BBRI 7.84, UNVR 7.69, BMRI 7.66.<br><br>" +
            "<strong>⚠ Disclaimer:</strong> Skor ini transparan &amp; dapat di-audit, tapi BUKAN pengganti rating resmi Sustainalytics/MSCI/Bloomberg. Untuk keputusan investasi sungguhan, konsultasi penasihat berlisensi OJK.",
      a_en:"<strong>Elemu Lestari Hybrid ESG Score</strong> 🧮<br><br>" +
            "Transparent composite score 0–10, computed from 3 public sources (no paid APIs):<br><br>" +
            "<strong>Formula:</strong><br>" +
            "<code>composite = 0.5 × pillar_avg + 0.3 × financial_health + 0.2 × membership</code><br><br>" +
            "<strong>Components:</strong><br>" +
            "1. <strong>Pillar avg (50%)</strong>, average of E + S + G pillar scores (currently illustrative; ideal: paid Sustainalytics/MSCI)<br>" +
            "2. <strong>Financial health (30%)</strong>, yfinance proxy: P/E inverse + dividend yield + log(market cap), normalized 0–10<br>" +
            "3. <strong>Membership (20%)</strong>, index bonus:<br>" +
            "&nbsp;&nbsp;• 10 = KEHATI + IDX ESG Leaders<br>" +
            "&nbsp;&nbsp;• 9 = IDX ESG Leaders only<br>" +
            "&nbsp;&nbsp;• 7.5 = KEHATI only<br>" +
            "&nbsp;&nbsp;• 5 = Syariah only<br>" +
            "&nbsp;&nbsp;• 0 = none<br><br>" +
            "<strong>Top 5 stocks (May 2026 sample):</strong> ASII 8.03, TLKM 7.91, BBRI 7.84, UNVR 7.69, BMRI 7.66.<br><br>" +
            "<strong>⚠ Disclaimer:</strong> This score is transparent &amp; auditable, but is NOT a substitute for official Sustainalytics/MSCI/Bloomberg ratings. For real investment decisions, consult an OJK-licensed advisor."
    },

    {
      id:'esg-implementation-status',
      kw_id:['implementasi esg','penerapan esg','status esg indonesia','esg di indonesia','esg di perusahaan indonesia','seberapa baik esg','seberapa bagus esg','perusahaan esg indonesia','adopsi esg','kemajuan esg','progress esg'],
      kw_en:['esg implementation','esg adoption','esg progress','how well esg','esg in indonesian companies','esg status indonesia','esg maturity indonesia','esg progress indonesia'],
      a_id:"<strong>Status implementasi ESG di Perusahaan Indonesia</strong> 📊<br><br>" +
            "<strong>Hal yang sudah baik:</strong><br>" +
            "• <strong>Compliance reporting tinggi</strong>, hampir semua emiten LQ45 publikasi Sustainability Report tahunan (wajib per POJK 51/2017)<br>" +
            "• <strong>Leaders konsisten</strong>: BBCA, Telkom, Unilever, Astra, laporan rinci, target terukur, third-party assured<br>" +
            "• <strong>Green Sukuk pioneer</strong>: Indonesia negara pertama dunia (2018), komitmen pasar resmi<br>" +
            "• <strong>IDXCarbon online sejak 2023</strong>, infrastruktur perdagangan kredit karbon domestik<br><br>" +
            "<strong>Tantangan nyata:</strong><br>" +
            "• <strong>Kualitas laporan bervariasi</strong>, banyak yang sekadar narasi marketing, sedikit data terukur<br>" +
            "• <strong>Greenwashing</strong> di sektor sawit &amp; batubara, klaim hijau tanpa praktik substansial<br>" +
            "• <strong>Pilar G (Governance) lemah</strong>, krisis MSCI Januari 2026 mengungkap masalah transparansi <em>free-float</em> &amp; <em>beneficial ownership</em><br>" +
            "• <strong>UMKM &amp; non-LQ45</strong> umumnya belum siap, biaya audit ESG mahal<br><br>" +
            "<strong>Tren positif 2026:</strong><br>" +
            "• OJK turunkan ambang wajib lapor kepemilikan dari 5% ke 1% (pasca MSCI)<br>" +
            "• Aturan finfluencer makin ketat (POJK 13/2025)<br>" +
            "• JETP USD 20 miliar akselerasi transisi energi<br><br>" +
            "<strong>Kesimpulan:</strong> Indonesia <em>maju</em> di kerangka regulasi (POJK 51, Roadmap II) tapi <em>terlambat</em> di kualitas substansi. Investor ritel ESG perlu skeptis, cross-check minimal 2 sumber, dan baca sustainability report sendiri.",
      a_en:"<strong>ESG Implementation Status in Indonesian Companies</strong> 📊<br><br>" +
            "<strong>What\'s working:</strong><br>" +
            "• <strong>High compliance reporting</strong>, almost all LQ45 issuers publish annual Sustainability Reports (mandatory per POJK 51/2017)<br>" +
            "• <strong>Consistent leaders</strong>: BBCA, Telkom, Unilever, Astra, detailed reports, measurable targets, third-party assured<br>" +
            "• <strong>Green Sukuk pioneer</strong>: Indonesia was the world\'s first issuer (2018), formal market commitment<br>" +
            "• <strong>IDXCarbon online since 2023</strong>, domestic carbon credit trading infrastructure<br><br>" +
            "<strong>Real challenges:</strong><br>" +
            "• <strong>Report quality varies</strong>, many are just marketing narrative with little measurable data<br>" +
            "• <strong>Greenwashing</strong> in palm oil &amp; coal sectors, green claims without substantive practice<br>" +
            "• <strong>G pillar weak</strong>, January 2026 MSCI crisis exposed <em>free-float</em> &amp; <em>beneficial ownership</em> transparency issues<br>" +
            "• <strong>SMEs &amp; non-LQ45</strong> mostly not ready, ESG audit costs are high<br><br>" +
            "<strong>Positive 2026 trends:</strong><br>" +
            "• OJK lowered mandatory ownership disclosure from 5% to 1% (post-MSCI)<br>" +
            "• Stricter finfluencer rules (POJK 13/2025)<br>" +
            "• JETP USD 20 billion accelerating energy transition<br><br>" +
            "<strong>Bottom line:</strong> Indonesia is <em>ahead</em> on regulatory framework (POJK 51, Roadmap II) but <em>behind</em> on substance quality. ESG retail investors need to be skeptical, cross-check at least 2 sources, and read sustainability reports themselves."
    },

    {
      id:'green-taxonomy-tkbi',
      kw_id:['taksonomi hijau','green taxonomy','tkbi','taksonomi indonesia','taksonomi keuangan berkelanjutan','klasifikasi hijau','aktivitas hijau','aktivitas transisi','hijau transisi tidak memenuhi'],
      kw_en:['indonesia green taxonomy','tkbi','taxonomy for sustainable finance','green taxonomy indonesia','green transition unqualified','sustainable finance taxonomy'],
      simple_id:"<strong>TKBI</strong> itu buku aturan resmi Indonesia untuk menentukan kegiatan bisnis mana yang masuk kategori \"benar-benar hijau\", \"sedang menuju hijau\", atau \"belum hijau sama sekali\". Pakai sistem lampu lalu lintas: <strong>Hijau</strong> = sejalan dengan target iklim, <strong>Kuning/Transisi</strong> = sedang bertransisi, <strong>Merah/Tidak Memenuhi</strong> = masih merusak.<br><br><strong>Praktiknya:</strong> bank pakai TKBI untuk memutuskan proyek mana yang layak dapat pembiayaan hijau. Investor bisa pakai TKBI sebagai pembanding: kalau klaim emiten tidak sejalan dengan TKBI, hati-hati greenwashing.",
      simple_en:"<strong>TKBI</strong> is Indonesia\'s official rulebook for deciding which business activities count as \"truly green\", \"getting greener\", or \"not green at all\". It uses a traffic-light system: <strong>Green</strong> = aligned with climate goals, <strong>Yellow/Transition</strong> = transitioning to green, <strong>Red/Unqualified</strong> = still harmful.<br><br><strong>Practical takeaway:</strong> banks use TKBI to decide which projects deserve green financing. Investors can use TKBI as a benchmark, if a company\'s claims don\'t align with TKBI, watch out for greenwashing.",
      a_id:"<strong>Taksonomi Keuangan Berkelanjutan Indonesia (TKBI)</strong> 🌿<br><br>" +
            "TKBI adalah klasifikasi resmi OJK untuk aktivitas ekonomi yang mendukung tujuan pembangunan berkelanjutan Indonesia, mencakup aspek ekonomi, lingkungan, dan sosial. Versi pertama (Green Taxonomy 1.0) terbit Januari 2022, kemudian diperluas jadi TKBI v1 (sektor energi, 2024) dan TKBI v2 (Februari 2025) menambah <em>Construction &amp; Real Estate</em>, <em>Transportation &amp; Storage</em>, dan beberapa aktivitas AFOLU.<br><br>" +
            "<strong>3 Kategori Klasifikasi:</strong><br>" +
            "• <strong>Hijau (Green)</strong>, sejalan dengan target Paris Agreement (≤1.5°C) &amp; <em>Net Zero 2060</em>, tidak menyebabkan kerusakan ke aspek lain (DNSH), memenuhi seluruh aspek sosial<br>" +
            "• <strong>Transisi (Transition)</strong>, belum hijau, tapi punya rencana perbaikan, mendorong pengurangan emisi signifikan dalam jangka pendek/menengah<br>" +
            "• <strong>Tidak Memenuhi (Unqualified)</strong>, terdaftar di TKBI tapi tidak memenuhi kriteria Hijau maupun Transisi<br><br>" +
            "<strong>Untuk investor:</strong> TKBI jadi rujukan utama saat menilai apakah proyek/emiten benar-benar berkontribusi pada agenda keberlanjutan, bukan sekadar greenwashing. Menggunakan ASEAN Taxonomy for Sustainable Finance sebagai referensi utama.",
      a_en:"<strong>Indonesia Taxonomy for Sustainable Finance (TKBI)</strong> 🌿<br><br>" +
            "TKBI is OJK's official classification of economic activities supporting Indonesia's Sustainable Development Goals, covering economic, environmental, and social aspects. First version (Green Taxonomy 1.0) launched January 2022, expanded to TKBI v1 (energy sector, 2024) and TKBI v2 (February 2025) adding <em>Construction &amp; Real Estate</em>, <em>Transportation &amp; Storage</em>, and select AFOLU activities.<br><br>" +
            "<strong>3 Classification Categories:</strong><br>" +
            "• <strong>Green</strong>, aligned with Paris Agreement (≤1.5°C) &amp; <em>Net Zero 2060</em>, does no significant harm (DNSH), meets all social aspects<br>" +
            "• <strong>Transition</strong>, not yet green, but has improvement plan, drives significant emission reductions in short/medium term<br>" +
            "• <strong>Unqualified</strong>, listed in TKBI but meets neither Green nor Transition criteria<br><br>" +
            "<strong>For investors:</strong> TKBI is the primary reference to assess whether a project/issuer genuinely contributes to the sustainability agenda, not just greenwashing. Built on the ASEAN Taxonomy for Sustainable Finance as main reference."
    },

    {
      id:'sovereign-green-sukuk',
      kw_id:['sovereign green sukuk','green sukuk','sukuk hijau','sukuk negara','sukuk hijau ritel','retail green sukuk','sdg bond','blue bond','sukuk hijau pemerintah','obligasi hijau pemerintah'],
      kw_en:['sovereign green sukuk','green sukuk','retail green sukuk','indonesia green sukuk','sdg bond indonesia','blue bond indonesia','sovereign sustainable bond'],
      a_id:"<strong>Sovereign Green Sukuk Indonesia</strong> 🏛️<br><br>" +
            "Indonesia adalah <strong>negara pertama di dunia</strong> yang menerbitkan Sovereign Green Sukuk (Maret 2018), sukuk negara berdasarkan prinsip syariah yang seluruh hasilnya untuk membiayai proyek hijau. Sampai 2023, akumulasi penerbitan mencapai <strong>USD 6 miliar</strong> di pasar global dan <strong>IDR 30,68 triliun</strong> di pasar domestik retail (lebih dari 80.000 investor ritel).<br><br>" +
            "<strong>9 Sektor Eligible (Green Bond/Sukuk Framework):</strong><br>" +
            "1. Energi terbarukan • 2. Teknologi bersih untuk pembangkit • 3. Pengelolaan energi &amp; limbah • 4. Pengelolaan SDA berkelanjutan • 5. Pertanian berkelanjutan • 6. Transportasi berkelanjutan • 7. Green tourism • 8. Green building • 9. Ketahanan iklim untuk wilayah rawan bencana<br><br>" +
            "<strong>Instrumen sejenis:</strong><br>" +
            "• <strong>SDG Bond Global</strong> (USD 1,26 miliar), Green Focus + Social Focus + Blue Focus<br>" +
            "• <strong>Blue Bond</strong> (JPY 20,7 miliar, 2023), pengembangan laut &amp; aktivitas blue carbon<br>" +
            "• <strong>Sukuk Hijau Ritel (ST/SR seri)</strong>, minimum Rp 1 juta, cocok untuk investor pemula<br><br>" +
            "<em>Distribusi kumulatif:</em> 74% air bersih &amp; pengelolaan limbah, 25% ketahanan iklim, selaras dengan SDG 6, 11, 13.",
      a_en:"<strong>Sovereign Green Sukuk Indonesia</strong> 🏛️<br><br>" +
            "Indonesia is the <strong>world's first country</strong> to issue a Sovereign Green Sukuk (March 2018), sharia-based sovereign bonds whose entire proceeds fund green projects. By 2023, cumulative issuance reached <strong>USD 6 billion</strong> in global markets and <strong>IDR 30.68 trillion</strong> in domestic retail (over 80,000 retail investors).<br><br>" +
            "<strong>9 Eligible Sectors (Green Bond/Sukuk Framework):</strong><br>" +
            "1. Renewable energy • 2. Clean technology for power generation • 3. Energy &amp; waste management • 4. Sustainable natural resource management • 5. Sustainable agriculture • 6. Sustainable transport • 7. Green tourism • 8. Green building • 9. Climate resilience for disaster-prone areas<br><br>" +
            "<strong>Related instruments:</strong><br>" +
            "• <strong>Global SDG Bond</strong> (USD 1.26 bn), Green + Social + Blue Focus<br>" +
            "• <strong>Blue Bond</strong> (JPY 20.7 bn, 2023), marine and blue carbon activities<br>" +
            "• <strong>Retail Green Sukuk (ST/SR series)</strong>, minimum Rp 1 million, beginner-friendly<br><br>" +
            "<em>Cumulative distribution:</em> 74% water &amp; wastewater management, 25% climate resilience, aligned with SDG 6, 11, 13."
    },

    {
      id:'enhanced-ndc',
      kw_id:['enhanced ndc','endc','nationally determined contribution','target emisi indonesia','target emisi 2030','komitmen emisi paris','ndc indonesia','target paris agreement'],
      kw_en:['enhanced ndc','endc','nationally determined contribution','indonesia emission target','paris agreement target','indonesia 2030 emission','ndc indonesia'],
      a_id:"<strong>Enhanced NDC (ENDC) Indonesia</strong> 🎯<br><br>" +
            "Pada 2022, Pemerintah Indonesia menyerahkan <strong>Enhanced Nationally Determined Contribution</strong> ke UNFCCC, target pengurangan emisi gas rumah kaca yang lebih ambisius hingga 2030 dibanding NDC 2016 (29%) dan Updated NDC 2021.<br><br>" +
            "<strong>Target Pengurangan Emisi 2030:</strong><br>" +
            "• <strong>31.89%</strong> dengan kapasitas finansial sendiri (<em>unconditional</em>), 915 juta ton CO2e<br>" +
            "• <strong>43.2%</strong> dengan dukungan internasional (<em>conditional</em>), 1.239,5 juta ton CO2e<br><br>" +
            "<strong>Rincian per sektor (CM1, unconditional, M ton CO2e):</strong><br>" +
            "• Kehutanan (FOLU): 500 • Energi &amp; Transportasi: 358 • Limbah: 40 • Pertanian: 10 • IPPU: 7<br><br>" +
            "<strong>Kebutuhan finansial:</strong> ~USD 281 miliar (~Rp 4.002 triliun) hanya untuk mencapai target 29% NDC sebelumnya, angka untuk ENDC masih dihitung. Pendanaan APBN rata-rata Rp 100,4 triliun/tahun (2016-2021) hanya menutupi 29,2% kebutuhan ideal.<br><br>" +
            "<strong>Visi jangka panjang (LTS-LCCR 2050):</strong> Net Zero Emission 2060 atau lebih cepat, dengan FOLU Net Sink 2030. Mandat: Paris Agreement Article 4.19 &amp; Dec.1/CP.21 Para 35.",
      a_en:"<strong>Indonesia's Enhanced NDC (ENDC)</strong> 🎯<br><br>" +
            "In 2022, the Government of Indonesia submitted its <strong>Enhanced Nationally Determined Contribution</strong> to the UNFCCC, a more ambitious GHG emission reduction target by 2030 compared to the 2016 NDC (29%) and 2021 Updated NDC.<br><br>" +
            "<strong>2030 Emission Reduction Targets:</strong><br>" +
            "• <strong>31.89%</strong> with own financial capacity (<em>unconditional</em>), 915 million ton CO2e<br>" +
            "• <strong>43.2%</strong> with international support (<em>conditional</em>), 1,239.5 million ton CO2e<br><br>" +
            "<strong>Sector breakdown (CM1, unconditional, M ton CO2e):</strong><br>" +
            "• Forestry (FOLU): 500 • Energy &amp; Transport: 358 • Waste: 40 • Agriculture: 10 • IPPU: 7<br><br>" +
            "<strong>Financial need:</strong> ~USD 281 billion (~Rp 4,002 trillion) just to achieve the previous 29% NDC target, ENDC figure still being calculated. State budget averages Rp 100.4 trillion/year (2016-2021), covering only 29.2% of the ideal need.<br><br>" +
            "<strong>Long-term vision (LTS-LCCR 2050):</strong> Net Zero Emission by 2060 or sooner, with FOLU Net Sink by 2030. Mandate: Paris Agreement Article 4.19 &amp; Dec.1/CP.21 Para 35."
    },

    {
      id:'etm-energy-transition',
      kw_id:['etm','energy transition mechanism','transisi energi','pensiun dini pltu','phase out batubara','cfpp','coal fired power plant','pln pensiun dini','batubara pensiun'],
      kw_en:['energy transition mechanism','etm indonesia','coal phase out indonesia','cfpp early retirement','pln coal retirement','energy transition partnership'],
      a_id:"<strong>Energy Transition Mechanism (ETM)</strong> ⚡<br><br>" +
            "ETM adalah platform pendanaan inovatif Indonesia yang diluncurkan di KTT G20 Bali (2022) untuk mempercepat transisi energi. Dikelola oleh <strong>PT Sarana Multi Infrastruktur (SMI)</strong> sebagai <em>country platform</em>.<br><br>" +
            "<strong>3 Tujuan Utama:</strong><br>" +
            "1. Mengoptimalkan bauran energi sesuai Kebijakan Energi Nasional<br>" +
            "2. Meningkatkan pengurangan emisi di sub-sektor listrik untuk mencapai target NDC &amp; NZE<br>" +
            "3. <strong>Mempercepat pensiun dini Pembangkit Listrik Tenaga Uap (PLTU) batubara</strong><br><br>" +
            "<strong>Roadmap Pembangkit ETM:</strong><br>" +
            "• 2030: 66% pembangkitan dari Energi Terbarukan<br>" +
            "• 2050: hampir 0% dari batubara<br>" +
            "• 2060: Net Zero Emission sektor listrik<br><br>" +
            "<strong>Sinergi dengan JETP:</strong> ETM &amp; JETP saling melengkapi, JETP USD 21,6 miliar dari IPG (negara G7+) dan GFANZ (Bank of America, Citi, HSBC, MUFG, Standard Chartered, dll) untuk akselerasi 34% renewable energy di 2030. <em>JETP Indonesia adalah upaya pendanaan transisi energi individual terbesar di dunia.</em><br><br>" +
            "Per CIPP 2023, dibutuhkan <strong>USD 97,3 miliar</strong> hingga 2030 untuk just transition; 400+ proyek prioritas senilai USD 66,9 miliar siap diinisiasi.",
      a_en:"<strong>Energy Transition Mechanism (ETM)</strong> ⚡<br><br>" +
            "ETM is Indonesia's innovative financing platform launched at the G20 Bali Summit (2022) to accelerate energy transition. Managed by <strong>PT Sarana Multi Infrastruktur (SMI)</strong> as the <em>country platform</em>.<br><br>" +
            "<strong>3 Main Objectives:</strong><br>" +
            "1. Optimize energy mix per National Energy Policy<br>" +
            "2. Enhance emission reduction in the electricity sub-sector to achieve NDC &amp; NZE targets<br>" +
            "3. <strong>Accelerate early retirement of Coal-Fired Power Plants (CFPPs)</strong><br><br>" +
            "<strong>ETM Power Generation Roadmap:</strong><br>" +
            "• 2030: 66% generation from Renewable Energy<br>" +
            "• 2050: near 0% from coal<br>" +
            "• 2060: Net Zero Emission in electricity sector<br><br>" +
            "<strong>Synergy with JETP:</strong> ETM &amp; JETP are complementary, JETP USD 21.6 billion from IPG (G7+ countries) and GFANZ (Bank of America, Citi, HSBC, MUFG, Standard Chartered, etc.) to accelerate 34% renewable energy by 2030. <em>JETP Indonesia is the world's largest individual energy transition financing effort to date.</em><br><br>" +
            "Per CIPP 2023, <strong>USD 97.3 billion</strong> is needed by 2030 for just transition; 400+ priority projects worth USD 66.9 billion ready to be initiated."
    },

    {
      id:'sbfn-maturing',
      kw_id:['sbfn','sustainable banking finance network','sbfn indonesia','tahap maturing','progress keuangan berkelanjutan','peringkat emde','indonesia maturing','progression matrix'],
      kw_en:['sbfn','sustainable banking finance network','sbfn indonesia','maturing stage','sbfn progress matrix','emde sustainable finance ranking','sbfn rating indonesia'],
      a_id:"<strong>Indonesia di Sustainable Banking & Finance Network (SBFN)</strong> 🌐<br><br>" +
            "SBFN adalah komunitas global regulator sektor keuangan dari pasar berkembang, didirikan 2012, difasilitasi IFC (World Bank Group). Per Oktober 2021, anggota mencakup 63 institusi dari 43 negara, menguasai USD 43 triliun (86% aset perbankan di emerging markets).<br><br>" +
            "<strong>Peringkat Indonesia: Tahap \"Maturing\", Sub-tahap \"Consolidating\"</strong><br>" +
            "Indonesia diakui SBFN sebagai negara dengan keuangan berkelanjutan <strong>paling matang di antara Emerging Markets &amp; Developing Economies (EMDEs)</strong>. Hanya China &amp; Colombia yang juga ada di tahap Maturing.<br><br>" +
            "<strong>Per Pilar:</strong><br>" +
            "• <strong>Pilar 1, ESG Integration:</strong> Consolidating (Maturing) ✅<br>" +
            "• <strong>Pilar 2, Climate Risk Management:</strong> Formulating (Preparation) ⚠️<br>" +
            "• <strong>Pilar 3, Financing Sustainability:</strong> Consolidating (Maturing) ✅<br><br>" +
            "<strong>Faktor pendorong rating tinggi:</strong> POJK 51/2017, Roadmap II (2021-2025), Green Taxonomy 1.0 (2022), IDXCarbon (2023), Sovereign Green Sukuk (pioneer global 2018), POJK 14/2023 perdagangan karbon, POJK 17/2023 manajemen risiko iklim untuk bank.<br><br>" +
            "<strong>Mengapa penting bagi investor?</strong> Rating SBFN dipakai oleh fund manager global (BlackRock, Vanguard) untuk allocate ke emerging markets, Indonesia jadi tujuan menarik untuk dana ESG global.",
      a_en:"<strong>Indonesia in Sustainable Banking & Finance Network (SBFN)</strong> 🌐<br><br>" +
            "SBFN is a global community of financial sector regulators from emerging markets, founded 2012, facilitated by IFC (World Bank Group). As of October 2021, members include 63 institutions from 43 countries, representing USD 43 trillion (86% of banking assets in emerging markets).<br><br>" +
            "<strong>Indonesia's Rating: \"Maturing\" Stage, \"Consolidating\" Sub-Stage</strong><br>" +
            "SBFN recognizes Indonesia as having the <strong>most mature sustainable finance among Emerging Markets &amp; Developing Economies (EMDEs)</strong>. Only China &amp; Colombia are also at Maturing stage.<br><br>" +
            "<strong>Per Pillar:</strong><br>" +
            "• <strong>Pillar 1, ESG Integration:</strong> Consolidating (Maturing) ✅<br>" +
            "• <strong>Pillar 2, Climate Risk Management:</strong> Formulating (Preparation) ⚠️<br>" +
            "• <strong>Pillar 3, Financing Sustainability:</strong> Consolidating (Maturing) ✅<br><br>" +
            "<strong>Drivers of the high rating:</strong> POJK 51/2017, Roadmap II (2021-2025), Green Taxonomy 1.0 (2022), IDXCarbon (2023), Sovereign Green Sukuk (global pioneer 2018), POJK 14/2023 carbon trading, POJK 17/2023 climate risk management for banks.<br><br>" +
            "<strong>Why does it matter for investors?</strong> The SBFN rating is used by global fund managers (BlackRock, Vanguard) to allocate to emerging markets, Indonesia is an attractive destination for global ESG funds."
    },

    {
      id:'carbon-tax-indonesia',
      kw_id:['pajak karbon','carbon tax','pajak emisi','tarif karbon','rp 30 per kg','co2 tax indonesia','pajak karbon pltu','uu hpp pajak karbon'],
      kw_en:['carbon tax indonesia','carbon pricing indonesia','co2 tax','indonesia carbon tariff','rp 30 per kg co2','coal power plant tax'],
      a_id:"<strong>Pajak Karbon Indonesia</strong> 💨<br><br>" +
            "Indonesia memperkenalkan <strong>Pajak Karbon</strong> melalui UU No. 7/2021 (Harmonisasi Peraturan Perpajakan/HPP), instrumen <em>carbon pricing</em> nasional untuk mendorong pengurangan emisi GRK.<br><br>" +
            "<strong>Tarif minimum:</strong> <span class='accent'>Rp 30 per kg CO2e</span> (~USD 2/ton, relatif rendah dibanding EU ETS sekitar USD 80-100/ton).<br><br>" +
            "<strong>Penerapan bertahap:</strong><br>" +
            "1. <strong>Sasaran awal:</strong> Pembangkit Listrik Tenaga Uap (PLTU) batubara, sektor emisi tertinggi<br>" +
            "2. <strong>Mekanisme:</strong> <em>cap-and-tax</em>, emisi di atas batas atas (PTBAE-PU) dikenai pajak<br>" +
            "3. <strong>Skema dukungan:</strong> perusahaan bisa <em>offset</em> emisi via IDXCarbon (beli SPE-GRK) atau bayar pajak<br><br>" +
            "<strong>Konteks fiscal climate policy:</strong> Indonesia melengkapi pajak karbon dengan insentif fiskal hijau, tax holiday 100% untuk pioneer industries (EV, baterai, smelter nikel), super deduction 200% untuk pelatihan EV, super deduction 300% untuk R&amp;D EV, VAT 0% mobil listrik baterai (PMK 38/2023), subsidi Rp 7 juta motor listrik.<br><br>" +
            "<strong>Untuk investor:</strong> emiten dengan intensitas karbon tinggi (PLTU, semen, baja) akan terkena dampak biaya transisi, risiko <em>transition risk</em>. Sektor EV &amp; energi terbarukan justru diuntungkan oleh skema insentif.",
      a_en:"<strong>Indonesia's Carbon Tax</strong> 💨<br><br>" +
            "Indonesia introduced a <strong>Carbon Tax</strong> via Law No. 7/2021 (Harmonization of Tax Regulations/HPP), a national <em>carbon pricing</em> instrument to drive GHG emission reduction.<br><br>" +
            "<strong>Minimum tariff:</strong> <span class='accent'>Rp 30 per kg CO2e</span> (~USD 2/ton, relatively low vs EU ETS at ~USD 80-100/ton).<br><br>" +
            "<strong>Phased implementation:</strong><br>" +
            "1. <strong>Initial target:</strong> Coal-Fired Power Plants (CFPP/PLTU), the highest-emission sector<br>" +
            "2. <strong>Mechanism:</strong> <em>cap-and-tax</em>, emissions above the upper cap (PTBAE-PU) are taxed<br>" +
            "3. <strong>Support scheme:</strong> companies can <em>offset</em> emissions via IDXCarbon (buy SPE-GRK) or pay tax<br><br>" +
            "<strong>Fiscal climate policy context:</strong> Indonesia complements carbon tax with green fiscal incentives, 100% tax holiday for pioneer industries (EV, battery, nickel smelter), 200% super deduction for EV training, 300% super deduction for EV R&amp;D, 0% VAT for battery EV (PMK 38/2023), Rp 7 million subsidy for electric motorcycles.<br><br>" +
            "<strong>For investors:</strong> high-carbon-intensity issuers (PLTU, cement, steel) face transition cost impact, <em>transition risk</em>. EV &amp; renewable energy sectors are favored by the incentive scheme."
    },

    {
      id:'crms-banks-pojk17',
      kw_id:['crms','climate risk management scenario analysis','manajemen risiko iklim','pojk 17 2023','risiko iklim bank','stress test iklim','risiko fisik risiko transisi','tcfd indonesia','crms ojk'],
      kw_en:['crms','climate risk management scenario analysis','pojk 17/2023','climate risk bank indonesia','climate stress test indonesia','tcfd indonesia','physical transition risk bank'],
      a_id:"<strong>Climate Risk Management & Scenario Analysis (CRMS)</strong> 🌡️<br><br>" +
            "CRMS adalah kerangka manajemen risiko iklim wajib untuk perbankan Indonesia, diatur dalam <strong>POJK 17/2023</strong> tentang tata kelola bank umum termasuk risiko iklim. Diluncurkan OJK 2024 sebagai \"living document\" yang akan terus diperbarui.<br><br>" +
            "<strong>4 Aspek Inti CRMS:</strong><br>" +
            "1. <strong>Tata kelola (Governance)</strong>, peran direksi &amp; komisaris dalam pengawasan risiko iklim<br>" +
            "2. <strong>Strategi bisnis &amp; kerangka manajemen risiko</strong><br>" +
            "3. <strong>Desain &amp; analisis risiko</strong> (physical &amp; transition risk)<br>" +
            "4. <strong>Pengungkapan (Disclosure)</strong> selaras dengan TCFD<br><br>" +
            "<strong>5 Buku Panduan Teknis:</strong> Technical Guidance, Emission Calculation, Macroeconomic Data, Disaster Data, Reporting Template.<br><br>" +
            "<strong>Pilot CRMS 2024:</strong> 18 bank (KBMI 3 &amp; 4, bank terbesar Indonesia), termasuk BBCA, BBRI, BMRI, BBNI, BNGA, BBTN.<br><br>" +
            "<strong>Roadmap:</strong><br>" +
            "• 2023: bottom-up CRST guideline + 11 bank pilot<br>" +
            "• 2024: 18 bank pilot CRMS<br>" +
            "• 2025: refinement + ekspansi pilot + IWST (Industry-Wide Stress Test)<br>" +
            "• 2026: Full Implementation + adopsi <strong>IFRS S1 &amp; S2</strong> (ISSB)<br><br>" +
            "<strong>Implikasi bagi investor:</strong> bank yang lulus CRMS akan punya portfolio kredit lebih bersih, less exposed ke <em>stranded asset risk</em> dari sektor coklat (batubara, sawit deforestasi). Bank lambat di CRMS = risiko kredit jangka panjang tinggi.",
      a_en:"<strong>Climate Risk Management & Scenario Analysis (CRMS)</strong> 🌡️<br><br>" +
            "CRMS is the mandatory climate risk management framework for Indonesian banks, regulated under <strong>POJK 17/2023</strong> on commercial bank governance including climate risk. Launched by OJK in 2024 as a \"living document\" that will continue to be refined.<br><br>" +
            "<strong>4 Core CRMS Aspects:</strong><br>" +
            "1. <strong>Governance</strong>, board &amp; commissioner roles in climate risk oversight<br>" +
            "2. <strong>Business strategy &amp; risk management framework</strong><br>" +
            "3. <strong>Risk design &amp; analysis</strong> (physical &amp; transition risk)<br>" +
            "4. <strong>Disclosure</strong> aligned with TCFD<br><br>" +
            "<strong>5 Technical Guidance Books:</strong> Technical Guidance, Emission Calculation, Macroeconomic Data, Disaster Data, Reporting Template.<br><br>" +
            "<strong>CRMS Pilot 2024:</strong> 18 banks (KBMI 3 &amp; 4, Indonesia's largest banks), including BBCA, BBRI, BMRI, BBNI, BNGA, BBTN.<br><br>" +
            "<strong>Roadmap:</strong><br>" +
            "• 2023: Bottom-up CRST guideline + 11-bank pilot<br>" +
            "• 2024: 18-bank CRMS pilot<br>" +
            "• 2025: refinement + pilot expansion + IWST (Industry-Wide Stress Test)<br>" +
            "• 2026: Full Implementation + adoption of <strong>IFRS S1 &amp; S2</strong> (ISSB)<br><br>" +
            "<strong>Implication for investors:</strong> banks that pass CRMS will have cleaner credit portfolios, less exposed to <em>stranded asset risk</em> from brown sectors (coal, deforestation-linked palm oil). Banks slow to adopt CRMS = high long-term credit risk."
    },

    {
      id:'climate-trust-funds',
      kw_id:['icctf','indonesia climate change trust fund','bpdlh','badan pengelola dana lingkungan hidup','indonesia environment fund','dana iklim','dana lingkungan','pendanaan iklim'],
      kw_en:['icctf','indonesia climate change trust fund','bpdlh','indonesia environment fund','climate trust fund indonesia','indonesia environmental fund'],
      a_id:"<strong>ICCTF & BPDLH, Dana Iklim Indonesia</strong> 💰<br><br>" +
            "Dua kendaraan utama pendanaan iklim domestik Indonesia di luar APBN:<br><br>" +
            "<strong>1. ICCTF (Indonesia Climate Change Trust Fund)</strong><br>" +
            "• <em>National Trust Fund</em> didirikan 2009<br>" +
            "• Menerima dana dari donor bilateral &amp; multilateral untuk proyek mitigasi &amp; adaptasi iklim<br>" +
            "• Fokus: energi, kehutanan, pertanian berkelanjutan<br>" +
            "• Salah satu Trust Fund iklim tertua di Asia Tenggara<br><br>" +
            "<strong>2. BPDLH (Badan Pengelola Dana Lingkungan Hidup) / Indonesia Environment Fund (IEF)</strong><br>" +
            "• <em>National Public Service Agency (BLU)</em> di bawah Kementerian Keuangan<br>" +
            "• Didirikan 2019 sebagai single window dana lingkungan terpadu<br>" +
            "• Menerima dana dari: APBN, hibah, kerjasama internasional, hasil <em>debt-for-nature swap</em>, dan REDD+ payment<br>" +
            "• Mengelola: pengurangan emisi deforestasi (REDD+), restorasi lahan, perlindungan ekosistem<br><br>" +
            "<strong>Debt-for-Nature Swap Indonesia:</strong> sudah swap USD 106,2 juta utang dengan US (Sumatera &amp; Borneo Forest Conservation, Sunda-Banda Kecil), pemerintah Indonesia kontribusi balik USD 106,2 juta untuk proyek konservasi.<br><br>" +
            "<strong>Untuk investor ESG:</strong> dana ini sering co-finance proyek dengan swasta &amp; perbankan (BCA, Mandiri, BRI), green loan/sukuk yang dibackup BPDLH punya credit risk lebih rendah.",
      a_en:"<strong>ICCTF & BPDLH, Indonesia's Climate Funds</strong> 💰<br><br>" +
            "Two main vehicles for domestic climate financing in Indonesia outside the State Budget:<br><br>" +
            "<strong>1. ICCTF (Indonesia Climate Change Trust Fund)</strong><br>" +
            "• <em>National Trust Fund</em> established in 2009<br>" +
            "• Receives funds from bilateral &amp; multilateral donors for climate mitigation &amp; adaptation projects<br>" +
            "• Focus: energy, forestry, sustainable agriculture<br>" +
            "• One of Southeast Asia's oldest climate Trust Funds<br><br>" +
            "<strong>2. BPDLH (Badan Pengelola Dana Lingkungan Hidup) / Indonesia Environment Fund (IEF)</strong><br>" +
            "• <em>National Public Service Agency (BLU)</em> under Ministry of Finance<br>" +
            "• Established 2019 as a single window for integrated environmental funds<br>" +
            "• Receives funds from: state budget, grants, international cooperation, <em>debt-for-nature swap</em> proceeds, and REDD+ payments<br>" +
            "• Manages: deforestation emission reduction (REDD+), land restoration, ecosystem protection<br><br>" +
            "<strong>Indonesia's Debt-for-Nature Swap:</strong> already swapped USD 106.2 million in debt with the US (Sumatra &amp; Borneo Forest Conservation, Sunda-Banda Kecil), Indonesian government contributed USD 106.2 million back for conservation projects.<br><br>" +
            "<strong>For ESG investors:</strong> these funds often co-finance projects with private &amp; banking sector (BCA, Mandiri, BRI), green loan/sukuk backed by BPDLH have lower credit risk."
    },

    {
      id:'sdg-indonesia-one',
      kw_id:['sdg indonesia one','blended finance','pt smi','sarana multi infrastruktur','pendanaan campuran','pembiayaan sdg','blended finance indonesia'],
      kw_en:['sdg indonesia one','blended finance indonesia','pt smi','sarana multi infrastruktur','sdg financing indonesia','indonesia blended finance platform'],
      a_id:"<strong>SDG Indonesia One, Platform Blended Finance</strong> 🔄<br><br>" +
            "SDG Indonesia One adalah instrumen pendanaan inovatif yang dikelola <strong>PT Sarana Multi Infrastruktur (SMI)</strong>, BUMN khusus di bawah Kementerian Keuangan, untuk membiayai infrastruktur yang mendukung 16 dari 17 SDGs.<br><br>" +
            "<strong>Capaian per Maret 2025:</strong><br>" +
            "• <strong>USD 3,13 miliar</strong> total komitmen pendanaan<br>" +
            "• <strong>USD 810 juta</strong> dana sudah disepakati (48,57% commitment)<br>" +
            "• <strong>USD 396 juta</strong> realisasi (25,88% commitment)<br>" +
            "• <strong>127 proyek</strong> sudah didukung di 38 mitra (multilateral, bank, korporasi, filantropi)<br>" +
            "• <strong>111 blended finance projects</strong> aktif<br><br>" +
            "<strong>4 Fasilitas Pendanaan (lapis risiko):</strong><br>" +
            "1. <strong>Development Facility</strong>, grant untuk pra-konstruksi (donor/filantropi)<br>" +
            "2. <strong>Risk Management Facility</strong>, concessional loan, first-loss, interest subsidy (donor + dev bank)<br>" +
            "3. <strong>Financing Facility</strong>, senior &amp; subordinated loan (bank komersial)<br>" +
            "4. <strong>Equity</strong>, impact investing (institusional &amp; developer)<br><br>" +
            "<strong>57% dukungan</strong> mengalir ke <em>Renewable Energy</em>, kontribusi besar pada target NDC. Sektor lain: Health, Education, urban infrastructure (transport, water, waste).<br><br>" +
            "<strong>Mengapa relevan?</strong> Platform ini bukti Indonesia bisa <em>de-risk</em> investasi hijau, model untuk dana ESG global yang mencari proyek bankable di Asia Tenggara.",
      a_en:"<strong>SDG Indonesia One, Blended Finance Platform</strong> 🔄<br><br>" +
            "SDG Indonesia One is an innovative financing instrument managed by <strong>PT Sarana Multi Infrastruktur (SMI)</strong>, a special mission SOE under the Ministry of Finance, to fund infrastructure supporting 16 of 17 SDGs.<br><br>" +
            "<strong>Achievements as of March 2025:</strong><br>" +
            "• <strong>USD 3.13 billion</strong> total funding commitment<br>" +
            "• <strong>USD 810 million</strong> in funds already agreed (48.57% of commitment)<br>" +
            "• <strong>USD 396 million</strong> realized (25.88% of commitment)<br>" +
            "• <strong>127 projects</strong> supported across 38 partners (multilateral, banks, corporates, philanthropy)<br>" +
            "• <strong>111 active blended finance projects</strong><br><br>" +
            "<strong>4 Funding Facilities (risk layers):</strong><br>" +
            "1. <strong>Development Facility</strong>, pre-construction grants (donor/philanthropy)<br>" +
            "2. <strong>Risk Management Facility</strong>, concessional loan, first-loss, interest subsidy (donor + dev bank)<br>" +
            "3. <strong>Financing Facility</strong>, senior &amp; subordinated loans (commercial banks)<br>" +
            "4. <strong>Equity</strong>, impact investing (institutional &amp; developer)<br><br>" +
            "<strong>57% of support</strong> flows to <em>Renewable Energy</em>, a major contribution to the NDC target. Other sectors: Health, Education, urban infrastructure (transport, water, waste).<br><br>" +
            "<strong>Why relevant?</strong> This platform proves Indonesia can <em>de-risk</em> green investments, a model for global ESG funds seeking bankable projects in Southeast Asia."
    },

    {
      id:'pojk-18-sustainability-bond',
      kw_id:['pojk 18 2023','sustainability bond','sukuk berkelanjutan','sustainability linked bond','sukuk linked waqf','obligasi sosial','social bond','sukuk waqf','green social sustainability'],
      kw_en:['pojk 18/2023','sustainability bond','sustainability-linked bond','social bond indonesia','green social sustainability bond','sukuk linked waqf','indonesia sustainable bond'],
      a_id:"<strong>POJK 18/2023, Sustainability-related Bonds & Sukuk</strong> 📜<br><br>" +
            "Diterbitkan Oktober 2023, POJK 18/2023 adalah landasan hukum penerbitan instrumen utang yang berorientasi keberlanjutan, mengembangkan POJK 60/2017 (Green Bonds) yang sebelumnya hanya menutup obligasi hijau.<br><br>" +
            "<strong>5 Jenis Instrumen Diatur:</strong><br>" +
            "1. <strong>Green Bond/Sukuk</strong>, dana 100% untuk proyek hijau (energi terbarukan, transportasi bersih, dll)<br>" +
            "2. <strong>Social Bond/Sukuk</strong>, dana untuk proyek sosial (kesehatan, pendidikan, akses air bersih)<br>" +
            "3. <strong>Sustainability Bond/Sukuk</strong>, kombinasi proyek hijau + sosial<br>" +
            "4. <strong>Sustainability-Linked Bond/Sukuk</strong>, kupon tergantung pencapaian <em>Key Sustainability Performance Indicators (KPI)</em>, kalau gagal, kupon naik (penalty)<br>" +
            "5. <strong>Sukuk-linked Waqf</strong>, dana untuk proyek wakaf (sosial Islam)<br><br>" +
            "<strong>Perbedaan dengan POJK 60/2017:</strong><br>" +
            "• POJK 60: hanya Green Bonds, minimum 70% proceeds, public offering only<br>" +
            "• POJK 18: 5 jenis instrumen, 100% proceeds untuk eligible projects, public offering + private placement<br><br>" +
            "<strong>Insentif OJK:</strong><br>" +
            "• <strong>75% diskon</strong> on registration fee<br>" +
            "• <strong>50% diskon</strong> on listing fee<br><br>" +
            "<strong>Untuk investor ritel:</strong> akses ke sustainability bond ritel makin banyak. Periksa <em>second-party opinion</em> (verifikasi pihak ketiga), wajib per POJK 18.",
      a_en:"<strong>POJK 18/2023, Sustainability-related Bonds & Sukuk</strong> 📜<br><br>" +
            "Issued October 2023, POJK 18/2023 is the legal basis for issuing sustainability-oriented debt instruments, expanding POJK 60/2017 (Green Bonds) which previously only covered green bonds.<br><br>" +
            "<strong>5 Instrument Types Regulated:</strong><br>" +
            "1. <strong>Green Bond/Sukuk</strong>, 100% proceeds for green projects (renewable energy, clean transport, etc.)<br>" +
            "2. <strong>Social Bond/Sukuk</strong>, proceeds for social projects (health, education, water access)<br>" +
            "3. <strong>Sustainability Bond/Sukuk</strong>, combination of green + social projects<br>" +
            "4. <strong>Sustainability-Linked Bond/Sukuk</strong>, coupon depends on achievement of <em>Key Sustainability Performance Indicators (KPI)</em>, if failed, coupon increases (penalty)<br>" +
            "5. <strong>Sukuk-linked Waqf</strong>, proceeds for waqf projects (Islamic social finance)<br><br>" +
            "<strong>Differences from POJK 60/2017:</strong><br>" +
            "• POJK 60: only Green Bonds, minimum 70% proceeds, public offering only<br>" +
            "• POJK 18: 5 instrument types, 100% proceeds for eligible projects, public offering + private placement<br><br>" +
            "<strong>OJK Incentives:</strong><br>" +
            "• <strong>75% discount</strong> on registration fee<br>" +
            "• <strong>50% discount</strong> on listing fee<br><br>" +
            "<strong>For retail investors:</strong> access to retail sustainability bonds is expanding. Check the <em>second-party opinion</em> (third-party verification), mandatory per POJK 18."
    },

    {
      id:'green-fiscal-incentives',
      kw_id:['insentif fiskal hijau','tax holiday ev','tax allowance','super deduction','pmk 38','pmk 130','subsidi motor listrik','ppn mobil listrik','insentif kendaraan listrik','insentif ebt'],
      kw_en:['green fiscal incentives','tax holiday ev indonesia','super deduction ev','pmk 38/2023','electric vehicle subsidy indonesia','renewable energy tax incentive indonesia','green tax incentive'],
      a_id:"<strong>Insentif Fiskal Hijau Indonesia</strong> 🎁<br><br>" +
            "Pemerintah memberi paket insentif fiskal untuk akselerasi transisi energi &amp; ekonomi hijau:<br><br>" +
            "<strong>1. Tax Holiday (PMK 130/2020)</strong><br>" +
            "• Pengurangan PPh Badan <strong>100% hingga 20 tahun</strong> untuk <em>pioneer industries</em><br>" +
            "• Termasuk: manufaktur kendaraan bermotor (EV), industri logam dasar hulu, smelter nikel untuk baterai<br><br>" +
            "<strong>2. Tax Allowance (PP 78/2019)</strong>, fasilitas PPh untuk industri tertentu di area tertentu (tambang nikel, baterai, kendaraan)<br><br>" +
            "<strong>3. Super Deduction Income Tax</strong><br>" +
            "• <strong>PMK 128/2019:</strong> Hingga <strong>200%</strong> untuk vocational education yang mendorong ekosistem EV<br>" +
            "• <strong>PMK 153/2020:</strong> Hingga <strong>300%</strong> untuk R&amp;D EV &amp; komponen<br><br>" +
            "<strong>4. VAT Exemption / Government-Borne</strong><br>" +
            "• <strong>PMK 38/2023:</strong> Pemerintah menanggung PPN mobil &amp; bus listrik (tarif efektif 1-5% berbasis TKDN)<br>" +
            "• <strong>PP 49/2022:</strong> 0% PPN bijih nikel untuk bahan baku baterai EV<br><br>" +
            "<strong>5. Subsidi Konsumen</strong><br>" +
            "• <strong>Rp 7 juta</strong> per orang untuk pembelian motor listrik (Permen Perindustrian 21/2023)<br>" +
            "• 0% PPnBM (Pajak Penjualan Barang Mewah) mobil listrik (PP 74/2021)<br>" +
            "• 0% pajak BBN-KB &amp; PKB (Permendagri 6/2023)<br><br>" +
            "<strong>6. Bea Masuk</strong><br>" +
            "• 0% bea masuk IKD (Incompletely Knocked Down) &amp; CKD EV di bawah FTA/CEPA Korea &amp; China<br>" +
            "• Bebas bea masuk untuk pembangkit listrik &amp; mesin manufaktur EV<br><br>" +
            "<strong>Bagi investor:</strong> sektor terdampak positif: nikel (ANTM, INCO, MBMA), pembangkit EBT, manufaktur EV (TPIA, PTRO), supplier baterai (HRUM). Risiko di sektor batubara &amp; otomotif bensin tradisional.",
      a_en:"<strong>Indonesia's Green Fiscal Incentives</strong> 🎁<br><br>" +
            "The government provides a package of fiscal incentives to accelerate the energy transition &amp; green economy:<br><br>" +
            "<strong>1. Tax Holiday (PMK 130/2020)</strong><br>" +
            "• <strong>100% corporate income tax reduction for up to 20 years</strong> for <em>pioneer industries</em><br>" +
            "• Includes: motor vehicle manufacturing (EV), upstream basic metal industry, nickel smelters for batteries<br><br>" +
            "<strong>2. Tax Allowance (PP 78/2019)</strong>, income tax facilities for specific industries in certain areas (nickel mining, batteries, vehicles)<br><br>" +
            "<strong>3. Super Deduction Income Tax</strong><br>" +
            "• <strong>PMK 128/2019:</strong> Up to <strong>200%</strong> for vocational education driving the EV ecosystem<br>" +
            "• <strong>PMK 153/2020:</strong> Up to <strong>300%</strong> for EV R&amp;D &amp; components<br><br>" +
            "<strong>4. VAT Exemption / Government-Borne</strong><br>" +
            "• <strong>PMK 38/2023:</strong> Government covers VAT on electric cars &amp; buses (effective rate 1-5% based on local content)<br>" +
            "• <strong>PP 49/2022:</strong> 0% VAT on nickel ore for EV battery raw material<br><br>" +
            "<strong>5. Consumer Subsidies</strong><br>" +
            "• <strong>Rp 7 million</strong> per person to buy an electric motorcycle (Permen Perindustrian 21/2023)<br>" +
            "• 0% PPnBM (Luxury Goods Sales Tax) on electric cars (PP 74/2021)<br>" +
            "• 0% BBN-KB &amp; PKB vehicle taxes (Permendagri 6/2023)<br><br>" +
            "<strong>6. Import Duty</strong><br>" +
            "• 0% import duty on IKD (Incompletely Knocked Down) &amp; CKD EVs under Korea &amp; China FTA/CEPA<br>" +
            "• Duty-free imports for power plants &amp; EV manufacturing machinery<br><br>" +
            "<strong>For investors:</strong> positively impacted sectors: nickel (ANTM, INCO, MBMA), renewable energy generation, EV manufacturing (TPIA, PTRO), battery suppliers (HRUM). Risks in coal &amp; traditional gasoline auto sectors."
    },

    {
      id:'sustainable-investment-framework-4pillars',
      kw_id:['kerangka investasi lestari','sustainable investment framework','panduan investasi lestari','bkpm investasi lestari','4 pilar investasi','25 indikator esg','indikator investasi lestari','5p','prosperity planet peace partnership'],
      kw_en:['sustainable investment framework','indonesia sustainable investment guideline','bkpm guideline','4 pillars sustainable investment','25 indicators','5p framework','people prosperity planet peace partnership'],
      a_id:"<strong>Kerangka Investasi Lestari Indonesia (BKPM)</strong> 🧭<br><br>" +
            "Diterbitkan 2022 oleh <strong>Kementerian Investasi/BKPM</strong> bersama KADIN &amp; Koalisi Ekonomi Membumi. Panduan resmi untuk UMKM, korporasi, investor, dan pemerintah dalam mengintegrasikan ESG ke keputusan investasi.<br><br>" +
            "<strong>4 Pilar Utama + 25 Indikator Pengungkapan:</strong><br><br>" +
            "<strong>A. EKONOMI (4 indikator)</strong>, akuntabilitas finansial, sumber supply lokal, pembiayaan ESG, inovasi produk berkelanjutan<br><br>" +
            "<strong>B. LINGKUNGAN (8 indikator)</strong>, pengukuran emisi (Scope 1, 2, 3), pengurangan emisi, efisiensi energi &amp; air, bahan baku ramah lingkungan, pengelolaan limbah, nilai konservasi tinggi (HCV) &amp; stok karbon tinggi (HCS), restorasi &amp; rehabilitasi<br><br>" +
            "<strong>C. SOSIAL (10 indikator)</strong>, representasi gender, kelompok rentan, usia, remunerasi adil, pelatihan, privasi data konsumen, keamanan &amp; sertifikasi produk, pemberdayaan komunitas lokal, perlindungan anak, hak masyarakat adat<br><br>" +
            "<strong>D. TATA KELOLA (3 indikator)</strong>, struktur organisasi &amp; tata kelola berkelanjutan, anti-korupsi &amp; anti-suap, mekanisme keluhan<br><br>" +
            "<strong>Framework 5P:</strong> People, Prosperity, Planet, Peace &amp; Partnership, filosofi keseimbangan ekonomi-sosial-lingkungan-tata kelola yang menjadi DNA panduan ini.<br><br>" +
            "<strong>Investment Spectrum (referensi OECD/Boffo-Patalano 2020):</strong><br>" +
            "Traditional Investing → ESG Investing (fokus return + ESG sebagai risk filter) → Sustainable/Thematic → Impact Investing (return finansial + dampak terukur) → Philanthropy<br><br>" +
            "<strong>Standar acuan internasional:</strong> UN Global Compact, PRI, GRI, SDG Impact Standards, CDP, OECD Guidelines for MNEs.",
      a_en:"<strong>Indonesia Sustainable Investment Guideline (BKPM)</strong> 🧭<br><br>" +
            "Issued 2022 by <strong>Ministry of Investment/BKPM</strong> together with KADIN &amp; Koalisi Ekonomi Membumi. Official guideline for MSMEs, corporations, investors, and government to integrate ESG into investment decisions.<br><br>" +
            "<strong>4 Main Pillars + 25 Disclosure Indicators:</strong><br><br>" +
            "<strong>A. ECONOMIC (4 indicators)</strong>, financial accountability, local supplier sourcing, ESG financing, sustainable product innovation<br><br>" +
            "<strong>B. ENVIRONMENTAL (8 indicators)</strong>, emission measurement (Scope 1, 2, 3), emission reduction, energy &amp; water efficiency, eco-friendly raw materials, waste management, High Conservation Value (HCV) &amp; High Carbon Stock (HCS), restoration &amp; rehabilitation<br><br>" +
            "<strong>C. SOCIAL (10 indicators)</strong>, gender representation, vulnerable groups, age diversity, fair remuneration, training, customer data privacy, product safety &amp; certification, local community empowerment, child protection, indigenous peoples' rights<br><br>" +
            "<strong>D. GOVERNANCE (3 indicators)</strong>, organizational structure &amp; sustainable governance, anti-corruption &amp; anti-bribery, grievance mechanism<br><br>" +
            "<strong>5P Framework:</strong> People, Prosperity, Planet, Peace &amp; Partnership, the economic-social-environmental-governance balance philosophy that forms the guideline's DNA.<br><br>" +
            "<strong>Investment Spectrum (OECD/Boffo-Patalano 2020 reference):</strong><br>" +
            "Traditional Investing → ESG Investing (return focus + ESG as risk filter) → Sustainable/Thematic → Impact Investing (financial return + measurable impact) → Philanthropy<br><br>" +
            "<strong>International reference standards:</strong> UN Global Compact, PRI, GRI, SDG Impact Standards, CDP, OECD Guidelines for MNEs."
    },

    {
      id:'gcf-jetp-financing',
      kw_id:['green climate fund','gcf indonesia','pendanaan iklim global','sumber pendanaan iklim','climate finance source','pisp fund','geothermal fund facility','etm financing','gfanz'],
      kw_en:['green climate fund indonesia','gcf indonesia','global climate finance source','pisp fund','geothermal fund facility','gfanz','jetp public private financing'],
      a_id:"<strong>Sumber Pendanaan Iklim Internasional untuk Indonesia</strong> 🌍<br><br>" +
            "Selain APBN (Rp 100-122 triliun/tahun untuk iklim), Indonesia mengakses berbagai sumber pendanaan iklim global:<br><br>" +
            "<strong>1. Green Climate Fund (GCF)</strong><br>" +
            "• Mekanisme finansial UNFCCC terbesar di dunia, dibentuk COP 2010<br>" +
            "• Per November 2024: <strong>19 proyek</strong> (4 country-specific, 15 multi-country), total nilai <strong>USD 1,93 miliar</strong><br>" +
            "• Pengurangan emisi: 400 juta ton CO2e, beneficiaries 9,45 juta orang<br>" +
            "• Co-financing: USD 625,6 juta dari sumber lain<br><br>" +
            "<strong>2. JETP, Just Energy Transition Partnership</strong><br>" +
            "• <strong>USD 21,6 miliar</strong> total pledge (2023; semula USD 20 miliar 2022)<br>" +
            "• IPG (negara): Jepang, Kanada, Denmark, EU, Prancis, Jerman, Italia, Norwegia, UK (US keluar)<br>" +
            "• GFANZ (swasta): Bank of America, Citi, Deutsche Bank, HSBC, Macquarie, MUFG, Standard Chartered<br>" +
            "• Komposisi: USD 9,6 miliar publik + USD 10 miliar komersial + USD 0,32 miliar equity + USD 4,1 miliar concessional loans + USD 1,1 miliar guarantees + USD 0,3 miliar grants/TA<br><br>" +
            "<strong>3. PISP Fund (PMK 80/2022)</strong><br>" +
            "• IDR 3,1 triliun revolving fund untuk eksplorasi geothermal<br>" +
            "• Dikelola PT SMI, de-risking untuk tahap eksplorasi yang berisiko tinggi<br>" +
            "• Co-financing: GEUDP (World Bank, USD 49 juta), GEF (USD 6,25 juta), GREM (USD 655 juta)<br><br>" +
            "<strong>4. Global Bilateral &amp; Multilateral</strong><br>" +
            "• Global Environment Facility, Adaptation Fund, Multilateral Development Banks (ADB, AIIB, World Bank), International Financial Institutions<br><br>" +
            "<strong>Untuk investor:</strong> proyek yang didukung GCF/JETP punya <em>credit enhancement</em>, risiko lebih rendah, return mungkin lebih kecil tapi lebih stabil. Cocok untuk portfolio impact investing.",
      a_en:"<strong>International Climate Finance Sources for Indonesia</strong> 🌍<br><br>" +
            "Beyond the state budget (Rp 100-122 trillion/year for climate), Indonesia taps various global climate finance sources:<br><br>" +
            "<strong>1. Green Climate Fund (GCF)</strong><br>" +
            "• World's largest UNFCCC financial mechanism, established at COP 2010<br>" +
            "• As of November 2024: <strong>19 projects</strong> (4 country-specific, 15 multi-country), total value <strong>USD 1.93 billion</strong><br>" +
            "• Emission reduction: 400 million ton CO2e, 9.45 million beneficiaries<br>" +
            "• Co-financing: USD 625.6 million from other sources<br><br>" +
            "<strong>2. JETP, Just Energy Transition Partnership</strong><br>" +
            "• <strong>USD 21.6 billion</strong> total pledge (2023; originally USD 20 billion in 2022)<br>" +
            "• IPG (countries): Japan, Canada, Denmark, EU, France, Germany, Italy, Norway, UK (US withdrew)<br>" +
            "• GFANZ (private): Bank of America, Citi, Deutsche Bank, HSBC, Macquarie, MUFG, Standard Chartered<br>" +
            "• Composition: USD 9.6 bn public + USD 10 bn commercial + USD 0.32 bn equity + USD 4.1 bn concessional loans + USD 1.1 bn guarantees + USD 0.3 bn grants/TA<br><br>" +
            "<strong>3. PISP Fund (PMK 80/2022)</strong><br>" +
            "• IDR 3.1 trillion revolving fund for geothermal exploration<br>" +
            "• Managed by PT SMI, de-risking for high-risk exploration stage<br>" +
            "• Co-financing: GEUDP (World Bank, USD 49 million), GEF (USD 6.25 million), GREM (USD 655 million)<br><br>" +
            "<strong>4. Global Bilateral &amp; Multilateral</strong><br>" +
            "• Global Environment Facility, Adaptation Fund, Multilateral Development Banks (ADB, AIIB, World Bank), International Financial Institutions<br><br>" +
            "<strong>For investors:</strong> projects backed by GCF/JETP have <em>credit enhancement</em>, lower risk, possibly lower return but more stable. Ideal for impact investing portfolios."
    },

    {
      id:'roadmap-ii-7-ekosistem',
      kw_id:['roadmap keuangan berkelanjutan tahap ii','roadmap ii','sustainable finance roadmap phase ii','7 komponen ekosistem','ekosistem keuangan berkelanjutan','ojk roadmap 2021 2025'],
      kw_en:['sustainable finance roadmap phase ii','roadmap ii indonesia','7 component ecosystem','sustainable finance ecosystem indonesia','ojk roadmap 2021 2025'],
      a_id:"<strong>Roadmap Keuangan Berkelanjutan Tahap II (2021-2025), 7 Komponen Ekosistem</strong> 🏗️<br><br>" +
            "Diluncurkan OJK 2021 sebagai \"The Future of Finance\". Berbeda dari Tahap I (2015-2019) yang fokus pada awareness &amp; pembangunan dasar, Tahap II membangun ekosistem komprehensif yang menyentuh seluruh sektor jasa keuangan (bank, pasar modal, IKNB).<br><br>" +
            "<strong>7 Komponen Ekosistem:</strong><br>" +
            "1. <strong>Kebijakan</strong>, taksonomi hijau, integrasi LST, KPI, panduan implementasi<br>" +
            "2. <strong>Produk</strong>, pengembangan infrastruktur penunjang &amp; inovasi produk berkelanjutan<br>" +
            "3. <strong>Infrastruktur Pasar</strong>, Sustainable Finance Information Hub (SFIH), primary &amp; secondary market<br>" +
            "4. <strong>Koordinasi K/L</strong>, Task Force Nasional, monitoring &amp; evaluasi implementasi<br>" +
            "5. <strong>Dukungan Non-Pemerintah</strong>, pusat riset, realisasi program riil<br>" +
            "6. <strong>SDM</strong>, Training Keuangan Berkelanjutan (TKB), Training of Trainers (TOT), e-learning<br>" +
            "7. <strong>Awareness</strong>, buku acuan sektoral, Indonesia Sustainability Week, Sustainable Finance Award (SFA), program inklusi<br><br>" +
            "<strong>Mekanisme Supply vs Demand:</strong> Sisi <em>supply</em> (skema insentif, produk inovatif, kapasitas SDM IJK) berimbang dengan sisi <em>demand</em> (kampanye nasional, dukungan program riil, sertifikasi hijau). Semua ini di bawah payung <strong>Task Force Nasional Keuangan Berkelanjutan</strong>.<br><br>" +
            "<em>Mengapa penting?</em> Roadmap II = blueprint OJK 5 tahunan, semua POJK baru (14/2023, 17/2023, 18/2023, TKBI v1-v2, CRMS) adalah turunan dari Roadmap ini.",
      a_en:"<strong>Sustainable Finance Roadmap Phase II (2021-2025), 7 Ecosystem Components</strong> 🏗️<br><br>" +
            "Launched by OJK in 2021 as \"The Future of Finance\". Unlike Phase I (2015-2019) which focused on awareness &amp; foundation-building, Phase II builds a comprehensive ecosystem covering the entire financial services sector (banks, capital markets, NBFI).<br><br>" +
            "<strong>7 Ecosystem Components:</strong><br>" +
            "1. <strong>Policy</strong>, green taxonomy, ESG integration, KPIs, implementation guidance<br>" +
            "2. <strong>Product</strong>, supporting infrastructure development &amp; sustainable product innovation<br>" +
            "3. <strong>Market Infrastructure</strong>, Sustainable Finance Information Hub (SFIH), primary &amp; secondary markets<br>" +
            "4. <strong>Ministry/Agency Coordination</strong>, National Task Force, monitoring &amp; evaluation<br>" +
            "5. <strong>Non-Government Support</strong>, research centers, real program delivery<br>" +
            "6. <strong>Human Resources</strong>, Sustainable Finance Training (TKB), Training of Trainers (TOT), e-learning<br>" +
            "7. <strong>Awareness</strong>, sector guide books, Indonesia Sustainability Week, Sustainable Finance Award (SFA), inclusion programs<br><br>" +
            "<strong>Supply vs Demand Mechanism:</strong> the <em>supply</em> side (incentive schemes, innovative products, FI human capacity) is balanced with the <em>demand</em> side (national campaign, real programs, green certification). All under the <strong>National Task Force for Sustainable Finance</strong>.<br><br>" +
            "<em>Why does it matter?</em> Roadmap II = OJK's 5-year blueprint, every new POJK (14/2023, 17/2023, 18/2023, TKBI v1-v2, CRMS) is a derivative of this Roadmap."
    },

    {
      id:'roadmap-ii-5-priorities',
      kw_id:['prioritas roadmap','5 prioritas keuangan berkelanjutan','prioritas pengembangan tahap ii','priorities roadmap ii','prioritas ojk keuangan','peta jalan ojk 2025'],
      kw_en:['roadmap ii priorities','5 sustainable finance priorities','ojk priorities 2025','roadmap phase ii priorities','indonesia sustainable finance priorities'],
      a_id:"<strong>5 Prioritas Pengembangan Roadmap Tahap II</strong> 🎯<br><br>" +
            "Dari 7 komponen ekosistem, OJK memilih 5 prioritas yang jadi tulang punggung implementasi Tahap II:<br><br>" +
            "<strong>1. Pengembangan Taksonomi Hijau</strong><br>" +
            "Klasifikasi aktivitas pembiayaan &amp; investasi berkelanjutan, Green Taxonomy v1.0 (2022) → TKBI v1 (2024) → TKBI v2 (2025) cakupan sektor energi, C&amp;RE, T&amp;S, AFOLU.<br><br>" +
            "<strong>2. Implementasi Aspek LST ke Manajemen Risiko</strong><br>" +
            "Integrasi risiko lingkungan-sosial-tata kelola ke proses bisnis IJK. Wujud konkret: POJK 17/2023 (CRMS untuk bank), KPI ESG, peningkatan kapasitas SDM.<br><br>" +
            "<strong>3. Pengembangan Program Riil</strong><br>" +
            "Contoh sukses skema hijau yang bisa direplikasi, kolaborasi dengan K/L &amp; sektor unggulan pemerintah (energi terbarukan, transportasi bersih, UMKM hijau).<br><br>" +
            "<strong>4. Inovasi Produk &amp; Layanan Keuangan Berkelanjutan</strong><br>" +
            "Skema inovatif pembiayaan proyek berkelanjutan dengan 5 atribut: keterbukaan informasi, inklusivitas, dukungan ahli, orientasi jangka panjang, kredibel. Contoh: green/sustainability/blue bond, sustainability-linked loan.<br><br>" +
            "<strong>5. Kampanye Nasional Keuangan Berkelanjutan</strong><br>" +
            "Strategi komunikasi + edukasi + sosialisasi, Indonesia Sustainability Week, Sustainable Finance Award (SFA), publikasi untuk investor baru.<br><br>" +
            "<em>Catatan:</em> Indonesia <strong>First Mover</strong> di emerging countries, SBN (sekarang SBFN) memberi peringkat \"Maturing\" sejak 2019. Indonesia satu dari sedikit EMDE yang punya roadmap 2 fase.",
      a_en:"<strong>5 Priorities of Roadmap Phase II</strong> 🎯<br><br>" +
            "From the 7 ecosystem components, OJK selected 5 priorities as the backbone of Phase II implementation:<br><br>" +
            "<strong>1. Green Taxonomy Development</strong><br>" +
            "Classification of sustainable financing &amp; investment activities, Green Taxonomy v1.0 (2022) → TKBI v1 (2024) → TKBI v2 (2025) covering energy, C&amp;RE, T&amp;S, AFOLU sectors.<br><br>" +
            "<strong>2. ESG Integration into Risk Management</strong><br>" +
            "Embedding environmental-social-governance risks into FI business processes. Concrete examples: POJK 17/2023 (CRMS for banks), ESG KPIs, human capital capacity building.<br><br>" +
            "<strong>3. Real Program Development</strong><br>" +
            "Success stories of green schemes that can be replicated, collaboration with ministries &amp; government's leading sectors (renewable energy, clean transport, green MSMEs).<br><br>" +
            "<strong>4. Innovation in Sustainable Financial Products &amp; Services</strong><br>" +
            "Innovative project financing schemes with 5 attributes: information disclosure, inclusivity, expert support, long-term orientation, credibility. Examples: green/sustainability/blue bonds, sustainability-linked loans.<br><br>" +
            "<strong>5. National Sustainable Finance Campaign</strong><br>" +
            "Communication + education + socialization strategy, Indonesia Sustainability Week, Sustainable Finance Award (SFA), publications for new investors.<br><br>" +
            "<em>Note:</em> Indonesia is a <strong>First Mover</strong> among emerging countries, SBN (now SBFN) has rated it \"Maturing\" since 2019. Indonesia is one of the few EMDEs with a two-phase roadmap."
    },

    {
      id:'green-financing-need-67tn',
      kw_id:['kebutuhan pembiayaan hijau','green financing need indonesia','rp 67 triliun','67803 triliun','dana hijau indonesia 2030','kebutuhan investasi hijau','green investment indonesia','bappenas pembiayaan hijau'],
      kw_en:['indonesia green financing need','rp 67 trillion green','green investment gap indonesia','indonesia green financing 2030','bappenas green financing'],
      a_id:"<strong>Kebutuhan Pembiayaan Hijau Indonesia hingga 2030</strong> 💸<br><br>" +
            "Data Bappenas (Roadmap Keuangan Berkelanjutan Tahap II): Indonesia butuh <strong>Rp 67.803 triliun</strong> investasi di sektor berkelanjutan sampai 2030, angka yang nyaris mustahil dicapai hanya dari APBN.<br><br>" +
            "<strong>Sumber pendanaan campuran (diperlukan):</strong><br>" +
            "• <strong>APBN</strong>, rata-rata Rp 100,4 triliun/tahun (2016-2021) hanya menutupi ~29% kebutuhan iklim ideal<br>" +
            "• <strong>Sovereign Green Sukuk</strong>, USD 6 miliar kumulatif (2018-2023)<br>" +
            "• <strong>JETP</strong>, USD 21,6 miliar pledge<br>" +
            "• <strong>SDG Indonesia One</strong>, USD 3,13 miliar blended finance via PT SMI<br>" +
            "• <strong>Green Climate Fund (GCF)</strong>, USD 1,93 miliar di 19 proyek<br>" +
            "• <strong>Pasar Modal</strong>, penerbitan green/sustainability bond/sukuk korporat<br>" +
            "• <strong>FDI Hijau</strong>, investasi EV/baterai/nikel dari China, Korea, Jepang<br><br>" +
            "<strong>Konteks risiko jika gagal:</strong> Penelitian UC Berkeley (2015), jika perubahan iklim tidak dimitigasi, <strong>PDB Indonesia bisa turun 23% pada 2100</strong>. Adaptation cost diestimasi USD 2,3-12,14 miliar untuk hindari kerugian 2,87% PDB.<br><br>" +
            "<strong>Peluang investor ritel:</strong> Permintaan global akan produk berkelanjutan terus naik (BlackRock, Vanguard, JP Morgan ESG funds), emiten Indonesia yang ESG-compliant punya akses lebih mudah ke modal asing &amp; valuasi premium.",
      a_en:"<strong>Indonesia's Green Financing Need Until 2030</strong> 💸<br><br>" +
            "Bappenas data (Sustainable Finance Roadmap Phase II): Indonesia needs <strong>Rp 67,803 trillion</strong> in sustainable-sector investment by 2030, a figure nearly impossible to reach from the state budget alone.<br><br>" +
            "<strong>Required blended funding sources:</strong><br>" +
            "• <strong>State Budget (APBN)</strong>, averages Rp 100.4 trillion/year (2016-2021), covering only ~29% of ideal climate needs<br>" +
            "• <strong>Sovereign Green Sukuk</strong>, USD 6 billion cumulative (2018-2023)<br>" +
            "• <strong>JETP</strong>, USD 21.6 billion pledge<br>" +
            "• <strong>SDG Indonesia One</strong>, USD 3.13 billion blended finance via PT SMI<br>" +
            "• <strong>Green Climate Fund (GCF)</strong>, USD 1.93 billion across 19 projects<br>" +
            "• <strong>Capital Markets</strong>, corporate green/sustainability bond/sukuk issuance<br>" +
            "• <strong>Green FDI</strong>, EV/battery/nickel investment from China, Korea, Japan<br><br>" +
            "<strong>Risk context if failed:</strong> UC Berkeley research (2015), if climate change is not mitigated, <strong>Indonesia's GDP could decline 23% by 2100</strong>. Adaptation cost estimated at USD 2.3-12.14 billion to avoid losses of 2.87% of GDP.<br><br>" +
            "<strong>Retail investor opportunities:</strong> Global demand for sustainable products keeps rising (BlackRock, Vanguard, JP Morgan ESG funds), ESG-compliant Indonesian issuers gain easier access to foreign capital &amp; valuation premium."
    },

    {
      id:'ikbi-bcsf-first-movers',
      kw_id:['ikbi','inisiatif keuangan berkelanjutan indonesia','first movers','bcsf','bali center sustainable finance','sustainable finance information hub','sfih','indonesia sustainable finance initiative','bank first mover indonesia'],
      kw_en:['ikbi','indonesia sustainable finance initiative','first movers indonesia','bcsf','bali center for sustainable finance','sfih','indonesia first mover banks','sustainable finance information hub'],
      a_id:"<strong>IKBI, BCSF & SFIH, Infrastruktur Pendukung Keuangan Berkelanjutan</strong> 🤝<br><br>" +
            "Tiga institusi/platform utama yang memperkuat ekosistem keuangan berkelanjutan Indonesia di luar OJK:<br><br>" +
            "<strong>1. IKBI (Inisiatif Keuangan Berkelanjutan Indonesia)</strong><br>" +
            "• Awalnya: <strong>8 bank First Mover</strong> on Sustainable Banking (2017-2018 pilot project)<br>" +
            "• Berkembang jadi <strong>15 lembaga keuangan</strong> (data 2021)<br>" +
            "• Komitmen nyata industri perbankan untuk mendukung pembiayaan hijau<br>" +
            "• Anggota awal: BCA, Mandiri, BNI, BRI, BTPN, OCBC NISP, Maybank, Muamalat<br><br>" +
            "<strong>2. BCSF (Bali Center for Sustainable Finance)</strong><br>" +
            "• Didirikan 2017, kerjasama <strong>OJK + Universitas Udayana</strong><br>" +
            "• Pelopor pusat riset keuangan berkelanjutan di Indonesia<br>" +
            "• Studi: green banking, climate risk, ESG investing, taxonomy, sustainable agriculture finance<br>" +
            "• Jadi acuan akademik untuk RAKB &amp; pelaporan POJK 51<br><br>" +
            "<strong>3. SFIH (Sustainable Finance Information Hub)</strong><br>" +
            "• Platform digital OJK (peluncuran fase Roadmap II, 2021-2025)<br>" +
            "• Berisi: TKBI Navigator, CRMS Scope 1-3 emission calculator, Climate Scenario, Projected Climate Data<br>" +
            "• Akses publik untuk investor &amp; emiten meneliti kategorisasi taksonomi<br><br>" +
            "<strong>Pengakuan internasional:</strong> Survei GlobeScan + GRI menempatkan Indonesia di <strong>peringkat teratas dunia</strong> untuk kejujuran/akurasi sustainability report, modal kepercayaan untuk fund manager global yang skeptis terhadap emerging markets.",
      a_en:"<strong>IKBI, BCSF & SFIH, Sustainable Finance Support Infrastructure</strong> 🤝<br><br>" +
            "Three key institutions/platforms strengthening Indonesia's sustainable finance ecosystem beyond OJK:<br><br>" +
            "<strong>1. IKBI (Indonesia Sustainable Finance Initiative)</strong><br>" +
            "• Initially: <strong>8 First Mover banks</strong> on Sustainable Banking (2017-2018 pilot project)<br>" +
            "• Grew to <strong>15 financial institutions</strong> (2021 data)<br>" +
            "• Banking industry's concrete commitment to support green financing<br>" +
            "• Founding members: BCA, Mandiri, BNI, BRI, BTPN, OCBC NISP, Maybank, Muamalat<br><br>" +
            "<strong>2. BCSF (Bali Center for Sustainable Finance)</strong><br>" +
            "• Established 2017, collaboration of <strong>OJK + Udayana University</strong><br>" +
            "• Pioneer sustainable finance research center in Indonesia<br>" +
            "• Studies: green banking, climate risk, ESG investing, taxonomy, sustainable agriculture finance<br>" +
            "• Academic reference for RAKB &amp; POJK 51 reporting<br><br>" +
            "<strong>3. SFIH (Sustainable Finance Information Hub)</strong><br>" +
            "• OJK's digital platform (Roadmap II launch phase, 2021-2025)<br>" +
            "• Contains: TKBI Navigator, CRMS Scope 1-3 emission calculator, Climate Scenario, Projected Climate Data<br>" +
            "• Public access for investors &amp; issuers to research taxonomy categorization<br><br>" +
            "<strong>International recognition:</strong> GlobeScan + GRI survey ranks Indonesia <strong>top in the world</strong> for honesty/accuracy of sustainability reports, a trust capital asset for global fund managers skeptical of emerging markets."
    },

    {
      id:'3-climate-risks-physical-transition-liability',
      kw_id:['risiko iklim','3 risiko iklim','physical risk','liability risk','risiko fisik','risiko hukum','climate risk indonesia','tcfd risk','risiko transisi liability'],
      kw_en:['three climate risks','physical risk','transition risk','liability risk','climate risk indonesia','tcfd risk categories','climate financial risk'],
      a_id:"<strong>3 Jenis Risiko Iklim untuk Investor & IJK</strong> ⚠️<br><br>" +
            "Roadmap II OJK &amp; TCFD mengklasifikasi risiko terkait perubahan iklim dalam 3 kategori. Penting untuk dipahami investor karena dampak finansialnya berbeda-beda:<br><br>" +
            "<strong>1. Physical Risk (Risiko Fisik)</strong><br>" +
            "Akibat fenomena perubahan iklim langsung:<br>" +
            "• <strong>Acute:</strong> banjir, kebakaran hutan, badai, cuaca ekstrem<br>" +
            "• <strong>Chronic:</strong> kenaikan permukaan laut, suhu rata-rata naik, kekeringan jangka panjang<br>" +
            "• <em>Dampak:</em> kerusakan properti, gangguan produksi, gangguan rantai pasok, perubahan harga input<br>" +
            "• <em>Sektor terdampak:</em> properti pesisir, agribisnis, asuransi, infrastruktur<br><br>" +
            "<strong>2. Transition Risk (Risiko Transisi)</strong><br>" +
            "Akibat transisi ke ekonomi rendah karbon:<br>" +
            "• <em>Perubahan kebijakan:</em> pajak karbon, regulasi emisi, larangan teknologi tertentu<br>" +
            "• <em>Inovasi teknologi:</em> teknologi bersih menggantikan yang kotor (EV vs ICE, energi terbarukan vs PLTU)<br>" +
            "• <em>Preferensi konsumen:</em> permintaan turun untuk produk tidak ramah lingkungan<br>" +
            "• <em>Sektor terdampak:</em> batubara, PLTU, sawit deforestasi, otomotif bensin<br>" +
            "• <em>Stranded asset risk:</em> aset kehilangan nilai sebelum akhir masa pakai<br><br>" +
            "<strong>3. Liability Risk (Risiko Hukum/Tuntutan)</strong><br>" +
            "Akibat tidak mempertimbangkan dampak perubahan iklim:<br>" +
            "• <em>Penalti:</em> tuntutan pemangku kepentingan, denda pelanggaran regulasi<br>" +
            "• <em>Penegakan regulasi:</em> sanksi POJK 51, POJK 14, POJK 17<br>" +
            "• <em>Litigation:</em> tuntutan class action (contoh global: ExxonMobil dituntut investor 2021)<br>" +
            "• <em>Reputational damage:</em> kehilangan akses ke dana ESG global<br><br>" +
            "<strong>Untuk investor ESG:</strong> Cek <em>climate disclosure</em> emiten, Sustainability Report TCFD-aligned biasanya menjabarkan ketiga risiko ini. Bank yang sudah CRMS-compliant punya pemetaan risiko lebih jelas.",
      a_en:"<strong>3 Climate Risks for Investors & FIs</strong> ⚠️<br><br>" +
            "OJK's Roadmap II &amp; TCFD classify climate-related risks into 3 categories. Important for investors to understand because financial impacts differ:<br><br>" +
            "<strong>1. Physical Risk</strong><br>" +
            "From direct climate change phenomena:<br>" +
            "• <strong>Acute:</strong> floods, wildfires, storms, extreme weather<br>" +
            "• <strong>Chronic:</strong> sea-level rise, rising average temperatures, prolonged droughts<br>" +
            "• <em>Impact:</em> property damage, production disruption, supply chain disruption, input price changes<br>" +
            "• <em>Affected sectors:</em> coastal property, agribusiness, insurance, infrastructure<br><br>" +
            "<strong>2. Transition Risk</strong><br>" +
            "From transition to low-carbon economy:<br>" +
            "• <em>Policy changes:</em> carbon tax, emission regulations, technology bans<br>" +
            "• <em>Technology innovation:</em> clean tech displacing dirty tech (EV vs ICE, renewables vs CFPP)<br>" +
            "• <em>Consumer preferences:</em> demand falls for non-eco-friendly products<br>" +
            "• <em>Affected sectors:</em> coal, CFPP, deforestation-linked palm oil, gasoline autos<br>" +
            "• <em>Stranded asset risk:</em> assets lose value before end of useful life<br><br>" +
            "<strong>3. Liability Risk</strong><br>" +
            "From failing to consider climate impacts:<br>" +
            "• <em>Penalties:</em> stakeholder litigation, regulatory violation fines<br>" +
            "• <em>Regulatory enforcement:</em> sanctions under POJK 51, POJK 14, POJK 17<br>" +
            "• <em>Litigation:</em> class action suits (global example: ExxonMobil sued by investors in 2021)<br>" +
            "• <em>Reputational damage:</em> losing access to global ESG funds<br><br>" +
            "<strong>For ESG investors:</strong> Check issuer's <em>climate disclosure</em>, TCFD-aligned Sustainability Reports usually map all three risks. CRMS-compliant banks have clearer risk mapping."
    },

    {
      id:'pojk-13-2025-pee-ppe',
      kw_id:['pojk 13 2025','pee','ppe','penjamin emisi efek','perantara pedagang efek','perusahaan efek','underwriter ipo','broker dealer','pengendalian internal perusahaan efek','5 fungsi pee'],
      kw_en:['pojk 13/2025','pee','ppe','securities underwriter indonesia','broker dealer indonesia','securities company internal control','indonesia ipo underwriter regulation'],
      a_id:"<strong>POJK 13/2025, Pengendalian Internal & Perilaku Perusahaan Efek (PEE/PPE)</strong> 🛡️<br><br>" +
            "Diterbitkan 2025 sebagai penyempurnaan dari aturan sebelumnya tentang kontrol internal Perusahaan Efek yang melakukan kegiatan:<br>" +
            "• <strong>PEE (Penjamin Emisi Efek)</strong>, underwriter IPO/SPO<br>" +
            "• <strong>PPE (Perantara Pedagang Efek)</strong>, broker-dealer/sekuritas ritel<br><br>" +
            "<strong>7 Prinsip Wajib PEE/PPE:</strong><br>" +
            "1. Integritas • 2. Profesionalisme • 3. Mengutamakan kepentingan nasabah • 4. Kecukupan sumber daya • 5. Keterbukaan informasi • 6. Benturan kepentingan • 7. Kepatuhan<br><br>" +
            "<strong>5 Fungsi Wajib PEE:</strong><br>" +
            "1. <strong>Penjaminan emisi</strong>, uji tuntas Emiten, kontrak penjaminan dengan disclosure afiliasi, valuasi harga Efek<br>" +
            "2. <strong>Manajemen risiko</strong>, review uji tuntas, asesmen risiko penjaminan, kertas kerja simpan <strong>min. 10 tahun</strong><br>" +
            "3. <strong>Pembukuan</strong>, buku besar, rekonsiliasi bank, pencatatan transaksi elektronik+manual<br>" +
            "4. <strong>Kepatuhan</strong>, evaluasi pasca-transaksi, pengendalian internal, APU/PPT/PPPSPM<br>" +
            "5. <strong>SDM</strong>, pengelolaan &amp; pengembangan kualitas SDM<br><br>" +
            "<strong>Persyaratan Khusus:</strong><br>" +
            "• Pejabat fungsi riset wajib punya izin Wakil Perusahaan Efek + sertifikat analis Efek<br>" +
            "• Riset wajib independen, pelaporan &amp; kompensasi tidak boleh terpengaruh proyek PEE<br>" +
            "• Pejabat manajemen risiko wajib sertifikat manajemen risiko<br><br>" +
            "<strong>Sanksi Administratif (Pasal 5):</strong><br>" +
            "Peringatan tertulis → denda → pembatasan kegiatan → pembekuan → pencabutan izin usaha → pembatalan pendaftaran → pencabutan izin orang perseorangan.<br><br>" +
            "<strong>Mengapa relevan investor ritel?</strong> POJK 13/2025 meningkatkan kualitas due diligence PEE saat IPO, risiko IPO bermasalah (overpriced, prospektus menyesatkan) berkurang. Bagi nasabah broker (PPE), perlindungan rekening efek &amp; KYC makin ketat.",
      a_en:"<strong>POJK 13/2025, Internal Control & Conduct of Securities Companies (PEE/PPE)</strong> 🛡️<br><br>" +
            "Issued in 2025 as an enhancement of previous rules on internal control of Securities Companies operating as:<br>" +
            "• <strong>PEE (Penjamin Emisi Efek)</strong>, IPO/SPO underwriter<br>" +
            "• <strong>PPE (Perantara Pedagang Efek)</strong>, broker-dealer/retail securities<br><br>" +
            "<strong>7 Mandatory PEE/PPE Principles:</strong><br>" +
            "1. Integrity • 2. Professionalism • 3. Customer interest first • 4. Resource adequacy • 5. Information disclosure • 6. Conflict of interest • 7. Compliance<br><br>" +
            "<strong>5 Mandatory PEE Functions:</strong><br>" +
            "1. <strong>Underwriting</strong>, Issuer due diligence, underwriting contract with affiliation disclosure, securities pricing<br>" +
            "2. <strong>Risk management</strong>, DD review, underwriting risk assessment, working paper retention <strong>min. 10 years</strong><br>" +
            "3. <strong>Bookkeeping</strong>, general ledger, bank reconciliation, electronic+manual transaction recording<br>" +
            "4. <strong>Compliance</strong>, post-transaction evaluation, internal controls, AML/CTF/CPF<br>" +
            "5. <strong>HR</strong>, workforce management &amp; quality development<br><br>" +
            "<strong>Special Requirements:</strong><br>" +
            "• Research officers must hold Securities Company Representative license + securities analyst certificate<br>" +
            "• Research must be independent, reporting &amp; compensation cannot be influenced by PEE projects<br>" +
            "• Risk management officers must hold risk management certificate<br><br>" +
            "<strong>Administrative Sanctions (Article 5):</strong><br>" +
            "Written warning → fine → business activity limitation → freeze → license revocation → registration cancellation → individual license revocation.<br><br>" +
            "<strong>Why relevant for retail investors?</strong> POJK 13/2025 raises the quality of PEE due diligence during IPOs, risk of problematic IPOs (overpriced, misleading prospectus) drops. For broker (PPE) clients, securities account protection &amp; KYC become stricter."
    },

    {
      id:'seojk-16-2021-annual-report',
      kw_id:['seojk 16 2021','laporan tahunan emiten','isi laporan tahunan','annual report emiten','lampiran ii sustainability report','format laporan tahunan','sustainability report integration','laporan tanggung jawab sosial'],
      kw_en:['seojk 16/2021','annual report indonesia','indonesia annual report content','sustainability report integration','annual report format issuer indonesia'],
      a_id:"<strong>SEOJK 16/SEOJK.04/2021, Bentuk & Isi Laporan Tahunan Emiten</strong> 📑<br><br>" +
            "Surat Edaran OJK yang menjabarkan secara teknis bentuk &amp; isi Laporan Tahunan Emiten/Perusahaan Publik, sebagai implementasi POJK 29/2016 &amp; integrasi dengan POJK 51/2017 (Sustainability Report).<br><br>" +
            "<strong>10 Bagian Wajib Laporan Tahunan:</strong><br>" +
            "1. <strong>Ikhtisar data keuangan penting</strong>, 17 metrik finansial dalam 3-tahun komparatif<br>" +
            "2. <strong>Informasi saham</strong>, kapitalisasi, harga tinggi-rendah-tutup, volume, corporate actions, suspension/delisting<br>" +
            "3. <strong>Laporan Direksi</strong>, kinerja, strategi, prospek, tata kelola<br>" +
            "4. <strong>Laporan Dewan Komisaris</strong>, penilaian Direksi, pandangan prospek &amp; tata kelola<br>" +
            "5. <strong>Profil Emiten</strong>, visi/misi, struktur organisasi, profil Direksi &amp; Dekom, dewan pengawas syariah jika ada<br>" +
            "6. <strong>Analisis &amp; pembahasan manajemen (MD&amp;A)</strong><br>" +
            "7. <strong>Tata kelola</strong>, komite audit, komite nominasi remunerasi, sekretaris perusahaan, unit audit internal, whistleblowing system, kode etik, kebijakan anti-korupsi<br>" +
            "8. <strong>Tanggung Jawab Sosial &amp; Lingkungan</strong> = <strong>Sustainability Report</strong> (per POJK 51/2017 &amp; Lampiran II SEOJK 16/2021)<br>" +
            "9. <strong>Laporan keuangan tahunan diaudit</strong><br>" +
            "10. <strong>Surat pernyataan tanggung jawab Direksi &amp; Dekom</strong><br><br>" +
            "<strong>Konten Wajib Sustainability Report (bagian 8):</strong><br>" +
            "(a) Strategi keberlanjutan • (b) Ikhtisar 3 aspek (ekonomi/sosial/lingkungan) • (c) Profil singkat • (d) Penjelasan Direksi • (e) Tata kelola keberlanjutan • (f) Kinerja keberlanjutan • (g) Verifikasi independen (jika ada) • (h) Lembar umpan balik • (i) Tanggapan umpan balik tahun lalu<br><br>" +
            "<strong>Catatan penting:</strong> Sustainability Report adalah <em>bagian tidak terpisahkan</em> dari Laporan Tahunan, tapi <strong>boleh disajikan terpisah</strong>. Banyak emiten besar publish keduanya, Sustainability Report sering lebih panjang &amp; rinci.<br><br>" +
            "<strong>Untuk investor:</strong> Bacaan wajib sebelum invest, Laporan Tahunan punya format konsisten, mudah dibandingkan antar emiten. Periksa bagian 8 untuk komitmen ESG yang terukur, bukan sekadar narasi.",
      a_en:"<strong>SEOJK 16/SEOJK.04/2021, Form & Content of Annual Report for Issuers</strong> 📑<br><br>" +
            "OJK Circular Letter that technically specifies the form &amp; content of Annual Reports for Issuers/Public Companies, implementing POJK 29/2016 &amp; integrating with POJK 51/2017 (Sustainability Report).<br><br>" +
            "<strong>10 Mandatory Annual Report Sections:</strong><br>" +
            "1. <strong>Key financial highlights</strong>, 17 financial metrics in 3-year comparative<br>" +
            "2. <strong>Share information</strong>, market cap, high-low-close prices, volume, corporate actions, suspension/delisting<br>" +
            "3. <strong>Board of Directors Report</strong>, performance, strategy, outlook, governance<br>" +
            "4. <strong>Board of Commissioners Report</strong>, Directors evaluation, outlook &amp; governance views<br>" +
            "5. <strong>Issuer Profile</strong>, vision/mission, org structure, BoD &amp; BoC profile, sharia supervisory board if any<br>" +
            "6. <strong>Management Discussion &amp; Analysis (MD&amp;A)</strong><br>" +
            "7. <strong>Governance</strong>, audit committee, nomination remuneration committee, corporate secretary, internal audit unit, whistleblowing system, code of conduct, anti-corruption policy<br>" +
            "8. <strong>Social &amp; Environmental Responsibility</strong> = <strong>Sustainability Report</strong> (per POJK 51/2017 &amp; SEOJK 16/2021 Appendix II)<br>" +
            "9. <strong>Audited annual financial statements</strong><br>" +
            "10. <strong>Statement of Responsibility from BoD &amp; BoC</strong><br><br>" +
            "<strong>Mandatory Sustainability Report Content (Section 8):</strong><br>" +
            "(a) Sustainability strategy • (b) Overview of 3 aspects (economic/social/environmental) • (c) Brief profile • (d) Directors' explanation • (e) Sustainability governance • (f) Sustainability performance • (g) Independent verification (if any) • (h) Feedback form • (i) Response to last year's feedback<br><br>" +
            "<strong>Important note:</strong> The Sustainability Report is an <em>integral part</em> of the Annual Report but <strong>may be presented separately</strong>. Many large issuers publish both, Sustainability Reports are often longer &amp; more detailed.<br><br>" +
            "<strong>For investors:</strong> Required reading before investing, Annual Reports have a consistent format, easy to compare across issuers. Check Section 8 for measurable ESG commitments, not just narrative."
    },

    {
      id:'bank-mandiri-sustainability-case',
      kw_id:['bank mandiri sustainability','bank mandiri esg','sustainability report bank mandiri','bmri esg','pembiayaan berkelanjutan mandiri','green bond mandiri','sustainability bond bank','contoh sustainability report','bank esg leader indonesia'],
      kw_en:['bank mandiri sustainability','bmri esg','bank mandiri esg leader','green bond bank mandiri','sustainability bond indonesia bank','bank mandiri sustainability report','indonesia esg bank case'],
      a_id:"<strong>Bank Mandiri (BMRI), Studi Kasus Bank ESG Leader Indonesia 2025</strong> 🏆<br><br>" +
            "BMRI memimpin di sustainability disclosure perbankan Indonesia, laporan keberlanjutan 2025 setebal 450+ halaman, GRI + SASB + TCFD aligned, Independent Assurance dari pihak ketiga.<br><br>" +
            "<strong>Pembiayaan Berkelanjutan (KKUB) 2025:</strong><br>" +
            "• Total: <strong>Rp 315,8 triliun</strong> (8% YoY), 11,2% dari total kredit bank-only<br>" +
            "• Green Portfolio: Rp 166,2 triliun (+11,7% YoY)<br>" +
            "• Social Portfolio: Rp 149,6 triliun (+4,1% YoY)<br><br>" +
            "<strong>Breakdown per Kategori KKUB:</strong><br>" +
            "• UMKM: <strong>Rp 140,1 T</strong> (+4,5% YoY), pilar terbesar<br>" +
            "• SDA &amp; tata guna lahan berkelanjutan: Rp 115,7 T<br>" +
            "• Eco-efficient products: Rp 15 T (+41,7% YoY), pertumbuhan tertinggi<br>" +
            "• Energi terbarukan: Rp 12,9 T (+9,4%)<br>" +
            "• Transportasi bersih: Rp 10,3 T (+36,5%)<br>" +
            "• Pengelolaan air berkelanjutan: Rp 5,8 T (+392% YoY!)<br><br>" +
            "<strong>Instrumen Sustainable Finance:</strong><br>" +
            "• Sustainability Bond 2021: USD 300 juta (46% Green / 54% Social)<br>" +
            "• ESG Repo 2022: USD 500 juta (74% Green / 26% Social)<br>" +
            "• Green Bond Phase 1 2023: Rp 5 T (56% Energi Terbarukan / 44% SDA)<br>" +
            "• Green Bond Phase 2 2025: Rp 5 T (72% SDA / 28% Transportasi Bersih)<br>" +
            "• Sustainability Bond Phase 1 2025: Rp 5 T<br>" +
            "• Sustainability-Linked Term Loan: USD 339 juta<br><br>" +
            "<strong>Emisi GHG (Scope 1+2):</strong><br>" +
            "• 2025: 243.736 tCO2e (vs baseline 2019: 358.753 tCO2e), turun <strong>32%</strong><br>" +
            "• Intensitas emisi pembiayaan: 23,12 tCO2e/Rp miliar, turun 12,4% YoY<br>" +
            "• <em>Financed emissions:</em> 20,32 juta tCO2e (60,9% portfolio)<br><br>" +
            "<strong>Pengakuan:</strong> CGPI 95,36 (Most Trusted), bank nasional pertama dengan Sustainable Finance Framework (SFF) + Transition Finance Framework (TFF), anggota PCAF (Partnership for Carbon Accounting Financials).",
      a_en:"<strong>Bank Mandiri (BMRI), Indonesia ESG Bank Leader Case Study 2025</strong> 🏆<br><br>" +
            "BMRI leads sustainability disclosure among Indonesian banks, 2025 Sustainability Report is 450+ pages, GRI + SASB + TCFD aligned, with third-party Independent Assurance.<br><br>" +
            "<strong>Sustainable Financing (KKUB) 2025:</strong><br>" +
            "• Total: <strong>Rp 315.8 trillion</strong> (8% YoY), 11.2% of total bank-only loans<br>" +
            "• Green Portfolio: Rp 166.2 trillion (+11.7% YoY)<br>" +
            "• Social Portfolio: Rp 149.6 trillion (+4.1% YoY)<br><br>" +
            "<strong>Breakdown per KKUB Category:</strong><br>" +
            "• MSME: <strong>Rp 140.1 T</strong> (+4.5% YoY), largest pillar<br>" +
            "• Sustainable natural resources &amp; land use: Rp 115.7 T<br>" +
            "• Eco-efficient products: Rp 15 T (+41.7% YoY), highest growth<br>" +
            "• Renewable energy: Rp 12.9 T (+9.4%)<br>" +
            "• Clean transport: Rp 10.3 T (+36.5%)<br>" +
            "• Sustainable water management: Rp 5.8 T (+392% YoY!)<br><br>" +
            "<strong>Sustainable Finance Instruments:</strong><br>" +
            "• Sustainability Bond 2021: USD 300M (46% Green / 54% Social)<br>" +
            "• ESG Repo 2022: USD 500M (74% Green / 26% Social)<br>" +
            "• Green Bond Phase 1 2023: Rp 5 T (56% Renewable / 44% SDA)<br>" +
            "• Green Bond Phase 2 2025: Rp 5 T (72% SDA / 28% Clean Transport)<br>" +
            "• Sustainability Bond Phase 1 2025: Rp 5 T<br>" +
            "• Sustainability-Linked Term Loan: USD 339M<br><br>" +
            "<strong>GHG Emissions (Scope 1+2):</strong><br>" +
            "• 2025: 243,736 tCO2e (vs 2019 baseline: 358,753 tCO2e), <strong>32% reduction</strong><br>" +
            "• Financed emission intensity: 23.12 tCO2e/Rp billion, 12.4% YoY drop<br>" +
            "• <em>Financed emissions:</em> 20.32 million tCO2e (60.9% portfolio)<br><br>" +
            "<strong>Recognition:</strong> CGPI 95.36 (Most Trusted), first national bank with Sustainable Finance Framework (SFF) + Transition Finance Framework (TFF), PCAF (Partnership for Carbon Accounting Financials) member."
    },

    {
      id:'kkub-11-kategori',
      kw_id:['kkub','kategori kegiatan usaha berkelanjutan','11 kategori','sustainable business activities category','green bond eligible','sektor hijau pojk 60','11 sektor hijau','pojk 60 2017 sektor'],
      kw_en:['kkub','sustainable business activities category','11 categories indonesia','green bond eligible sectors indonesia','pojk 60/2017 sectors','indonesia green sectors'],
      a_id:"<strong>11 Kategori Kegiatan Usaha Berkelanjutan (KKUB)</strong> 🌱<br><br>" +
            "KKUB adalah klasifikasi resmi sektor hijau Indonesia per <strong>Pasal 4 POJK 60/POJK.04/2017</strong>. Dijadikan acuan oleh lembaga jasa keuangan dalam memilah portfolio hijau (lihat Bank Mandiri: Rp 315,8 T pembiayaan masuk KKUB).<br><br>" +
            "<strong>11 Kategori:</strong><br>" +
            "1. <strong>Energi Terbarukan</strong>, panas bumi, hidro, surya, bayu, biogas, biomassa<br>" +
            "2. <strong>Efisiensi Energi</strong>, renovasi gedung hemat energi, chiller AC efisien, lampu LED<br>" +
            "3. <strong>Pencegahan &amp; Pengendalian Polusi</strong>, teknologi clean coal, scrubber, capture &amp; storage<br>" +
            "4. <strong>Pengelolaan SDA &amp; Tata Guna Lahan Berkelanjutan</strong>, pertanian regeneratif, perkebunan bersertifikat (RSPO, FSC), agroforestry<br>" +
            "5. <strong>Konservasi Keanekaragaman Hayati Darat &amp; Air</strong>, restorasi mangrove, taman nasional, marine protected areas<br>" +
            "6. <strong>Transportasi Ramah Lingkungan</strong>, EV, BRT, kereta listrik, sepeda, infrastruktur charging<br>" +
            "7. <strong>Pengelolaan Air &amp; Air Limbah Berkelanjutan</strong>, sanitasi, IPAL, recycling air<br>" +
            "8. <strong>Adaptasi Perubahan Iklim</strong>, proyek tahan iklim untuk area rawan bencana<br>" +
            "9. <strong>Produk Ramah Lingkungan</strong>, eco-efficient products (kategori serapan tinggi di 2025)<br>" +
            "10. <strong>Bangunan Berwawasan Lingkungan</strong>, Green Building sertifikat GBCI, EDGE, LEED<br>" +
            "11. <strong>Kegiatan Usaha Berwawasan Lingkungan Lainnya</strong>, kategori payung untuk inovasi baru<br><br>" +
            "<strong>Plus 1 Kategori Sosial (12. UMKM):</strong> Usaha Mikro, Kecil, &amp; Menengah dapat <em>sustainable financing</em> jika memenuhi kriteria, kategori terbesar di portfolio Bank Mandiri (Rp 140 T).<br><br>" +
            "<strong>Untuk investor:</strong> Saat menilai green bond/sukuk/sustainability bond, periksa <em>use of proceeds</em>-nya menyebut KKUB kategori berapa. Bond dengan 100% proceeds di KKUB jelas hijau; bond \"transition\" boleh mencakup transisi menuju KKUB.",
      a_en:"<strong>11 KKUB, <em>Kategori Kegiatan Usaha Berkelanjutan</em> (Sustainable Business Activities Categories)</strong> 🌱<br><br>" +
            "KKUB (literally: <em>Categories of Sustainable Business Activities</em>) is Indonesia's official green-sector classification per <strong>Article 4 POJK 60/POJK.04/2017</strong>. Used as a reference by financial institutions to classify green portfolios (e.g., Bank Mandiri: Rp 315.8 T of financing within KKUB categories).<br><br>" +
            "<strong>11 Categories:</strong><br>" +
            "1. <strong>Renewable Energy</strong>, geothermal, hydro, solar, wind, biogas, biomass<br>" +
            "2. <strong>Energy Efficiency</strong>, energy-saving building retrofits, efficient AC chillers, LED lighting<br>" +
            "3. <strong>Pollution Prevention &amp; Control</strong>, clean coal tech, scrubbers, capture &amp; storage<br>" +
            "4. <strong>Sustainable Natural Resources &amp; Land Use</strong>, regenerative agriculture, certified plantations (RSPO, FSC), agroforestry<br>" +
            "5. <strong>Terrestrial &amp; Aquatic Biodiversity Conservation</strong>, mangrove restoration, national parks, marine protected areas<br>" +
            "6. <strong>Sustainable Transport</strong>, EVs, BRT, electric rail, bicycles, charging infrastructure<br>" +
            "7. <strong>Sustainable Water &amp; Wastewater Management</strong>, sanitation, WWTPs, water recycling<br>" +
            "8. <strong>Climate Change Adaptation</strong>, climate-resilient projects for disaster-prone areas<br>" +
            "9. <strong>Eco-Efficient Products</strong>, high-uptake category in 2025<br>" +
            "10. <strong>Green Buildings</strong>, GBCI, EDGE, LEED certified<br>" +
            "11. <strong>Other Environmentally Friendly Business Activities</strong>, umbrella category for new innovations<br><br>" +
            "<strong>Plus 1 Social Category (12. MSME):</strong> Micro, Small, &amp; Medium Enterprises can get <em>sustainable financing</em> if criteria are met, the largest category in Bank Mandiri's portfolio (Rp 140 T).<br><br>" +
            "<strong>For investors:</strong> When evaluating a green/sustainability bond/sukuk, check the <em>use of proceeds</em> for which KKUB category. Bonds with 100% KKUB proceeds are clearly green; \"transition\" bonds may cover transition toward KKUB."
    },

    {
      id:'asean-fdi-indonesia-ev',
      kw_id:['asean fdi','asean investment','fdi indonesia','investasi asing indonesia','pabrik baterai indonesia','byd indonesia','hyundai lg battery','ekosistem ev indonesia','asean nikel'],
      kw_en:['asean fdi','asean investment report','indonesia fdi 2024','indonesia ev battery fdi','byd indonesia','hyundai lg battery','indonesia ev ecosystem fdi','asean nickel'],
      a_id:"<strong>ASEAN FDI & Posisi Indonesia di Rantai Pasok EV Global</strong> 🌏<br><br>" +
            "<em>ASEAN Investment Report 2025</em> (Sekretariat ASEAN + UNCTAD): ASEAN jadi destinasi FDI #1 di kalangan negara berkembang selama 4 tahun berturut-turut.<br><br>" +
            "<strong>Data ASEAN FDI 2024:</strong><br>" +
            "• <strong>USD 226 miliar</strong> total inflow (+8,5% YoY)<br>" +
            "• Intra-ASEAN investment: 14% market share<br>" +
            "• Global FDI turun 11% di periode sama → ASEAN melawan tren<br><br>" +
            "<strong>Posisi Indonesia di Supply Chain EV:</strong><br>" +
            "• <strong>Hub baterai EV global</strong>, cadangan nikel terbesar dunia, smelter HPAL &amp; RKEF beroperasi<br>" +
            "• Investasi besar terkonfirmasi (2022-2025):<br>" +
            "&nbsp;&nbsp;• Hyundai-LG battery plant (US: 2 GWh awal → ekspansi)<br>" +
            "&nbsp;&nbsp;• CATL + Antam: USD 5 miliar nickel refinery (2022)<br>" +
            "&nbsp;&nbsp;• BYD: pabrik EV assembly (2024), penjualan terbesar di Indonesia 2024<br>" +
            "&nbsp;&nbsp;• VinFast (Vietnam): EV assembly plant (2024)<br>" +
            "&nbsp;&nbsp;• Skyworth + Polytron: EV partnership (2023-24)<br>" +
            "&nbsp;&nbsp;• Changan, GAC Aion (China): EV CKD/assembly<br>" +
            "&nbsp;&nbsp;• Gotion (China): battery supply chain dev (2023)<br>" +
            "&nbsp;&nbsp;• Huayou Recycling (China): EV battery recycling (2024)<br><br>" +
            "<strong>Penjualan EV Indonesia 2024:</strong> 43.188 unit (dominasi BYD 15.429 + Wuling 13.117). HEV: 70.621 unit. EV production: 25.861 unit.<br><br>" +
            "<strong>Tantangan FDI berkelanjutan ASEAN:</strong> ketersediaan SDM terampil, infrastruktur, logistik, kongesti pelabuhan, akses pendanaan perdagangan, pengakuan mutual standar &amp; sertifikasi, akses energi terbarukan andal.<br><br>" +
            "<strong>Mengapa relevan investor?</strong> Indonesia jadi <em>winner</em> hilirisasi nikel, emiten seperti ANTM, INCO, MBMA, HRUM, MEDC, MERDEKA punya tailwind struktural. Tapi waspada: green sourcing standards Eropa makin ketat (EU Battery Regulation 2024).",
      a_en:"<strong>ASEAN FDI & Indonesia's Position in the Global EV Supply Chain</strong> 🌏<br><br>" +
            "<em>ASEAN Investment Report 2025</em> (ASEAN Secretariat + UNCTAD): ASEAN is the #1 FDI destination among developing regions for 4 consecutive years.<br><br>" +
            "<strong>ASEAN FDI Data 2024:</strong><br>" +
            "• <strong>USD 226 billion</strong> total inflow (+8.5% YoY)<br>" +
            "• Intra-ASEAN investment: 14% market share<br>" +
            "• Global FDI dropped 11% in the same period → ASEAN bucked the trend<br><br>" +
            "<strong>Indonesia's Position in EV Supply Chain:</strong><br>" +
            "• <strong>Global EV battery hub</strong>, world's largest nickel reserves, HPAL &amp; RKEF smelters operating<br>" +
            "• Major confirmed investments (2022-2025):<br>" +
            "&nbsp;&nbsp;• Hyundai-LG battery plant (US: 2 GWh initial → expansion)<br>" +
            "&nbsp;&nbsp;• CATL + Antam: USD 5 billion nickel refinery (2022)<br>" +
            "&nbsp;&nbsp;• BYD: EV assembly plant (2024), best-selling brand in Indonesia 2024<br>" +
            "&nbsp;&nbsp;• VinFast (Vietnam): EV assembly plant (2024)<br>" +
            "&nbsp;&nbsp;• Skyworth + Polytron: EV partnership (2023-24)<br>" +
            "&nbsp;&nbsp;• Changan, GAC Aion (China): EV CKD/assembly<br>" +
            "&nbsp;&nbsp;• Gotion (China): battery supply chain development (2023)<br>" +
            "&nbsp;&nbsp;• Huayou Recycling (China): EV battery recycling (2024)<br><br>" +
            "<strong>Indonesia EV Sales 2024:</strong> 43,188 units (BYD 15,429 + Wuling 13,117 dominate). HEV: 70,621 units. EV production: 25,861 units.<br><br>" +
            "<strong>ASEAN sustainable FDI challenges:</strong> skilled labor availability, infrastructure, logistics, port congestion, trade finance access, mutual standards &amp; certification recognition, reliable renewable energy access.<br><br>" +
            "<strong>Why does it matter for investors?</strong> Indonesia is a <em>winner</em> in nickel downstreaming, issuers like ANTM, INCO, MBMA, HRUM, MEDC, MERDEKA have structural tailwinds. But beware: European green-sourcing standards are tightening (EU Battery Regulation 2024)."
    },

    {
      id:'cuq-methodology',
      kw_id:['cuq','chatbot usability questionnaire','holmes','kuesioner chatbot','evaluasi chatbot','skala likert chatbot','metodologi evaluasi chatbot','penilaian elemu lestari'],
      kw_en:['cuq','chatbot usability questionnaire','holmes 2019','chatbot evaluation methodology','likert scale chatbot','chatbot assessment methodology','elemu lestari assessment'],
      a_id:"<strong>Chatbot Usability Questionnaire (CUQ), Metodologi Evaluasi Sari</strong> 📊<br><br>" +
            "CUQ adalah kuesioner standar untuk mengukur usabilitas chatbot, dikembangkan oleh <strong>Holmes, Moorhead, Bond, Zheng, Coates &amp; McTear (2019)</strong> di Ulster University. Dipakai untuk evaluasi Elemu Lestari sebagai bagian dari tugas individu Master of Finance (FinTech) di Asia Pacific University.<br><br>" +
            "<strong>Struktur:</strong><br>" +
            "• <strong>16 pertanyaan</strong> berimbang (balanced):<br>" +
            "&nbsp;&nbsp;• 8 positif (pertanyaan ganjil 1, 3, 5, ..., 15)<br>" +
            "&nbsp;&nbsp;• 8 negatif (pertanyaan genap 2, 4, 6, ..., 16)<br>" +
            "• Skala <strong>Likert 5-poin</strong>: Strongly Disagree (1) → Strongly Agree (5)<br>" +
            "• 4 dimensi yang diukur: personality, onboarding, navigation, error handling<br><br>" +
            "<strong>Rumus Skor (max 100):</strong><br>" +
            "1. Sum semua jawaban ganjil (S_odd, max 40)<br>" +
            "2. Sum semua jawaban genap (S_even, max 40)<br>" +
            "3. (S_odd − 8) + (40 − S_even) = skor mentah (max 64)<br>" +
            "4. Skor akhir = (skor mentah ÷ 64) × 100<br><br>" +
            "<strong>Contoh dari paper:</strong> Skor (4+5+4+5+4+4+3+5)=34 odd, (4+1+4+1+1+1+2+1)=15 even → (34−8)+(40−15)=51 → (51/64)×100 = <strong>79,7</strong><br><br>" +
            "<strong>Interpretasi (informal):</strong> 80+ = sangat baik, 70-79 = baik, 60-69 = cukup, 50-59 = perlu perbaikan, &lt;50 = buruk.<br><br>" +
            "<strong>Implementasi di Elemu Lestari:</strong><br>" +
            "• Modal CUQ form 16-item bilingual (BI/EN)<br>" +
            "• Auto-scoring + JSON export (untuk Excel/SPSS analysis)<br>" +
            "• Save responses ke localStorage untuk reuse<br>" +
            "• Metadata lengkap (timestamp, language, user agent) untuk dokumentasi tugas<br><br>" +
            "<strong>Untuk evaluasi tugas individu:</strong> Target ≥30 responden retail investor (mahasiswa MFin + komunitas saham), bandingkan skor CUQ Elemu Lestari dengan chatbot lain (RKB OJK, IDX virtual assistant) sebagai baseline.",
      a_en:"<strong>Chatbot Usability Questionnaire (CUQ), Sari's Evaluation Methodology</strong> 📊<br><br>" +
            "CUQ is the standard questionnaire to measure chatbot usability, developed by <strong>Holmes, Moorhead, Bond, Zheng, Coates &amp; McTear (2019)</strong> at Ulster University. Used to evaluate Elemu Lestari as part of the Master of Finance (FinTech) individual assignment at Asia Pacific University.<br><br>" +
            "<strong>Structure:</strong><br>" +
            "• <strong>16 balanced questions</strong>:<br>" +
            "&nbsp;&nbsp;• 8 positive (odd questions 1, 3, 5, ..., 15)<br>" +
            "&nbsp;&nbsp;• 8 negative (even questions 2, 4, 6, ..., 16)<br>" +
            "• <strong>5-point Likert scale</strong>: Strongly Disagree (1) → Strongly Agree (5)<br>" +
            "• 4 dimensions measured: personality, onboarding, navigation, error handling<br><br>" +
            "<strong>Score Formula (max 100):</strong><br>" +
            "1. Sum all odd answers (S_odd, max 40)<br>" +
            "2. Sum all even answers (S_even, max 40)<br>" +
            "3. (S_odd − 8) + (40 − S_even) = raw score (max 64)<br>" +
            "4. Final score = (raw score ÷ 64) × 100<br><br>" +
            "<strong>Example from paper:</strong> (4+5+4+5+4+4+3+5)=34 odd, (4+1+4+1+1+1+2+1)=15 even → (34−8)+(40−15)=51 → (51/64)×100 = <strong>79.7</strong><br><br>" +
            "<strong>Interpretation (informal):</strong> 80+ = excellent, 70-79 = good, 60-69 = fair, 50-59 = needs improvement, &lt;50 = poor.<br><br>" +
            "<strong>Implementation in Elemu Lestari:</strong><br>" +
            "• 16-item bilingual CUQ form modal (BI/EN)<br>" +
            "• Auto-scoring + JSON export (for Excel/SPSS analysis)<br>" +
            "• Save responses to localStorage for reuse<br>" +
            "• Complete metadata (timestamp, language, user agent) for assignment documentation<br><br>" +
            "<strong>For the individual assignment:</strong> Target ≥30 retail investor respondents (MFin students + stock community), compare Elemu Lestari's CUQ score against other chatbots (RKB OJK, IDX virtual assistant) as baseline."
    },

    {
      id:'pojk-5-2014-penjaminan',
      kw_id:['pojk 5 2014','lembaga penjaminan','jamkrindo','askrindo','penjaminan kredit','penjaminan syariah','perizinan lembaga penjaminan','penjaminan ulang','kredit umkm dijamin','sertifikat penjaminan'],
      kw_en:['pojk 5/2014','credit guarantee institution','jamkrindo','askrindo','indonesia credit guarantee','sharia guarantee','msme credit guarantee indonesia','reguarantee'],
      a_id:"<strong>POJK 5/POJK.05/2014, Lembaga Penjaminan Kredit</strong> 🛡️<br><br>" +
            "Lembaga Penjaminan adalah BUMN/swasta yang menjamin pemenuhan kewajiban finansial debitur (UMKM, koperasi, perorangan) ke Lembaga Keuangan. Berperan vital dalam akses kredit UMKM yang tidak punya agunan cukup.<br><br>" +
            "<strong>4 Jenis Lembaga Penjaminan:</strong><br>" +
            "1. <strong>Perusahaan Penjaminan</strong> (konvensional)<br>" +
            "2. <strong>Perusahaan Penjaminan Syariah</strong> (berdasarkan fatwa DSN MUI)<br>" +
            "3. <strong>Perusahaan Penjaminan Ulang</strong> (re-guarantee)<br>" +
            "4. <strong>Perusahaan Penjaminan Ulang Syariah</strong><br><br>" +
            "<strong>Pemain utama Indonesia:</strong><br>" +
            "• <strong>Jamkrindo</strong> (PT Jaminan Kredit Indonesia, Persero), penjamin KUR terbesar<br>" +
            "• <strong>Askrindo</strong> (PT Asuransi Kredit Indonesia, Persero), Persero, sekarang konsolidasi ke IFG (Indonesia Financial Group)<br>" +
            "• Jamkrida Daerah (Jamkrida Bali, Jakarta, Jabar, dst)<br>" +
            "• Perusahaan Penjaminan swasta (PT Penjaminan Jamkrindo Syariah, dll)<br><br>" +
            "<strong>Persyaratan Izin:</strong><br>" +
            "• Akta pendirian + anggaran dasar<br>" +
            "• Data Direksi (KTP, riwayat hidup, fit &amp; proper test OJK)<br>" +
            "• Direksi tidak boleh rangkap jabatan di Lembaga Penjaminan lain<br>" +
            "• Dewan Komisaris max rangkap 3 (tiga) Lembaga<br>" +
            "• Pengalaman min. 2 tahun di Penjaminan/perbankan untuk salah satu Direksi<br>" +
            "• Sumber modal bukan dari pinjaman/pencucian uang<br>" +
            "• Untuk syariah: wajib Dewan Pengawas Syariah (DPS)<br><br>" +
            "<strong>Mengapa relevan ESG?</strong> Lembaga Penjaminan adalah <em>enabler</em> akses UMKM ke kredit hijau/sustainable financing (pilar Social di ESG). Tanpa penjaminan, UMKM tidak punya akses ke pembiayaan untuk transisi hijau (instalasi panel surya, peralatan hemat energi).",
      a_en:"<strong>POJK 5/POJK.05/2014, Credit Guarantee Institutions</strong> 🛡️<br><br>" +
            "Credit Guarantee Institutions are SOEs/private entities that guarantee the fulfillment of debtor financial obligations (MSMEs, cooperatives, individuals) to Financial Institutions. Vital role in MSME credit access for those without enough collateral.<br><br>" +
            "<strong>4 Types of Guarantee Institutions:</strong><br>" +
            "1. <strong>Conventional Guarantee Company</strong><br>" +
            "2. <strong>Sharia Guarantee Company</strong> (based on DSN MUI fatwa)<br>" +
            "3. <strong>Re-Guarantee Company</strong><br>" +
            "4. <strong>Sharia Re-Guarantee Company</strong><br><br>" +
            "<strong>Main Indonesian players:</strong><br>" +
            "• <strong>Jamkrindo</strong> (PT Jaminan Kredit Indonesia, Persero), largest KUR guarantor<br>" +
            "• <strong>Askrindo</strong> (PT Asuransi Kredit Indonesia, Persero), now consolidated into IFG (Indonesia Financial Group)<br>" +
            "• Regional Jamkrida (Bali, Jakarta, Jabar, etc.)<br>" +
            "• Private guarantee companies (PT Penjaminan Jamkrindo Syariah, etc.)<br><br>" +
            "<strong>Licensing Requirements:</strong><br>" +
            "• Articles of incorporation + articles of association<br>" +
            "• Director data (ID, CV, OJK fit &amp; proper test)<br>" +
            "• Directors cannot hold concurrent positions at other Guarantee Institutions<br>" +
            "• Commissioners may serve concurrently at max 3 (three) Institutions<br>" +
            "• Min. 2 years experience in Guarantee/banking for at least one Director<br>" +
            "• Capital cannot come from loans/money laundering<br>" +
            "• For sharia: mandatory Sharia Supervisory Board (DPS)<br><br>" +
            "<strong>Why relevant for ESG?</strong> Guarantee Institutions are <em>enablers</em> of MSME access to green/sustainable financing (Social pillar in ESG). Without guarantees, MSMEs lack access to financing for the green transition (solar installation, energy-efficient equipment)."
    },

    {
      id:'susba-sustainability-rating-frameworks',
      kw_id:['susba','sustainable banking assessment','wwf susba','penilaian bank berkelanjutan','rating bank esg','sasb','gri standards','pcaf','partnership carbon accounting','tcfd disclosure'],
      kw_en:['susba','sustainable banking assessment','wwf susba','sasb','gri standards','pcaf','partnership for carbon accounting financials','tcfd disclosure','bank esg framework'],
      a_id:"<strong>Framework Penilaian ESG Internasional yang Dipakai Bank Indonesia</strong> 🌐<br><br>" +
            "Bank-bank ESG leader di Indonesia (BMRI, BBCA, BBRI, BBNI) merujuk pada multiple framework internasional saat menyusun Sustainability Report. Sebagai investor, kenali frame ini agar bisa baca laporan lebih kritis:<br><br>" +
            "<strong>1. GRI Standards (Global Reporting Initiative)</strong><br>" +
            "• Standar pelaporan keberlanjutan paling banyak dipakai di dunia<br>" +
            "• 3 seri: GRI Universal Standards, GRI Sector Standards, GRI Topic Standards<br>" +
            "• Format: indikator kuantitatif + naratif kualitatif<br><br>" +
            "<strong>2. SASB Standards (Sustainability Accounting Standards Board)</strong><br>" +
            "• Fokus pada <em>financial materiality</em>, isu ESG yang berdampak ke kinerja keuangan<br>" +
            "• 77 industry standards (specific per sektor)<br>" +
            "• Sekarang bagian dari IFRS Foundation (digabung dengan ISSB)<br><br>" +
            "<strong>3. TCFD (Task Force on Climate-Related Financial Disclosures)</strong><br>" +
            "• Framework pengungkapan risiko iklim, sekarang jadi dasar IFRS S2<br>" +
            "• 4 pilar: Governance, Strategy, Risk Management, Metrics &amp; Targets<br>" +
            "• OJK sebagai member NGFS, mandat TCFD-aligned di Indonesia<br><br>" +
            "<strong>4. SUSBA (Sustainable Banking Assessment), WWF</strong><br>" +
            "• Penilaian khusus bank Asia Tenggara<br>" +
            "• Domain: Purpose, Policies, Processes, People, Products, Portfolio, Performance<br>" +
            "• Bank Mandiri rutin dapat skor tinggi<br><br>" +
            "<strong>5. PCAF (Partnership for Carbon Accounting Financials)</strong><br>" +
            "• Metodologi standar untuk hitung <em>financed emissions</em> (emisi yang difasilitasi oleh pembiayaan bank)<br>" +
            "• Wajib bagi bank serius soal Net Zero<br>" +
            "• Bank Mandiri sudah anggota PCAF, financed emissions 2025: 20,32 juta tCO2e<br><br>" +
            "<strong>6. IFRS S1 &amp; S2 (ISSB Standards)</strong><br>" +
            "• Standar global sustainability disclosure dari International Sustainability Standards Board<br>" +
            "• OJK target adopsi 2026, POJK 51 akan di-update<br>" +
            "• S1 = general sustainability, S2 = climate-related<br><br>" +
            "<strong>Tip baca laporan:</strong> Bank serius punya tabel cross-reference GRI/SASB/TCFD/OJK di bagian akhir Sustainability Report, kalau tidak ada, kemungkinan compliance minimum saja.",
      a_en:"<strong>International ESG Assessment Frameworks Used by Indonesian Banks</strong> 🌐<br><br>" +
            "Indonesia's ESG-leading banks (BMRI, BBCA, BBRI, BBNI) reference multiple international frameworks when preparing Sustainability Reports. As investors, know these frameworks to read reports more critically:<br><br>" +
            "<strong>1. GRI Standards (Global Reporting Initiative)</strong><br>" +
            "• Most widely used sustainability reporting standard globally<br>" +
            "• 3 series: GRI Universal Standards, GRI Sector Standards, GRI Topic Standards<br>" +
            "• Format: quantitative indicators + qualitative narrative<br><br>" +
            "<strong>2. SASB Standards (Sustainability Accounting Standards Board)</strong><br>" +
            "• Focus on <em>financial materiality</em>, ESG issues impacting financial performance<br>" +
            "• 77 industry standards (sector-specific)<br>" +
            "• Now part of IFRS Foundation (merged with ISSB)<br><br>" +
            "<strong>3. TCFD (Task Force on Climate-Related Financial Disclosures)</strong><br>" +
            "• Climate risk disclosure framework, now the basis for IFRS S2<br>" +
            "• 4 pillars: Governance, Strategy, Risk Management, Metrics &amp; Targets<br>" +
            "• OJK is an NGFS member, mandates TCFD alignment in Indonesia<br><br>" +
            "<strong>4. SUSBA (Sustainable Banking Assessment), WWF</strong><br>" +
            "• Assessment specific to Southeast Asian banks<br>" +
            "• Domains: Purpose, Policies, Processes, People, Products, Portfolio, Performance<br>" +
            "• Bank Mandiri regularly receives high scores<br><br>" +
            "<strong>5. PCAF (Partnership for Carbon Accounting Financials)</strong><br>" +
            "• Standard methodology to calculate <em>financed emissions</em> (emissions enabled by bank financing)<br>" +
            "• Mandatory for banks serious about Net Zero<br>" +
            "• Bank Mandiri is already a PCAF member, 2025 financed emissions: 20.32 million tCO2e<br><br>" +
            "<strong>6. IFRS S1 &amp; S2 (ISSB Standards)</strong><br>" +
            "• Global sustainability disclosure standards from the International Sustainability Standards Board<br>" +
            "• OJK targets 2026 adoption, POJK 51 will be updated<br>" +
            "• S1 = general sustainability, S2 = climate-related<br><br>" +
            "<strong>Reading tip:</strong> Serious banks have a GRI/SASB/TCFD/OJK cross-reference table at the end of the Sustainability Report, if absent, it's likely just minimum compliance."
    },

    {
      id:'roadmap-i-vs-ii-comparison',
      kw_id:['roadmap i','roadmap tahap i','perbedaan roadmap tahap 1 dan 2','perbandingan roadmap','phase i vs phase ii','tahap i tahap ii','ojk roadmap evolution','prinsip 8 keuangan berkelanjutan'],
      kw_en:['roadmap phase i vs phase ii','sustainable finance roadmap comparison','ojk roadmap evolution','indonesia sustainable finance journey','phase one vs phase two roadmap'],
      a_id:"<strong>Roadmap Tahap I (2015-2019) vs Tahap II (2021-2025)</strong> 📈<br><br>" +
            "Memahami evolusi OJK Roadmap penting karena kebijakan sekarang adalah lanjutan organik dari fondasi 5 tahun pertama.<br><br>" +
            "<strong>Tahap I (2015-2019), \"Stepping Stone\"</strong><br>" +
            "Tujuan: tingkatkan kesadaran &amp; bangun fondasi.<br>" +
            "Capaian:<br>" +
            "1. <strong>Pengenalan 8 Prinsip Keuangan Berkelanjutan</strong> (Pasal 2(2) POJK 51/2017):<br>" +
            "&nbsp;&nbsp;a) Investasi bertanggung jawab • b) Strategi &amp; praktik bisnis berkelanjutan • c) Manajemen risiko sosial &amp; lingkungan • d) Tata kelola • e) Komunikasi informatif • f) Inklusif • g) Pengembangan sektor unggulan prioritas • h) Koordinasi &amp; kolaborasi<br>" +
            "2. <strong>POJK 51/2017</strong>, kewajiban penerapan keuangan berkelanjutan untuk LJK, Emiten, Perusahaan Publik<br>" +
            "3. <strong>POJK 60/2017</strong>, penerbitan Green Bond (11 KKUB)<br>" +
            "4. <strong>Pengenalan KKUB</strong> (11 kategori)<br>" +
            "5. <strong>Pengembangan insentif EV financing</strong><br>" +
            "6. <strong>Pilot Project The First Movers on Sustainable Banking</strong> (2018) → IKBI<br>" +
            "7. <strong>Pendirian BCSF</strong> (2017, OJK + Univ Udayana)<br>" +
            "8. <strong>Pengakuan SBN \"Maturing\" stage</strong> (2019), bersama Tiongkok<br><br>" +
            "<strong>Tahap II (2021-2025), \"Accelerating Sustainability\"</strong><br>" +
            "Tujuan: ekosistem komprehensif lintas sektor (bank, pasar modal, IKNB).<br>" +
            "Capaian utama:<br>" +
            "1. <strong>Indonesia Green Taxonomy 1.0</strong> (Jan 2022) → TKBI v1 (2024) → TKBI v2 (Feb 2025)<br>" +
            "2. <strong>POJK 14/2023</strong>, Perdagangan Karbon (IDXCarbon launch Sep 2023)<br>" +
            "3. <strong>POJK 17/2023</strong>, Manajemen Risiko Iklim Bank (CRMS)<br>" +
            "4. <strong>POJK 18/2023</strong>, Sustainability-related Bonds &amp; Sukuk (5 jenis instrumen)<br>" +
            "5. <strong>Pengakuan SBFN \"Maturing\", tertinggi di EMDEs</strong> (2024)<br>" +
            "6. <strong>JETP Indonesia</strong> USD 21,6 miliar (G20 Bali 2022)<br>" +
            "7. <strong>Carbon Trading Internasional</strong> diluncurkan Januari 2025<br><br>" +
            "<strong>Tantangan terbawa ke Tahap III (2026-2030):</strong><br>" +
            "• Adopsi IFRS S1/S2 (ISSB)<br>" +
            "• Update POJK 51, mandat sustainability reporting yang lebih granular<br>" +
            "• TKBI cakupan seluruh sektor NDC by 2026<br>" +
            "• Sustainable Capital Market Roadmap (pengembangan)<br>" +
            "• Industry-Wide Stress Test (IWST) climate scenarios<br><br>" +
            "<strong>Untuk konteks proyek ini:</strong> Roadmap I ada modal trust (15 IKBI member, kepatuhan POJK 51), Roadmap II punya ambisi (taksonomi + carbon market + risk management). Indonesia bukan lagi follower, sudah jadi <em>policy innovator</em> di ASEAN.",
      a_en:"<strong>Roadmap Phase I (2015-2019) vs Phase II (2021-2025)</strong> 📈<br><br>" +
            "Understanding OJK Roadmap evolution matters because current policies organically build on the first 5-year foundation.<br><br>" +
            "<strong>Phase I (2015-2019), \"Stepping Stone\"</strong><br>" +
            "Goal: raise awareness &amp; build foundation.<br>" +
            "Achievements:<br>" +
            "1. <strong>Introduction of 8 Sustainable Finance Principles</strong> (Article 2(2) POJK 51/2017):<br>" +
            "&nbsp;&nbsp;a) Responsible investment • b) Sustainable business strategy &amp; practice • c) Social &amp; environmental risk management • d) Governance • e) Informative communication • f) Inclusive • g) Development of priority leading sectors • h) Coordination &amp; collaboration<br>" +
            "2. <strong>POJK 51/2017</strong>, sustainable finance obligation for FIs, Issuers, Public Companies<br>" +
            "3. <strong>POJK 60/2017</strong>, Green Bond issuance (11 KKUB)<br>" +
            "4. <strong>Introduction of KKUB</strong> (11 categories)<br>" +
            "5. <strong>EV financing incentive development</strong><br>" +
            "6. <strong>First Movers on Sustainable Banking Pilot</strong> (2018) → IKBI<br>" +
            "7. <strong>BCSF establishment</strong> (2017, OJK + Udayana University)<br>" +
            "8. <strong>SBN \"Maturing\" stage recognition</strong> (2019), alongside China<br><br>" +
            "<strong>Phase II (2021-2025), \"Accelerating Sustainability\"</strong><br>" +
            "Goal: comprehensive ecosystem across sectors (banks, capital markets, NBFI).<br>" +
            "Main achievements:<br>" +
            "1. <strong>Indonesia Green Taxonomy 1.0</strong> (Jan 2022) → TKBI v1 (2024) → TKBI v2 (Feb 2025)<br>" +
            "2. <strong>POJK 14/2023</strong>, Carbon Trading (IDXCarbon launched Sep 2023)<br>" +
            "3. <strong>POJK 17/2023</strong>, Bank Climate Risk Management (CRMS)<br>" +
            "4. <strong>POJK 18/2023</strong>, Sustainability-related Bonds &amp; Sukuk (5 instrument types)<br>" +
            "5. <strong>SBFN \"Maturing\" recognition, highest among EMDEs</strong> (2024)<br>" +
            "6. <strong>JETP Indonesia</strong> USD 21.6 billion (G20 Bali 2022)<br>" +
            "7. <strong>International Carbon Trading</strong> launched January 2025<br><br>" +
            "<strong>Challenges carried to Phase III (2026-2030):</strong><br>" +
            "• IFRS S1/S2 (ISSB) adoption<br>" +
            "• POJK 51 update, more granular sustainability reporting mandate<br>" +
            "• TKBI coverage of all NDC sectors by 2026<br>" +
            "• Sustainable Capital Market Roadmap (development)<br>" +
            "• Industry-Wide Stress Test (IWST) climate scenarios<br><br>" +
            "<strong>For this project's context:</strong> Phase I built trust capital (15 IKBI members, POJK 51 compliance); Phase II has ambition (taxonomy + carbon market + risk management). Indonesia is no longer a follower, it has become a <em>policy innovator</em> in ASEAN."
    },

    {
      id:'how-to-screen-esg-stock',
      kw_id:['cara pilih saham esg','cara screening saham','identifikasi saham esg','bagaimana memilih saham hijau','pilih emiten esg','cara skrining esg','tahu saham esg bagus','cara tahu saham esg','bagus tidak esg','filter saham esg','memilih saham berkelanjutan','cara pilih saham hijau'],
      kw_en:['how to screen esg stock','how to identify good esg stock','how to find esg stock','how to pick esg stocks','esg stock screening','esg stock selection','identify good esg company','how to know good esg','how do i find esg','how do i screen esg','how do we describe a good esg company','how to evaluate esg stocks'],
      a_id:"<strong>Cara Skrining Saham ESG yang Baik, Checklist Analitis</strong> 🔍<br><br>" +
            "Bukan cuma cari logo hijau, ini 7 langkah konkret skrining ESG saham IDX yang dipakai investor ritel serius:<br><br>" +
            "<strong>Langkah 1, Filter Indeks Resmi</strong><br>" +
            "Mulai dari konstituen <strong>IDX ESG Leaders</strong> (skor Sustainalytics terbaik) atau <strong>KEHATI SRI</strong> (sejak 2009). Jika tidak masuk salah satu → likely <em>belum lulus skrining ESG dasar</em>.<br><br>" +
            "<strong>Langkah 2, Baca Sustainability Report</strong><br>" +
            "Cari di situs IR emiten. Wajib per <strong>POJK 51/2017</strong>. Periksa apakah laporan:<br>" +
            "• Punya verifikasi independen pihak ketiga (third-party assurance)?<br>" +
            "• Selaras dengan standar global (GRI, SASB, TCFD)?<br>" +
            "• Memuat angka terukur, bukan narasi marketing?<br><br>" +
            "<strong>Langkah 3, Cek 3 Pilar Secara Terpisah</strong><br>" +
            "• <strong>E:</strong> Punya target emisi (Scope 1/2/3) + baseline + progres tahunan?<br>" +
            "• <strong>S:</strong> Skor kepuasan karyawan, kesetaraan gender, K3 (accident rate)?<br>" +
            "• <strong>G:</strong> Free-float realistis? Komisaris independen ≥30%? Tidak ada Direksi rangkap di kompetitor?<br><br>" +
            "<strong>Langkah 4, Cross-Check 2 Rating Provider</strong><br>" +
            "Studi Berg, Kölbel &amp; Rigobon (2022): rating ESG antar provider hanya berkorelasi ~0.54. Wajib cek minimal 2: MSCI ESG, Sustainalytics, FTSE Russell, atau ISS-ESG.<br><br>" +
            "<strong>Langkah 5, Audit Red Flag</strong><br>" +
            "Hindari emiten yang punya:<br>" +
            "• Kasus pencemaran lingkungan terbuka (cek media + LSM)<br>" +
            "• Buruh anak atau eksploitasi (cek laporan Kementerian Ketenagakerjaan)<br>" +
            "• Skandal korupsi atau insider trading aktif<br>" +
            "• Sanksi POJK / BEI dalam 3 tahun terakhir<br><br>" +
            "<strong>Langkah 6, Konteks Sektor</strong><br>" +
            "Bandingkan dengan peer sektor, emiten batubara dengan rating ESG sedang masih kalah dari bank dengan rating ESG sama. Sektor matters.<br><br>" +
            "<strong>Langkah 7, Cek Hybrid Score di Tab Data</strong><br>" +
            "Klik tab <strong>Data</strong> di Elemu Lestari, kami sajikan <em>Hybrid ESG Score 0-10</em> untuk 25 saham IDX (gabungan pilar ESG 50% + financial health 30% + index membership 20%).<br><br>" +
            "<strong>Tanya Sari:</strong> \"top 5 hybrid esg\" atau \"saham terbaik\" untuk lihat data live.",
      a_en:"<strong>How to Screen Good ESG Stocks, Analytical Checklist</strong> 🔍<br><br>" +
            "Not just looking for a green logo, here are 7 concrete steps serious retail investors use to screen ESG stocks on IDX:<br><br>" +
            "<strong>Step 1, Filter Official Indices</strong><br>" +
            "Start with constituents of <strong>IDX ESG Leaders</strong> (best Sustainalytics scores) or <strong>KEHATI SRI</strong> (since 2009). If a stock is in neither → likely <em>hasn't passed basic ESG screening</em>.<br><br>" +
            "<strong>Step 2, Read the Sustainability Report</strong><br>" +
            "Find it on the issuer's IR website. Mandatory per <strong>POJK 51/2017</strong>. Check whether the report:<br>" +
            "• Has independent third-party assurance?<br>" +
            "• Aligns with global standards (GRI, SASB, TCFD)?<br>" +
            "• Contains measurable numbers, not marketing narrative?<br><br>" +
            "<strong>Step 3, Check Each Pillar Separately</strong><br>" +
            "• <strong>E:</strong> Has emission targets (Scope 1/2/3) + baseline + annual progress?<br>" +
            "• <strong>S:</strong> Employee satisfaction, gender equity, OHS (accident rate) metrics?<br>" +
            "• <strong>G:</strong> Realistic free-float? Independent commissioners ≥30%? No interlocking directorships at competitors?<br><br>" +
            "<strong>Step 4, Cross-Check 2 Rating Providers</strong><br>" +
            "Berg, Kölbel &amp; Rigobon (2022) study: ESG ratings across providers only correlate ~0.54. Always check at least 2: MSCI ESG, Sustainalytics, FTSE Russell, or ISS-ESG.<br><br>" +
            "<strong>Step 5, Audit Red Flags</strong><br>" +
            "Avoid issuers with:<br>" +
            "• Open environmental pollution cases (check media + NGOs)<br>" +
            "• Child labor or labor exploitation (check Ministry of Manpower reports)<br>" +
            "• Active corruption or insider trading scandals<br>" +
            "• OJK / IDX sanctions in the last 3 years<br><br>" +
            "<strong>Step 6, Sector Context</strong><br>" +
            "Compare to sector peers, a coal issuer with medium ESG rating still loses to a bank with the same ESG rating. Sector matters.<br><br>" +
            "<strong>Step 7, Check the Hybrid Score in the Data Tab</strong><br>" +
            "Open the <strong>Data</strong> tab in Elemu Lestari, we provide a <em>Hybrid ESG Score 0-10</em> for 25 IDX stocks (50% ESG pillar avg + 30% financial health + 20% index membership).<br><br>" +
            "<strong>Ask Sari:</strong> \"top 5 hybrid esg\" or \"best stock\" for live data."
    },

    {
      id:'good-esg-criteria',
      kw_id:['ciri perusahaan esg baik','kriteria esg baik','tanda esg bagus','seperti apa esg yang baik','indikator esg bagus','red flag esg','warning esg','perusahaan esg ideal','ciri ciri sustainability bagus','tanda greenwashing'],
      kw_en:['what makes a good esg company','criteria for good esg','signs of good esg','characteristics of good esg','good esg indicators','esg red flags','warning signs esg','describe good esg company','greenwashing signs','what does a good esg company look like'],
      a_id:"<strong>Ciri Perusahaan dengan ESG Baik vs Buruk</strong> ⚖️<br><br>" +
            "<strong>✅ Tanda ESG BAIK (Green Flags):</strong><br>" +
            "1. <strong>Sustainability Report</strong> di-assurance oleh Big Four atau KAP independen<br>" +
            "2. <strong>Target emisi terukur</strong> dengan baseline yang spesifik (\"2030 target -45% vs 2019 baseline\"), bukan vague \"net zero soon\"<br>" +
            "3. <strong>Komisaris independen ≥30%</strong>, tidak rangkap jabatan di kompetitor<br>" +
            "4. <strong>Free-float realistis</strong> (≥20%) dengan beneficial ownership transparan<br>" +
            "5. <strong>Whistleblowing system</strong> aktif dengan laporan tahunan jumlah keluhan yang ditindaklanjuti<br>" +
            "6. <strong>Anggota inisiatif global</strong> (TCFD, PCAF, SBTi, UN Global Compact), bukan cuma logo, ada implementasi<br>" +
            "7. <strong>Kebijakan anti-korupsi tertulis</strong> + pelatihan rutin (lihat SEOJK 16/2021 Bagian VII)<br>" +
            "8. <strong>Konsisten lapor 3 tahun berturut-turut</strong> dengan tren yang membaik<br><br>" +
            "<strong>🚩 Tanda ESG BURUK (Red Flags):</strong><br>" +
            "1. <strong>Greenwashing</strong>: klaim hijau tanpa angka, \"kami peduli lingkungan\" tanpa data emisi<br>" +
            "2. <strong>Kasus pencemaran</strong> aktif di media tapi tidak diungkap di Sustainability Report<br>" +
            "3. <strong>Komisaris semua afiliasi keluarga</strong> pengendali, tidak ada checks &amp; balances<br>" +
            "4. <strong>Free-float dilaporkan tinggi</strong> (>40%) tapi turnover saham rendah → kepemilikan tersembunyi<br>" +
            "5. <strong>Tidak ada whistleblowing</strong> atau \"sedang dalam proses\" selama 3 tahun berturut<br>" +
            "6. <strong>Sanksi POJK/BEI</strong> dalam 3 tahun terakhir terkait keterbukaan informasi<br>" +
            "7. <strong>Sustainability Report cuma 10-20 halaman</strong> dan mengulang teks tahun lalu<br>" +
            "8. <strong>Beneficial ownership tidak transparan</strong>, utama lewat holding off-shore di tax haven<br><br>" +
            "<strong>Studi Kasus Krisis MSCI Jan 2026:</strong> Banyak emiten LQ45 lolos saringan E &amp; S tapi <strong>gagal di G</strong>, free-float palsu &amp; coordinated trading. Pilar G paling kritikal saat ini di Indonesia.",
      a_en:"<strong>Signs of Good vs Bad ESG Companies</strong> ⚖️<br><br>" +
            "<strong>✅ GOOD ESG Signs (Green Flags):</strong><br>" +
            "1. <strong>Sustainability Report</strong> assured by Big Four or independent audit firm<br>" +
            "2. <strong>Measurable emission targets</strong> with specific baseline (\"2030 target -45% vs 2019 baseline\"), not vague \"net zero soon\"<br>" +
            "3. <strong>Independent commissioners ≥30%</strong>, no interlocking directorships at competitors<br>" +
            "4. <strong>Realistic free-float</strong> (≥20%) with transparent beneficial ownership<br>" +
            "5. <strong>Active whistleblowing system</strong> with annual reporting of complaints handled<br>" +
            "6. <strong>Member of global initiatives</strong> (TCFD, PCAF, SBTi, UN Global Compact), not just logo, real implementation<br>" +
            "7. <strong>Written anti-corruption policy</strong> + regular training (see SEOJK 16/2021 Section VII)<br>" +
            "8. <strong>Consistent 3-year reporting</strong> with improving trends<br><br>" +
            "<strong>🚩 BAD ESG Signs (Red Flags):</strong><br>" +
            "1. <strong>Greenwashing</strong>: green claims without numbers, \"we care about the environment\" with no emissions data<br>" +
            "2. <strong>Active pollution cases</strong> in media but not disclosed in Sustainability Report<br>" +
            "3. <strong>All commissioners are controlling family affiliates</strong>, no checks &amp; balances<br>" +
            "4. <strong>Reported free-float is high</strong> (>40%) but share turnover is low → hidden ownership<br>" +
            "5. <strong>No whistleblowing system</strong> or \"in progress\" for 3 consecutive years<br>" +
            "6. <strong>OJK/IDX sanctions</strong> in the last 3 years related to information disclosure<br>" +
            "7. <strong>Sustainability Report is only 10-20 pages</strong> and repeats last year's text<br>" +
            "8. <strong>Opaque beneficial ownership</strong>, main flow through tax-haven holding structures<br><br>" +
            "<strong>MSCI Crisis Jan 2026 Case Study:</strong> Many LQ45 issuers passed E &amp; S screening but <strong>failed at G</strong>, fake free-float &amp; coordinated trading. G is the most critical pillar in Indonesia right now."
    },

    {
      id:'esg-financial-performance',
      kw_id:['esg vs kinerja keuangan','esg dan return','esg menguntungkan','esg untung','dampak esg ke saham','esg dan keuntungan','esg vs profit','esg menurun return','esg ningkatin cuan','financial performance esg'],
      kw_en:['esg vs financial performance','esg and returns','does esg hurt returns','is esg profitable','esg financial impact','esg stock performance','esg and stock returns','esg trade off','esg sacrifice returns'],
      a_id:"<strong>ESG vs Kinerja Keuangan, Apakah ESG Mengurangi Cuan?</strong> 💹<br><br>" +
            "<strong>Jawaban singkat:</strong> Riset meta-analytic menunjukkan ESG tidak secara sistematis menurunkan return, bahkan cenderung netral hingga positif dalam jangka panjang. Tapi konteks &amp; metode penting.<br><br>" +
            "<strong>Bukti Empiris (Studi Besar):</strong><br><br>" +
            "📊 <strong>Friede, Busch &amp; Bassen (2015)</strong>, Journal of Sustainable Finance<br>" +
            "Meta-analisis dari <strong>2,200+ studi</strong> sejak 1970-an:<br>" +
            "• <strong>~63%</strong> menunjukkan korelasi <em>positif</em> antara ESG &amp; kinerja keuangan<br>" +
            "• Hanya ~8% korelasi <em>negatif</em><br>" +
            "• Sisanya netral / inkonklusif<br><br>" +
            "📊 <strong>Whelan, Atz, Van Holt &amp; Clark (NYU Stern, 2021)</strong><br>" +
            "Review 1,000+ studi 2015-2020:<br>" +
            "• 58% perusahaan: ESG ↔ corporate financial performance positif<br>" +
            "• 33% portofolio: ESG ↔ investment return positif<br>" +
            "• Korelasi <strong>lebih kuat</strong> untuk metrics <em>climate</em> &amp; <em>governance</em><br><br>" +
            "📊 <strong>MSCI Investment Insight (2021):</strong><br>" +
            "72% dari 200 investor institusi (AUM USD 18 triliun) percaya perusahaan ESG tinggi punya <em>business continuity</em> lebih baik selama Covid-19.<br><br>" +
            "<strong>Mengapa ESG Bisa Meningkatkan Return Jangka Panjang:</strong><br>" +
            "1. <strong>Lower risk</strong>, emiten ESG baik lebih jarang kena skandal yang menghancurkan harga saham (lihat MSCI Jan 2026)<br>" +
            "2. <strong>Operational efficiency</strong>, energi terbarukan + efisiensi air = biaya operasional turun<br>" +
            "3. <strong>Talent retention</strong>, Gen-Z &amp; Millennial mau kerja di perusahaan ESG baik → produktivitas tinggi<br>" +
            "4. <strong>Akses modal lebih murah</strong>, green bond &amp; sustainability-linked loan punya bunga lebih rendah<br>" +
            "5. <strong>Regulatory tailwind</strong>, pajak karbon (Rp 30/kg), CRMS, IFRS S1/S2 favor perusahaan siap ESG<br><br>" +
            "<strong>Kapan ESG Bisa Underperform:</strong><br>" +
            "• Bull market sektor minyak/batubara (jangka pendek), portofolio ESG yang exclude fossil fuel tertinggal<br>" +
            "• Pasar yang belum mature regulasi ESG, investor reward perusahaan ESG belum konsisten<br><br>" +
            "<strong>Bottom line untuk investor ritel:</strong> ESG bukan trade-off. Tapi tetap diversifikasi, gunakan DCA, dan jangan all-in di 1 saham hanya karena rating ESG tinggi. <em>Past performance does not guarantee future results.</em>",
      a_en:"<strong>ESG vs Financial Performance, Does ESG Hurt Returns?</strong> 💹<br><br>" +
            "<strong>Short answer:</strong> Meta-analytic research shows ESG does not systematically reduce returns, and tends to be neutral to positive over the long run. But context &amp; methodology matter.<br><br>" +
            "<strong>Empirical Evidence (Major Studies):</strong><br><br>" +
            "📊 <strong>Friede, Busch &amp; Bassen (2015)</strong>, Journal of Sustainable Finance<br>" +
            "Meta-analysis of <strong>2,200+ studies</strong> since the 1970s:<br>" +
            "• <strong>~63%</strong> showed <em>positive</em> correlation between ESG &amp; financial performance<br>" +
            "• Only ~8% <em>negative</em> correlation<br>" +
            "• Rest neutral / inconclusive<br><br>" +
            "📊 <strong>Whelan, Atz, Van Holt &amp; Clark (NYU Stern, 2021)</strong><br>" +
            "Review of 1,000+ studies 2015-2020:<br>" +
            "• 58% of corporates: positive ESG ↔ corporate financial performance<br>" +
            "• 33% of portfolios: positive ESG ↔ investment return<br>" +
            "• Correlation <strong>stronger</strong> for <em>climate</em> &amp; <em>governance</em> metrics<br><br>" +
            "📊 <strong>MSCI Investment Insight (2021):</strong><br>" +
            "72% of 200 institutional investors (USD 18 trillion AUM) believe high-ESG companies showed better <em>business continuity</em> during Covid-19.<br><br>" +
            "<strong>Why ESG Can Boost Long-Term Returns:</strong><br>" +
            "1. <strong>Lower risk</strong>, good-ESG issuers rarely hit by scandals that destroy share prices (see MSCI Jan 2026)<br>" +
            "2. <strong>Operational efficiency</strong>, renewable energy + water efficiency = lower opex<br>" +
            "3. <strong>Talent retention</strong>, Gen-Z &amp; Millennials want to work at good-ESG firms → high productivity<br>" +
            "4. <strong>Cheaper access to capital</strong>, green bonds &amp; sustainability-linked loans have lower coupons<br>" +
            "5. <strong>Regulatory tailwind</strong>, carbon tax (Rp 30/kg), CRMS, IFRS S1/S2 favor ESG-ready firms<br><br>" +
            "<strong>When ESG Can Underperform:</strong><br>" +
            "• Oil/coal sector bull market (short-term), ESG portfolios excluding fossil fuels lag<br>" +
            "• Markets with immature ESG regulation, investor rewards for ESG firms aren't consistent<br><br>" +
            "<strong>Bottom line for retail investors:</strong> ESG is not a trade-off. But still diversify, use DCA, and don't go all-in on one stock just because of high ESG rating. <em>Past performance does not guarantee future results.</em>"
    },

    {
      id:'rakb-template-lampiran-i',
      kw_id:['template rakb','lampiran i pojk 51','format rakb','struktur rakb','isi rakb','rakb 6 bagian','rakb harus berisi apa','panduan rakb','rakb timeline'],
      kw_en:['rakb template','lampiran i pojk 51','rakb format','sustainable finance action plan template','rakb 6 sections','what rakb must contain'],
      a_id:"<strong>Template RAKB Berdasarkan Lampiran I POJK 51/2017</strong> 📋<br><br>" +
            "<strong>RAKB</strong> = <em>Rencana Aksi Keuangan Berkelanjutan</em> (Sustainable Finance Action Plan). Lampiran I POJK 51 mendefinisikan struktur wajib 6 bagian:<br><br>" +
            "<strong>I. Umum</strong><br>" +
            "Kerangka keseluruhan, ringkasan eksekutif, proses penyusunan, faktor penentu, prioritas, dan tindak lanjut.<br><br>" +
            "<strong>II. Ringkasan Eksekutif (max 3 halaman)</strong><br>" +
            "1. Pencapaian RAKB<br>" +
            "2. Visi &amp; misi<br>" +
            "3. Tujuan RAKB<br>" +
            "4. Program timeline 1-tahun &amp; 5-tahun (RAKB 5-tahun dilaporkan sekali per 5 tahun)<br>" +
            "5. Alokasi sumber daya (dana, manusia, mitra)<br>" +
            "6. Pegawai/unit kerja penanggung jawab<br><br>" +
            "<strong>III. Proses Penyusunan</strong><br>" +
            "Pihak yang terlibat + referensi penyusunan.<br><br>" +
            "<strong>IV. Faktor Penentu, 7 elemen</strong><br>" +
            "1. Rencana strategis bisnis<br>" +
            "2. Kapasitas organisasi<br>" +
            "3. Kondisi keuangan &amp; kapasitas teknis<br>" +
            "4. Kerjasama dengan pihak eksternal<br>" +
            "5. Strategi komunikasi<br>" +
            "6. Sistem monitoring, evaluasi, mitigasi<br>" +
            "7. Kebijakan pemerintah<br>" +
            "Setiap faktor dijelaskan dalam konteks <em>kekuatan vs kelemahan</em>.<br><br>" +
            "<strong>V. Prioritas &amp; Uraian Program Aksi</strong><br>" +
            "Per program: <em>(a)</em> Dasar pemikiran, <em>(b)</em> Tabel kegiatan (uraian + periode awal/akhir + sumber daya + penanggung jawab), <em>(c)</em> Sumber daya rinci (dana, SDM, mitra), <em>(d)</em> Sistem evaluasi, <em>(e)</em> Tantangan &amp; rencana ke depan.<br><br>" +
            "<strong>VI. Tindak Lanjut</strong><br>" +
            "Proses pengkajian ulang + sistem monitoring (penanggung jawab, waktu pengukuran, tindak lanjut, mitigasi risiko jika gagal).<br><br>" +
            "<strong>Contoh program populer:</strong> \"Peningkatan Portofolio Hijau Bank X\", bank tetapkan target portfolio hijau ke 20% kredit dalam 5 tahun, breakdown per sektor KKUB, dengan SDM specialist Green Banking direkrut.",
      a_en:"<strong>RAKB Template per Lampiran I POJK 51/2017</strong> 📋<br><br>" +
            "<strong>RAKB</strong> = <em>Rencana Aksi Keuangan Berkelanjutan</em> (Sustainable Finance Action Plan). POJK 51 Lampiran I defines the mandatory 6-section structure:<br><br>" +
            "<strong>I. General</strong><br>" +
            "Overall framework, executive summary, drafting process, determining factors, priorities, follow-up.<br><br>" +
            "<strong>II. Executive Summary (max 3 pages)</strong><br>" +
            "1. RAKB achievements<br>" +
            "2. Vision &amp; mission<br>" +
            "3. RAKB objectives<br>" +
            "4. Program timelines 1-year &amp; 5-year (5-year RAKB reported once per 5 years)<br>" +
            "5. Resource allocation (funds, people, partners)<br>" +
            "6. Responsible staff/unit<br><br>" +
            "<strong>III. Drafting Process</strong><br>" +
            "Parties involved + drafting references.<br><br>" +
            "<strong>IV. Determining Factors, 7 elements</strong><br>" +
            "1. Strategic business plan<br>" +
            "2. Organizational capacity<br>" +
            "3. Financial condition &amp; technical capacity<br>" +
            "4. External party cooperation<br>" +
            "5. Communication strategy<br>" +
            "6. Monitoring, evaluation, mitigation systems<br>" +
            "7. Government policy<br>" +
            "Each factor explained in <em>strengths vs weaknesses</em> framing.<br><br>" +
            "<strong>V. Priorities &amp; Action Program Details</strong><br>" +
            "Per program: <em>(a)</em> Rationale, <em>(b)</em> Activity table (description + start/end periods + resources + person-in-charge), <em>(c)</em> Detailed resources (funds, HR, partners), <em>(d)</em> Evaluation system, <em>(e)</em> Challenges &amp; future plans.<br><br>" +
            "<strong>VI. Follow-Up</strong><br>" +
            "Review process + monitoring system (PIC, measurement timing, follow-up, risk mitigation if failed).<br><br>" +
            "<strong>Popular program example:</strong> \"Bank X Green Portfolio Expansion\", bank targets 20% green portfolio of credit in 5 years, broken down per KKUB sector, with Green Banking specialist HR hired."
    },

    {
      id:'sustainability-report-template-lampiran-ii',
      kw_id:['lampiran ii pojk 51','template sustainability report','format sustainability report','isi laporan keberlanjutan','laporan keberlanjutan terdiri dari','struktur sustainability report','sustainability report wajib apa','perbandingan 3 tahun sustainability','komponen sustainability report'],
      kw_en:['lampiran ii pojk 51','sustainability report template','sustainability report structure','sustainability report mandatory content','3-year comparison sustainability','sustainability report sections'],
      a_id:"<strong>Template Laporan Keberlanjutan, Lampiran II POJK 51/2017</strong> 📑<br><br>" +
            "Lampiran II adalah cetak biru wajib untuk Sustainability Report di Indonesia. 7 bagian utama:<br><br>" +
            "<strong>1. Penjelasan Strategi Keberlanjutan</strong><br>" +
            "Narasi strategi LJK/Emiten/Perusahaan Publik dalam mengintegrasikan keberlanjutan.<br><br>" +
            "<strong>2. Ikhtisar Kinerja Aspek Keberlanjutan, Perbandingan 3 Tahun</strong><br>" +
            "<em>Wajib data 3 tahun</em> jika operasi >3 tahun, untuk:<br>" +
            "• <strong>Ekonomi:</strong> kuantitas produksi, pendapatan, laba, produk ramah lingkungan, pelibatan pihak lokal<br>" +
            "• <strong>Lingkungan:</strong> penggunaan energi (listrik+air), pengurangan emisi, pengurangan limbah/efluen, pelestarian biodiversitas<br>" +
            "• <strong>Sosial:</strong> dampak positif &amp; negatif terhadap masyarakat + lingkungan<br><br>" +
            "<strong>3. Profil Singkat</strong><br>" +
            "Visi/misi/nilai berkelanjutan, alamat, skala usaha (total aset, jumlah karyawan per jenis kelamin/usia/pendidikan), % kepemilikan saham, wilayah operasional, produk/jasa, keanggotaan asosiasi, perubahan signifikan.<br><br>" +
            "<strong>4. Penjelasan Direksi</strong><br>" +
            "(a) Kebijakan merespons tantangan, (b) Penerapan KB dengan capaian vs target, (c) Strategi pencapaian target, meliputi pengelolaan risiko ekonomi+sosial+lingkungan.<br><br>" +
            "<strong>5. Tata Kelola Keberlanjutan</strong><br>" +
            "Tugas Direksi/Dekom, pengembangan kompetensi, prosedur manajemen risiko, pemangku kepentingan (assessment + pendekatan), permasalahan.<br><br>" +
            "<strong>6. Kinerja Keberlanjutan (data 3 tahun)</strong><br>" +
            "(a) Budaya keberlanjutan internal, (b) Kinerja ekonomi (target vs realisasi portfolio/pembiayaan), (c) Kinerja sosial (ketenagakerjaan + masyarakat + TJSL), (d) Kinerja lingkungan (biaya, material, energi), (e) Kinerja lingkungan extensive untuk yang berhubungan langsung dengan lingkungan (emisi, limbah, biodiversitas), (f) Tanggung jawab produk &amp; jasa.<br><br>" +
            "<strong>7. Verifikasi Tertulis Pihak Independen</strong> (jika ada)<br><br>" +
            "<strong>Bahasa:</strong> Wajib Bahasa Indonesia. Boleh berdampingan dengan Bahasa Inggris.<br>" +
            "<strong>Format:</strong> Boleh terpisah dari laporan tahunan ATAU jadi bagian, tapi konten wajib sama lengkap.",
      a_en:"<strong>Sustainability Report Template, POJK 51/2017 Lampiran II</strong> 📑<br><br>" +
            "Lampiran II is the mandatory blueprint for Sustainability Reports in Indonesia. 7 main sections:<br><br>" +
            "<strong>1. Sustainability Strategy Explanation</strong><br>" +
            "Narrative of how the FI/Issuer/Public Company integrates sustainability.<br><br>" +
            "<strong>2. Sustainability Performance Overview, 3-Year Comparison</strong><br>" +
            "<em>3-year data mandatory</em> if operating >3 years, for:<br>" +
            "• <strong>Economic:</strong> production volume, revenue, profit, eco-friendly products, local-party engagement<br>" +
            "• <strong>Environmental:</strong> energy use (electricity+water), emission reduction, waste/effluent reduction, biodiversity preservation<br>" +
            "• <strong>Social:</strong> positive &amp; negative impacts on society + environment<br><br>" +
            "<strong>3. Brief Profile</strong><br>" +
            "Vision/mission/sustainability values, address, business scale (total assets, employees by gender/age/education), share ownership %, operational area, products/services, association memberships, significant changes.<br><br>" +
            "<strong>4. Directors' Explanation</strong><br>" +
            "(a) Policy in responding to challenges, (b) Sustainable Finance implementation with achievements vs targets, (c) Target-achievement strategy, including economic+social+environmental risk management.<br><br>" +
            "<strong>5. Sustainability Governance</strong><br>" +
            "Director/Commissioner duties, competency development, risk-management procedures, stakeholders (assessment + approach), issues faced.<br><br>" +
            "<strong>6. Sustainability Performance (3-year data)</strong><br>" +
            "(a) Internal sustainability culture, (b) Economic performance (target vs realization portfolio/financing), (c) Social performance (employment + community + TJSL/CSR), (d) Environmental performance (cost, materials, energy), (e) Extended environmental performance for those directly engaging with environment (emissions, waste, biodiversity), (f) Product &amp; service responsibility.<br><br>" +
            "<strong>7. Written Independent Verification</strong> (if any)<br><br>" +
            "<strong>Language:</strong> Bahasa Indonesia required. May be presented side-by-side with English.<br>" +
            "<strong>Format:</strong> May be separate from annual report OR integrated, but content must be equally complete."
    },

    {
      id:'why-sustainable-finance-indonesia',
      kw_id:['mengapa keuangan berkelanjutan','tujuan keuangan berkelanjutan','filosofi keuangan berkelanjutan','penjelasan pojk 51','rasional pojk 51','kenapa indonesia butuh keuangan berkelanjutan','urgensi keuangan berkelanjutan','keuangan berkelanjutan tujuan'],
      kw_en:['why sustainable finance indonesia','purpose sustainable finance','rationale pojk 51','penjelasan pojk 51','sustainable finance objectives indonesia','why indonesia needs sustainable finance'],
      a_id:"<strong>Mengapa Indonesia Butuh Keuangan Berkelanjutan?</strong> 🌏<br><br>" +
            "Dari <em>Penjelasan POJK 51/2017</em>, alasan resmi yang ditulis di dokumen hukum:<br><br>" +
            "<strong>Konteks Risiko Indonesia:</strong><br>" +
            "• <strong>Kesenjangan sosial</strong> = sumber risiko yang harus diatasi (Indonesia masih EM)<br>" +
            "• <strong>Risiko perubahan iklim</strong> tinggi karena geografi (negara kepulauan, area pesisir luas)<br>" +
            "• Bila pertumbuhan ekonomi <em>hanya</em> mengejar angka GDP → kerusakan lingkungan + ketimpangan makin parah<br><br>" +
            "<strong>Dasar Hukum:</strong><br>" +
            "1. <strong>UU 32/2009</strong> tentang Perlindungan &amp; Pengelolaan Lingkungan Hidup, mengamanatkan instrumen ekonomi ramah lingkungan di sektor keuangan<br>" +
            "2. <strong>UU 21/2011</strong> tentang OJK, memberi otoritas penuh ke OJK untuk menyelenggarakan Keuangan Berkelanjutan<br>" +
            "3. <strong>Roadmap Keuangan Berkelanjutan</strong> diluncurkan Desember 2014<br>" +
            "4. <strong>Komitmen Paris Agreement</strong> + SDGs UN<br><br>" +
            "<strong>4 Tujuan Resmi (Pasal 1 Penjelasan POJK 51):</strong><br>" +
            "a. <strong>Pendanaan SDG &amp; iklim</strong> dalam jumlah memadai<br>" +
            "b. <strong>Daya tahan &amp; daya saing</strong> LJK/Emiten/Perusahaan Publik melalui pengelolaan risiko sosial-lingkungan yang lebih baik<br>" +
            "c. <strong>Mengurangi kesenjangan sosial</strong> + cegah kerusakan lingkungan + jaga biodiversitas + efisiensi energi/SDA<br>" +
            "d. <strong>Mengembangkan produk/jasa</strong> keuangan berbasis prinsip berkelanjutan<br><br>" +
            "<strong>8 Prinsip Resmi (Pasal 2(2) POJK 51):</strong><br>" +
            "1. Investasi bertanggung jawab • 2. Strategi &amp; praktik bisnis berkelanjutan • 3. Pengelolaan risiko sosial &amp; lingkungan • 4. Tata kelola yang transparan-akuntabel-independen • 5. Komunikasi informatif • 6. Inklusif (akses untuk semua wilayah Indonesia) • 7. Pengembangan sektor unggulan prioritas (mitigasi-adaptasi iklim) • 8. Koordinasi &amp; kolaborasi (K/L, sektor, unit bisnis)<br><br>" +
            "<strong>Implikasi untuk investor ritel:</strong> Keuangan Berkelanjutan bukan opsi, itu mandat hukum. Emiten yang abai akan terhambat aksesnya ke modal global (yang makin ESG-focused) &amp; kena sanksi POJK.",
      a_en:"<strong>Why Indonesia Needs Sustainable Finance</strong> 🌏<br><br>" +
            "From the <em>POJK 51/2017 Explanatory Note</em>, the official reasoning in the legal document:<br><br>" +
            "<strong>Indonesia's Risk Context:</strong><br>" +
            "• <strong>Social inequality</strong> = source of risk that must be addressed (Indonesia still an EM)<br>" +
            "• <strong>Climate change risk</strong> high due to geography (archipelago state, large coastal areas)<br>" +
            "• If economic growth <em>only</em> chases GDP numbers → environmental damage + inequality worsen<br><br>" +
            "<strong>Legal Foundation:</strong><br>" +
            "1. <strong>Law 32/2009</strong> on Environmental Protection &amp; Management, mandates eco-friendly economic instruments in the financial sector<br>" +
            "2. <strong>Law 21/2011</strong> on OJK, grants OJK full authority to implement Sustainable Finance<br>" +
            "3. <strong>Sustainable Finance Roadmap</strong> launched December 2014<br>" +
            "4. <strong>Paris Agreement</strong> commitment + UN SDGs<br><br>" +
            "<strong>4 Official Objectives (POJK 51 Explanatory Article 1):</strong><br>" +
            "a. <strong>Funding SDGs &amp; climate</strong> in sufficient amounts<br>" +
            "b. <strong>Resilience &amp; competitiveness</strong> of FIs/Issuers/Public Companies through better social-environmental risk management<br>" +
            "c. <strong>Reduce social inequality</strong> + prevent environmental damage + protect biodiversity + energy/natural-resource efficiency<br>" +
            "d. <strong>Develop financial products/services</strong> based on sustainable principles<br><br>" +
            "<strong>8 Official Principles (POJK 51 Article 2(2)):</strong><br>" +
            "1. Responsible investment • 2. Sustainable business strategy &amp; practice • 3. Social &amp; environmental risk management • 4. Transparent-accountable-independent governance • 5. Informative communication • 6. Inclusive (access for all Indonesian regions) • 7. Priority leading-sector development (climate mitigation-adaptation) • 8. Coordination &amp; collaboration (ministries, sectors, business units)<br><br>" +
            "<strong>Implications for retail investors:</strong> Sustainable Finance is not optional, it's a legal mandate. Issuers that ignore it will face limited access to global capital (increasingly ESG-focused) &amp; OJK sanctions."
    },

    {
      id:'cuq-empirical-findings',
      kw_id:['penelitian cuq','hasil cuq','holmes 2019 hasil','jumlah responden optimal cuq','cuq vs sus','korelasi cuq','validitas cuq','penelitian usability chatbot','berapa responden untuk cuq'],
      kw_en:['cuq empirical findings','holmes 2019 results','cuq optimal sample size','cuq vs sus correlation','cuq validity','chatbot usability study results','how many users for cuq'],
      a_id:"<strong>Temuan Empiris Penelitian CUQ, Holmes et al. (2019)</strong> 🔬<br><br>" +
            "Penelitian asli yang memvalidasi CUQ (Chatbot Usability Questionnaire) dilakukan di <strong>Ulster University, UK</strong> menggunakan WeightMentor, chatbot self-help untuk weight loss maintenance.<br><br>" +
            "<strong>4 Pertanyaan Penelitian Holmes 2019:</strong><br>" +
            "1. Seberapa usable chatbot menurut metode usability konvensional?<br>" +
            "2. Seberapa konsisten antar metode (SUS, UEQ, CUQ)?<br>" +
            "3. Berapa jumlah responden optimal untuk identifikasi masalah usability?<br>" +
            "4. Berapa repetisi task agar pengguna baru mencapai performa optimal?<br><br>" +
            "<strong>Temuan Kritis untuk Penelitian Sari/Elemu Lestari:</strong><br><br>" +
            "📊 <strong>Temuan 1, Ukuran Sampel Optimal: 26 responden</strong><br>" +
            "Konvensional UI riset (Nielsen) bilang <strong>5-8 users cukup</strong> untuk identify 85% masalah. <em>Holmes membantah ini untuk chatbot</em>, perlu <strong>26 responden</strong> untuk menemukan mayoritas masalah usability chatbot. Karena chatbot UX <em>conversation-driven</em>, error pattern jauh lebih beragam.<br><br>" +
            "📊 <strong>Temuan 2, Repetisi Task Minimum: 1 kali</strong><br>" +
            "Pengguna mencapai performa optimal (task completion time stabil) setelah <strong>hanya 1 repetisi</strong>. Berbeda dari sistem konvensional yang butuh 3-5 trials. <em>Implikasi:</em> chatbot punya learning curve sangat curam, desain harus immediate-usable.<br><br>" +
            "📊 <strong>Temuan 3, Korelasi CUQ vs SUS vs UEQ kuat</strong><br>" +
            "CUQ skor berkorelasi tinggi dengan SUS &amp; UEQ, artinya CUQ valid untuk pengukuran usability, sambil lebih tailored ke conversational interface.<br><br>" +
            "<strong>Implikasi untuk Evaluasi Elemu Lestari (Tugas Individu):</strong><br>" +
            "• <strong>Target sampel ideal: 26 responden</strong>, minimum 15-20 untuk hasil yang masuk akal<br>" +
            "• <strong>Profil responden:</strong> investor ritel Indonesia (mahasiswa MFin, komunitas saham, investor pemula)<br>" +
            "• <strong>Task design:</strong> 5-7 task spesifik (\"tanyakan tentang ESG\", \"cari saham terbaik\", \"isi CUQ form\")<br>" +
            "• <strong>Bandingkan</strong> dengan baseline: chatbot lain di Indonesia (RKB OJK, IDX virtual assistant, Bibit's bot)<br><br>" +
            "<strong>Citation:</strong> Holmes, S., Moorhead, A., Bond, R., Zheng, H., Coates, V., &amp; McTear, M. (2019). Usability testing of a healthcare chatbot. <em>ECCE '19: European Conference on Cognitive Ergonomics</em>, ACM. DOI: 10.1145/3335082.3335094",
      a_en:"<strong>CUQ Empirical Findings, Holmes et al. (2019)</strong> 🔬<br><br>" +
            "The original CUQ (Chatbot Usability Questionnaire) validation study was conducted at <strong>Ulster University, UK</strong> using WeightMentor, a self-help chatbot for weight loss maintenance.<br><br>" +
            "<strong>4 Research Questions by Holmes 2019:</strong><br>" +
            "1. How usable is the chatbot per conventional usability methods?<br>" +
            "2. How consistent across methods (SUS, UEQ, CUQ)?<br>" +
            "3. What's the optimal sample size to identify usability issues?<br>" +
            "4. How many task repetitions before new users reach optimal performance?<br><br>" +
            "<strong>Critical Findings for Sari/Elemu Lestari Research:</strong><br><br>" +
            "📊 <strong>Finding 1, Optimal Sample Size: 26 participants</strong><br>" +
            "Conventional UI research (Nielsen) says <strong>5-8 users is enough</strong> to identify 85% of issues. <em>Holmes refutes this for chatbots</em>, need <strong>26 participants</strong> to find the majority of chatbot usability issues. Because chatbot UX is <em>conversation-driven</em>, error patterns are far more varied.<br><br>" +
            "📊 <strong>Finding 2, Minimum Task Repetition: 1</strong><br>" +
            "Users reach optimal performance (task completion time stabilizes) after <strong>just 1 repetition</strong>. Unlike conventional systems that need 3-5 trials. <em>Implication:</em> chatbots have a very steep learning curve, design must be immediately usable.<br><br>" +
            "📊 <strong>Finding 3, Strong CUQ vs SUS vs UEQ correlation</strong><br>" +
            "CUQ scores correlate highly with SUS &amp; UEQ, meaning CUQ is valid for usability measurement, while better tailored to conversational interfaces.<br><br>" +
            "<strong>Implications for Elemu Lestari Evaluation (Individual Assignment):</strong><br>" +
            "• <strong>Ideal sample target: 26 participants</strong>, minimum 15-20 for sensible results<br>" +
            "• <strong>Participant profile:</strong> Indonesian retail investors (MFin students, stock community, beginner investors)<br>" +
            "• <strong>Task design:</strong> 5-7 specific tasks (\"ask about ESG\", \"find the best stock\", \"fill the CUQ form\")<br>" +
            "• <strong>Benchmark</strong> against baselines: other Indonesian chatbots (RKB OJK, IDX virtual assistant, Bibit's bot)<br><br>" +
            "<strong>Citation:</strong> Holmes, S., Moorhead, A., Bond, R., Zheng, H., Coates, V., &amp; McTear, M. (2019). Usability testing of a healthcare chatbot. <em>ECCE '19: European Conference on Cognitive Ergonomics</em>, ACM. DOI: 10.1145/3335082.3335094"
    },

    {
      id:'how-to-use-sari',
      kw_id:['cara pakai sari','cara gunakan elemu lestari','tips chatbot','bagaimana bertanya sari','tanya sari','tips bertanya','sari tidak paham','tolong help','help','tutorial sari','panduan elemu'],
      kw_en:['how to use sari','how to use elemu lestari','tips chatbot','how to ask sari','help','tutorial sari','sari does not understand','elemu lestari guide','how to talk to sari'],
      a_id:"<strong>Cara Pakai Sari Secara Efektif</strong> 💡<br><br>" +
            "Sari adalah <em>rule-based chatbot</em>, bukan AI generatif seperti ChatGPT. Artinya saya mencocokkan kata kunci ke database jawaban. Ada cara bertanya yang efektif:<br><br>" +
            "<strong>✅ Pertanyaan yang Saya Pahami Baik:</strong><br>" +
            "• <strong>Sebutkan istilah spesifik:</strong> \"apa itu KKUB\", \"jelaskan POJK 51\", \"green sukuk apa\"<br>" +
            "• <strong>Tanya saham:</strong> \"harga BBCA\", \"top gainer\", \"saham ESG terbaik\"<br>" +
            "• <strong>Bandingkan:</strong> \"Bibit vs Ajaib\", \"perbedaan ESG dan LST\"<br>" +
            "• <strong>Bagaimana cara:</strong> \"cara mulai investasi ESG\", \"cara pilih saham ESG\"<br><br>" +
            "<strong>💬 Follow-Up yang Saya Bisa Tangani:</strong><br>" +
            "Setelah saya jawab topik tertentu, saya ingat konteks. Coba:<br>" +
            "• \"give example\" / \"contoh dong\", saya kasih studi kasus konkret<br>" +
            "• \"elaborate more\" / \"lebih lanjut\", saya dive lebih dalam<br>" +
            "• \"what else?\" / \"apa lagi?\", saya kasih topik berhubungan<br><br>" +
            "<strong>🔗 Klik Chip Saran:</strong><br>" +
            "Di setiap jawaban saya, ada chip \"💡 Mau eksplor lebih dalam?\", klik untuk lanjut ke topik terkait tanpa mengetik.<br><br>" +
            "<strong>⚠️ Yang Belum Bisa Saya Pahami:</strong><br>" +
            "• Pertanyaan dengan pronoun ambigu (\"yang itu kenapa?\")<br>" +
            "• Analisis spesifik 1 emiten tanpa nama tickernya<br>" +
            "• Prediksi harga saham masa depan (saya bukan analis)<br>" +
            "• Rekomendasi beli/jual (saya bukan penasihat)<br><br>" +
            "<strong>🎯 Tip Pro:</strong> Jika saya bingung, saya akan kasih opsi \"did you mean\". Pilih salah satunya untuk lanjut. Jika tetap salah, coba ulangi dengan kata kunci lebih spesifik.<br><br>" +
            "<strong>Cakupan Pengetahuan Sari (per Mei 2026):</strong><br>" +
            "60+ entri Q&amp;A meliputi: POJK 51/60/13/14/17/18, Roadmap Tahap I &amp; II, Green/Sustainability Bond, JETP, ETM, NDC, Carbon Tax, IDX ESG Leaders, KEHATI, Sustainalytics, MSCI Jan 2026, Bibit/Ajaib/Stockbit/IPOT, Hybrid ESG Score, KKUB 11 kategori, TKBI, BMRI sustainability case, ASEAN FDI EV, CUQ methodology.",
      a_en:"<strong>How to Use Sari Effectively</strong> 💡<br><br>" +
            "Sari is a <em>rule-based chatbot</em>, not a generative AI like ChatGPT. That means I match keywords to a database of answers. Here's how to ask effectively:<br><br>" +
            "<strong>✅ Questions I Understand Well:</strong><br>" +
            "• <strong>Use specific terms:</strong> \"what is KKUB\", \"explain POJK 51\", \"what is green sukuk\"<br>" +
            "• <strong>Stock queries:</strong> \"BBCA price\", \"top gainer\", \"best ESG stock\"<br>" +
            "• <strong>Comparisons:</strong> \"Bibit vs Ajaib\", \"difference between ESG and LST\"<br>" +
            "• <strong>How-to:</strong> \"how to start ESG investing\", \"how to screen ESG stocks\"<br><br>" +
            "<strong>💬 Follow-Ups I Handle:</strong><br>" +
            "After I answer a topic, I remember the context. Try:<br>" +
            "• \"give example\" / \"contoh dong\", I'll give a concrete case study<br>" +
            "• \"elaborate more\" / \"lebih lanjut\", I'll dive deeper<br>" +
            "• \"what else?\" / \"apa lagi?\", I'll suggest related topics<br><br>" +
            "<strong>🔗 Click the Suggestion Chips:</strong><br>" +
            "Every answer has \"💡 Want to dive deeper?\" chips, click to continue to related topics without typing.<br><br>" +
            "<strong>⚠️ What I Can't Handle (Yet):</strong><br>" +
            "• Questions with ambiguous pronouns (\"what about that one?\")<br>" +
            "• Specific analysis of one issuer without naming the ticker<br>" +
            "• Future stock price predictions (I'm not an analyst)<br>" +
            "• Buy/sell recommendations (I'm not an advisor)<br><br>" +
            "<strong>🎯 Pro Tip:</strong> If I'm confused, I'll offer \"did you mean\" options. Pick one to continue. If still wrong, try rephrasing with more specific keywords.<br><br>" +
            "<strong>Sari's Knowledge Coverage (as of May 2026):</strong><br>" +
            "60+ Q&amp;A entries covering: POJK 51/60/13/14/17/18, Roadmap Phase I &amp; II, Green/Sustainability Bonds, JETP, ETM, NDC, Carbon Tax, IDX ESG Leaders, KEHATI, Sustainalytics, MSCI Jan 2026, Bibit/Ajaib/Stockbit/IPOT, Hybrid ESG Score, KKUB 11 categories, TKBI, BMRI sustainability case, ASEAN FDI EV, CUQ methodology."
    },

    {
      id:'red-flags-sustainability-report',
      kw_id:['red flag laporan keberlanjutan','sustainability report bohong','greenwashing laporan','laporan keberlanjutan palsu','sustainability report jelek','tanda greenwashing','laporan keberlanjutan kurang','warning sustainability report'],
      kw_en:['red flags sustainability report','greenwashing sustainability report','signs of fake sustainability report','sustainability report warnings','bad sustainability report','how to spot greenwashing report'],
      a_id:"<strong>10 Red Flag dalam Laporan Keberlanjutan</strong> 🚩<br><br>" +
            "Sustainability Report wajib per POJK 51/2017, tapi <em>kualitas</em>-nya bervariasi. Berikut indikator laporan yang patut diragukan:<br><br>" +
            "1. <strong>Tidak ada assurance pihak ketiga</strong>, laporan diaudit sendiri, tanpa verifikasi PwC/EY/Deloitte/KPMG atau lembaga independen serupa<br><br>" +
            "2. <strong>Halaman tipis (&lt;30 halaman)</strong> untuk emiten besar (LQ45/IDX30), laporan serius biasanya 100+ halaman dengan data tabel rinci<br><br>" +
            "3. <strong>Copy-paste dari tahun lalu</strong>, angka tidak berubah, narasi sama persis, foto-foto identik. Sustainability adalah <em>progress</em>, bukan repetisi.<br><br>" +
            "4. <strong>Hanya narasi, tanpa angka terukur</strong>, \"kami berkomitmen pada lingkungan\" tanpa data emisi tCO2e, intensity, atau target persen pengurangan<br><br>" +
            "5. <strong>Hanya Scope 1 emisi, tidak Scope 2 &amp; 3</strong>, emiten serius sekarang lapor financed emissions (Scope 3) seperti Bank Mandiri (20,32 juta tCO2e)<br><br>" +
            "6. <strong>Target vague tanpa baseline</strong>, \"net zero soon\" tanpa baseline tahun, persentase, atau interim target 2030<br><br>" +
            "7. <strong>Tidak ada cross-reference standar internasional</strong> (GRI/SASB/TCFD), emiten kelas dunia selalu sertakan content index<br><br>" +
            "8. <strong>Foto greenery berlebihan</strong>, banyak foto pohon, panel surya, anak-anak senyum, tapi sedikit data. Greenwashing visual klasik.<br><br>" +
            "9. <strong>Tidak ada disclosure insiden</strong>, kasus pencemaran, kecelakaan kerja, atau pelanggaran HAM tidak dimuat padahal ada di media. POJK 51 wajib disclose <em>dampak negatif</em>.<br><br>" +
            "10. <strong>Whistleblowing system \"sedang dikembangkan\"</strong> selama 3 tahun berturut, atau jumlah laporan 0 selama 3 tahun (terlalu bagus untuk benar)<br><br>" +
            "<strong>Cara Verifikasi:</strong><br>" +
            "• Cek <em>third-party assurance statement</em>, pasti ada nama firma + alamat website<br>" +
            "• Bandingkan emisi/kinerja vs peer sektor, bila terlalu bagus, suspicious<br>" +
            "• Search nama emiten + \"polusi\" / \"sanksi\" / \"kasus\" di Google + situs LSM (WALHI, Greenpeace)<br>" +
            "• Cek apakah ada partisipasi di TCFD, SBTi, CDP, PCAF, formalitas global filter cukup ketat",
      a_en:"<strong>10 Red Flags in a Sustainability Report</strong> 🚩<br><br>" +
            "Sustainability Reports are mandatory per POJK 51/2017, but their <em>quality</em> varies. Here are signals of reports to question:<br><br>" +
            "1. <strong>No third-party assurance</strong>, self-audited, no PwC/EY/Deloitte/KPMG or comparable independent verification<br><br>" +
            "2. <strong>Thin report (&lt;30 pages)</strong> for big issuers (LQ45/IDX30), serious reports are typically 100+ pages with detailed tables<br><br>" +
            "3. <strong>Copy-paste from last year</strong>, numbers unchanged, narrative identical, photos repeat. Sustainability is <em>progress</em>, not repetition.<br><br>" +
            "4. <strong>Only narrative, no measurable numbers</strong>, \"we are committed to the environment\" without tCO2e, intensity data, or % reduction target<br><br>" +
            "5. <strong>Only Scope 1 emissions, no Scope 2 &amp; 3</strong>, serious issuers now report financed emissions (Scope 3) like Bank Mandiri (20.32 million tCO2e)<br><br>" +
            "6. <strong>Vague targets without baseline</strong>, \"net zero soon\" with no baseline year, percentage, or 2030 interim target<br><br>" +
            "7. <strong>No cross-reference to international standards</strong> (GRI/SASB/TCFD), world-class issuers always include content indices<br><br>" +
            "8. <strong>Excessive greenery photos</strong>, many trees, solar panels, smiling kids photos, but little data. Classic visual greenwashing.<br><br>" +
            "9. <strong>No incident disclosure</strong>, pollution cases, work accidents, or human rights violations not reported despite media coverage. POJK 51 mandates disclosure of <em>negative impacts</em>.<br><br>" +
            "10. <strong>Whistleblowing system \"under development\"</strong> for 3 consecutive years, or 0 reports for 3 years (too good to be true)<br><br>" +
            "<strong>How to Verify:</strong><br>" +
            "• Check the <em>third-party assurance statement</em>, should name the firm + website<br>" +
            "• Compare emissions/performance vs sector peers, too good = suspicious<br>" +
            "• Google issuer name + \"pollution\" / \"sanction\" / \"case\" + check NGO sites (WALHI, Greenpeace)<br>" +
            "• Check participation in TCFD, SBTi, CDP, PCAF, global initiative filters are strict"
    }

    // ↓ Add new entries below, see format at top of file ↓

  ]
};
