"use client";

import { useMemo, useState } from "react";

/* ------------------------------------------------------------------ */
/* USCIS Form I-129 (H-1B) processing time estimates by service center */
/* Based on USCIS published processing times (egov.uscis.gov).        */
/* Ranges are typical; always verify current times at the official     */
/* USCIS processing times tool before making decisions.                */
/* ------------------------------------------------------------------ */

type ServiceCenterId = "california" | "vermont" | "texas" | "nebraska" | "potomac";
type PetitionTypeId = "new" | "transfer" | "extension" | "amendment";

interface ServiceCenter {
  id: ServiceCenterId;
  name: string;
  short: string;
  states: string;
  // Typical regular processing range in months [min, max]
  regularMonths: [number, number];
  // Relative speed label
  speed: "fast" | "average" | "slow";
  note: string;
}

const SERVICE_CENTERS: ServiceCenter[] = [
  {
    id: "california",
    name: "California Service Center",
    short: "CSC",
    states: "AK, AZ, CA, CO, GU, HI, ID, IL, IN, IA, KS, MI, MN, MO, MT, NE, NV, ND, OH, OR, SD, UT, WA, WI, WY",
    regularMonths: [2, 3],
    speed: "fast",
    note: "Historically among the fastest for H-1B petitions. Most I-129s move in about 2 months.",
  },
  {
    id: "vermont",
    name: "Vermont Service Center",
    short: "VSC",
    states: "CT, DE, DC, ME, MD, MA, NH, NJ, NY, PA, RI, VT, VA, WV, PR, VI",
    regularMonths: [4, 6],
    speed: "slow",
    note: "Historically the slowest for H-1B extensions — often 5+ months. File extensions as early as possible (up to 6 months before expiry).",
  },
  {
    id: "texas",
    name: "Texas Service Center",
    short: "TSC",
    states: "TX, OK, NM, AR, LA",
    regularMonths: [2, 4],
    speed: "average",
    note: "Moderate processing times. Typical H-1B petitions take 2–4 months.",
  },
  {
    id: "nebraska",
    name: "Nebraska Service Center",
    short: "NSC",
    states: "Nationwide (certain petition types)",
    regularMonths: [3, 5],
    speed: "average",
    note: "Handles overflow and specific petition categories. Typical range 3–5 months.",
  },
  {
    id: "potomac",
    name: "Potomac Service Center",
    short: "PSC",
    states: "Nationwide (certain petition types)",
    regularMonths: [2, 4],
    speed: "average",
    note: "Newer center handling overflow. Typical H-1B range 2–4 months.",
  },
];

interface PetitionType {
  id: PetitionTypeId;
  label: string;
  desc: string;
  // Multiplier applied to base range (some types take longer)
  timeMultiplier: [number, number];
  detail: string;
}

const PETITION_TYPES: PetitionType[] = [
  {
    id: "new",
    label: "New H-1B Petition",
    desc: "First-time cap-subject filing",
    timeMultiplier: [1, 1.1],
    detail: "Initial H-1B petition through the lottery. Standard adjudication timeline applies.",
  },
  {
    id: "transfer",
    label: "Transfer (Change of Employer)",
    desc: "Moving to a new employer",
    timeMultiplier: [1, 1.1],
    detail: "Change-of-employer petition. Under AC21, you can start working once USCIS issues the receipt notice — no need to wait for approval.",
  },
  {
    id: "extension",
    label: "Extension of Stay",
    desc: "Extending with same employer",
    timeMultiplier: [1, 1.3],
    detail: "Extension petitions can face additional scrutiny. Vermont is notably slower for extensions. File up to 6 months before your I-94 expires.",
  },
  {
    id: "amendment",
    label: "Amendment",
    desc: "Material change (role, location)",
    timeMultiplier: [1, 1.2],
    detail: "Required when there is a material change — new job duties, worksite location change, or significant salary change.",
  },
];

const PREMIUM_DAYS = 15; // business days, USCIS guarantee
const PREMIUM_FEE = 2805;

function monthsToLabel(months: number): string {
  if (months < 1) return `${Math.round(months * 4)} weeks`;
  if (months === 1) return "1 month";
  const rounded = Math.round(months * 10) / 10;
  return `${rounded} months`;
}

function getSpeedColor(speed: string): string {
  switch (speed) {
    case "fast": return "bg-emerald-100 text-emerald-800 border-emerald-200";
    case "slow": return "bg-rose-100 text-rose-800 border-rose-200";
    default: return "bg-amber-100 text-amber-800 border-amber-200";
  }
}

function getSpeedLabel(speed: string): string {
  switch (speed) {
    case "fast": return "Faster than average";
    case "slow": return "Slower than average";
    default: return "Average speed";
  }
}

export default function ProcessingTimeTool() {
  const [centerId, setCenterId] = useState<ServiceCenterId>("california");
  const [petitionId, setPetitionId] = useState<PetitionTypeId>("new");
  const [premium, setPremium] = useState(false);

  const center = SERVICE_CENTERS.find((c) => c.id === centerId)!;
  const petition = PETITION_TYPES.find((p) => p.id === petitionId)!;

  const estimate = useMemo(() => {
    if (premium) {
      return {
        min: PREMIUM_DAYS,
        max: PREMIUM_DAYS,
        unit: "business days" as const,
        label: `≤ ${PREMIUM_DAYS} business days`,
      };
    }
    const [baseMin, baseMax] = center.regularMonths;
    const [multMin, multMax] = petition.timeMultiplier;
    const min = Math.round(baseMin * multMin * 10) / 10;
    const max = Math.round(baseMax * multMax * 10) / 10;
    return {
      min,
      max,
      unit: "months" as const,
      label: `${monthsToLabel(min)} – ${monthsToLabel(max)}`,
    };
  }, [center, petition, premium]);

  // Timeline stages
  const stages = useMemo(() => {
    if (premium) {
      return [
        { name: "Petition filed", time: "Day 0", detail: "Employer files Form I-129 + I-907 (premium request) with USCIS." },
        { name: "Receipt notice", time: "Days", detail: "USCIS issues receipt. The 15-business-day clock starts." },
        { name: "USCIS decision", time: `≤ ${PREMIUM_DAYS} business days`, detail: "Approval, denial, RFE, or NOID — guaranteed within 15 business days." },
        { name: "Work authorized", time: "~3–4 weeks total", detail: "Most premium cases fully resolved within about a month of filing." },
      ];
    }
    return [
      { name: "Petition filed", time: "Day 0", detail: "Employer files Form I-129 with USCIS at the service center." },
      { name: "Receipt notice", time: "1–3 weeks", detail: "USCIS issues Form I-797C receipt notice with case number." },
      { name: "Case adjudication", time: estimate.label, detail: `USCIS officer reviews the petition at ${center.short}. Times vary by workload and case complexity.` },
      { name: "Decision issued", time: "After adjudication", detail: "Approval (I-797), denial, or Request for Evidence (RFE)." },
    ];
  }, [premium, estimate, center]);

  // Comparison data for all centers
  const comparison = useMemo(() => {
    return SERVICE_CENTERS.map((c) => {
      const [baseMin, baseMax] = c.regularMonths;
      const [multMin, multMax] = petition.timeMultiplier;
      if (premium) {
        return { ...c, range: `≤ ${PREMIUM_DAYS} business days`, minMonths: 0.7, maxMonths: 0.7 };
      }
      const min = Math.round(baseMin * multMin * 10) / 10;
      const max = Math.round(baseMax * multMax * 10) / 10;
      return { ...c, range: `${monthsToLabel(min)} – ${monthsToLabel(max)}`, minMonths: min, maxMonths: max };
    });
  }, [petition, premium]);

  const maxBar = Math.max(...comparison.map((c) => c.maxMonths), 1);

  return (
    <div className="space-y-8">
      {/* Selectors */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Service Center */}
        <div className="rounded-xl border border-slate-200 bg-white p-6">
          <p className="font-bold text-slate-900">1. Select Service Center</p>
          <p className="mt-1 text-xs text-slate-500">Where USCIS processes your petition (based on worksite location)</p>
          <div className="mt-4 space-y-2">
            {SERVICE_CENTERS.map((c) => (
              <button
                key={c.id}
                onClick={() => setCenterId(c.id)}
                className={`w-full rounded-lg border px-4 py-3 text-left transition-colors ${
                  centerId === c.id
                    ? "border-blue-600 bg-blue-50 shadow-sm"
                    : "border-slate-200 bg-white hover:border-slate-300"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`font-semibold text-sm ${centerId === c.id ? "text-blue-900" : "text-slate-800"}`}>
                    {c.name}
                  </span>
                  <span className={`rounded-full border px-2 py-0.5 text-xs font-semibold ${getSpeedColor(c.speed)}`}>
                    {c.short}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Petition Type */}
        <div className="rounded-xl border border-slate-200 bg-white p-6">
          <p className="font-bold text-slate-900">2. Select Petition Type</p>
          <p className="mt-1 text-xs text-slate-500">What kind of H-1B petition are you filing?</p>
          <div className="mt-4 space-y-2">
            {PETITION_TYPES.map((p) => (
              <button
                key={p.id}
                onClick={() => setPetitionId(p.id)}
                className={`w-full rounded-lg border px-4 py-3 text-left transition-colors ${
                  petitionId === p.id
                    ? "border-blue-600 bg-blue-50 shadow-sm"
                    : "border-slate-200 bg-white hover:border-slate-300"
                }`}
              >
                <span className={`font-semibold text-sm ${petitionId === p.id ? "text-blue-900" : "text-slate-800"}`}>
                  {p.label}
                </span>
                <span className="block text-xs text-slate-500 mt-0.5">{p.desc}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Premium toggle */}
      <div className="rounded-xl border-2 border-blue-200 bg-blue-50 p-6">
        <label className="flex cursor-pointer items-start gap-4">
          <input
            type="checkbox"
            checked={premium}
            onChange={(e) => setPremium(e.target.checked)}
            className="mt-1 h-5 w-5 accent-blue-700"
          />
          <div>
            <span className="font-bold text-slate-900">
              Add Premium Processing (+${PREMIUM_FEE.toLocaleString()})
            </span>
            <span className="mt-1 block text-sm text-slate-600">
              USCIS guarantees a decision (approval, denial, or RFE) within {PREMIUM_DAYS} business days.
              If they miss the deadline, the fee is refunded. Can be filed with the initial petition or upgraded later.
            </span>
          </div>
        </label>
      </div>

      {/* Result */}
      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
        <div className="bg-gradient-to-r from-blue-700 to-blue-900 px-6 py-5">
          <p className="text-sm font-medium text-blue-200">Estimated processing time</p>
          <p className="mt-1 text-3xl font-bold text-white">{estimate.label}</p>
          <p className="mt-1 text-sm text-blue-200">
            {center.name} · {petition.label}{premium ? " · Premium Processing" : " · Regular Processing"}
          </p>
        </div>
        <div className="px-6 py-5">
          <div className={`inline-block rounded-full border px-3 py-1 text-xs font-bold ${getSpeedColor(center.speed)}`}>
            {getSpeedLabel(center.speed)}
          </div>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">{center.note}</p>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">{petition.detail}</p>
        </div>
      </div>

      {/* Timeline */}
      <div className="rounded-xl border border-slate-200 bg-white p-6">
        <p className="font-bold text-slate-900">What happens at each stage</p>
        <ol className="relative mt-6 space-y-6 border-l-2 border-blue-200 pl-6">
          {stages.map((s, i) => (
            <li key={s.name} className="relative">
              <span className={`absolute -left-[33px] flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold text-white ${i === 0 ? "bg-blue-700" : "bg-blue-400"}`}>
                {i + 1}
              </span>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <p className="font-semibold text-slate-900">{s.name}</p>
                <p className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-800">{s.time}</p>
              </div>
              <p className="mt-1 text-sm text-slate-600">{s.detail}</p>
            </li>
          ))}
        </ol>
      </div>

      {/* Comparison chart */}
      <div className="rounded-xl border border-slate-200 bg-white p-6">
        <p className="font-bold text-slate-900">Compare all service centers</p>
        <p className="mt-1 text-xs text-slate-500">
          {petition.label} · {premium ? "Premium Processing" : "Regular Processing"}
        </p>
        <div className="mt-6 space-y-4">
          {comparison.map((c) => (
            <div key={c.id} className={c.id === centerId ? "rounded-lg bg-blue-50 p-3 -m-1" : ""}>
              <div className="flex items-baseline justify-between gap-2">
                <p className={`text-sm font-semibold ${c.id === centerId ? "text-blue-900" : "text-slate-700"}`}>
                  {c.short} <span className="font-normal text-slate-500 hidden sm:inline">— {c.name.replace(" Service Center", "")}</span>
                </p>
                <p className="text-sm font-bold text-slate-900 tabular-nums shrink-0">{c.range}</p>
              </div>
              <div className="mt-2 h-3 overflow-hidden rounded-full bg-slate-100">
                <div
                  className={`h-full rounded-full transition-all duration-500 ${c.id === centerId ? "bg-blue-600" : c.speed === "fast" ? "bg-emerald-500" : c.speed === "slow" ? "bg-rose-400" : "bg-amber-400"}`}
                  style={{ width: `${Math.max((c.maxMonths / maxBar) * 100, 5)}%` }}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 flex flex-wrap gap-4 text-xs text-slate-500">
          <span className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-emerald-500 inline-block" /> Faster</span>
          <span className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-amber-400 inline-block" /> Average</span>
          <span className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-rose-400 inline-block" /> Slower</span>
          <span className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-blue-600 inline-block" /> Your selection</span>
        </div>
      </div>

      {/* Premium vs Regular comparison */}
      {!premium && (
        <div className="rounded-xl border border-amber-200 bg-amber-50 p-6">
          <p className="font-bold text-amber-900">💡 Consider premium processing?</p>
          <p className="mt-2 text-sm leading-relaxed text-amber-800">
            Regular processing at {center.short} takes <strong>{estimate.label}</strong>, while premium processing
            guarantees a decision in <strong>≤ {PREMIUM_DAYS} business days</strong> for ${PREMIUM_FEE.toLocaleString()}.
            Toggle premium processing above to compare. It is especially worth it if your start date is tight,
            your status is expiring soon, or you need certainty for travel plans.
          </p>
        </div>
      )}

      {/* Disclaimer */}
      <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
        <p className="text-xs leading-relaxed text-slate-500">
          <strong className="text-slate-700">Important:</strong> These are estimates based on USCIS published
          processing time data and historical patterns. Actual processing times vary by case complexity, USCIS
          workload, and policy changes. Always check the current official processing times at{" "}
          <a href="https://egov.uscis.gov/processing-times/" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-700 hover:underline">
            egov.uscis.gov/processing-times
          </a>{" "}
          before making decisions. This tool is for informational purposes only and is not legal advice.
          Data last reviewed October 2026.
        </p>
      </div>
    </div>
  );
}
