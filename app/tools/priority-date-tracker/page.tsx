import type { Metadata } from "next";
import Link from "next/link";
import PriorityDateTracker from "./PriorityDateTracker";
import { BULLETIN } from "./bulletinData";

export const metadata: Metadata = {
  title: "EB-2 Priority Date Tracker 2026: Wait Time Estimator",
  description:
    "Check if your EB-2 priority date is current with real November 2026 Visa Bulletin data. Free wait-time estimator for India, China & ROW, cutoff history charts, and a complete guide.",
  keywords: [
    "eb2 priority date",
    "eb-2 priority date",
    "priority date checker",
    "eb2 priority date india",
    "green card wait time estimator",
    "visa bulletin tracker",
    "is my priority date current",
    "eb2 india priority date",
  ],
  alternates: { canonical: "https://visatalentusa.com/tools/priority-date-tracker" },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "VisaTalentUSA — H-1B Sponsor Database" }],
    title: "EB-2 Priority Date Tracker 2026",
    description:
      "Is your priority date current? Check against real Visa Bulletin data, see cutoff history, and estimate your green card wait.",
    url: "https://visatalentusa.com/tools/priority-date-tracker",
    type: "website",
    siteName: "VisaTalentUSA",
  },
  twitter: {
    card: "summary_large_image",
    title: "EB-2 Priority Date Tracker 2026",
    description:
      "Real Visa Bulletin data: check if your priority date is current and estimate your wait.",
  },
  robots: { index: true, follow: true },
};

const FAQS = [
  {
    q: "What is a priority date?",
    a: "Your priority date is your place in the green card line. For most employment-based cases it is the date your PERM labor certification was filed with the Department of Labor (or your I-140 filing date if no PERM was required). USCIS and the State Department use it to decide when a visa number becomes available for you.",
  },
  {
    q: "How do I know if my priority date is current?",
    a: "Compare your priority date to the Final Action Date for your EB category and country of birth in the latest Visa Bulletin. If your date is on or before the cutoff date — or the cutoff shows 'C' (Current) — your date is current and a visa number is available. Use the checker above for an instant answer.",
  },
  {
    q: "What is the current EB-2 priority date for India?",
    a: "In the November 2026 Visa Bulletin, the EB-2 Final Action Date for India is still November 1, 2013 (01NOV13), unchanged for a second month. Only applicants with a priority date on or before that date can move forward. India was marked 'Unavailable' (U) from July through September 2026 before dates resumed with the new fiscal year.",
  },
  {
    q: "What is the current EB-2 priority date for China?",
    a: "In the November 2026 Visa Bulletin, the EB-2 Final Action Date for mainland China-born applicants is October 1, 2021 (01OCT21), unchanged from October 2026.",
  },
  {
    q: "What is the difference between Final Action Dates and Dates for Filing?",
    a: "Final Action Dates control when a green card can actually be approved and a visa number assigned. Dates for Filing control when you may submit your I-485 adjustment-of-status application early (when USCIS says so). Filing dates are usually later (more favorable) than final action dates — for example, EB-2 India's filing date is January 15, 2015 versus a final action date of November 1, 2013.",
  },
  {
    q: "Why is the wait so long for India and China?",
    a: "U.S. immigration law caps each country at 7% of employment-based green cards per year, while about 140,000 EB green cards are available annually across all countries. Demand from India and China far exceeds their 7% share, creating decade-plus backlogs. Applicants from most other countries face little or no wait.",
  },
  {
    q: "Can the cutoff dates move backward (retrogress)?",
    a: "Yes. When demand exceeds the quarterly allocation, the State Department can retrogress dates — move them earlier. EB-2 India retrogressed from July 15, 2014 (May 2026) to September 1, 2013 (June 2026), then went 'Unavailable' for three months. Never treat forward movement as guaranteed.",
  },
  {
    q: "What can I do while waiting for my priority date?",
    a: "Common strategies include extending H-1B status beyond the 6-year limit under AC21 (available once your PERM or I-140 has been pending 365+ days), keeping your underlying status valid, and monitoring each monthly Visa Bulletin. Always coordinate with an immigration attorney — this tool is for information only, not legal advice.",
  },
];

export default function PriorityDateTrackerPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "EB-2 Priority Date Tracker",
    url: "https://visatalentusa.com/tools/priority-date-tracker",
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Any",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    description:
      "Check if your EB-2 priority date is current using real U.S. Visa Bulletin data, with wait-time estimates and cutoff history charts.",
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://visatalentusa.com" },
      { "@type": "ListItem", position: 2, name: "Tools", item: "https://visatalentusa.com/tools" },
      { "@type": "ListItem", position: 3, name: "EB-2 Priority Date Tracker", item: "https://visatalentusa.com/tools/priority-date-tracker" },
    ],
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <main className="mx-auto max-w-4xl px-4 py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />

      {/* Hero */}
      <nav className="mb-4 text-sm text-slate-500">
        <Link href="/" className="hover:text-indigo-600">Home</Link>
        {" / "}
        <Link href="/tools" className="hover:text-indigo-600">Tools</Link>
        {" / "}
        <span className="text-slate-700">EB-2 Priority Date Tracker</span>
      </nav>
      <h1 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
        EB-2 Priority Date Tracker 2026
      </h1>
      <p className="mt-3 text-lg text-slate-600">
        Is your green card priority date current? Check instantly against the
        real <strong>{BULLETIN.month} Visa Bulletin</strong>, see how the
        cutoff has moved, and get a rough wait estimate — no signup, no
        guesswork.
      </p>
      <div className="mt-4 flex flex-wrap gap-2 text-xs">
        <span className="rounded-full bg-indigo-100 px-3 py-1 font-semibold text-indigo-700">
          Real State Dept data
        </span>
        <span className="rounded-full bg-indigo-100 px-3 py-1 font-semibold text-indigo-700">
          EB-2 India · China · ROW
        </span>
        <span className="rounded-full bg-indigo-100 px-3 py-1 font-semibold text-indigo-700">
          Updated: {BULLETIN.month} 2026
        </span>
      </div>

      {/* Tool */}
      <div className="mt-8">
        <PriorityDateTracker />
      </div>

      {/* Pillar guide */}
      <div className="mt-10 space-y-6">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900">
            What is a priority date?
          </h2>
          <div className="mt-3 space-y-3 text-[15px] leading-relaxed text-slate-700">
            <p>
              Your <strong>priority date</strong> is your place in the green
              card line. For most employment-based applicants, it is the date
              your PERM labor certification application was filed with the
              Department of Labor. If your category does not require PERM
              (such as EB-1A or EB-2 NIW), it is the date USCIS received your
              I-140 petition.
            </p>
            <p>
              Every month, the U.S. Department of State publishes the{" "}
              <strong>Visa Bulletin</strong>, which sets cutoff dates by
              category and country. When the cutoff reaches your priority
              date, a visa number becomes available and your case can move
              forward. Until then, you wait — and for some countries, that
              wait is measured in years or decades.
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900">
            Final Action Dates vs Dates for Filing
          </h2>
          <div className="mt-3 space-y-3 text-[15px] leading-relaxed text-slate-700">
            <p>
              The bulletin has <strong>two charts</strong>, and the difference
              matters:
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong>Final Action Dates</strong> — when your green card can
                actually be approved. This is the date the checker above uses.
              </li>
              <li>
                <strong>Dates for Filing</strong> — when you may be allowed to
                <em> submit </em> your I-485 adjustment application early
                (only when USCIS announces it will honor filing dates that
                month). Filing dates are usually more favorable — e.g., EB-2
                India&apos;s filing date is January 15, 2015, while its final
                action date is November 1, 2013.
              </li>
            </ul>
            <p>
              Filing early lets you get work and travel authorization while
              you wait for final action — a big deal for people stuck in the
              backlog.
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900">
            Why is the wait so long for India?
          </h2>
          <div className="mt-3 space-y-3 text-[15px] leading-relaxed text-slate-700">
            <p>
              Two hard legal caps create the backlog. First, only about{" "}
              <strong>140,000 employment-based green cards</strong> are
              available per year across all countries and categories. Second,
              no single country may take more than{" "}
              <strong>7% of the total</strong> — roughly 9,800 EB visas per
              country per year.
            </p>
            <p>
              Demand from India vastly exceeds its 7% share. The result, in
              the {BULLETIN.month} bulletin: EB-2 India&apos;s cutoff sits at{" "}
              <strong>November 1, 2013</strong> — meaning applicants who filed
              over a decade ago are only now becoming eligible. EB-3 India is
              even further back at January 1, 2014. China faces shorter but
              still multi-year waits (EB-2: October 1, 2021), while most other
              countries are current or nearly so.
            </p>
            <p>
              The summer of 2026 showed how volatile this gets: EB-2 India
              retrogressed, then went completely{" "}
              <strong>&ldquo;Unavailable&rdquo;</strong> from July through
              September 2026 when the annual numbers ran out — before jumping
              forward with the new fiscal year in October.
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900">
            How to read the Visa Bulletin
          </h2>
          <div className="mt-3 space-y-3 text-[15px] leading-relaxed text-slate-700">
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong>&ldquo;C&rdquo; (Current)</strong> — no backlog; visa
                numbers are immediately available for everyone in that
                category/country.
              </li>
              <li>
                <strong>&ldquo;U&rdquo; (Unavailable)</strong> — no numbers
                left for the fiscal year. Common in August–September as annual
                limits run out.
              </li>
              <li>
                <strong>Dates like 01NOV13</strong> — day-month-year format.
                Only priority dates <em>on or before</em> the cutoff are
                eligible.
              </li>
              <li>
                Bulletins come out monthly around the middle of the month, and
                apply to the <em>following</em> month. A new fiscal year starts
                every October, which is when the biggest movements usually
                happen.
              </li>
            </ul>
            <p>
              Always verify against the official source: the{" "}
              <a
                href={BULLETIN.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-indigo-600 hover:underline"
              >
                {BULLETIN.month} Visa Bulletin on travel.state.gov →
              </a>
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900">
            What to do while you wait
          </h2>
          <div className="mt-3 space-y-3 text-[15px] leading-relaxed text-slate-700">
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong>Extend H-1B beyond 6 years.</strong> Under AC21, you
                can extend H-1B in 1-year or 3-year increments once your PERM
                has been pending 365+ days or your I-140 is approved — even
                while your priority date is years away.
              </li>
              <li>
                <strong>Keep your underlying status valid.</strong> A current
                priority date means nothing if you have fallen out of status.
              </li>
              <li>
                <strong>Watch the Dates for Filing chart.</strong> When USCIS
                honors it, you can file I-485 early and get an EAD/AP combo
                card while waiting for final action.
              </li>
              <li>
                <strong>Talk to an immigration attorney</strong> before making
                life decisions (job changes, travel, marriage timing) around
                your priority date. This tool is for information only — not
                legal advice.
              </li>
            </ul>
          </div>
        </div>

        {/* FAQs */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900">
            Frequently asked questions
          </h2>
          <div className="mt-4 space-y-4">
            {FAQS.map((f) => (
              <div key={f.q} className="border-b border-slate-100 pb-4 last:border-0 last:pb-0">
                <h3 className="font-bold text-slate-900">{f.q}</h3>
                <p className="mt-1 text-[15px] leading-relaxed text-slate-700">
                  {f.a}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Related resources — internal linking */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900">
            Keep exploring your green card journey
          </h2>
          <p className="mt-1 text-sm text-slate-600">
            Priority dates are one piece of the puzzle — these tools and guides
            cover the rest.
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <Link
              href="/tools/i140-approval-rates"
              className="rounded-xl border border-slate-200 p-4 transition hover:border-indigo-300 hover:shadow-sm"
            >
              <p className="font-bold text-indigo-700">
                I-140 Approval Rate Explorer →
              </p>
              <p className="mt-1 text-sm text-slate-600">
                Real USCIS approval rates by EB category — see your odds before
                you file.
              </p>
            </Link>
            <Link
              href="/blog/i140-processing-time"
              className="rounded-xl border border-slate-200 p-4 transition hover:border-indigo-300 hover:shadow-sm"
            >
              <p className="font-bold text-indigo-700">
                I-140 Processing Time Guide →
              </p>
              <p className="mt-1 text-sm text-slate-600">
                How long the I-140 step takes, plus premium processing options.
              </p>
            </Link>
            <Link
              href="/blog/perm-processing-time"
              className="rounded-xl border border-slate-200 p-4 transition hover:border-indigo-300 hover:shadow-sm"
            >
              <p className="font-bold text-indigo-700">
                PERM Processing Time Guide →
              </p>
              <p className="mt-1 text-sm text-slate-600">
                PERM is usually step one — and it sets your priority date.
              </p>
            </Link>
            <Link
              href="/tools/h1b-transfer"
              className="rounded-xl border border-slate-200 p-4 transition hover:border-indigo-300 hover:shadow-sm"
            >
              <p className="font-bold text-indigo-700">
                H-1B Transfer Guide →
              </p>
              <p className="mt-1 text-sm text-slate-600">
                Changing jobs while waiting? AC21 portability rules explained.
              </p>
            </Link>
            <Link
              href="/tools/sponsor-match"
              className="rounded-xl border border-slate-200 p-4 transition hover:border-indigo-300 hover:shadow-sm"
            >
              <p className="font-bold text-indigo-700">
                H-1B Sponsor Match Finder →
              </p>
              <p className="mt-1 text-sm text-slate-600">
                Find employers with a real history of H-1B sponsorship.
              </p>
            </Link>
            <Link
              href="/tools/lottery-results"
              className="rounded-xl border border-slate-200 p-4 transition hover:border-indigo-300 hover:shadow-sm"
            >
              <p className="font-bold text-indigo-700">
                H-1B Lottery Results Tracker →
              </p>
              <p className="mt-1 text-sm text-slate-600">
                Selection rates and timelines — where the H-1B journey often
                begins.
              </p>
            </Link>
          </div>
        </div>

        <p className="text-xs text-slate-500">
          Data: U.S. Department of State Visa Bulletins, April–November 2026.
          Wait estimates are rough projections based on recent cutoff movement
          and are not guarantees. This page is for informational purposes only
          and is not legal advice. Last updated: November 2026.
        </p>
      </div>
    </main>
  );
}
