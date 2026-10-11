"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { formatNum, formatUSD, formatPct } from "@/lib/format";
import type { TitleEntry } from "@/lib/data";

/* ------------------------------------------------------------------ */
/* Wage level definitions (DOL structure; odds = DHS wage-weighted     */
/* selection projections, same as the lottery-odds tool)               */
/* ------------------------------------------------------------------ */
const LEVELS = [
  {
    level: 1,
    name: "Level I",
    label: "Entry level",
    experience: "0–2 years · closely supervised, routine tasks",
    entries: 1,
    odds: 0.15,
    color: "bg-rose-500",
    bar: "bg-rose-500",
    textColor: "text-rose-700",
    bgLight: "bg-rose-50",
    border: "border-rose-300",
    ring: "ring-rose-500",
    blurb:
      "The entry point of the DOL wage scale — appropriate for workers with a basic understanding of the occupation who perform routine tasks under close supervision.",
  },
  {
    level: 2,
    name: "Level II",
    label: "Qualified",
    experience: "2–4 years · limited experience, moderate judgment",
    entries: 2,
    odds: 0.31,
    color: "bg-amber-500",
    bar: "bg-amber-500",
    textColor: "text-amber-700",
    bgLight: "bg-amber-50",
    border: "border-amber-300",
    ring: "ring-amber-500",
    blurb:
      "For qualified workers with some experience who exercise moderate judgment. The most common band in H-1B filings — a large share of LCAs land here.",
  },
  {
    level: 3,
    name: "Level III",
    label: "Experienced",
    experience: "4–6+ years · sound understanding, independent work",
    entries: 3,
    odds: 0.46,
    color: "bg-blue-500",
    bar: "bg-blue-500",
    textColor: "text-blue-700",
    bgLight: "bg-blue-50",
    border: "border-blue-300",
    ring: "ring-blue-500",
    blurb:
      "For experienced workers who can work independently and apply a sound understanding of the occupation. A meaningful step up in lottery entries.",
  },
  {
    level: 4,
    name: "Level IV",
    label: "Fully competent",
    experience: "6+ years · expert, complex problem-solving",
    entries: 4,
    odds: 0.61,
    color: "bg-emerald-500",
    bar: "bg-emerald-500",
    textColor: "text-emerald-700",
    bgLight: "bg-emerald-50",
    border: "border-emerald-300",
    ring: "ring-emerald-500",
    blurb:
      "For fully competent experts who solve complex problems and may supervise others. The top band — and the most lottery entries under wage-weighted selection.",
  },
];

/* Boundaries as fractions of the title's median offered wage.
   Anchored on real LCA filing data: median sits near the
   Level II/III boundary, matching the DOL percentile structure
   (I≈17th, II≈34th, III≈50th, IV≈67th of the OES distribution). */
const BOUNDARIES = [0.8, 0.95, 1.15]; // L1|L2, L2|L3, L3|L4

function levelForSalary(salary: number, median: number): number {
  if (median <= 0) return 2;
  const r = salary / median;
  if (r < BOUNDARIES[0]) return 1;
  if (r < BOUNDARIES[1]) return 2;
  if (r < BOUNDARIES[2]) return 3;
  return 4;
}

function boundarySalary(median: number, idx: number): number {
  return Math.round((median * BOUNDARIES[idx]) / 1000) * 1000;
}

export default function WageLevelChecker({ titles }: { titles: TitleEntry[] }) {
  const sorted = useMemo(
    () => [...titles].sort((a, b) => b.total_cases - a.total_cases),
    [titles]
  );
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<TitleEntry | null>(
    sorted.find((t) => t.slug === "software-engineer-2") ?? sorted[0] ?? null
  );
  const [open, setOpen] = useState(false);
  const [salary, setSalary] = useState(150000);

  const matches = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (q.length < 2) return [];
    return sorted
      .filter((t) => t.title.toLowerCase().includes(q))
      .slice(0, 8);
  }, [query, sorted]);

  const median = selected?.median_wage ?? 0;
  const hasData = median > 0;
  const level = hasData ? levelForSalary(salary, median) : 2;
  const current = LEVELS[level - 1];

  /* Gauge geometry */
  const gaugeMin = hasData ? Math.floor(median * 0.5) : 0;
  const gaugeMax = hasData ? Math.ceil(median * 1.7) : 1;
  const pct = (v: number) =>
    Math.min(100, Math.max(0, ((v - gaugeMin) / (gaugeMax - gaugeMin)) * 100));

  const nextLevel = level < 4 ? LEVELS[level] : null;
  const salaryToNext = nextLevel ? boundarySalary(median, level - 1) - salary : 0;

  const p25 = hasData ? Math.round(median * 0.85) : null;
  const p75 = hasData ? Math.round(median * 1.15) : null;

  function pick(t: TitleEntry) {
    setSelected(t);
    setQuery("");
    setOpen(false);
    if (t.median_wage) setSalary(Math.round(t.median_wage / 5000) * 5000);
  }

  return (
    <div>
      {/* ---- Title + salary inputs ---- */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="grid gap-5 md:grid-cols-2">
          <div className="relative">
            <label
              htmlFor="wl-title"
              className="text-sm font-semibold text-slate-900"
            >
              Your job title
            </label>
            <input
              id="wl-title"
              type="text"
              value={selected ? selected.title : query}
              placeholder="e.g. Software Engineer"
              onChange={(e) => {
                setSelected(null);
                setQuery(e.target.value);
                setOpen(true);
              }}
              onFocus={() => setOpen(true)}
              className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 focus:border-blue-500 focus:outline-none"
            />
            {open && matches.length > 0 && (
              <ul className="absolute z-10 mt-1 max-h-64 w-full overflow-auto rounded-lg border border-slate-200 bg-white shadow-lg">
                {matches.map((t) => (
                  <li key={t.slug}>
                    <button
                      type="button"
                      onClick={() => pick(t)}
                      className="flex w-full items-center justify-between px-4 py-2.5 text-left hover:bg-blue-50"
                    >
                      <span className="font-medium text-slate-800">
                        {t.title}
                      </span>
                      <span className="text-xs text-slate-500">
                        {formatNum(t.total_cases)} filings
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div>
            <label
              htmlFor="wl-salary"
              className="text-sm font-semibold text-slate-900"
            >
              Offered annual salary
            </label>
            <div className="mt-2 flex items-center gap-3">
              <span className="text-lg font-bold text-slate-400">$</span>
              <input
                id="wl-salary"
                type="number"
                min={20000}
                max={1000000}
                step={1000}
                value={salary}
                onChange={(e) => setSalary(Number(e.target.value) || 0)}
                className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-lg font-bold text-slate-900 focus:border-blue-500 focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* ---- What-if slider ---- */}
        <div className="mt-6">
          <div className="flex items-center justify-between">
            <label className="text-sm font-semibold text-slate-900">
              What-if slider — drag to see how your level changes
            </label>
            <span className="rounded-lg bg-slate-100 px-3 py-1 text-lg font-bold text-slate-900">
              {formatUSD(salary)}
            </span>
          </div>
          <input
            type="range"
            min={hasData ? Math.round(median * 0.4) : 40000}
            max={hasData ? Math.round(median * 2) : 400000}
            step={2500}
            value={salary}
            onChange={(e) => setSalary(Number(e.target.value))}
            className="mt-4 w-full accent-blue-700"
            aria-label="Annual salary slider"
          />
          <div className="mt-1 flex justify-between text-xs text-slate-500">
            <span>
              {formatUSD(hasData ? Math.round(median * 0.4) : 40000)}
            </span>
            <span>
              {formatUSD(hasData ? Math.round(median * 2) : 400000)}
            </span>
          </div>
        </div>
      </div>

      {selected && hasData && (
        <>
          {/* ---- Result hero ---- */}
          <div
            className={`mt-6 rounded-xl border-2 ${current.border} ${current.bgLight} p-6`}
          >
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                  Estimated H-1B wage level
                </p>
                <p className={`mt-1 text-4xl font-extrabold ${current.textColor}`}>
                  {current.name}
                  <span className="ml-3 text-xl font-semibold">
                    {current.label}
                  </span>
                </p>
                <p className="mt-2 text-sm text-slate-600">
                  {current.experience}
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                  Lottery entries
                </p>
                <p className="text-4xl font-extrabold text-slate-900">
                  {current.entries}×
                </p>
                <p className="text-sm text-slate-600">
                  ≈ {formatPct(current.odds, 0)} selection odds
                </p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-slate-700">
              {current.blurb}
            </p>
            {nextLevel && salaryToNext > 0 && (
              <div className="mt-4 rounded-lg bg-white/70 p-4 text-sm text-slate-700">
                <strong className={nextLevel.textColor}>
                  Reach {nextLevel.name}:
                </strong>{" "}
                about <strong>{formatUSD(salaryToNext)}</strong> more per year
                (around {formatUSD(boundarySalary(median, level - 1))}) would
                move this offer into {nextLevel.name} — worth{" "}
                {nextLevel.entries - current.entries} extra lottery{" "}
                {nextLevel.entries - current.entries === 1 ? "entry" : "entries"}.
              </div>
            )}
          </div>

          {/* ---- Gauge ---- */}
          <div className="mt-6 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-base font-bold text-slate-900">
              Where your salary falls — {selected.title}
            </h3>
            <p className="mt-1 text-sm text-slate-500">
              Boundaries estimated from {formatNum(selected.total_cases)}{" "}
              real DOL filings (median {formatUSD(median)})
            </p>
            <div className="relative mt-8">
              <div className="flex h-8 w-full overflow-hidden rounded-full">
                {LEVELS.map((l, i) => {
                  const start =
                    i === 0 ? 0 : pct(boundarySalary(median, i - 1));
                  const end =
                    i === 3 ? 100 : pct(boundarySalary(median, i));
                  return (
                    <div
                      key={l.level}
                      className={`${l.bar} ${i === level - 1 ? "opacity-100" : "opacity-35"}`}
                      style={{ width: `${end - start}%` }}
                      title={`${l.name}: ${l.label}`}
                    />
                  );
                })}
              </div>
              {/* marker */}
              <div
                className="absolute -top-2 h-12 w-1 -translate-x-1/2 rounded bg-slate-900"
                style={{ left: `${pct(salary)}%` }}
              >
                <div className="absolute -top-7 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-slate-900 px-2 py-0.5 text-xs font-bold text-white">
                  {formatUSD(salary)}
                </div>
              </div>
              {/* boundary labels */}
              <div className="relative mt-2 h-5 text-[11px] text-slate-500">
                {BOUNDARIES.map((_, i) => (
                  <span
                    key={i}
                    className="absolute -translate-x-1/2"
                    style={{ left: `${pct(boundarySalary(median, i))}%` }}
                  >
                    {formatUSD(boundarySalary(median, i))}
                  </span>
                ))}
              </div>
              <div className="mt-1 flex justify-between text-xs font-semibold">
                {LEVELS.map((l) => (
                  <span
                    key={l.level}
                    className={l.level === level ? l.textColor : "text-slate-400"}
                  >
                    {l.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* ---- All 4 levels comparison ---- */}
          <div className="mt-6">
            <h3 className="text-lg font-bold text-slate-900">
              All four H-1B wage levels, compared
            </h3>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              {LEVELS.map((l) => {
                const isYou = l.level === level;
                return (
                  <div
                    key={l.level}
                    className={`rounded-xl border-2 p-4 ${
                      isYou
                        ? `${l.border} ${l.bgLight} ring-2 ${l.ring}`
                        : "border-slate-200 bg-white"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <p className="font-bold text-slate-900">
                        {l.name}{" "}
                        <span className="font-normal text-slate-500">
                          · {l.label}
                        </span>
                      </p>
                      {isYou && (
                        <span
                          className={`rounded-full ${l.color} px-2.5 py-0.5 text-xs font-bold text-white`}
                        >
                          YOU
                        </span>
                      )}
                    </div>
                    <p className="mt-1 text-xs text-slate-500">
                      {l.experience}
                    </p>
                    <div className="mt-3">
                      <div className="flex justify-between text-xs text-slate-500">
                        <span>Lottery odds</span>
                        <span className="font-bold text-slate-800">
                          {l.entries}× entries · ≈{formatPct(l.odds, 0)}
                        </span>
                      </div>
                      <div className="mt-1 h-2.5 w-full rounded-full bg-slate-100">
                        <div
                          className={`h-2.5 rounded-full ${l.bar}`}
                          style={{ width: `${l.odds * 100}%` }}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ---- Real data context ---- */}
          <div className="mt-6 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900">
              Real filing data behind this estimate
            </h3>
            <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
              <div className="rounded-lg bg-slate-50 p-4 text-center">
                <p className="text-xs font-semibold uppercase text-slate-500">
                  Median offered
                </p>
                <p className="mt-1 text-xl font-extrabold text-slate-900">
                  {formatUSD(median)}
                </p>
              </div>
              <div className="rounded-lg bg-slate-50 p-4 text-center">
                <p className="text-xs font-semibold uppercase text-slate-500">
                  Est. 25th pct
                </p>
                <p className="mt-1 text-xl font-extrabold text-slate-900">
                  {formatUSD(p25)}
                </p>
              </div>
              <div className="rounded-lg bg-slate-50 p-4 text-center">
                <p className="text-xs font-semibold uppercase text-slate-500">
                  Est. 75th pct
                </p>
                <p className="mt-1 text-xl font-extrabold text-slate-900">
                  {formatUSD(p75)}
                </p>
              </div>
              <div className="rounded-lg bg-slate-50 p-4 text-center">
                <p className="text-xs font-semibold uppercase text-slate-500">
                  FY filings
                </p>
                <p className="mt-1 text-xl font-extrabold text-slate-900">
                  {formatNum(selected.total_cases)}
                </p>
              </div>
            </div>
            <p className="mt-3 text-xs text-slate-500">
              Percentiles are rough estimates derived from the median of actual
              DOL LCA filings for “{selected.title}” — illustrative, not
              official prevailing-wage figures.
            </p>
          </div>

          {/* ---- Disclaimer ---- */}
          <div className="mt-6 rounded-xl border border-amber-300 bg-amber-50 p-5">
            <p className="text-sm font-bold text-amber-900">
              ⚠️ This is an estimate — not the official DOL determination
            </p>
            <p className="mt-2 text-sm leading-relaxed text-amber-800">
              This checker estimates your wage level by comparing your salary
              against <strong>actual H-1B LCA filing salaries</strong> for your
              job title. The official prevailing wage is determined by the
              Department of Labor using OES survey data for your{" "}
              <strong>specific occupation (SOC code) and worksite area</strong>{" "}
              — which this tool cannot replicate. Employers must use the
              official DOL wage data; never substitute this estimate on an
              actual filing.
            </p>
          </div>

          {/* ---- CTA to lottery odds ---- */}
          <Link
            href="/tools/lottery-odds"
            className="mt-6 flex items-center justify-between rounded-xl bg-blue-700 p-5 text-white hover:bg-blue-800"
          >
            <div>
              <p className="font-bold">
                See what {current.name} means for your lottery odds →
              </p>
              <p className="mt-1 text-sm text-blue-100">
                Open the H-1B Lottery Odds Calculator with wage-weighted
                selection projections.
              </p>
            </div>
            <span className="text-2xl">→</span>
          </Link>
        </>
      )}

      {selected && !hasData && (
        <div className="mt-6 rounded-xl border border-slate-200 bg-white p-6 text-sm text-slate-600">
          Not enough wage data for “{selected.title}” to estimate a level.
          Try another title.
        </div>
      )}
    </div>
  );
}
