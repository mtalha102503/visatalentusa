import type { Metadata } from "next";
import Link from "next/link";
import H1BAmendmentChecker from "./H1BAmendmentChecker";

export const metadata: Metadata = {
  title: "H-1B Amendment Checker: Do You Need an Amended Petition?",
  description:
    "Free H-1B amendment checker: answer 7 questions about your job change — location, duties, salary, hours, client site, remote work — and get an instant verdict on whether you need a new LCA and an amended H-1B petition, and by when.",
  keywords: [
    "h1b amendment",
    "do i need h1b amendment",
    "when is h1b amendment required",
    "h1b amendment processing time",
    "h1b amendment fees",
    "h1b amendment vs extension",
    "h1b amendment new location",
    "h1b amendment documents",
    "h1b amendment checklist",
    "h1b amendment work from home",
  ],
  alternates: { canonical: "https://visatalentusa.com/tools/h1b-amendment-checker" },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "VisaTalentUSA — H-1B Sponsor Database" }],
    title: "H-1B Amendment Checker — Do You Need an Amended Petition?",
    description:
      "Answer 7 questions about your job change and get an instant verdict: amendment required, transfer instead, or no filing needed.",
    url: "https://visatalentusa.com/tools/h1b-amendment-checker",
    type: "website",
    siteName: "VisaTalentUSA",
  },
  twitter: {
    card: "summary_large_image",
    title: "H-1B Amendment Checker — Do You Need an Amended Petition?",
    description:
      "Free tool: 7 questions, instant verdict on whether your job change needs a new LCA and an amended H-1B petition.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const FAQS = [
  {
    q: "What is an H-1B amendment?",
    a: "An amended H-1B petition (Form I-129) that your employer files with USCIS when the terms of your approved H-1B job change in a material way — a new worksite outside the approved area, materially different duties, a switch between full-time and part-time work, or a new client site. It is filed by the same employer; a new employer means a transfer petition instead, not an amendment.",
  },
  {
    q: "When is an H-1B amendment required?",
    a: "Under 8 CFR 214.2(h)(2)(i)(E) and the Matter of Simeio Solutions decision (2015), an amended or new petition is required whenever there is a material change in the terms and conditions of employment. The classic triggers are: a move outside the metro area (MSA) on the certified LCA, materially different job duties, a full-time to part-time (or reverse) change, and a move to a new third-party client site. The amendment must be filed before the change takes effect.",
  },
  {
    q: "Do I need an amendment if I move within the same city?",
    a: "Generally no, for the location alone. If the new worksite is in the same metropolitan area (MSA) covered by your certified LCA, the move is usually not a material change. Two caveats: your LCA must cover the area, and a home worksite must be listed on it. A move to a different MSA needs a new LCA and an amended petition first.",
  },
  {
    q: "How long does an H-1B amendment take?",
    a: "Under standard processing, a few months, varying noticeably by service center. With premium processing (Form I-907, $2,965), USCIS guarantees a decision — approval, denial, or a Request for Evidence — within 15 business days. Timing matters more than speed here: the amendment must be filed before the change takes effect, so file early.",
  },
  {
    q: "How much does an H-1B amendment cost?",
    a: "An amended petition filed without an extension request is exempt from the ACWIA training fee, which makes a standalone amendment cheaper than a new H-1B petition. The exact total depends on employer size and nonprofit status — confirm it on the current USCIS H and L filing fees page before filing. Premium processing is an optional $2,965 on top.",
  },
  {
    q: "Can I start the new role or location while the amendment is pending?",
    a: "The safe answer is: keep working under the existing approved terms until the amendment is approved. Unlike a change of employer — where AC21 portability lets you start on receipt — an amendment has no equivalent portability rule for the new terms. Starting the new location or duties before approval carries status risk, so most attorneys advise waiting. Discuss your specific timing with your attorney.",
  },
  {
    q: "What is the difference between an amendment and a transfer?",
    a: "Same employer, changed job = amendment (amended I-129). New employer = transfer (a brand-new I-129 from the new employer that reuses your existing cap count, so no new lottery is needed if you were already counted). Under AC21 portability, transfer workers can start on receipt; amendment workers have no such rule for new terms. Use the checker above — its first question routes you to the right one.",
  },
  {
    q: "What happens if I change jobs without filing a required amendment?",
    a: "You risk falling out of status, and the problem often surfaces later: a site visit that finds you at an unlisted worksite, a future extension or transfer petition that exposes the unreported change, or a Notice of Intent to Revoke. Wage problems compound it — pay below the LCA required wage is a violation whether or not an amendment was filed. If a change already happened without a filing, talk to an attorney promptly about a late amendment.",
  },
];

export default function H1BAmendmentCheckerPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        name: "H-1B Amendment Checker — Do You Need an Amended Petition?",
        description:
          "Free interactive H-1B amendment checker: 7 questions about employer, location, duties, salary, hours, client site, and remote work, with an instant verdict on whether a new LCA and an amended H-1B petition are required, plus a filing checklist.",
        url: "https://visatalentusa.com/tools/h1b-amendment-checker",
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
            item: "https://visatalentusa.com/tools/h1b-amendment-checker",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "H-1B Amendment Checker",
            item: "https://visatalentusa.com/tools/h1b-amendment-checker",
          },
        ],
      },
      {
        "@type": "HowTo",
        name: "How to check whether you need an H-1B amendment",
        step: [
          {
            "@type": "HowToStep",
            name: "Answer the 7 questions",
            text: "Work through employer, location, duties, salary, hours, client site, and remote work — the checker routes transfers to the transfer guide automatically.",
          },
          {
            "@type": "HowToStep",
            name: "Read your verdict and triggers",
            text: "Get an instant verdict — amendment required, transfer instead, or no filing needed — with the exact triggers behind it and the warnings that apply.",
          },
          {
            "@type": "HowToStep",
            name: "File before the change, if required",
            text: "Get a new certified LCA first, then file the amended Form I-129 before the change takes effect. Use the checklist on the results screen.",
          },
          {
            "@type": "HowToStep",
            name: "Keep your records",
            text: "Keep the certified LCA, approval notice, and pay records showing the LCA wage is maintained — site visits check exactly these.",
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
        <span className="text-slate-700">H-1B Amendment Checker</span>
      </nav>

      <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
        H-1B Amendment Checker
      </h1>
      <div className="mt-4 space-y-3 text-slate-600">
        <p className="text-lg">
          Changed jobs, moved cities, got promoted, or switched to remote
          work? This free tool answers the{" "}
          <strong>one question everyone gets wrong</strong>: do you need
          an amended H-1B petition — and if so, by when?
        </p>
        <p>
          Answer 7 questions about your change. You will get an instant
          verdict, the exact triggers behind it, and a filing checklist
          if an amendment is required. The single most important rule:
          an amendment must be filed <strong>before</strong> the change
          takes effect, not after.
        </p>
      </div>

      <div className="mt-8">
        <H1BAmendmentChecker />
      </div>

      {/* ---- How to use ---- */}
      <section className="mt-14">
        <h2 className="text-2xl font-bold text-slate-900">
          How to Use the H-1B Amendment Checker
        </h2>
        <div className="mt-6 space-y-4">
          {[
            {
              n: 1,
              t: "Answer honestly, one question at a time",
              d: "The 7 questions cover employer, location, duties, salary, hours, client site, and remote work. If you are changing employers, the checker stops at question 1 — that is a transfer, not an amendment.",
            },
            {
              n: 2,
              t: "Read the verdict and the triggers",
              d: "Three outcomes are possible: amendment required (with every trigger listed), transfer instead, or no filing needed. The notes explain the edge cases — short trips, same-MSA moves, and raises.",
            },
            {
              n: 3,
              t: "Follow the filing checklist",
              d: "If an amendment is required, the results screen gives you the sequence: new certified LCA first, then the amended I-129, plus the support letter and evidence to attach.",
            },
            {
              n: 4,
              t: "Check the timing before you move",
              d: "The amendment must be filed before the change takes effect. If the change already happened, talk to an attorney promptly about a late amendment — do not wait for a site visit to surface it.",
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
          Who Should Use the H-1B Amendment Checker
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {[
            {
              t: "H-1B workers relocating",
              d: "Moving cities is the most common amendment trigger — the MSA test in question 2 decides it in seconds.",
            },
            {
              t: "Workers changing roles or going remote",
              d: "Promotions, duty changes, and work-from-home moves all change petition terms. Check before the change, not after.",
            },
            {
              t: "Consulting and staffing employees",
              d: "Client-site changes bring their own LCA and evidence rules. The checker flags the new-client trigger explicitly.",
            },
            {
              t: "HR & immigration teams",
              d: "A quick screen before any internal move: run the change through the checker and route amendments, transfers, and no-filing cases correctly.",
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

      {/* ---- How amendments work ---- */}
      <section className="mt-14">
        <h2 className="text-2xl font-bold text-slate-900">
          How H-1B Amendments Work
        </h2>
        <p className="mt-4 leading-relaxed text-slate-600">
          An H-1B petition approves a specific job: a specific employer,
          a specific role, a specific worksite area, and a specific
          wage. When those terms change materially, the old approval no
          longer describes the job — so the employer must file an
          amended petition that does. The governing rule is{" "}
          <strong>8 CFR 214.2(h)(2)(i)(E)</strong>, and the{" "}
          <strong>Matter of Simeio Solutions (2015)</strong> decision
          made the timing explicit: the amended petition must be filed{" "}
          <strong>before</strong> the change takes effect.
        </p>

        <h3 className="mt-8 text-xl font-bold text-slate-900">
          The MSA test: the location rule that decides most cases
        </h3>
        <p className="mt-3 leading-relaxed text-slate-600">
          Your certified LCA covers an area of intended employment —
          effectively a metropolitan statistical area (MSA). A move
          within the same MSA is generally not a material change for
          the location alone. A move outside it is: the employer must
          obtain a new certified LCA for the new area and then file the
          amended petition. A home address counts as a worksite, so a
          work-from-home move to a different MSA follows the same rule.
          One narrow exception exists for short-term placement (up to
          30 days, extendable to 60 in limited cases) — temporary
          placement only, never a permanent move.
        </p>

        <h3 className="mt-8 text-xl font-bold text-slate-900">
          Amendment costs at a glance
        </h3>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[560px] border-collapse text-sm">
            <thead>
              <tr className="bg-slate-50 text-left text-xs uppercase tracking-wide text-slate-500">
                <th className="border border-slate-200 px-4 py-2.5">Item</th>
                <th className="border border-slate-200 px-4 py-2.5">Amount / note</th>
                <th className="border border-slate-200 px-4 py-2.5">
                  Who pays
                </th>
              </tr>
            </thead>
            <tbody className="text-slate-700">
              <tr>
                <td className="border border-slate-200 px-4 py-2.5 font-semibold">
                  Amended Form I-129 petition
                </td>
                <td className="border border-slate-200 px-4 py-2.5">
                  Per current USCIS H and L fee page (varies by employer
                  size and nonprofit status)
                </td>
                <td className="border border-slate-200 px-4 py-2.5">
                  Employer
                </td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-4 py-2.5 font-semibold">
                  ACWIA training fee
                </td>
                <td className="border border-slate-200 px-4 py-2.5">
                  Exempt when the amendment has no extension request
                </td>
                <td className="border border-slate-200 px-4 py-2.5">—</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-4 py-2.5 font-semibold">
                  Premium processing (optional)
                </td>
                <td className="border border-slate-200 px-4 py-2.5">$2,965</td>
                <td className="border border-slate-200 px-4 py-2.5">
                  Employer or worker
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-sm text-slate-500">
          Fee schedule per USCIS — verify current amounts before
          filing, as fees change. Premium processing guarantees a
          decision (approval, denial, or RFE) within 15 business days.
        </p>

        <h3 className="mt-8 text-xl font-bold text-slate-900">
          Common amendment mistakes
        </h3>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-600">
          <li>
            <strong>Filing after the move.</strong> The amendment must
            precede the change. A move first, filing later, is the most
            common and most avoidable violation.
          </li>
          <li>
            <strong>Treating a transfer as an amendment.</strong> A new
            employer needs a new petition with portability rules — not
            an amendment of the old employer&apos;s petition.
          </li>
          <li>
            <strong>Assuming a title change is safe.</strong> Titles do
            not decide — duties do. A promotion with materially
            different duties needs an amendment even if the employer
            and city stay the same.
          </li>
          <li>
            <strong>Forgetting the wage floor.</strong> Pay must stay at
            or above the LCA required wage at all times. A pay cut
            below it is a violation independent of any amendment.
          </li>
          <li>
            <strong>Working the new terms while pending.</strong> Unlike
            transfers, amendments carry no portability rule for new
            terms. Wait for approval before starting the new
            location or duties.
          </li>
        </ul>
      </section>

      {/* ---- FAQs ---- */}
      <section className="mt-14">
        <h2 className="text-2xl font-bold text-slate-900">
          H-1B Amendment FAQs
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
              href="/tools/h1b-transfer"
              className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900"
            >
              H-1B Transfer Guide
            </Link>
            <p className="mt-1 text-slate-600">
              Changing employers instead? Fees, timeline, eligibility
              checker, and document list for change-of-employer
              petitions.
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
              Check whether a new salary lands in the right DOL wage
              level before the new LCA is filed.
            </p>
          </li>
          <li>
            <Link
              href="/tools/sponsor-match"
              className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900"
            >
              H-1B Sponsor Match Finder
            </Link>
            <p className="mt-1 text-slate-600">
              Find companies that actually file H-1B petitions for your
              job title — useful if a change turns into a job search.
            </p>
          </li>
        </ul>
      </section>

      <p className="mt-10 text-xs leading-relaxed text-slate-500">
        Methodology: verdicts apply the material-change rule (8 CFR
        214.2(h)(2)(i)(E); Matter of Simeio Solutions, 2015), the MSA
        worksite rule, and the LCA wage-floor rule. Fee and timing
        figures reflect the USCIS fee schedule and standard
        adjudication practice, not guarantees. This tool is for
        informational purposes only and is not legal advice.
        Immigration outcomes depend on individual circumstances —
        consult a licensed immigration attorney before changing
        employers, worksites, or job terms. VisaTalentUSA is an
        independent research project, not affiliated with USCIS or
        DOL.
      </p>
    </div>
  );
}
