/* ============================================================
   Elemu Lestari · stocks.js
   Sample/illustrative data for IDX ESG-eligible stocks.
   Run fetch_data.py to refresh with live data from yfinance.
   ============================================================ */
window.STOCKS_DATA = {
  updated: "2026-05-23",
  source: "Sample illustrative data (bundled with prototype). Run fetch_data.py to refresh from yfinance.",
  is_sample: true,
  benchmark: {
    jci_value: 6850,
    jci_ytd: -12.4,
    jci_1y: -8.7,
    note: "JCI (Jakarta Composite Index) — post-MSCI-crisis levels."
  },
  stocks: [
    { ticker:"BBCA", name:"Bank Central Asia",       sector:"Banking",                price:9450,  change_1y:-3.2,  change_ytd:-8.1,  dividend_yield:2.8,  pe_ratio:22.4, market_cap_t:1165, kehati:true,  esg_leaders:true,  syariah:false, esg:{e:6.8, s:7.2, g:8.5} },
    { ticker:"BMRI", name:"Bank Mandiri",            sector:"Banking",                price:5825,  change_1y:-9.5,  change_ytd:-14.3, dividend_yield:5.2,  pe_ratio:9.8,  market_cap_t:543,  kehati:true,  esg_leaders:true,  syariah:false, esg:{e:6.5, s:6.8, g:7.9} },
    { ticker:"BBRI", name:"Bank Rakyat Indonesia",   sector:"Banking",                price:4180,  change_1y:-12.4, change_ytd:-18.6, dividend_yield:6.1,  pe_ratio:8.5,  market_cap_t:633,  kehati:true,  esg_leaders:true,  syariah:false, esg:{e:6.2, s:7.5, g:7.7} },
    { ticker:"BBNI", name:"Bank Negara Indonesia",   sector:"Banking",                price:4090,  change_1y:-15.2, change_ytd:-19.8, dividend_yield:4.8,  pe_ratio:7.6,  market_cap_t:152,  kehati:true,  esg_leaders:false, syariah:false, esg:{e:6.0, s:6.5, g:7.2} },
    { ticker:"BRIS", name:"Bank Syariah Indonesia",  sector:"Banking (Syariah)",      price:2650,  change_1y:-7.8,  change_ytd:-11.2, dividend_yield:0.9,  pe_ratio:18.4, market_cap_t:121,  kehati:false, esg_leaders:false, syariah:true,  esg:{e:6.4, s:7.8, g:7.5} },

    { ticker:"TLKM", name:"Telkom Indonesia",        sector:"Telecom",                price:2820,  change_1y:-13.5, change_ytd:-16.9, dividend_yield:5.8,  pe_ratio:11.2, market_cap_t:279,  kehati:true,  esg_leaders:true,  syariah:false, esg:{e:7.5, s:7.6, g:8.0} },
    { ticker:"ISAT", name:"Indosat Ooredoo H.",      sector:"Telecom",                price:2240,  change_1y:-5.4,  change_ytd:-8.7,  dividend_yield:2.1,  pe_ratio:14.8, market_cap_t:72,   kehati:false, esg_leaders:false, syariah:false, esg:{e:6.8, s:6.9, g:7.0} },
    { ticker:"EXCL", name:"XL Axiata",               sector:"Telecom",                price:2050,  change_1y:-3.1,  change_ytd:-6.5,  dividend_yield:1.8,  pe_ratio:16.2, market_cap_t:22,   kehati:false, esg_leaders:false, syariah:false, esg:{e:6.5, s:6.7, g:6.8} },

    { ticker:"UNVR", name:"Unilever Indonesia",      sector:"Consumer Staples",       price:2940,  change_1y:-18.6, change_ytd:-21.4, dividend_yield:5.4,  pe_ratio:18.7, market_cap_t:112,  kehati:true,  esg_leaders:true,  syariah:false, esg:{e:8.2, s:7.8, g:8.4} },
    { ticker:"ICBP", name:"Indofood CBP",            sector:"Consumer Staples",       price:9750,  change_1y:-2.1,  change_ytd:-5.8,  dividend_yield:3.4,  pe_ratio:14.5, market_cap_t:114,  kehati:true,  esg_leaders:false, syariah:false, esg:{e:6.9, s:7.2, g:7.4} },
    { ticker:"INDF", name:"Indofood Sukses Makmur",  sector:"Consumer Staples",       price:6275,  change_1y:-4.5,  change_ytd:-7.9,  dividend_yield:4.6,  pe_ratio:8.2,  market_cap_t:55,   kehati:true,  esg_leaders:false, syariah:false, esg:{e:6.5, s:6.8, g:7.1} },
    { ticker:"AMRT", name:"Sumber Alfaria Trijaya",  sector:"Consumer Retail",        price:2410,  change_1y:-6.8,  change_ytd:-10.2, dividend_yield:1.4,  pe_ratio:24.1, market_cap_t:100,  kehati:false, esg_leaders:false, syariah:false, esg:{e:6.2, s:6.8, g:7.0} },

    { ticker:"ASII", name:"Astra International",     sector:"Industrial / Auto",      price:4350,  change_1y:-19.2, change_ytd:-23.8, dividend_yield:7.4,  pe_ratio:6.8,  market_cap_t:176,  kehati:true,  esg_leaders:true,  syariah:false, esg:{e:6.8, s:7.4, g:8.1} },

    { ticker:"KLBF", name:"Kalbe Farma",             sector:"Healthcare",             price:1395,  change_1y:-7.2,  change_ytd:-9.8,  dividend_yield:2.9,  pe_ratio:18.9, market_cap_t:65,   kehati:true,  esg_leaders:true,  syariah:false, esg:{e:7.1, s:7.5, g:7.8} },
    { ticker:"KAEF", name:"Kimia Farma",             sector:"Healthcare",             price:780,   change_1y:-22.5, change_ytd:-28.1, dividend_yield:0.8,  pe_ratio:32.4, market_cap_t:4.3,  kehati:false, esg_leaders:false, syariah:true,  esg:{e:6.4, s:6.9, g:5.8} },

    { ticker:"ADRO", name:"Adaro Energy",            sector:"Energy (Coal)",          price:2845,  change_1y:-28.4, change_ytd:-32.1, dividend_yield:11.2, pe_ratio:4.2,  market_cap_t:91,   kehati:false, esg_leaders:false, syariah:false, esg:{e:3.8, s:5.5, g:6.8} },
    { ticker:"PTBA", name:"Bukit Asam",              sector:"Energy (Coal)",          price:2310,  change_1y:-31.2, change_ytd:-34.6, dividend_yield:13.4, pe_ratio:3.8,  market_cap_t:27,   kehati:false, esg_leaders:false, syariah:false, esg:{e:3.5, s:5.8, g:6.5} },
    { ticker:"ANTM", name:"Aneka Tambang",           sector:"Mining (Nickel/Gold)",   price:1580,  change_1y:-11.8, change_ytd:-15.4, dividend_yield:3.2,  pe_ratio:11.6, market_cap_t:38,   kehati:true,  esg_leaders:false, syariah:false, esg:{e:5.8, s:6.4, g:6.9} },
    { ticker:"INCO", name:"Vale Indonesia",          sector:"Mining (Nickel)",        price:3450,  change_1y:-8.4,  change_ytd:-12.8, dividend_yield:2.1,  pe_ratio:15.2, market_cap_t:34,   kehati:false, esg_leaders:false, syariah:false, esg:{e:6.2, s:6.5, g:6.8} },
    { ticker:"MEDC", name:"Medco Energi",            sector:"Energy (Oil & Gas)",     price:1185,  change_1y:-14.8, change_ytd:-18.6, dividend_yield:4.8,  pe_ratio:6.4,  market_cap_t:30,   kehati:false, esg_leaders:false, syariah:false, esg:{e:5.2, s:6.0, g:6.4} },

    { ticker:"PGAS", name:"Perusahaan Gas Negara",   sector:"Utilities (Gas)",        price:1240,  change_1y:-12.4, change_ytd:-15.8, dividend_yield:6.8,  pe_ratio:8.4,  market_cap_t:30,   kehati:true,  esg_leaders:false, syariah:false, esg:{e:5.5, s:6.7, g:7.2} },
    { ticker:"JSMR", name:"Jasa Marga",              sector:"Infrastructure (Toll)",  price:3920,  change_1y:-9.8,  change_ytd:-12.4, dividend_yield:3.6,  pe_ratio:14.8, market_cap_t:28,   kehati:true,  esg_leaders:false, syariah:false, esg:{e:6.5, s:6.8, g:7.0} },

    { ticker:"SMGR", name:"Semen Indonesia",         sector:"Materials (Cement)",     price:3520,  change_1y:-14.2, change_ytd:-18.4, dividend_yield:4.2,  pe_ratio:10.5, market_cap_t:23,   kehati:true,  esg_leaders:false, syariah:false, esg:{e:5.8, s:6.5, g:6.9} },
    { ticker:"INTP", name:"Indocement Tunggal P.",   sector:"Materials (Cement)",     price:6850,  change_1y:-11.6, change_ytd:-14.8, dividend_yield:3.8,  pe_ratio:13.2, market_cap_t:25,   kehati:true,  esg_leaders:false, syariah:false, esg:{e:6.0, s:6.7, g:7.2} },

    { ticker:"BRPT", name:"Barito Pacific",          sector:"Petrochemicals/Renew.",  price:920,   change_1y:-26.4, change_ytd:-31.2, dividend_yield:0.4,  pe_ratio:28.6, market_cap_t:86,   kehati:false, esg_leaders:false, syariah:false, esg:{e:5.4, s:5.8, g:5.9} }
  ]
};
