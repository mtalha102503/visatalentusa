import type { Metadata } from "next";
import Link from "next/link";
import Header from "./Header";
import RouteProgress from "./RouteProgress";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "VisaTalentUSA — H1B Visa Sponsors Database",
    template: "%s | VisaTalentUSA",
  },
  description:
    "Search 1,000 top U.S. employers that sponsor H-1B visas. Salaries, approval rates, and lottery odds from official Department of Labor disclosure data.",
  metadataBase: new URL("https://visatalentusa.com"),
  alternates: {
    canonical: "https://visatalentusa.com/",
  },
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    siteName: "VisaTalentUSA",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
  },
};

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <p className="text-lg font-bold text-blue-800">
              VisaTalent<span className="text-slate-500">USA</span>
            </p>
            <p className="mt-2 text-sm text-slate-600">
              The H-1B sponsor intelligence database: which U.S. companies
              sponsor work visas, what they pay, and how the lottery treats
              their filings.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-800">Company</p>
            <ul className="mt-2 space-y-1 text-sm text-slate-600">
              <li>
                <Link href="/blog" className="hover:text-blue-700">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-blue-700">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-700">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-blue-700">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-800">Data</p>
            <p className="mt-2 text-sm text-slate-600">
              Built from the U.S. Department of Labor&apos;s public Labor
              Condition Application (LCA) disclosure data, FY2024–FY2026.
            </p>
          </div>
        </div>
        <div className="mt-8 flex flex-col gap-2 border-t border-slate-200 pt-4 text-xs text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>
            © 2026 VisaTalentUSA. All rights reserved. This
            site is an independent research project and is not affiliated with
            the U.S. Department of Labor or USCIS. Filing data does not guarantee
            visa sponsorship or approval.
          </p>
          <p className="text-sm">
            A{" "}
            <a
              href="https://hireskys.com"
              className="font-bold text-blue-800 hover:underline"
            >
              HireSkys
            </a>{" "}
            company — the #1 remote job marketplace
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col bg-white text-slate-900 antialiased">
        <RouteProgress />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
