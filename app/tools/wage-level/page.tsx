import type { Metadata } from "next";
import Link from "next/link";
import { getTitles } from "@/lib/data";
import WageLevelChecker from "./WageLevelChecker";

export const metadata: Metadata = {
  title: "H-1B Wage Level Checker — Find Your DOL Wage Level (I–IV)",
  description:
    "Free H-1B wage level checker: enter your job title and salary to estimate your DOL wage level (I–IV) from 1.5M+ real LCA filing records. See what your level means for wage-weighted lottery odds.",
  keywords: [
    "h1b wage level",
    "h1b wage level checker",
    "h1b wage level calculator",
    "dol wage level h1b",
    "h1b prevailing wage level",
    "what is my h1b wage level",
  ],
  alternates: { canonical: "https://visatalentusa.com/tools/wage-level" },
  openGraph: {
    title: "H-1B Wage Level Checker | VisaTalentUSA",
    description:
      "Estimate your H-1B wage level (I–IV) from real DOL filing data. See lottery implications, what-if salary scenarios, and official vs estimated levels.",
    url: "https://visatalentusa.com/tools/wage-level",
    type: "website",
    siteName: "VisaTalentUSA",
  },
  twitter: {
    card: "summary_large_image",
    title: "H-1B Wage Level Checker",
    description:
      "Estimate your DOL wage level from 1.5M+ real H-1B filings. Free tool.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const FAQS = [
  {
    q: "What is an H-1B wage level?",
    a: "The H-1B wage level (I, II, III, or IV) is the Department of Labor's classification of where a job's offered wage falls within the prevailing wage range for that occupation and worksite area. Level I is entry-level, Level IV is fully competent/expert. Under the wage-weighted H-1B lottery, higher wage levels receive more lottery entries — Level IV gets 4 entries versus 1 for Level I.",
  },
  {
    q: "How does DOL determine the official H-1B wage level?",
    a: "The official determination uses the DOL's Occupational Employment and Wage Statistics (OES) survey data for the specific occupation (SOC code) and metropolitan/statistical worksite area — roughly the 17th, 34th, 50th, and 67th percentiles of that local wage distribution. Your employer or attorney looks this up in the DOL wage library; it is not something you can self-certify.",
  },
  {
    q: "Is this checker the official DOL wage level determination?",
    a: "No. This tool estimates your level by comparing your salary against actual H-1B LCA filing salaries for your job title nationwide — it cannot replicate the official SOC-code-plus-worksite-area calculation. Treat the result as an informed estimate for planning, and always rely on the official DOL prevailing wage data for any real filing.",
  },
  {
    q: "Why does my H-1B wage level matter for the lottery?",
    a: "Under the wage-weighted selection system, each registration is entered into the lottery a number of times based on its wage level: Level I gets 1 entry (~15% odds), Level II gets 2 (~31%), Level III gets 3 (~46%), and Level IV gets 4 (~61%), per DHS projections. Moving from Level II to Level III roughly adds 15 percentage points of selection probability.",
  },
  {
    q: "What salary do I need to reach the next wage level?",
    a: "Use the what-if slider above — drag it and watch the gauge. The tool shows exactly how much more per year would move your offer into the next band, based on real filing data for your title. Keep in mind the official thresholds differ by occupation and location.",
  },
  {
    q: "Can my employer just pick a higher wage level to get more lottery entries?",
    a: "No — the wage level must match the actual job requirements (duties, experience, education). Inflating the level to game the lottery is misclassification and can trigger DOL enforcement, back-wage liability, and petition problems. The level follows the job, not the other way around.",
  },
  {
    q: "Where does the salary data in this tool come from?",
    a: "Every figure is computed from the U.S. Department of Labor's official Labor Condition Application (LCA) disclosure data — 1,532,089 H-1B records across FY2024–FY2026. The medians and level boundaries reflect what employers actually offered, not survey estimates or dummy data.",
  },
  {
    q: "What's the difference between wage level and prevailing wage?",
    a: "The prevailing wage is the DOL's baseline minimum an employer must pay for a given occupation and area. The wage level (I–IV) is which quartile of that wage distribution your offered salary falls into. You can think of it as: prevailing wage sets the floor, wage level describes how far above the floor you are.",
  },
];

export default async function WageLevelPage() {
  const titles = await getTitles();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        name: "H-1B Wage Level Checker — Find Your DOL Wage Level (I–IV)",
        description:
          "Free interactive tool: enter your job title and salary to estimate your H-1B wage level (I–IV) from 1.5M+ real DOL LCA filing records, with a visual gauge, what-if slider, and wage-weighted lottery implications.",
        url: "https://visatalentusa.com/tools/wage-level",
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
            item: "https://visatalentusa.com/tools/wage-level",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "H-1B Wage Level Checker",
            item: "https://visatalentusa.com/tools/wage-level",
          },
        ],
      },
      {
        "@type": "HowTo",
        name: "How to check your H-1B wage level",
        step: [
          {
            "@type": "HowToStep",
            name: "Enter your job title",
            text: "Type your job title — for example 'Software Engineer' or 'Data Analyst'. The tool matches it against verified titles from 1.5M+ DOL records.",
          },
          {
            "@type": "HowToStep",
            name: "Enter your offered salary",
            text: "Type your annual offered salary, or drag the what-if slider to explore scenarios. The gauge shows exactly where your salary falls across all four wage levels.",
          },
          {
            "@type": "HowToStep",
            name: "Read your estimated level and lottery impact",
            text: "See your estimated Level I–IV, what it means for experience expectations, how many lottery entries it earns under wage-weighted selection, and how much more salary would reach the next level.",
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
        <span className="text-slate-700">H-1B Wage Level Checker</span>
      </nav>

      <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
        H-1B Wage Level Checker
      </h1>
      <div className="mt-4 space-y-3 text-slate-600">
        <p className="text-lg">
          What is your <strong>H-1B wage level</strong> — I, II, III, or IV?
          Enter your job title and salary below to get an{" "}
          <strong>instant estimate</strong> from{" "}
          <strong>1.5M+ real DOL filings</strong>, see exactly where you fall
          on the wage scale, and learn what your level means for the{" "}
          <strong>wage-weighted lottery</strong>.
        </p>
      </div>

      <div className="mt-8">
        <WageLevelChecker titles={titles} />
      </div>

      {/* ---- How to use ---- */}
      <section className="mt-14">
        <h2 className="text-2xl font-bold text-slate-900">
          How to Use the H-1B Wage Level Checker
        </h2>
        <div className="mt-6 space-y-4">
          {[
            {
              n: 1,
              t: "Enter your job title",
              d: "Start typing — the checker suggests verified job titles drawn from official Department of Labor records. Pick the closest match to the role on your offer letter.",
            },
            {
              n: 2,
              t: "Enter your offered salary",
              d: "Type the annual base salary from your offer (before bonus). This is the number DOL compares against the prevailing wage — not total compensation.",
            },
            {
              n: 3,
              t: "Drag the what-if slider",
              d: "Curious what a raise would do? Drag the slider and watch the gauge move in real time. The tool tells you exactly how much more per year reaches the next wage level.",
            },
            {
              n: 4,
              t: "Read your level and lottery impact",
              d: "Your estimated Level I–IV appears with experience expectations, lottery entries (1×–4×), and approximate selection odds. Click through to the lottery odds calculator for the full picture.",
            },
          ].map((s) => (
            <div
              key={s.n}
              className="rounded-lg border border-slate-200 bg-white p-5"
            >
              <p className="font-semibold text-slate-900">
                <span className="mr-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-800">
                  {s.n}
                </span>
                {s.t}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {s.d}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ---- Who should use ---- */}
      <section className="mt-14">
        <h2 className="text-2xl font-bold text-slate-900">
          Who Should Use the H-1B Wage Level Checker
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {[
            {
              t: "H-1B job seekers",
              d: "Know your likely wage level before you negotiate — a higher level means more lottery entries and a stronger petition.",
            },
            {
              t: "F-1 / OPT students",
              d: "Compare offers the smart way: two identical salaries can sit in different wage levels depending on the job title.",
            },
            {
              t: "HR & hiring managers",
              d: "Sanity-check offered salaries against real market data for the title before filing the LCA.",
            },
            {
              t: "Immigration attorneys",
              d: "A quick, data-backed reference when discussing wage-level strategy with clients — with the official-determination caveat built in.",
            },
          ].map((c) => (
            <div
              key={c.t}
              className="rounded-lg border border-slate-200 bg-white p-5"
            >
              <p className="font-bold text-slate-900">{c.t}</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {c.d}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ---- Understanding wage levels ---- */}
      <section className="mt-14">
        <h2 className="text-2xl font-bold text-slate-900">
          Understanding H-1B Wage Levels (I–IV)
        </h2>
        <p className="mt-4 leading-relaxed text-slate-600">
          The Department of Labor divides every occupation&apos;s wage range
          into four levels. The level reflects the{" "}
          <strong>complexity of the job duties</strong> and the{" "}
          <strong>experience required</strong> — and since the wage-weighted
          selection rule, it also directly controls your{" "}
          <strong>lottery entries</strong>.
        </p>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[560px] border-collapse text-sm">
            <thead>
              <tr className="bg-slate-50 text-left text-xs uppercase tracking-wide text-slate-500">
                <th className="border border-slate-200 px-4 py-2.5">
                  H-1B wage level
                </th>
                <th className="border border-slate-200 px-4 py-2.5">
                  Typical experience
                </th>
                <th className="border border-slate-200 px-4 py-2.5">
                  Lottery entries
                </th>
                <th className="border border-slate-200 px-4 py-2.5">
                  Approx. odds
                </th>
              </tr>
            </thead>
            <tbody className="text-slate-700">
              <tr>
                <td className="border border-slate-200 px-4 py-2.5 font-semibold">
                  Level I — Entry
                </td>
                <td className="border border-slate-200 px-4 py-2.5">
                  0–2 years, closely supervised
                </td>
                <td className="border border-slate-200 px-4 py-2.5">1×</td>
                <td className="border border-slate-200 px-4 py-2.5">~15%</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-4 py-2.5 font-semibold">
                  Level II — Qualified
                </td>
                <td className="border border-slate-200 px-4 py-2.5">
                  2–4 years, moderate judgment
                </td>
                <td className="border border-slate-200 px-4 py-2.5">2×</td>
                <td className="border border-slate-200 px-4 py-2.5">~31%</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-4 py-2.5 font-semibold">
                  Level III — Experienced
                </td>
                <td className="border border-slate-200 px-4 py-2.5">
                  4–6+ years, independent work
                </td>
                <td className="border border-slate-200 px-4 py-2.5">3×</td>
                <td className="border border-slate-200 px-4 py-2.5">~46%</td>
              </tr>
              <tr>
                <td className="border border-slate-200 px-4 py-2.5 font-semibold">
                  Level IV — Fully competent
                </td>
                <td className="border border-slate-200 px-4 py-2.5">
                  6+ years, expert-level
                </td>
                <td className="border border-slate-200 px-4 py-2.5">4×</td>
                <td className="border border-slate-200 px-4 py-2.5">~61%</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-sm text-slate-500">
          Odds are DHS projections for wage-weighted selection, also used in
          our{" "}
          <Link
            href="/tools/lottery-odds"
            className="text-blue-700 underline underline-offset-2 hover:text-blue-900"
          >
            lottery odds calculator
          </Link>
          .
        </p>

        <h3 className="mt-8 text-xl font-bold text-slate-900">
          How DOL Determines Your Official H-1B Wage Level
        </h3>
        <p className="mt-3 leading-relaxed text-slate-600">
          The official determination is precise and location-specific. DOL
          takes the Occupational Employment and Wage Statistics (OES) survey
          for your exact occupation code (SOC) in your worksite&apos;s
          metropolitan area, then maps the offered wage onto that local
          distribution — approximately the 17th, 34th, 50th, and 67th
          percentiles. Two identical salaries in San Jose and Omaha can land
          in completely different wage levels. That is why this checker is an{" "}
          <strong>estimate</strong>: it uses national filing data for your
          title, which is excellent for planning but cannot replace the
          official SOC-plus-area lookup your employer must perform.
        </p>

        <h3 className="mt-8 text-xl font-bold text-slate-900">
          Why Your H-1B Wage Level Matters More Than Ever
        </h3>
        <p className="mt-3 leading-relaxed text-slate-600">
          Before wage-weighted selection, the wage level mostly affected
          whether DOL would certify the LCA. Now it also controls your
          lottery chances directly: a Level IV registration is entered four
          times, a Level I only once. In practice, that means{" "}
          <strong>negotiating from Level II to Level III can matter more than
          most candidates realize</strong> — roughly 15 percentage points of
          selection probability, according to DHS projections. Use the
          what-if slider above to see exactly what that jump costs for your
          title.
        </p>
      </section>

      {/* ---- FAQs ---- */}
      <section className="mt-14">
        <h2 className="text-2xl font-bold text-slate-900">
          H-1B Wage Level FAQs
        </h2>
        <div className="mt-6 space-y-4">
          {FAQS.map((f) => (
            <details
              key={f.q}
              className="rounded-lg border border-slate-200 bg-white p-5"
            >
              <summary className="cursor-pointer font-semibold text-slate-900">
                {f.q}
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* ---- Related tools ---- */}
      <section className="mt-14 rounded-xl bg-slate-50 p-6">
        <h2 className="text-xl font-bold text-slate-900">Related tools</h2>
        <ul className="mt-4 space-y-3 text-sm">
          <li>
            <Link
              href="/tools/lottery-odds"
              className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900"
            >
              H-1B Lottery Odds Calculator
            </Link>
            <p className="mt-1 text-slate-600">
              Turn your wage level into selection odds with wage-weighted
              projections and the master&apos;s cap boost.
            </p>
          </li>
          <li>
            <Link
              href="/tools/sponsor-match"
              className="font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-900"
            >
              H-1B Sponsor Match Finder
            </Link>
            <p className="mt-1 text-slate-600">
              Find the companies filing the most H-1B visas for your job
              title — with real median salaries to benchmark your offer.
            </p>
          </li>
        </ul>
      </section>

      <p className="mt-10 text-xs leading-relaxed text-slate-500">
        Methodology: wage-level boundaries are estimated from the median
        offered wage across 1,532,089 DOL LCA records (FY2024–FY2026) for each
        job title. This is an informational estimate, not legal advice and
        not the official DOL prevailing-wage determination. VisaTalentUSA is an
        independent research project, not affiliated with DOL or USCIS.
      </p>
    </div>
  );
}
