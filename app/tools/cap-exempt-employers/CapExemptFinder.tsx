"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { CapExemptEmployer } from "@/lib/data";
import { formatNum, formatUSD, formatPct } from "@/lib/format";

type SortKey = "cases" | "salary" | "rate" | "titleSalary";
const PAGE = 24;

export default function CapExemptFinder({
  employers,
}: {
  employers: CapExemptEmployer[];
}) {
  const [query, setQuery] = useState("");
  const [title, setTitle] = useState("");
  const [state, setState] = useState("");
  const [sort, setSort] = useState<SortKey>("cases");
  const [shown, setShown] = useState(PAGE);

  const titleOptions = useMemo(() => {
    const m = new Map<string, number>();
    for (const e of employers)
      for (const t of e.top_titles) m.set(t.title, (m.get(t.title) ?? 0) + t.cases);
    return [...m.entries()]
      .sort((a, b) => b[1] - a[1])
      .slice(0, 80)
      .map(([t]) => t);
  }, [employers]);

  const stateOptions = useMemo(() => {
    const m = new Map<string, number>();
    for (const e of employers)
      for (const s of e.top_states) m.set(s.state, (m.get(s.state) ?? 0) + s.cases);
    return [...m.entries()].sort((a, b) => b[1] - a[1]).map(([s]) => s);
  }, [employers]);

  const titleStat = (e: CapExemptEmployer) =>
    title ? e.top_titles.find((t) => t.title === title) ?? null : null;

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    const list = employers.filter((e) => {
      if (q && !e.name.toLowerCase().includes(q)) return false;
      if (title && !e.top_titles.some((t) => t.title === title)) return false;
      if (state && !e.top_states.some((s) => s.state === state)) return false;
      return true;
    });
    const effective: SortKey =
      sort === "titleSalary" && !title ? "cases" : sort;
    const sorted = [...list].sort((a, b) => {
      if (effective === "salary")
        return (b.median_wage ?? -1) - (a.median_wage ?? -1);
      if (effective === "rate") return (b.cert_rate ?? -1) - (a.cert_rate ?? -1);
      if (effective === "titleSalary") {
        const aw =
          a.top_titles.find((t) => t.title === title)?.avg_wage ?? -1;
        const bw =
          b.top_titles.find((t) => t.title === title)?.avg_wage ?? -1;
        if (bw !== aw) return bw - aw;
        return b.total_cases - a.total_cases;
      }
      return b.total_cases - a.total_cases;
    });
    return sorted;
  }, [employers, query, title, state, sort]);

  const reset = () => {
    setQuery("");
    setTitle("");
    setState("");
    setSort("cases");
    setShown(PAGE);
  };

  const selectCls =
    "w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm text-slate-900 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-100";

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm md:p-8">
      <label
        htmlFor="cap-exempt-search"
        className="text-sm font-semibold text-slate-700"
      >
        Search cap-exempt employers
      </label>
      <input
        id="cap-exempt-search"
        type="text"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setShown(PAGE);
        }}
        placeholder="e.g. Stanford, Mayo Clinic, University of Michigan…"
        autoComplete="off"
        className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-100"
      />

      <div className="mt-4 grid gap-3 sm:grid-cols-3">
        <div>
          <label
            htmlFor="cap-exempt-title"
            className="text-xs font-semibold uppercase tracking-wide text-slate-500"
          >
            Your job title
          </label>
          <select
            id="cap-exempt-title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
              setShown(PAGE);
              if (e.target.value) setSort("titleSalary");
            }}
            className={selectCls}
          >
            <option value="">All job titles</option>
            {titleOptions.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label
            htmlFor="cap-exempt-state"
            className="text-xs font-semibold uppercase tracking-wide text-slate-500"
          >
            Worksite state
          </label>
          <select
            id="cap-exempt-state"
            value={state}
            onChange={(e) => {
              setState(e.target.value);
              setShown(PAGE);
            }}
            className={selectCls}
          >
            <option value="">All states</option>
            {stateOptions.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label
            htmlFor="cap-exempt-sort"
            className="text-xs font-semibold uppercase tracking-wide text-slate-500"
          >
            Sort by
          </label>
          <select
            id="cap-exempt-sort"
            value={sort}
            onChange={(e) => setSort(e.target.value as SortKey)}
            className={selectCls}
          >
            <option value="cases">Most H-1B filings</option>
            <option value="salary">Highest median salary</option>
            <option value="rate">Highest certification rate</option>
            <option value="titleSalary" disabled={!title}>
              Highest salary for this title
            </option>
          </select>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap items-center justify-between gap-2">
        <p className="text-sm text-slate-600">
          Showing{" "}
          <strong className="text-slate-900">
            {Math.min(shown, results.length)}
          </strong>{" "}
          of <strong className="text-slate-900">{results.length}</strong>{" "}
          cap-exempt employers
          {title && (
            <>
              {" "}
              that filed for <strong className="text-slate-900">{title}</strong>
            </>
          )}{" "}
          (FY2024–FY2026 filings)
        </p>
        {(query || title || state) && (
          <button
            type="button"
            onClick={reset}
            className="text-sm font-medium text-blue-700 underline underline-offset-2 hover:text-blue-900"
          >
            Clear all filters
          </button>
        )}
      </div>

      {results.length === 0 ? (
        <div className="mt-6 rounded-lg border border-slate-200 bg-slate-50 p-6 text-center text-sm text-slate-600">
          No cap-exempt employers match that combination yet. Try a broader job
          title or clear the state filter — the list only includes employers
          whose recent DOL filings match your filters.
        </div>
      ) : (
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {results.slice(0, shown).map((e) => {
            const ts = titleStat(e);
            const orderedTitles = ts
              ? [ts, ...e.top_titles.filter((t) => t.title !== ts.title)]
              : e.top_titles;
            return (
              <article
                key={e.slug}
                className="flex flex-col rounded-lg border border-slate-200 p-5 hover:border-blue-300"
              >
                <h3 className="font-semibold text-slate-900">
                  <Link
                    href={`/sponsors/${e.slug}`}
                    className="text-blue-800 hover:underline hover:underline-offset-2"
                  >
                    {e.name}
                  </Link>
                </h3>
                <div className="mt-3 grid grid-cols-3 gap-2 text-center">
                  <div className="rounded-lg bg-blue-50 px-2 py-2.5">
                    <p className="text-base font-bold text-blue-900">
                      {formatNum(e.total_cases)}
                    </p>
                    <p className="text-[11px] font-medium uppercase tracking-wide text-blue-700">
                      Filings ’24–’26
                    </p>
                  </div>
                  <div className="rounded-lg bg-emerald-50 px-2 py-2.5">
                    <p className="text-base font-bold text-emerald-900">
                      {formatUSD(e.median_wage)}
                    </p>
                    <p className="text-[11px] font-medium uppercase tracking-wide text-emerald-700">
                      Median salary
                    </p>
                  </div>
                  <div className="rounded-lg bg-violet-50 px-2 py-2.5">
                    <p className="text-base font-bold text-violet-900">
                      {formatPct(e.cert_rate)}
                    </p>
                    <p className="text-[11px] font-medium uppercase tracking-wide text-violet-700">
                      LCA cert. rate
                    </p>
                  </div>
                </div>
                <div className="mt-3 flex-1">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Top job titles (avg salary)
                  </p>
                  <ul className="mt-1.5 space-y-1 text-sm">
                    {orderedTitles.slice(0, 3).map((t) => (
                      <li
                        key={t.title}
                        className={
                          ts && t.title === ts.title
                            ? "rounded bg-amber-50 px-2 py-1 font-medium text-slate-800"
                            : "px-2 py-1 text-slate-700"
                        }
                      >
                        {t.title}
                        <span className="text-slate-500">
                          {" "}
                          — {formatUSD(t.avg_wage)} · {formatNum(t.cases)}{" "}
                          filings
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                {e.top_states.length > 0 && (
                  <p className="mt-3 text-xs text-slate-500">
                    Top worksites:{" "}
                    {e.top_states
                      .slice(0, 4)
                      .map((s) => s.state)
                      .join(" · ")}
                  </p>
                )}
                <Link
                  href={`/sponsors/${e.slug}`}
                  className="mt-3 text-sm font-medium text-blue-700 hover:underline hover:underline-offset-2"
                >
                  Full sponsor profile →
                </Link>
              </article>
            );
          })}
        </div>
      )}

      {results.length > shown && (
        <div className="mt-6 text-center">
          <button
            type="button"
            onClick={() => setShown((s) => s + PAGE)}
            className="rounded-lg bg-blue-700 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-800"
          >
            Show more employers ({results.length - shown} remaining)
          </button>
        </div>
      )}

      <p className="mt-6 text-xs leading-relaxed text-slate-500">
        Employers are flagged as cap-exempt candidates from their sector and
        filing patterns in U.S. Department of Labor LCA disclosure data
        (FY2024–FY2026). Title figures reflect each employer&apos;s most common
        titles in those filings. Always confirm an employer&apos;s cap-exempt
        status with the employer or an immigration attorney before relying on
        it.
      </p>
    </div>
  );
}
