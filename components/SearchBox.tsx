"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface IndexEntry {
  slug: string;
  name: string;
  cases: number;
}

export default function SearchBox() {
  const [index, setIndex] = useState<IndexEntry[]>([]);
  const [q, setQ] = useState("");
  const [open, setOpen] = useState(false);
  const [highlight, setHighlight] = useState(0);
  const router = useRouter();
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch("/search-index.json")
      .then((r) => r.json())
      .then((d) => setIndex(d))
      .catch(() => {});
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (boxRef.current && !boxRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, []);

  const results = useMemo(() => {
    const needle = q.trim().toLowerCase();
    if (needle.length < 2) return [];
    // Prioritize names that START with the query, then contains
    const starts: IndexEntry[] = [];
    const contains: IndexEntry[] = [];
    for (const e of index) {
      const n = e.name.toLowerCase();
      if (n.startsWith(needle)) starts.push(e);
      else if (n.includes(needle)) contains.push(e);
    }
    return [...starts, ...contains].slice(0, 8);
  }, [q, index]);

  const goTo = (slug: string) => {
    setOpen(false);
    router.push(`/sponsors/${slug}/`);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlight((h) => Math.min(h + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlight((h) => Math.max(h - 1, 0));
    } else if (e.key === "Enter") {
      if (results.length > 0) {
        e.preventDefault();
        goTo(results[highlight]?.slug ?? results[0].slug);
      }
    } else if (e.key === "Escape") {
      setOpen(false);
    }
  };

  const showDropdown = open && q.trim().length >= 2;

  return (
    <div ref={boxRef} className="relative mx-auto w-full max-w-xl">
      <input
        value={q}
        onChange={(e) => {
          setQ(e.target.value);
          setOpen(true);
          setHighlight(0);
        }}
        onFocus={() => setOpen(true)}
        onKeyDown={onKeyDown}
        placeholder="Search a company — e.g. Amazon, Google, Infosys…"
        className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none placeholder:text-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
        role="combobox"
        aria-expanded={showDropdown}
        aria-autocomplete="list"
      />
      {showDropdown && (
        <ul className="absolute z-10 mt-1 w-full overflow-hidden rounded-lg border border-slate-200 bg-white shadow-lg">
          {results.length > 0 ? (
            results.map((r, i) => (
              <li key={r.slug}>
                <Link
                  href={`/sponsors/${r.slug}/`}
                  onClick={() => setOpen(false)}
                  onMouseEnter={() => setHighlight(i)}
                  className={`flex items-center justify-between px-4 py-3 ${
                    i === highlight ? "bg-blue-50" : ""
                  }`}
                >
                  <span className="font-medium text-slate-800">{r.name}</span>
                  <span className="text-xs text-slate-500">
                    {r.cases.toLocaleString()} filings
                  </span>
                </Link>
              </li>
            ))
          ) : (
            <li className="px-4 py-3 text-sm text-slate-500">
              No companies found for “{q.trim()}”. Try another name.
            </li>
          )}
        </ul>
      )}
    </div>
  );
}
