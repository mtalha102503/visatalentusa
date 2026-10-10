"use client";

import Link from "next/link";
import { useMemo, useRef, useState } from "react";
import type { TitleEntry } from "@/lib/data";
import { formatNum, formatUSD } from "@/lib/format";

function certRate(t: TitleEntry): number | null {
  if (!t.total_cases || t.total_cases <= 0) return null;
  return (t.certified_cases / t.total_cases) * 100;
}

// Simple typo-tolerant matcher: exact includes first, then token-based.
function matchScore(title: string, query: string): number {
  const t = title.toLowerCase();
  const q = query.toLowerCase().trim();
  if (!q) return -1;
  if (t === q) return 100;
  if (t.startsWith(q)) return 90;
  if (t.includes(q)) return 80;
  const qTokens = q.split(/\s+/);
  const tTokens = t.split(/\s+/);
  let hits = 0;
  for (const qt of qTokens) {
    if (tTokens.some((tt) => tt.startsWith(qt) || tt.includes(qt))) hits++;
  }
  if (hits === qTokens.length && qTokens.length > 0) return 60;
  if (hits > 0) return 30;
  return -1;
}

export default function SponsorMatchSearch({ titles }: { titles: TitleEntry[] }) {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<TitleEntry | null>(null);
  const [open, setOpen] = useState(false);
  const boxRef = useRef<HTMLDivElement>(null);

  const suggestions = useMemo(() => {
    const q = query.trim();
    if (q.length < 2) return [];
    return titles
      .map((t) => ({ t, s: matchScore(t.title, q) }))
      .filter((x) => x.s > 0)
      .sort((a, b) => b.s - a.s || b.t.total_cases - a.t.total_cases)
      .slice(0, 8)
      .map((x) => x.t);
  }, [query, titles]);

  const pick = (t: TitleEntry) => {
    setSelected(t);
    setQuery(t.title);
    setOpen(false);
  };

  const rate = selected ? certRate(selected) : null;

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm md:p-8">
      <div ref={boxRef} className="relative">
        <label htmlFor="sponsor-match-search" className="text-sm font-semibold text-slate-700">
          Enter your job title
        </label>
        <input
          id="sponsor-match-search"
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setSelected(null);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          onBlur={() => setTimeout(() => setOpen(false), 150)}
          placeholder="e.g. Software Engineer, Data Analyst, Accountant…"
          autoComplete="off"
          className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-100"
        />
        {open && suggestions.length > 0 && (
          <ul className="absolute z-10 mt-1 max-h-72 w-full overflow-auto rounded-lg border border-slate-200 bg-white shadow-lg">
            {suggestions.map((t) => (
              <li key={t.slug}>
                <button
                  type="button"
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={() => pick(t)}
                  className="flex w-full items-center justify-between px-4 py-2.5 text-left hover:bg-blue-50"
                >
                  <span className="font-medium text-slate-800">{t.title}</span>
                  <span className="text-xs text-slate-500">
                    {formatNum(t.total_cases)} filings
                  </span>
                </button>
              </li>
            ))}
          </ul>
        )}
        {open && query.trim().length >= 2 && suggestions.length === 0 && (
          <div className="absolute z-10 mt-1 w-full rounded-lg border border-slate-200 bg-white p-4 text-sm text-slate-600 shadow-lg">
            No exact match for &ldquo;{query.trim()}&rdquo;. Try a broader term
            like &ldquo;Engineer&rdquo;, &ldquo;Analyst&rdquo;, or
            &ldquo;Developer&rdquo; — only verified job titles from DOL records
            have pages.
          </div>
        )}
      </div>

      {selected && (
        <div className="mt-6">
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-lg bg-blue-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-blue-700">
                Total H-1B filings
              </p>
              <p className="mt-1 text-2xl font-bold text-blue-900">
                {formatNum(selected.total_cases)}
              </p>
              <p className="text-xs text-blue-700">FY2026, DOL records</p>
            </div>
            <div className="rounded-lg bg-emerald-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">
                Median salary
              </p>
              <p className="mt-1 text-2xl font-bold text-emerald-900">
                {selected.median_wage != null ? formatUSD(selected.median_wage) : "—"}
              </p>
              <p className="text-xs text-emerald-700">offered wage, FY2026</p>
            </div>
            <div className="rounded-lg bg-violet-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-violet-700">
                DOL LCA certification rate
              </p>
              <p className="mt-1 text-2xl font-bold text-violet-900">
                {rate != null ? `${rate.toFixed(1)}%` : "—"}
              </p>
              <p className="text-xs text-violet-700">certified ÷ filed</p>
            </div>
          </div>

          <h3 className="mt-6 font-semibold text-slate-900">
            Top companies sponsoring {selected.title}s
          </h3>
          <div className="mt-3 overflow-x-auto rounded-lg border border-slate-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-50 text-left text-xs uppercase tracking-wide text-slate-500">
                  <th className="px-4 py-2.5">#</th>
                  <th className="px-4 py-2.5">Company</th>
                  <th className="px-4 py-2.5 text-right">H-1B filings</th>
                </tr>
              </thead>
              <tbody>
                {selected.top_employers.slice(0, 10).map((e, i) => (
                  <tr key={e.employer} className="border-t border-slate-100">
                    <td className="px-4 py-2.5 text-slate-500">{i + 1}</td>
                    <td className="px-4 py-2.5 font-medium text-slate-800">
                      {e.employer}
                    </td>
                    <td className="px-4 py-2.5 text-right tabular-nums text-slate-700">
                      {formatNum(e.cases)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <Link
            href={`/tools/sponsor-match/${selected.slug}`}
            className="mt-4 inline-block rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-800"
          >
            View full {selected.title} sponsor report →
          </Link>
        </div>
      )}

      {!selected && (
        <div className="mt-6">
          <p className="text-sm font-semibold text-slate-700">
            Popular job titles
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            {titles.slice(0, 10).map((t) => (
              <button
                key={t.slug}
                type="button"
                onClick={() => pick(t)}
                className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm text-slate-700 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-800"
              >
                {t.title}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
