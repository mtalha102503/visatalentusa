import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import {
  getSponsor,
  getSearchIndex,
  getSiteStats,
  formatNum,
  formatUSD,
  formatPct,
} from "@/lib/data";
import {
  composeIntro,
  composeFaqs,
  avgLotteryEntries,
  seniorShare,
  NATIONAL_MEDIAN,
} from "@/lib/analysis";

export async function generateStaticParams() {
  const index = await getSearchIndex();
  return index.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const s = await getSponsor(slug);
  if (!s) return {};
  const y = s.years["2026"];
  const title = `${s.display_name} H-1B Visa Sponsorship Data 2026 — Filings, Salaries, Approval Rate`;
  const description = `${s.display_name} filed ${y.total_cases.toLocaleString()} H-1B applications in FY2026 with a ${y.approval_rate != null ? (y.approval_rate * 100).toFixed(1) + "%" : "—"} approval rate and ${y.median_wage_annual != null ? "$" + Math.round(y.median_wage_annual).toLocaleString() : "—"} median salary. See top roles, worksite states, and lottery odds.`;
  const url = `https://visatalentusa.com/sponsors/${slug}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: "VisaTalentUSA",
      type: "article",
      images: [{ url: `/sponsors/${slug}/opengraph-image`, width: 1200, height: 630, alt: `${s.display_name} H-1B sponsorship data` }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`/sponsors/${slug}/opengraph-image`],
    },
  };
}

function StatCard({
  label,
  value,
  sub,
}: {
  label: string;
  value: string;
  sub?: string;
}) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-5">
      <p className="text-sm text-slate-500">{label}</p>
      <p className="mt-1 text-2xl font-bold tabular-nums text-slate-900">
        {value}
      </p>
      {sub && <p className="mt-1 text-xs text-slate-500">{sub}</p>}
    </div>
  );
}

export default async function SponsorPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const s = await getSponsor(slug);
  if (!s) notFound();

  const y = s.years["2026"];
  const prev = s.years["2025"];
  const index = await getSearchIndex();
  const stats = await getSiteStats();
  const rank = index.findIndex((e) => e.slug === slug) + 1;

  const intro = composeIntro(s, y, rank, stats.total_sponsors_fy2026);
  const faqs = composeFaqs(s, y, rank);
  const avgEntries = avgLotteryEntries(y.wage_level_mix);
  const senior = seniorShare(y.wage_level_mix);
  // Related = neighbors in the ranking (similar filing volume), not always the top 4.
  // This gives each page unique related links — better for UX and SEO.
  const rankIdx = index.findIndex((e) => e.slug === slug);
  const related: { slug: string; name: string; cases: number }[] = [];
  if (rankIdx >= 0) {
    // Take 2 above and 2 below in ranking
    for (const offset of [-2, -1, 1, 2]) {
      const e = index[rankIdx + offset];
      if (e && e.slug !== slug) related.push(e);
    }
  }
  // Fallback: fill from top50 if not enough neighbors (e.g. rank 1 or 2)
  if (related.length < 4) {
    for (const e of stats.top50) {
      if (e.slug !== slug && !related.some((r) => r.slug === e.slug)) {
        related.push(e);
        if (related.length >= 4) break;
      }
    }
  }

  const mixOrder = ["I", "II", "III", "IV"];
  const mixTotal = mixOrder.reduce((a, l) => a + (y.wage_level_mix[l] ?? 0), 0);

  const pageUrl = `https://visatalentusa.com/sponsors/${slug}/`;
  const description = `${s.display_name} filed ${y.total_cases.toLocaleString()} H-1B applications in FY2026 with a ${y.approval_rate != null ? (y.approval_rate * 100).toFixed(1) : "—"}% approval rate.`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: `${s.display_name} H-1B Visa Sponsorship Data 2026`,
        description,
        author: { "@type": "Organization", name: "VisaTalentUSA" },
        publisher: { "@type": "Organization", name: "VisaTalentUSA" },
        mainEntityOfPage: pageUrl,
        datePublished: "2026-10-09T00:00:00+00:00",
        dateModified: "2026-10-09T00:00:00+00:00",
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
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
            name: s.display_name,
            item: pageUrl,
          },
        ],
      },
    ],
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Breadcrumb */}
      <nav className="text-sm text-slate-500">
        <Link href="/" className="hover:text-blue-700">
          Home
        </Link>{" "}
        / <span className="text-slate-800">{s.display_name}</span>
      </nav>

      <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
        {s.display_name} H-1B Visa Sponsorship Data 2026
      </h1>

      {/* Analysis intro — original content derived from the employer's data */}
      <div className="mt-6 space-y-4 text-slate-700 leading-relaxed">
        {intro.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      {/* Stat cards */}
      <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
        <StatCard
          label="FY2026 filings"
          value={formatNum(y.total_cases)}
          sub={`Rank #${rank} nationally`}
        />
        <StatCard
          label="Approval rate"
          value={formatPct(y.approval_rate)}
          sub={`${formatNum(y.certified_cases)} certified`}
        />
        <StatCard
          label="Median salary"
          value={formatUSD(y.median_wage_annual)}
          sub={`National median ${formatUSD(NATIONAL_MEDIAN)}`}
        />
        <StatCard
          label="Avg. lottery entries"
          value={avgEntries != null ? avgEntries.toFixed(1) + "×" : "—"}
          sub="Wage-weighted system"
        />
      </div>

      {/* Lottery odds box */}
      {avgEntries != null && senior != null && (
        <div className="mt-8 rounded-lg border border-blue-200 bg-blue-50 p-6">
          <h2 className="text-lg font-semibold text-slate-900">
            H-1B lottery positioning
          </h2>
          <p className="mt-2 text-sm text-slate-700">
            Under the 2026 wage-weighted lottery, Level I filings receive 1
            entry, Level II get 2, Level III get 3, and Level IV get 4.{" "}
            {formatPct(senior, 0)} of {s.display_name}&apos;s FY2026 filings
            were Level III or above, giving its candidates an average of{" "}
            {avgEntries.toFixed(1)} entries per filing.
          </p>
          <div className="mt-4 space-y-2">
            {mixOrder.map((lvl) => {
              const n = y.wage_level_mix[lvl] ?? 0;
              const pct = mixTotal ? (n / mixTotal) * 100 : 0;
              return (
                <div key={lvl} className="flex items-center gap-3 text-sm">
                  <span className="w-16 font-medium text-slate-700">
                    Level {lvl}
                  </span>
                  <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-blue-100">
                    <div
                      className="h-full rounded-full bg-blue-600"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                  <span className="w-24 text-right tabular-nums text-slate-600">
                    {formatNum(n)} ({pct.toFixed(0)}%)
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Top titles */}
      <h2 className="mt-10 text-2xl font-bold text-slate-900">
        Most-sponsored job titles
      </h2>
      <div className="mt-4 overflow-x-auto rounded-lg border border-slate-200">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-50 text-slate-600">
            <tr>
              <th className="px-4 py-3 font-semibold">Job title</th>
              <th className="px-4 py-3 font-semibold text-right">Filings</th>
              <th className="px-4 py-3 font-semibold text-right">Avg. salary</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {(Array.isArray(y.top_titles) ? y.top_titles : []).map((t) => (
              <tr key={t.title} className="hover:bg-slate-50">
                <td className="px-4 py-2.5 font-medium text-slate-800">
                  {t.title}
                </td>
                <td className="px-4 py-2.5 text-right tabular-nums">
                  {formatNum(t.cases)}
                </td>
                <td className="px-4 py-2.5 text-right tabular-nums">
                  {formatUSD(t.avg_wage)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Top states */}
      <h2 className="mt-10 text-2xl font-bold text-slate-900">
        Top worksite states
      </h2>
      <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-5">
        {(Array.isArray(y.top_states) ? y.top_states : []).map((st) => (
          <div
            key={st.state}
            className="rounded-lg border border-slate-200 bg-white p-4 text-center"
          >
            <p className="text-lg font-bold text-slate-900">{st.state}</p>
            <p className="text-sm tabular-nums text-slate-600">
              {formatNum(st.cases)} filings
            </p>
          </div>
        ))}
      </div>

      {/* Year comparison */}
      {prev && (
        <div className="mt-10 rounded-lg border border-slate-200 bg-slate-50 p-6">
          <h2 className="text-lg font-semibold text-slate-900">
            Year-over-year trend
          </h2>
          <p className="mt-2 text-sm text-slate-700">
            {s.display_name} filed {formatNum(prev.total_cases)} H-1B
            applications in FY2025 versus {formatNum(y.total_cases)} in
            FY2026
            {y.yoy_change_pct != null &&
              (y.yoy_change_pct >= 0 ? (
                <span>
                  {" "}— an increase of{" "}
                  {(y.yoy_change_pct * 100).toFixed(1)}%.
                </span>
              ) : (
                <span>
                  {" "}— a decrease of{" "}
                  {(Math.abs(y.yoy_change_pct) * 100).toFixed(1)}%.
                </span>
              ))}
          </p>
        </div>
      )}

      {/* FAQ */}
      <h2 className="mt-10 text-2xl font-bold text-slate-900">
        {s.display_name} H-1B FAQs
      </h2>
      <div className="mt-4 space-y-4">
        {faqs.map((f) => (
          <div key={f.q} className="rounded-lg border border-slate-200 p-5">
            <h3 className="font-semibold text-slate-900">{f.q}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{f.a}</p>
          </div>
        ))}
      </div>

      {/* Related */}
      <h2 className="mt-10 text-2xl font-bold text-slate-900">
        Other top H-1B sponsors
      </h2>
      <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-4">
        {related.map((e) => (
          <Link
            key={e.slug}
            href={`/sponsors/${e.slug}/`}
            className="rounded-lg border border-slate-200 bg-white p-4 hover:border-blue-300 hover:bg-blue-50/50"
          >
            <p className="font-medium text-blue-700">{e.name}</p>
            <p className="mt-1 text-sm tabular-nums text-slate-600">
              {formatNum(e.cases)} filings
            </p>
          </Link>
        ))}
      </div>

      <p className="mt-10 border-t border-slate-200 pt-4 text-xs text-slate-500">
        Data source: U.S. Department of Labor, Office of Foreign Labor
        Certification — Labor Condition Application disclosure data,
        FY2024–FY2026. An LCA is filed by the employer before an H-1B
        petition; disclosure data does not indicate USCIS petition outcomes.
        Last updated: October 2026.
      </p>
    </div>
  );
}
