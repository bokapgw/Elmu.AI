/* ============================================================
   Elemu Lestari · news.js
   Sample Indonesia economy news + curated source directory.
   Run fetch_data.py to refresh `articles` from live RSS feeds.
   ============================================================ */
window.NEWS_DATA = {
  updated: "2026-05-25",
  source: "Sample article set + curated source directory. Run fetch_data.py via GitHub Actions to refresh articles from live RSS feeds.",
  articles_sample: true,
  sources: [
    { name:"CNBC Indonesia",   tag:"Market & Investing",       url:"https://www.cnbcindonesia.com/market",         color:"#003D7A", letter:"CN" },
    { name:"Bisnis Indonesia", tag:"Bisnis & Pasar Modal",     url:"https://www.bisnis.com/topic/82/pasar-modal",  color:"#0066B3", letter:"BI" },
    { name:"Kontan",           tag:"Investasi & Keuangan",     url:"https://investasi.kontan.co.id/",              color:"#E31E24", letter:"KO" },
    { name:"Kompas Money",     tag:"Ekonomi & Finansial",      url:"https://money.kompas.com/",                    color:"#005CAA", letter:"KM" },
    { name:"Katadata",         tag:"Data-driven Ekonomi",      url:"https://katadata.co.id/finansial",             color:"#F26522", letter:"KD" },
    { name:"CNN Indonesia",    tag:"Ekonomi & Bisnis",         url:"https://www.cnnindonesia.com/ekonomi",         color:"#CC0000", letter:"CN" },
    { name:"Investor Daily",   tag:"Pasar Modal",              url:"https://investor.id/market",                   color:"#1A5E8C", letter:"ID" },
    { name:"IDX Channel",      tag:"Bursa Indonesia",          url:"https://www.idxchannel.com/",                  color:"#00417A", letter:"IX" },
    { name:"MSCI",             tag:"Index Methodology",        url:"https://www.msci.com/research-and-insights",   color:"#003366", letter:"MS" }
  ],
  articles: [
    {
      source:"CNBC Indonesia",
      category:"Markets",
      title:"IHSG Tutup di 6.211, Tertekan Aksi Jual Asing Pasca Konsultasi MSCI",
      url:"https://www.cnbcindonesia.com/market",
      published:"2026-05-25T15:30:00+07:00"
    },
    {
      source:"Kompas Money",
      category:"Regulasi",
      title:"OJK Resmikan Aturan Finfluencer: Wajib Lisensi mulai Juli 2026",
      url:"https://money.kompas.com/",
      published:"2026-05-25T14:15:00+07:00"
    },
    {
      source:"Kontan",
      category:"Energi",
      title:"JETP USD 20 Miliar: Realisasi Capai 32%, Fokus Pensiun Dini PLTU",
      url:"https://investasi.kontan.co.id/",
      published:"2026-05-25T12:40:00+07:00"
    },
    {
      source:"Bisnis Indonesia",
      category:"Pasar Modal",
      title:"Volume IDXCarbon Tembus Rekor Bulanan, Pertamina &amp; PLN Top Trader",
      url:"https://www.bisnis.com/topic/82/pasar-modal",
      published:"2026-05-25T11:05:00+07:00"
    },
    {
      source:"CNN Indonesia",
      category:"Makro",
      title:"BI Pertahankan BI-Rate 5,75% di RDG Mei, Sinyal Hold Berlanjut Q3",
      url:"https://www.cnnindonesia.com/ekonomi",
      published:"2026-05-25T10:30:00+07:00"
    },
    {
      source:"Investor Daily",
      category:"ESG",
      title:"Green Sukuk Ritel SR-019 Sukses Diserap Rp 7,2 Triliun, Yield 6,25%",
      url:"https://investor.id/market",
      published:"2026-05-25T09:45:00+07:00"
    },
    {
      source:"Katadata",
      category:"Makro",
      title:"Ekspor RI April 2026 Tumbuh 8,4% YoY, Surplus Neraca Dagang USD 4,1 Miliar",
      url:"https://katadata.co.id/finansial",
      published:"2026-05-24T18:20:00+07:00"
    },
    {
      source:"IDX Channel",
      category:"Markets",
      title:"BBCA, BMRI, &amp; BBRI Pimpin Net Buy Asing Setelah Lima Hari Net Sell",
      url:"https://www.idxchannel.com/",
      published:"2026-05-24T16:00:00+07:00"
    },
    {
      source:"Kompas Money",
      category:"Regulasi",
      title:"POJK 51/2017 Diperbarui: Sustainability Report Wajib Pakai Standar ISSB",
      url:"https://money.kompas.com/",
      published:"2026-05-24T14:10:00+07:00"
    },
    {
      source:"Kontan",
      category:"Pasar Modal",
      title:"Reksa Dana ESG Catat Net Inflow Rp 1,8 Triliun Sepanjang Mei",
      url:"https://investasi.kontan.co.id/",
      published:"2026-05-24T12:00:00+07:00"
    },
    {
      source:"CNBC Indonesia",
      category:"ESG",
      title:"Unilever Indonesia (UNVR) Targetkan Net Zero Operations 2030",
      url:"https://www.cnbcindonesia.com/market",
      published:"2026-05-24T10:15:00+07:00"
    },
    {
      source:"Bisnis Indonesia",
      category:"Energi",
      title:"Adaro Energy Pisahkan Bisnis Batubara, Fokus Renewables &amp; Aluminium",
      url:"https://www.bisnis.com/topic/82/pasar-modal",
      published:"2026-05-23T16:45:00+07:00"
    },
    {
      source:"MSCI",
      category:"Markets",
      title:"MSCI Indonesia Index Review — Consultation Update May 2026",
      url:"https://www.msci.com/research-and-insights",
      published:"2026-05-23T08:00:00+00:00"
    },
    {
      source:"CNN Indonesia",
      category:"Makro",
      title:"Inflasi April 2026 Terkendali di 2,8%, BI Yakin Capai Target Tahunan",
      url:"https://www.cnnindonesia.com/ekonomi",
      published:"2026-05-22T11:30:00+07:00"
    },
    {
      source:"Investor Daily",
      category:"Pasar Modal",
      title:"KEHATI SRI-Kehati Index Direkomposisi: 5 Saham Masuk, 3 Keluar",
      url:"https://investor.id/market",
      published:"2026-05-22T09:00:00+07:00"
    }
  ]
};
