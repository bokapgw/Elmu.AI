/* ============================================================
   Elemu Lestari · stocks.js (v2 — hybrid ESG score)
   ============================================================
   Sample IDX ESG-eligible stocks with documented methodology.
   Real-time refresh by GitHub Actions running fetch_data.py v2.

   HYBRID ESG SCORE FORMULA
   ------------------------
     composite = 0.5 × pillar_avg
               + 0.3 × financial_health
               + 0.2 × membership_score
     Range: 0–10

   COMPONENTS
   ----------
     pillar_avg       — (E + S + G) / 3 from curated ESG pillar scores
     financial_health — normalized P/E inverse + dividend yield + market cap
     membership_score — 10 = KEHATI + ESG Leaders
                        9  = ESG Leaders only
                        7.5 = KEHATI only
                        5  = Syariah only
                        0  = none

   HONEST DATA-SOURCE LIMITS
   -------------------------
     ✓ FREE  · yfinance financials (price, P/E, dividend, market cap)
     ✓ FREE  · IDX ESG Leaders + KEHATI SRI membership (curated PDFs)
     ⚠ ILLUSTRATIVE · ESG pillar scores (real Sustainalytics/MSCI need paid API)
   ============================================================ */
window.STOCKS_DATA = {
  updated: "2026-05-26",
  source: "Sample data with hybrid ESG methodology. Run fetch_data.py v2 to refresh from yfinance.",
  is_sample: true,
  methodology: {
    formula: "0.5*pillar_avg + 0.3*financial_health + 0.2*membership_score",
    range: "0-10",
    weights: { pillar: 0.5, financial: 0.3, membership: 0.2 },
    pillar_source: "Curated illustrative ESG pillar scores (paid Sustainalytics/MSCI ratings recommended for production)",
    financial_source: "yfinance: P/E inverse + dividend yield + log(market cap)",
    membership_source: "IDX ESG Methodology + KEHATI SRI Index announcements (curated)"
  },
  benchmark: {
    jkse: { value: 6850, change_1d: -0.4, change_ytd: -12.4, change_1y: -8.7, name: "JCI / IHSG", description: "Jakarta Composite Index" },
    jklq45: { value: 920, change_1d: -0.6, change_ytd: -14.1, change_1y: -10.2, name: "LQ45", description: "45 most liquid IDX stocks" },
    jci_value: 6850, jci_ytd: -12.4, jci_1y: -8.7, jci_1d: -0.4,
    note: "Sample levels post-MSCI Indonesia crisis (Jan 2026). Real-time refresh via fetch_data.py v2."
  },
  stocks: [
    { ticker:"BBCA", name:"Bank Central Asia",       sector:"Banking",                price:9450,  change_1d:-0.3, change_ytd:-8.1,  change_1y:-3.2,  dividend_yield:2.8,  pe_ratio:22.4, market_cap_t:1165, kehati:true,  esg_leaders:true,  syariah:false, esg:{e:6.8, s:7.2, g:8.5}, hybrid_esg_score:7.26, hybrid_breakdown:{pillar_avg:7.50, financial_health:5.02, membership_score:10.0} },
    { ticker:"BMRI", name:"Bank Mandiri",            sector:"Banking",                price:5825,  change_1d:0.5,  change_ytd:-14.3, change_1y:-9.5,  dividend_yield:5.2,  pe_ratio:9.8,  market_cap_t:543,  kehati:true,  esg_leaders:true,  syariah:false, esg:{e:6.5, s:6.8, g:7.9}, hybrid_esg_score:7.66, hybrid_breakdown:{pillar_avg:7.07, financial_health:7.10, membership_score:10.0} },
    { ticker:"BBRI", name:"Bank Rakyat Indonesia",   sector:"Banking",                price:4180,  change_1d:-0.8, change_ytd:-18.6, change_1y:-12.4, dividend_yield:6.1,  pe_ratio:8.5,  market_cap_t:633,  kehati:true,  esg_leaders:true,  syariah:false, esg:{e:6.2, s:7.5, g:7.7}, hybrid_esg_score:7.84, hybrid_breakdown:{pillar_avg:7.13, financial_health:7.58, membership_score:10.0} },
    { ticker:"BBNI", name:"Bank Negara Indonesia",   sector:"Banking",                price:4090,  change_1d:-1.2, change_ytd:-19.8, change_1y:-15.2, dividend_yield:4.8,  pe_ratio:7.6,  market_cap_t:152,  kehati:true,  esg_leaders:false, syariah:false, esg:{e:6.0, s:6.5, g:7.2}, hybrid_esg_score:6.84, hybrid_breakdown:{pillar_avg:6.57, financial_health:6.84, membership_score:7.5} },
    { ticker:"BRIS", name:"Bank Syariah Indonesia",  sector:"Banking (Syariah)",      price:2650,  change_1d:0.4,  change_ytd:-11.2, change_1y:-7.8,  dividend_yield:0.9,  pe_ratio:18.4, market_cap_t:121,  kehati:false, esg_leaders:false, syariah:true,  esg:{e:6.4, s:7.8, g:7.5}, hybrid_esg_score:5.89, hybrid_breakdown:{pillar_avg:7.23, financial_health:4.24, membership_score:5.0} },

    { ticker:"TLKM", name:"Telkom Indonesia",        sector:"Telecom",                price:2820,  change_1d:-0.5, change_ytd:-16.9, change_1y:-13.5, dividend_yield:5.8,  pe_ratio:11.2, market_cap_t:279,  kehati:true,  esg_leaders:true,  syariah:false, esg:{e:7.5, s:7.6, g:8.0}, hybrid_esg_score:7.91, hybrid_breakdown:{pillar_avg:7.70, financial_health:6.85, membership_score:10.0} },
    { ticker:"ISAT", name:"Indosat Ooredoo H.",      sector:"Telecom",                price:2240,  change_1d:0.2,  change_ytd:-8.7,  change_1y:-5.4,  dividend_yield:2.1,  pe_ratio:14.8, market_cap_t:72,   kehati:false, esg_leaders:false, syariah:false, esg:{e:6.8, s:6.9, g:7.0}, hybrid_esg_score:4.91, hybrid_breakdown:{pillar_avg:6.90, financial_health:4.88, membership_score:0.0} },
    { ticker:"EXCL", name:"XL Axiata",               sector:"Telecom",                price:2050,  change_1d:-0.1, change_ytd:-6.5,  change_1y:-3.1,  dividend_yield:1.8,  pe_ratio:16.2, market_cap_t:22,   kehati:false, esg_leaders:false, syariah:false, esg:{e:6.5, s:6.7, g:6.8}, hybrid_esg_score:4.60, hybrid_breakdown:{pillar_avg:6.67, financial_health:4.20, membership_score:0.0} },

    { ticker:"UNVR", name:"Unilever Indonesia",      sector:"Consumer Staples",       price:2940,  change_1d:1.3,  change_ytd:-21.4, change_1y:-18.6, dividend_yield:5.4,  pe_ratio:18.7, market_cap_t:112,  kehati:true,  esg_leaders:true,  syariah:false, esg:{e:8.2, s:7.8, g:8.4}, hybrid_esg_score:7.69, hybrid_breakdown:{pillar_avg:8.13, financial_health:5.43, membership_score:10.0} },
    { ticker:"ICBP", name:"Indofood CBP",            sector:"Consumer Staples",       price:9750,  change_1d:0.6,  change_ytd:-5.8,  change_1y:-2.1,  dividend_yield:3.4,  pe_ratio:14.5, market_cap_t:114,  kehati:true,  esg_leaders:false, syariah:false, esg:{e:6.9, s:7.2, g:7.4}, hybrid_esg_score:6.72, hybrid_breakdown:{pillar_avg:7.17, financial_health:5.44, membership_score:7.5} },
    { ticker:"INDF", name:"Indofood Sukses Makmur",  sector:"Consumer Staples",       price:6275,  change_1d:-0.2, change_ytd:-7.9,  change_1y:-4.5,  dividend_yield:4.6,  pe_ratio:8.2,  market_cap_t:55,   kehati:true,  esg_leaders:false, syariah:false, esg:{e:6.5, s:6.8, g:7.1}, hybrid_esg_score:6.81, hybrid_breakdown:{pillar_avg:6.80, financial_health:6.36, membership_score:7.5} },
    { ticker:"AMRT", name:"Sumber Alfaria Trijaya",  sector:"Consumer Retail",        price:2410,  change_1d:-0.4, change_ytd:-10.2, change_1y:-6.8,  dividend_yield:1.4,  pe_ratio:24.1, market_cap_t:100,  kehati:false, esg_leaders:false, syariah:false, esg:{e:6.2, s:6.8, g:7.0}, hybrid_esg_score:4.40, hybrid_breakdown:{pillar_avg:6.67, financial_health:3.56, membership_score:0.0} },

    { ticker:"ASII", name:"Astra International",     sector:"Industrial / Auto",      price:4350,  change_1d:1.1,  change_ytd:-23.8, change_1y:-19.2, dividend_yield:7.4,  pe_ratio:6.8,  market_cap_t:176,  kehati:true,  esg_leaders:true,  syariah:false, esg:{e:6.8, s:7.4, g:8.1}, hybrid_esg_score:8.03, hybrid_breakdown:{pillar_avg:7.43, financial_health:7.73, membership_score:10.0} },

    { ticker:"KLBF", name:"Kalbe Farma",             sector:"Healthcare",             price:1395,  change_1d:-0.3, change_ytd:-9.8,  change_1y:-7.2,  dividend_yield:2.9,  pe_ratio:18.9, market_cap_t:65,   kehati:true,  esg_leaders:true,  syariah:false, esg:{e:7.1, s:7.5, g:7.8}, hybrid_esg_score:7.09, hybrid_breakdown:{pillar_avg:7.47, financial_health:4.52, membership_score:10.0} },
    { ticker:"KAEF", name:"Kimia Farma",             sector:"Healthcare",             price:780,   change_1d:-2.1, change_ytd:-28.1, change_1y:-22.5, dividend_yield:0.8,  pe_ratio:32.4, market_cap_t:4.3,  kehati:false, esg_leaders:false, syariah:true,  esg:{e:6.4, s:6.9, g:5.8}, hybrid_esg_score:4.64, hybrid_breakdown:{pillar_avg:6.37, financial_health:1.52, membership_score:5.0} },

    { ticker:"ADRO", name:"Adaro Energy",            sector:"Energy (Coal)",          price:2845,  change_1d:0.8,  change_ytd:-32.1, change_1y:-28.4, dividend_yield:11.2, pe_ratio:4.2,  market_cap_t:91,   kehati:false, esg_leaders:false, syariah:false, esg:{e:3.8, s:5.5, g:6.8}, hybrid_esg_score:5.32, hybrid_breakdown:{pillar_avg:5.37, financial_health:8.79, membership_score:0.0} },
    { ticker:"PTBA", name:"Bukit Asam",              sector:"Energy (Coal)",          price:2310,  change_1d:-1.5, change_ytd:-34.6, change_1y:-31.2, dividend_yield:13.4, pe_ratio:3.8,  market_cap_t:27,   kehati:false, esg_leaders:false, syariah:false, esg:{e:3.5, s:5.8, g:6.5}, hybrid_esg_score:5.22, hybrid_breakdown:{pillar_avg:5.27, financial_health:8.60, membership_score:0.0} },
    { ticker:"ANTM", name:"Aneka Tambang",           sector:"Mining (Nickel/Gold)",   price:1580,  change_1d:-0.7, change_ytd:-15.4, change_1y:-11.8, dividend_yield:3.2,  pe_ratio:11.6, market_cap_t:38,   kehati:true,  esg_leaders:false, syariah:false, esg:{e:5.8, s:6.4, g:6.9}, hybrid_esg_score:6.30, hybrid_breakdown:{pillar_avg:6.37, financial_health:5.39, membership_score:7.5} },
    { ticker:"INCO", name:"Vale Indonesia",          sector:"Mining (Nickel)",        price:3450,  change_1d:0.3,  change_ytd:-12.8, change_1y:-8.4,  dividend_yield:2.1,  pe_ratio:15.2, market_cap_t:34,   kehati:false, esg_leaders:false, syariah:false, esg:{e:6.2, s:6.5, g:6.8}, hybrid_esg_score:4.62, hybrid_breakdown:{pillar_avg:6.50, financial_health:4.56, membership_score:0.0} },
    { ticker:"MEDC", name:"Medco Energi",            sector:"Energy (Oil & Gas)",     price:1185,  change_1d:-0.6, change_ytd:-18.6, change_1y:-14.8, dividend_yield:4.8,  pe_ratio:6.4,  market_cap_t:30,   kehati:false, esg_leaders:false, syariah:false, esg:{e:5.2, s:6.0, g:6.4}, hybrid_esg_score:4.87, hybrid_breakdown:{pillar_avg:5.87, financial_health:6.45, membership_score:0.0} },

    { ticker:"PGAS", name:"Perusahaan Gas Negara",   sector:"Utilities (Gas)",        price:1240,  change_1d:-0.4, change_ytd:-15.8, change_1y:-12.4, dividend_yield:6.8,  pe_ratio:8.4,  market_cap_t:30,   kehati:true,  esg_leaders:false, syariah:false, esg:{e:5.5, s:6.7, g:7.2}, hybrid_esg_score:6.76, hybrid_breakdown:{pillar_avg:6.47, financial_health:6.74, membership_score:7.5} },
    { ticker:"JSMR", name:"Jasa Marga",              sector:"Infrastructure (Toll)",  price:3920,  change_1d:-0.5, change_ytd:-12.4, change_1y:-9.8,  dividend_yield:3.6,  pe_ratio:14.8, market_cap_t:28,   kehati:true,  esg_leaders:false, syariah:false, esg:{e:6.5, s:6.8, g:7.0}, hybrid_esg_score:6.38, hybrid_breakdown:{pillar_avg:6.77, financial_health:4.97, membership_score:7.5} },

    { ticker:"SMGR", name:"Semen Indonesia",         sector:"Materials (Cement)",     price:3520,  change_1d:-0.8, change_ytd:-18.4, change_1y:-14.2, dividend_yield:4.2,  pe_ratio:10.5, market_cap_t:23,   kehati:true,  esg_leaders:false, syariah:false, esg:{e:5.8, s:6.5, g:6.9}, hybrid_esg_score:6.39, hybrid_breakdown:{pillar_avg:6.40, financial_health:5.64, membership_score:7.5} },
    { ticker:"INTP", name:"Indocement Tunggal P.",   sector:"Materials (Cement)",     price:6850,  change_1d:-0.3, change_ytd:-14.8, change_1y:-11.6, dividend_yield:3.8,  pe_ratio:13.2, market_cap_t:25,   kehati:true,  esg_leaders:false, syariah:false, esg:{e:6.0, s:6.7, g:7.2}, hybrid_esg_score:6.38, hybrid_breakdown:{pillar_avg:6.63, financial_health:5.20, membership_score:7.5} },

    { ticker:"BRPT", name:"Barito Pacific",          sector:"Petrochemicals/Renew.",  price:920,   change_1d:-1.8, change_ytd:-31.2, change_1y:-26.4, dividend_yield:0.4,  pe_ratio:28.6, market_cap_t:86,   kehati:false, esg_leaders:false, syariah:false, esg:{e:5.4, s:5.8, g:5.9}, hybrid_esg_score:3.64, hybrid_breakdown:{pillar_avg:5.70, financial_health:2.62, membership_score:0.0} }
  ]
};
