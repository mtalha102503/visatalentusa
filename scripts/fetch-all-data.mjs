// scripts/fetch-all-data.mjs — Fetch all sponsor data from Supabase during prebuild.
// Writes to public/data/ for the Next.js build to consume (no network during build).
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const OUT_DIR = path.join(ROOT, ".build-data");

const SUPABASE_URL = process.env.SUPABASE_URL ?? "";
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY ?? "";

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  console.error("Missing SUPABASE_URL / SUPABASE_ANON_KEY");
  process.exit(1);
}

async function sb(path) {
  const res = await fetch(`${SUPABASE_URL}/rest/v1${path}`, {
    headers: {
      apikey: SUPABASE_ANON_KEY,
      Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
    },
  });
  if (!res.ok) {
    throw new Error(`Supabase ${res.status}: ${(await res.text()).slice(0, 200)}`);
  }
  return res.json();
}

function parseJson(v, fallback) {
  if (v == null) return fallback;
  if (typeof v === "string") {
    try { return JSON.parse(v); } catch { return fallback; }
  }
  return v;
}

fs.mkdirSync(OUT_DIR, { recursive: true });

// Fetch all employer rows with pagination (Supabase caps at 1000/req)
console.log("Fetching all employer data...");
let rows = [];
let offset = 0;
const PAGE = 1000;
for (;;) {
  const batch = await sb(`/h1b_employers?select=*&order=slug,fiscal_year&limit=${PAGE}&offset=${offset}`);
  rows.push(...batch);
  console.log(`  got ${batch.length} rows (offset ${offset})`);
  if (batch.length < PAGE) break;
  offset += PAGE;
}
console.log(`Got ${rows.length} rows total`);

// Write index (FY2026 top employers — capped at 2000, not 1000, so the daily
// +5 employer loader's new ranks keep getting pages on each rebuild.
// Deliberately capped: loading all 52k filers would create thin-content pages.)
const fy2026 = rows
  .filter((r) => r.fiscal_year === 2026)
  .sort((a, b) => b.total_cases - a.total_cases)
  .slice(0, 2000);
const index = fy2026.map((r) => ({
  slug: r.slug,
  name: r.display_name,
  cases: r.total_cases,
  approval_rate: r.approval_rate ?? null,
  median_wage: r.median_wage ?? null,
}));
fs.writeFileSync(path.join(OUT_DIR, "index.json"), JSON.stringify(index));
console.log(`Wrote index.json (${index.length} entries)`);
// Also copy to public/data for OG image routes (bundled at build time, no fs at request time)
const PUBLIC_DATA_DIR = path.join(ROOT, "public", "data");
fs.mkdirSync(PUBLIC_DATA_DIR, { recursive: true });
fs.writeFileSync(path.join(PUBLIC_DATA_DIR, "index.json"), JSON.stringify(index));
console.log(`Copied index.json to public/data/`);

// Group by slug and write individual sponsor files
const bySlug = {};
for (const r of rows) {
  if (!bySlug[r.slug]) bySlug[r.slug] = [];
  bySlug[r.slug].push(r);
}

let count = 0;
for (const [slug, slugRows] of Object.entries(bySlug)) {
  const years = {};
  for (const r of slugRows) {
    years[String(r.fiscal_year)] = {
      total_cases: r.total_cases,
      certified_cases: r.certified_cases,
      denied_cases: r.denied_cases,
      approval_rate: r.approval_rate,
      avg_wage_annual: r.avg_wage_annual,
      median_wage_annual: r.median_wage_annual,
      wage_level_mix: parseJson(r.wage_level_mix, {}),
      top_titles: parseJson(r.top_titles, []),
      top_states: parseJson(r.top_states, []),
      naics_code: r.naics_code,
      is_cap_exempt_candidate: r.is_cap_exempt_candidate,
      yoy_change_pct: r.yoy_change_pct,
    };
  }
  const sponsor = {
    slug: slugRows[0].slug,
    display_name: slugRows[0].display_name,
    years,
  };
  fs.writeFileSync(
    path.join(OUT_DIR, `${slug}.json`),
    JSON.stringify(sponsor)
  );
  count++;
}
console.log(`Wrote ${count} sponsor files`);

// Write site stats
const total_cases = fy2026.reduce((a, r) => a + r.total_cases, 0);
const wages = fy2026
  .map((r) => r.median_wage_annual)
  .filter((w) => w != null)
  .sort((a, b) => a - b);
const median_wage = wages.length ? wages[Math.floor(wages.length / 2)] : 0;
const stats = {
  total_sponsors_fy2026: fy2026.length,
  total_cases_fy2026: total_cases,
  median_wage_fy2026: median_wage,
  top50: fy2026.slice(0, 50).map((r) => ({
    slug: r.slug,
    name: r.display_name,
    cases: r.total_cases,
    approval_rate: r.approval_rate,
    median_wage: r.median_wage_annual,
  })),
};
fs.writeFileSync(path.join(OUT_DIR, "stats.json"), JSON.stringify(stats));
console.log("Wrote stats.json");

// Write cap-exempt employers slice (FY2024–FY2026 aggregated) for the
// Cap-Exempt Employers Finder tool. An employer qualifies if ANY of its
// FY2024–26 rows is flagged is_cap_exempt_candidate.
const capGroups = {};
for (const r of rows) {
  if (!r.is_cap_exempt_candidate) continue;
  if (!capGroups[r.slug]) capGroups[r.slug] = [];
  capGroups[r.slug].push(r);
}
const capExempt = Object.values(capGroups)
  .map((slugRows) => {
    const byYearDesc = [...slugRows].sort((a, b) => b.fiscal_year - a.fiscal_year);
    const latest = byYearDesc[0];
    const totalCases = slugRows.reduce((a, r) => a + (r.total_cases || 0), 0);
    const certifiedCases = slugRows.reduce((a, r) => a + (r.certified_cases || 0), 0);
    const titleMap = {};
    for (const r of slugRows) {
      for (const t of parseJson(r.top_titles, [])) {
        const cur =
          titleMap[t.title] ??
          (titleMap[t.title] = { title: t.title, cases: 0, avg_wage: null, _yr: 0 });
        cur.cases += t.cases || 0;
        if (t.avg_wage != null && r.fiscal_year >= cur._yr) {
          cur.avg_wage = t.avg_wage;
          cur._yr = r.fiscal_year;
        }
      }
    }
    const stateMap = {};
    for (const r of slugRows) {
      for (const s of parseJson(r.top_states, [])) {
        stateMap[s.state] = (stateMap[s.state] || 0) + (s.cases || 0);
      }
    }
    return {
      slug: latest.slug,
      name: latest.display_name,
      total_cases: totalCases,
      certified_cases: certifiedCases,
      cert_rate: totalCases > 0 ? certifiedCases / totalCases : null,
      median_wage: latest.median_wage_annual ?? null,
      avg_wage: latest.avg_wage_annual ?? null,
      latest_year: latest.fiscal_year,
      years_active: [...new Set(slugRows.map((r) => r.fiscal_year))].sort((a, b) => a - b),
      top_titles: Object.values(titleMap)
        .map(({ title, cases, avg_wage }) => ({ title, cases, avg_wage }))
        .sort((a, b) => b.cases - a.cases)
        .slice(0, 8),
      top_states: Object.entries(stateMap)
        .map(([state, cases]) => ({ state, cases }))
        .sort((a, b) => b.cases - a.cases)
        .slice(0, 6),
    };
  })
  .sort((a, b) => b.total_cases - a.total_cases);
fs.writeFileSync(path.join(OUT_DIR, "cap-exempt.json"), JSON.stringify(capExempt));
console.log(`Wrote cap-exempt.json (${capExempt.length} employers)`);

// Fetch title data (top 500 by FY2026 cases for sponsor-match tool)
console.log("Fetching title data...");
let titleRows = [];
offset = 0;
for (;;) {
  const batch = await sb(`/h1b_titles?select=*&fiscal_year=eq.2026&order=total_cases.desc&limit=${PAGE}&offset=${offset}`);
  titleRows.push(...batch);
  console.log(`  got ${batch.length} title rows (offset ${offset})`);
  if (batch.length < PAGE || titleRows.length >= 500) break;
  offset += PAGE;
}
// Keep top 500
titleRows = titleRows.slice(0, 500);
const titles = titleRows.map((r) => ({
  slug: r.slug,
  title: r.display_title,
  total_cases: r.total_cases,
  certified_cases: r.certified_cases,
  median_wage: r.median_wage_annual,
  avg_wage: r.avg_wage_annual,
  top_employers: parseJson(r.top_employers, []).slice(0, 10),
}));
fs.writeFileSync(path.join(OUT_DIR, "titles.json"), JSON.stringify(titles));
console.log(`Wrote titles.json (${titles.length} entries)`);
console.log("Done!");
