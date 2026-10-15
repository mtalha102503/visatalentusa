"use client";

import { useState } from "react";

// Real USCIS data: H-1B Electronic Registration Process historical data
// Source: uscis.gov — H-1B Electronic Registration Process page
const LOTTERY_DATA = [
  { fy: "2021", total: 274237, eligible: 269424, selected: 124415, rate: 46.2 },
  { fy: "2022", total: 308613, eligible: 301447, selected: 131924, rate: 43.8 },
  { fy: "2023", total: 483927, eligible: 474421, selected: 127600, rate: 26.9 },
  { fy: "2024", total: 780884, eligible: 758994, selected: 188400, rate: 24.8 },
  { fy: "2025", total: 479953, eligible: 470342, selected: 135137, rate: 28.7 },
  { fy: "2026", total: 358737, eligible: 343981, selected: 120141, rate: 34.9 },
];

const TIMELINE_EVENTS = [
  {
    date: "March 4, 2026",
    title: "Registration Opens",
    description:
      "Employers submit electronic registrations for FY2027 cap season via the USCIS online portal. $215 registration fee per beneficiary.",
  },
  {
    date: "March 19, 2026",
    title: "Registration Closes",
    description:
      "Deadline for all FY2027 H-1B registrations. No late submissions are accepted under any circumstances.",
  },
  {
    date: "By March 31, 2026",
    title: "Selection Notifications",
    description:
      "USCIS notifies selected registrants through employer or attorney accounts. You cannot check your status independently — your employer must inform you.",
  },
  {
    date: "April 1 – June 30, 2026",
    title: "Petition Filing Window",
    description:
      "Employers of selected beneficiaries file full H-1B petitions (Form I-129). If USCIS does not receive enough petitions to meet the cap, a second lottery round may occur.",
  },
  {
    date: "October 1, 2026",
    title: "Employment Start Date",
    description:
      "Earliest date FY2027 H-1B workers can begin employment. This is the start of the federal fiscal year.",
  },
];

function formatNumber(n: number): string {
  return n.toLocaleString("en-US");
}

type TabId = "dashboard" | "timeline" | "selected" | "not-selected";

export default function LotteryResultsHub() {
  const [selectedYear, setSelectedYear] = useState("2026");
  const [activeTab, setActiveTab] = useState<TabId>("dashboard");

  const yearData = LOTTERY_DATA.find((d) => d.fy === selectedYear) ?? LOTTERY_DATA[5];
  const maxTotal = Math.max(...LOTTERY_DATA.map((d) => d.total));

  const tabs: { id: TabId; label: string }[] = [
    { id: "dashboard", label: "📊 Results Dashboard" },
    { id: "timeline", label: "📅 FY2027 Timeline" },
    { id: "selected", label: "✅ If Selected" },
    { id: "not-selected", label: "❌ If Not Selected" },
  ];

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-2 border-b border-slate-200 pb-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`rounded-lg px-4 py-2.5 text-sm font-semibold transition ${
              activeTab === tab.id
                ? "bg-blue-700 text-white shadow-md"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === "dashboard" && (
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-semibold text-slate-900">Select Fiscal Year</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {LOTTERY_DATA.map((d) => (
                <button
                  key={d.fy}
                  onClick={() => setSelectedYear(d.fy)}
                  className={`rounded-lg px-5 py-2.5 font-semibold transition ${
                    selectedYear === d.fy
                      ? "bg-blue-700 text-white shadow-md"
                      : "bg-white border border-slate-300 text-slate-700 hover:border-blue-500"
                  }`}
                >
                  FY{d.fy}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-xs font-medium uppercase tracking-wide text-slate-500">Total Registrations</p>
              <p className="mt-2 text-2xl font-bold text-slate-900 md:text-3xl">{formatNumber(yearData.total)}</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-xs font-medium uppercase tracking-wide text-slate-500">Eligible Registrations</p>
              <p className="mt-2 text-2xl font-bold text-slate-900 md:text-3xl">{formatNumber(yearData.eligible)}</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-xs font-medium uppercase tracking-wide text-slate-500">Selected</p>
              <p className="mt-2 text-2xl font-bold text-green-700 md:text-3xl">{formatNumber(yearData.selected)}</p>
            </div>
            <div className="rounded-xl border border-blue-200 bg-blue-50 p-5 shadow-sm">
              <p className="text-xs font-medium uppercase tracking-wide text-blue-600">Selection Rate</p>
              <p className="mt-2 text-2xl font-bold text-blue-800 md:text-3xl">{yearData.rate}%</p>
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">Registration Trends FY2021–FY2026</h3>
            <p className="mt-1 text-sm text-slate-500">Total registrations per fiscal year (official USCIS data)</p>
            <div className="mt-6 space-y-3">
              {LOTTERY_DATA.map((d) => (
                <div key={d.fy} className="flex items-center gap-3">
                  <span className={`w-16 text-sm font-semibold ${d.fy === selectedYear ? "text-blue-700" : "text-slate-600"}`}>
                    FY{d.fy}
                  </span>
                  <div className="flex-1">
                    <div
                      className={`h-8 rounded-md transition-all ${d.fy === selectedYear ? "bg-blue-600" : "bg-slate-200"}`}
                      style={{ width: `${(d.total / maxTotal) * 100}%`, minWidth: "40px" }}
                    />
                  </div>
                  <span className="w-24 text-right text-sm text-slate-600">{formatNumber(d.total)}</span>
                  <span className={`w-16 text-right text-sm font-semibold ${d.rate >= 30 ? "text-green-600" : d.rate >= 25 ? "text-amber-600" : "text-red-500"}`}>
                    {d.rate}%
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs text-slate-500">Right column shows selection rate for each year.</p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">Selection Rate Trend</h3>
            <p className="mt-1 text-sm text-slate-500">Your odds have been improving since anti-fraud reforms</p>
            <div className="mt-6 flex items-end justify-between gap-2 md:gap-4">
              {LOTTERY_DATA.map((d) => (
                <div key={d.fy} className="flex flex-1 flex-col items-center justify-end">
                  <span className={`mb-2 text-sm font-bold ${d.fy === selectedYear ? "text-blue-700" : "text-slate-600"}`}>
                    {d.rate}%
                  </span>
                  <div
                    className={`w-full rounded-t-lg transition-all ${
                      d.fy === selectedYear ? "bg-blue-600" : d.rate >= 30 ? "bg-green-500" : d.rate >= 25 ? "bg-amber-400" : "bg-red-400"
                    }`}
                    style={{ height: `${(d.rate / 50) * 160}px`, minHeight: "20px" }}
                  />
                  <span className="mt-2 text-xs font-medium text-slate-500">FY{d.fy}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-amber-200 bg-amber-50 p-6">
            <h3 className="text-lg font-semibold text-amber-900">🔍 Key Insights from the Data</h3>
            <ul className="mt-4 space-y-3 text-sm text-amber-800">
              <li className="flex gap-2">
                <span className="font-bold">•</span>
                <span><strong>FY2024 was the peak fraud year:</strong> 780,884 registrations — over 408,000 were duplicate filings gaming the system.</span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold">•</span>
                <span><strong>Beneficiary-centric selection works:</strong> USCIS now selects unique people, not registrations. Duplicates dropped from 408,891 (FY2024) to just 7,828 (FY2026).</span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold">•</span>
                <span><strong>Your odds are improving:</strong> Selection rate rose from 24.8% (FY2024) to 34.9% (FY2026) as fraud was eliminated.</span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold">•</span>
                <span><strong>FY2027 outlook:</strong> With the $100,000 fee and wage-weighted selection, registrations may drop further — potentially improving odds for legitimate filings.</span>
              </li>
            </ul>
            <p className="mt-4 text-xs text-amber-700">
              Data source: USCIS H-1B Electronic Registration Process page (official).
            </p>
          </div>
        </div>
      )}

      {activeTab === "timeline" && (
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold text-slate-900">FY2027 H-1B Cap Season Timeline</h3>
            <p className="mt-2 text-slate-600">
              Every critical date for the current lottery cycle. Missing a deadline means waiting an entire year.
            </p>
          </div>
          <div className="space-y-4">
            {TIMELINE_EVENTS.map((event, i) => (
              <div key={i} className="flex gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex flex-col items-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-700 text-sm font-bold text-white">
                    {i + 1}
                  </div>
                  {i < TIMELINE_EVENTS.length - 1 && <div className="mt-2 w-0.5 flex-1 bg-slate-200" />}
                </div>
                <div className="flex-1 pb-2">
                  <p className="text-xs font-semibold uppercase tracking-wide text-blue-700">{event.date}</p>
                  <h4 className="mt-1 text-lg font-semibold text-slate-900">{event.title}</h4>
                  <p className="mt-2 text-sm text-slate-600">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="rounded-xl border border-red-200 bg-red-50 p-5">
            <h4 className="font-semibold text-red-900">⚠️ Critical Reminders</h4>
            <ul className="mt-3 space-y-2 text-sm text-red-800">
              <li>• <strong>You cannot check results yourself.</strong> Only your employer or attorney sees the selection notice.</li>
              <li>• <strong>Stay in touch after March 31.</strong> Second-round selections can happen through summer if the cap is not filled.</li>
              <li>• <strong>Petition must be filed by June 30.</strong> A selection notice alone is not a visa — the full I-129 petition must be approved.</li>
            </ul>
          </div>
        </div>
      )}

      {activeTab === "selected" && (
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold text-slate-900">🎉 Selected? Here&apos;s What to Do Next</h3>
            <p className="mt-2 text-slate-600">
              Congratulations! Selection is a major milestone — but it&apos;s not a visa yet. Follow these steps carefully.
            </p>
          </div>
          <div className="space-y-4">
            {[
              {
                step: "1",
                title: "Confirm with your employer immediately",
                desc: "Contact your employer or immigration attorney to confirm the selection notice. Get written confirmation and ask about their petition filing timeline.",
              },
              {
                step: "2",
                title: "Gather your documents (April)",
                desc: "Passport (valid 6+ months beyond Oct 1), degree certificates + evaluations, transcripts, resume, prior visa stamps, I-20s (if on F-1/OPT), pay stubs, and employment verification letters.",
              },
              {
                step: "3",
                title: "Employer files Form I-129 (April 1 – June 30)",
                desc: "Your employer files the full H-1B petition with USCIS, including the Labor Condition Application (LCA), support letter, and filing fees. Premium processing ($2,805) gets a decision in 15 business days.",
              },
              {
                step: "4",
                title: "Respond to RFEs if issued",
                desc: "If USCIS issues a Request for Evidence, respond thoroughly and before the deadline (typically 87 days). Common RFE topics: specialty occupation, employer-employee relationship, and maintenance of status.",
              },
              {
                step: "5",
                title: "Approval → October 1 start",
                desc: "Once approved, your H-1B status begins October 1, 2026 (or the requested start date). If you're outside the US, attend a visa interview at a US consulate. If on F-1/OPT, cap-gap extension may cover you until Oct 1.",
              },
            ].map((s) => (
              <div key={s.step} className="flex gap-4 rounded-xl border border-green-200 bg-green-50 p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-600 text-sm font-bold text-white">
                  {s.step}
                </div>
                <div>
                  <h4 className="font-semibold text-green-900">{s.title}</h4>
                  <p className="mt-1 text-sm text-green-800">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === "not-selected" && (
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold text-slate-900">Not Selected? You Still Have Options</h3>
            <p className="mt-2 text-slate-600">
              With selection rates around 35%, most registrants are not selected. Here are proven alternatives — many people succeed on their second or third attempt.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              {
                title: "🔄 Try Again Next Year",
                desc: "The most common path. Improve your odds: negotiate a higher salary (wage-weighted selection favors higher wage levels), ensure your employer registers early, and consider the master's cap if eligible.",
              },
              {
                title: "🎓 Day 1 CPT (F-1 Students)",
                desc: "If you're on F-1/OPT, Day 1 CPT programs let you continue working while studying. Research accredited universities carefully — this is a complex area requiring attorney guidance.",
              },
              {
                title: "⭐ O-1 Visa",
                desc: "For individuals with extraordinary ability in sciences, arts, education, business, or athletics. No lottery, no cap — but the bar is high (awards, publications, press coverage).",
              },
              {
                title: "🏢 L-1 Intracompany Transfer",
                desc: "If your employer has offices abroad, work there for 1 year, then transfer to the US on L-1. No lottery required. Common at multinational tech companies.",
              },
              {
                title: "🎓 Cap-Exempt Employers",
                desc: "Universities, nonprofit research organizations, and government research institutions are exempt from the H-1B cap — no lottery needed, and you can apply any time of year.",
              },
              {
                title: "🌍 Work Remotely from Abroad",
                desc: "Many US companies hire internationally as contractors or through Employer of Record (EOR) services. Build experience, then try the lottery again or pursue L-1 after a year.",
              },
            ].map((opt, i) => (
              <div key={i} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <h4 className="font-semibold text-slate-900">{opt.title}</h4>
                <p className="mt-2 text-sm text-slate-600">{opt.desc}</p>
              </div>
            ))}
          </div>
          <div className="rounded-xl border border-blue-200 bg-blue-50 p-5">
            <h4 className="font-semibold text-blue-900">💡 Second lottery rounds happen</h4>
            <p className="mt-2 text-sm text-blue-800">
              If USCIS doesn&apos;t receive enough petitions during April–June to fill the 85,000 cap, additional
              selection rounds occur. This happened in FY2021, FY2022, and FY2024. Don&apos;t lose hope until
              the fiscal year ends on September 30 — stay in contact with your employer.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
