"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

interface IndexEntry {
  slug: string;
  name: string;
  cases: number;
}

export default function SearchBox() {
  const [index, setIndex] = useState<IndexEntry[]>([]);
  const [q, setQ] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    fetch("/search-index.json")
      .then((r) => r.json())
      .then((d) => setIndex(d))
      .catch(() => {});
  }, []);

  const results = useMemo(() => {
    const needle = q.trim().toLowerCase();
    if (needle.length < 2) return [];
    return index
      .filter((e) => e.name.toLowerCase().includes(needle))
      .slice(0, 8);
  }, [q, index]);

  return (
    <div className="relative mx-auto w-full max-w-xl">
      <input
        value={q}
        onChange={(e) => {
          setQ(e.target.value);
          setOpen(true);
        }}
        onBlur={() => setTimeout(() => setOpen(false), 150)}
        placeholder="Search a company — e.g. Amazon, Google, Infosys…"
        className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none placeholder:text-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
      />
      {open && results.length > 0 && (
        <ul className="absolute z-10 mt-1 w-full overflow-hidden rounded-lg border border-slate-200 bg-white shadow-lg">
          {results.map((r) => (
            <li key={r.slug}>
              <Link
                href={`/sponsors/${r.slug}/`}
                className="flex items-center justify-between px-4 py-2.5 hover:bg-blue-50"
              >
                <span className="font-medium text-slate-800">{r.name}</span>
                <span className="text-xs text-slate-500">
                  {r.cases.toLocaleString()} filings
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
