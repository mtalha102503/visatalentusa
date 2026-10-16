"use client";

import { useState } from "react";

export default function CPTCalculator() {
  const [fullTimeMonths, setFullTimeMonths] = useState(6);
  const [partTimeMonths, setPartTimeMonths] = useState(0);
  const [degreeLevel, setDegreeLevel] = useState("masters");

  const OPT_LOST = fullTimeMonths >= 12;
  const monthsRemaining = Math.max(0, 12 - fullTimeMonths);
  const dangerZone = fullTimeMonths >= 9 && fullTimeMonths < 12;

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
      <h3 className="text-xl font-bold text-slate-900">
        🧮 OPT Eligibility Calculator
      </h3>
      <p className="mt-2 text-sm text-slate-600">
        Enter your CPT history to check whether your OPT eligibility is at risk.
        <strong> 12+ months of full-time CPT = OPT gone</strong> at that degree level.
      </p>

      <div className="mt-6 space-y-6">
        <div>
          <label className="text-sm font-semibold text-slate-700">
            Degree level
          </label>
          <div className="mt-2 flex gap-2">
            {[
              { id: "bachelors", label: "Bachelor's" },
              { id: "masters", label: "Master's" },
              { id: "phd", label: "PhD" },
            ].map((d) => (
              <button
                key={d.id}
                onClick={() => setDegreeLevel(d.id)}
                className={`rounded-lg px-4 py-2 text-sm font-semibold transition ${
                  degreeLevel === d.id
                    ? "bg-blue-700 text-white"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {d.label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label className="text-sm font-semibold text-slate-700">
              Full-time CPT months (&gt;20 hrs/week)
            </label>
            <span className="rounded-lg bg-slate-100 px-3 py-1 text-lg font-bold text-slate-900">
              {fullTimeMonths}
            </span>
          </div>
          <input
            type="range"
            min={0}
            max={24}
            value={fullTimeMonths}
            onChange={(e) => setFullTimeMonths(Number(e.target.value))}
            className="mt-3 w-full accent-blue-700"
          />
          <div className="mt-1 flex justify-between text-xs text-slate-400">
            <span>0</span>
            <span className="font-semibold text-red-500">12 = OPT lost</span>
            <span>24</span>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label className="text-sm font-semibold text-slate-700">
              Part-time CPT months (≤20 hrs/week)
            </label>
            <span className="rounded-lg bg-slate-100 px-3 py-1 text-lg font-bold text-slate-900">
              {partTimeMonths}
            </span>
          </div>
          <input
            type="range"
            min={0}
            max={36}
            value={partTimeMonths}
            onChange={(e) => setPartTimeMonths(Number(e.target.value))}
            className="mt-3 w-full accent-green-600"
          />
          <p className="mt-1 text-xs text-slate-500">
            ✅ Part-time CPT never affects OPT — no matter how many months.
          </p>
        </div>
      </div>

      {/* Result */}
      <div
        className={`mt-8 rounded-xl border-2 p-6 ${
          OPT_LOST
            ? "border-red-300 bg-red-50"
            : dangerZone
            ? "border-amber-300 bg-amber-50"
            : "border-green-300 bg-green-50"
        }`}
      >
        {OPT_LOST ? (
          <>
            <p className="text-lg font-bold text-red-800">
              🔴 OPT Eligibility LOST
            </p>
            <p className="mt-2 text-sm text-red-700">
              {fullTimeMonths} months of full-time CPT at the{" "}
              {degreeLevel === "bachelors" ? "bachelor's" : degreeLevel === "masters" ? "master's" : "PhD"}{" "}
              level means you are <strong>no longer eligible for OPT</strong> at
              this degree level, per 8 CFR 214.2(f)(10). Consider completing a
              higher degree level to regain OPT eligibility.
            </p>
          </>
        ) : dangerZone ? (
          <>
            <p className="text-lg font-bold text-amber-800">
              🟡 Danger Zone — {monthsRemaining} months left
            </p>
            <p className="mt-2 text-sm text-amber-700">
              You have used {fullTimeMonths} of 12 full-time CPT months. Only{" "}
              <strong>{monthsRemaining} more months</strong> before OPT is lost.
              Switch to part-time CPT or pause to protect your OPT.
            </p>
          </>
        ) : (
          <>
            <p className="text-lg font-bold text-green-800">
              🟢 OPT Eligibility Safe
            </p>
            <p className="mt-2 text-sm text-green-700">
              {fullTimeMonths} months of full-time CPT used — you have{" "}
              <strong>{monthsRemaining} months</strong> of buffer before hitting
              the 12-month limit. Your{" "}
              {partTimeMonths > 0
                ? `${partTimeMonths} months of part-time CPT do not count.`
                : "OPT eligibility is intact."}
            </p>
          </>
        )}
      </div>

      <p className="mt-4 text-xs text-slate-400">
        Educational estimate only — confirm your exact CPT history with your
        school&apos;s DSO. Full-time CPT at a previous school at the same
        program level counts toward the 12-month total.
      </p>
    </div>
  );
}
