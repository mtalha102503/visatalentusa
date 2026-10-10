"use client";

import { useState } from "react";
import { formatPct } from "@/lib/format";

const LEVELS = [
  {
    level: 1,
    name: "Level I",
    label: "Entry level",
    entries: 1,
    odds: 0.15,
    color: "bg-red-500",
    textColor: "text-red-700",
    bgLight: "bg-red-50",
    border: "border-red-200",
  },
  {
    level: 2,
    name: "Level II",
    label: "Qualified",
    entries: 2,
    odds: 0.31,
    color: "bg-orange-500",
    textColor: "text-orange-700",
    bgLight: "bg-orange-50",
    border: "border-orange-200",
  },
  {
    level: 3,
    name: "Level III",
    label: "Experienced",
    entries: 3,
    odds: 0.46,
    color: "bg-blue-500",
    textColor: "text-blue-700",
    bgLight: "bg-blue-50",
    border: "border-blue-200",
  },
  {
    level: 4,
    name: "Level IV",
    label: "Fully competent",
    entries: 4,
    odds: 0.61,
    color: "bg-emerald-500",
    textColor: "text-emerald-700",
    bgLight: "bg-emerald-50",
    border: "border-emerald-200",
  },
];

export default function OddsCalculator() {
  const [selected, setSelected] = useState(2);
  const [masters, setMasters] = useState(false);

  const current = LEVELS[selected - 1];

  // Master's cap gives a second draw; rough combined odds estimate
  const combinedOdds = masters
    ? 1 - (1 - current.odds) * (1 - current.odds * 0.7)
    : current.odds;

  return (
    <div>
      {/* Level selector */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {LEVELS.map((l) => (
          <button
            key={l.level}
            onClick={() => setSelected(l.level)}
            className={`rounded-lg border-2 p-4 text-left transition ${
              selected === l.level
                ? `${l.border} ${l.bgLight} shadow-md`
                : "border-slate-200 bg-white hover:border-slate-300"
            }`}
          >
            <p className="font-bold text-slate-900">{l.name}</p>
            <p className="text-xs text-slate-500">{l.label}</p>
            <p className={`mt-2 text-sm font-semibold ${l.textColor}`}>
              {l.entries} {l.entries === 1 ? "entry" : "entries"}
            </p>
          </button>
        ))}
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

      {/* Result */}
      <div className={`mt-6 rounded-lg border-2 ${current.border} ${current.bgLight} p-6`}>
        <p className="text-sm font-medium text-slate-600">
          Your projected H-1B lottery odds
        </p>
        <p className={`mt-1 text-5xl font-extrabold ${current.textColor}`}>
          {formatPct(masters ? combinedOdds : current.odds, 0)}
        </p>
        <p className="mt-2 text-sm text-slate-600">
          {current.name} ({current.label}) gets{" "}
          <strong>
            {current.entries} {current.entries === 1 ? "lottery entry" : "lottery entries"}
          </strong>
          {masters && " plus a second draw in the regular cap"}.
        </p>
      </div>

      {/* Comparison bars */}
      <div className="mt-8">
        <h3 className="font-semibold text-slate-900">Compare all levels</h3>
        <div className="mt-4 space-y-3">
          {LEVELS.map((l) => (
            <button
              key={l.level}
              onClick={() => setSelected(l.level)}
              className="block w-full text-left"
            >
              <div className="flex items-center justify-between text-sm">
                <span
                  className={`font-medium ${selected === l.level ? "text-slate-900" : "text-slate-600"}`}
                >
                  {l.name} — {l.entries} {l.entries === 1 ? "entry" : "entries"}
                </span>
                <span className={`font-bold ${l.textColor}`}>
                  {formatPct(l.odds, 0)}
                </span>
              </div>
              <div className="mt-1 h-3 overflow-hidden rounded-full bg-slate-100">
                <div
                  className={`h-full rounded-full ${l.color} transition-all`}
                  style={{ width: `${l.odds * 100}%` }}
                />
              </div>
            </button>
          ))}
        </div>
      </div>

      <p className="mt-8 text-xs text-slate-500">
        Projections based on DHS estimates published with the December 2025
        final rule. Actual selection rates vary by year and registration pool
        composition. This is an educational estimate, not legal advice.
      </p>
    </div>
  );
}
