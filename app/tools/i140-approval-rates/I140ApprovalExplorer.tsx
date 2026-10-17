"use client";

import { useState } from "react";

// Real USCIS I-140 quarterly data (FY2026 Q1-Q3)
// Source: USCIS Form I-140 by Fiscal Year, Quarter and Case Status
// Analyzed by VisaTalentUSA from official quarterly XLSX publications
const I140_DATA = [
  // Q1 FY2026
  { fy: 2026, q: 1, category: "EB-1A", label: "EB-1A (Extraordinary Ability)", received: 7814, approved: 2164, denied: 2394, pending: 24785, rate: 47.5 },
  { fy: 2026, q: 1, category: "EB-1B", label: "EB-1B (Outstanding Researcher)", received: 1509, approved: 1328, denied: 72, pending: 2233, rate: 94.9 },
  { fy: 2026, q: 1, category: "EB-1C", label: "EB-1C (Multinational Executive)", received: 3787, approved: 2429, denied: 75, pending: 12636, rate: 97.0 },
  { fy: 2026, q: 1, category: "EB-2-NIW", label: "EB-2 NIW (National Interest Waiver)", received: 13884, approved: 2365, denied: 3200, pending: 18816, rate: 42.5 },
  { fy: 2026, q: 1, category: "EB-2-PERM", label: "EB-2 (PERM-based)", received: 10954, approved: 15755, denied: 242, pending: 5172, rate: 98.5 },
  { fy: 2026, q: 1, category: "EB-3", label: "EB-3 (Skilled/Professional)", received: 21423, approved: 23578, denied: 420, pending: 11054, rate: 98.2 },
  // Q2 FY2026
  { fy: 2026, q: 2, category: "EB-1A", label: "EB-1A (Extraordinary Ability)", received: 6646, approved: 1720, denied: 2394, pending: 27126, rate: 41.8 },
  { fy: 2026, q: 2, category: "EB-1B", label: "EB-1B (Outstanding Researcher)", received: 1334, approved: 1543, denied: 103, pending: 2233, rate: 93.7 },
  { fy: 2026, q: 2, category: "EB-1C", label: "EB-1C (Multinational Executive)", received: 3648, approved: 3334, denied: 104, pending: 12636, rate: 97.0 },
  { fy: 2026, q: 2, category: "EB-2-NIW", label: "EB-2 NIW (National Interest Waiver)", received: 12648, approved: 3038, denied: 3282, pending: 16216, rate: 48.1 },
  { fy: 2026, q: 2, category: "EB-2-PERM", label: "EB-2 (PERM-based)", received: 10923, approved: 10926, denied: 693, pending: 5172, rate: 94.0 },
  { fy: 2026, q: 2, category: "EB-3", label: "EB-3 (Skilled/Professional)", received: 15944, approved: 26714, denied: 647, pending: 11790, rate: 97.6 },
  // Q3 FY2026
  { fy: 2026, q: 3, category: "EB-1A", label: "EB-1A (Extraordinary Ability)", received: 6036, approved: 1348, denied: 2832, pending: 28874, rate: 32.2 },
  { fy: 2026, q: 3, category: "EB-1B", label: "EB-1B (Outstanding Researcher)", received: 1328, approved: 1408, denied: 106, pending: 1687, rate: 93.0 },
  { fy: 2026, q: 3, category: "EB-1C", label: "EB-1C (Multinational Executive)", received: 3554, approved: 3658, denied: 96, pending: 12657, rate: 97.4 },
  { fy: 2026, q: 3, category: "EB-2-NIW", label: "EB-2 NIW (National Interest Waiver)", received: 13831, approved: 3835, denied: 3103, pending: 96297, rate: 55.3 },
  { fy: 2026, q: 3, category: "EB-2-PERM", label: "EB-2 (PERM-based)", received: 15476, approved: 12154, denied: 323, pending: 8644, rate: 97.4 },
  { fy: 2026, q: 3, category: "EB-3", label: "EB-3 (Skilled/Professional)", received: 22707, approved: 15572, denied: 609, pending: 55045, rate: 96.2 },
];

const CATEGORIES = [
  { id: "EB-1A", label: "EB-1A (Extraordinary Ability)" },
  { id: "EB-1B", label: "EB-1B (Outstanding Researcher)" },
  { id: "EB-1C", label: "EB-1C (Multinational Executive)" },
  { id: "EB-2-NIW", label: "EB-2 NIW (National Interest Waiver)" },
  { id: "EB-2-PERM", label: "EB-2 (PERM-based)" },
  { id: "EB-3", label: "EB-3 (Skilled/Professional)" },
];

function formatNumber(n: number): string {
  return n.toLocaleString("en-US");
}

function getRateColor(rate: number): string {
  if (rate >= 90) return "text-green-600";
  if (rate >= 70) return "text-blue-600";
  if (rate >= 50) return "text-amber-600";
  return "text-red-600";
}

function getBarColor(rate: number): string {
  if (rate >= 90) return "bg-green-500";
  if (rate >= 70) return "bg-blue-500";
  if (rate >= 50) return "bg-amber-500";
  return "bg-red-500";
}

export default function I140ApprovalExplorer() {
  const [selectedCategory, setSelectedCategory] = useState("EB-1A");
  const [compareCategory, setCompareCategory] = useState("EB-2-NIW");

  const categoryData = I140_DATA.filter((d) => d.category === selectedCategory);
  const latestData = categoryData[categoryData.length - 1];
  const earliestData = categoryData[0];
  const trendChange = latestData.rate - earliestData.rate;

  const compareData = I140_DATA.filter((d) => d.category === compareCategory);
  const compareLatest = compareData[compareData.length - 1];

  // All categories latest quarter for overview
  const latestQuarter = I140_DATA.filter((d) => d.fy === 2026 && d.q === 3);

  return (
    <div className="space-y-8">
      {/* Category selector */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900">Select EB Category</h2>
        <div className="mt-4 grid grid-cols-2 gap-2 md:grid-cols-3">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`rounded-lg px-4 py-3 text-sm font-semibold transition ${
                selectedCategory === cat.id
                  ? "bg-blue-700 text-white shadow-md"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main stats card */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900">
          {latestData.label} — FY2026 Q3
        </h2>

        <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="rounded-lg bg-slate-50 p-4">
            <p className="text-sm text-slate-500">Approval Rate</p>
            <p className={`text-3xl font-bold ${getRateColor(latestData.rate)}`}>
              {latestData.rate}%
            </p>
          </div>
          <div className="rounded-lg bg-slate-50 p-4">
            <p className="text-sm text-slate-500">Received</p>
            <p className="text-3xl font-bold text-slate-900">
              {formatNumber(latestData.received)}
            </p>
          </div>
          <div className="rounded-lg bg-slate-50 p-4">
            <p className="text-sm text-slate-500">Approved</p>
            <p className="text-3xl font-bold text-green-600">
              {formatNumber(latestData.approved)}
            </p>
          </div>
          <div className="rounded-lg bg-slate-50 p-4">
            <p className="text-sm text-slate-500">Denied</p>
            <p className="text-3xl font-bold text-red-600">
              {formatNumber(latestData.denied)}
            </p>
          </div>
        </div>

        {/* Trend */}
        <div className="mt-6">
          <h3 className="font-semibold text-slate-900">Quarterly Trend (FY2026)</h3>
          <div className="mt-3 space-y-2">
            {categoryData.map((d) => (
              <div key={`${d.fy}-Q${d.q}`} className="flex items-center gap-3">
                <span className="w-16 text-sm font-medium text-slate-600">
                  Q{d.q}
                </span>
                <div className="flex-1 rounded-full bg-slate-100 h-6 overflow-hidden">
                  <div
                    className={`h-full rounded-full ${getBarColor(d.rate)} transition-all`}
                    style={{ width: `${d.rate}%` }}
                  />
                </div>
                <span className={`w-16 text-sm font-bold text-right ${getRateColor(d.rate)}`}>
                  {d.rate}%
                </span>
              </div>
            ))}
          </div>
          <p className="mt-3 text-sm text-slate-600">
            {trendChange > 0 ? (
              <>📈 Trend: <strong className="text-green-600">+{trendChange.toFixed(1)}pp</strong> improving since Q1</>
            ) : trendChange < 0 ? (
              <>📉 Trend: <strong className="text-red-600">{trendChange.toFixed(1)}pp</strong> declining since Q1</>
            ) : (
              <>➡️ Trend: Stable since Q1</>
            )}
          </p>
        </div>

        <p className="mt-4 text-sm text-slate-500">
          Pending: {formatNumber(latestData.pending)} cases awaiting decision
        </p>
      </div>

      {/* Comparison */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900">Compare Categories</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {CATEGORIES.filter((c) => c.id !== selectedCategory).map((cat) => (
            <button
              key={cat.id}
              onClick={() => setCompareCategory(cat.id)}
              className={`rounded-lg px-3 py-2 text-sm font-semibold transition ${
                compareCategory === cat.id
                  ? "bg-purple-700 text-white"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-lg border-2 border-blue-200 bg-blue-50 p-5">
            <p className="font-semibold text-blue-900">{latestData.label}</p>
            <p className={`text-4xl font-bold mt-2 ${getRateColor(latestData.rate)}`}>
              {latestData.rate}%
            </p>
            <p className="text-sm text-blue-700 mt-1">
              {formatNumber(latestData.received)} received · {formatNumber(latestData.denied)} denied
            </p>
          </div>
          <div className="rounded-lg border-2 border-purple-200 bg-purple-50 p-5">
            <p className="font-semibold text-purple-900">{compareLatest.label}</p>
            <p className={`text-4xl font-bold mt-2 ${getRateColor(compareLatest.rate)}`}>
              {compareLatest.rate}%
            </p>
            <p className="text-sm text-purple-700 mt-1">
              {formatNumber(compareLatest.received)} received · {formatNumber(compareLatest.denied)} denied
            </p>
          </div>
        </div>

        <p className="mt-4 text-sm text-slate-600">
          Difference:{" "}
          <strong className={latestData.rate > compareLatest.rate ? "text-blue-600" : "text-purple-600"}>
            {Math.abs(latestData.rate - compareLatest.rate).toFixed(1)}pp
          </strong>{" "}
          {latestData.rate > compareLatest.rate ? (
            <>{latestData.label} has the higher approval rate</>
          ) : (
            <>{compareLatest.label} has the higher approval rate</>
          )}
        </p>
      </div>

      {/* All categories overview */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900">All Categories — FY2026 Q3 Overview</h2>
        <div className="mt-4 space-y-3">
          {latestQuarter
            .sort((a, b) => b.rate - a.rate)
            .map((d) => (
              <div key={d.category} className="flex items-center gap-3">
                <span className="w-40 text-sm font-medium text-slate-700 truncate">
                  {d.label}
                </span>
                <div className="flex-1 rounded-full bg-slate-100 h-5 overflow-hidden">
                  <div
                    className={`h-full rounded-full ${getBarColor(d.rate)}`}
                    style={{ width: `${d.rate}%` }}
                  />
                </div>
                <span className={`w-16 text-sm font-bold text-right ${getRateColor(d.rate)}`}>
                  {d.rate}%
                </span>
              </div>
            ))}
        </div>
        <p className="mt-4 text-xs text-slate-400">
          Source: USCIS Form I-140 quarterly data, FY2026 Q3. Approval rate = approved ÷ (approved + denied).
        </p>
      </div>
    </div>
  );
}
