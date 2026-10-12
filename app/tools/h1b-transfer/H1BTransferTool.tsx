"use client";

import { useMemo, useState } from "react";

/* ------------------------------------------------------------------ */
/* USCIS fee schedule for H-1B change-of-employer ("transfer")         */
/* petitions. Amounts reflect the USCIS fee schedule in effect; the    */
/* $100K proclamation fee is presented as an opt-in toggle because its */
/* legal status has been uncertain. Always verify current fees at      */
/* uscis.gov before filing.                                            */
/* ------------------------------------------------------------------ */
const FEES = {
  baseFiling: 460, // Form I-129
  acwiaSmall: 750, // 1–25 employees
  acwiaLarge: 1500, // 26+ employees
  fraudPrevention: 500, // change of employer petitions
  premium: 2805, // Form I-907, 15 business days
  proclamation100k: 100000, // Sept 2025 proclamation — status uncertain
};

const fmt = (n: number) =>
  "$" + n.toLocaleString("en-US", { maximumFractionDigits: 0 });

type TabId = "fees" | "timeline" | "eligibility" | "checklist";

const TABS: { id: TabId; label: string; desc: string }[] = [
  { id: "fees", label: "Fee Calculator", desc: "What the transfer costs" },
  { id: "timeline", label: "Timeline Estimator", desc: "How long it takes" },
  {
    id: "eligibility",
    label: "Eligibility Checker",
    desc: "Can you transfer?",
  },
  {
    id: "checklist",
    label: "Document Checklist",
    desc: "What to prepare",
  },
];

/* ------------------------- Fee Calculator ------------------------- */

function FeeCalculator() {
  const [size, setSize] = useState<"small" | "large">("large");
  const [premium, setPremium] = useState(false);
  const [include100k, setInclude100k] = useState(false);

  const rows = useMemo(() => {
    const list: { label: string; amount: number; note: string }[] = [
      {
        label: "Form I-129 base filing fee",
        amount: FEES.baseFiling,
        note: "Paid by the petitioning employer on every H-1B petition.",
      },
      {
        label: "ACWIA training fee",
        amount: size === "small" ? FEES.acwiaSmall : FEES.acwiaLarge,
        note:
          size === "small"
            ? "Employers with 25 or fewer full-time employees pay $750."
            : "Employers with 26+ full-time employees pay $1,500.",
      },
      {
        label: "Fraud prevention & detection fee",
        amount: FEES.fraudPrevention,
        note: "Applies to change-of-employer (transfer) petitions.",
      },
    ];
    if (premium) {
      list.push({
        label: "Premium processing (Form I-907)",
        amount: FEES.premium,
        note: "Optional. USCIS decision within 15 business days.",
      });
    }
    if (include100k) {
      list.push({
        label: "2025 proclamation fee",
        amount: FEES.proclamation100k,
        note: "Sept 2025 proclamation amount. Legal status uncertain — verify before relying on it.",
      });
    }
    return list;
  }, [size, premium, include100k]);

  const total = rows.reduce((a, r) => a + r.amount, 0);

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-lg border border-slate-200 bg-white p-5">
          <p className="font-semibold text-slate-900">New employer size</p>
          <div className="mt-3 flex gap-2">
            {(
              [
                { v: "small", l: "1–25 employees" },
                { v: "large", l: "26+ employees" },
              ] as const
            ).map((o) => (
              <button
                key={o.v}
                onClick={() => setSize(o.v)}
                className={`flex-1 rounded-lg border px-3 py-2.5 text-sm font-semibold transition-colors ${
                  size === o.v
                    ? "border-blue-600 bg-blue-50 text-blue-800"
                    : "border-slate-200 bg-white text-slate-600 hover:border-slate-300"
                }`}
              >
                {o.l}
              </button>
            ))}
          </div>
          <p className="mt-2 text-xs text-slate-500">
            Employer size sets the ACWIA training fee ($750 vs $1,500).
          </p>
        </div>

        <div className="rounded-lg border border-slate-200 bg-white p-5">
          <p className="font-semibold text-slate-900">Options</p>
          <label className="mt-3 flex cursor-pointer items-start gap-3">
            <input
              type="checkbox"
              checked={premium}
              onChange={(e) => setPremium(e.target.checked)}
              className="mt-1 h-4 w-4 accent-blue-700"
            />
            <span className="text-sm text-slate-700">
              <span className="font-semibold">Premium processing</span> (+
              {fmt(FEES.premium)})
              <span className="block text-xs text-slate-500">
                15-business-day USCIS decision instead of months of waiting.
              </span>
            </span>
          </label>
          <label className="mt-3 flex cursor-pointer items-start gap-3">
            <input
              type="checkbox"
              checked={include100k}
              onChange={(e) => setInclude100k(e.target.checked)}
              className="mt-1 h-4 w-4 accent-blue-700"
            />
            <span className="text-sm text-slate-700">
              <span className="font-semibold">
                Include 2025 proclamation fee
              </span>{" "}
              (+{fmt(FEES.proclamation100k)})
              <span className="block text-xs text-slate-500">
                Off by default — its legal status has been uncertain. Ask your
                attorney whether it applies to your case.
              </span>
            </span>
          </label>
        </div>
      </div>

      <div className="mt-6 overflow-hidden rounded-lg border border-slate-200 bg-white">
        <div className="bg-slate-50 px-5 py-3">
          <p className="font-semibold text-slate-900">
            Estimated employer cost breakdown
          </p>
        </div>
        <ul className="divide-y divide-slate-100">
          {rows.map((r) => (
            <li key={r.label} className="px-5 py-4">
              <div className="flex items-baseline justify-between gap-4">
                <p className="font-medium text-slate-800">{r.label}</p>
                <p className="shrink-0 font-bold tabular-nums text-slate-900">
                  {fmt(r.amount)}
                </p>
              </div>
              <p className="mt-1 text-xs text-slate-500">{r.note}</p>
            </li>
          ))}
        </ul>
        <div className="flex items-baseline justify-between bg-blue-50 px-5 py-4">
          <p className="font-bold text-slate-900">Estimated total</p>
          <p className="text-2xl font-bold tabular-nums text-blue-800">
            {fmt(total)}
          </p>
        </div>
      </div>

      <p className="mt-4 text-xs leading-relaxed text-slate-500">
        Estimates only, based on the USCIS fee schedule. Employers — not
        workers — must pay the ACWIA and fraud fees by law; premium processing
        may be paid by either party. Fees change: verify at uscis.gov before
        filing. Not legal advice.
      </p>
    </div>
  );
}

/* ------------------------ Timeline Estimator ------------------------ */

const TIMELINES = {
  regular: {
    label: "Regular processing",
    stages: [
      { name: "Petition filed", range: "Day 0", detail: "New employer files Form I-129 with USCIS." },
      { name: "Receipt notice", range: "1–3 weeks", detail: "USCIS issues Form I-797C receipt. Under AC21 portability you may start working for the new employer now." },
      { name: "USCIS adjudication", range: "2–4 months", detail: "Typical range for change-of-employer petitions; varies by service center and workload." },
      { name: "Approval (I-797)", range: "Month 3–5", detail: "Approval notice extends your H-1B with the new employer." },
    ],
    note: "Regular processing has no guaranteed decision date. If timing is critical, premium processing is the lever.",
  },
  premium: {
    label: "Premium processing",
    stages: [
      { name: "Petition filed", range: "Day 0", detail: "I-129 + I-907 filed together (or I-907 upgraded later)." },
      { name: "Receipt notice", range: "Days", detail: "Receipt arrives quickly; AC21 portability still applies." },
      { name: "USCIS decision", range: "≤ 15 business days", detail: "Approval, denial, RFE, or notice of intent to deny — guaranteed within 15 business days of receipt." },
      { name: "Start date", range: "~3–4 weeks", detail: "Most premium transfer cases are fully resolved within about a month of filing." },
    ],
    note: "The 15-business-day clock pauses if USCIS issues an RFE, then restarts when you respond.",
  },
} as const;

function TimelineEstimator() {
  const [mode, setMode] = useState<"regular" | "premium">("regular");
  const t = TIMELINES[mode];

  return (
    <div>
      <div className="flex gap-2">
        {(Object.keys(TIMELINES) as ("regular" | "premium")[]).map((m) => (
          <button
            key={m}
            onClick={() => setMode(m)}
            className={`flex-1 rounded-lg border px-4 py-3 text-sm font-semibold transition-colors ${
              mode === m
                ? "border-blue-600 bg-blue-50 text-blue-800"
                : "border-slate-200 bg-white text-slate-600 hover:border-slate-300"
            }`}
          >
            {TIMELINES[m].label}
            <span className="block text-xs font-normal text-slate-500">
              {m === "regular" ? "No extra fee · 2–4 months" : `+${fmt(FEES.premium)} · 15 business days`}
            </span>
          </button>
        ))}
      </div>

      <div className="mt-6 rounded-lg border border-slate-200 bg-white p-5 sm:p-6">
        <ol className="relative space-y-6 border-l-2 border-blue-200 pl-6">
          {t.stages.map((s, i) => (
            <li key={s.name} className="relative">
              <span
                className={`absolute -left-[33px] flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold text-white ${
                  i === 0 ? "bg-blue-700" : "bg-blue-400"
                }`}
              >
                {i + 1}
              </span>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <p className="font-semibold text-slate-900">{s.name}</p>
                <p className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-800">
                  {s.range}
                </p>
              </div>
              <p className="mt-1 text-sm text-slate-600">{s.detail}</p>
            </li>
          ))}
        </ol>
        <div className="mt-6 rounded-lg bg-amber-50 border border-amber-200 p-4">
          <p className="text-sm font-semibold text-amber-900">
            AC21 portability — you don&apos;t have to wait
          </p>
          <p className="mt-1 text-sm text-amber-800">
            Once the new employer&apos;s petition is <em>filed</em> (receipt
            issued), you may legally begin working for the new employer while
            USCIS adjudicates — you don&apos;t need to wait for approval.
            {t.note && <span className="mt-1 block">{t.note}</span>}
          </p>
        </div>
      </div>

      <p className="mt-4 text-xs leading-relaxed text-slate-500">
        Ranges are typical, not guarantees — service-center backlogs shift.
        Premium processing guarantees a <em>decision</em> (approval, denial, or
        RFE) within 15 business days, not necessarily an approval. Not legal
        advice.
      </p>
    </div>
  );
}

/* ------------------------ Eligibility Checker ------------------------ */

const QUIZ: { q: string; hint: string }[] = [
  {
    q: "Are you currently maintaining valid H-1B status?",
    hint: "Working for your petitioning employer, in status, not out of status or in a grace period beyond 60 days.",
  },
  {
    q: "Have you already been counted against the H-1B cap?",
    hint: "If your current H-1B went through the lottery (or was cap-exempt), a transfer does NOT need a new lottery registration.",
  },
  {
    q: "Are you within your 6-year H-1B maximum (or eligible for extensions beyond it)?",
    hint: "Time can be recaptured for days spent outside the US; AC21 allows extensions beyond 6 years with a pending/approved PERM or I-140.",
  },
  {
    q: "Do you have a bona fide job offer from the new employer?",
    hint: "The new employer must file the petition — you cannot self-petition an H-1B transfer.",
  },
  {
    q: "Can you document recent employment (e.g., pay stubs within the last 60 days)?",
    hint: "USCIS typically wants proof you maintained status — recent pay stubs are the standard evidence.",
  },
];

function EligibilityChecker() {
  const [answers, setAnswers] = useState<(boolean | null)[]>(
    Array(QUIZ.length).fill(null)
  );

  const answered = answers.filter((a) => a !== null).length;
  const yesCount = answers.filter((a) => a === true).length;
  const done = answered === QUIZ.length;

  const verdict = done
    ? yesCount === QUIZ.length
      ? {
          tone: "emerald",
          title: "Likely eligible",
          body: "You answered yes to all five checks — the classic fact pattern for a routine H-1B change-of-employer petition. Your new employer can file Form I-129 and you may port under AC21 once receipted.",
        }
      : yesCount >= 3
        ? {
            tone: "amber",
            title: "Possibly eligible — review the “no” answers",
            body: "One or more answers suggest complications (status gaps, cap issues, or documentation). Transfers are still often possible, but the specific “no” answers above need an attorney's review before filing.",
          }
        : {
            tone: "rose",
            title: "Consult an immigration attorney first",
            body: "Multiple answers point to significant issues. Do not assume a transfer will work — an attorney needs to evaluate your status history, cap count, and remaining H-1B time before anyone files.",
          }
    : null;

  const toneClasses: Record<string, string> = {
    emerald: "border-emerald-300 bg-emerald-50",
    amber: "border-amber-300 bg-amber-50",
    rose: "border-rose-300 bg-rose-50",
  };
  const titleClasses: Record<string, string> = {
    emerald: "text-emerald-900",
    amber: "text-amber-900",
    rose: "text-rose-900",
  };

  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <p className="text-sm font-semibold text-slate-700">
          {answered} of {QUIZ.length} answered
        </p>
        {answered > 0 && (
          <button
            onClick={() => setAnswers(Array(QUIZ.length).fill(null))}
            className="text-xs font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900"
          >
            Start over
          </button>
        )}
      </div>
      <div className="space-y-3">
        {QUIZ.map((item, i) => (
          <div
            key={i}
            className="rounded-lg border border-slate-200 bg-white p-5"
          >
            <p className="font-semibold text-slate-900">
              <span className="mr-2 text-slate-400">{i + 1}.</span>
              {item.q}
            </p>
            <p className="mt-1 text-xs text-slate-500">{item.hint}</p>
            <div className="mt-3 flex gap-2">
              {(
                [
                  { v: true, l: "Yes" },
                  { v: false, l: "No" },
                ] as const
              ).map((o) => (
                <button
                  key={o.l}
                  onClick={() =>
                    setAnswers((prev) => {
                      const next = [...prev];
                      next[i] = o.v;
                      return next;
                    })
                  }
                  className={`rounded-lg border px-6 py-2 text-sm font-semibold transition-colors ${
                    answers[i] === o.v
                      ? o.v
                        ? "border-emerald-600 bg-emerald-50 text-emerald-800"
                        : "border-rose-600 bg-rose-50 text-rose-800"
                      : "border-slate-200 bg-white text-slate-600 hover:border-slate-300"
                  }`}
                >
                  {o.l}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {verdict && (
        <div
          className={`mt-6 rounded-lg border p-5 ${toneClasses[verdict.tone]}`}
        >
          <p className={`text-lg font-bold ${titleClasses[verdict.tone]}`}>
            {verdict.title}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-slate-700">
            {verdict.body}
          </p>
        </div>
      )}

      <p className="mt-4 text-xs leading-relaxed text-slate-500">
        This quiz is a rough self-screen, not a legal determination. H-1B
        transfer eligibility turns on your full immigration history — always
        have an attorney review before changing employers.
      </p>
    </div>
  );
}

/* ------------------------ Document Checklist ------------------------ */

const CHECKLIST: { category: string; items: string[] }[] = [
  {
    category: "Personal documents",
    items: [
      "Valid passport (valid 6+ months beyond intended stay)",
      "Current I-94 arrival/departure record",
      "Prior visa stamps and approval notices",
    ],
  },
  {
    category: "Current H-1B employment proof",
    items: [
      "Most recent pay stubs (last 2–3 months)",
      "Current H-1B approval notice (Form I-797)",
      "Employment verification letter from current employer (if available)",
      "W-2s / tax returns (last 1–2 years, if available)",
    ],
  },
  {
    category: "New employer petition package",
    items: [
      "Signed job offer letter with title, duties, salary, worksite",
      "Certified Labor Condition Application (LCA) for the new role",
      "Company support letter describing the specialty occupation",
      "Evidence of employer's ability to pay (financials, if requested)",
    ],
  },
  {
    category: "Education & credentials",
    items: [
      "Degree certificates and transcripts",
      "Credential evaluation (if degree is from outside the US)",
      "Resume / CV",
      "Professional licenses, if the role requires them",
    ],
  },
];

function DocumentChecklist() {
  const total = CHECKLIST.reduce((a, c) => a + c.items.length, 0);
  const [checked, setChecked] = useState<Set<string>>(new Set());

  const toggle = (key: string) =>
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });

  const pct = Math.round((checked.size / total) * 100);

  return (
    <div>
      <div className="rounded-lg border border-slate-200 bg-white p-5">
        <div className="flex items-baseline justify-between">
          <p className="font-semibold text-slate-900">
            {checked.size} of {total} documents ready
          </p>
          <p className="text-2xl font-bold tabular-nums text-blue-800">
            {pct}%
          </p>
        </div>
        <div className="mt-3 h-3 overflow-hidden rounded-full bg-slate-100">
          <div
            className="h-full rounded-full bg-blue-600 transition-all duration-300"
            style={{ width: `${pct}%` }}
          />
        </div>
        {pct === 100 && (
          <p className="mt-3 text-sm font-semibold text-emerald-700">
            Document package complete — share this list with your new
            employer&apos;s attorney to start the filing.
          </p>
        )}
      </div>

      <div className="mt-6 space-y-5">
        {CHECKLIST.map((cat) => (
          <div key={cat.category}>
            <p className="mb-2 text-sm font-bold uppercase tracking-wide text-slate-500">
              {cat.category}
            </p>
            <div className="space-y-2">
              {cat.items.map((item) => {
                const key = `${cat.category}::${item}`;
                const on = checked.has(key);
                return (
                  <label
                    key={key}
                    className={`flex cursor-pointer items-start gap-3 rounded-lg border p-4 transition-colors ${
                      on
                        ? "border-emerald-300 bg-emerald-50"
                        : "border-slate-200 bg-white hover:border-slate-300"
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={on}
                      onChange={() => toggle(key)}
                      className="mt-1 h-4 w-4 accent-emerald-600"
                    />
                    <span
                      className={`text-sm ${
                        on
                          ? "text-slate-500 line-through"
                          : "text-slate-700"
                      }`}
                    >
                      {item}
                    </span>
                  </label>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <p className="mt-4 text-xs leading-relaxed text-slate-500">
        Your attorney may request additional evidence depending on your case
        (RFE history, travel records, prior denials). This checklist covers the
        standard package — not legal advice.
      </p>
    </div>
  );
}

/* ------------------------------ Shell ------------------------------ */

export default function H1BTransferTool() {
  const [tab, setTab] = useState<TabId>("fees");

  return (
    <div>
      <div
        role="tablist"
        aria-label="H-1B transfer tool sections"
        className="grid grid-cols-2 gap-2 sm:grid-cols-4"
      >
        {TABS.map((t) => (
          <button
            key={t.id}
            role="tab"
            aria-selected={tab === t.id}
            onClick={() => setTab(t.id)}
            className={`rounded-lg border px-3 py-3 text-left transition-colors ${
              tab === t.id
                ? "border-blue-600 bg-blue-700 text-white shadow"
                : "border-slate-200 bg-white text-slate-700 hover:border-slate-300"
            }`}
          >
            <span className="block text-sm font-bold">{t.label}</span>
            <span
              className={`block text-xs ${
                tab === t.id ? "text-blue-100" : "text-slate-500"
              }`}
            >
              {t.desc}
            </span>
          </button>
        ))}
      </div>

      <div className="mt-6" role="tabpanel">
        {tab === "fees" && <FeeCalculator />}
        {tab === "timeline" && <TimelineEstimator />}
        {tab === "eligibility" && <EligibilityChecker />}
        {tab === "checklist" && <DocumentChecklist />}
      </div>
    </div>
  );
}
