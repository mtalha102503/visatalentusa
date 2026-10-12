import type { Metadata } from "next";
import Link from "next/link";
import H1BTransferTool from "./H1BTransferTool";

export const metadata: Metadata = {
  title:
    "H-1B Transfer Guide 2026 — Fees, Timeline & Eligibility Checker | VisaTalentUSA",
  description:
    "Free H-1B transfer tool: calculate petition fees, estimate your transfer timeline, check eligibility, and track your document checklist. Everything about changing H-1B employers in one place.",
  keywords: [
    "h1b transfer",
    "h1b transfer fee",
    "h1b transfer timeline",
    "h1b transfer process",
    "h1b change of employer",
    "h1b transfer calculator",
    "h1b portability",
    "ac21 h1b transfer",
  ],
  alternates: { canonical: "https://visatalentusa.com/tools/h1b-transfer" },
  openGraph: {
    title: "H-1B Transfer Guide 2026 — Fees, Timeline & Eligibility | VisaTalentUSA",
    description:
      "Calculate H-1B transfer fees, estimate timelines, check eligibility, and track documents. Free interactive tool.",
    url: "https://visatalentusa.com/tools/h1b-transfer",
    type: "website",
    siteName: "VisaTalentUSA",
  },
  twitter: {
    card: "summary_large_image",
    title: "H-1B Transfer Guide — Fees, Timeline & Eligibility Checker",
    description:
      "Free tool: H-1B transfer fee calculator, timeline estimator, eligibility quiz, and document checklist.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const FAQS = [
  {
    q: "What is an H-1B transfer?",
    a: "An H-1B \"transfer\" is technically a change-of-employer petition: your new employer files a new Form I-129 petition with USCIS asking to employ you in H-1B status. Nothing is literally transferred — it is a brand-new petition that reuses your existing cap count, so no new lottery registration is needed if you were already counted against the cap.",
  },
  {
    q: "How much does an H-1B transfer cost?",
    a: "For the employer, typical government fees are the $460 I-129 filing fee, a $750 or $1,500 ACWIA training fee (depending on employer size), and a $500 fraud prevention fee — roughly $1,710 to $2,460 before optional premium processing ($2,805). By law the employer must pay the ACWIA and fraud fees; the worker cannot be asked to cover them. Use the fee calculator above for an exact breakdown.",
  },
  {
    q: "How long does an H-1B transfer take?",
    a: "With regular processing, expect roughly 2–4 months from filing to approval, varying by service center. With premium processing ($2,805), USCIS guarantees a decision — approval, denial, or RFE — within 15 business days. Importantly, under AC21 portability you may begin working for the new employer as soon as the petition is filed (receipt issued), without waiting for approval.",
  },
  {
    q: "Can I start working for the new employer before approval?",
    a: "Yes — this is AC21 portability. Once USCIS issues the receipt notice for the new employer's timely-filed, non-frivolous H-1B petition, you are authorized to begin employment with the new employer while the petition is pending. You do not need to wait for the approval notice.",
  },
  {
    q: "Do I need to go through the H-1B lottery again to transfer?",
    a: "No, if you have already been counted against the cap. A change-of-employer petition reuses your existing cap number — no new registration or lottery selection is required. The main exception is if you are moving from a cap-exempt employer to a cap-subject employer without ever having been counted; that generally requires going through the cap.",
  },
  {
    q: "What happens if my H-1B transfer is denied?",
    a: "If the transfer petition is denied while your underlying H-1B status with the prior employer is still valid and you have not yet left that job, you generally remain in status with the original employer. If you already started working for the new employer under AC21 portability and the petition is denied, you fall out of status unless you have another valid status — which is why many workers wait for approval or keep the old job until the receipt arrives. Discuss timing strategy with your attorney.",
  },
  {
    q: "Does the $100,000 H-1B fee apply to transfers?",
    a: "The September 2025 proclamation announced a $100,000 fee on certain new H-1B petitions, and its scope and legal status have been contested since. Whether it applies to change-of-employer petitions in your case is a question for your immigration attorney — toggle it in the fee calculator above to see the arithmetic, but do not rely on it without legal confirmation.",
  },
  {
    q: "What documents do I need for an H-1B transfer?",
    a: "The standard package includes your passport, I-94 record, recent pay stubs (last 2–3 months), current I-797 approval notice, the new job offer letter, a certified LCA for the new role, degree certificates and transcripts (plus a credential evaluation for foreign degrees), and your resume. Use the interactive document checklist above to track your progress.",
  },
];

export default function H1BTransferPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        name: "H-1B Transfer Guide — Fees, Timeline & Eligibility Checker",
        description:
          "Free interactive H-1B transfer tool: fee calculator with USCIS fee breakdown, regular vs premium timeline estimator with AC21 portability guidance, 5-question eligibility checker, and a document checklist with progress tracking.",
        url: "https://visatalentusa.com/tools/h1b-transfer",
        applicationCategory: "EducationalApplication",
        operatingSystem: "Web",
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        author: {
          "@type": "Organization",
          name: "VisaTalentUSA",
          url: "https://visatalentusa.com/",
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://visatalentusa.com/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Tools",
            item: "https://visatalentusa.com/tools/h1b-transfer",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "H-1B Transfer Guide",
            item: "https://visatalentusa.com/tools/h1b-transfer",
          },
        ],
      },
      {
        "@type": "HowTo",
        name: "How to plan an H-1B transfer",
        step: [
          {
            "@type": "HowToStep",
            name: "Calculate the fees",
            text: "Select the new employer's size and options like premium processing to see the full USCIS fee breakdown the employer will pay.",
          },
          {
            "@type": "HowToStep",
            name: "Estimate your timeline",
            text: "Compare regular vs premium processing timelines and learn how AC21 portability lets you start work once the petition is filed.",
          },
          {
            "@type": "HowToStep",
            name: "Check your eligibility",
            text: "Answer five quick questions about your status, cap count, and documentation to screen for common transfer issues.",
          },
          {
            "@type": "HowToStep",
            name: "Gather your documents",
            text: "Work through the interactive checklist — passport, I-94, pay stubs, approval notices, offer letter, LCA, and credentials — and track your progress.",
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: FAQS.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
        <Link href="/" className="hover:text-blue-700 underline underline-offset-2">
          Home
        </Link>
        <span className="mx-2">/</span>
        <span className="text-slate-700">H-1B Transfer Guide</span>
      </nav>

      <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
        H-1B Transfer Guide 2026
      </h1>
      <div className="mt-4 space-y-3 text-slate-600">
        <p className="text-lg">
          Changing H-1B employers? This free tool covers the{" "}
          <strong>four questions everyone asks</strong>:{" "}
          <strong>what it costs</strong> (fee calculator),{" "}
          <strong>how long it takes</strong> (timeline estimator),{" "}
          <strong>whether you qualify</strong> (eligibility checker), and{" "}
          <strong>what to prepare</strong> (document checklist).
        </p>
        <p>
          No new lottery is needed if you were already counted against the
          cap — and under AC21 portability you can start the new job once the
          petition is filed. Work through the tabs below.
        </p>
      </div>

      <div className="mt-8">
        <H1BTransferTool />
      </div>

      {/* ---- How to use ---- */}
      <section className="mt-14">
        <h2 className="text-2xl font-bold text-slate-900">
          How to Use the H-1B Transfer Tool
        </h2>
        <div className="mt-6 space-y-4">
          {[
            {
              n: 1,
              t: "Calculate the fees",
              d: "Open the Fee Calculator tab and select the new employer's size — that sets the ACWIA training fee ($750 vs $1,500). Toggle premium processing to see the 15-day option. The breakdown shows every USCIS fee line by line.",
            },
            {
              n: 2,
              t: "Estimate your timeline",
              d: "Switch to the Timeline Estimator and compare regular (2–4 months) vs premium (15 business days) processing. The visual timeline shows each stage — and the AC21 note explains when you can legally start work.",
            },
            {
              n: 3,
              t: "Check your eligibility",
              d: "Answer the five yes/no questions honestly — status, cap count, 6-year clock, job offer, and recent pay stubs. You'll get an instant read: likely eligible, needs review, or see an attorney first.",
            },
            {
              n: 4,
              t: "Track your documents",
              d: "Use the Document Checklist tab as your packing list. Check items off as you collect them — the progress bar shows how close your petition package is to complete.",
            },
          ].map((s) => (
            <div
              key={s.n}
              className="rounded-lg border border-slate-200 bg-white p-5"
            >
              <p className="font-semibold text-slate-900">
                <span className="mr-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-800">
                  {s.n}
                </span>
                {s.t}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {s.d}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ---- Who should use ---- */}
      <section className="mt-14">
        <h2 className="text-2xl font-bold text-slate-900">
          Who Should Use the H-1B Transfer Tool
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {[
            {
              t: "H-1B workers switching jobs",
              d: "The core audience: see costs, timelines, and eligibility before you resign — and know exactly when AC21 lets you start.",
            },
            {
              t: "F-1 / OPT students with offers",
              d: "If your H-1B was already approved or you're cap-counted, the same transfer mechanics apply when you move employers later.",
            },
            {
              t: "HR & hiring managers",
              d: "Budget the petition accurately (employer-size fee differences matter) and set realistic start-date expectations with candidates.",
            },
            {
              t: "Immigration attorneys",
              d: "A client-friendly explainer to share: fee math, timeline visuals, and a document checklist that reduces back-and-forth.",
            },
          ].map((c) => (
            <div
              key={c.t}
              className="rounded-lg border border-slate-200 bg-white p-5"
            >
              <p className="font-bold text-slate-900">{c.t}</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {c.d}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ---- Understanding transfers ---- */}
      <section className="mt-14">
        <h2 className="text-2xl font-bold text-slate-900">
          How H-1B Transfers Work
        </h2>
        <p className="mt-4 leading-relaxed text-slate-600">
          Despite the name, nothing is &quot;transferred.&quot; Your new
          employer files a <strong>new Form I-129 petition</strong> with
          USCIS, requesting H-1B classification for you. Because you were
          already counted against the annual cap,{" "}
          <strong>no new lottery registration is needed</strong> — the petition
          reuses your existing cap number. The petition must include a
          certified Labor Condition Application (LCA) for the new role and
          evidence that the job qualifies as a specialty occupation.
        </p>

        <h3 className="mt-8 text-xl font-bold text-slate-900">
          AC21 Portability: Start Work Before Approval
        </h3>
        <p className="mt-3 leading-relaxed text-slate-600">
          The single most useful rule in H-1B transfers: under{" "}
          <strong>AC21 §105 portability</strong>, once the new employer&apos;s
          petition is timely filed and USCIS issues the receipt notice, you
          may <strong>begin working for the new employer immediately</strong>{" "}
          — approval can come months later. The risk: if the petition is
          ultimately denied after you&apos;ve started, you fall out of status.
          Many workers mitigate this by waiting for the receipt (not the
          approval) before resigning, or by paying for premium processing to
          collapse the uncertainty window to 15 business days.
        </p>

        <h3 className="mt-8 text-xl font-bold text-slate-900">
          H-1B Transfer Fees at a Glance
        </h3>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[560px] border-collapse text-sm">
            <thead>
              <tr className="bg-slate-50 text-left text-xs uppercase tracking-wide text-slate-500">
                <th className="border border-slate-200 px-4 py-2.5">Fee</th>
                <th className="border border-slate-200 px-4 py-2.5">Amount</th>
                <th className="border border-slate-200 px-4 py-2.5">
                  Who pays
                </th>
              </tr>
            </thead>
            <tbody className="text-slate-700">
              <tr>
                <td className="border border-slate-200 px-4 py-2.5 font-semibold">
                  Form I-129 base filing fee
                </td>
                <td className="border border-slate-200 px-4 py-2.5">$460</td>
                <td className="border border-slate-200 px-4 py-2.5">
                  Employer
                </td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-4 py-2.5 font-semibold">
                  ACWIA training fee (1–25 employees)
                </td>
                <td className="border border-slate-200 px-4 py-2.5">$750</td>
                <td className="border border-slate-200 px-4 py-2.5">
                  Employer (by law)
                </td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-4 py-2.5 font-semibold">
                  ACWIA training fee (26+ employees)
                </td>
                <td className="border border-slate-200 px-4 py-2.5">$1,500</td>
                <td className="border border-slate-200 px-4 py-2.5">
                  Employer (by law)
                </td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-4 py-2.5 font-semibold">
                  Fraud prevention &amp; detection fee
                </td>
                <td className="border border-slate-200 px-4 py-2.5">$500</td>
                <td className="border border-slate-200 px-4 py-2.5">
                  Employer (by law)
                </td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-4 py-2.5 font-semibold">
                  Premium processing (optional)
                </td>
                <td className="border border-slate-200 px-4 py-2.5">$2,805</td>
                <td className="border border-slate-200 px-4 py-2.5">
                  Employer or worker
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-sm text-slate-500">
          Fee schedule per USCIS — verify current amounts at uscis.gov before
          filing, as fees change. The 2025 proclamation&apos;s $100,000 fee is
          intentionally excluded from this table pending legal clarity; toggle
          it in the calculator above to see the arithmetic.
        </p>

        <h3 className="mt-8 text-xl font-bold text-slate-900">
          Common H-1B Transfer Mistakes
        </h3>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-600">
          <li>
            <strong>Resigning before the receipt arrives.</strong> AC21
            portability requires a filed petition with receipt — quitting on
            the promise of a filing leaves you unprotected.
          </li>
          <li>
            <strong>Letting status lapse.</strong> A gap between jobs beyond
            the 60-day grace period (or without valid status) can doom the
            transfer.
          </li>
          <li>
            <strong>Assuming the lottery is needed again.</strong> Cap-counted
            workers don&apos;t re-enter the lottery — but cap-exempt-to-cap
            moves are the tricky exception.
          </li>
          <li>
            <strong>Ignoring the 6-year clock.</strong> Time recapture and
            AC21 extensions (pending PERM/I-140) change the math — confirm
            remaining H-1B time before switching.
          </li>
        </ul>
      </section>

      {/* ---- FAQs ---- */}
      <section className="mt-14">
        <h2 className="text-2xl font-bold text-slate-900">
          H-1B Transfer FAQs
        </h2>
        <div className="mt-6 space-y-4">
          {FAQS.map((f) => (
            <details
              key={f.q}
              className="rounded-lg border border-slate-200 bg-white p-5"
            >
              <summary className="cursor-pointer font-semibold text-slate-900">
                {f.q}
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* ---- Related tools ---- */}
      <section className="mt-14 rounded-xl bg-slate-50 p-6">
        <h2 className="text-xl font-bold text-slate-900">Related tools</h2>
        <ul className="mt-4 space-y-3 text-sm">
          <li>
            <Link
              href="/tools/sponsor-match"
              className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900"
            >
              H-1B Sponsor Match Finder
            </Link>
            <p className="mt-1 text-slate-600">
              Find companies that actually file H-1B petitions for your job
              title — the best place to start a transfer job search.
            </p>
          </li>
          <li>
            <Link
              href="/tools/wage-level"
              className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900"
            >
              H-1B Wage Level Checker
            </Link>
            <p className="mt-1 text-slate-600">
              Check whether your new offer&apos;s salary lands in the right
              DOL wage level before the LCA is filed.
            </p>
          </li>
          <li>
            <Link
              href="/tools/lottery-odds"
              className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900"
            >
              H-1B Lottery Odds Calculator
            </Link>
            <p className="mt-1 text-slate-600">
              For cap-exempt-to-cap moves that do need the lottery — estimate
              your wage-weighted selection odds.
            </p>
          </li>
        </ul>
      </section>

      <p className="mt-10 text-xs leading-relaxed text-slate-500">
        Methodology: fee amounts reflect the USCIS fee schedule for Form I-129
        H-1B petitions; timeline ranges are typical adjudication windows, not
        guarantees. This tool is for informational purposes only and is not
        legal advice. Immigration outcomes depend on individual circumstances —
        consult a licensed immigration attorney before changing employers.
        VisaTalentUSA is an independent research project, not affiliated with
        USCIS or DOL.
      </p>
    </div>
  );
}
