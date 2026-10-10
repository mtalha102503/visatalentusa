import type { Metadata } from "next";
import Link from "next/link";
import { getSearchIndex, formatNum, formatUSD } from "@/lib/data";
import SponsorsClient from "./SponsorsClient";

export const metadata: Metadata = {
  title: "All 1,000 Top H-1B Visa Sponsors (2026) — Complete Ranked List",
  description:
    "Browse the complete ranked list of all 1,000 top H-1B visa sponsors for FY2026. Search any U.S. employer, sort by filings, LCA approval rate, or median salary. Real Department of Labor data.",
  keywords: [
    "h1b sponsors",
    "companies that sponsor h1b",
    "h1b visa sponsors list",
    "top h1b employers",
    "h1b sponsorship companies",
  ],
  alternates: { canonical: "https://visatalentusa.com/sponsors" },
  openGraph: {
    title: "All 1,000 Top H-1B Visa Sponsors (2026) | VisaTalentUSA",
    description:
      "The complete ranked list of 1,000 top H-1B sponsors. Search, sort by approval rate or salary — real DOL data.",
    url: "https://visatalentusa.com/sponsors",
    type: "website",
    siteName: "VisaTalentUSA",
  },
  twitter: {
    card: "summary_large_image",
    title: "All 1,000 Top H-1B Visa Sponsors (2026)",
    description:
      "Search and rank 1,000 U.S. employers by H-1B filings, approval rates, and salaries.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default async function SponsorsPage() {
  const sponsors = await getSearchIndex();
  const top10 = sponsors.slice(0, 10);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        name: "All 1,000 Top H-1B Visa Sponsors (2026) — Complete Ranked List",
        description:
          "Complete ranked list of the top 1,000 H-1B visa sponsors by FY2026 certified filings, with approval rates and median salaries from U.S. Department of Labor disclosure data.",
        url: "https://visatalentusa.com/sponsors",
        isPartOf: {
          "@type": "WebSite",
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
            name: "All H-1B Sponsors",
            item: "https://visatalentusa.com/sponsors",
          },
        ],
      },
      {
        "@type": "ItemList",
        name: "Top 10 H-1B Sponsors FY2026",
        itemListElement: top10.map((s, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: s.name,
          url: `https://visatalentusa.com/sponsors/${s.slug}/`,
        })),
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Which companies sponsor the most H-1B visas?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "In FY2026, Amazon led with nearly 20,000 H-1B filings, followed by Google, Meta, Microsoft, and other major technology employers. This page ranks all 1,000 top sponsors by certified Labor Condition Application filings from U.S. Department of Labor disclosure data.",
            },
          },
          {
            "@type": "Question",
            name: "How do I find companies that sponsor H-1B visas?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Use the search filter above to find any of the 1,000 top H-1B sponsors by name. Click any employer for detailed filing counts, approval rates, median salaries, top job titles, and worksite states.",
            },
          },
          {
            "@type": "Question",
            name: "What does the approval rate mean on this list?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The approval rate shown is the Department of Labor LCA certification rate — the share of Labor Condition Applications certified versus denied. It is not the USCIS H-1B petition approval rate, which is a separate process.",
            },
          },
        ],
      },
    ],
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
        <Link href="/" className="hover:text-blue-700 hover:underline">
          Home
        </Link>
        <span className="mx-2">/</span>
        <span className="text-slate-700">All H-1B Sponsors</span>
      </nav>

      <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
        All 1,000 Top H-1B Visa Sponsors — FY2026 Ranked List
      </h1>
      <div className="mt-4 max-w-3xl space-y-3 text-slate-600">
        <p className="text-lg">
          Looking for <strong>companies that sponsor H-1B visas</strong>? This
          is the complete ranked list of the{" "}
          <strong>top 1,000 H-1B sponsors</strong> by FY2026 certified filings —
          from Amazon&apos;s ~20,000 filings down to employers with a few
          hundred. Every number comes from the U.S. Department of Labor&apos;s
          public Labor Condition Application (LCA) disclosure data.
        </p>
        <p>
          Use the filter to find any employer by name, or tap a column header
          to sort by <strong>filings</strong>,{" "}
          <strong>LCA approval rate</strong>, or{" "}
          <strong>median salary</strong>. Click any company for its full
          sponsorship profile: top job titles, worksite states, wage-level mix,
          and year-over-year trends.
        </p>
      </div>

      <div className="mt-8">
        <SponsorsClient sponsors={sponsors} />
      </div>

      {/* FAQ section */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-slate-900">
          Frequently asked questions
        </h2>
        <div className="mt-6 space-y-4">
          <div className="rounded-lg border border-slate-200 p-5">
            <h3 className="font-semibold text-slate-900">
              Which companies sponsor the most H-1B visas?
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              In FY2026, Amazon led with nearly 20,000 filings, followed by
              Google (~7,400), Meta (~5,200), and Microsoft (~5,100). The full
              ranking above covers all 1,000 top sponsors.
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 p-5">
            <h3 className="font-semibold text-slate-900">
              How do I find companies that sponsor H-1B visas?
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Type any company name in the filter above. Click the employer for
              detailed data: filing counts, salaries by role, approval rates,
              and top worksite states. Also try our{" "}
              <Link
                href="/tools/lottery-odds"
                className="text-blue-700 hover:underline"
              >
                H-1B lottery odds calculator
              </Link>{" "}
              to estimate your selection chances.
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 p-5">
            <h3 className="font-semibold text-slate-900">
              What does the approval rate mean?
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              It is the DOL LCA certification rate — certified vs. denied Labor
              Condition Applications. It is not the USCIS petition approval
              rate. Most top sponsors certify 95%+ of their LCAs.
            </p>
          </div>
        </div>
      </section>

      <p className="mt-8 text-xs text-slate-500">
        Data: U.S. Department of Labor LCA disclosure files, FY2026. Approval
        rates are LCA certification rates, not USCIS petition outcomes.{" "}
        <Link href="/about" className="text-blue-700 hover:underline">
          Learn about our methodology
        </Link>
        .
      </p>
    </div>
  );
}
