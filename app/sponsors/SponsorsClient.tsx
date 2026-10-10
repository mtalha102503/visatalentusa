"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { formatNum, formatUSD, formatPct } from "@/lib/format";
import type { IndexEntry } from "@/lib/data";

type SortKey = "cases" | "approval_rate" | "median_wage" | "name";

const PAGE_SIZE = 100;

export default function SponsorsClient({ sponsors }: { sponsors: IndexEntry[] }) {
  const [query, setQuery] = useState("");
  const [sortKey, setSortKey] = useState<SortKey>("cases");
  const [sortDir, setSortDir] = useState<1 | -1>(-1);
  const [visible, setVisible] = useState(PAGE_SIZE);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    let list = q
      ? sponsors.filter((s) => s.name.toLowerCase().includes(q))
      : [...sponsors];
    list.sort((a, b) => {
      let av: number | string | null = a[sortKey];
      let bv: number | string | null = b[sortKey];
      if (sortKey === "name") {
        return sortDir * String(av).localeCompare(String(bv));
      }
      av = (av as number | null) ?? -1;
      bv = (bv as number | null) ?? -1;
      return sortDir * ((av as number) - (bv as number));
    });
    return list;
  }, [sponsors, query, sortKey, sortDir]);

  const shown = filtered.slice(0, visible);

  function toggleSort(key: SortKey) {
    if (key === sortKey) {
      setSortDir((d) => (d === 1 ? -1 : 1));
    } else {
      setSortKey(key);
      setSortDir(key === "name" ? 1 : -1);
    }
    setVisible(PAGE_SIZE);
  }

  const th = (label: string, key: SortKey, align = "text-right") => (
    <th className={`px-4 py-3 font-semibold ${align}`}>
      <button
        onClick={() => toggleSort(key)}
        className="inline-flex items-center gap-1 hover:text-blue-700"
      >
        {label}
        {sortKey === key && (
          <span className="text-blue-700">{sortDir === -1 ? "↓" : "↑"}</span>
        )}
      </button>
    </th>
  );

  return (
    <div>
      {/* Search + count */}
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <input
          type="search"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setVisible(PAGE_SIZE);
          }}
          placeholder="Filter 1,000 sponsors — e.g. Amazon, Google…"
          className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:border-blue-500 focus:outline-none sm:max-w-md"
          aria-label="Filter sponsors"
        />
        <p className="text-sm text-slate-500">
          Showing {formatNum(shown.length)} of {formatNum(filtered.length)} sponsors
        </p>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-lg border border-slate-200">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-50 text-slate-600">
            <tr>
              <th className="px-4 py-3 font-semibold">#</th>
              <th className="px-4 py-3 font-semibold text-left">
                <button
                  onClick={() => toggleSort("name")}
                  className="inline-flex items-center gap-1 hover:text-blue-700"
                >
                  Employer
                  {sortKey === "name" && (
                    <span className="text-blue-700">{sortDir === -1 ? "↓" : "↑"}</span>
                  )}
                </button>
              </th>
              {th("Filings", "cases")}
              {th("Approval", "approval_rate")}
              {th("Median salary", "median_wage")}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {shown.map((s, i) => (
              <tr key={s.slug} className="hover:bg-blue-50/50">
                <td className="px-4 py-2.5 text-slate-500">{i + 1}</td>
                <td className="px-4 py-2.5">
                  <Link
                    href={`/sponsors/${s.slug}/`}
                    className="font-medium text-blue-700 underline underline-offset-2"
                  >
                    {s.name}
                  </Link>
                </td>
                <td className="px-4 py-2.5 text-right tabular-nums">
                  {formatNum(s.cases)}
                </td>
                <td className="px-4 py-2.5 text-right tabular-nums">
                  {formatPct(s.approval_rate)}
                </td>
                <td className="px-4 py-2.5 text-right tabular-nums">
                  {formatUSD(s.median_wage)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {filtered.length === 0 && (
        <p className="mt-8 text-center text-slate-500">
          No sponsors match “{query}”. Try a different name.
        </p>
      )}

      {visible < filtered.length && (
        <div className="mt-6 text-center">
          <button
            onClick={() => setVisible((v) => v + PAGE_SIZE)}
            className="rounded-lg bg-blue-700 px-6 py-2.5 text-sm font-semibold text-white hover:bg-blue-800"
          >
            Load more ({formatNum(filtered.length - visible)} remaining)
          </button>
        </div>
      )}
    </div>
  );
}
