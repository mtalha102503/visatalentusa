import type { Metadata } from "next";
import Link from "next/link";
import ProcessingTimeTool from "./ProcessingTimeTool";

export const metadata: Metadata = {
  title: "H-1B Processing Time Tracker 2026 — Check USCIS Times by Service Center",
  description:
    "Free H-1B processing time tracker: select your USCIS service center and petition type to get current processing estimates, compare regular vs premium processing (15 business days), and see stage-by-stage timelines.",
  keywords: [
    "h1b processing time",
    "h1b processing time tracker",
    "uscis h1b processing time",
    "h1b visa processing time 2026",
    "h1b premium processing time",
    "h1b extension processing time",
    "uscis service center processing times",
    "how long does h1b approval take",
  ],
  alternates: { canonical: "https://visatalentusa.com/tools/processing-time" },
  openGraph: {
    title: "H-1B Processing Time Tracker 2026",
    description:
      "Check current H-1B processing times by USCIS service center. Compare regular vs premium processing with interactive timelines.",
    url: "https://visatalentusa.com/tools/processing-time",
    type: "website",
    siteName: "VisaTalentUSA",
  },
  twitter: {
    card: "summary_large_image",
    title: "H-1B Processing Time Tracker 2026",
    description:
      "How long does H-1B approval take? Check by service center with our free interactive tracker.",
  },
};

const FAQS = [
  {
    q: "How long does H-1B processing take in 2026?",
    a: "Regular H-1B processing typically takes 2–6 months depending on the USCIS service center handling your case. California is historically fastest (~2 months), while Vermont can take 5+ months for extensions. Premium processing guarantees a decision within 15 business days for an additional $2,805 fee.",
  },
  {
    q: "What is H-1B premium processing time?",
    a: "Premium processing (Form I-907) guarantees USCIS will take adjudicative action — approval, denial, RFE, or NOID — within 15 business days of receiving the request. If USCIS misses the deadline, the $2,805 fee is refunded. Note: 15 business days means a decision, not necessarily an approval. If USCIS issues an RFE, a new 15-day clock starts after you respond.",
  },
  {
    q: "Which USCIS service center processes my H-1B petition?",
    a: "The service center is determined by your worksite location. California handles western states, Vermont handles northeastern states, Texas handles TX/OK/NM/AR/LA, while Nebraska and Potomac handle overflow and specific petition types nationwide. Your receipt notice will indicate which center has your case.",
  },
  {
    q: "Why is Vermont slower for H-1B extensions?",
    a: "Vermont Service Center has historically carried heavier H-1B extension workloads, with processing times often reaching 5–6 months. This is why immigration attorneys strongly recommend filing extensions as early as possible — up to 6 months before your current I-94 expiration date.",
  },
  {
    q: "Can I start working while my H-1B transfer is pending?",
    a: "Yes, under AC21 portability. Once the new employer's H-1B petition is filed and USCIS issues a receipt notice, you may legally begin working for the new employer while USCIS adjudicates the petition. You do not need to wait for approval.",
  },
  {
    q: "What happens if USCIS issues a Request for Evidence (RFE)?",
    a: "An RFE pauses your case clock. USCIS typically gives you up to 90 days to respond (attorneys usually respond within 30). After you submit the response, regular processing resumes (30–60 days typical), or a new 15-business-day clock starts if you filed premium processing.",
  },
  {
    q: "How often does USCIS update processing times?",
    a: "USCIS updates its official processing times tool monthly at egov.uscis.gov/processing-times. Times can shift significantly based on application volume, staffing, and policy changes — always verify current times there before making decisions based on our estimates.",
  },
  {
    q: "Is premium processing worth the $2,805 fee?",
    a: "It depends on your situation. Premium is usually worth it if: your employment start date is tight, your current status is expiring soon, you need to travel internationally, or your employer needs certainty for planning. For routine cases with no deadline pressure, regular processing saves the fee.",
  },
];

export default function ProcessingTimePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "H-1B Processing Time Tracker",
    url: "https://visatalentusa.com/tools/processing-time",
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Any",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    description:
      "Free interactive tool to check H-1B processing times by USCIS service center and petition type, with premium processing comparison.",
  };

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />

      {/* Breadcrumb */}
      <nav className="text-sm text-slate-500" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-blue-700">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/tools/sponsor-match" className="hover:text-blue-700">Tools</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-800 font-medium">Processing Time Tracker</span>
      </nav>

      {/* Hero */}
      <div className="mt-6 text-center">
        <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
          H-1B Processing Time Tracker
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-lg text-slate-600">
          How long will your H-1B petition take? Select your service center and
          petition type for a current estimate — then compare regular vs premium
          processing side by side.
        </p>
        <p className="mt-2 text-xs text-slate-400">
          Estimates based on USCIS published processing data · Last reviewed October 2026
        </p>
      </div>

      {/* Tool */}
      <div className="mt-10">
        <ProcessingTimeTool />
      </div>

      {/* Detailed guide */}
      <div className="mt-16 space-y-10">
        <section>
          <h2 className="text-2xl font-bold text-slate-900">
            Understanding H-1B Processing Times
          </h2>
          <div className="mt-4 space-y-4 text-slate-600 leading-relaxed">
            <p>
              When your employer files Form I-129 (Petition for a Nonimmigrant Worker) for your H-1B,
              USCIS routes it to one of five service centers based on your worksite location. Each center
              has its own backlog and staffing levels, which is why the same petition type can take
              2 months at California but 5+ months at Vermont.
            </p>
            <p>
              USCIS publishes updated processing times monthly through its official{" "}
              <a
                href="https://egov.uscis.gov/processing-times/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-blue-700 hover:underline"
              >
                processing times tool
              </a>
              . The times represent how long it took USCIS to complete 80% of cases — meaning 1 in 5
              cases took even longer. Our tracker uses these published ranges to give you a realistic
              estimate for your specific situation.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900">
            The 5 USCIS Service Centers Compared
          </h2>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-slate-200 text-left">
                  <th className="pb-3 pr-4 font-bold text-slate-900">Service Center</th>
                  <th className="pb-3 pr-4 font-bold text-slate-900">Typical H-1B Range</th>
                  <th className="pb-3 font-bold text-slate-900">Known For</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="py-3 pr-4 font-semibold text-slate-800">California (CSC)</td>
                  <td className="py-3 pr-4 text-slate-600">~2–3 months</td>
                  <td className="py-3 text-slate-600">Fastest for H-1B; handles western states</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-semibold text-slate-800">Vermont (VSC)</td>
                  <td className="py-3 pr-4 text-slate-600">~4–6 months</td>
                  <td className="py-3 text-slate-600">Slowest for extensions; handles northeastern states</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-semibold text-slate-800">Texas (TSC)</td>
                  <td className="py-3 pr-4 text-slate-600">~2–4 months</td>
                  <td className="py-3 text-slate-600">Moderate; handles TX, OK, NM, AR, LA</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-semibold text-slate-800">Nebraska (NSC)</td>
                  <td className="py-3 pr-4 text-slate-600">~3–5 months</td>
                  <td className="py-3 text-slate-600">Overflow center; nationwide jurisdiction</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-semibold text-slate-800">Potomac (PSC)</td>
                  <td className="py-3 pr-4 text-slate-600">~2–4 months</td>
                  <td className="py-3 text-slate-600">Newer center; overflow and specific types</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900">
            Regular vs Premium Processing: Full Comparison
          </h2>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <p className="font-bold text-slate-900">Regular Processing</p>
              <p className="mt-1 text-3xl font-bold text-slate-700">2–6 months</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                <li className="flex gap-2"><span className="text-emerald-600 font-bold">✓</span> No additional fee</li>
                <li className="flex gap-2"><span className="text-emerald-600 font-bold">✓</span> Same adjudication standards</li>
                <li className="flex gap-2"><span className="text-rose-500 font-bold">✕</span> No guaranteed decision date</li>
                <li className="flex gap-2"><span className="text-rose-500 font-bold">✕</span> Hard to plan start dates</li>
                <li className="flex gap-2"><span className="text-rose-500 font-bold">✕</span> RFE adds 1–3 months</li>
              </ul>
            </div>
            <div className="rounded-xl border-2 border-blue-300 bg-blue-50 p-6">
              <p className="font-bold text-slate-900">Premium Processing</p>
              <p className="mt-1 text-3xl font-bold text-blue-800">≤ 15 business days</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                <li className="flex gap-2"><span className="text-emerald-600 font-bold">✓</span> Guaranteed decision timeline</li>
                <li className="flex gap-2"><span className="text-emerald-600 font-bold">✓</span> Fee refunded if USCIS misses deadline</li>
                <li className="flex gap-2"><span className="text-emerald-600 font-bold">✓</span> Can upgrade a pending case anytime</li>
                <li className="flex gap-2"><span className="text-rose-500 font-bold">✕</span> Additional $2,805 fee</li>
                <li className="flex gap-2"><span className="text-rose-500 font-bold">✕</span> Decision ≠ approval (can be RFE/denial)</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900">
            5 Ways to Avoid Processing Delays
          </h2>
          <ol className="mt-4 space-y-4">
            {[
              {
                t: "File extensions early — up to 6 months ahead",
                d: "USCIS allows H-1B extension filings up to 6 months before your I-94 expires. At Vermont's pace, filing late can leave you in a gap with travel restrictions.",
              },
              {
                t: "Get the LCA right the first time",
                d: "Errors in the Labor Condition Application are a top cause of RFEs. Double-check the job title, wage level, worksite address, and employment dates before filing.",
              },
              {
                t: "Prepare a strong specialty-occupation argument",
                d: "Most H-1B RFEs challenge whether the role qualifies as a specialty occupation. Include detailed job duties, degree requirements, and industry standards in the initial filing.",
              },
              {
                t: "Respond to RFEs within 30 days",
                d: "USCIS gives up to 90 days for RFE responses, but responding within 30 keeps your case moving. Every week of delay is a week added to your total timeline.",
              },
              {
                t: "Consider premium when timing matters",
                d: "If your start date, travel plans, or status expiration create a hard deadline, the $2,805 premium fee buys certainty. You can also upgrade a regular case to premium mid-process.",
              },
            ].map((tip, i) => (
              <li key={i} className="flex gap-4 rounded-xl border border-slate-200 bg-white p-5">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-700 text-sm font-bold text-white">
                  {i + 1}
                </span>
                <div>
                  <p className="font-bold text-slate-900">{tip.t}</p>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">{tip.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* FAQs */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900">
            Frequently Asked Questions
          </h2>
          <div className="mt-4 space-y-3">
            {FAQS.map((f, i) => (
              <details key={i} className="rounded-xl border border-slate-200 bg-white p-5 group">
                <summary className="cursor-pointer font-semibold text-slate-900 list-none flex justify-between items-center">
                  {f.q}
                  <span className="text-blue-700 text-xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Related tools */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900">Related H-1B Tools</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            <Link href="/tools/lottery-odds" className="rounded-xl border border-slate-200 bg-white p-5 hover:border-blue-300 hover:shadow-md transition-all">
              <p className="font-bold text-slate-900">🎲 Lottery Odds Calculator</p>
              <p className="mt-1 text-sm text-slate-600">Estimate your H-1B lottery selection chances by wage level.</p>
            </Link>
            <Link href="/tools/h1b-transfer" className="rounded-xl border border-slate-200 bg-white p-5 hover:border-blue-300 hover:shadow-md transition-all">
              <p className="font-bold text-slate-900">💼 H-1B Transfer Guide</p>
              <p className="mt-1 text-sm text-slate-600">Fees, timelines, and eligibility for changing employers.</p>
            </Link>
            <Link href="/tools/sponsor-match" className="rounded-xl border border-slate-200 bg-white p-5 hover:border-blue-300 hover:shadow-md transition-all">
              <p className="font-bold text-slate-900">🔍 Sponsor Match Finder</p>
              <p className="mt-1 text-sm text-slate-600">Find companies that sponsor H-1B visas for your job title.</p>
            </Link>
          </div>
        </section>

        {/* Sources */}
        <section className="rounded-xl bg-slate-50 border border-slate-200 p-6">
          <h2 className="text-lg font-bold text-slate-900">Sources & Methodology</h2>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li>
              • USCIS official processing times:{" "}
              <a href="https://egov.uscis.gov/processing-times/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline font-medium">
                egov.uscis.gov/processing-times
              </a>{" "}
              (Form I-129, checked October 2026)
            </li>
            <li>• Premium processing guarantee: 15 business days per USCIS Form I-907 instructions</li>
            <li>• Service center jurisdiction data: USCIS service center filing charts</li>
            <li>• Estimates reflect typical ranges; individual cases vary. Always verify current times at the official USCIS tool.</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
