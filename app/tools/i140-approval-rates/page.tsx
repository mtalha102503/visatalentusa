import type { Metadata } from "next";
import Link from "next/link";
import I140ApprovalExplorer from "./I140ApprovalExplorer";

export const metadata: Metadata = {
  title: "I-140 Approval Rates 2026 by EB Category",
  description:
    "Explore real I-140 approval rates by EB category from USCIS quarterly data. EB-1A: 32.2%, EB-2 NIW: 55.3%, EB-1C: 97.4%. Interactive charts, trends, and strategy guide.",
  keywords: [
    "i-140 approval rate",
    "i140 approval rate",
    "eb-1a approval rate",
    "eb2 niw approval rate",
    "i-140 approval chances",
    "uscis i-140 statistics",
    "i-140 denial rate",
  ],
  alternates: { canonical: "https://visatalentusa.com/tools/i140-approval-rates" },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "VisaTalentUSA — H-1B Sponsor Database" }],
    title: "I-140 Approval Rate Explorer",
    description:
      "Real USCIS data: I-140 approval rates by EB category. See which categories get approved and which get denied.",
    url: "https://visatalentusa.com/tools/i140-approval-rates",
    type: "website",
    siteName: "VisaTalentUSA",
  },
  twitter: {
    card: "summary_large_image",
    title: "I-140 Approval Rate Explorer",
    description:
      "Real USCIS quarterly data: approval rates by EB category with trends and insights.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function I140ApprovalRatesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "I-140 Approval Rate Explorer",
    url: "https://visatalentusa.com/tools/i140-approval-rates",
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Any",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    description:
      "Interactive explorer for I-140 approval rates by EB category, built on real USCIS quarterly petition data.",
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://visatalentusa.com" },
      { "@type": "ListItem", position: 2, name: "Tools", item: "https://visatalentusa.com/tools" },
      { "@type": "ListItem", position: 3, name: "I-140 Approval Rate Explorer", item: "https://visatalentusa.com/tools/i140-approval-rates" },
    ],
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the I-140 approval rate for EB-1A?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "In FY2026 Q3, EB-1A (Extraordinary Ability) had a 32.2% approval rate — the lowest of any EB category. USCIS denied 2,832 EB-1A petitions in a single quarter, reflecting the high evidentiary bar.",
        },
      },
      {
        "@type": "Question",
        name: "What is the I-140 approval rate for EB-2 NIW?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "EB-2 National Interest Waiver had a 55.3% approval rate in FY2026 Q3, up from 42.5% in Q1 — showing an improving trend for NIW applicants.",
        },
      },
      {
        "@type": "Question",
        name: "Which EB category has the highest I-140 approval rate?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "EB-1C (Multinational Executive) and EB-2 PERM-based both had 97.4% approval rates in FY2026 Q3, followed by EB-3 at 96.2%. Employer-sponsored categories with PERM labor certification have the highest approval rates.",
        },
      },
      {
        "@type": "Question",
        name: "Where does this approval rate data come from?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "All data comes from USCIS quarterly Form I-140 petition reports published on the USCIS Immigration and Citizenship Data page. VisaTalentUSA downloads, parses, and analyzes these official publications quarterly.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <div className="mx-auto max-w-6xl px-4 py-8">
        <nav className="mb-6 text-sm text-slate-500">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          {" / "}
          <Link href="/tools" className="hover:text-blue-600">Tools</Link>
          {" / "}
          <span className="text-slate-700">I-140 Approval Rate Explorer</span>
        </nav>

        <h1 className="text-3xl font-bold text-slate-900 md:text-4xl">
          I-140 Approval Rate Explorer
        </h1>
        <p className="mt-3 text-lg text-slate-600">
          Real USCIS quarterly data reveals which EB categories get approved —
          and which face the toughest odds. Explore approval rates, trends, and
          what they mean for your green card strategy.
        </p>

        <I140ApprovalExplorer />

        {/* Guide content - approval rates angle, NOT processing times */}
        <div className="mt-12 max-w-none">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Understanding I-140 Approval Rates: What the Data Really Tells You
          </h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            While most guides focus on <strong>how long</strong> I-140 takes
            (see our <Link href="/blog/i140-processing-time" className="text-blue-600 underline">I-140 processing time guide</Link> for
            timelines), this explorer answers a different question:{" "}
            <strong>how likely is your I-140 to be approved?</strong> The answer
            varies dramatically by category — from 32% to 97%.
          </p>

          <div className="bg-white rounded-xl border border-slate-200 p-6 mb-6 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              🔴 Why EB-1A Has Only a 32.2% Approval Rate
            </h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              EB-1A (Extraordinary Ability) is self-petitioned — no employer, no
              PERM, no job offer required. That freedom comes with the highest
              evidentiary bar in employment-based immigration. USCIS officers
              evaluate whether you meet at least 3 of 10 regulatory criteria
              (major awards, published material, original contributions, etc.)
              AND whether you are truly at the top of your field. In FY2026 Q3
              alone, USCIS denied 2,832 EB-1A petitions — more denials than any
              other subcategory.
            </p>
            <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg">
              <p className="text-sm text-red-800">
                <strong>Strategy implication:</strong> Do not file EB-1A unless your
                evidence package is genuinely strong. A denial wastes months and
                filing fees. Consider EB-2 NIW as an alternative self-petition
                route with a higher (and improving) approval rate.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-6 mb-6 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              📈 EB-2 NIW: The Improving Bet (55.3% and Rising)
            </h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              The National Interest Waiver approval rate climbed from 42.5% in
              FY2026 Q1 to 55.3% in Q3 — a significant improvement. This likely
              reflects USCIS providing clearer adjudication guidance on the
              three-prong Dhanasar framework. For researchers, entrepreneurs,
              and professionals whose work has national importance, NIW remains
              the most accessible self-petition path.
            </p>
            <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg">
              <p className="text-sm text-amber-800">
                <strong>Strategy implication:</strong> If you are deciding between
                EB-1A and EB-2 NIW, the data favors NIW for most applicants unless
                your EB-1A credentials are exceptional.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-6 mb-6 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              🟢 Why Employer-Sponsored Categories Exceed 96%
            </h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              EB-1C (97.4%), EB-2 PERM (97.4%), and EB-3 (96.2%) dominate approval
              rates because the hardest vetting already happened: the PERM labor
              certification process (for EB-2/EB-3) or the multinational executive
              relationship documentation (for EB-1C). By the time USCIS sees the
              I-140, DOL or the corporate structure has already validated the
              core claim.
            </p>
            <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-r-lg">
              <p className="text-sm text-green-800">
                <strong>Strategy implication:</strong> If your employer will sponsor
                you through PERM, the I-140 stage is very likely to succeed. The
                real wait is the PERM timeline and the Visa Bulletin queue — not
                I-140 adjudication risk.
              </p>
            </div>
          </div>

          <div className="bg-slate-50 rounded-xl border border-slate-200 p-6 mb-6">
            <h3 className="text-xl font-bold text-slate-900 mb-4">
              💡 How to Use This Data
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-4 border border-slate-200">
                <p className="font-semibold text-slate-900 mb-1">Choosing a category</p>
                <p className="text-sm text-slate-600">Compare approval rates before deciding between EB-1A, EB-2 NIW, or employer-sponsored routes.</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-slate-200">
                <p className="font-semibold text-slate-900 mb-1">Setting expectations</p>
                <p className="text-sm text-slate-600">A 32% EB-1A rate means most applicants need a backup plan.</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-slate-200">
                <p className="font-semibold text-slate-900 mb-1">Timing your filing</p>
                <p className="text-sm text-slate-600">Rising NIW rates suggest now is a relatively favorable window.</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-slate-200">
                <p className="font-semibold text-slate-900 mb-1">Evaluating RFE risk</p>
                <p className="text-sm text-slate-600">Low approval rate categories face more Requests for Evidence — budget extra time.</p>
              </div>
            </div>
          </div>

          <div className="text-sm text-slate-500 bg-slate-50 rounded-lg p-4 border border-slate-200">
            <p className="font-semibold text-slate-700 mb-1">Data Methodology</p>
            <p>
              Approval rate = approved ÷ (approved + denied). Pending cases are
              excluded. Data sourced from USCIS Form I-140 quarterly reports
              (FY2026 Q1–Q3), downloaded from the{" "}
              <a href="https://www.uscis.gov/tools/reports-and-studies/immigration-and-citizenship-data" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                USCIS Immigration and Citizenship Data page
              </a>{" "}
              and analyzed by VisaTalentUSA. Updated quarterly.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
