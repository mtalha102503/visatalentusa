import type { Metadata } from "next";
import Link from "next/link";
import OddsCalculator from "./OddsCalculator";

export const metadata: Metadata = {
  title: "H-1B Lottery Odds Calculator (2028)",
  description:
    "Estimate your H-1B lottery 2028 selection odds by wage level. Interactive calculator using DHS wage-weighted projections (15%–61%).",
  alternates: { canonical: "https://visatalentusa.com/tools/lottery-odds" },
  openGraph: {
    title: "H-1B Lottery Odds Calculator (2028) | VisaTalentUSA",
    description:
      "Estimate your H-1B lottery selection odds by wage level. Free interactive tool.",
    url: "https://visatalentusa.com/tools/lottery-odds",
    type: "website",
  },
};

export default function LotteryOddsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        name: "H-1B Lottery Odds Calculator (2028)",
        description:
          "Estimate H-1B lottery selection odds by OEWS wage level under the wage-weighted selection system.",
        url: "https://visatalentusa.com/tools/lottery-odds",
        applicationCategory: "EducationalApplication",
        operatingSystem: "Web",
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://visatalentusa.com/" },
          { "@type": "ListItem", position: 2, name: "Tools", item: "https://visatalentusa.com/tools/lottery-odds" },
          {
            "@type": "ListItem",
            position: 3,
            name: "H-1B Lottery Odds Calculator",
            item: "https://visatalentusa.com/tools/lottery-odds",
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "How are H-1B lottery odds calculated?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Under the wage-weighted system (effective 2026), each registration gets 1–4 lottery entries based on its OEWS wage level. DHS projects ~15% selection for Level I, ~31% for Level II, ~46% for Level III, and ~61% for Level IV.",
            },
          },
          {
            "@type": "Question",
            name: "Does a master's degree improve H-1B lottery odds?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes — U.S. master's holders get two draws: the 20,000 advanced-degree exemption first, then the 65,000 regular cap. But wage weighting applies in both draws, so a low wage level still hurts.",
            },
          },
        ],
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
        <Link href="/" className="hover:text-blue-700 hover:underline">
          Home
        </Link>
        <span className="mx-2">/</span>
        <span className="text-slate-700">H-1B Lottery Odds Calculator</span>
      </nav>

      <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
        H-1B Lottery Odds Calculator
      </h1>
      <p className="mt-3 text-lg text-slate-600">
        Select your wage level to estimate your selection odds under the
        wage-weighted H-1B lottery. Based on DHS projections from the December
        2025 final rule.
      </p>

      <div className="mt-8">
        <OddsCalculator />
      </div>

      <div className="mt-10 rounded-lg border border-blue-200 bg-blue-50 p-5">
        <p className="font-semibold text-blue-900">Want the full breakdown?</p>
        <p className="mt-1 text-sm text-blue-800">
          Our in-depth guide covers registration dates, fees, anti-gaming
          rules, and 7 strategies to maximize your odds — all grounded in 2M+
          real DOL filing records.
        </p>
        <Link
          href="/blog/h1b-lottery-2028/"
          className="mt-3 inline-block rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-800"
        >
          Read the H-1B Lottery 2028 Guide →
        </Link>
      </div>
    </div>
  );
}
