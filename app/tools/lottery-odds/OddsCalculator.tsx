"use client";

import { useState, useMemo } from "react";
import { formatPct, formatUSD } from "@/lib/format";

const LEVELS = [
  {
    level: 1,
    name: "Level I",
    label: "Entry level",
    entries: 1,
    odds: 0.15,
    minSalary: 0,
    maxSalary: 109999,
    color: "bg-red-500",
    textColor: "text-red-700",
    bgLight: "bg-red-50",
    border: "border-red-200",
    bar: "bg-red-500",
  },
  {
    level: 2,
    name: "Level II",
    label: "Qualified",
    entries: 2,
    odds: 0.31,
    minSalary: 110000,
    maxSalary: 144999,
    color: "bg-orange-500",
    textColor: "text-orange-700",
    bgLight: "bg-orange-50",
    border: "border-orange-200",
    bar: "bg-orange-500",
  },
  {
    level: 3,
    name: "Level III",
    label: "Experienced",
    entries: 3,
    odds: 0.46,
    minSalary: 145000,
    maxSalary: 184999,
    color: "bg-blue-500",
    textColor: "text-blue-700",
    bgLight: "bg-blue-50",
    border: "border-blue-200",
    bar: "bg-blue-500",
  },
  {
    level: 4,
    name: "Level IV",
    label: "Fully competent",
    entries: 4,
    odds: 0.61,
    minSalary: 185000,
    maxSalary: 999999,
    color: "bg-emerald-500",
    textColor: "text-emerald-700",
    bgLight: "bg-emerald-50",
    border: "border-emerald-200",
    bar: "bg-emerald-500",
  },
];

function levelForSalary(salary: number) {
  return LEVELS.find((l) => salary >= l.minSalary && salary <= l.maxSalary) ?? LEVELS[0];
}

export default function OddsCalculator() {
  const [salary, setSalary] = useState(130000);
  const [masters, setMasters] = useState(false);
  const [manualLevel, setManualLevel] = useState<number | null>(null);

  const estimated = useMemo(() => levelForSalary(salary), [salary]);
  const current = manualLevel ? LEVELS[manualLevel - 1] : estimated;

  const baseOdds = current.odds;
  const combinedOdds = masters
    ? 1 - (1 - baseOdds) * (1 - baseOdds * 0.7)
    : baseOdds;

  // Next level boost
  const nextLevel = current.level < 4 ? LEVELS[current.level] : null;
  const salaryToNext = nextLevel ? nextLevel.minSalary - salary : 0;

  return (
    <div>
      {/* Salary slider */}
      <div className="rounded-lg border border-slate-200 bg-white p-6">
        <div className="flex items-center justify-between">
          <label className="text-sm font-semibold text-slate-900">
            Your offered annual salary
          </label>
          <span className="rounded-lg bg-slate-100 px-3 py-1 text-lg font-bold text-slate-900">
            {formatUSD(salary)}
          </span>
        </div>
        <input
          type="range"
          min={60000}
          max={300000}
          step={5000}
          value={salary}
          onChange={(e) => {
            setSalary(Number(e.target.value));
            setManualLevel(null);
          }}
          className="mt-4 w-full"
          aria-label="Annual salary"
        />
        <div className="mt-1 flex justify-between text-xs text-slate-500">
          <span>$60K</span>
          <span>$300K</span>
        </div>
        <p className="mt-3 text-sm text-slate-600">
          Estimated wage level:{" "}
          <strong className={estimated.textColor}>
            {estimated.name} ({estimated.label})
          </strong>
        </p>
        <p className="mt-1 text-xs text-slate-500">
          Rough estimate based on national H-1B salary distribution. Your actual
          level depends on your SOC occupation code and worksite area.
        </p>
      </div>

      {/* Manual level override */}
      <div className="mt-6">
        <p className="text-sm font-semibold text-slate-900">
          Or pick your wage level directly:
        </p>
        <div className="mt-2 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {LEVELS.map((l) => {
            const active = (manualLevel ?? estimated.level) === l.level;
            return (
              <button
                key={l.level}
                onClick={() => setManualLevel(l.level)}
                className={`rounded-lg border-2 p-3 text-left transition ${
                  active
                    ? `${l.border} ${l.bgLight} shadow-md`
                    : "border-slate-200 bg-white hover:border-slate-300"
                }`}
              >
                <p className="font-bold text-slate-900">{l.name}</p>
                <p className="text-xs text-slate-500">{l.label}</p>
                <p className={`mt-1 text-sm font-semibold ${l.textColor}`}>
                  {l.entries} {l.entries === 1 ? "entry" : "entries"} ·{" "}
                  {formatPct(l.odds, 0)}
                </p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Master's toggle */}
      <label className="mt-6 flex cursor-pointer items-center gap-3 rounded-lg border border-slate-200 bg-white p-4">
        <input
          type="checkbox"
          checked={masters}
          onChange={(e) => setMasters(e.target.checked)}
          className="h-5 w-5 rounded text-blue-700"
        />
        <span className="text-sm">
          <span className="font-semibold text-slate-900">
            I hold a U.S. master&apos;s degree or higher
          </span>
          <span className="block text-slate-500">
            Eligible for the 20,000 advanced-degree exemption draw first
          </span>
        </span>
      </label>

      {/* Result gauge */}
      <div className={`mt-6 rounded-lg border-2 ${current.border} ${current.bgLight} p-6`}>
        <div className="flex items-end justify-between">
          <div>
            <p className="text-sm font-medium text-slate-600">
              Your projected H-1B lottery odds
            </p>
            <p className={`mt-1 text-6xl font-extrabold ${current.textColor}`}>
              {formatPct(combinedOdds, 0)}
            </p>
          </div>
          <div className="text-right text-sm text-slate-600">
            <p>
              <strong>{current.name}</strong> ({current.label})
            </p>
            <p>
              {current.entries} {current.entries === 1 ? "lottery entry" : "lottery entries"}
            </p>
            {masters && <p className="text-xs">+ master&apos;s cap 2nd draw</p>}
          </div>
        </div>
        {/* Gauge bar */}
        <div className="mt-4 h-4 overflow-hidden rounded-full bg-white/70">
          <div
            className={`h-full rounded-full ${current.bar} transition-all duration-500`}
            style={{ width: `${combinedOdds * 100}%` }}
          />
        </div>
      </div>

      {/* Boost calculator */}
      {nextLevel && salaryToNext > 0 && (
        <div className="mt-6 rounded-lg border border-amber-200 bg-amber-50 p-5">
          <p className="font-semibold text-amber-900">💡 Boost your odds</p>
          <p className="mt-1 text-sm text-amber-800">
            Negotiate <strong>{formatUSD(salaryToNext)} more</strong> (to{" "}
            {formatUSD(nextLevel.minSalary)}) and you&apos;d move to{" "}
            <strong>{nextLevel.name}</strong> — jumping from{" "}
            <strong>{formatPct(baseOdds, 0)}</strong> to{" "}
            <strong>{formatPct(nextLevel.odds, 0)}</strong> odds.
          </p>
        </div>
      )}

      {/* Comparison */}
      <div className="mt-8">
        <h3 className="font-semibold text-slate-900">Compare all levels</h3>
        <div className="mt-4 space-y-3">
          {LEVELS.map((l) => {
            const active = (manualLevel ?? estimated.level) === l.level;
            return (
              <button
                key={l.level}
                onClick={() => setManualLevel(l.level)}
                className="block w-full text-left"
              >
                <div className="flex items-center justify-between text-sm">
                  <span
                    className={`font-medium ${active ? "text-slate-900" : "text-slate-600"}`}
                  >
                    {l.name} — {l.entries} {l.entries === 1 ? "entry" : "entries"}
                    {active && " ← you"}
                  </span>
                  <span className={`font-bold ${l.textColor}`}>
                    {formatPct(l.odds, 0)}
                  </span>
                </div>
                <div className="mt-1 h-3 overflow-hidden rounded-full bg-slate-100">
                  <div
                    className={`h-full rounded-full ${l.bar} transition-all`}
                    style={{ width: `${l.odds * 100}%` }}
                  />
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <p className="mt-8 text-xs text-slate-500">
        Salary-to-level mapping is a rough national estimate. Your actual OEWS
        wage level is determined by your SOC occupation code and worksite
        geographic area — consult your employer or attorney. Odds projections
        from DHS (Dec 2025 final rule). Educational estimate only, not legal
        advice.
      </p>
    </div>
  );
}
