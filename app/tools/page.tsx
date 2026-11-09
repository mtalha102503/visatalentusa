import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Free H-1B Tools — Calculators, Finders & Checkers | VisaTalentUSA",
  description:
    "All free H-1B tools in one place: lottery odds calculator, sponsor match finder, wage level checker, transfer guide, processing time tracker, lottery results, cap-exempt employers, Day 1 CPT guide, I-140 rates, priority date tracker and amendment checker — built on real DOL and USCIS data.",
  keywords: [
    "h1b tools",
    "h1b lottery odds calculator",
    "h1b sponsor finder",
    "h1b wage level checker",
    "h1b transfer",
    "h1b processing time",
  ],
  alternates: { canonical: "https://visatalentusa.com/tools" },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "VisaTalentUSA — H-1B Sponsor Database" }],
    title: "Free H-1B Tools — Calculators, Finders & Checkers | VisaTalentUSA",
    description:
      "Every free H-1B tool in one place — lottery odds, sponsor matching, wage levels, transfers, processing times and more, built on real DOL and USCIS data.",
    url: "https://visatalentusa.com/tools",
    type: "website",
    siteName: "VisaTalentUSA",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free H-1B Tools | VisaTalentUSA",
    description:
      "Lottery odds, sponsor matching, wage levels, transfers and more — free tools built on real DOL and USCIS data.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const TOOLS = [
  {
    href: "/tools/lottery-odds",
    label: "H-1B Lottery Odds Calculator",
    desc: "Estimate your selection odds by wage level",
  },
  {
    href: "/tools/sponsor-match",
    label: "H-1B Sponsor Match Finder",
    desc: "Find companies that sponsor your job title",
  },
  {
    href: "/tools/wage-level",
    label: "H-1B Wage Level Checker",
    desc: "Estimate your DOL wage level (I–IV) from real filings",
  },
  {
    href: "/tools/h1b-transfer",
    label: "H-1B Transfer Guide",
    desc: "Fees, timeline, eligibility checker & document list",
  },
  {
    href: "/tools/processing-time",
    label: "H-1B Processing Time Tracker",
    desc: "Check USCIS times by service center & petition type",
  },
  {
    href: "/tools/lottery-results",
    label: "H-1B Lottery Results Tracker",
    desc: "Historical results, selection rates & FY2027 timeline",
  },
  {
    href: "/tools/cap-exempt-employers",
    label: "Cap-Exempt Employers Finder",
    desc: "Universities & nonprofits that skip the lottery — with salaries",
  },
  {
    href: "/tools/day-1-cpt",
    label: "Day 1 CPT Guide",
    desc: "Rules, OPT calculator & 2026 SEVP updates",
  },
  {
    href: "/tools/i140-approval-rates",
    label: "I-140 Approval Rate Explorer",
    desc: "Real USCIS approval rates by EB category with trends",
  },
  {
    href: "/tools/priority-date-tracker",
    label: "Priority Date Tracker",
    desc: "Is your EB-2 date current? Wait estimator & bulletin history",
  },
  {
    href: "/tools/h1b-amendment-checker",
    label: "H-1B Amendment Checker",
    desc: "Do you need an amended petition? 7-question checker",
  },
  {
    href: "/state-of-h1b-2026",
    label: "State of H-1B 2026 — Data Report",
    desc: "426,952 FY2026 filings: consulting pullback, flat Big Tech, rising pay",
  },
];

export default function ToolsIndexPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
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
            item: "https://visatalentusa.com/tools",
          },
        ],
      },
      {
        "@type": "ItemList",
        name: "Free H-1B Tools",
        itemListElement: TOOLS.map((t, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: t.label,
          url: `https://visatalentusa.com${t.href}`,
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
        <span className="text-slate-700">Tools</span>
      </nav>

      <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
        Free H-1B Tools
      </h1>
      <div className="mt-4 max-w-3xl space-y-3 text-slate-600">
        <p className="text-lg">
          Every free H-1B tool in one place — calculators, finders and
          checkers built on real U.S. Department of Labor and USCIS data.
          No sign-up, no dummy numbers.
        </p>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {TOOLS.map((t) => (
          <Link
            key={t.href}
            href={t.href}
            className="rounded-lg border border-slate-200 bg-white p-5 hover:border-blue-300 hover:bg-blue-50/50"
          >
            <p className="font-semibold text-blue-700">{t.label}</p>
            <p className="mt-1 text-sm text-slate-600">{t.desc}</p>
          </Link>
        ))}
      </div>

      <div className="mt-10 rounded-lg border border-blue-200 bg-blue-50 p-5">
        <p className="font-semibold text-blue-900">
          Looking for a specific employer?
        </p>
        <p className="mt-1 text-sm text-blue-800">
          Search 1,200+ H-1B sponsoring employers with real filing counts,
          salaries and LCA certification rates in the sponsor database.
        </p>
        <Link
          href="/sponsors"
          className="mt-3 inline-block rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-800"
        >
          Browse all sponsors →
        </Link>
      </div>
    </div>
  );
}
