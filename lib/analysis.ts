import type { Sponsor, YearData } from "./data";
import { formatNum, formatUSD, formatPct } from "./data";

/** National H-1B median offered salary, FY2026 (computed from DOL LCA data). */
export const NATIONAL_MEDIAN = 126403;

/** Lottery entries per wage level under the 2026 wage-weighted selection rule. */
const LEVEL_ENTRIES: Record<string, number> = { I: 1, II: 2, III: 3, IV: 4 };

/** Average lottery entries per filing for an employer, from its wage-level mix. */
export function avgLotteryEntries(mix: Record<string, number>): number | null {
  let total = 0;
  let weighted = 0;
  for (const [lvl, n] of Object.entries(mix)) {
    const e = LEVEL_ENTRIES[lvl];
    if (!e || !n) continue;
    total += n;
    weighted += e * n;
  }
  return total > 0 ? weighted / total : null;
}

/** Share of filings at Level III and above. */
export function seniorShare(mix: Record<string, number>): number | null {
  let total = 0;
  let senior = 0;
  for (const [lvl, n] of Object.entries(mix)) {
    if (!n) continue;
    total += n;
    if (lvl === "III" || lvl === "IV") senior += n;
  }
  return total > 0 ? senior / total : null;
}

function trendWord(yoy: number | null): string {
  if (yoy == null) return "";
  if (yoy > 0.005) return `up ${(yoy * 100).toFixed(1)}% from last year`;
  if (yoy < -0.005) return `down ${(Math.abs(yoy) * 100).toFixed(1)}% from last year`;
  return "roughly flat versus last year";
}

/**
 * Compose the original analytical intro for an employer page.
 * Every paragraph is derived from that employer's own data — this is what
 * keeps the page from being a "thin" scraped table.
 */
export function composeIntro(
  s: Sponsor,
  y: YearData,
  rank: number,
  totalSponsors: number
): string[] {
  const name = s.display_name;
  const paras: string[] = [];

  const tw = trendWord(y.yoy_change_pct);
  paras.push(
    `${name} filed ${formatNum(y.total_cases)} H-1B labor condition applications in fiscal year 2026, ` +
      `ranking #${rank} out of ${formatNum(totalSponsors)} sponsoring employers in our database` +
      (tw ? ` — ${tw}` : "") +
      `.`
  );

  const salaryBit =
    y.median_wage_annual != null
      ? `with a median offered salary of ${formatUSD(y.median_wage_annual)}` +
        (y.median_wage_annual >= NATIONAL_MEDIAN
          ? `, ${formatPct(y.median_wage_annual / NATIONAL_MEDIAN - 1, 0)} above the national H-1B median of ${formatUSD(NATIONAL_MEDIAN)}`
          : `, below the national H-1B median of ${formatUSD(NATIONAL_MEDIAN)}`)
      : `with salary data reported on each filing`;
  paras.push(
    `Of those filings, ${formatPct(y.approval_rate)} were certified by the Department of Labor, ` +
      salaryBit +
      `.`
  );

  const avgEntries = avgLotteryEntries(y.wage_level_mix);
  const senior = seniorShare(y.wage_level_mix);
  if (avgEntries != null && senior != null) {
    paras.push(
      `${formatPct(senior, 0)} of ${name}'s filings were at prevailing-wage Level III or above. ` +
        `Under the 2026 wage-weighted lottery, that translates to an average of ${avgEntries.toFixed(1)} lottery entries per candidate — ` +
        (avgEntries >= 2
          ? `meaning its candidates get meaningfully better odds than the typical Level I–II filing.`
          : `roughly in line with the broader market.`)
    );
  }

  const titles = y.top_titles.slice(0, 3);
  const states = y.top_states.slice(0, 3);
  if (titles.length > 0) {
    const titleBit = titles
      .map((t) => `${t.title} (${formatNum(t.cases)} cases)`)
      .join(", ");
    const stateBit =
      states.length > 0
        ? ` Its heaviest H-1B hiring was in ${states.map((x) => `${x.state} (${formatNum(x.cases)})`).join(", ")}.`
        : "";
    paras.push(
      `${name}'s most-sponsored roles in FY2026 were ${titleBit}.${stateBit}`
    );
  }

  if (y.is_cap_exempt_candidate) {
    paras.push(
      `${name} appears to be a cap-exempt type employer (such as a university, nonprofit research organization, or hospital). ` +
        `Cap-exempt employers can sponsor H-1B workers at any time of year without going through the annual lottery — always confirm directly with the employer's immigration team.`
    );
  }

  return paras;
}

export interface Faq {
  q: string;
  a: string;
}

/** Data-driven FAQs — unique per employer. */
export function composeFaqs(s: Sponsor, y: YearData, rank: number): Faq[] {
  const name = s.display_name;
  const faqs: Faq[] = [
    {
      q: `Does ${name} sponsor H-1B visas?`,
      a: `Yes. ${name} filed ${formatNum(y.total_cases)} H-1B labor condition applications in FY2026, ranking #${rank} nationally. A labor condition application (LCA) is the required first step before an H-1B petition, so this filing volume is a strong signal of active sponsorship.`,
    },
    {
      q: `What is ${name}'s H-1B approval rate?`,
      a: `${formatPct(y.approval_rate)} of ${name}'s FY2026 H-1B filings were certified by the Department of Labor${y.denied_cases ? `, with ${formatNum(y.denied_cases)} denied` : ""}. Note that LCA certification is distinct from USCIS petition approval, but a high certification rate indicates clean, compliant filings.`,
    },
    {
      q: `How much does ${name} pay H-1B workers?`,
      a:
        y.median_wage_annual != null
          ? `${name}'s median offered salary for H-1B roles in FY2026 was ${formatUSD(y.median_wage_annual)}${y.avg_wage_annual != null ? ` (average ${formatUSD(y.avg_wage_annual)})` : ""}. Individual offers vary by role, level, and worksite — the tables above break it down by job title.`
          : `Salary figures are reported on each individual filing — see the job-title breakdown above for ${name}'s pay by role.`,
    },
  ];

  const top = y.top_titles[0];
  if (top) {
    faqs.push({
      q: `Which jobs does ${name} sponsor most on H-1B?`,
      a: `${top.title} leads with ${formatNum(top.cases)} filings in FY2026${top.avg_wage ? ` at an average offered salary of ${formatUSD(top.avg_wage)}` : ""}. Other frequently sponsored roles are listed in the table above.`,
    });
  }

  const st = y.top_states[0];
  if (st) {
    faqs.push({
      q: `Where does ${name} hire H-1B workers?`,
      a: `${st.state} is ${name}'s top H-1B worksite state with ${formatNum(st.cases)} filings in FY2026, followed by ${y.top_states
        .slice(1, 3)
        .map((x) => `${x.state} (${formatNum(x.cases)})`)
        .join(" and ")}. Worksite reflects where the job is performed, which may differ from headquarters.`,
    });
  }

  const avgEntries = avgLotteryEntries(y.wage_level_mix);
  if (avgEntries != null) {
    faqs.push({
      q: `What are the H-1B lottery odds at ${name}?`,
      a: `No employer can guarantee lottery selection, but wage levels matter: under the 2026 wage-weighted system, Level I filings get 1 entry while Level IV get 4. Based on ${name}'s FY2026 wage mix, its candidates averaged ${avgEntries.toFixed(1)} entries per filing. Higher-wage offers at the same employer carry better odds.`,
    });
  }

  return faqs;
}
