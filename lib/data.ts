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

const DATA_DIR = path.join(process.cwd(), "data");

let sponsorsCache: Record<string, Sponsor> | null = null;
function loadSponsors(): Record<string, Sponsor> {
  if (!sponsorsCache) {
    sponsorsCache = {};
    // Data is sharded into ~100KB parts (GitHub API arg limits)
    for (let i = 1; ; i++) {
      const p = path.join(
        DATA_DIR,
        "sponsors_parts",
        `part-${String(i).padStart(2, "0")}.json`
      );
      if (!fs.existsSync(p)) break;
      Object.assign(
        sponsorsCache,
        JSON.parse(fs.readFileSync(p, "utf8")) as Record<string, Sponsor>
      );
    }
  }
  return sponsorsCache;
}

export function getSponsor(slug: string): Sponsor | null {
  return loadSponsors()[slug] ?? null;
}

export function getSearchIndex(): IndexEntry[] {
  return JSON.parse(
    fs.readFileSync(path.join(DATA_DIR, "search-index.json"), "utf8")
  ) as IndexEntry[];
}

export function getSiteStats(): SiteStats {
  return JSON.parse(
    fs.readFileSync(path.join(DATA_DIR, "stats.json"), "utf8")
  ) as SiteStats;
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
