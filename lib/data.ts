// lib/data.ts — Local JSON data layer (build time).
// Data is fetched from Supabase by scripts/fetch-all-data.mjs during prebuild
// and written to public/data/. This file reads from local JSON (no network).
import fs from "node:fs";
import path from "node:path";

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
  approval_rate: number | null;
  median_wage: number | null;
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

const DATA_DIR = path.join(process.cwd(), ".build-data");

function readJson<T>(filename: string): T {
  const fp = path.join(DATA_DIR, filename);
  return JSON.parse(fs.readFileSync(fp, "utf-8")) as T;
}

export async function getSearchIndex(): Promise<IndexEntry[]> {
  return readJson<IndexEntry[]>("index.json");
}

/** Slugify an employer display name (same rule title pages used to build links). */
export function slugifyEmployerName(s: string): string {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

/**
 * Canonical sponsor-page slug by slugified employer name — but ONLY for
 * employers that actually have a live page (i.e. are in the loaded search
 * index). Employers with no page yet are absent, so callers render them as
 * plain text instead of linking to a 404. Ambiguous keys (two loaded
 * sponsors slugifying identically) are dropped so a link can never point at
 * the wrong employer. This also fixes the -2 dedupe suffix: the canonical
 * slug (e.g. citi-2) is used, not the slugified name (citi).
 */
export async function getSponsorSlugMap(): Promise<Record<string, string>> {
  const index = await getSearchIndex();
  const byName = new Map<string, string>();
  const ambiguous = new Set<string>();
  for (const e of index) {
    const key = slugifyEmployerName(e.name);
    if (!key || key === "employer") continue;
    const prev = byName.get(key);
    if (prev !== undefined && prev !== e.slug) ambiguous.add(key);
    else byName.set(key, e.slug);
  }
  for (const k of ambiguous) byName.delete(k);
  return Object.fromEntries(byName);
}

export async function getSponsor(slug: string): Promise<Sponsor | null> {
  try {
    return readJson<Sponsor>(`${slug}.json`);
  } catch {
    return null;
  }
}

export interface TitleEntry {
  slug: string;
  title: string;
  total_cases: number;
  certified_cases: number;
  median_wage: number | null;
  avg_wage: number | null;
  top_employers: { employer: string; cases: number }[];
}

export async function getSiteStats(): Promise<SiteStats> {
  return readJson<SiteStats>("stats.json");
}

export async function getTitles(): Promise<TitleEntry[]> {
  try {
    return readJson<TitleEntry[]>("titles.json");
  } catch {
    return [];
  }
}

export interface CapExemptEmployer {
  slug: string;
  name: string;
  total_cases: number;
  certified_cases: number;
  cert_rate: number | null;
  median_wage: number | null;
  avg_wage: number | null;
  latest_year: number;
  years_active: number[];
  top_titles: TitleStat[];
  top_states: StateStat[];
}

export async function getCapExemptEmployers(): Promise<CapExemptEmployer[]> {
  try {
    return readJson<CapExemptEmployer[]>("cap-exempt.json");
  } catch {
    return [];
  }
}

// Formatting helpers live in the client-safe "./format" module.
// Re-exported here so existing "@/lib/data" imports keep working.
export { formatNum, formatUSD, formatPct } from "./format";
