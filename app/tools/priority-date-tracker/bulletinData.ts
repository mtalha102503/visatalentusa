// Real U.S. Department of State Visa Bulletin data, copied exactly as published
// on travel.state.gov. Last updated: November 2026 bulletin (Number 20, Volume XI).
// Format: dd-mmm-yy. "C" = Current, "U" = Unavailable.
// DO NOT edit these values by hand — update only from a newly published bulletin.

export const BULLETIN = {
  month: "November 2026",
  number: "Number 20, Volume XI",
  url: "https://travel.state.gov/content/travel/en/legal/visa-law0/visa-bulletin/2027/visa-bulletin-for-november-2026.html",
  archiveUrl: "https://travel.state.gov/content/travel/en/legal/visa-law0/visa-bulletin.html",
};

export type Category = "EB-1" | "EB-2" | "EB-3";
export type Country = "India" | "China" | "ROW" | "Mexico" | "Philippines";

export const CATEGORIES: Category[] = ["EB-1", "EB-2", "EB-3"];
export const COUNTRIES: Country[] = ["India", "China", "ROW", "Mexico", "Philippines"];

export const COUNTRY_LABELS: Record<Country, string> = {
  India: "India",
  China: "China (mainland-born)",
  ROW: "Rest of World",
  Mexico: "Mexico",
  Philippines: "Philippines",
};

// Final Action Dates — November 2026 bulletin, employment-based
export const FINAL_ACTION: Record<Category, Record<Country, string>> = {
  "EB-1": { ROW: "C", China: "01AUG23", India: "01FEB23", Mexico: "C", Philippines: "C" },
  "EB-2": { ROW: "01APR25", China: "01OCT21", India: "01NOV13", Mexico: "01APR25", Philippines: "01APR25" },
  "EB-3": { ROW: "15JUN24", China: "22JAN22", India: "22JAN14", Mexico: "15JUN24", Philippines: "15AUG23" },
};

// Dates for Filing — November 2026 bulletin, employment-based
export const DATES_FOR_FILING: Record<Category, Record<Country, string>> = {
  "EB-1": { ROW: "C", China: "01JUL24", India: "01JUL24", Mexico: "C", Philippines: "C" },
  "EB-2": { ROW: "15MAR26", China: "01JAN23", India: "15JAN15", Mexico: "15MAR26", Philippines: "15MAR26" },
  "EB-3": { ROW: "01AUG24", China: "01APR24", India: "15JAN15", Mexico: "01AUG24", Philippines: "01JAN24" },
};

export interface HistoryRow {
  month: string;
  India: string;
  China: string;
  ROW: string;
}

// EB-2 Final Action Dates history, Apr–Nov 2026 (from monthly bulletins)
export const EB2_HISTORY: HistoryRow[] = [
  { month: "Apr 2026", India: "15JUL14", China: "01SEP21", ROW: "C" },
  { month: "May 2026", India: "15JUL14", China: "01SEP21", ROW: "C" },
  { month: "Jun 2026", India: "01SEP13", China: "01SEP21", ROW: "C" },
  { month: "Jul 2026", India: "U", China: "01SEP21", ROW: "C" },
  { month: "Aug 2026", India: "U", China: "01SEP21", ROW: "C" },
  { month: "Sep 2026", India: "U", China: "01SEP21", ROW: "C" },
  { month: "Oct 2026", India: "01NOV13", China: "01OCT21", ROW: "01JAN25" },
  { month: "Nov 2026", India: "01NOV13", China: "01OCT21", ROW: "01APR25" },
];

// Recent pace of cutoff advancement, derived from the history above.
// EB-2 India: 01SEP13 (Jun 2026) -> 01NOV13 (Nov 2026) = 61 days over 5 months.
// EB-2 China: 01SEP21 (Sep 2026) -> 01OCT21 (Oct 2026) = 30 days over 1 month.
// ROW has no pace number: it was Current until Sep 2026, then 01JAN25 (Oct), then 01APR25 (Nov).
export const RECENT_PACE_DAYS_PER_MONTH: Record<string, number | null> = {
  India: 12,
  China: 30,
  ROW: null,
};

const MONTHS: Record<string, number> = {
  JAN: 0, FEB: 1, MAR: 2, APR: 3, MAY: 4, JUN: 5,
  JUL: 6, AUG: 7, SEP: 8, OCT: 9, NOV: 10, DEC: 11,
};

/** Parse "01NOV13" -> Date. Returns null for "C"/"U"/invalid. */
export function parseBulletinDate(s: string): Date | null {
  if (s === "C" || s === "U") return null;
  const m = /^(\d{2})([A-Z]{3})(\d{2})$/.exec(s.trim());
  if (!m) return null;
  const day = Number(m[1]);
  const mon = MONTHS[m[2]];
  const yr = 2000 + Number(m[3]);
  if (mon === undefined || Number.isNaN(day)) return null;
  return new Date(yr, mon, day);
}

/** "01NOV13" -> "Nov 1, 2013" */
export function formatBulletinDate(s: string): string {
  if (s === "C") return "Current";
  if (s === "U") return "Unavailable";
  const d = parseBulletinDate(s);
  if (!d) return s;
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function monthsBetween(a: Date, b: Date): number {
  return (
    (b.getFullYear() - a.getFullYear()) * 12 +
    (b.getMonth() - a.getMonth()) +
    (b.getDate() - a.getDate()) / 30.44
  );
}

export function formatDuration(totalMonths: number): string {
  const m = Math.max(0, Math.round(totalMonths));
  const y = Math.floor(m / 12);
  const rem = m % 12;
  if (y === 0) return `${rem} month${rem === 1 ? "" : "s"}`;
  if (rem === 0) return `${y} year${y === 1 ? "" : "s"}`;
  return `${y} year${y === 1 ? "" : "s"} ${rem} month${rem === 1 ? "" : "s"}`;
}
