import type { Metadata } from "next";
import Link from "next/link";
import LotteryResultsHub from "./LotteryResultsHub";

export const metadata: Metadata = {
  title: "H-1B Lottery Results Tracker 2026-2027",
  description:
    "Track H-1B lottery results: FY2021–2026 historical data with real USCIS registration numbers and selection rates (24.8%–46.2%). FY2027 timeline, what to do if selected or not selected, and FAQs.",
  keywords: [
    "h1b lottery results",
    "h1b lottery results 2026",
    "h1b lottery results 2027",
    "h1b selection rate",
    "h1b lottery tracker",
    "h1b registration numbers",
    "uscis h1b lottery results date",
  ],
  alternates: { canonical: "https://visatalentusa.com/tools/lottery-results" },
  openGraph: {
    title: "H-1B Lottery Results Tracker",
    description:
      "Real USCIS data: H-1B lottery results FY2021–2026, selection rates, FY2027 timeline, and what to do next.",
    url: "https://visatalentusa.com/tools/lottery-results",
    type: "website",
    siteName: "VisaTalentUSA",
  },
  twitter: {
    card: "summary_large_image",
    title: "H-1B Lottery Results Tracker",
    description:
      "Historical H-1B lottery data, selection rates, and FY2027 timeline. Free tool.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function LotteryResultsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        name: "H-1B Lottery Results Tracker — Historical Data & Selection Rates",
        description:
          "Free interactive tool: H-1B lottery results FY2021–2026 with official USCIS registration numbers and selection rates, FY2027 timeline tracker, and guidance for selected and non-selected registrants.",
        url: "https://visatalentusa.com/tools/lottery-results",
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
            item: "https://visatalentusa.com/tools/lottery-results",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "H-1B Lottery Results Tracker",
            item: "https://visatalentusa.com/tools/lottery-results",
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "When are H-1B lottery results announced?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "USCIS typically notifies selected registrants by March 31 each year. For FY2027, registration runs March 4–19, 2026, with selection notifications by March 31, 2026. Your employer or attorney receives the notification — you cannot check independently.",
            },
          },
          {
            "@type": "Question",
            name: "What is the H-1B lottery selection rate?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Based on official USCIS data: FY2024 was 24.8%, FY2025 was 28.7%, and FY2026 was 34.9%. Selection rates have been improving since USCIS implemented beneficiary-centric selection to eliminate duplicate registrations.",
            },
          },
          {
            "@type": "Question",
            name: "How do I check my H-1B lottery result?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "You cannot check directly. USCIS sends selection notifications to the employer's or attorney's online account. Your employer must inform you. If selected, they can file your H-1B petition starting April 1.",
            },
          },
          {
            "@type": "Question",
            name: "What happens if I'm not selected in the H-1B lottery?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Options include: trying again next year, Day 1 CPT programs (if on F-1), O-1 visa (extraordinary ability), L-1 (intracompany transfer), cap-exempt employers (universities, nonprofits), or working remotely from abroad.",
            },
          },
          {
            "@type": "Question",
            name: "Is there a second H-1B lottery?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Sometimes. If USCIS doesn't receive enough petitions during the April–June filing window to fill the 85,000 cap, they conduct additional selection rounds. This happened in FY2021, FY2022, and FY2024.",
            },
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
        <Link href="/tools/lottery-odds" className="hover:text-blue-700 underline underline-offset-2">
          Tools
        </Link>
        <span className="mx-2">/</span>
        <span className="text-slate-700">H-1B Lottery Results Tracker</span>
      </nav>

      <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
        H-1B Lottery Results Tracker
      </h1>
      <div className="mt-4 max-w-3xl space-y-3 text-slate-600">
        <p className="text-lg">
          Track <strong>H-1B lottery results</strong> with real USCIS data. Explore{" "}
          <strong>6 years of historical results</strong> (FY2021–FY2026), see how{" "}
          <strong>selection rates improved from 24.8% to 34.9%</strong>, follow the{" "}
          <strong>FY2027 timeline</strong>, and get step-by-step guidance for what to do{" "}
          <strong>whether you're selected or not</strong>.
        </p>
        <p className="text-sm text-slate-500">
          All registration numbers are from the official USCIS H-1B Electronic Registration Process page.
          Last verified: October 2026.
        </p>
      </div>

      <div className="mt-8">
        <LotteryResultsHub />
      </div>

      {/* Detailed Content Section */}
      <section className="mt-12 space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">
            Understanding H-1B Lottery Results
          </h2>
          <div className="mt-4 space-y-4 text-slate-600">
            <p>
              The H-1B lottery (officially the <strong>H-1B Electronic Registration Process</strong>) is how
              U.S. Citizenship and Immigration Services (USCIS) selects which employers can file H-1B petitions
              each fiscal year. Since demand far exceeds the annual cap of 85,000 visas (65,000 regular +
              20,000 U.S. master's exemption), USCIS runs a randomized selection from all eligible registrations.
            </p>
            <p>
              <strong>How results are announced:</strong> USCIS does not publish a public list of winners.
              Instead, selection notifications appear in the online accounts of the petitioning employer or
              their authorized attorney/representative. Your employer is responsible for informing you.
              Notifications for the initial selection round are typically sent by <strong>March 31</strong> each year.
            </p>
            <p>
              <strong>The fraud crackdown changed everything:</strong> In FY2024, nearly 759,000 eligible
              registrations were submitted — but over 408,000 were duplicate filings where multiple employers
              registered the same person to game the odds. USCIS responded with <strong>beneficiary-centric
              selection</strong> (selecting unique people, not registrations) starting in FY2025. The result?
              Duplicates collapsed to just 7,828 by FY2026, and legitimate applicants' selection rates jumped
              from 24.8% to 34.9%.
            </p>
            <p>
              <strong>What's new for FY2027:</strong> A $100,000 supplemental fee and wage-weighted selection
              (higher-paid roles get more lottery entries) are expected to further reshape the landscape.
              Early projections suggest registrations could drop to 200,000–250,000.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-slate-900">
            H-1B Lottery Results: Frequently Asked Questions
          </h2>
          <div className="mt-6 space-y-4">
            {[
              {
                q: "When are H-1B lottery results announced?",
                a: "USCIS typically sends selection notifications by March 31 each year. For FY2027: registration March 4–19, 2026, results by March 31, 2026.",
              },
              {
                q: "How do I check if I was selected?",
                a: "You cannot check directly. USCIS notifies your employer or their attorney through their online account. Ask your employer for your status after March 31.",
              },
              {
                q: "What is the current H-1B selection rate?",
                a: "FY2026: 34.9% (120,141 selected from 343,981 eligible). FY2025: 28.7%. FY2024: 24.8%. Rates have improved as anti-fraud measures eliminated duplicate registrations.",
              },
              {
                q: "Is there a second round of selections?",
                a: "Sometimes. If USCIS doesn't receive enough petitions during April–June to fill the 85,000 cap, additional selection rounds occur. This happened in FY2021, FY2022, and FY2024. Stay in contact with your employer through summer.",
              },
              {
                q: "Can I be registered by multiple employers?",
                a: "Yes, but under beneficiary-centric selection it doesn't improve your odds — USCIS selects unique beneficiaries, not registrations. Multiple legitimate job offers are fine, but coordinated fraud will result in denial and potential criminal referral.",
              },
            ].map((faq, i) => (
              <div key={i} className="rounded-lg border border-slate-200 p-5">
                <h3 className="font-semibold text-slate-900">{faq.q}</h3>
                <p className="mt-2 text-sm text-slate-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-links */}
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        <div className="rounded-lg border border-blue-200 bg-blue-50 p-5">
          <p className="font-semibold text-blue-900">Estimate your personal odds</p>
          <p className="mt-1 text-sm text-blue-800">
            Use our wage-weighted odds calculator to estimate your FY2028 selection chances by salary level.
          </p>
          <Link
            href="/tools/lottery-odds"
            className="mt-3 inline-block rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-800"
          >
            Lottery Odds Calculator →
          </Link>
        </div>
        <div className="rounded-lg border border-green-200 bg-green-50 p-5">
          <p className="font-semibold text-green-900">Find H-1B sponsors</p>
          <p className="mt-1 text-sm text-green-800">
            Browse 1,000+ real H-1B sponsoring employers from DOL disclosure data.
          </p>
          <Link
            href="/sponsors"
            className="mt-3 inline-block rounded-lg bg-green-700 px-5 py-2.5 text-sm font-semibold text-white hover:bg-green-800"
          >
            Browse Sponsors →
          </Link>
        </div>
      </div>

      <p className="mt-8 text-xs text-slate-400">
        Data source: USCIS H-1B Electronic Registration Process (
        <a
          href="https://www.uscis.gov/working-in-the-united-states/temporary-workers/h-1b-specialty-occupations/h-1b-electronic-registration-process"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          uscis.gov
        </a>
        ). This tool is for informational purposes only and does not constitute legal advice.
        Consult a licensed immigration attorney for your specific situation.
      </p>
    </div>
  );
}
