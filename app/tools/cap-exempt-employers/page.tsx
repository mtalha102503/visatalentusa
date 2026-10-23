import type { Metadata } from "next";
import Link from "next/link";
import { getCapExemptEmployers } from "@/lib/data";
import { formatNum, formatUSD, formatPct } from "@/lib/format";
import CapExemptFinder from "./CapExemptFinder";

export const metadata: Metadata = {
  title: "H-1B Cap-Exempt Employers List & Finder",
  description:
    "Free finder of 180+ H-1B cap-exempt employers — universities, teaching hospitals and research nonprofits that can sponsor you any time of year, with no lottery. Search by job title, compare real DOL salaries and LCA certification rates.",
  keywords: [
    "h1b cap exempt employers",
    "cap exempt h1b",
    "h1b cap exempt",
    "cap exempt h1b employers list",
    "h1b cap exempt employers list",
    "h1b cap exempt jobs",
    "cap exempt employers",
  ],
  alternates: {
    canonical: "https://visatalentusa.com/tools/cap-exempt-employers",
  },
  openGraph: {
    title: "H-1B Cap-Exempt Employers List & Finder",
    description:
      "Universities, hospitals and research nonprofits that skip the H-1B lottery — searchable by job title, with real salaries from official DOL records. Free.",
    url: "https://visatalentusa.com/tools/cap-exempt-employers",
    type: "website",
    siteName: "VisaTalentUSA",
  },
  twitter: {
    card: "summary_large_image",
    title: "H-1B Cap-Exempt Employers List & Finder",
    description:
      "Find cap-exempt H-1B sponsors for your job title — with real salary data. No lottery, year-round filing.",
  },
  robots: { index: true, follow: true },
};

const FAQS = [
  {
    q: "Who is exempt from the H-1B visa cap?",
    a: "Four kinds of employers can file H-1B petitions that are not counted against the annual 85,000 cap: (1) institutions of higher education, (2) nonprofit organizations affiliated with a higher-education institution, (3) nonprofit research organizations, and (4) government research organizations. Their petitions skip the lottery entirely and can be filed at any time of year.",
  },
  {
    q: "How do I know if an employer is cap-exempt?",
    a: "Ask what kind of organization it is. Universities and colleges always qualify. Hospitals and other nonprofits qualify only if they are formally affiliated with a university (most teaching hospitals are) or are primarily engaged in research. For-profit companies almost never qualify on their own. The finder above is a research starting point — always confirm with the employer's HR team or an immigration attorney before relying on cap-exempt status.",
  },
  {
    q: "How can I find cap-exempt H-1B jobs?",
    a: "Start with the finder above: enter your job title to see which cap-exempt employers actually file H-1Bs for that role, and what they pay. Then go to those employers' own career pages — cap-exempt hiring happens year-round, so openings appear outside the March lottery window. Universities, academic medical centers and national research institutes are the richest hunting grounds.",
  },
  {
    q: "Are hospitals cap-exempt for H-1B?",
    a: "Many are, but not all. A hospital qualifies if it is a nonprofit formally affiliated with an institution of higher education (a teaching hospital) or is a nonprofit research organization. Large academic medical centers — Mayo Clinic, Mass General Brigham, Johns Hopkins — file thousands of cap-exempt H-1Bs. A standalone for-profit hospital does not qualify.",
  },
  {
    q: "Are all nonprofits exempt from the H-1B cap?",
    a: "No — this is the most common misconception. Ordinary nonprofits (charities, NGOs, community organizations) are cap-subject like any company. A nonprofit is cap-exempt only if it is affiliated with a college or university, or if it is primarily engaged in basic or applied research. Filing data alone cannot prove the legal category, which is why our list labels these employers as cap-exempt candidates.",
  },
  {
    q: "Does the $100,000 H-1B fee apply to cap-exempt employees?",
    a: "Cap-exempt status concerns the lottery cap, not fees — the $100,000 payment never turned on whether an employer was cap-exempt. As of October 2026 the payment is not being collected at all: two federal courts have blocked its enforcement while litigation continues. Even before those rulings, USCIS guidance limited it to new petitions for beneficiaries outside the United States; change-of-status, extension and amendment petitions for workers already in the U.S. were outside its scope. The situation is changing quickly — check the current guidance on the USCIS H-1B page before filing.",
  },
  {
    q: "Can a cap-exempt employer sponsor me at any time of year?",
    a: "Yes. There is no registration window and no lottery for cap-exempt petitions. A qualifying employer can file an H-1B petition for you whenever it wants to hire you, and you can start as soon as the petition is approved — unlike cap-subject cases, which are tied to the March registration and an October 1 start.",
  },
  {
    q: "If I work for a cap-exempt employer, can I later move to a regular company?",
    a: "Usually not directly. Time spent in cap-exempt employment does not count you against the cap, so before a cap-subject employer can hire you, you generally must first be selected in the lottery — unless you were previously counted against the cap (for example, an earlier cap-subject H-1B). One exception: you may work for a cap-exempt and a cap-subject employer concurrently, once the cap-subject petition has been approved through the lottery. Plan the sequence with an immigration attorney.",
  },
];

export default async function CapExemptEmployersPage() {
  const employers = await getCapExemptEmployers();
  const totalCases = employers.reduce((a, e) => a + e.total_cases, 0);
  const totalCertified = employers.reduce((a, e) => a + e.certified_cases, 0);
  const overallRate = totalCases > 0 ? totalCertified / totalCases : null;
  const medians = employers
    .map((e) => e.median_wage)
    .filter((w): w is number => w != null)
    .sort((a, b) => a - b);
  const typicalMedian = medians.length
    ? medians[Math.floor(medians.length / 2)]
    : null;
  const titleCount = new Set(
    employers.flatMap((e) => e.top_titles.map((t) => t.title))
  ).size;

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
            name: "Tools",
            item: "https://visatalentusa.com/tools/cap-exempt-employers",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "H-1B Cap-Exempt Employers Finder",
            item: "https://visatalentusa.com/tools/cap-exempt-employers",
          },
        ],
      },
      {
        "@type": "WebApplication",
        name: "H-1B Cap-Exempt Employers Finder",
        url: "https://visatalentusa.com/tools/cap-exempt-employers",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Any",
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        description:
          "Searchable finder of H-1B cap-exempt employers with real salaries, filing counts and DOL LCA certification rates from official Department of Labor data.",
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
        <Link
          href="/"
          className="underline underline-offset-2 hover:text-blue-700"
        >
          Home
        </Link>
        <span className="mx-2">/</span>
        <span className="text-slate-700">H-1B Cap-Exempt Employers Finder</span>
      </nav>

      <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
        H-1B Cap-Exempt Employers Finder
      </h1>
      <div className="mt-4 max-w-3xl space-y-3 text-slate-600">
        <p className="text-lg">
          Not every H-1B needs the lottery. Universities, teaching hospitals
          and research nonprofits are <strong>exempt from the annual cap</strong>{" "}
          — they can sponsor you <strong>any time of year</strong>. Below are
          the cap-exempt employers that actually file H-1Bs, with{" "}
          <strong>real salaries</strong> and{" "}
          <strong>DOL LCA certification rates</strong> from official
          Department of Labor records — including the salary each employer
          pays for <strong>your job title</strong>.
        </p>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
        <div className="rounded-lg bg-blue-50 p-4 text-center">
          <p className="text-2xl font-bold text-blue-900">
            {formatNum(employers.length)}
          </p>
          <p className="text-xs font-medium text-blue-700">
            cap-exempt employers tracked
          </p>
        </div>
        <div className="rounded-lg bg-slate-100 p-4 text-center">
          <p className="text-2xl font-bold text-slate-900">
            {formatNum(totalCases)}
          </p>
          <p className="text-xs font-medium text-slate-600">
            H-1B filings, FY2024–FY2026
          </p>
        </div>
        <div className="rounded-lg bg-emerald-50 p-4 text-center">
          <p className="text-2xl font-bold text-emerald-900">
            {formatUSD(typicalMedian)}
          </p>
          <p className="text-xs font-medium text-emerald-700">
            typical median salary (employer medians)
          </p>
        </div>
        <div className="rounded-lg bg-violet-50 p-4 text-center">
          <p className="text-2xl font-bold text-violet-900">
            {formatPct(overallRate)}
          </p>
          <p className="text-xs font-medium text-violet-700">
            overall DOL LCA certification rate
          </p>
        </div>
      </div>

      <div className="mt-8">
        <CapExemptFinder employers={employers} />
      </div>

      {/* What cap-exempt means */}
      <section className="mt-14">
        <h2 className="text-2xl font-bold text-slate-900">
          What &ldquo;Cap-Exempt&rdquo; Actually Means
        </h2>
        <div className="mt-4 space-y-3 text-slate-600">
          <p>
            Congress caps most new H-1Bs at 85,000 per year, which is why the
            March lottery exists. But four categories of employer are{" "}
            <strong>exempt from that cap by law</strong>. Their petitions are
            never counted, are never entered in the lottery, and can be filed
            on any date. USCIS describes these categories on its{" "}
            <a
              href="https://www.uscis.gov/working-in-the-united-states/h-1b-specialty-occupations"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 underline underline-offset-2"
            >
              H-1B specialty occupations page
            </a>
            .
          </p>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-5">
            <p className="font-semibold text-slate-900">
              Institutions of higher education
            </p>
            <p className="mt-1 text-sm text-slate-600">
              Accredited colleges and universities — from Stanford and the
              University of Michigan to small liberal-arts colleges and school
              systems. This is the largest cap-exempt category.
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-5">
            <p className="font-semibold text-slate-900">
              Nonprofits affiliated with a university
            </p>
            <p className="mt-1 text-sm text-slate-600">
              Organizations formally attached to a higher-education institution
              — most importantly <strong>teaching hospitals</strong> such as
              Mayo Clinic and Mass General Brigham.
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-5">
            <p className="font-semibold text-slate-900">
              Nonprofit research organizations
            </p>
            <p className="mt-1 text-sm text-slate-600">
              Nonprofits primarily engaged in basic or applied research —
              independent labs, research institutes and think tanks with a
              research mission.
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-5">
            <p className="font-semibold text-slate-900">
              Government research organizations
            </p>
            <p className="mt-1 text-sm text-slate-600">
              Federal and state research bodies, including national
              laboratories and public research agencies.
            </p>
          </div>
        </div>
        <p className="mt-4 text-sm text-slate-600">
          One nuance worth knowing: in some cases a for-profit company can file
          a cap-exempt petition for an employee who will work{" "}
          <em>at</em> a qualifying institution (for example, on-site at a
          university). The exemption follows the qualifying worksite and
          duties — an immigration attorney can tell you whether a specific role
          qualifies.
        </p>
      </section>

      {/* Comparison table */}
      <section className="mt-14">
        <h2 className="text-2xl font-bold text-slate-900">
          Cap-Exempt vs Cap-Subject H-1B
        </h2>
        <div className="mt-5 overflow-x-auto rounded-lg border border-slate-200">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-slate-50 text-left text-xs uppercase tracking-wide text-slate-500">
                <th className="px-4 py-3">&nbsp;</th>
                <th className="px-4 py-3">Cap-exempt</th>
                <th className="px-4 py-3">Cap-subject</th>
              </tr>
            </thead>
            <tbody className="text-slate-700">
              <tr className="border-t border-slate-100">
                <td className="px-4 py-3 font-medium">Lottery</td>
                <td className="px-4 py-3">None — never entered</td>
                <td className="px-4 py-3">Yes, every March</td>
              </tr>
              <tr className="border-t border-slate-100">
                <td className="px-4 py-3 font-medium">When you can file</td>
                <td className="px-4 py-3">Any time of year</td>
                <td className="px-4 py-3">
                  Only after lottery selection; October 1 start
                </td>
              </tr>
              <tr className="border-t border-slate-100">
                <td className="px-4 py-3 font-medium">Annual limit</td>
                <td className="px-4 py-3">No limit</td>
                <td className="px-4 py-3">85,000 (65,000 + 20,000 U.S. master&apos;s)</td>
              </tr>
              <tr className="border-t border-slate-100">
                <td className="px-4 py-3 font-medium">Typical employers</td>
                <td className="px-4 py-3">
                  Universities, teaching hospitals, research nonprofits
                </td>
                <td className="px-4 py-3">Private companies of every size</td>
              </tr>
              <tr className="border-t border-slate-100">
                <td className="px-4 py-3 font-medium">Who it suits</td>
                <td className="px-4 py-3">
                  Researchers, physicians, teachers, engineers in academia &amp; healthcare
                </td>
                <td className="px-4 py-3">Everyone else — if the lottery cooperates</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* How to use */}
      <section className="mt-14">
        <h2 className="text-2xl font-bold text-slate-900">
          How to Use This Finder
        </h2>
        <div className="mt-6 space-y-4">
          <div className="rounded-lg border border-slate-200 p-5">
            <p className="font-semibold text-slate-900">
              <span className="mr-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-800">1</span>
              Filter by your job title
            </p>
            <p className="mt-2 text-sm text-slate-600">
              Pick your title — Registered Nurse, Assistant Professor, Software
              Engineer, Physical Therapist — and the list narrows to
              cap-exempt employers that filed H-1Bs for that exact role across
              FY2024–FY2026, covering {formatNum(titleCount)} distinct titles.
              Sort by &ldquo;Highest salary for this title&rdquo; to see who
              pays your role best.
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 p-5">
            <p className="font-semibold text-slate-900">
              <span className="mr-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-800">2</span>
              Compare the three numbers that matter
            </p>
            <p className="mt-2 text-sm text-slate-600">
              Filing volume shows how active the H-1B program is; the median
              salary is your negotiation benchmark; and the DOL LCA
              certification rate shows how cleanly the employer files. A big,
              high-paying, high-certification employer is the strongest target.
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 p-5">
            <p className="font-semibold text-slate-900">
              <span className="mr-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-800">3</span>
              Open the full sponsor profile, then apply
            </p>
            <p className="mt-2 text-sm text-slate-600">
              Every card links to the employer&apos;s full page in our{" "}
              <Link href="/sponsors" className="text-blue-700 underline underline-offset-2">
                sponsor database
              </Link>{" "}
              — year-by-year filings, wage trends and worksite states. Then
              apply on the employer&apos;s own careers page; cap-exempt hiring
              runs all year, so there is no deadline to wait for.
            </p>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="mt-14">
        <h2 className="text-2xl font-bold text-slate-900">
          About This Data — Read This Before You Rely on It
        </h2>
        <div className="mt-4 space-y-3 text-slate-600">
          <p>
            Every figure on this page comes from the U.S. Department of
            Labor&apos;s official Labor Condition Application (LCA) disclosure
            data — 1,532,089 H-1B records across FY2024–FY2026, normalized
            through an open-source pipeline. No estimates, no dummy data.
          </p>
          <p>
            Employers appear here because they are flagged as{" "}
            <strong>cap-exempt candidates</strong>: their sector and filing
            patterns match the qualifying categories (higher education,
            affiliated nonprofits, research organizations). LCA data does not
            itself record an employer&apos;s legal cap status, so treat this
            list as a well-evidenced starting point and confirm status with
            the employer or an immigration attorney.
          </p>
          <p>
            The <strong>DOL LCA certification rate</strong> is certified ÷
            filed Labor Condition Applications at the Department of Labor —
            a paperwork-compliance signal, <em>not</em> a USCIS petition
            approval rate. Salary figures are the offered wages stated on
            those LCAs. This page is general information, not legal advice.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="mt-14">
        <h2 className="text-2xl font-bold text-slate-900">
          Cap-Exempt H-1B FAQs
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

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        <div className="rounded-lg border border-blue-200 bg-blue-50 p-5">
          <p className="font-semibold text-blue-900">
            Also weighing the regular lottery?
          </p>
          <p className="mt-1 text-sm text-blue-800">
            Estimate your selection odds under the wage-weighted lottery with
            our interactive calculator.
          </p>
          <Link
            href="/tools/lottery-odds"
            className="mt-3 inline-block rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-800"
          >
            Open the Lottery Odds Calculator →
          </Link>
        </div>
        <div className="rounded-lg border border-slate-200 bg-slate-50 p-5">
          <p className="font-semibold text-slate-900">
            Sponsors for your title — all employers
          </p>
          <p className="mt-1 text-sm text-slate-700">
            The Sponsor Match Finder ranks every H-1B sponsor, cap-exempt and
            cap-subject, for your exact job title.
          </p>
          <Link
            href="/tools/sponsor-match"
            className="mt-3 inline-block rounded-lg bg-slate-800 px-5 py-2.5 text-sm font-semibold text-white hover:bg-slate-900"
          >
            Open the Sponsor Match Finder →
          </Link>
        </div>
      </div>
    </div>
  );
}
