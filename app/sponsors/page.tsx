import type { Metadata } from "next";
import Link from "next/link";
import { getSearchIndex, formatNum, formatUSD } from "@/lib/data";
import SponsorsClient from "./SponsorsClient";

export async function generateMetadata(): Promise<Metadata> {
  const sponsors = await getSearchIndex();
  const count = sponsors.length.toLocaleString("en-US");
  return {
    title: `List of Top ${count} H-1B Sponsoring Companies (2026)`,
    description: `Search the list of H-1B sponsoring companies in the USA: top ${count} employers by FY2026 filings, with LCA certification rates and median salaries from real DOL data.`,
    keywords: [
      "list of companies sponsoring h1b visa in usa",
      "list of h1b sponsoring companies in usa",
      "list of us companies that sponsor h1b visa",
      "list of companies that sponsor h1b",
      "list of h1b visa sponsoring companies",
    ],
    alternates: { canonical: "https://visatalentusa.com/sponsors" },
    openGraph: {
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "VisaTalentUSA — H-1B Sponsor Database" }],
      title: `List of Top ${count} H-1B Sponsoring Companies (2026) | VisaTalentUSA`,
      description: `The ranked list of ${count} top H-1B sponsoring companies. Search, sort by certification rate or salary — real DOL data.`,
      url: "https://visatalentusa.com/sponsors",
      type: "website",
      siteName: "VisaTalentUSA",
    },
    twitter: {
      card: "summary_large_image",
      title: `List of Top ${count} H-1B Sponsoring Companies (2026)`,
      description: `Search and rank ${count} U.S. employers by H-1B filings, certification rates, and salaries.`,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function SponsorsPage() {
  const sponsors = await getSearchIndex();
  const count = sponsors.length.toLocaleString("en-US");
  const top10 = sponsors.slice(0, 10);
  const totalFilings = sponsors.reduce((sum, s) => sum + s.cases, 0);
  const thousandPlus = sponsors.filter((s) => s.cases >= 1000).length;
  const minCases = sponsors.length
    ? Math.min(...sponsors.map((s) => s.cases))
    : 0;
  const topSponsor = top10[0];

  const faqs = [
    {
      q: "Which companies sponsor the most H-1B visas?",
      a: `In FY2026, Amazon led with nearly 20,000 H-1B filings, followed by Google, Meta, Microsoft, and other major technology employers. This page ranks the top ${count} sponsors by certified Labor Condition Application filings from U.S. Department of Labor disclosure data.`,
    },
    {
      q: "How do I find companies that sponsor H-1B visas?",
      a: `Use the search filter above to find any of the ${count} top H-1B sponsors on this list by name. Click any employer for detailed filing counts, certification rates, median salaries, top job titles, and worksite states.`,
    },
    {
      q: "What does the approval rate mean on this list?",
      a: "The approval rate shown is the Department of Labor LCA certification rate — the share of Labor Condition Applications certified versus denied. It is not the USCIS H-1B petition approval rate, which is a separate process.",
    },
    {
      q: "Is this a complete list of all H-1B sponsors?",
      a: `No. This ranking covers the top ${count} H-1B sponsoring companies by FY2026 filings, drawn from a DOL dataset with more than 50,000 employers. If your target employer isn't here, it likely filed fewer LCAs than our cutoff of ${formatNum(minCases)} — or sponsors under a parent company's name.`,
    },
    {
      q: "How often is this list updated?",
      a: "We add new employers to our database regularly, and this page rebuilds with fresh data on every site deployment. The FY2026 figures refresh as the Department of Labor publishes new disclosure files.",
    },
    {
      q: "Do small companies sponsor H-1B visas?",
      a: `Yes. While giants like Amazon dominate the totals, the bottom of this list includes companies with as few as ${formatNum(minCases)} FY2026 filings. Small and mid-size employers sponsor H-1B workers regularly — they just file fewer petitions, so they rank lower.`,
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        name: `List of Top ${count} H-1B Sponsoring Companies (2026)`,
        description: `Ranked list of the top ${count} H-1B visa sponsoring companies in the USA by FY2026 certified filings, with LCA certification rates and median salaries from U.S. Department of Labor disclosure data.`,
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
            name: "H-1B Sponsors List",
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
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
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
        <Link href="/" className="hover:text-blue-700 underline underline-offset-2">
          Home
        </Link>
        <span className="mx-2">/</span>
        <span className="text-slate-700">H-1B Sponsors List</span>
      </nav>

      <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
        List of Top {count} H-1B Sponsoring Companies — FY2026
      </h1>
      <div className="mt-4 max-w-3xl space-y-3 text-slate-600">
        <p className="text-lg">
          Looking for a <strong>list of US companies that sponsor H-1B
          visas</strong>? This list of companies sponsoring H-1B visas in the
          USA ranks the <strong>top {count} employers</strong> by FY2026
          certified filings — from Amazon&apos;s ~20,000 filings down to
          employers with a few hundred. Every number comes from the U.S.
          Department of Labor&apos;s public Labor Condition Application (LCA)
          disclosure data.
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

      {/* Guide section */}
      <section className="mt-12 max-w-3xl space-y-8 text-slate-600">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">
            How to Use This List of H-1B Sponsoring Companies
          </h2>
          <div className="mt-4 space-y-3">
            <p>
              If you&apos;re hunting for a job that comes with visa sponsorship,
              this list of H-1B sponsoring companies in the USA is your
              starting point. Here&apos;s how to get the most out of it:
            </p>
            <p>
              <strong className="text-slate-900">Search by name.</strong>{" "}
              Already have a target employer in mind? Type it into the filter
              to see its FY2026 filing count, LCA certification rate, and
              median salary in seconds. It&apos;s the fastest way to answer
              &ldquo;does this company sponsor H-1B?&rdquo;
            </p>
            <p>
              <strong className="text-slate-900">Sort by what matters to
              you.</strong> Click any column header: sort by filings to find
              the most active sponsors — companies that file thousands of
              LCAs run sponsorship like a well-oiled machine. Sort by LCA
              certification rate to see which employers have the cleanest
              compliance record. Sort by median salary to compare pay across
              sponsors.
            </p>
            <p>
              <strong className="text-slate-900">Open the full profile.</strong>{" "}
              Clicking any company name takes you to its sponsor profile with
              top job titles, worksite states, wage-level mix, and
              year-over-year trends — everything you need before you apply or
              reach out to a recruiter.
            </p>
            <p>
              <strong className="text-slate-900">Scan before you
              commit.</strong> Before spending weeks on one employer, spend
              two minutes here: check its filing volume, certification rate,
              and median salary. If a company files only a handful of LCAs
              with a shaky certification rate, that&apos;s a warning sign —
              move on to a stronger sponsor on this list instead.
            </p>
            <p>
              <strong className="text-slate-900">Think beyond the
              giants.</strong> {thousandPlus.toLocaleString("en-US")} employers
              on this list of companies that sponsor H-1B filed 1,000+ LCAs in
              FY2026, and they&apos;re the safest bets. But mid-size sponsors
              with a few hundred filings often have less competition per
              opening. Use the filter to explore your industry, not just the
              famous names.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-slate-900">
            What Makes a Top H-1B Sponsor?
          </h2>
          <div className="mt-4 space-y-3">
            <p>
              Not all sponsors are equal. Three numbers separate the reliable
              ones from the risky ones:
            </p>
            <p>
              <strong className="text-slate-900">Filing volume.</strong>{" "}
              {topSponsor
                ? `${topSponsor.name} filed ${formatNum(topSponsor.cases)} LCAs in FY2026 — that's a company with dedicated immigration counsel and a repeatable process.`
                : "High-volume sponsors file thousands of LCAs a year."}{" "}
              High-volume sponsors rarely fumble paperwork, and their HR teams
              know exactly what a sponsorship case needs.
            </p>
            <p>
              <strong className="text-slate-900">LCA certification
              rate.</strong> This is the share of Labor Condition Applications
              the Department of Labor certified versus denied. Most top
              sponsors certify 95%+ of their LCAs. A low rate is a red flag —
              it signals sloppy filings or compliance trouble.
            </p>
            <p>
              <strong className="text-slate-900">Median salary.</strong> Salary
              is both a quality signal and a lottery signal: under the
              wage-weighted selection system, higher wage levels get more
              lottery entries. Employers paying well above the national H-1B
              median tend to sponsor more senior roles — and those roles win
              lotteries more often.
            </p>
            <p>
              Combine all three: a company with thousands of filings, a 99%+
              certification rate, and strong salaries is the gold standard.
              That&apos;s exactly what this list of companies that sponsor
              H-1B lets you compare at a glance.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-slate-900">
            How to Find Companies That Sponsor H-1B Visas
          </h2>
          <div className="mt-4 space-y-3">
            <p>
              Beyond this list, here are the practical moves that actually
              work:
            </p>
            <p>
              <strong className="text-slate-900">1. Start with the data, not
              job boards.</strong> Most job postings never mention
              sponsorship. This list of US companies that sponsor H-1B visas
              tells you which employers already do it — then go find their
              open roles on their careers pages.
            </p>
            <p>
              <strong className="text-slate-900">2. Match your job
              title.</strong> Our{" "}
              <Link
                href="/tools/sponsor-match"
                className="text-blue-700 underline underline-offset-2"
              >
                sponsor-match tool
              </Link>{" "}
              lets you enter your job title and see which companies sponsor
              that exact role, with real salary numbers. Generic
              &ldquo;tech companies&rdquo; lists waste your time; title-level
              data doesn&apos;t.
            </p>
            <p>
              <strong className="text-slate-900">3. Check the lottery odds
              angle.</strong> If you need the H-1B lottery, your wage level
              matters. Use our{" "}
              <Link
                href="/tools/lottery-odds"
                className="text-blue-700 underline underline-offset-2"
              >
                lottery odds calculator
              </Link>{" "}
              to see how your salary maps to selection chances — then target
              sponsors known to pay at higher wage levels.
            </p>
            <p>
              <strong className="text-slate-900">4. Don&apos;t ignore staffing
              and consulting firms.</strong> A big share of the{" "}
              {formatNum(totalFilings)} FY2026 filings on this list came from
              IT consulting and staffing companies. They sponsor aggressively
              and hire year-round.
            </p>
            <p>
              <strong className="text-slate-900">5. Network with
              intent.</strong> Once you&apos;ve shortlisted 10–20 sponsors from
              this list, find their recruiters on LinkedIn.
              &ldquo;I see your company filed H-1B petitions last year&rdquo;
              is a much stronger opener than a cold application.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-slate-900">
            Understanding the Data
          </h2>
          <div className="mt-4 space-y-3">
            <p>
              Every number on this page comes from the U.S. Department of
              Labor&apos;s Labor Condition Application (LCA) disclosure data
              for FY2026 — the same filings employers must submit before
              hiring H-1B workers.
            </p>
            <p>
              An LCA is not the visa petition itself. The process has two
              steps: first the employer files an LCA with the Department of
              Labor (certifying wage and working conditions), then files the
              H-1B petition with USCIS. Our &ldquo;certification rate&rdquo;
              measures step one — the DOL&apos;s decision — not USCIS petition
              outcomes.
            </p>
            <p>
              Why does this matter? Because DOL data is public, complete, and
              filed before the petition — it gives the truest picture of which
              companies actually sponsor, how many workers they sponsor, and
              what they pay. No surveys, no self-reporting, no guesswork.
            </p>
            <p>
              This list of H-1B visa sponsoring companies covers the top{" "}
              {count} employers by FY2026 filings out of more than 50,000
              employers in the full DOL dataset. The cutoff for the ranking is{" "}
              {formatNum(minCases)} filings — employers below that line
              didn&apos;t make this page, but the underlying data still
              exists.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ section */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-slate-900">
          Frequently asked questions
        </h2>
        <div className="mt-6 space-y-4">
          {faqs.map((f) => (
            <div
              key={f.q}
              className="rounded-lg border border-slate-200 p-5"
            >
              <h3 className="font-semibold text-slate-900">{f.q}</h3>
              <p className="mt-2 text-sm text-slate-600">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      <p className="mt-8 text-xs text-slate-500">
        Data: U.S. Department of Labor LCA disclosure files, FY2026.
        Certification rates are LCA certification rates, not USCIS petition
        outcomes.{" "}
        <Link href="/about" className="text-blue-700 underline underline-offset-2">
          Learn about our methodology
        </Link>
        .
      </p>
    </div>
  );
}
