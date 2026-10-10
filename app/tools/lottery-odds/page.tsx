import type { Metadata } from "next";
import Link from "next/link";
import OddsCalculator from "./OddsCalculator";

export const metadata: Metadata = {
  title: "H-1B Lottery Odds Calculator 2028 — Estimate Your Selection Chances",
  description:
    "Free H-1B lottery odds calculator: enter your salary to estimate your wage level and selection odds (15%–61%) under the wage-weighted system. Includes master's cap boost and negotiation tips.",
  keywords: [
    "h1b lottery odds calculator",
    "h1b lottery chances",
    "h1b wage level calculator",
    "h1b lottery 2028 odds",
    "h1b selection probability",
  ],
  alternates: { canonical: "https://visatalentusa.com/tools/lottery-odds" },
  openGraph: {
    title: "H-1B Lottery Odds Calculator 2028 | VisaTalentUSA",
    description:
      "Enter your salary, get your estimated wage level and H-1B lottery odds. Free interactive tool with DHS projections.",
    url: "https://visatalentusa.com/tools/lottery-odds",
    type: "website",
    siteName: "VisaTalentUSA",
  },
  twitter: {
    card: "summary_large_image",
    title: "H-1B Lottery Odds Calculator 2028",
    description:
      "Estimate your H-1B lottery selection odds by salary and wage level. Free tool.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function LotteryOddsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        name: "H-1B Lottery Odds Calculator 2028 — Estimate Your Selection Chances",
        description:
          "Free interactive calculator: enter your salary to estimate your OEWS wage level and H-1B lottery selection odds under the wage-weighted selection system (DHS December 2025 final rule).",
        url: "https://visatalentusa.com/tools/lottery-odds",
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
            item: "https://visatalentusa.com/tools/lottery-odds",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "H-1B Lottery Odds Calculator",
            item: "https://visatalentusa.com/tools/lottery-odds",
          },
        ],
      },
      {
        "@type": "HowTo",
        name: "How to estimate your H-1B lottery odds",
        step: [
          {
            "@type": "HowToStep",
            name: "Enter your salary",
            text: "Move the salary slider to your offered annual salary. The tool estimates your OEWS wage level from the national H-1B salary distribution.",
          },
          {
            "@type": "HowToStep",
            name: "Check master's eligibility",
            text: "If you hold a U.S. master's degree or higher, tick the box — you get two lottery draws and higher combined odds.",
          },
          {
            "@type": "HowToStep",
            name: "See your boost",
            text: "The tool shows how much more salary you'd need to reach the next wage level and how much your odds would jump.",
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
              text: "Under the wage-weighted system (effective February 2026), each registration gets 1–4 lottery entries based on its OEWS wage level. DHS projects ~15% selection for Level I, ~31% for Level II, ~46% for Level III, and ~61% for Level IV.",
            },
          },
          {
            "@type": "Question",
            name: "Does a master's degree improve H-1B lottery odds?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes — U.S. master's holders get two draws: the 20,000 advanced-degree exemption first, then the 65,000 regular cap. But wage weighting applies in both draws, so a low wage level still hurts. Toggle the master's option in the calculator to see combined odds.",
            },
          },
          {
            "@type": "Question",
            name: "How accurate is the salary-to-wage-level estimate?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "It is a rough national estimate. Your actual OEWS wage level is determined by your specific SOC occupation code and worksite geographic area — the same salary can be Level II in one city and Level I in another. Confirm with your employer or immigration attorney.",
            },
          },
          {
            "@type": "Question",
            name: "Can negotiating a higher salary really improve my lottery odds?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes — crossing a wage-level threshold is the highest-leverage move. Moving from the top of Level I to the bottom of Level II doubles your lottery entries (1→2). The calculator's boost box shows exactly how much more you'd need and the odds jump.",
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
        H-1B Lottery Odds Calculator 2028
      </h1>
      <div className="mt-4 max-w-3xl space-y-3 text-slate-600">
        <p className="text-lg">
          What are your <strong>H-1B lottery chances</strong>? Enter your
          offered salary below — the calculator estimates your{" "}
          <strong>wage level</strong>, shows your{" "}
          <strong>projected selection odds</strong> under the wage-weighted
          system, and tells you exactly how much more salary you&apos;d need to
          reach the next level.
        </p>
        <p>
          Since February 2026, USCIS no longer draws names randomly:{" "}
          <strong>Level IV filings get 4 lottery entries, Level I gets just
          1</strong>. DHS projects selection rates from ~15% (Level I) to ~61%
          (Level IV).
        </p>
      </div>

      <div className="mt-8">
        <OddsCalculator />
      </div>

      {/* FAQ */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-slate-900">
          Calculator FAQs
        </h2>
        <div className="mt-6 space-y-4">
          <div className="rounded-lg border border-slate-200 p-5">
            <h3 className="font-semibold text-slate-900">
              How are H-1B lottery odds calculated?
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Each registration gets 1–4 entries by OEWS wage level. DHS
              projects ~15% (Level I), ~31% (Level II), ~46% (Level III), ~61%
              (Level IV) selection rates.
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 p-5">
            <h3 className="font-semibold text-slate-900">
              How accurate is the salary-to-level estimate?
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Rough national estimate only. Your real level depends on SOC code
              and worksite area — the same salary can be Level II in one metro
              and Level I in another. Confirm with your employer or attorney.
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 p-5">
            <h3 className="font-semibold text-slate-900">
              Can a higher salary really improve my odds?
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Yes — crossing a wage-level threshold doubles (or more) your
              entries. The boost box above shows your personal number. Also
              explore{" "}
              <Link
                href="/sponsors"
                className="text-blue-700 hover:underline"
              >
                top H-1B sponsors
              </Link>{" "}
              to find employers whose filings skew toward higher wage levels.
            </p>
          </div>
        </div>
      </section>

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
