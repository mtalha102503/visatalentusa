"use client";

import Link from "next/link";
import { useState } from "react";

const tools = [
  {
    href: "/tools/lottery-odds",
    label: "H-1B Lottery Odds Calculator",
    desc: "Estimate your selection odds by wage level",
  },
  {
    href: "/tools/sponsor-match",
    label: "H-1B Sponsor Match Finder",
    desc: "Find companies that sponsor your job title",
  },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);
  const [mobileToolsOpen, setMobileToolsOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/#top-sponsors", label: "Top Sponsors" },
    { href: "/blog", label: "Blog" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-xl font-bold tracking-tight text-blue-800">
          VisaTalent<span className="text-slate-500">USA</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
          {links.slice(0, 3).map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-blue-700">
              {l.label}
            </Link>
          ))}

          {/* Tools dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setToolsOpen(true)}
            onMouseLeave={() => setToolsOpen(false)}
          >
            <button
              className="flex items-center gap-1 hover:text-blue-700"
              aria-expanded={toolsOpen}
              aria-haspopup="true"
            >
              Tools
              <svg
                className={`h-3.5 w-3.5 transition-transform ${toolsOpen ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {toolsOpen && (
              <div className="absolute left-0 top-full z-50 w-72 pt-2">
                <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-lg">
                  {tools.map((t) => (
                    <Link
                      key={t.href}
                      href={t.href}
                      className="block px-4 py-3 hover:bg-blue-50"
                      onClick={() => setToolsOpen(false)}
                    >
                      <p className="font-semibold text-slate-900">{t.label}</p>
                      <p className="text-xs text-slate-500">{t.desc}</p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {links.slice(3).map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-blue-700">
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="rounded p-2 text-slate-700 hover:bg-slate-100 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="border-t border-slate-200 bg-white px-4 py-2 md:hidden">
          {links.slice(0, 3).map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="block py-2.5 text-sm font-medium text-slate-700 hover:text-blue-700"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}

          {/* Mobile tools expandable */}
          <button
            className="flex w-full items-center justify-between py-2.5 text-sm font-medium text-slate-700"
            onClick={() => setMobileToolsOpen(!mobileToolsOpen)}
          >
            Tools
            <svg
              className={`h-4 w-4 transition-transform ${mobileToolsOpen ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {mobileToolsOpen && (
            <div className="pl-4">
              {tools.map((t) => (
                <Link
                  key={t.href}
                  href={t.href}
                  className="block py-2 text-sm text-slate-600 hover:text-blue-700"
                  onClick={() => setOpen(false)}
                >
                  {t.label}
                </Link>
              ))}
            </div>
          )}

          {links.slice(3).map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="block py-2.5 text-sm font-medium text-slate-700 hover:text-blue-700"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
