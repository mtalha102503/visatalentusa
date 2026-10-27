import Link from "next/link";

export default function H1BSalaryDatabaseContent() {
  return (
    <>
      <p className="lead">
        Every H-1B salary database on the internet is built from the same
        public source: the U.S. Department of Labor&apos;s Labor Condition
        Application (LCA) disclosure data. The databases differ in how they
        present it — but the numbers that matter are the same ones. This
        guide teaches you to read those numbers properly: what an LCA wage
        actually is, what wage levels I–IV mean, how to search by company,
        job title and state, and how to compare two offers without fooling
        yourself. Every figure below comes from real DOL records through
        VisaTalentUSA&apos;s own database — no estimates, no dummy data.
      </p>

      <div className="rounded-lg border border-amber-200 bg-amber-50 p-5">
        <p className="font-semibold text-amber-900">
          Key facts — the H-1B salary database at a glance
        </p>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-amber-900">
          <li>
            <strong>Source:</strong> U.S. Department of Labor LCA disclosure
            data — 1,532,089 H-1B records across FY2024–FY2026, normalized
            through an open-source pipeline.
          </li>
          <li>
            <strong>What the wage means:</strong> the offered annual wage
            stated on the LCA — a benchmark for negotiation, not a promise
            of what you will personally earn.
          </li>
          <li>
            <strong>National median offered salary shown on
            VisaTalentUSA:</strong> $120,973.
          </li>
          <li>
            <strong>FY2026 figures are labelled &ldquo;through
            Q3&rdquo;:</strong> FY2026 data covers decisions through June 30,
            2026, so it is a partial year, not a full year.
          </li>
          <li>
            <strong>Certification rate is not an approval rate:</strong> the
            DOL LCA certification rate measures DOL paperwork certification
            — it is not the USCIS H-1B petition approval rate.
          </li>
          <li>
            <strong>Best use:</strong> shortlist sponsors, benchmark an
            offer, and check a wage level — then verify the specifics of
            your own offer with the employer.
          </li>
        </ul>
      </div>

      <h2>What an H-1B salary database is</h2>
      <p>
        An H-1B salary database is a searchable index of Labor Condition
        Applications. Before an employer can file an H-1B petition with
        USCIS, it must first file an LCA with the Department of Labor and
        get it certified. Each certified LCA becomes a public record, and
        salary databases collect those records so you can search them by
        employer, job title, or worksite state.
      </p>
      <p>
        One LCA record typically contains the employer&apos;s name, the job
        title, the occupation code, the worksite city and state, the wage
        offered for the position (usually as an annual figure), the
        prevailing wage for that occupation and area, the prevailing-wage
        level (I–IV), whether the job is full-time or part-time, the
        employment dates, and the case status — Certified, Certified -
        Withdrawn, Denied, or Withdrawn. The wage you see in a salary
        database is the offered wage from that record.
      </p>
      <p>
        Two things follow from this. First, a salary database shows offered
        wages, not payroll data — nobody&apos;s payslip is in it. Second,
        filing counts are counts of applications, not counts of people: a
        single LCA can cover more than one worker, so &ldquo;19,937
        filings&rdquo; does not mean 19,937 individual people.
      </p>

      <h2>Where the data comes from</h2>
      <p>
        The source is the Department of Labor&apos;s Employment and
        Training Administration, which publishes LCA disclosure files for
        every fiscal year. VisaTalentUSA normalizes those files through an
        open-source pipeline into a searchable database: 1,532,089 H-1B
        records across FY2024–FY2026. Employer names and job titles are
        grouped and normalized — for example, &ldquo;Sr. Software
        Engineer&rdquo; rolls into &ldquo;Software Engineer&rdquo; — so
        counts reflect real demand, not spelling variants.
      </p>
      <p>
        The sponsor side of the site covers the Top 1,000 employers — the
        largest H-1B filers, which is the most useful slice for job
        targeting, not an exhaustive list of every filer. New employer
        records are added daily, so published totals move slightly over
        time; the worked examples in this guide are FY2026 figures through
        Q3, checked on October 28, 2026. The title side covers hundreds of
        job titles, each with its own filing count, median offered salary,
        and top employers.
      </p>
      <p>
        If you only remember one thing from this section, make it this:
        every salary figure on this site traces back to a DOL record. When
        a figure looks surprising, the explanation is almost always in how
        the record was filed — the wage level, the worksite, or the
        occupation — not in an error in the database.
      </p>

      <h2>LCA wage vs actual salary: the difference that confuses everyone</h2>
      <p>
        The single most misunderstood number in any H-1B salary database is
        the wage itself. On the LCA, the employer attests that it will pay
        at least the prevailing wage for the occupation and area, and at
        least the actual wage it pays similarly employed workers — whichever
        is higher becomes the required wage. The wage written on the LCA is
        the offered wage for that position at the time of filing.
      </p>
      <p>
        Your actual salary can still differ from the LCA wage, for honest
        reasons:
      </p>
      <ul className="list-disc space-y-1 pl-5">
        <li>
          <strong>Bonuses and equity are not in it.</strong> The LCA wage
          is base pay for the position. Stock, bonuses, and signing bonuses
          do not appear in the disclosure, so total compensation is usually
          higher than the LCA figure at large tech employers.
        </li>
        <li>
          <strong>It is frozen at filing time.</strong> Raises, promotions,
          and role changes after the LCA is filed do not update the old
          record.
        </li>
        <li>
          <strong>It is the job&apos;s rate, not your personal
          deal.</strong> Two people in the same title at the same company
          can have different LCAs at different wage levels.
        </li>
        <li>
          <strong>Part-time work annualizes oddly.</strong> A part-time
          hourly rate converted to an annual figure is not directly
          comparable to a full-time salary.
        </li>
      </ul>
      <p>
        The practical rule: treat the database median as the middle of the
        market for that employer or title — a negotiation benchmark. If
        your offer sits well below the median for the same title and wage
        level, that is a real signal worth raising. If it sits above the
        median, the LCA figure was never a ceiling.
      </p>

      <h2>Prevailing wage levels I–IV: what each level means</h2>
      <p>
        Every LCA carries a prevailing-wage level, set by the job&apos;s
        requirements — education, experience, and supervision. The level
        is not a performance rating; it describes how demanding the
        position is, and it drives the prevailing wage the employer must
        meet.
      </p>
      <table>
        <thead>
          <tr>
            <th>Level</th>
            <th>Meaning</th>
            <th>Typical profile</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Level I</td>
            <td>Entry level</td>
            <td>Beginning-level work; limited experience and close supervision.</td>
          </tr>
          <tr>
            <td>Level II</td>
            <td>Qualified</td>
            <td>Moderate experience and judgment; works with limited supervision.</td>
          </tr>
          <tr>
            <td>Level III</td>
            <td>Experienced</td>
            <td>Considerable experience; exercises independent judgment.</td>
          </tr>
          <tr>
            <td>Level IV</td>
            <td>Fully competent</td>
            <td>Expert-level work; may supervise others or set direction.</td>
          </tr>
        </tbody>
      </table>
      <p>
        Levels matter twice over. First, a higher level means a higher
        prevailing wage, so comparing a Level I salary with a Level IV
        salary for the same title is meaningless — always compare within
        the same level when you can. Second, under the wage-weighted H-1B
        lottery selection rule, higher wage levels receive more entries in
        the selection, so your level affects both pay and lottery odds.
        You can estimate that effect with the{" "}
        <Link href="/tools/wage-level" className="underline text-blue-600">
          wage-level tool
        </Link>{" "}
        and the{" "}
        <Link href="/tools/lottery-odds" className="underline text-blue-600">
          lottery odds calculator
        </Link>
        .
      </p>
      <p>
        A real example makes the mix concrete. Amazon&apos;s FY2026
        (through Q3) filings show the following wage-level mix, among the
        15,250 cases that carry a wage level on file:
      </p>
      <table>
        <thead>
          <tr>
            <th>Wage level</th>
            <th>Amazon cases</th>
            <th>Share of levelled cases</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Level I</td>
            <td>3,649</td>
            <td>23.9%</td>
          </tr>
          <tr>
            <td>Level II</td>
            <td>7,055</td>
            <td>46.3%</td>
          </tr>
          <tr>
            <td>Level III</td>
            <td>2,570</td>
            <td>16.9%</td>
          </tr>
          <tr>
            <td>Level IV</td>
            <td>1,976</td>
            <td>13.0%</td>
          </tr>
        </tbody>
      </table>
      <p>
        Note the denominator: 4,687 of Amazon&apos;s 19,937 FY2026 (through
        Q3) cases carry no wage level in the record, so the shares above
        describe only the 15,250 cases with a level on file. That is normal
        in LCA data — a missing field is reported as missing, never filled
        in with a guess.
      </p>

      <h2>Step by step: search by company</h2>
      <p>
        Company search answers one question: does this employer actually
        sponsor, at what volume, and at what pay? Work it in four steps,
        using Amazon as the example:
      </p>
      <ol className="list-decimal space-y-2 pl-5">
        <li>
          <strong>Open the sponsor profile.</strong> From the{" "}
          <Link href="/sponsors" className="underline text-blue-600">
            Top 1,000 sponsor list
          </Link>
          , open{" "}
          <Link href="/sponsors/amazon" className="underline text-blue-600">
            Amazon&apos;s profile
          </Link>
          .
        </li>
        <li>
          <strong>Read the three headline numbers.</strong> For FY2026
          (through Q3), Amazon filed 19,937 LCAs, of which 19,933 were
          certified — an LCA certification rate of 99.98% — with a median
          offered salary of $158,000 and an average of $159,696. Volume
          tells you the program is real; the certification rate tells you
          the filings are clean; the median tells you the market level.
        </li>
        <li>
          <strong>Read the top titles.</strong> Amazon&apos;s largest
          FY2026 (through Q3) title groups are Software Dev Engineer
          (6,137 filings, $163,834 average), Software Development Engineer
          (2,459 filings, $168,352 average), and Manager (1,091 filings,
          $202,650 average). If your title is not in the top list, the
          company may still sponsor for it — check the title search
          instead.
        </li>
        <li>
          <strong>Read the worksite states.</strong> The profile breaks
          filings down by where the work is performed (see the state
          section below). A company can sponsor heavily in one state and
          barely at all in another.
        </li>
      </ol>
      <p>
        Repeat the same four steps for any second employer you are
        considering, and you have a like-for-like comparison — same year,
        same metric, same source.
      </p>

      <h2>Step by step: search by job title</h2>
      <p>
        Title search answers the reverse question: which employers hire
        people with your exact job title, and what do they pay? Use the{" "}
        <Link href="/tools/sponsor-match" className="underline text-blue-600">
          Sponsor Match Finder
        </Link>
        :
      </p>
      <ol className="list-decimal space-y-2 pl-5">
        <li>
          <strong>Type your title.</strong> Start typing — for example,
          &ldquo;Software Engineer&rdquo;. The search suggests only
          titles that actually appear in DOL records, so a typo gives you
          a &ldquo;try a broader term&rdquo; hint instead of a dead end.
        </li>
        <li>
          <strong>Read the snapshot.</strong> For Software Engineer in
          FY2026 (through Q3): 40,003 filings, a median offered salary of
          $151,000, and 39,360 certified cases — an LCA certification rate
          of 98.4%. The filing count is your demand signal; the median is
          your negotiation benchmark.
        </li>
        <li>
          <strong>Read the top employers.</strong> For Software Engineer,
          the largest FY2026 (through Q3) filers are Google (4,779),
          Meta (Facebook) (2,439), Walmart (892), LinkedIn (795), and
          PayPal (651). Those are the companies with proven, active
          programs for your exact title.
        </li>
        <li>
          <strong>Open the full title report.</strong> Every title has a
          dedicated report page with the full employer table and salary
          context. Bookmark it and use it to shortlist where to apply.
        </li>
      </ol>
      <p>
        Title search is also how you catch a common mistake: searching a
        fancy internal job title (&ldquo;Software Development Engineer
        II&rdquo;) instead of the normalized title the database uses.
        If your exact phrase finds nothing, try the broader base title —
        the grouping exists precisely so spelling variants do not hide
        real demand.
      </p>

      <h2>Step by step: search by state</h2>
      <p>
        State search has one honest complication: VisaTalentUSA has no
        standalone state-search page, because a state number on its own
        misleads — the same employer pays very different wages in
        different states, and a state total mixes every occupation
        together. The correct way to answer a state question is through
        sponsor profiles, which break each employer&apos;s filings down
        by worksite state.
      </p>
      <p>
        Amazon again, FY2026 (through Q3): 10,310 of its 19,937 filings
        (51.7%) list Washington as the worksite state, followed by
        California (2,995), Texas (2,123), New York (1,242), and Virginia
        (1,154). So &ldquo;what does Amazon pay in Texas?&rdquo; is a
        meaningful question — but &ldquo;what does Texas pay?&rdquo; is
        not, until you fix the employer and the title too.
      </p>
      <p>
        Two cautions for state numbers. First, worksite state is where the
        work is performed, not where headquarters sits — never read a
        state split as a headquarters list. Second, a state with few
        filings gives a noisy median: a 50-filing state median moves on a
        handful of cases, while a 10,000-filing state median is stable.
        Weight your confidence by the filing count, which is always shown
        next to the figure.
      </p>

      <h2>How to compare two offers using the data</h2>
      <p>
        The only rule that matters: compare the same metric, in the same
        year, from the same source. A title median is not comparable to an
        employer median, and a full-year figure is not comparable to a
        through-Q3 figure. With that rule, two tables do most of the work.
      </p>
      <p>
        First, employers — FY2026 (through Q3) median offered salary,
        all titles:
      </p>
      <table>
        <thead>
          <tr>
            <th>Employer</th>
            <th>FY2026 (through Q3) filings</th>
            <th>Median offered salary</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Google</td>
            <td>7,389</td>
            <td>$193,000</td>
          </tr>
          <tr>
            <td>Apple</td>
            <td>5,633</td>
            <td>$171,600</td>
          </tr>
          <tr>
            <td>Amazon</td>
            <td>19,937</td>
            <td>$158,000</td>
          </tr>
          <tr>
            <td>EY (Ernst &amp; Young)</td>
            <td>5,403</td>
            <td>$155,468</td>
          </tr>
          <tr>
            <td>Cognizant</td>
            <td>5,799</td>
            <td>$111,030</td>
          </tr>
        </tbody>
      </table>
      <p>
        Second, job titles — FY2026 (through Q3) median offered salary,
        all employers:
      </p>
      <table>
        <thead>
          <tr>
            <th>Job title</th>
            <th>FY2026 (through Q3) filings</th>
            <th>Median offered salary</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Manager</td>
            <td>9,167</td>
            <td>$168,842</td>
          </tr>
          <tr>
            <td>Software Engineer</td>
            <td>40,003</td>
            <td>$151,000</td>
          </tr>
          <tr>
            <td>Data Engineer</td>
            <td>6,793</td>
            <td>$124,000</td>
          </tr>
          <tr>
            <td>Software Developer</td>
            <td>15,125</td>
            <td>$112,923</td>
          </tr>
        </tbody>
      </table>
      <p>
        Use the tables like this. If you hold an offer from Cognizant at
        $115,000, the employer table tells you that sits just above
        Cognizant&apos;s own $111,030 median — a fair offer by that
        company&apos;s own market, even though it trails Google&apos;s
        $193,000. If you hold a Software Engineer offer at $140,000, the
        title table tells you it trails the $151,000 title median — a
        real, citable data point for negotiation. Neither table promises
        you a number; both tell you where your number stands.
      </p>

      <h2>Honest limits of the data</h2>
      <p>
        A salary database is only useful if you know where it stops. These
        limits apply to every figure in this guide:
      </p>
      <ul className="list-disc space-y-1 pl-5">
        <li>
          <strong>FY2026 is partial.</strong> All FY2026 figures here are
          through Q3 (data ends June 30, 2026). Never compare a through-Q3
          figure with a full-year figure, and only compare year-on-year
          for the same period.
        </li>
        <li>
          <strong>Certified - Withdrawn counts as certified.</strong>{" "}
          The LCA certification rate counts both &ldquo;Certified&rdquo;
          and &ldquo;Certified - Withdrawn&rdquo; as certified. Counting
          only &ldquo;Certified&rdquo; would understate real
          certification rates sharply.
        </li>
        <li>
          <strong>Medians are offered wages, not total
          compensation.</strong>{" "}
          Equity, bonuses, and benefits are not in LCA data. A lower LCA
          median at a company with heavy equity pay can still mean higher
          total pay.
        </li>
        <li>
          <strong>Top 1,000 is a slice, not the whole market.</strong>{" "}
          The sponsor ranking covers the largest filers. Smaller sponsors
          with a handful of filings exist in the full DOL files but are
          not the focus of the ranking.
        </li>
        <li>
          <strong>Figures move as records are added.</strong> New employer
          records are added daily, so a median checked today can shift
          slightly tomorrow. That is the data improving, not an error.
        </li>
        <li>
          <strong>The certification rate is a compliance signal, not a
          hiring promise.</strong>{" "}
          A high LCA certification rate means clean DOL filings. It does
          not mean the company will hire you, and it is not the USCIS
          petition approval rate.
        </li>
      </ul>

      <h2>Frequently asked questions</h2>

      <h3>Is the salary data in H-1B databases real?</h3>
      <p>
        Yes — when the database cites the Department of Labor. Every
        figure in this guide comes from DOL Labor Condition Application
        disclosure data: 1,532,089 H-1B records across FY2024–FY2026,
        normalized through an open-source pipeline. If a salary site
        cannot name its source, treat its numbers as marketing, not data.
      </p>

      <h3>What is the difference between LCA wage and actual salary?</h3>
      <p>
        The LCA wage is the offered wage the employer attests on the Labor
        Condition Application at filing time — it must be at least the
        prevailing wage and at least the actual wage paid to similarly
        employed workers. Actual salary can be higher because bonuses,
        equity, raises after filing, and role changes are not in the LCA
        record. Use the database median as a market benchmark, not as a
        prediction of your payslip.
      </p>

      <h3>What do wage levels I–IV mean?</h3>
      <p>
        They are prevailing-wage levels set by the job&apos;s
        requirements: Level I is entry-level work, Level II is qualified
        work, Level III is experienced work, and Level IV is fully
        competent, expert-level work. Higher levels carry higher prevailing
        wages, and under the wage-weighted lottery rule they also receive
        more selection entries. Always compare salaries within the same
        level when you can.
      </p>

      <h3>How do I find salaries for my job title?</h3>
      <p>
        Use the{" "}
        <Link href="/tools/sponsor-match" className="underline text-blue-600">
          Sponsor Match Finder
        </Link>
        : type your title and read the snapshot — total FY2026 (through
        Q3) filings, median offered salary, and LCA certification rate —
        plus the ranked list of top sponsoring employers for that exact
        title. For Software Engineer, that snapshot is 40,003 filings and
        a $151,000 median.
      </p>

      <h3>How do I find salaries at a specific company?</h3>
      <p>
        Open the company&apos;s sponsor profile from the{" "}
        <Link href="/sponsors" className="underline text-blue-600">
          Top 1,000 sponsor list
        </Link>
        . For example,{" "}
        <Link href="/sponsors/amazon" className="underline text-blue-600">
          Amazon&apos;s profile
        </Link>{" "}
        shows 19,937 FY2026 (through Q3) filings, a $158,000 median offered
        salary, a 99.98% LCA certification rate, and breakdowns by top
        titles and worksite states.
      </p>

      <h3>Can I compare two job offers with this data?</h3>
      <p>
        Yes, if you compare the same metric in the same year: employer
        medians against employer medians, or title medians against title
        medians, all FY2026 (through Q3). An offer above the matching
        median is strong; an offer well below it is a citable negotiation
        point. Never compare a title median with an employer median, and
        never compare a through-Q3 figure with a full-year figure.
      </p>

      <h3>Is the median salary a guaranteed salary?</h3>
      <p>
        No. The median is the middle offered wage across filings for that
        employer or title — half the filings are above it, half below.
        Your own offer depends on your wage level, worksite, experience,
        and negotiation. Treat the median as the market level, not as a
        promise.
      </p>

      <h3>What does the DOL LCA certification rate mean?</h3>
      <p>
        It is certified LCA cases divided by filed cases, where
        &ldquo;certified&rdquo; includes both &ldquo;Certified&rdquo; and
        &ldquo;Certified - Withdrawn&rdquo;. It measures DOL paperwork
        certification — a compliance-quality signal. It is not the USCIS
        H-1B petition approval rate, and a high rate does not guarantee
        any individual petition will be approved.
      </p>

      <h2>Sources</h2>
      <ul>
        <li>
          <a
            href="https://www.dol.gov/agencies/eta/foreign-labor/performance"
            className="underline text-blue-600"
          >
            U.S. Department of Labor, Employment and Training
            Administration — Foreign Labor Certification performance data
            and disclosure files
          </a>
        </li>
        <li>
          <a
            href="https://www.dol.gov/agencies/eta/foreign-labor/wages"
            className="underline text-blue-600"
          >
            U.S. Department of Labor — Prevailing wages and wage levels
            (OFLC wage guidance)
          </a>
        </li>
        <li>
          <a
            href="https://www.uscis.gov/working-in-the-united-states/h-1b-specialty-occupations"
            className="underline text-blue-600"
          >
            USCIS — H-1B Specialty Occupations (petition process overview)
          </a>
        </li>
      </ul>

      <p className="text-sm text-slate-500">
        Published October 28, 2026. All salary figures are FY2026 (through
        Q3) medians and counts from U.S. Department of Labor LCA disclosure
        data via VisaTalentUSA&apos;s database, checked October 28, 2026.
        Figures move slightly as new employer records are added daily.
      </p>
    </>
  );
}
