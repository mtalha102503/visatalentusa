// scripts/fetch-all-data.mjs — Fetch all sponsor data from Supabase during prebuild.
// Writes to public/data/ for the Next.js build to consume (no network during build).
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const OUT_DIR = path.join(ROOT, "public", "data");

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

fs.mkdirSync(OUT_DIR, { recursive: true });

// Fetch all employer rows (2,938 rows)
console.log("Fetching all employer data...");
const rows = await sb("/h1b_employers?select=*&order=slug,fiscal_year&limit=5000");
console.log(`Got ${rows.length} rows`);

// Write index (FY2026 top 1000)
const fy2026 = rows
  .filter((r) => r.fiscal_year === 2026)
  .sort((a, b) => b.total_cases - a.total_cases)
  .slice(0, 1000);
const index = fy2026.map((r) => ({
  slug: r.slug,
  name: r.display_name,
  cases: r.total_cases,
}));
fs.writeFileSync(path.join(OUT_DIR, "index.json"), JSON.stringify(index));
console.log(`Wrote index.json (${index.length} entries)`);

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
      wage_level_mix: r.wage_level_mix ?? {},
      top_titles: r.top_titles ?? [],
      top_states: r.top_states ?? [],
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
console.log("Done!");
