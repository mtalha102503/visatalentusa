// scripts/fetch-search-index.mjs — prebuild step.
// Fetches the FY2026 employer index from Supabase and writes public/search-index.json
// so the client-side SearchBox works without runtime DB queries.
// Requires SUPABASE_URL and SUPABASE_ANON_KEY env vars.

const url = process.env.SUPABASE_URL;
const key = process.env.SUPABASE_ANON_KEY;
if (!url || !key) {
  console.error("Missing SUPABASE_URL / SUPABASE_ANON_KEY — skipping search-index fetch");
  process.exit(0);
}

const res = await fetch(
  `${url}/rest/v1/h1b_employers?select=slug,display_name,total_cases&fiscal_year=eq.2026&order=total_cases.desc&limit=1000`,
  { headers: { apikey: key, Authorization: `Bearer ${key}` } }
);
if (!res.ok) {
  console.error(`Supabase fetch failed: ${res.status} ${(await res.text()).slice(0, 200)}`);
  process.exit(1);
}
const rows = await res.json();
const index = rows.map((r) => ({ slug: r.slug, name: r.display_name, cases: r.total_cases }));

const { writeFileSync, mkdirSync } = await import("node:fs");
const { join, dirname } = await import("node:path");
const { fileURLToPath } = await import("node:url");
const root = join(dirname(fileURLToPath(import.meta.url)), "..");
mkdirSync(join(root, "public"), { recursive: true });
writeFileSync(join(root, "public", "search-index.json"), JSON.stringify(index));
console.log(`wrote public/search-index.json (${index.length} entries)`);
