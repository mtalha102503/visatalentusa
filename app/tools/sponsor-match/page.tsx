import type { Metadata } from "next";
import Link from "next/link";
import { getTitles } from "@/lib/data";
import SponsorMatchSearch from "./SponsorMatchSearch";

export const metadata: Metadata = {
  title: "H-1B Sponsor Match Finder — Find Companies That Sponsor Your Job Title",
  description:
    "Free H-1B sponsor match tool: enter your job title and instantly see which companies sponsor the most H-1B visas for it, with real salaries and DOL LCA certification rates from 1.5M+ official records.",
  keywords: [
    "h1b sponsor finder",
    "find h1b sponsors by job title",
    "companies that sponsor h1b",
    "h1b job title search",
    "h1b sponsors for software engineers",
  ],
  alternates: { canonical: "https://visatalentusa.com/tools/sponsor-match" },
  openGraph: {
    title: "H-1B Sponsor Match Finder | VisaTalentUSA",
    description:
      "Enter your job title — instantly see the top H-1B sponsoring companies, real salaries, and certification rates. Free tool built on 1.5M+ DOL records.",
    url: "https://visatalentusa.com/tools/sponsor-match",
    type: "website",
    siteName: "VisaTalentUSA",
  },
  twitter: {
    card: "summary_large_image",
    title: "H-1B Sponsor Match Finder",
    description:
      "Find companies that sponsor H-1B visas for your job title — with real salary data. Free.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const FAQS = [
  {
    q: "How do I find companies that sponsor H-1B visas for my job title?",
    a: "Type your job title into the Sponsor Match Finder above. It searches 1.5M+ official Department of Labor H-1B disclosure records and instantly shows the companies filing the most LCAs for that exact title, their median offered salaries, and DOL LCA certification rates.",
  },
  {
    q: "Is this H-1B sponsor data real?",
    a: "Yes. Every number comes from the U.S. Department of Labor's official Labor Condition Application (LCA) disclosure data — 1,532,089 H-1B records across FY2024–FY2026, normalized through an open-source pipeline. No estimates, no dummy data.",
  },
  {
    q: "What does the DOL LCA certification rate mean?",
    a: "It is the share of a company's (or job title's) Labor Condition Applications that the Department of Labor certified, out of all filed. Note this is DOL certification of the LCA — not USCIS petition approval. A high certification rate signals clean, compliant filings.",
  },
  {
    q: "My job title has a typo / isn't found. What now?",
    a: "The tool only matches verified job titles that appear in official DOL records — misspelled searches don't create pages. Try a broader term (e.g. 'Engineer' instead of a niche variant), or pick from the popular titles. If you typed a typo, use the closest suggestion.",
  },
  {
    q: "Does a high filing count mean a company will sponsor me?",
    a: "Not automatically — it means the company has an active, proven H-1B program for that role. Filing volume is the strongest public signal of sponsorship willingness, but hiring still depends on open roles, your qualifications, and the lottery. Use the list to target your applications, not as a guarantee.",
  },
  {
    q: "Can I use this to compare salary offers?",
    a: "Yes. Each title report shows the median offered salary across all DOL filings for that job title — a solid real-world benchmark. Compare it against your offer and against specific companies' medians on their sponsor pages.",
  },
  {
    q: "Which job titles have the most H-1B sponsors?",
    a: "Software Engineer dominates by far (40,000+ FY2026 filings), followed by Software Developer, Manager, and Engineer. Tech occupations account for the majority of H-1B filings, but healthcare, finance, and education titles also have active sponsor lists — search yours above.",
  },
  {
    q: "How is this different from other H-1B sponsor finders?",
    a: "Most finders show generic company lists. The Sponsor Match Finder ranks companies specifically for YOUR job title using actual per-title filing counts, pairs each with real median salaries, and links every title to a full SEO report page with tables you can study before applying.",
  },
];

export default async function SponsorMatchPage() {
  const titles = await getTitles();
  const sorted = [...titles].sort((a, b) => b.total_cases - a.total_cases);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        name: "H-1B Sponsor Match Finder — Find Companies That Sponsor Your Job Title",
        description:
          "Free interactive tool: enter any job title and instantly see which companies sponsor the most H-1B visas for it, with real median salaries and DOL LCA certification rates from 1.5M+ official records.",
        url: "https://visatalentusa.com/tools/sponsor-match",
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
            item: "https://visatalentusa.com/tools/sponsor-match",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "H-1B Sponsor Match Finder",
            item: "https://visatalentusa.com/tools/sponsor-match",
          },
        ],
      },
      {
        "@type": "HowTo",
        name: "How to find H-1B sponsors for your job title",
        step: [
          {
            "@type": "HowToStep",
            name: "Enter your job title",
            text: "Type your job title into the search box — for example 'Data Analyst' or 'Software Engineer'. The tool suggests verified titles from official DOL records as you type.",
          },
          {
            "@type": "HowToStep",
            name: "Review the match results",
            text: "See total H-1B filings, median offered salary, and the DOL LCA certification rate for your title, plus a ranked table of the top sponsoring companies.",
          },
          {
            "@type": "HowToStep",
            name: "Open the full report",
            text: "Click through to the full sponsor report page for your title — built for search engines and packed with tables you can use to plan applications.",
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
        <span className="text-slate-700">H-1B Sponsor Match Finder</span>
      </nav>

      <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
        H-1B Sponsor Match Finder
      </h1>
      <div className="mt-4 max-w-3xl space-y-3 text-slate-600">
        <p className="text-lg">
          Which companies actually sponsor H-1B visas <strong>for your job
          title</strong>? Stop guessing. Type your title below and instantly
          see the <strong>top sponsoring companies</strong>,{" "}
          <strong>real median salaries</strong>, and{" "}
          <strong>DOL LCA certification rates</strong> — all from 1.5M+
          official Department of Labor records.
        </p>
      </div>

      <div className="mt-8">
        <SponsorMatchSearch titles={sorted} />
      </div>

      {/* Popular titles - internal links to SEO pages */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-slate-900">
          Popular Job Titles
        </h2>
        <p className="mt-2 text-slate-600">
          Browse H-1B sponsor data for the most-searched job titles:
        </p>
        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
          {sorted.slice(0, 24).map((t) => (
            <Link
              key={t.slug}
              href={`/tools/sponsor-match/${t.slug}`}
              className="rounded-lg border border-slate-200 bg-white p-3 text-sm font-medium text-blue-700 hover:border-blue-300 hover:bg-blue-50"
            >
              {t.title}
              <span className="block text-xs font-normal text-slate-500">
                {t.total_cases.toLocaleString()} filings
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* How to use */}
      <section className="mt-14">
        <h2 className="text-2xl font-bold text-slate-900">
          How to Use the Sponsor Match Finder
        </h2>
        <div className="mt-6 space-y-4">
          <div className="rounded-lg border border-slate-200 p-5">
            <p className="font-semibold text-slate-900">
              <span className="mr-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-800">1</span>
              Enter your job title
            </p>
            <p className="mt-2 text-sm text-slate-600">
              Start typing — e.g. &ldquo;Software Engineer&rdquo;,
              &ldquo;Data Analyst&rdquo;, or &ldquo;Accountant&rdquo;. The
              search suggests only verified titles that appear in official DOL
              H-1B records, so typos won&apos;t lead you astray: you&apos;ll get
              a &ldquo;try a broader term&rdquo; hint instead of a dead end.
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 p-5">
            <p className="font-semibold text-slate-900">
              <span className="mr-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-800">2</span>
              Read your match snapshot
            </p>
            <p className="mt-2 text-sm text-slate-600">
              You&apos;ll see three numbers that matter: total H-1B filings
              for the title (demand signal), median offered salary (your
              negotiation benchmark), and the DOL LCA certification rate (a
              compliance-quality signal) — plus a ranked table of the top 10
              sponsoring companies with their filing counts.
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 p-5">
            <p className="font-semibold text-slate-900">
              <span className="mr-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-800">3</span>
              Open the full report page
            </p>
            <p className="mt-2 text-sm text-slate-600">
              Every title has a dedicated report page (
              <code className="rounded bg-slate-100 px-1 text-xs">/tools/sponsor-match/&lt;title&gt;</code>)
              with the full top-employer table, salary context, and FAQs.
              Bookmark it, share it, and use it to shortlist where to apply.
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 p-5">
            <p className="font-semibold text-slate-900">
              <span className="mr-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-800">4</span>
              Cross-check the sponsors
            </p>
            <p className="mt-2 text-sm text-slate-600">
              Click through to any company&apos;s page in our{" "}
              <Link href="/sponsors" className="text-blue-700 underline underline-offset-2">
                Top 1,000 sponsor database
              </Link>{" "}
              to see its overall filing history, wage trends, and worksite
              states before you apply.
            </p>
          </div>
        </div>
      </section>

      {/* Who should use */}
      <section className="mt-14">
        <h2 className="text-2xl font-bold text-slate-900">
          Who Should Use This Tool?
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-5">
            <p className="font-semibold text-slate-900">Job seekers abroad</p>
            <p className="mt-1 text-sm text-slate-600">
              Find which U.S. employers actually hire people with your exact
              job title on H-1B — then target your applications instead of
              spraying résumés.
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-5">
            <p className="font-semibold text-slate-900">F-1 students on OPT</p>
            <p className="mt-1 text-sm text-slate-600">
              Your OPT clock is ticking. Prioritize employers with a proven
              H-1B track record for your role so your lottery registration has
              a real petition behind it.
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-5">
            <p className="font-semibold text-slate-900">Immigration attorneys</p>
            <p className="mt-1 text-sm text-slate-600">
              Quickly pull per-title filing volumes and salary benchmarks for
              client consultations, LCA strategy, and prevailing-wage
              discussions.
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-5">
            <p className="font-semibold text-slate-900">HR &amp; recruiters</p>
            <p className="mt-1 text-sm text-slate-600">
              Benchmark what competitors pay and file for a given title, and
              see which firms dominate sponsorship in your talent market.
            </p>
          </div>
        </div>
      </section>

      {/* Understanding the data */}
      <section className="mt-14">
        <h2 className="text-2xl font-bold text-slate-900">
          Understanding the Data
        </h2>
        <div className="mt-4 space-y-3 text-slate-600">
          <p>
            All figures come from the U.S. Department of Labor&apos;s Labor
            Condition Application (LCA) disclosure data — 1,532,089 H-1B
            records across FY2024–FY2026 — normalized through an open-source
            pipeline. Job titles are grouped and normalized (e.g.
            &ldquo;Sr. Software Engineer&rdquo; rolls into
            &ldquo;Software Engineer&rdquo;) so counts reflect real demand,
            not spelling variants.
          </p>
          <p>
            <strong>Filing counts</strong> show how many LCAs named the title
            in FY2026. <strong>Median salary</strong> is the median offered
            annual wage across those filings. The{" "}
            <strong>DOL LCA certification rate</strong> is certified ÷ filed —
            a DOL paperwork-compliance signal, not a USCIS petition approval
            rate.
          </p>
          <p>
            We say <strong>Top 1,000</strong> sponsors because our employer
            database covers the 1,000 largest H-1B filers — the most useful
            slice for job targeting, not an exhaustive list of all 52,000+
            filers.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="mt-14">
        <h2 className="text-2xl font-bold text-slate-900">
          Sponsor Match FAQs
        </h2>
        <div className="mt-6 space-y-4">
          {FAQS.map((f) => (
            <div key={f.q} className="rounded-lg border border-slate-200 p-5">
              <h3 className="font-semibold text-slate-900">{f.q}</h3>
              <p className="mt-2 text-sm text-slate-600">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="mt-10 rounded-lg border border-blue-200 bg-blue-50 p-5">
        <p className="font-semibold text-blue-900">Estimate your lottery odds too</p>
        <p className="mt-1 text-sm text-blue-800">
          Found your sponsors? Now check your H-1B lottery selection chances
          by wage level with our interactive calculator.
        </p>
        <Link
          href="/tools/lottery-odds"
          className="mt-3 inline-block rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-800"
        >
          Open the Lottery Odds Calculator →
        </Link>
      </div>
    </div>
  );
}
