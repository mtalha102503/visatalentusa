import type { Metadata } from "next";
import Link from "next/link";
import CPTCalculator from "./CPTCalculator";
import CPTDecisionQuiz from "./CPTDecisionQuiz";
import SchoolSafetyChecklist from "./SchoolSafetyChecklist";

export const metadata: Metadata = {
  title: "Day 1 CPT 2026: Complete Guide — Rules, OPT Calculator, Risks & SEVP Updates | VisaTalentUSA",
  description:
    "Day 1 CPT explained: what it is, who qualifies, OPT eligibility calculator (12-month rule), August 2026 SEVP crackdown, risks, and FAQs. Independent, data-driven guide for F-1 students.",
  keywords: [
    "day 1 cpt",
    "day-1 cpt",
    "day 1 cpt universities",
    "cpt opt eligibility",
    "day 1 cpt risks",
    "sevp cpt guidance 2026",
    "cpt full-time 12 months opt",
  ],
  alternates: { canonical: "https://visatalentusa.com/tools/day-1-cpt" },
  openGraph: {
    title: "Day 1 CPT 2026: Rules, OPT Calculator & Risks | VisaTalentUSA",
    description:
      "Independent Day 1 CPT guide: OPT eligibility calculator, SEVP August 2026 updates, risks, and FAQs.",
    url: "https://visatalentusa.com/tools/day-1-cpt",
    type: "website",
    siteName: "VisaTalentUSA",
  },
  twitter: {
    card: "summary_large_image",
    title: "Day 1 CPT 2026 Guide + OPT Calculator",
    description:
      "Will Day 1 CPT kill your OPT? Use the calculator + read the independent guide.",
  },
  robots: { index: true, follow: true },
};

export default function Day1CPTPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        name: "Day 1 CPT Guide — OPT Eligibility Calculator & 2026 Rules",
        description:
          "Free interactive guide: Day 1 CPT rules, OPT eligibility calculator based on the 12-month full-time CPT rule, August 2026 SEVP guidance updates, risks, and FAQs.",
        url: "https://visatalentusa.com/tools/day-1-cpt",
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
          { "@type": "ListItem", position: 1, name: "Home", item: "https://visatalentusa.com/" },
          { "@type": "ListItem", position: 2, name: "Tools", item: "https://visatalentusa.com/tools/day-1-cpt" },
          { "@type": "ListItem", position: 3, name: "Day 1 CPT Guide", item: "https://visatalentusa.com/tools/day-1-cpt" },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is Day 1 CPT?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Day 1 CPT is Curricular Practical Training authorized from the first day of a graduate program, instead of after one full academic year. It is only available at schools whose programs require practical training from the start as an integral part of the curriculum. The school's DSO authorizes it — no USCIS application is needed.",
            },
          },
          {
            "@type": "Question",
            name: "Does Day 1 CPT affect OPT eligibility?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes — this is the critical rule. 12 months or more of full-time CPT (over 20 hours/week) eliminates OPT eligibility at that degree level. Part-time CPT (20 hours/week or less) never affects OPT, no matter how many months. Use the calculator above to check your situation.",
            },
          },
          {
            "@type": "Question",
            name: "Is Day 1 CPT legal in 2026?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Day 1 CPT itself remains legal under federal regulation, but SEVP's August 2026 guidance tightened enforcement: schools must now authorize CPT only where training is required for ALL students in the curriculum. Four higher-education associations sued DHS over this guidance in October 2026. Many universities (Berkeley, Penn, NYU, USC, UW) have tightened or paused CPT approvals.",
            },
          },
          {
            "@type": "Question",
            name: "What are the risks of Day 1 CPT?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Key risks: (1) Losing OPT eligibility after 12 months of full-time CPT; (2) USCIS scrutiny — officers may question whether the program was a legitimate academic program vs. a work visa workaround, especially at H-1B or green card stages; (3) SEVP enforcement — schools found non-compliant can lose authorization to enroll international students; (4) Status violations if CPT was improperly authorized.",
            },
          },
          {
            "@type": "Question",
            name: "Can I do Day 1 CPT and then get H-1B?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes — Day 1 CPT does not disqualify you from the H-1B lottery. Many students use Day 1 CPT to maintain work authorization and status while waiting for H-1B selection. However, ensure your CPT was properly authorized, as USCIS may review your F-1 history during H-1B adjudication.",
            },
          },
        ],
      },
    ],
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
        <Link href="/" className="hover:text-blue-700 underline underline-offset-2">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link href="/tools/lottery-odds" className="hover:text-blue-700 underline underline-offset-2">
          Tools
        </Link>
        <span className="mx-2">/</span>
        <span className="text-slate-700">Day 1 CPT Guide</span>
      </nav>

      <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
        Day 1 CPT 2026: The Independent Guide
      </h1>
      <div className="mt-4 max-w-3xl space-y-3 text-slate-600">
        <p className="text-lg">
          <strong>Day 1 CPT</strong> lets F-1 students work from the first day of
          a graduate program — but one wrong move can <strong>permanently kill
          your OPT</strong>. This independent guide (no university sales pitch)
          covers the rules, the <strong>August 2026 SEVP crackdown</strong>, real
          risks, and includes an <strong>OPT eligibility calculator</strong>.
        </p>
        <p className="rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800">
          ⚠️ <strong>October 2026 update:</strong> Four higher-education
          associations sued DHS over the August 2026 SEVP guidance. Schools
          including Berkeley, Penn, NYU, USC, and UW have tightened or paused
          CPT approvals. Verify current policy with your school&apos;s DSO
          before making decisions.
        </p>
      </div>

      <div className="mt-8 space-y-8">
        <CPTCalculator />
        <CPTDecisionQuiz />
        <SchoolSafetyChecklist />
      </div>

      {/* Guide Content */}
      <section className="mt-12 space-y-10">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">What Is Day 1 CPT?</h2>
          <div className="mt-4 space-y-4 text-slate-600">
            <p>
              <strong>Curricular Practical Training (CPT)</strong> is work
              authorization for F-1 students doing an internship, co-op, or
              practicum that is an <strong>integral part of their degree</strong>.
              Unlike OPT, CPT is authorized by your school&apos;s{" "}
              <strong>Designated School Official (DSO)</strong> — no USCIS
              application, no EAD card, no waiting months for approval.
            </p>
            <p>
              Normally, students must complete <strong>one full academic
              year</strong> before CPT eligibility. <strong>Day 1 CPT</strong> is
              the exception: graduate programs whose curriculum <em>requires</em>{" "}
              practical training from the start can authorize CPT from day one.
              This is common in programs designed for working professionals.
            </p>
            <p>
              <strong>Why students choose it:</strong> After not being selected
              in the H-1B lottery, Day 1 CPT lets F-1 students maintain legal
              status and keep working while waiting for the next lottery — our{" "}
              <Link href="/tools/lottery-results" className="text-blue-700 underline underline-offset-2">
                lottery results tracker
              </Link>{" "}
              shows why so many need a Plan B.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-slate-900">
            The 12-Month Rule: How CPT Kills OPT
          </h2>
          <div className="mt-4 space-y-4 text-slate-600">
            <p>
              This is the <strong>single most important rule</strong> in this
              entire guide:
            </p>
            <div className="rounded-xl border-2 border-red-200 bg-red-50 p-6">
              <p className="text-lg font-bold text-red-900">
                12+ months of full-time CPT = NO OPT at that degree level
              </p>
              <ul className="mt-3 space-y-2 text-sm text-red-800">
                <li>• <strong>Full-time</strong> = over 20 hours/week</li>
                <li>• <strong>Part-time</strong> (≤20 hrs/week) = never counts, unlimited months OK</li>
                <li>• CPT at a <strong>previous school, same degree level</strong> counts toward the total</li>
                <li>• CPT at a <strong>different degree level</strong> does not count</li>
                <li>• The rule comes from <strong>8 CFR 214.2(f)(10)</strong> and DHS Study in the States guidance</li>
              </ul>
            </div>
            <p>
              <strong>Example:</strong> You do 8 months of full-time Day 1 CPT
              during your master&apos;s, then transfer schools and do 5 more
              months of full-time CPT at the master&apos;s level. Total: 13
              months → <strong>OPT gone</strong>, even though neither school
              alone hit 12.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-slate-900">
            August 2026 SEVP Crackdown: What Changed
          </h2>
          <div className="mt-4 space-y-4 text-slate-600">
            <p>
              In <strong>August 2026</strong>, SEVP issued broadcast messages
              tightening CPT authorization standards. The key shift: schools must
              now authorize CPT <strong>only where the training is required for
              all students in the curriculum</strong> — not just available as an
              option.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-2"><span>•</span><span><strong>Schools tightening:</strong> UC Berkeley, Penn, NYU, USC, University of Washington, University of Rochester all changed or tightened CPT practices in late August 2026.</span></li>
              <li className="flex gap-2"><span>•</span><span><strong>Legal challenge:</strong> Four higher-education associations sued DHS on October 5, 2026. Until courts rule, schools apply the stricter standard.</span></li>
              <li className="flex gap-2"><span>•</span><span><strong>Stakes for schools:</strong> DHS warned non-compliant institutions could lose authorization to enroll international students entirely.</span></li>
              <li className="flex gap-2"><span>•</span><span><strong>What it means for you:</strong> CPT applications face more scrutiny, longer reviews, and possible pauses. Apply early and ensure your program genuinely requires the training.</span></li>
            </ul>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-slate-900">
            Honest Risks of Day 1 CPT
          </h2>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {[
              {
                title: "🔴 OPT Forfeiture",
                desc: "12+ months of full-time CPT permanently eliminates OPT at that degree level. This is irreversible — plan your months carefully with the calculator above.",
              },
              {
                title: "🔴 USCIS Scrutiny",
                desc: "At H-1B or green card stages, officers may examine whether your program was legitimate or a visa workaround. Keep all academic records, transcripts, and proof of coursework.",
              },
              {
                title: "🟡 SEVP Enforcement",
                desc: "If your school is found non-compliant, your CPT authorization — and potentially your F-1 status — could be at risk. Choose SEVP-compliant, accredited programs.",
              },
              {
                title: "🟡 Status Violation Risk",
                desc: "Working without valid CPT authorization, exceeding authorized hours, or working for an unauthorized employer = status violation. This can trigger bars on future immigration benefits.",
              },
            ].map((r, i) => (
              <div key={i} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="font-semibold text-slate-900">{r.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-slate-900">
            Day 1 CPT vs Alternatives
          </h2>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[600px] border-collapse text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-200 p-3 text-left font-semibold">Option</th>
                  <th className="border border-slate-200 p-3 text-left font-semibold">Work Authorized</th>
                  <th className="border border-slate-200 p-3 text-left font-semibold">OPT Impact</th>
                  <th className="border border-slate-200 p-3 text-left font-semibold">Best For</th>
                </tr>
              </thead>
              <tbody className="text-slate-600">
                <tr>
                  <td className="border border-slate-200 p-3 font-semibold">Day 1 CPT</td>
                  <td className="border border-slate-200 p-3">Yes, from day one</td>
                  <td className="border border-slate-200 p-3 text-red-600">12+ mo full-time kills OPT</td>
                  <td className="border border-slate-200 p-3">Maintaining status + income during H-1B wait</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 p-3 font-semibold">Regular CPT</td>
                  <td className="border border-slate-200 p-3">Yes, after 1 academic year</td>
                  <td className="border border-slate-200 p-3 text-red-600">Same 12-month rule</td>
                  <td className="border border-slate-200 p-3">Internships during degree</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 p-3 font-semibold">OPT</td>
                  <td className="border border-slate-200 p-3">Yes, 12 months (+24 STEM)</td>
                  <td className="border border-slate-200 p-3 text-green-600">N/A — this IS OPT</td>
                  <td className="border border-slate-200 p-3">Post-graduation work</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 p-3 font-semibold">Cap-gap extension</td>
                  <td className="border border-slate-200 p-3">Yes, if H-1B selected</td>
                  <td className="border border-slate-200 p-3 text-green-600">No impact</td>
                  <td className="border border-slate-200 p-3">Bridging OPT → H-1B Oct 1</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-slate-900">Frequently Asked Questions</h2>
          <div className="mt-6 space-y-4">
            {[
              {
                q: "What is Day 1 CPT?",
                a: "Day 1 CPT is Curricular Practical Training authorized from the first day of a graduate program, available only at schools whose programs require practical training from the start. The school's DSO authorizes it — no USCIS application needed.",
              },
              {
                q: "Will Day 1 CPT affect my OPT?",
                a: "12+ months of full-time CPT (>20 hrs/week) eliminates OPT at that degree level. Part-time CPT never affects OPT. Track your months with the calculator above.",
              },
              {
                q: "Is Day 1 CPT legal in 2026?",
                a: "Yes, but SEVP's August 2026 guidance tightened enforcement significantly. Schools must authorize CPT only where training is required for all students. Four associations sued DHS in October 2026; many universities have paused or tightened approvals.",
              },
              {
                q: "Can I get H-1B after Day 1 CPT?",
                a: "Yes — Day 1 CPT doesn't disqualify you from the H-1B lottery. But ensure your CPT was properly authorized, as USCIS may review your F-1 history during H-1B adjudication.",
              },
              {
                q: "How do I choose a Day 1 CPT school safely?",
                a: "Verify: SEVP certification, regional accreditation, that CPT is truly required (not optional) in the curriculum, and that the school hasn't been flagged. Consult an immigration attorney before enrolling — never rely solely on the school's marketing.",
              },
            ].map((faq, i) => (
              <div key={i} className="rounded-lg border border-slate-200 p-5">
                <h3 className="font-semibold text-slate-900">{faq.q}</h3>
                <p className="mt-2 text-sm text-slate-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        <div className="rounded-lg border border-blue-200 bg-blue-50 p-5">
          <p className="font-semibold text-blue-900">Not selected in the H-1B lottery?</p>
          <p className="mt-1 text-sm text-blue-800">
            See historical selection rates and all your backup options in our lottery results tracker.
          </p>
          <Link
            href="/tools/lottery-results"
            className="mt-3 inline-block rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-800"
          >
            Lottery Results Tracker →
          </Link>
        </div>
        <div className="rounded-lg border border-green-200 bg-green-50 p-5">
          <p className="font-semibold text-green-900">Estimate your H-1B lottery odds</p>
          <p className="mt-1 text-sm text-green-800">
            Check your wage-weighted selection chances for the next lottery.
          </p>
          <Link
            href="/tools/lottery-odds"
            className="mt-3 inline-block rounded-lg bg-green-700 px-5 py-2.5 text-sm font-semibold text-white hover:bg-green-800"
          >
            Odds Calculator →
          </Link>
        </div>
      </div>

      <p className="mt-8 text-xs text-slate-400">
        Sources: DHS Study in the States (SEVIS Help Hub — CPT & OPT), 8 CFR
        214.2(f)(10), SEVP August 2026 broadcast guidance. This guide is for
        informational purposes only and does not constitute legal advice. Immigration
        law is complex and changing — consult a licensed immigration attorney for
        your specific situation.
      </p>
    </div>
  );
}
