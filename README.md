# VisaTalentUSA

The H-1B sponsor intelligence database: which U.S. companies sponsor work
visas, what they pay, and how the 2026 wage-weighted lottery treats their
filings. Built from the U.S. Department of Labor's public LCA disclosure data.

**Live:** https://visatalentusa.com

## Stack

- Next.js 16 (App Router, static export of 1000+ sponsor pages)
- React 19, Tailwind CSS v4, TypeScript

## Data pipeline

```
DOL LCA disclosure (quarterly .xlsx)
  → normalized Parquet (oflc-data project, FY2008–FY2026)
  → workspace/h1b-data/build_aggregates.py   # employer + title aggregates
  → workspace/h1b-data/export_site_data.py   # top-1000 → data/sponsors_parts/
```

Regenerate site data:

```bash
cd ~/workspace/h1b-data
python3 build_aggregates.py
python3 export_site_data.py ~/workspace/visatalentusa 1000
cp ~/workspace/visatalentusa/data/search-index.json ~/workspace/visatalentusa/public/search-index.json
```

## Development

```bash
npm install
npm run dev
npm run build   # verifies all 1000+ static pages prerender
```

## Pages

- `/` — hub: search, stats, top-50 sponsors
- `/sponsors/[slug]/` — employer profile (filings, approval rate, salaries,
  wage-level lottery analysis, top roles/states, FAQ)
- `/about`, `/contact`, `/privacy`
- `/sitemap.xml`, `/robots.txt`
