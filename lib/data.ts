// lib/data.ts — Supabase-backed data layer (build time).
// All queries run server-side during `next build`. Requires env vars:
//   SUPABASE_URL, SUPABASE_ANON_KEY (set these in Vercel → Project Settings → Environment Variables)

export interface TitleStat {
  title: string;
  cases: number;
  avg_wage: number | null;
}
export interface StateStat {
  state: string;
  cases: number;
}
export interface YearData {
  total_cases: number;
  certified_cases: number;
  denied_cases: number;
  approval_rate: number | null;
  avg_wage_annual: number | null;
  median_wage_annual: number | null;
  wage_level_mix: Record<string, number>;
  top_titles: TitleStat[];
  top_states: StateStat[];
  naics_code: string | null;
  is_cap_exempt_candidate: boolean;
  yoy_change_pct: number | null;
}
export interface Sponsor {
  slug: string;
  display_name: string;
  years: Record<string, YearData>;
}
export interface IndexEntry {
  slug: string;
  name: string;
  cases: number;
}
export interface SiteStats {
  total_sponsors_fy2026: number;
  total_cases_fy2026: number;
  median_wage_fy2026: number;
  top50: {
    slug: string;
    name: string;
    cases: number;
    approval_rate: number | null;
    median_wage: number | null;
  }[];
}

const SUPABASE_URL = process.env.SUPABASE_URL ?? "";
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY ?? "";

async function sb<T>(path: string): Promise<T> {
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    throw new Error(
      "Missing SUPABASE_URL / SUPABASE_ANON_KEY env vars (set them in Vercel → Environment Variables)"
    );
  }
  const res = await fetch(`${SUPABASE_URL}/rest/v1${path}`, {
    headers: {
      apikey: SUPABASE_ANON_KEY,
      Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
    },
  });
  if (!res.ok) {
    throw new Error(`Supabase ${res.status}: ${(await res.text()).slice(0, 300)}`);
  }
  return (await res.json()) as T;
}

interface EmployerRow {
  employer_group: string;
  display_name: string;
  slug: string;
  fiscal_year: number;
  total_cases: number;
  certified_cases: number;
  denied_cases: number;
  approval_rate: number | null;
  avg_wage_annual: number | null;
  median_wage_annual: number | null;
  wage_level_mix: Record<string, number> | null;
  top_titles: TitleStat[] | null;
  top_states: StateStat[] | null;
  naics_code: string | null;
  is_cap_exempt_candidate: boolean;
  yoy_change_pct: number | null;
}

function toYearData(r: EmployerRow): YearData {
  return {
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

// All FY2026 employers, ordered by filings — the canonical top-1000 list.
let indexCache: (EmployerRow & IndexEntry)[] | null = null;
async function loadIndex(): Promise<(EmployerRow & IndexEntry)[]> {
  if (!indexCache) {
    const rows = await sb<EmployerRow[]>(
      "/h1b_employers?select=slug,display_name,total_cases,approval_rate,median_wage_annual&fiscal_year=eq.2026&order=total_cases.desc&limit=1000"
    );
    indexCache = rows.map((r) => ({
      ...r,
      name: r.display_name,
      cases: r.total_cases,
    }));
  }
  return indexCache;
}

export async function getSearchIndex(): Promise<IndexEntry[]> {
  "use cache";
  const rows = await loadIndex();
  return rows.map((r) => ({ slug: r.slug, name: r.display_name, cases: r.total_cases }));
}

export async function getSponsor(slug: string): Promise<Sponsor | null> {
  "use cache";
  const rows = await sb<EmployerRow[]>(
    `/h1b_employers?select=*&slug=eq.${encodeURIComponent(slug)}&order=fiscal_year`
  );
  if (!rows.length) return null;
  const years: Record<string, YearData> = {};
  for (const r of rows) years[String(r.fiscal_year)] = toYearData(r);
  return { slug: rows[0].slug, display_name: rows[0].display_name, years };
}

export async function getSiteStats(): Promise<SiteStats> {
  "use cache";
  const rows = await loadIndex();
  const total_cases_fy2026 = rows.reduce((a, r) => a + r.total_cases, 0);
  const wages = rows
    .map((r) => r.median_wage_annual)
    .filter((w): w is number => w != null)
    .sort((a, b) => a - b);
  const median_wage_fy2026 = wages.length
    ? wages[Math.floor(wages.length / 2)]
    : 0;
  return {
    total_sponsors_fy2026: rows.length,
    total_cases_fy2026,
    median_wage_fy2026,
    top50: rows.slice(0, 50).map((r) => ({
      slug: r.slug,
      name: r.display_name,
      cases: r.total_cases,
      approval_rate: r.approval_rate,
      median_wage: r.median_wage_annual,
    })),
  };
}

export function formatNum(n: number | null | undefined): string {
  if (n == null) return "—";
  return Math.round(n).toLocaleString("en-US");
}

export function formatUSD(n: number | null | undefined): string {
  if (n == null) return "—";
  return "$" + Math.round(n).toLocaleString("en-US");
}

export function formatPct(n: number | null | undefined, digits = 1): string {
  if (n == null) return "—";
  return (n * 100).toFixed(digits) + "%";
}
