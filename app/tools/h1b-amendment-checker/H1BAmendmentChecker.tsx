"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

/* ------------------------------------------------------------------ */
/* H-1B Amendment Checker — decision logic.                            */
/* Rules applied (see the guide sections on the page for sources):    */
/*  - New employer = change-of-employer petition (transfer), NOT an   */
/*    amendment.                                                       */
/*  - Material change (Matter of Simeio Solutions, 2015; 8 CFR        */
/*    214.2(h)(2)(i)(E)): amended/new petition required, filed        */
/*    BEFORE the change takes effect.                                  */
/*  - Move outside the MSA on the certified LCA = new LCA + amended    */
/*    petition. Move within the same MSA generally needs neither.      */
/*  - Short-term placement (up to 30 days, extendable to 60 in limited */
/*    cases) at a new location may not need a new LCA — temporary      */
/*    placement only, not a permanent move.                            */
/*  - Salary must never drop below the LCA required wage, amended or  */
/*    not. A pay cut below that wage is a violation in itself.         */
/*  - Full-time <-> part-time change and a new third-party client     */
/*    site are material changes. Title-only change with the same      */
/*    duties generally is not.                                         */
/* ------------------------------------------------------------------ */

type AnswerMap = Record<string, string>;

type Option = { value: string; label: string; hint?: string };

type Question = {
  id: string;
  q: string;
  sub: string;
  options: Option[];
};

const QUESTIONS: Question[] = [
  {
    id: "employer",
    q: "Are you changing employers?",
    sub: "An amendment only covers changes with the SAME employer. A new employer means a different petition type entirely.",
    options: [
      { value: "no", label: "No — same employer" },
      {
        value: "yes",
        label: "Yes — new employer",
        hint: "This is a transfer, not an amendment",
      },
    ],
  },
  {
    id: "location",
    q: "Is your work location changing?",
    sub: "The key test is the metropolitan area (MSA) on your certified LCA — not the street address.",
    options: [
      { value: "no", label: "No location change" },
      {
        value: "same-msa",
        label: "Yes — within the same metro area (MSA)",
        hint: "Same city area as your current LCA worksite",
      },
      {
        value: "diff-msa",
        label: "Yes — to a different metro area (MSA)",
        hint: "Different city / region than your LCA covers",
      },
      {
        value: "short-trip",
        label: "Short trip only — under 30 days",
        hint: "Temporary placement, not a permanent move",
      },
    ],
  },
  {
    id: "duties",
    q: "Are your job duties changing?",
    sub: "A new job title alone is not the test — what you actually DO is. Minor tweaks to the same role are not a material change.",
    options: [
      { value: "no", label: "No — same duties" },
      {
        value: "minor",
        label: "Minor tweaks only",
        hint: "Same role, small task changes",
      },
      {
        value: "material",
        label: "Yes — materially different duties",
        hint: "New role, new responsibilities, different occupation",
      },
    ],
  },
  {
    id: "salary",
    q: "Is your salary changing?",
    sub: "One rule is absolute: your pay must never drop below the wage on your certified LCA — amended or not.",
    options: [
      { value: "no", label: "No salary change" },
      {
        value: "up",
        label: "Going up",
        hint: "Raise with the same role",
      },
      {
        value: "down",
        label: "Going down",
        hint: "Pay cut — check the LCA wage floor",
      },
    ],
  },
  {
    id: "hours",
    q: "Are your hours changing between full-time and part-time?",
    sub: "A switch between full-time and part-time employment changes the terms of the petition itself.",
    options: [
      { value: "no", label: "No — same full/part-time status" },
      {
        value: "yes",
        label: "Yes — switching full-time ↔ part-time",
      },
    ],
  },
  {
    id: "client",
    q: "Are you moving to a new client or third-party worksite?",
    sub: "Working at a client site brings its own LCA and evidence requirements — a new client letter and statement of work are typical.",
    options: [
      { value: "no", label: "No — same worksite arrangement" },
      {
        value: "yes",
        label: "Yes — new client / third-party site",
      },
      {
        value: "na",
        label: "Not applicable — I do not work at a client site",
      },
    ],
  },
  {
    id: "wfh",
    q: "Is your work-from-home worksite changing?",
    sub: "A home address is a worksite. A home in a different metro area is treated like any other location move.",
    options: [
      { value: "no", label: "No — same home worksite (or no remote work)" },
      {
        value: "same-msa",
        label: "Yes — new home, same metro area",
      },
      {
        value: "diff-msa",
        label: "Yes — new home, different metro area",
      },
    ],
  },
];

type Verdict = "transfer" | "amendment" | "none";

function compute(answers: AnswerMap): {
  verdict: Verdict;
  triggers: string[];
  notes: string[];
} {
  if (answers.employer === "yes") {
    return {
      verdict: "transfer",
      triggers: ["You are changing employers."],
      notes: [
        "A change of employer is a brand-new Form I-129 petition from the new employer — it reuses your existing cap count, so no new lottery is needed if you were already counted.",
        "Under AC21 portability you may start work for the new employer once USCIS issues the receipt notice for the new petition — you do not need to wait for approval.",
      ],
    };
  }
  const triggers: string[] = [];
  const notes: string[] = [];
  if (answers.location === "diff-msa")
    triggers.push(
      "Work location moves outside the metro area (MSA) covered by your certified LCA."
    );
  if (answers.location === "short-trip")
    notes.push(
      "Short-term placement of up to 30 days (extendable to 60 in limited cases) at a new location may not need a new LCA — but this covers temporary placement only, not a permanent move, and it has conditions. Confirm before relying on it."
    );
  if (answers.location === "same-msa")
    notes.push(
      "A move within the same metro area generally does not need a new LCA or amendment for the location alone — but your LCA must cover the area, and a home worksite must be listed on it."
    );
  if (answers.duties === "material")
    triggers.push("Your job duties are changing materially.");
  if (answers.duties === "minor")
    notes.push(
      "Minor duty tweaks to the same role are generally not a material change — but if the tweaks grow into a different role, re-check."
    );
  if (answers.salary === "down") {
    triggers.push("Your salary is decreasing.");
    notes.push(
      "Wage-floor warning: your pay must never drop below the required wage on your certified LCA (the higher of the prevailing wage and the actual wage paid to similar workers). A cut below that wage is a violation even if an amendment is filed."
    );
  }
  if (answers.salary === "up")
    notes.push(
      "A raise alone, with the same duties and location, usually does not require an amendment — but if duties or location changed too, those changes decide."
    );
  if (answers.hours === "yes")
    triggers.push(
      "You are switching between full-time and part-time employment."
    );
  if (answers.client === "yes")
    triggers.push(
      "You are moving to a new third-party client worksite (new LCA and client evidence needed)."
    );
  if (answers.wfh === "diff-msa")
    triggers.push(
      "Your work-from-home worksite moves to a different metro area."
    );
  if (answers.wfh === "same-msa")
    notes.push(
      "A home move within the same metro area generally needs no amendment for the location alone — but the new home address must be a listed worksite on the LCA."
    );
  if (triggers.length > 0) {
    return {
      verdict: "amendment",
      triggers,
      notes: [
        "Timing rule: the amended petition must be filed BEFORE the change takes effect — not after you have already moved, changed duties, or taken the pay cut.",
        "Sequence: first a new certified LCA from the Department of Labor for the new worksite or wage, then the amended Form I-129 petition to USCIS with the new LCA, support letter, and updated evidence.",
        ...notes,
      ],
    };
  }
  return {
    verdict: "none",
    triggers: [],
    notes: [
      "On the answers given, no amended petition is required for this change. Keep the certified LCA, approval notice, and pay records showing the LCA wage is maintained.",
      "Re-check if anything else changes — a second change (location, duties, hours, or client) can create a filing duty even when this one does not.",
      ...notes,
    ],
  };
}

const VERDICT_META: Record<
  Verdict,
  { title: string; box: string; heading: string }
> = {
  transfer: {
    title: "This is a transfer, not an amendment",
    box: "rounded-lg border border-blue-300 bg-blue-50 p-5",
    heading: "text-blue-900",
  },
  amendment: {
    title: "Amendment required — file BEFORE the change",
    box: "rounded-lg border border-red-300 bg-red-50 p-5",
    heading: "text-red-900",
  },
  none: {
    title: "No amendment needed for this change",
    box: "rounded-lg border border-green-300 bg-green-50 p-5",
    heading: "text-green-900",
  },
};

export default function H1BAmendmentChecker() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<AnswerMap>({});
  const [done, setDone] = useState(false);

  const question = QUESTIONS[step];
  const result = useMemo(() => (done ? compute(answers) : null), [done, answers]);
  const meta = result ? VERDICT_META[result.verdict] : null;

  function answer(value: string) {
    const next = { ...answers, [question.id]: value };
    setAnswers(next);
    if (question.id === "employer" && value === "yes") {
      setDone(true);
      return;
    }
    if (step + 1 < QUESTIONS.length) {
      setStep(step + 1);
    } else {
      setDone(true);
    }
  }

  function back() {
    if (done) {
      setDone(false);
      // From the transfer verdict, going back returns to question 1,
      // since that verdict was decided there.
      setStep(answers.employer === "yes" ? 0 : QUESTIONS.length - 1);
      return;
    }
    if (step > 0) setStep(step - 1);
  }

  function restart() {
    setAnswers({});
    setStep(0);
    setDone(false);
  }

  if (result && meta) {
    return (
      <div>
        <div className={meta.box}>
          <p className={`font-semibold ${meta.heading}`}>{meta.title}</p>
          {result.triggers.length > 0 && (
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm">
              {result.triggers.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          )}
        </div>

        <div className="mt-6 space-y-3">
          {result.notes.map((n, i) => (
            <p key={i} className="text-sm leading-relaxed text-slate-600">
              {n}
            </p>
          ))}
        </div>

        {result.verdict === "amendment" && (
          <div className="mt-6 rounded-lg border border-slate-200 bg-white p-5">
            <p className="font-semibold text-slate-900">
              What to file — amendment checklist
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-600">
              <li>
                New certified LCA (Form ETA-9035) from the Department of
                Labor for the new worksite or wage — certified BEFORE
                the I-129 is filed.
              </li>
              <li>
                Amended Form I-129 petition to USCIS, reflecting the
                updated employment terms.
              </li>
              <li>
                Employer support letter explaining exactly what changed
                and why.
              </li>
              <li>
                Updated offer letter / job description, prior approval
                notice (Form I-797), recent pay stubs, passport and
                I-94.
              </li>
              <li>
                Client letter or statement of work, if the new worksite
                is a third-party site.
              </li>
              <li>
                Optional premium processing (Form I-907, $2,965) for a
                decision within 15 business days.
              </li>
            </ul>
            <p className="mt-3 text-sm text-slate-500">
              An amended petition filed without an extension request is
              exempt from the ACWIA training fee. Confirm the exact
              total on the current USCIS H and L filing fees page
              before filing — fees depend on employer size and
              nonprofit status.
            </p>
          </div>
        )}

        {result.verdict === "transfer" && (
          <div className="mt-6">
            <Link
              href="/tools/h1b-transfer"
              className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900"
            >
              Open the H-1B Transfer Guide — fees, timeline &amp;
              eligibility checker
            </Link>
          </div>
        )}

        <div className="mt-6">
          <p className="text-sm font-semibold text-slate-900">
            Your answers
          </p>
          <ul className="mt-2 space-y-1 text-sm text-slate-600">
            {QUESTIONS.filter((q) => answers[q.id]).map((q) => {
              const opt = q.options.find((o) => o.value === answers[q.id]);
              return (
                <li key={q.id}>
                  {q.q} — <strong>{opt ? opt.label : answers[q.id]}</strong>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="mt-6 flex gap-3">
          <button
            type="button"
            onClick={back}
            className="rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50"
          >
            Change an answer
          </button>
          <button
            type="button"
            onClick={restart}
            className="rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-800"
          >
            Start over
          </button>
        </div>

        <p className="mt-6 text-xs leading-relaxed text-slate-500">
          This checker is for informational purposes only and is not
          legal advice. Whether a change is &ldquo;material&rdquo; can
          depend on facts this quiz cannot see — when in doubt, confirm
          with an immigration attorney before the change takes effect.
        </p>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-4 flex items-center justify-between text-sm text-slate-500">
        <span>
          Question {step + 1} of {QUESTIONS.length}
        </span>
        {step > 0 && (
          <button
            type="button"
            onClick={back}
            className="font-semibold text-blue-700 underline underline-offset-2"
          >
            Back
          </button>
        )}
      </div>
      <div className="mb-6 h-2 overflow-hidden rounded-full bg-slate-100">
        <div
          className="h-full rounded-full bg-blue-700 transition-all"
          style={{ width: `${((step + 1) / QUESTIONS.length) * 100}%` }}
        />
      </div>

      <h2 className="text-xl font-bold text-slate-900">{question.q}</h2>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">
        {question.sub}
      </p>

      <div className="mt-5 space-y-3">
        {question.options.map((opt) => (
          <button
            key={opt.value}
            type="button"
            onClick={() => answer(opt.value)}
            className="block w-full rounded-lg border border-slate-200 bg-white p-4 text-left hover:border-blue-600 hover:bg-blue-50"
          >
            <span className="font-semibold text-slate-900">
              {opt.label}
            </span>
            {opt.hint && (
              <span className="mt-1 block text-sm text-slate-500">
                {opt.hint}
              </span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
