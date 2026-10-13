import type { Metadata } from "next";
import Link from "next/link";
import { getTitles } from "@/lib/data";

export const metadata: Metadata = {
  title: "Browse All H-1B Job Titles A-Z | VisaTalentUSA",
  description:
    "Browse the complete A-Z list of 500 H-1B job titles with real sponsor data: total filings, median salaries, and DOL LCA certification rates from 1.5M+ official Department of Labor records.",
  keywords: [
    "h1b job titles",
    "h1b job titles list",
    "h1b sponsored job titles",
    "h1b sponsor by job title",
  ],
  alternates: { canonical: "https://visatalentusa.com/tools/sponsor-match/titles" },
  openGraph: {
    title: "Browse All H-1B Job Titles A-Z | VisaTalentUSA",
    description:
      "The complete A-Z directory of 500 H-1B job titles with real filing counts, median salaries, and sponsor data from official DOL records.",
    url: "https://visatalentusa.com/tools/sponsor-match/titles",
    type: "website",
    siteName: "VisaTalentUSA",
  },
  twitter: {
    card: "summary_large_image",
    title: "Browse All H-1B Job Titles A-Z",
    description:
      "500 H-1B job titles with real sponsor data — filings, salaries, and certification rates. Free.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

function letterOf(title: string): string {
  const ch = title.trim().charAt(0).toUpperCase();
  return ch >= "A" && ch <= "Z" ? ch : "#";
}

export default async function TitlesHubPage() {
  const titles = await getTitles();
  const sorted = [...titles].sort((a, b) => b.total_cases - a.total_cases);

  const groups = new Map<string, typeof sorted>();
  for (const t of sorted) {
    const letter = letterOf(t.title);
    if (!groups.has(letter)) groups.set(letter, []);
    groups.get(letter)!.push(t);
  }
  const letters = [...groups.keys()].sort();

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
            name: "H-1B Sponsor Match Finder",
            item: "https://visatalentusa.com/tools/sponsor-match",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Browse All Job Titles",
            item: "https://visatalentusa.com/tools/sponsor-match/titles",
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
        <Link
          href="/tools/sponsor-match"
          className="hover:text-blue-700 underline underline-offset-2"
        >
          Sponsor Match Finder
        </Link>
        <span className="mx-2">/</span>
        <span className="text-slate-700">All Job Titles</span>
      </nav>

      <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
        Browse All {sorted.length} H-1B Job Titles A-Z
      </h1>
      <p className="mt-4 text-lg text-slate-600">
        Every job title in our H-1B database, grouped alphabetically. Click any
        title for the full sponsor report: total filings, median offered
        salary, DOL LCA certification rate, and the top sponsoring companies —
        all from 1.5M+ official Department of Labor records.
      </p>

      {/* Sticky A-Z jump nav */}
      <nav
        aria-label="Jump to letter"
        className="sticky top-0 z-10 mt-8 rounded-lg border border-slate-200 bg-white/95 py-2 shadow-sm backdrop-blur"
      >
        <div className="flex flex-wrap justify-center gap-1 px-2">
          {letters.map((l) => (
            <a
              key={l}
              href={`#letter-${l}`}
              className="flex h-8 w-8 items-center justify-center rounded-md text-sm font-bold text-blue-700 hover:bg-blue-50"
            >
              {l}
            </a>
          ))}
        </div>
      </nav>

      <div className="mt-10 space-y-10">
        {letters.map((l) => (
          <section key={l} id={`letter-${l}`} className="scroll-mt-24">
            <h2 className="flex items-center gap-3 border-b border-slate-200 pb-2 text-2xl font-bold text-slate-900">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-blue-800">
                {l}
              </span>
              <span className="text-base font-normal text-slate-500">
                {groups.get(l)!.length} title{groups.get(l)!.length === 1 ? "" : "s"}
              </span>
            </h2>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {groups.get(l)!.map((t) => (
                <li key={t.slug}>
                  <Link
                    href={`/tools/sponsor-match/${t.slug}`}
                    className="flex items-baseline justify-between gap-3 rounded-lg border border-slate-200 bg-white p-3 text-sm font-medium text-blue-700 hover:border-blue-300 hover:bg-blue-50"
                  >
                    <span>{t.title}</span>
                    <span className="shrink-0 text-xs font-normal tabular-nums text-slate-500">
                      {t.total_cases.toLocaleString()} filings
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <div className="mt-12 rounded-xl bg-slate-50 p-6">
        <h2 className="text-xl font-bold text-slate-900">Related tools</h2>
        <ul className="mt-4 space-y-3 text-sm">
          <li>
            <Link
              href="/tools/sponsor-match"
              className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900"
            >
              H-1B Sponsor Match Finder
            </Link>
            <p className="mt-1 text-slate-600">
              Search your job title and instantly see the top sponsoring
              companies with real salaries.
            </p>
          </li>
          <li>
            <Link
              href="/sponsors"
              className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900"
            >
              Top 1,000 H-1B Sponsors
            </Link>
            <p className="mt-1 text-slate-600">
              Browse the full employer database ranked by FY2026 filings.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
