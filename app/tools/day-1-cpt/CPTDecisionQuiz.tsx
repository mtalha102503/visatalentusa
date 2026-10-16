"use client";

import { useState } from "react";

const QUESTIONS = [
  {
    id: "lottery",
    question: "Were you selected in the H-1B lottery?",
    options: [
      { id: "yes", label: "Yes, selected!", score: 0 },
      { id: "no", label: "No, not selected", score: 3 },
      { id: "waiting", label: "Waiting / not applied yet", score: 1 },
    ],
  },
  {
    id: "opt_months",
    question: "How many months of full-time CPT have you already used (at this degree level)?",
    options: [
      { id: "0-6", label: "0–6 months", score: 3 },
      { id: "6-9", label: "6–9 months", score: 2 },
      { id: "9-12", label: "9–12 months", score: 0 },
      { id: "12+", label: "12+ months", score: -3 },
    ],
  },
  {
    id: "status",
    question: "What is your current status situation?",
    options: [
      { id: "opt-expiring", label: "OPT expiring soon, need to maintain status", score: 3 },
      { id: "opt-ok", label: "OPT valid, just want to keep working", score: 1 },
      { id: "new-student", label: "New/prospective student", score: 2 },
      { id: "other", label: "Other situation", score: 1 },
    ],
  },
  {
    id: "risk",
    question: "How do you feel about immigration risk?",
    options: [
      { id: "low", label: "I want the safest path, even if slower", score: 0 },
      { id: "medium", label: "I'll accept some risk if the school is legitimate", score: 2 },
      { id: "high", label: "I need to keep working no matter what", score: 3 },
    ],
  },
  {
    id: "school",
    question: "Have you verified the school's SEVP compliance and accreditation?",
    options: [
      { id: "yes", label: "Yes, thoroughly verified", score: 3 },
      { id: "partial", label: "Partially / not sure", score: 1 },
      { id: "no", label: "No, haven't checked yet", score: -1 },
    ],
  },
];

export default function CPTDecisionQuiz() {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResult, setShowResult] = useState(false);

  const currentQ = QUESTIONS.find((q) => !answers[q.id]);
  const progress = (Object.keys(answers).length / QUESTIONS.length) * 100;
  const isComplete = Object.keys(answers).length === QUESTIONS.length;

  const totalScore = QUESTIONS.reduce((sum, q) => {
    const ansId = answers[q.id];
    const opt = q.options.find((o) => o.id === ansId);
    return sum + (opt?.score ?? 0);
  }, 0);

  const getVerdict = () => {
    if (answers["opt_months"] === "12+") {
      return {
        color: "red",
        title: "🔴 Stop — Reconsider Your Plan",
        desc: "You've already used 12+ months of full-time CPT, which means OPT at this degree level is gone. More Day 1 CPT won't restore it. Your better paths: complete a higher degree level (regains OPT), explore H-1B cap-exempt employers, or consult an immigration attorney about O-1/L-1 options.",
      };
    }
    if (answers["school"] === "no") {
      return {
        color: "amber",
        title: "🟡 Pause — Verify First",
        desc: "Before anything else, verify the school: SEVP certification, regional accreditation, and that CPT is genuinely required in the curriculum (not optional). An unverified school is the #1 risk factor. Use our School Safety Checklist below, then retake this quiz.",
      };
    }
    if (totalScore >= 10) {
      return {
        color: "green",
        title: "🟢 Day 1 CPT Could Work For You",
        desc: "Your situation aligns well with Day 1 CPT: you need status continuity, have OPT buffer remaining, and accept the risk profile. Next steps: (1) verify the school with the checklist below, (2) track every CPT month with our OPT calculator, (3) keep all academic records for future USCIS review.",
      };
    }
    if (totalScore >= 5) {
      return {
        color: "amber",
        title: "🟡 Maybe — Proceed With Caution",
        desc: "Day 1 CPT is possible but not clearly ideal for you. Weigh it against alternatives: cap-gap extension (if H-1B selected), STEM OPT (if eligible), or waiting for the next lottery. If you proceed, verify the school thoroughly and monitor your 12-month CPT limit closely.",
      };
    }
    return {
      color: "red",
      title: "🔴 Probably Not Your Best Move",
      desc: "Based on your answers, Day 1 CPT carries more risk than benefit right now. Consider: STEM OPT extension, cap-exempt employers (universities/nonprofits — no lottery needed), or remote work from abroad while re-entering the lottery. Talk to an immigration attorney about your specific case.",
    };
  };

  const reset = () => {
    setAnswers({});
    setShowResult(false);
  };

  const verdict = getVerdict();

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
      <h3 className="text-xl font-bold text-slate-900">
        🧭 Should I Do Day 1 CPT? — Decision Quiz
      </h3>
      <p className="mt-2 text-sm text-slate-600">
        Answer 5 questions for a personalized recommendation based on your situation.
      </p>

      {/* Progress */}
      <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-100">
        <div
          className="h-full rounded-full bg-blue-600 transition-all"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="mt-1 text-xs text-slate-500">
        Question {Object.keys(answers).length + (isComplete ? 0 : 1)} of {QUESTIONS.length}
      </p>

      {!showResult && currentQ && (
        <div className="mt-6">
          <p className="text-lg font-semibold text-slate-900">{currentQ.question}</p>
          <div className="mt-4 space-y-2">
            {currentQ.options.map((opt) => (
              <button
                key={opt.id}
                onClick={() => {
                  setAnswers({ ...answers, [currentQ.id]: opt.id });
                  if (Object.keys(answers).length + 1 === QUESTIONS.length) {
                    setTimeout(() => setShowResult(true), 300);
                  }
                }}
                className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-left text-sm font-medium text-slate-700 transition hover:border-blue-500 hover:bg-blue-50"
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {showResult && (
        <div
          className={`mt-6 rounded-xl border-2 p-6 ${
            verdict.color === "green"
              ? "border-green-300 bg-green-50"
              : verdict.color === "amber"
              ? "border-amber-300 bg-amber-50"
              : "border-red-300 bg-red-50"
          }`}
        >
          <p
            className={`text-lg font-bold ${
              verdict.color === "green"
                ? "text-green-800"
                : verdict.color === "amber"
                ? "text-amber-800"
                : "text-red-800"
            }`}
          >
            {verdict.title}
          </p>
          <p
            className={`mt-2 text-sm ${
              verdict.color === "green"
                ? "text-green-700"
                : verdict.color === "amber"
                ? "text-amber-700"
                : "text-red-700"
            }`}
          >
            {verdict.desc}
          </p>
          <button
            onClick={reset}
            className="mt-4 rounded-lg bg-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-300"
          >
            ↺ Retake Quiz
          </button>
        </div>
      )}

      <p className="mt-4 text-xs text-slate-400">
        Educational guidance only — not legal advice. Always consult a licensed
        immigration attorney for your specific situation.
      </p>
    </div>
  );
}
