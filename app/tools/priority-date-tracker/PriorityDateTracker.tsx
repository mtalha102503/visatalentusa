"use client";

import { useMemo, useState } from "react";
import {
  BULLETIN,
  CATEGORIES,
  COUNTRIES,
  COUNTRY_LABELS,
  FINAL_ACTION,
  DATES_FOR_FILING,
  EB2_HISTORY,
  RECENT_PACE_DAYS_PER_MONTH,
  parseBulletinDate,
  formatBulletinDate,
  monthsBetween,
  formatDuration,
  type Category,
  type Country,
} from "./bulletinData";

function Pill<T extends string>({
  options,
  value,
  onChange,
  labels,
}: {
  options: T[];
  value: T;
  onChange: (v: T) => void;
  labels?: Record<T, string>;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((opt) => (
        <button
          key={opt}
          type="button"
          onClick={() => onChange(opt)}
          className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
            value === opt
              ? "bg-indigo-600 text-white shadow"
              : "bg-slate-100 text-slate-700 hover:bg-slate-200"
          }`}
        >
          {labels ? labels[opt] : opt}
        </button>
      ))}
    </div>
  );
}

function todayISO(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(
    d.getDate()
  ).padStart(2, "0")}`;
}

export default function PriorityDateTracker() {
  const [category, setCategory] = useState<Category>("EB-2");
  const [country, setCountry] = useState<Country>("India");
  const [pdInput, setPdInput] = useState("");
  const [checked, setChecked] = useState(false);

  const result = useMemo(() => {
    if (!checked || !pdInput) return null;
    const pd = new Date(pdInput + "T00:00:00");
    if (Number.isNaN(pd.getTime())) return null;
    const cutoffStr = FINAL_ACTION[category][country];
    const filingStr = DATES_FOR_FILING[category][country];
    const filingDate = parseBulletinDate(filingStr);
    if (cutoffStr === "U") {
      return { status: "unavailable" as const, cutoffStr, filingStr, filingDate, pd };
    }
    if (cutoffStr === "C") {
      return { status: "current" as const, cutoffStr, filingStr, filingDate, pd };
    }
    const cutoff = parseBulletinDate(cutoffStr)!;
    if (pd <= cutoff) {
      return { status: "current" as const, cutoffStr, filingStr, filingDate, pd, cutoff };
    }
    const gapMonths = monthsBetween(cutoff, pd);
    // Rough wait estimate (EB-2 only, where we track pace)
    let estimateMonths: number | null = null;
    let pace: number | null = null;
    if (category === "EB-2") {
      pace = RECENT_PACE_DAYS_PER_MONTH[country] ?? null;
      if (pace && pace > 0) {
        estimateMonths = (gapMonths * 30.44) / pace;
      }
    }
    return {
      status: "waiting" as const,
      cutoffStr,
      filingStr,
      filingDate,
      pd,
      cutoff,
      gapMonths,
      estimateMonths,
      pace,
    };
  }, [checked, pdInput, category, country]);

  return (
    <div className="space-y-6">
      {/* Checker card */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900">
          Is my priority date current?
        </h2>
        <p className="mt-1 text-sm text-slate-600">
          Answer 3 quick questions — we check against the real{" "}
          {BULLETIN.month} Visa Bulletin.
        </p>

        <div className="mt-5 space-y-4">
          <div>
            <p className="mb-2 text-sm font-semibold text-slate-700">
              1. Your green card category
            </p>
            <Pill options={CATEGORIES} value={category} onChange={(v) => { setCategory(v); setChecked(false); }} />
          </div>
          <div>
            <p className="mb-2 text-sm font-semibold text-slate-700">
              2. Your country of birth (chargeability)
            </p>
            <Pill
              options={COUNTRIES}
              value={country}
              onChange={(v) => { setCountry(v); setChecked(false); }}
              labels={COUNTRY_LABELS}
            />
          </div>
          <div>
            <label
              htmlFor="pd"
              className="mb-2 block text-sm font-semibold text-slate-700"
            >
              3. Your priority date
            </label>
            <input
              id="pd"
              type="date"
              max={todayISO()}
              value={pdInput}
              onChange={(e) => { setPdInput(e.target.value); setChecked(false); }}
              className="w-full max-w-xs rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
            />
            <p className="mt-1 text-xs text-slate-500">
              Usually the date your PERM labor certification or I-140 was filed.
            </p>
          </div>
          <button
            type="button"
            disabled={!pdInput}
            onClick={() => setChecked(true)}
            className="w-full rounded-xl bg-indigo-600 px-6 py-3.5 text-base font-bold text-white shadow transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-40 sm:w-auto sm:px-10"
          >
            Check My Date →
          </button>
        </div>

        {/* Result */}
        {result && (
          <div className="mt-6">
            {result.status === "current" && (
              <div className="rounded-xl border border-green-200 bg-green-50 p-5">
                <p className="text-lg font-bold text-green-800">
                  🎉 Your priority date is CURRENT!
                </p>
                <p className="mt-2 text-sm text-green-700">
                  {category} cutoff for {COUNTRY_LABELS[country]} is{" "}
                  <strong>{formatBulletinDate(result.cutoffStr)}</strong> and
                  your date (
                  {result.pd.toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                  ) is on or before it. A visa number is available for you —
                  talk to your immigration attorney about filing I-485
                  (adjustment of status) or consular processing now.
                </p>
              </div>
            )}
            {result.status === "unavailable" && (
              <div className="rounded-xl border border-amber-200 bg-amber-50 p-5">
                <p className="text-lg font-bold text-amber-800">
                  ⏸️ Currently Unavailable
                </p>
                <p className="mt-2 text-sm text-amber-700">
                  {category} for {COUNTRY_LABELS[country]} is marked
                  “Unavailable” in the {BULLETIN.month} bulletin — the annual
                  limit was reached. New visa numbers open with the next
                  fiscal year (October). Check back after the next bulletin.
                </p>
              </div>
            )}
            {result.status === "waiting" && (
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-lg font-bold text-slate-900">
                  ⏳ Not yet current
                </p>
                <p className="mt-2 text-sm text-slate-700">
                  The {category} cutoff for {COUNTRY_LABELS[country]} is{" "}
                  <strong>{formatBulletinDate(result.cutoffStr)}</strong>.
                  Your priority date is{" "}
                  <strong className="text-indigo-700">
                    {formatDuration(result.gapMonths)} behind
                  </strong>{" "}
                  the cutoff.
                </p>
                {/* Progress bar */}
                <div className="mt-4">
                  <div className="flex justify-between text-xs font-medium text-slate-500">
                    <span>{formatBulletinDate(result.cutoffStr)}</span>
                    <span>Your date</span>
                  </div>
                  <div className="mt-1 h-2.5 overflow-hidden rounded-full bg-slate-200">
                    <div
                      className="h-full rounded-full bg-indigo-600"
                      style={{ width: "100%" }}
                    />
                  </div>
                  <p className="mt-1 text-xs text-slate-500">
                    The cutoff must advance past your priority date before a
                    visa number becomes available.
                  </p>
                </div>
                {result.filingDate && result.pd <= result.filingDate && (
                  <p className="mt-3 rounded-lg bg-blue-50 p-3 text-sm text-blue-800">
                    💡 Good news: your date is already past the{" "}
                    <strong>Dates for Filing</strong> cutoff (
                    {formatBulletinDate(result.filingStr)}). Depending on
                    USCIS guidance, you may be able to file I-485 early — ask
                    your attorney.
                  </p>
                )}
                {result.estimateMonths !== null &&
                  result.estimateMonths !== undefined && (
                    <div className="mt-3 rounded-lg border border-indigo-200 bg-indigo-50 p-4">
                      <p className="text-sm font-bold text-indigo-900">
                        Rough wait estimate: {formatDuration(result.estimateMonths)}
                      </p>
                      <p className="mt-1 text-xs text-indigo-700">
                        Based on the recent pace (~{result.pace} days of
                        cutoff movement per bulletin month). This is a rough
                        projection, not a promise — the bulletin can stall,
                        retrogress, or jump without warning. Not legal advice.
                      </p>
                    </div>
                  )}
                {(result.estimateMonths === null ||
                  result.estimateMonths === undefined) && (
                  <p className="mt-3 text-xs text-slate-500">
                    No wait estimate available for this combination yet — we
                    only track movement pace for EB-2 India, China, and ROW so
                    far.
                  </p>
                )}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Current bulletin tables */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900">
          Current Visa Bulletin — {BULLETIN.month}
        </h2>
        <p className="mt-1 text-sm text-slate-600">
          Final Action Dates (employment-based), exactly as published by the
          U.S. Department of State.{" "}
          <a
            href={BULLETIN.url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-indigo-600 hover:underline"
          >
            View official bulletin →
          </a>
        </p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[560px] text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200 text-xs uppercase tracking-wide text-slate-500">
                <th className="py-2 pr-4">Category</th>
                <th className="py-2 pr-4">India</th>
                <th className="py-2 pr-4">China</th>
                <th className="py-2 pr-4">Rest of World</th>
                <th className="py-2 pr-4">Mexico</th>
                <th className="py-2">Philippines</th>
              </tr>
            </thead>
            <tbody>
              {CATEGORIES.map((cat) => (
                <tr key={cat} className="border-b border-slate-100">
                  <td className="py-2.5 pr-4 font-bold text-slate-900">{cat}</td>
                  {(["India", "China", "ROW", "Mexico", "Philippines"] as Country[]).map(
                    (c) => {
                      const v = FINAL_ACTION[cat][c];
                      return (
                        <td
                          key={c}
                          className={`py-2.5 pr-4 font-mono text-[13px] ${
                            v === "C"
                              ? "font-bold text-green-700"
                              : "text-slate-700"
                          }`}
                        >
                          {formatBulletinDate(v)}
                        </td>
                      );
                    }
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-slate-500">
          “Current” means no backlog — a visa number is immediately available.
          Source: U.S. Department of State, {BULLETIN.month} Visa Bulletin (
          {BULLETIN.number}).
        </p>
      </div>

      {/* EB-2 movement chart */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900">
          EB-2 cutoff movement — last 7 bulletins
        </h2>
        <p className="mt-1 text-sm text-slate-600">
          Final Action Dates for EB-2, Apr–Oct 2026. Note India&apos;s
          “Unavailable” stretch (Jul–Sep 2026) and the October jump.
        </p>
        <MovementChart />
        <p className="mt-3 text-xs text-slate-500">
          Gaps = “Unavailable” months (no visa numbers). Data: U.S. Department
          of State monthly Visa Bulletins.
        </p>
      </div>
    </div>
  );
}

function MovementChart() {
  const W = 640;
  const H = 300;
  const PAD = { l: 64, r: 16, t: 16, b: 36 };
  const iw = W - PAD.l - PAD.r;
  const ih = H - PAD.t - PAD.b;

  // Numeric scale: days since 2012-01-01
  const base = new Date(2012, 0, 1).getTime();
  const day = 86400000;
  const toNum = (s: string): number | null => {
    if (s === "C") return 4200; // plot "Current" at top
    const d = parseBulletinDate(s);
    return d ? (d.getTime() - base) / day : null;
  };

  const series = [
    { key: "India" as const, color: "#4F46E5" },
    { key: "China" as const, color: "#0EA5E9" },
    { key: "ROW" as const, color: "#22C55E" },
  ];

  const allVals: number[] = [];
  EB2_HISTORY.forEach((r) =>
    series.forEach(({ key }) => {
      const v = toNum(r[key]);
      if (v !== null) allVals.push(v);
    })
  );
  const min = Math.min(...allVals) - 60;
  const max = Math.max(...allVals) + 60;
  const x = (i: number) => PAD.l + (i / (EB2_HISTORY.length - 1)) * iw;
  const y = (v: number) => PAD.t + ih - ((v - min) / (max - min)) * ih;

  const yTicks = [2013, 2015, 2017, 2019, 2021, 2023, 2025, 2026];
  const tickNum = (yr: number) => (new Date(yr, 0, 1).getTime() - base) / day;

  return (
    <div className="mt-4 overflow-x-auto">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="min-w-[560px]"
        role="img"
        aria-label="EB-2 final action date movement chart, April to October 2026"
      >
        {yTicks.map((yr) => (
          <g key={yr}>
            <line
              x1={PAD.l}
              x2={W - PAD.r}
              y1={y(tickNum(yr))}
              y2={y(tickNum(yr))}
              stroke="#E2E8F0"
              strokeWidth={1}
            />
            <text
              x={PAD.l - 8}
              y={y(tickNum(yr)) + 4}
              textAnchor="end"
              fontSize={11}
              fill="#64748B"
            >
              {yr}
            </text>
          </g>
        ))}
        {EB2_HISTORY.map((r, i) => (
          <text
            key={r.month}
            x={x(i)}
            y={H - 10}
            textAnchor="middle"
            fontSize={11}
            fill="#64748B"
          >
            {r.month}
          </text>
        ))}
        {series.map(({ key, color }) => {
          // split into segments around gaps (U months)
          const pts = EB2_HISTORY.map((r, i) => ({ i, v: toNum(r[key]) }));
          const segments: { i: number; v: number }[][] = [];
          let cur: { i: number; v: number }[] = [];
          pts.forEach((p) => {
            if (p.v === null) {
              if (cur.length > 1) segments.push(cur);
              cur = [];
            } else {
              cur.push({ i: p.i, v: p.v });
            }
          });
          if (cur.length > 1) segments.push(cur);
          return (
            <g key={key}>
              {segments.map((seg, si) => (
                <polyline
                  key={si}
                  fill="none"
                  stroke={color}
                  strokeWidth={2.5}
                  points={seg.map((p) => `${x(p.i)},${y(p.v)}`).join(" ")}
                />
              ))}
              {pts.map(
                (p) =>
                  p.v !== null && (
                    <circle
                      key={p.i}
                      cx={x(p.i)}
                      cy={y(p.v)}
                      r={4}
                      fill={color}
                      stroke="#fff"
                      strokeWidth={1.5}
                    />
                  )
              )}
            </g>
          );
        })}
        {/* Legend */}
        {series.map(({ key, color }, i) => (
          <g key={key} transform={`translate(${PAD.l + i * 130}, 4)`}>
            <rect width={12} height={12} rx={6} fill={color} />
            <text x={18} y={11} fontSize={12} fill="#334155" fontWeight={600}>
              EB-2 {key === "ROW" ? "Rest of World" : key}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
