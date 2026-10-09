import Link from "next/link";
import SearchBox from "@/components/SearchBox";
import { getSiteStats, formatNum, formatUSD, formatPct } from "@/lib/data";

export default async function Home() {
  const stats = await getSiteStats();

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-white">
        <div className="mx-auto max-w-6xl px-4 py-16 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            Which U.S. Companies Sponsor H-1B Visas?
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Search {formatNum(stats.total_sponsors_fy2026)} employers,{" "}
            {formatNum(stats.total_cases_fy2026)} filings, real salaries and
            approval rates — from official Department of Labor data.
          </p>
          <div className="mt-8">
            <SearchBox />
          </div>
          <p className="mt-4 text-sm text-slate-500">
            Trending:{" "}
            {stats.top50.slice(0, 5).map((e, i) => (
              <span key={e.slug}>
                {i > 0 && " · "}
                <Link
                  href={`/sponsors/${e.slug}/`}
                  className="text-blue-700 hover:underline"
                >
                  {e.name}
                </Link>
              </span>
            ))}
          </p>
        </div>
      </section>

      {/* Stats band */}
      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto grid max-w-6xl grid-cols-3 gap-4 px-4 py-8 text-center">
          <div>
            <p className="text-3xl font-bold text-blue-800">
              {formatNum(stats.total_sponsors_fy2026)}
            </p>
            <p className="mt-1 text-sm text-slate-600">Sponsoring employers (FY2026)</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-blue-800">
              {formatNum(stats.total_cases_fy2026)}
            </p>
            <p className="mt-1 text-sm text-slate-600">H-1B filings analyzed</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-blue-800">
              {formatUSD(stats.median_wage_fy2026)}
            </p>
            <p className="mt-1 text-sm text-slate-600">National median salary</p>
          </div>
        </div>
      </section>

      {/* Top sponsors */}
      <section id="top-sponsors" className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-bold text-slate-900">
          Top 50 H-1B Sponsors — FY2026
        </h2>
        <p className="mt-2 text-slate-600">
          Ranked by certified labor condition applications. Click any employer
          for salaries, approval rates, top roles, and lottery odds.
        </p>
        <div className="mt-6 overflow-x-auto rounded-lg border border-slate-200">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 text-slate-600">
              <tr>
                <th className="px-4 py-3 font-semibold">#</th>
                <th className="px-4 py-3 font-semibold">Employer</th>
                <th className="px-4 py-3 font-semibold text-right">Filings</th>
                <th className="px-4 py-3 font-semibold text-right">Approval</th>
                <th className="px-4 py-3 font-semibold text-right">
                  Median salary
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {stats.top50.map((e, i) => (
                <tr key={e.slug} className="hover:bg-blue-50/50">
                  <td className="px-4 py-2.5 text-slate-500">{i + 1}</td>
                  <td className="px-4 py-2.5">
                    <Link
                      href={`/sponsors/${e.slug}/`}
                      className="font-medium text-blue-700 hover:underline active:text-blue-900"
                    >
                      {e.name}
                    </Link>
                  </td>
                  <td className="px-4 py-2.5 text-right tabular-nums">
                    {formatNum(e.cases)}
                  </td>
                  <td className="px-4 py-2.5 text-right tabular-nums">
                    {formatPct(e.approval_rate)}
                  </td>
                  <td className="px-4 py-2.5 text-right tabular-nums">
                    {formatUSD(e.median_wage)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Why section */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-2xl font-bold text-slate-900">
            Why sponsor data matters
          </h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <div className="rounded-lg border border-slate-200 bg-white p-6">
              <h3 className="font-semibold text-slate-900">
                Find real sponsors
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Stop guessing which companies file. Every employer page shows
                verified filing counts, so you target companies that actually
                sponsor.
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-6">
              <h3 className="font-semibold text-slate-900">
                Know the salary
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Median and average offered salaries by employer and role —
                straight from the disclosure filings employers submit to the
                Department of Labor.
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-6">
              <h3 className="font-semibold text-slate-900">
                Understand lottery odds
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                The 2026 wage-weighted lottery gives up to 4× entries to
                higher-wage filings. Our wage-level analysis shows how each
                employer&apos;s filings are positioned.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-bold text-slate-900">
          Frequently asked questions
        </h2>
        <div className="mt-6 space-y-4">
          <div className="rounded-lg border border-slate-200 p-5">
            <h3 className="font-semibold text-slate-900">
              Where does this data come from?
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              The U.S. Department of Labor&apos;s Office of Foreign Labor
              Certification publishes every Labor Condition Application (LCA)
              filing quarterly. Before filing an H-1B petition with USCIS, an
              employer must file an LCA — so this dataset is the most complete
              public record of who sponsors.
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 p-5">
            <h3 className="font-semibold text-slate-900">
              Does a filing guarantee the company will sponsor me?
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              No. Filing volume shows a company sponsors H-1B workers in
              general, but sponsorship decisions depend on the role, your
              qualifications, and the company&apos;s current policy. Always
              confirm with the employer.
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 p-5">
            <h3 className="font-semibold text-slate-900">
              What is a cap-exempt employer?
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Universities, nonprofit research organizations, and government
              research institutions can sponsor H-1B workers outside the annual
              lottery and its cap. We flag likely cap-exempt employers on their
              pages.
            </p>
          </div>
        </div>
        <p className="mt-8 text-xs text-slate-500">
          Data vintage: FY2024–FY2026 disclosure files, updated quarterly.
          LCA data reflects applications filed with the Department of Labor,
          not USCIS petition outcomes.
        </p>
      </section>
    </div>
  );
}
