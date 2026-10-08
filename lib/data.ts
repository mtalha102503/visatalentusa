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

const DATA_DIR = path.join(process.cwd(), "public", "data");

function readJson<T>(filename: string): T {
  const fp = path.join(DATA_DIR, filename);
  return JSON.parse(fs.readFileSync(fp, "utf-8")) as T;
}

export async function getSearchIndex(): Promise<IndexEntry[]> {
  return readJson<IndexEntry[]>("index.json");
}

export async function getSponsor(slug: string): Promise<Sponsor | null> {
  try {
    return readJson<Sponsor>(`${slug}.json`);
  } catch {
    return null;
  }
}

export async function getSiteStats(): Promise<SiteStats> {
  return readJson<SiteStats>("stats.json");
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
