import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "State of H-1B 2026: Filings Fell 7%, Pay Rose, and Consulting Pulled Back",
  description:
    "A data report on 426,952 FY2026 H-1B Labor Condition Applications (through Q3) from real U.S. Department of Labor disclosure data: the consulting pullback, flat Big Tech, rising median pay, and what happened next.",
  alternates: { canonical: "https://visatalentusa.com/state-of-h1b-2026" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "State of H-1B 2026: Filings Fell 7%, Pay Rose, and Consulting Pulled Back",
  datePublished: "2026-10-28",
  author: {
    "@type": "Person",
    name: "Muhammad Talha",
    url: "https://visatalentusa.com/author/muhammad-talha",
  },
  publisher: {
    "@type": "Organization",
    name: "VisaTalentUSA",
    url: "https://visatalentusa.com",
  },
};

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
      <div className="text-2xl font-bold text-slate-900">{value}</div>
      <div className="mt-1 text-sm leading-snug text-slate-600">{label}</div>
    </div>
  );
}

function ChartBars({
  rows,
  max,
  ariaLabel,
}: {
  rows: { label: string; value: number; display: string }[];
  max: number;
  ariaLabel: string;
}) {
  // Bar scale leaves room for the value label inside the viewBox, and the
  // height grows with the row count — previously a fixed 640x190 box clipped
  // the longest labels (e.g. "459,263", "−30.6%") and the 4th/5th rows.
  const height = 56 + (rows.length - 1) * 58;
  return (
    <svg
      viewBox={`0 0 720 ${height}`}
      role="img"
      aria-label={ariaLabel}
      className="w-full"
    >
      {rows.map((r, i) => {
        const y = 15 + i * 58;
        const w = Math.max(8, (r.value / max) * 340);
        return (
          <g key={r.label}>
            <text x="0" y={y + 16} fontSize="15" fill="#334155">
              {r.label}
            </text>
            <rect x="190" y={y} width={w} height="26" fill="#1e40af" rx="4" />
            <text x={200 + w} y={y + 18} fontSize="15" fontWeight="bold" fill="#0f172a">
              {r.display}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

export default function StateOfH1B2026Page() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <p className="text-sm font-semibold tracking-wide text-blue-700">
        DATA REPORT · FY2026 (THROUGH Q3)
      </p>
      <h1 className="mt-2 text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
        State of H-1B 2026: Filings Fell 7%, Pay Rose, and Consulting Pulled
        Back
      </h1>
      <p className="mt-3 text-sm text-slate-500">
        By{" "}
        <Link
          href="/author/muhammad-talha"
          className="font-medium text-slate-700 underline underline-offset-2 hover:text-blue-700"
        >
          Muhammad Talha
        </Link>{" "}
        · Founder, HireSkys · October 2026 · Data: U.S. Department of
        Labor LCA disclosure, FY2024–FY2026
      </p>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <p className="mt-6 text-lg leading-relaxed text-slate-700">
        U.S. employers filed <strong>426,952 H-1B Labor Condition
        Applications (LCAs)</strong> in FY2026 through Q3 — down{" "}
        <strong>7.0%</strong> from the same period last year. But the
        headline hides the real story. The decline is not spread evenly. It
        is a consulting story: the big IT services firms pulled back
        sharply, Big Tech stayed flat, median pay rose anyway, and the
        employers that kept filing look very different from the ones that
        stopped.
      </p>

      <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
        <Stat value="426,952" label="FY2026 H-1B filings (through Q3), down 7.0% same-period" />
        <Stat value="$125,000" label="Median offered wage, up from $117,600 (+6.3%)" />
        <Stat value="97.84%" label="LCA certification rate (denied just 0.52%)" />
        <Stat value="15.5%" label="Share of filings from the top 10 sponsors" />
      </div>

      <h2 className="mt-12 text-2xl font-bold text-slate-900">
        Filings fell — but only against the same window
      </h2>
      <p className="mt-4 leading-relaxed text-slate-700">
        FY2026 is still partial: the data covers decisions through June 30,
        2026, which is Q3 of the fiscal year. Comparing it to the full FY2025
        total (572,287) would be misleading. The honest comparison is the
        same October-to-June window last year: 459,263 filings then, 426,952
        now. That is the 7.0% decline. When Q4 (July–September 2026)
        decisions land, the FY2026 total will rise — but the same-period
        comparison is the only fair year-on-year read until then.
      </p>
      <div className="mt-6 rounded-xl border border-slate-200 p-5">
        <p className="mb-4 text-sm font-semibold text-slate-900">
          H-1B filings, same October–June window
        </p>
        <ChartBars
          ariaLabel="Bar chart: 459,263 filings in the FY2025 same-period window versus 426,952 in FY2026, down 7.0 percent"
          max={459263}
          rows={[
            { label: "FY2025 window", value: 459263, display: "459,263" },
            { label: "FY2026 (thru Q3)", value: 426952, display: "426,952 (−7.0%)" },
          ]}
        />
      </div>

      <h2 className="mt-12 text-2xl font-bold text-slate-900">
        1. The pullback is a consulting story, not a tech story
      </h2>
      <p className="mt-4 leading-relaxed text-slate-700">
        Group the biggest filers and the split is stark. The consulting set
        — Cognizant, EY, Infosys, Deloitte, TCS, Wipro, Capgemini,
        Accenture, HCL, LTIMindtree and Tech Mahindra — filed 31,396 cases
        in FY2026, down <strong>30.6%</strong> on the same period. Its drop
        of roughly 13,800 accounts for about <strong>43%</strong> of the
        whole market&apos;s decline. The Big Tech set — Amazon, Google,
        Apple, Meta, Microsoft, Tesla, Nvidia, Salesforce, ByteDance,
        Adobe, Netflix, OpenAI and Roblox — filed 53,316 cases, down just{" "}
        <strong>0.5%</strong>. Essentially flat.
      </p>
      <div className="mt-6 rounded-xl border border-slate-200 p-5">
        <p className="mb-4 text-sm font-semibold text-slate-900">
          Same-period change, FY2026 vs FY2025 window
        </p>
        <ChartBars
          ariaLabel="Bar chart: consulting down 30.6 percent, all employers down 7.0 percent, Big Tech down 0.5 percent"
          max={30.6}
          rows={[
            { label: "Consulting", value: 30.6, display: "−30.6%" },
            { label: "All employers", value: 7.0, display: "−7.0%" },
            { label: "Big Tech", value: 0.5, display: "−0.5%" },
          ]}
        />
      </div>
      <p className="mt-4 leading-relaxed text-slate-700">
        The pullback is not even uniform inside consulting. Infosys grew{" "}
        <strong>+16.8%</strong> on the same period and Wipro{" "}
        <strong>+21.1%</strong>. The damage is concentrated: TCS{" "}
        <strong>−55.5%</strong>, EY <strong>−38.4%</strong>, Cognizant{" "}
        <strong>−32.9%</strong>, Accenture <strong>−34.6%</strong>, HCL
        Technologies <strong>−41.4%</strong>, LTIMindtree{" "}
        <strong>−46.7%</strong>, Tech Mahindra <strong>−48.2%</strong>.
      </p>
      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr>
              <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left">Consulting firm</th>
              <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left">FY2026 cases</th>
              <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left">Same-period change</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Cognizant", "5,799", "−32.9%"],
              ["EY (Ernst & Young)", "5,403", "−38.4%"],
              ["Infosys", "4,610", "+16.8%"],
              ["Deloitte", "4,230", "−22.2%"],
              ["Tata Consultancy Services (TCS)", "2,923", "−55.5%"],
              ["Wipro", "1,906", "+21.1%"],
              ["Capgemini", "1,695", "−21.9%"],
              ["Accenture", "1,516", "−34.6%"],
              ["HCL Technologies", "1,375", "−41.4%"],
              ["LTIMindtree", "1,136", "−46.7%"],
              ["Tech Mahindra", "585", "−48.2%"],
            ].map(([name, cases, chg]) => (
              <tr key={name}>
                <td className="border border-slate-200 px-3 py-2">{name}</td>
                <td className="border border-slate-200 px-3 py-2">{cases}</td>
                <td className="border border-slate-200 px-3 py-2">{chg}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="mt-2 text-sm text-slate-500">
          Plus HCL Global Systems (211) and one tiny filer; consulting total
          31,396. Grouping is the report&apos;s own analyst grouping, listed
          here so it can be checked.
        </p>
      </div>

      <h2 className="mt-12 text-2xl font-bold text-slate-900">
        2. Sponsor trajectories: cliffs, and quiet climbers
      </h2>
      <p className="mt-4 leading-relaxed text-slate-700">
        Three years of full-year totals show who fell off a cliff and who
        climbed quietly. TCS has collapsed two years running: 9,700 →
        7,881 → 2,923, down 70% from FY2024. Cognizant halved in a single
        year (11,164 → 5,799). EY and Microsoft fell from ~10,000 and
        ~9,200 to ~5,400 and ~5,100. On the other side, Nvidia nearly
        doubled in two years (1,355 → 2,457), Tesla grew every year
        (2,125 → 2,896), Amazon stayed near its peak, and Apple held most
        of its big FY2025 jump. Intel, rarely mentioned, halved in two
        years (3,766 → 1,751).
      </p>
      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr>
              <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left">Sponsor (FY2026 rank)</th>
              <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left">FY2024</th>
              <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left">FY2025</th>
              <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left">FY2026*</th>
              <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left">Median wage</th>
              <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left">LCA cert. rate</th>
              <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left">Same-period</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Amazon", "21,181", "22,809", "19,937", "$158,000", "99.98%", "+5.1%"],
              ["Google", "8,912", "8,787", "7,389", "$193,000", "99.40%", "−6.3%"],
              ["Cognizant", "11,485", "11,164", "5,799", "$111,030", "99.93%", "−32.9%"],
              ["Apple", "3,725", "6,230", "5,633", "$171,600", "99.75%", "+17.6%"],
              ["EY (Ernst & Young)", "9,953", "10,305", "5,403", "$155,468", "97.93%", "−38.4%"],
              ["Meta (Facebook)", "5,958", "6,420", "5,151", "$214,032", "99.98%", "−7.5%"],
              ["Microsoft", "9,344", "9,193", "5,107", "$177,000", "100.00%", "−30.4%"],
              ["Infosys", "5,961", "5,840", "4,610", "$92,581", "99.61%", "+16.8%"],
              ["Deloitte", "4,933", "6,878", "4,230", "$129,900", "99.57%", "−22.2%"],
              ["TCS", "9,700", "7,881", "2,923", "$92,394", "98.94%", "−55.5%"],
            ].map(([name, y24, y25, y26, med, rate, chg]) => (
              <tr key={name}>
                <td className="border border-slate-200 px-3 py-2">{name}</td>
                <td className="border border-slate-200 px-3 py-2">{y24}</td>
                <td className="border border-slate-200 px-3 py-2">{y25}</td>
                <td className="border border-slate-200 px-3 py-2">{y26}</td>
                <td className="border border-slate-200 px-3 py-2">{med}</td>
                <td className="border border-slate-200 px-3 py-2">{rate}</td>
                <td className="border border-slate-200 px-3 py-2">{chg}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="mt-2 text-sm text-slate-500">
          * FY2026 is through Q3 (decisions through June 30, 2026). The
          top 10 together hold 66,182 filings (15.5% of all); the top 100
          hold 33.6%; the top 1,000 hold 56.0%.
        </p>
      </div>
      <p className="mt-4 leading-relaxed text-slate-700">
        One caution on Infosys: its full-year totals fall (5,840 →
        4,610) while its same-period change is positive (+16.8%). That
        means Infosys files heavily in Q4 (July–September). For seasonal
        filers like this, only the same-period comparison is meaningful —
        full-year comparisons mislead until Q4 lands.
      </p>

      <h2 className="mt-12 text-2xl font-bold text-slate-900">
        3. Fewer filings, higher pay
      </h2>
      <p className="mt-4 leading-relaxed text-slate-700">
        The median offered wage across all FY2026 H-1B filings is{" "}
        <strong>$125,000</strong>, up from $117,600 in the same window last
        year (+6.3%) — while filings fell 7.0%. The full distribution
        moved up with it: the 25th percentile sits at $95,110, the 75th at
        $163,550, and the 90th at $207,746. Only one filing in ten offers
        below $76,357.
      </p>
      <div className="mt-6 rounded-xl border border-slate-200 p-5">
        <p className="mb-4 text-sm font-semibold text-slate-900">
          Offered-wage distribution, FY2026 H-1B filings
        </p>
        <ChartBars
          ariaLabel="Bar chart of offered wage percentiles: 10th 76,357 dollars, 25th 95,110, median 125,000, 75th 163,550, 90th 207,746"
          max={207746}
          rows={[
            { label: "10th pct", value: 76357, display: "$76,357" },
            { label: "25th pct", value: 95110, display: "$95,110" },
            { label: "Median", value: 125000, display: "$125,000" },
            { label: "75th pct", value: 163550, display: "$163,550" },
            { label: "90th pct", value: 207746, display: "$207,746" },
          ]}
        />
      </div>
      <p className="mt-4 leading-relaxed text-slate-700">
        Part of the rise is mix shift, not just raises. The wage-level mix
        moved up a rung: among filings that carry a prevailing-wage
        level, Level I (entry) shrank from 21.8% to 19.4%, while Level IV
        (fully competent / senior) grew from 15.7% to 19.6%. Employers
        filed fewer entry-level roles and more senior ones. That also
        fits what came next: the FY2027 lottery gives higher wage levels
        more entries, so senior-heavy filing is now worth more in the
        lottery itself.
      </p>
      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr>
              <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left">Prevailing-wage level</th>
              <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left">FY2025 window</th>
              <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left">FY2026</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Level I (entry)", "21.8%", "19.4%"],
              ["Level II", "41.8%", "40.0%"],
              ["Level III", "20.2%", "20.5%"],
              ["Level IV (senior)", "15.7%", "19.6%"],
            ].map(([lvl, a, b]) => (
              <tr key={lvl}>
                <td className="border border-slate-200 px-3 py-2">{lvl}</td>
                <td className="border border-slate-200 px-3 py-2">{a}</td>
                <td className="border border-slate-200 px-3 py-2">{b}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="mt-2 text-sm text-slate-500">
          Shares are of filings that carry a wage level. Across all FY2026
          filings: Level II 36.1%, Level III 18.4%, Level IV 17.6%, Level I
          17.5%, no level reported 9.9%, N/A 0.4%.
        </p>
      </div>

      <h2 className="mt-12 text-2xl font-bold text-slate-900">
        4. Titles: generic roles down, employer-specific titles up
      </h2>
      <p className="mt-4 leading-relaxed text-slate-700">
        The generic titles fell hard: Software Engineer 44,549 → 40,003
        (−10.2%), Software Developer 18,605 → 15,125 (−18.7%), Software
        Development Engineer 7,578 → 5,428 (−28.4%), Architect 3,777 →
        1,876 (−50.3%), Accountants and Auditors 2,640 → 1,282
        (−51.4%). The gainers are employer-specific labels: Software Dev
        Engineer — Amazon&apos;s title — more than doubled, 2,833 →
        6,325 (+123.3%). Computer Programmer rose 89.4%, Technology
        Consultant 69.9%, Research Scientist 18.6%, Occupational
        Therapist 44.5%, Data Scientist 5.0%. Title data is noisy — the
        same job wears different labels at different employers — so the
        robust read is the aggregate: software titles overall down,
        healthcare and research titles up.
      </p>
      <p className="mt-4 leading-relaxed text-slate-700">
        One popular claim does not survive the data. AI-titled hiring is
        tiny: the exact title “Machine Learning Engineer” went 1,753 →
        1,857, and all AI/ML-named titles combined are roughly 0.6–0.7%
        of filings, scattered across about 200 variant strings. AI hiring
        hides inside Software Engineer, Data Scientist and Research
        Scientist titles. The AI proxy in this data is employer growth —
        Nvidia, OpenAI, Apple — not job titles.
      </p>
      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr>
              <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left">Top titles, FY2026 (normalized)</th>
              <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left">Cases</th>
              <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left">Median wage</th>
              <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left">LCA cert. rate</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Software Engineer", "40,003", "$151,000", "98.39%"],
              ["Software Developer", "15,125", "$112,923", "98.00%"],
              ["Manager", "9,167", "$168,842", "98.52%"],
              ["Engineer", "7,294", "$135,000", "98.03%"],
              ["Data Engineer", "6,793", "$124,000", "97.82%"],
              ["Software Dev Engineer", "6,325", "$162,600", "99.98%"],
              ["Associate", "6,105", "$140,000", "98.62%"],
              ["Data Scientist", "5,840", "$135,000", "98.24%"],
              ["Assistant Professor", "5,703", "$110,250", "97.60%"],
              ["Software Development Engineer", "5,428", "$160,000", "99.26%"],
            ].map(([t, c, m, r]) => (
              <tr key={t}>
                <td className="border border-slate-200 px-3 py-2">{t}</td>
                <td className="border border-slate-200 px-3 py-2">{c}</td>
                <td className="border border-slate-200 px-3 py-2">{m}</td>
                <td className="border border-slate-200 px-3 py-2">{r}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="mt-2 text-sm text-slate-500">
          Titles are normalized groups: the raw string “Software
          Engineer” alone is 20,350 filings; the normalized group is
          40,003.
        </p>
      </div>

      <h2 className="mt-12 text-2xl font-bold text-slate-900">
        5. Geography is stable — no state migration story
      </h2>
      <p className="mt-4 leading-relaxed text-slate-700">
        The map barely moved. California still takes 19.6% of filings
        (83,484), then Texas 14.8% (63,098), New York 8.6% (36,808) and
        Washington 6.6% (28,131). The largest share shift anywhere is
        California&apos;s +0.9 percentage points; New Jersey slipped
        0.5 points, Texas 0.4. Whatever changed in FY2026, it was about
        which employers file — not where the jobs sit.
      </p>

      <h2 className="mt-12 text-2xl font-bold text-slate-900">
        6. Denials are not a story; certification keeps rising
      </h2>
      <p className="mt-4 leading-relaxed text-slate-700">
        The FY2026 LCA certification rate is <strong>97.84%</strong>{" "}
        (417,721 certified, counting Certified-Withdrawn as certified).
        Denied: 2,235 (0.52%). Withdrawn: 6,996 (1.64%). The denial rate
        has fallen three years running — 0.74% → 0.61% → 0.52% — while
        certification rose 97.60% → 97.78% → 97.84%. The only denial
        outlier among large filers is Ford at 2.71% (19 of 702); every
        other employer above 500 cases sits at 0.39% or below. Denials
        by state simply follow volume (California 418, Texas 277, New
        York 239). The honest thesis: the bottleneck moved from the
        Department of Labor to USCIS. DOL certification got easier
        while USCIS-side demand collapsed — which is exactly what the
        next section shows.
      </p>

      <h2 className="mt-12 text-2xl font-bold text-slate-900">
        7. Churn, cap-exempt shelter, and the industry underneath
      </h2>
      <p className="mt-4 leading-relaxed text-slate-700">
        While giants shrank, new filers kept entering:{" "}
        <strong>26,496 employer groups</strong> in FY2026 were absent
        from the same window last year, filing 48,243 cases —{" "}
        <strong>11.3%</strong> of all FY2026 filings. The largest is TT
        Commerce &amp; Global Services (1,351), followed by Rocket
        Limited Partnership (265) and LTM (218). The market is churning,
        not just shrinking. (Caveat: “new” means absent from that window;
        some may have filed in July–September 2025 or under a different
        group name.)
      </p>
      <p className="mt-4 leading-relaxed text-slate-700">
        The cap-exempt corner is a different world. The flagged
        cap-exempt employers — 3,863 groups, 40,090 cases (9.4%) — are
        universities and hospitals: University of Michigan (590,
        $72,515), Mass General Brigham (435, $86,424), Stanford (398,
        $105,000), Johns Hopkins (398, $75,924), Mayo Clinic (374,
        $89,253). Their pay runs far below tech — and they are insulated
        from the cap lottery and were excluded from the proposed
        $103,265 fee. That shelter is structural, not cyclical. The
        cap-exempt flag here is heuristic (industry codes plus name
        words), not a confirmed legal determination.
      </p>
      <p className="mt-4 leading-relaxed text-slate-700">
        Underneath it all, one industry dominates. By NAICS code, Custom
        Computer Programming Services (541511) alone accounts for 90,723
        filings — 21.2% of everything. With Computer Systems Design
        (541512, 26,905), IT services codes are 117,628 filings,{" "}
        <strong>27.6%</strong> of the program. Colleges and universities
        (611310) follow at 24,267; general merchandise retail (455219,
        the Amazon/Walmart code) at 20,972; software publishers (513210)
        at 11,664. The program&apos;s center of gravity is IT services —
        exactly the segment pulling back.
      </p>

      <h2 className="mt-12 text-2xl font-bold text-slate-900">
        8. What happened next confirms the direction
      </h2>
      <p className="mt-4 leading-relaxed text-slate-700">
        The LCA window ends June 30, 2026. Everything after it points the
        same way — harder. USCIS received 343,981 eligible FY2026 cap
        registrations, down 26.9% from 470,342 in FY2025, and selected
        118,660 beneficiaries (35.3%, up from 29% and 24.8% the two years
        before — fewer entries, better odds). Notably, the number of
        unique employers rose to about 57,600 from 52,700: more
        employers, fewer registrations. The cap was reached July 18,
        2025, with no second lottery. USCIS attributes the drop partly
        to anti-fraud enforcement under the beneficiary-centric
        selection system.
      </p>
      <p className="mt-4 leading-relaxed text-slate-700">
        The $100,000 fee — which applies to certain new petitions for
        workers abroad, not to LCAs — hit consular petitions hardest:
        the National Foundation for American Policy calculates that
        initial consular H-1B petitions fell 91.2% (13,823 → 1,212) in
        the first eight months of the fee, with 13 of 30 companies down
        85% or more. As of February 2026 only about 85 petitioners had
        actually paid; the September 2026 extension proclamation cites
        just over 700 payments. The fee is currently blocked — vacated
        June 8, 2026 in Massachusetts, enjoined September 30, 2026 in
        California — and the proposed $103,265 fee is not in effect.
        Fee-subject petitions filed without payment are now being
        approved. Our{" "}
        <Link href="/blog/h1b-100k-fee-status" className="font-semibold text-blue-700 hover:underline">
          $100K fee status page
        </Link>{" "}
        tracks this as the single source of truth.
      </p>
      <p className="mt-4 leading-relaxed text-slate-700">
        Then came the acceleration. A Congressional Research Service
        report (“H-1B Executive Actions in 2026,” October 14, 2026)
        shows FY2027 lottery registrations collapsing at the same
        firms: Cognizant <strong>zero</strong> (from 3,752), Infosys 759
        (from 8,886, −91%), TCS 284 (from 5,955, −95%). A Federal
        Register publication (September 23, 2026) puts the largest
        staffing firms&apos; combined registrations down about 92%
        (24,946 → 2,055). And on October 8, 2026, the Department of
        Labor suspended PERM processing for TCS, Infosys, Wipro,
        HCLTech, Cognizant, Capgemini, Microsoft and Adobe amid fraud
        and compliance investigations.
      </p>
      <div className="mt-6 rounded-lg border border-amber-200 bg-amber-50 p-5">
        <p className="font-bold text-slate-900">
          Three different things — do not conflate them
        </p>
        <p className="mt-2 leading-relaxed text-slate-700">
          (1) LCA filings: this report&apos;s data — employer
          attestations to the Department of Labor, through June 2026.
          (2) Cap lottery registrations: USCIS, each March. (3)
          Petitions: USCIS adjudication. The $100,000 fee applies to a
          subset of petitions, not to LCAs — so the fee alone does not
          explain the LCA drop. The honest framing is coincidence plus
          pressure: the LCA pullback arrived alongside fee uncertainty,
          enforcement, and the announced FY2027 wage-weighted
          selection, and the FY2027 registration collapse and PERM
          suspension show the direction continued after this
          report&apos;s window. The filings showed it first.
        </p>
      </div>

      <h2 className="mt-12 text-2xl font-bold text-slate-900">
        Methodology
      </h2>
      <div className="mt-4 space-y-4 leading-relaxed text-slate-700">
        <p>
          Source: U.S. Department of Labor, Office of Foreign Labor
          Certification (OFLC), Labor Condition Application disclosure
          data, FY2024–FY2026, cleaned and normalized. Analysis covers
          H-1B only: the FY2026 raw file contains 437,496 rows across
          programs, of which 426,952 are H-1B (E-3 Australian, H-1B1
          Chile and H-1B1 Singapore excluded). The H-1B count matches
          the employer aggregate exactly, which cross-validates the
          pipeline.
        </p>
        <p>
          FY2026 is partial (decisions through June 30, 2026 = Q3).
          Year-on-year comparisons use the same October–June window
          unless stated as full-year totals. “Certified” counts both
          “Certified” and “Certified − Withdrawn” cases. Rates in this
          report are LCA certification rates — the share of LCAs the
          Department of Labor certified — not USCIS petition approval
          rates, which are a different measure.
        </p>
        <p>
          Median offered wage ($125,000) is the median across all
          426,952 FY2026 H-1B filings, each filing counted once. Offered
          wage is the wage attested on the LCA, not verified paid
          salary. Employer medians are medians of offered wages within
          each employer&apos;s filings. Titles are normalized groups,
          not raw employer-supplied strings. States are worksite
          states. Wage levels are prevailing-wage levels; 9.9% of
          FY2026 filings carry no level. Consulting and Big Tech sets
          are this report&apos;s own analyst groupings, with members
          listed above so they can be checked. “New” employer groups
          are those absent from the FY2025 same-period window.
        </p>
        <p>
          This report is an independent analysis. VisaTalentUSA is not
          affiliated with the Department of Labor, USCIS, or any
          employer listed. Nothing here is legal advice.
        </p>
      </div>

      <h2 className="mt-12 text-2xl font-bold text-slate-900">Sources</h2>
      <ul className="mt-4 space-y-3 leading-relaxed text-slate-700">
        <li>
          U.S. Department of Labor, OFLC performance data (LCA
          disclosure files):{" "}
          <a href="https://www.dol.gov/agencies/eta/foreign-labor/performance" className="underline text-blue-600">
            dol.gov/agencies/eta/foreign-labor/performance
          </a>
        </li>
        <li>
          USCIS FY2026 cap season numbers, as summarized by Fragomen
          from the USCIS announcement:{" "}
          <a href="https://www.fragomen.com/insights/united-states-uscis-releases-selection-numbers-for-the-fy-2026-h-1b-cap.html" className="underline text-blue-600">
            Fragomen — USCIS Releases Selection Numbers for the FY 2026 H-1B Cap
          </a>
        </li>
        <li>
          Congressional Research Service, “H-1B Executive Actions in
          2026” (October 14, 2026), FY2027 registration figures as
          reported by The Economic Times:{" "}
          <a href="https://economictimes.indiatimes.com/nri/latest-updates/infosys-tcs-and-cognizant-cut-h-1b-lottery-registrations-as-trump-tightens-us-visa-rules/articleshow/135045136.cms" className="underline text-blue-600">
            Infosys, TCS and Cognizant cut H-1B lottery registrations
          </a>
        </li>
        <li>
          National Foundation for American Policy analysis of the
          $100,000 fee&apos;s effect, as reported by Financial Express:{" "}
          <a href="https://www.financialexpress.com/immigration/does-the-math-behind-the-proposed-103265-h-1b-fee-actually-add-up/4348930/" className="underline text-blue-600">
            Does the math behind the proposed $103,265 H-1B fee add up?
          </a>
        </li>
      </ul>

      <div className="mt-12 rounded-xl border border-slate-200 bg-slate-50 p-6">
        <p className="font-bold text-slate-900">Explore the data yourself</p>
        <p className="mt-2 leading-relaxed text-slate-700">
          Every sponsor in this report has a full profile — filings by
          year, salaries, top titles and states — in the{" "}
          <Link href="/sponsors" className="font-semibold text-blue-700 hover:underline">
            sponsor database
          </Link>
          . Check any employer&apos;s wage-level mix with the{" "}
          <Link href="/tools/wage-level" className="font-semibold text-blue-700 hover:underline">
            wage-level tool
          </Link>
          , or find sponsors for your own title with{" "}
          <Link href="/tools/sponsor-match" className="font-semibold text-blue-700 hover:underline">
            sponsor match
          </Link>
          .
        </p>
      </div>
      <p className="mt-8 text-sm text-slate-500">
        Published October 2026. Figures describe LCA decisions through
        June 30, 2026; FY2026 Q4 decisions will change the full-year
        totals when published.
      </p>
    </div>
  );
}
