"use client";

import { useState } from "react";

const CHECKLIST = [
  {
    id: "sevp",
    title: "SEVP-Certified School",
    desc: "Verify on the DHS Study in the States school search. If not SEVP-certified, it cannot legally enroll F-1 students.",
    weight: 3,
  },
  {
    id: "accreditation",
    title: "Regional Accreditation",
    desc: "Check the U.S. Department of Education database. National-only or unaccredited = major red flag.",
    weight: 3,
  },
  {
    id: "required",
    title: "CPT Required (Not Optional) in Curriculum",
    desc: "Per August 2026 SEVP guidance, CPT must be required for ALL students in the program — not just available as an option.",
    weight: 3,
  },
  {
    id: "dso",
    title: "Dedicated DSO / International Office",
    desc: "A real international student office with named DSOs. Schools without one often have compliance problems.",
    weight: 2,
  },
  {
    id: "physical",
    title: "Physical Campus & In-Person Classes",
    desc: "100% online programs with Day 1 CPT are a major SEVP red flag. Legitimate programs have real campuses and in-person requirements.",
    weight: 2,
  },
  {
    id: "history",
    title: "No SEVP Enforcement History",
    desc: "Search news for the school name + SEVP/ICE. Schools previously raided or warned (e.g., 'pay-to-stay' operations) are dangerous.",
    weight: 2,
  },
  {
    id: "transparency",
    title: "Transparent About OPT Impact",
    desc: "The school openly explains the 12-month full-time CPT rule. Schools that hide or downplay OPT forfeiture are a red flag.",
    weight: 1,
  },
  {
    id: "job",
    title: "CPT Job Matches Your Major",
    desc: "The training must directly relate to your major area of study. Unrelated 'any job' CPT authorizations violate regulations.",
    weight: 1,
  },
  {
    id: "agreement",
    title: "Signed Cooperative Agreement",
    desc: "There must be a signed agreement between the school and your employer. Verbal or informal arrangements don't count.",
    weight: 1,
  },
  {
    id: "i20",
    title: "CPT on Form I-20 Before Work Starts",
    desc: "Your DSO must authorize CPT in SEVIS and print it on your I-20 BEFORE your start date. Never work before authorization appears.",
    weight: 2,
  },
];

export default function SchoolSafetyChecklist() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  const toggle = (id: string) =>
    setChecked((prev) => ({ ...prev, [id]: !prev[id] }));

  const totalWeight = CHECKLIST.reduce((s, c) => s + c.weight, 0);
  const score = CHECKLIST.filter((c) => checked[c.id]).reduce(
    (s, c) => s + c.weight,
    0
  );
  const pct = Math.round((score / totalWeight) * 100);
  const checkedCount = Object.values(checked).filter(Boolean).length;

  const getRating = () => {
    if (pct >= 85)
      return {
        color: "green",
        label: "🟢 Looks Solid",
        desc: "This school passes most safety checks. Still verify independently and consult an immigration attorney before enrolling.",
      };
    if (pct >= 60)
      return {
        color: "amber",
        label: "🟡 Proceed With Caution",
        desc: "Several important checks are missing. Investigate the unchecked items — any single red flag in the top 3 (SEVP, accreditation, required CPT) should be a dealbreaker.",
      };
    return {
      color: "red",
      label: "🔴 High Risk — Walk Away",
      desc: "Too many safety checks failing. This school shows patterns associated with SEVP enforcement actions. Do not enroll — find a compliant alternative.",
    };
  };

  const rating = getRating();

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
      <h3 className="text-xl font-bold text-slate-900">
        ✅ School Safety Checklist
      </h3>
      <p className="mt-2 text-sm text-slate-600">
        Check each item you&apos;ve verified. Your safety score updates live.
      </p>

      {/* Score */}
      <div className="mt-4 flex items-center gap-4">
        <div className="relative h-20 w-20">
          <svg viewBox="0 0 36 36" className="h-20 w-20 -rotate-90">
            <circle
              cx="18" cy="18" r="15.9"
              fill="none" stroke="#e2e8f0" strokeWidth="3"
            />
            <circle
              cx="18" cy="18" r="15.9"
              fill="none"
              stroke={pct >= 85 ? "#16a34a" : pct >= 60 ? "#d97706" : "#dc2626"}
              strokeWidth="3"
              strokeDasharray={`${pct}, 100`}
              strokeLinecap="round"
            />
          </svg>
          <span className="absolute inset-0 flex items-center justify-center text-lg font-bold text-slate-900">
            {pct}%
          </span>
        </div>
        <div>
          <p className="font-bold text-slate-900">{rating.label}</p>
          <p className="text-xs text-slate-500">
            {checkedCount} of {CHECKLIST.length} checks verified
          </p>
        </div>
      </div>

      {/* Checklist */}
      <div className="mt-6 space-y-2">
        {CHECKLIST.map((item) => {
          const isChecked = !!checked[item.id];
          return (
            <button
              key={item.id}
              onClick={() => toggle(item.id)}
              className={`w-full rounded-lg border p-4 text-left transition ${
                isChecked
                  ? "border-green-300 bg-green-50"
                  : "border-slate-200 bg-white hover:border-slate-300"
              }`}
            >
              <div className="flex items-start gap-3">
                <span
                  className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border-2 text-xs font-bold ${
                    isChecked
                      ? "border-green-600 bg-green-600 text-white"
                      : "border-slate-300 text-transparent"
                  }`}
                >
                  ✓
                </span>
                <div>
                  <p className={`text-sm font-semibold ${isChecked ? "text-green-900" : "text-slate-900"}`}>
                    {item.title}
                    {item.weight >= 3 && (
                      <span className="ml-2 rounded bg-red-100 px-1.5 py-0.5 text-xs font-bold text-red-700">
                        CRITICAL
                      </span>
                    )}
                  </p>
                  <p className="mt-1 text-xs text-slate-500">{item.desc}</p>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {checkedCount > 0 && (
        <div
          className={`mt-6 rounded-xl border-2 p-5 ${
            rating.color === "green"
              ? "border-green-300 bg-green-50"
              : rating.color === "amber"
              ? "border-amber-300 bg-amber-50"
              : "border-red-300 bg-red-50"
          }`}
        >
          <p
            className={`font-bold ${
              rating.color === "green"
                ? "text-green-800"
                : rating.color === "amber"
                ? "text-amber-800"
                : "text-red-800"
            }`}
          >
            {rating.label} — {pct}%
          </p>
          <p
            className={`mt-1 text-sm ${
              rating.color === "green"
                ? "text-green-700"
                : rating.color === "amber"
                ? "text-amber-700"
                : "text-red-700"
            }`}
          >
            {rating.desc}
          </p>
        </div>
      )}

      <div className="mt-4 flex gap-2">
        <button
          onClick={() => setChecked({})}
          className="rounded-lg bg-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-300"
        >
          ↺ Reset
        </button>
      </div>
    </div>
  );
}
