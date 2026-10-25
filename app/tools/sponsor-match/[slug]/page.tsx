import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getTitles, getSiteStats, type TitleEntry } from "@/lib/data";
import { formatNum, formatUSD } from "@/lib/format";

const BASE = "https://visatalentusa.com";

// Job-title pages that are code artifacts or meaningless generics — served
// with noindex (see generateMetadata) and kept out of the sitemap.
const JUNK_TITLES = new Set([
  "ii", "ui", "ar", "avp", "systems", "software", "leader", "staff", "tiktok-shop",
]);
function isJunkTitle(slug: string): boolean {
  return JUNK_TITLES.has(slug) || /-jc\d+/.test(slug);
}

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
  const rank = titles.findIndex((x) => x.slug === slug) + 1;
  const url = `${BASE}/tools/sponsor-match/${t.slug}`;
  const title = `${t.title} H-1B Sponsors — Top Companies, Salaries & Filing Data`;
  const description = `Which companies sponsor H-1B visas for the ${t.title} title? Ranked #${rank} of 500 titles with ${formatNum(t.total_cases)} FY2026 (through Q3) filings, median salary ${t.median_wage != null ? formatUSD(t.median_wage) : "n/a"}, and the top sponsoring employers — from 1.5M+ real DOL records.`;
  return {
    title,
    description,
    ...(isJunkTitle(slug) ? { robots: { index: false, follow: true } } : {}),
    alternates: { canonical: url },
    openGraph: {
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "VisaTalentUSA — H-1B Sponsor Database" }],
      title,
      description,
      url,
      type: "article",
      siteName: "VisaTalentUSA",
    },
    twitter: { card: "summary_large_image" },
  };
}

// ---------------------------------------------------------------------------
// Data-driven content builders — every title page gets unique copy generated
// from its own DOL numbers. No invented facts; all claims derive from the
// TitleEntry fields (FY2026 (through Q3) filings, wages, top employers) plus site-wide
// aggregates (national median salary, average certification rate across titles).
// ---------------------------------------------------------------------------

function rankOf(t: TitleEntry, titles: TitleEntry[]): number {
  return titles.findIndex((x) => x.slug === t.slug) + 1;
}

function certRate(t: TitleEntry): number | null {
  return t.total_cases > 0 ? (t.certified_cases / t.total_cases) * 100 : null;
}

/** Share (%) of this title's filings held by its top-n employers. */
function topShare(t: TitleEntry, n: number): number | null {
  if (t.total_cases <= 0 || t.top_employers.length === 0) return null;
  const s = t.top_employers.slice(0, n).reduce((a, e) => a + e.cases, 0);
  return (s / t.total_cases) * 100;
}

function avgCertRate(titles: TitleEntry[]): number {
  const rs = titles
    .map(certRate)
    .filter((r): r is number => r != null);
  return rs.length ? rs.reduce((a, b) => a + b, 0) / rs.length : 0;
}

function pct(n: number): string {
  return `${n >= 0 ? "+" : ""}${n.toFixed(1)}%`;
}

interface TitleContext {
  rank: number;
  rate: number | null;
  top1Share: number | null;
  top3Share: number | null;
  avgRate: number;
  nationalMedian: number;
  allFilings: number;
}

/** 2–3 sentence intro, unique per title via rank/salary/employer data. */
function buildIntro(t: TitleEntry, ctx: TitleContext): string[] {
  const s: string[] = [];
  const name = t.title;

  // Sentence 1: volume + rank (wording varies by rank tier)
  if (ctx.rank <= 10) {
    s.push(
      `${name} is one of America's most-sponsored H-1B job titles — #${ctx.rank} of 500 tracked — with ${formatNum(t.total_cases)} FY2026 (through Q3) Labor Condition Applications.`
    );
  } else if (ctx.rank <= 100) {
    s.push(
      `${name} ranks #${ctx.rank} of 500 H-1B job titles by FY2026 (through Q3) filing volume, with ${formatNum(t.total_cases)} applications.`
    );
  } else {
    s.push(
      `${formatNum(t.total_cases)} H-1B applications named the ${name} title in FY2026 (through Q3), placing it #${ctx.rank} of the 500 titles tracked.`
    );
  }

  // Sentence 2: salary position vs national median (+ skew when pronounced)
  if (t.median_wage == null) {
    s.push(`Salary data was not disclosed for this title in the FY2026 (through Q3) filings.`);
  } else {
    const diff = ((t.median_wage - ctx.nationalMedian) / ctx.nationalMedian) * 100;
    const m = formatUSD(t.median_wage);
    const nm = formatUSD(ctx.nationalMedian);
    if (diff >= 15) {
      s.push(`The median offered salary of ${m} is well above the national H-1B median of ${nm}.`);
    } else if (diff >= 0) {
      s.push(`The median offered salary of ${m} sits above the national H-1B median of ${nm}.`);
    } else if (diff >= -15) {
      s.push(`The median offered salary of ${m} lands just below the national H-1B median of ${nm}.`);
    } else {
      s.push(`The median offered salary of ${m} is below the national H-1B median of ${nm}.`);
    }
    if (t.avg_wage != null && t.median_wage > 0) {
      const skew = ((t.avg_wage - t.median_wage) / t.median_wage) * 100;
      if (skew >= 10) {
        s.push(
          `The average of ${formatUSD(t.avg_wage)} runs ${skew.toFixed(0)}% above the median, so a smaller set of high-paid filings pulls the average up.`
        );
      } else if (skew <= -10) {
        s.push(
          `The average of ${formatUSD(t.avg_wage)} runs ${Math.abs(skew).toFixed(0)}% below the median.`
        );
      }
    }
  }

  // Sentence 3: employer concentration (wording varies by concentration)
  const top1 = t.top_employers[0];
  if (top1 && ctx.top1Share != null) {
    if (ctx.top1Share >= 25) {
      s.push(
        `Hiring is heavily concentrated: ${top1.employer} alone filed ${ctx.top1Share.toFixed(1)}% of all ${name} LCAs.`
      );
    } else if (ctx.top1Share >= 12 && t.top_employers[2]) {
      s.push(
        `${top1.employer} leads ${name} hiring with ${ctx.top1Share.toFixed(1)}% of filings, followed by ${t.top_employers[1].employer} and ${t.top_employers[2].employer}.`
      );
    } else if (ctx.top1Share >= 5) {
      s.push(
        `Hiring is spread across many sponsors — even the largest, ${top1.employer}, accounts for just ${ctx.top1Share.toFixed(1)}% of filings.`
      );
    } else {
      s.push(
        `Filings are spread across a wide field of sponsors; the top filer, ${top1.employer}, holds only ${ctx.top1Share.toFixed(1)}% of them.`
      );
    }
  }
  return s;
}

/** 4 data-driven key insights, each unique per title. */
function buildInsights(t: TitleEntry, ctx: TitleContext): { label: string; text: string }[] {
  const out: { label: string; text: string }[] = [];
  const name = t.title;

  // 1. Salary position
  if (t.median_wage != null) {
    const diff = ((t.median_wage - ctx.nationalMedian) / ctx.nationalMedian) * 100;
    out.push({
      label: "Salary position",
      text: `Median offered pay of ${formatUSD(t.median_wage)} is ${pct(diff)} vs the national H-1B median of ${formatUSD(ctx.nationalMedian)}.`,
    });
  } else {
    out.push({
      label: "Salary position",
      text: `No median salary was disclosed for ${name} in FY2026 (through Q3) filings.`,
    });
  }

  // 2. Employer concentration
  const top1 = t.top_employers[0];
  if (top1 && ctx.top1Share != null && ctx.top3Share != null) {
    const concentrated = ctx.top1Share >= 15;
    out.push({
      label: "Employer concentration",
      text: concentrated
        ? `${top1.employer} dominates with ${ctx.top1Share.toFixed(1)}% of filings; the top three sponsors together hold ${ctx.top3Share.toFixed(1)}%.`
        : `No single employer dominates: ${top1.employer} leads with only ${ctx.top1Share.toFixed(1)}% of filings, and the top three hold ${ctx.top3Share.toFixed(1)}% combined.`,
    });
  }

  // 3. Certification rate vs title average
  if (ctx.rate != null) {
    const d = ctx.rate - ctx.avgRate;
    const vs =
      d >= 5
        ? `above the ${ctx.avgRate.toFixed(1)}% average across tracked titles`
        : d <= -5
          ? `below the ${ctx.avgRate.toFixed(1)}% average across tracked titles`
          : `roughly in line with the ${ctx.avgRate.toFixed(1)}% average across tracked titles`;
    out.push({
      label: "Certification rate",
      text: `DOL certified ${ctx.rate.toFixed(1)}% of ${name} LCAs — ${vs}. (DOL certification covers LCA paperwork, not USCIS petition outcomes.)`,
    });
  }

  // 4. Scale context
  const shareAll = ctx.allFilings > 0 ? (t.total_cases / ctx.allFilings) * 100 : 0;
  out.push({
    label: "Scale",
    text: `Ranked #${ctx.rank} of 500 titles, ${name} accounts for ${shareAll >= 1 ? shareAll.toFixed(1) : shareAll.toFixed(2)}% of all tracked title filings.`,
  });

  return out;
}

/** FAQ answers with title-specific context (kept in sync with JSON-LD). */
function buildFaqs(t: TitleEntry, ctx: TitleContext): { q: string; a: string }[] {
  const name = t.title;
  const top3 = t.top_employers.slice(0, 3);
  const top3Names = top3.map((e) => e.employer).join(", ") || "the employers in the table above";

  const concNote =
    ctx.top3Share != null
      ? ctx.top3Share >= 30
        ? `Together, the top three account for ${ctx.top3Share.toFixed(1)}% of all ${name} filings, showing concentrated hiring.`
        : `The top three together hold ${ctx.top3Share.toFixed(1)}% of filings, with hiring spread across many employers.`
      : "";

  let salaryA: string;
  if (t.median_wage != null) {
    const diff = ((t.median_wage - ctx.nationalMedian) / ctx.nationalMedian) * 100;
    const pos =
      diff >= 0
        ? `${pct(diff)} above the national H-1B median of ${formatUSD(ctx.nationalMedian)}`
        : `${pct(diff)} below the national H-1B median of ${formatUSD(ctx.nationalMedian)}`;
    salaryA = `The median offered annual salary was ${formatUSD(t.median_wage)} across ${formatNum(t.total_cases)} FY2026 (through Q3) DOL filings — ${pos}. Use it as a benchmark when evaluating offers.`;
  } else {
    salaryA = `Median salary data was not available for ${name} in FY2026 (through Q3).`;
  }

  const certA =
    ctx.rate != null
      ? `${formatNum(t.total_cases)} Labor Condition Applications in FY2026 (through Q3), with a DOL LCA certification rate of ${ctx.rate.toFixed(1)}% — ${ctx.rate >= ctx.avgRate ? "at or above" : "below"} the ${ctx.avgRate.toFixed(1)}% average across tracked titles. Remember: DOL certification covers the LCA paperwork — it is not a USCIS petition approval rate.`
      : `${formatNum(t.total_cases)} Labor Condition Applications in FY2026 (through Q3). Remember: DOL certification covers the LCA paperwork — it is not a USCIS petition approval rate.`;

  return [
    {
      q: `Which companies sponsor H-1B visas for the ${name} title?`,
      a: `The top sponsors in FY2026 (through Q3) include ${top3Names} — ranked by official DOL filing counts in the table above. ${concNote}`.trim(),
    },
    {
      q: `What is the median H-1B salary for the ${name} title?`,
      a: salaryA,
    },
    {
      q: `How many H-1B filings named this title?`,
      a: certA,
    },
  ];
}

/** 4 nearest-neighbor titles by FY2026 (through Q3) filing volume (similar-scale roles). */
function relatedTitles(t: TitleEntry, titles: TitleEntry[]): TitleEntry[] {
  const sorted = [...titles].sort((a, b) => b.total_cases - a.total_cases);
  const i = sorted.findIndex((x) => x.slug === t.slug);
  const out: TitleEntry[] = [];
  for (let off = 1; out.length < 4 && (i - off >= 0 || i + off < sorted.length); off++) {
    if (i - off >= 0) out.push(sorted[i - off]);
    if (out.length < 4 && i + off < sorted.length) out.push(sorted[i + off]);
  }
  return out;
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

  const stats = await getSiteStats();
  const ctx: TitleContext = {
    rank: rankOf(t, titles),
    rate: certRate(t),
    top1Share: topShare(t, 1),
    top3Share: topShare(t, 3),
    avgRate: avgCertRate(titles),
    nationalMedian: stats.median_wage_fy2026,
    allFilings: titles.reduce((a, x) => a + x.total_cases, 0),
  };

  const url = `${BASE}/tools/sponsor-match/${t.slug}`;
  const topEmployers = t.top_employers.slice(0, 10);
  const intro = buildIntro(t, ctx);
  const insights = buildInsights(t, ctx);
  const faqs = buildFaqs(t, ctx);
  const related = relatedTitles(t, titles);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: `${t.title} H-1B Sponsors — Top Companies, Salaries & Filing Data`,
        description: `Which companies sponsor H-1B visas for the ${t.title} title? Ranked #${ctx.rank} of 500 titles with ${formatNum(t.total_cases)} FY2026 (through Q3) filings, median salary ${t.median_wage != null ? formatUSD(t.median_wage) : "n/a"}, and the top sponsoring employers from official DOL LCA disclosure data.`,
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
        mainEntity: faqs.map((f) => ({
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
      <div className="mt-4 space-y-3 text-lg text-slate-600">
        {intro.map((s, i) => (
          <p key={i}>{s}</p>
        ))}
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        <div className="rounded-lg bg-blue-50 p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-blue-700">
            FY2026 (through Q3) filings
          </p>
          <p className="mt-1 text-2xl font-bold text-blue-900">
            {formatNum(t.total_cases)}
          </p>
          <p className="mt-1 text-xs text-blue-700">
            #{ctx.rank} of 500 titles
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
            {ctx.rate != null ? `${ctx.rate.toFixed(1)}%` : "—"}
          </p>
        </div>
      </div>

      <h2 className="mt-10 text-2xl font-bold text-slate-900">
        Key Insights: {t.title} H-1B Data
      </h2>
      <ul className="mt-4 space-y-3">
        {insights.map((ins) => (
          <li
            key={ins.label}
            className="rounded-lg border border-slate-200 bg-white p-4"
          >
            <p className="text-sm font-bold uppercase tracking-wide text-slate-500">
              {ins.label}
            </p>
            <p className="mt-1 text-sm leading-relaxed text-slate-700">
              {ins.text}
            </p>
          </li>
        ))}
      </ul>

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
                <td className="px-4 py-2.5 font-medium">
                  <Link
                    href={`/sponsors/${e.employer.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`}
                    className="text-blue-700 underline underline-offset-2 hover:text-blue-900"
                  >
                    {e.employer}
                  </Link>
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
        {faqs.map((f) => (
          <div key={f.q} className="rounded-lg border border-slate-200 p-5">
            <h3 className="font-semibold text-slate-900">{f.q}</h3>
            <p className="mt-2 text-sm text-slate-600">{f.a}</p>
          </div>
        ))}
      </div>

      <h2 className="mt-10 text-2xl font-bold text-slate-900">
        Related Job Titles
      </h2>
      <p className="mt-2 text-sm text-slate-600">
        Similar-scale H-1B titles by FY2026 (through Q3) filing volume:
      </p>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {related.map((r) => (
          <Link
            key={r.slug}
            href={`/tools/sponsor-match/${r.slug}`}
            className="rounded-lg border border-slate-200 bg-white p-4 hover:border-blue-300 hover:bg-blue-50/50"
          >
            <p className="font-semibold text-blue-700">{r.title}</p>
            <p className="mt-1 text-xs text-slate-500">
              {formatNum(r.total_cases)} FY2026 (through Q3) filings
              {r.median_wage != null ? ` · ${formatUSD(r.median_wage)} median` : ""}
            </p>
          </Link>
        ))}
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
