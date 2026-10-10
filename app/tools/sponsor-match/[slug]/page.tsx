import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getTitles } from "@/lib/data";
import { formatNum, formatUSD } from "@/lib/format";

const BASE = "https://visatalentusa.com";

export async function generateStaticParams() {
  const titles = await getTitles();
  return titles.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const titles = await getTitles();
  const t = titles.find((x) => x.slug === slug);
  if (!t) return {};
  const url = `${BASE}/tools/sponsor-match/${t.slug}`;
  const title = `${t.title} H-1B Sponsors — Top Companies, Salaries & Filing Data`;
  const description = `Which companies sponsor H-1B visas for ${t.title}s? ${formatNum(t.total_cases)} FY2026 filings, median salary ${t.median_wage != null ? formatUSD(t.median_wage) : "n/a"}, and the top sponsoring employers — from 1.5M+ real DOL records.`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: "article",
      siteName: "VisaTalentUSA",
    },
    twitter: { card: "summary_large_image" },
  };
}

export default async function TitleReportPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const titles = await getTitles();
  const t = titles.find((x) => x.slug === slug);
  if (!t) notFound();

  const url = `${BASE}/tools/sponsor-match/${t.slug}`;
  const rate =
    t.total_cases > 0 ? (t.certified_cases / t.total_cases) * 100 : null;
  const topEmployers = t.top_employers.slice(0, 10);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: `${t.title} H-1B Sponsors — Top Companies, Salaries & Filing Data`,
        description: `Which companies sponsor H-1B visas for ${t.title}s? Filing counts, median salaries, and top employers from official DOL LCA disclosure data.`,
        url,
        datePublished: "2026-10-11T00:00:00+00:00",
        dateModified: "2026-10-11T00:00:00+00:00",
        author: {
          "@type": "Organization",
          name: "VisaTalentUSA",
          url: `${BASE}/`,
        },
        publisher: {
          "@type": "Organization",
          name: "VisaTalentUSA",
          url: `${BASE}/`,
        },
        mainEntityOfPage: url,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${BASE}/` },
          {
            "@type": "ListItem",
            position: 2,
            name: "Sponsor Match Finder",
            item: `${BASE}/tools/sponsor-match`,
          },
          { "@type": "ListItem", position: 3, name: t.title, item: url },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: `Which companies sponsor H-1B visas for ${t.title}s?`,
            acceptedAnswer: {
              "@type": "Answer",
              text: `The top H-1B sponsors for ${t.title}s in FY2026 include ${topEmployers
                .slice(0, 3)
                .map((e) => e.employer)
                .join(", ")} — ranked by official DOL Labor Condition Application filing counts.`,
            },
          },
          {
            "@type": "Question",
            name: `What is the median H-1B salary for ${t.title}s?`,
            acceptedAnswer: {
              "@type": "Answer",
              text: `The median offered annual salary for ${t.title} H-1B filings in FY2026 was ${
                t.median_wage != null ? formatUSD(t.median_wage) : "not available"
              }, based on ${formatNum(t.total_cases)} official DOL records.`,
            },
          },
          {
            "@type": "Question",
            name: `How many H-1B visas were filed for ${t.title}s?`,
            acceptedAnswer: {
              "@type": "Answer",
              text: `${formatNum(t.total_cases)} H-1B Labor Condition Applications named the ${t.title} title in FY2026, with a DOL LCA certification rate of ${
                rate != null ? rate.toFixed(1) + "%" : "n/a"
              }.`,
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
        <span className="text-slate-700">{t.title}</span>
      </nav>

      <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
        {t.title} H-1B Sponsors
      </h1>
      <p className="mt-4 text-lg text-slate-600">
        Which companies sponsor H-1B visas for <strong>{t.title}s</strong>?
        Below are the top employers by FY2026 filing volume, the median offered
        salary, and the DOL LCA certification rate — all from 1.5M+ official
        Department of Labor disclosure records.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        <div className="rounded-lg bg-blue-50 p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-blue-700">
            FY2026 filings
          </p>
          <p className="mt-1 text-2xl font-bold text-blue-900">
            {formatNum(t.total_cases)}
          </p>
        </div>
        <div className="rounded-lg bg-emerald-50 p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">
            Median salary
          </p>
          <p className="mt-1 text-2xl font-bold text-emerald-900">
            {t.median_wage != null ? formatUSD(t.median_wage) : "—"}
          </p>
        </div>
        <div className="rounded-lg bg-violet-50 p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-violet-700">
            DOL LCA certification rate
          </p>
          <p className="mt-1 text-2xl font-bold text-violet-900">
            {rate != null ? `${rate.toFixed(1)}%` : "—"}
          </p>
        </div>
      </div>

      <h2 className="mt-10 text-2xl font-bold text-slate-900">
        Top 10 Companies Sponsoring {t.title}s
      </h2>
      <div className="mt-4 overflow-x-auto rounded-lg border border-slate-200">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-slate-50 text-left text-xs uppercase tracking-wide text-slate-500">
              <th className="px-4 py-2.5">#</th>
              <th className="px-4 py-2.5">Company</th>
              <th className="px-4 py-2.5 text-right">H-1B filings</th>
              <th className="px-4 py-2.5 text-right">Share</th>
            </tr>
          </thead>
          <tbody>
            {topEmployers.map((e, i) => (
              <tr key={e.employer} className="border-t border-slate-100">
                <td className="px-4 py-2.5 text-slate-500">{i + 1}</td>
                <td className="px-4 py-2.5 font-medium text-slate-800">
                  {e.employer}
                </td>
                <td className="px-4 py-2.5 text-right tabular-nums text-slate-700">
                  {formatNum(e.cases)}
                </td>
                <td className="px-4 py-2.5 text-right tabular-nums text-slate-500">
                  {t.total_cases > 0
                    ? `${((e.cases / t.total_cases) * 100).toFixed(1)}%`
                    : "—"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="mt-10 text-2xl font-bold text-slate-900">
        {t.title} H-1B FAQs
      </h2>
      <div className="mt-4 space-y-4">
        <div className="rounded-lg border border-slate-200 p-5">
          <h3 className="font-semibold text-slate-900">
            Which companies sponsor H-1B visas for {t.title}s?
          </h3>
          <p className="mt-2 text-sm text-slate-600">
            The top sponsors in FY2026 include{" "}
            {topEmployers
              .slice(0, 3)
              .map((e) => e.employer)
              .join(", ")}{" "}
            — ranked by official DOL filing counts in the table above.
          </p>
        </div>
        <div className="rounded-lg border border-slate-200 p-5">
          <h3 className="font-semibold text-slate-900">
            What is the median H-1B salary for {t.title}s?
          </h3>
          <p className="mt-2 text-sm text-slate-600">
            {t.median_wage != null
              ? `The median offered annual salary was ${formatUSD(t.median_wage)} across ${formatNum(t.total_cases)} FY2026 DOL filings.`
              : "Median salary data was not available for this title in FY2026."}{" "}
            Use it as a benchmark when evaluating offers.
          </p>
        </div>
        <div className="rounded-lg border border-slate-200 p-5">
          <h3 className="font-semibold text-slate-900">
            How many H-1B filings named this title?
          </h3>
          <p className="mt-2 text-sm text-slate-600">
            {formatNum(t.total_cases)} Labor Condition Applications in FY2026,
            with a DOL LCA certification rate of{" "}
            {rate != null ? `${rate.toFixed(1)}%` : "n/a"}. Remember: DOL
            certification covers the LCA paperwork — it is not a USCIS
            petition approval rate.
          </p>
        </div>
      </div>

      <div className="mt-10 rounded-lg border border-blue-200 bg-blue-50 p-5">
        <p className="font-semibold text-blue-900">Compare with more titles</p>
        <p className="mt-1 text-sm text-blue-800">
          Search any of 500 top job titles in the interactive Sponsor Match
          Finder.
        </p>
        <Link
          href="/tools/sponsor-match"
          className="mt-3 inline-block rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-800"
        >
          Open the Sponsor Match Finder →
        </Link>
      </div>
    </div>
  );
}
