"""
fetch_data.py — Elemu Lestari data refresher
============================================
Pulls live IDX stock data from yfinance and (where available) RSS news
from Indonesian financial sources. Writes stocks.js and news.js that the
HTML app loads via <script> tags.

Setup
-----
    pip install yfinance feedparser

Run
---
    python fetch_data.py

What you get
------------
- stocks.js  →  window.STOCKS_DATA with live prices, returns, dividend
               yield, P/E, market cap for ~25 IDX tickers.
- news.js    →  window.NEWS_DATA with the curated source directory plus
               (best-effort) recent RSS headlines from Kompas, CNN
               Indonesia, etc.

Honest limits
-------------
- yfinance does NOT provide real ESG ratings. The `esg` field on each
  stock comes from a curated/sample dictionary below. Real MSCI ESG or
  Sustainalytics scores require paid API access.
- KEHATI SRI / IDX ESG Leaders membership is curated manually from IDX
  publications below. Update these sets when IDX rebalances.
- Several Indonesian news sites (CNBC Indonesia, Bisnis, Kontan, IDX
  Channel) do not expose stable public RSS feeds. The script grabs
  what it can; the rest remain as static source-directory cards.
"""

import json
import datetime
import sys
import time

try:
    import yfinance as yf
except ImportError:
    print("Missing yfinance. Run: pip install yfinance", file=sys.stderr)
    sys.exit(1)

# ---------- Curated IDX ESG membership ----------
# Update these when IDX/KEHATI rebalance (typically twice a year).
KEHATI_SRI = {
    "BBCA","BMRI","BBRI","BBNI","TLKM","UNVR","ICBP","INDF","ASII","KLBF",
    "ANTM","PGAS","JSMR","SMGR","INTP"
}
IDX_ESG_LEADERS = {
    "BBCA","BMRI","BBRI","TLKM","UNVR","ASII","KLBF"
}
SYARIAH = {"BRIS","KAEF"}

# Curated ESG pillar scores (0-10). Replace with real ratings if you
# have access to MSCI ESG / Sustainalytics / FTSE Russell APIs.
CURATED_ESG = {
    "BBCA":(6.8,7.2,8.5),"BMRI":(6.5,6.8,7.9),"BBRI":(6.2,7.5,7.7),
    "BBNI":(6.0,6.5,7.2),"BRIS":(6.4,7.8,7.5),"TLKM":(7.5,7.6,8.0),
    "ISAT":(6.8,6.9,7.0),"EXCL":(6.5,6.7,6.8),"UNVR":(8.2,7.8,8.4),
    "ICBP":(6.9,7.2,7.4),"INDF":(6.5,6.8,7.1),"AMRT":(6.2,6.8,7.0),
    "ASII":(6.8,7.4,8.1),"KLBF":(7.1,7.5,7.8),"KAEF":(6.4,6.9,5.8),
    "ADRO":(3.8,5.5,6.8),"PTBA":(3.5,5.8,6.5),"ANTM":(5.8,6.4,6.9),
    "INCO":(6.2,6.5,6.8),"MEDC":(5.2,6.0,6.4),"PGAS":(5.5,6.7,7.2),
    "JSMR":(6.5,6.8,7.0),"SMGR":(5.8,6.5,6.9),"INTP":(6.0,6.7,7.2),
    "BRPT":(5.4,5.8,5.9)
}

TICKERS = {
    "BBCA":("Bank Central Asia","Banking"),
    "BMRI":("Bank Mandiri","Banking"),
    "BBRI":("Bank Rakyat Indonesia","Banking"),
    "BBNI":("Bank Negara Indonesia","Banking"),
    "BRIS":("Bank Syariah Indonesia","Banking (Syariah)"),
    "TLKM":("Telkom Indonesia","Telecom"),
    "ISAT":("Indosat Ooredoo H.","Telecom"),
    "EXCL":("XL Axiata","Telecom"),
    "UNVR":("Unilever Indonesia","Consumer Staples"),
    "ICBP":("Indofood CBP","Consumer Staples"),
    "INDF":("Indofood Sukses Makmur","Consumer Staples"),
    "AMRT":("Sumber Alfaria Trijaya","Consumer Retail"),
    "ASII":("Astra International","Industrial / Auto"),
    "KLBF":("Kalbe Farma","Healthcare"),
    "KAEF":("Kimia Farma","Healthcare"),
    "ADRO":("Adaro Energy","Energy (Coal)"),
    "PTBA":("Bukit Asam","Energy (Coal)"),
    "ANTM":("Aneka Tambang","Mining (Nickel/Gold)"),
    "INCO":("Vale Indonesia","Mining (Nickel)"),
    "MEDC":("Medco Energi","Energy (Oil & Gas)"),
    "PGAS":("Perusahaan Gas Negara","Utilities (Gas)"),
    "JSMR":("Jasa Marga","Infrastructure (Toll)"),
    "SMGR":("Semen Indonesia","Materials (Cement)"),
    "INTP":("Indocement Tunggal P.","Materials (Cement)"),
    "BRPT":("Barito Pacific","Petrochemicals/Renew.")
}

NEWS_SOURCES = [
    {"name":"CNBC Indonesia",  "tag":"Market & Investing",   "url":"https://www.cnbcindonesia.com/market",        "color":"#003D7A","letter":"CN","rss":None},
    {"name":"Bisnis Indonesia","tag":"Bisnis & Pasar Modal", "url":"https://www.bisnis.com/topic/82/pasar-modal", "color":"#0066B3","letter":"BI","rss":None},
    {"name":"Kontan",          "tag":"Investasi & Keuangan", "url":"https://investasi.kontan.co.id/",             "color":"#E31E24","letter":"KO","rss":"https://investasi.kontan.co.id/rss"},
    {"name":"Kompas Money",    "tag":"Ekonomi & Finansial",  "url":"https://money.kompas.com/",                   "color":"#005CAA","letter":"KM","rss":"https://money.kompas.com/index.xml"},
    {"name":"Katadata",        "tag":"Data-driven Ekonomi",  "url":"https://katadata.co.id/finansial",            "color":"#F26522","letter":"KD","rss":None},
    {"name":"CNN Indonesia",   "tag":"Ekonomi & Bisnis",     "url":"https://www.cnnindonesia.com/ekonomi",        "color":"#CC0000","letter":"CN","rss":"https://www.cnnindonesia.com/ekonomi/rss"},
    {"name":"Investor Daily",  "tag":"Pasar Modal",          "url":"https://investor.id/market",                  "color":"#1A5E8C","letter":"ID","rss":None},
    {"name":"IDX Channel",     "tag":"Bursa Indonesia",      "url":"https://www.idxchannel.com/",                 "color":"#00417A","letter":"IX","rss":None},
    {"name":"MSCI",            "tag":"Index Methodology",    "url":"https://www.msci.com/research-and-insights",  "color":"#003366","letter":"MS","rss":None},
]


def fetch_stock(code, meta):
    name, sector = meta
    try:
        t = yf.Ticker(code + ".JK")
        info = t.info
        hist_1y = t.history(period="1y")
        start_year = f"{datetime.date.today().year}-01-01"
        hist_ytd = t.history(start=start_year)

        price = info.get("currentPrice") or info.get("regularMarketPrice")
        if price is None and len(hist_1y) > 0:
            price = float(hist_1y["Close"].iloc[-1])

        ch1y = None
        if len(hist_1y) > 1:
            ch1y = (hist_1y["Close"].iloc[-1] / hist_1y["Close"].iloc[0] - 1) * 100

        chytd = None
        if len(hist_ytd) > 1:
            chytd = (hist_ytd["Close"].iloc[-1] / hist_ytd["Close"].iloc[0] - 1) * 100

        dy = info.get("dividendYield")
        if dy and dy > 1: dy = dy / 100  # some yfinance versions already return %

        mc = info.get("marketCap")
        e, s, g = CURATED_ESG.get(code, (None, None, None))

        return {
            "ticker": code,
            "name": name,
            "sector": sector,
            "price": round(price) if price else None,
            "change_1y": round(ch1y, 1) if ch1y is not None else None,
            "change_ytd": round(chytd, 1) if chytd is not None else None,
            "dividend_yield": round(dy * 100, 2) if dy else None,
            "pe_ratio": round(info.get("trailingPE"), 1) if info.get("trailingPE") else None,
            "market_cap_t": round(mc / 1e12, 1) if mc else None,
            "kehati": code in KEHATI_SRI,
            "esg_leaders": code in IDX_ESG_LEADERS,
            "syariah": code in SYARIAH,
            "esg": {"e": e, "s": s, "g": g} if e is not None else None
        }
    except Exception as exc:
        print(f"  ! {code}: {exc}", file=sys.stderr)
        return None


def fetch_benchmark():
    try:
        jci = yf.Ticker("^JKSE")
        h_1y = jci.history(period="1y")
        h_ytd = jci.history(start=f"{datetime.date.today().year}-01-01")
        val = float(h_1y["Close"].iloc[-1]) if len(h_1y) else None
        ytd = ((h_ytd["Close"].iloc[-1] / h_ytd["Close"].iloc[0]) - 1) * 100 if len(h_ytd) > 1 else None
        one_y = ((h_1y["Close"].iloc[-1] / h_1y["Close"].iloc[0]) - 1) * 100 if len(h_1y) > 1 else None
        return {
            "jci_value": round(val) if val else None,
            "jci_ytd": round(ytd, 1) if ytd is not None else None,
            "jci_1y": round(one_y, 1) if one_y is not None else None,
            "note": "JCI / IHSG via yfinance ^JKSE"
        }
    except Exception as exc:
        print(f"  ! JCI benchmark failed: {exc}", file=sys.stderr)
        return {"jci_value": None, "jci_ytd": None, "jci_1y": None, "note": "Benchmark unavailable"}


def fetch_news():
    try:
        import feedparser
    except ImportError:
        print("  ! feedparser not installed — skipping RSS. Run: pip install feedparser", file=sys.stderr)
        return []

    articles = []
    for s in NEWS_SOURCES:
        if not s.get("rss"):
            continue
        try:
            f = feedparser.parse(s["rss"])
            for entry in f.entries[:5]:
                articles.append({
                    "source": s["name"],
                    "title": entry.title,
                    "url": entry.link,
                    "published": entry.get("published", "")
                })
            print(f"  · {s['name']}: {min(5, len(f.entries))} headlines")
        except Exception as exc:
            print(f"  ! {s['name']}: {exc}", file=sys.stderr)
    return articles


def main():
    print("=== Elemu Lestari · data refresher ===")
    print(f"Run at {datetime.datetime.now().isoformat()}\n")

    # --- Stocks ---
    print("Fetching IDX stocks via yfinance...")
    stocks = []
    for code, meta in TICKERS.items():
        row = fetch_stock(code, meta)
        if row:
            stocks.append(row)
            chy = f"{row['change_1y']:+.1f}%" if row['change_1y'] is not None else "n/a"
            print(f"  · {code}: Rp{row['price']} ({chy} 1Y)")
        time.sleep(0.3)

    print("\nFetching JCI benchmark...")
    benchmark = fetch_benchmark()

    stocks_payload = {
        "updated": datetime.date.today().isoformat(),
        "source": "Live data from yfinance · ESG flags curated from IDX/KEHATI publications · Pillar scores illustrative (real MSCI/Sustainalytics ratings need paid API)",
        "is_sample": False,
        "benchmark": benchmark,
        "stocks": stocks
    }
    with open("stocks.js", "w", encoding="utf-8") as f:
        f.write("/* Auto-generated by fetch_data.py · do not edit manually */\n")
        f.write("window.STOCKS_DATA = " + json.dumps(stocks_payload, indent=2, ensure_ascii=False) + ";\n")
    print(f"\n✓ Wrote stocks.js ({len(stocks)} stocks)")

    # --- News ---
    print("\nFetching RSS headlines where available...")
    articles = fetch_news()

    news_payload = {
        "updated": datetime.date.today().isoformat(),
        "source": "Curated source directory + live RSS where exposed",
        "sources": [{k: v for k, v in s.items() if k != "rss"} for s in NEWS_SOURCES],
        "articles": articles
    }
    with open("news.js", "w", encoding="utf-8") as f:
        f.write("/* Auto-generated by fetch_data.py · do not edit manually */\n")
        f.write("window.NEWS_DATA = " + json.dumps(news_payload, indent=2, ensure_ascii=False) + ";\n")
    print(f"✓ Wrote news.js ({len(articles)} live articles)")

    print("\nDone. Reload index.html in your browser to see fresh data.")


if __name__ == "__main__":
    main()
