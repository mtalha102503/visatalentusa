import Link from "next/link";

export default function November2026VisaBulletinContent() {
  return (
    <>
      <p className="lead">
        The U.S. Department of State has released the{" "}
        <strong>November 2026 Visa Bulletin</strong>, the second bulletin of
        fiscal year 2027. The headline is a split screen: India&apos;s EB-2
        final action date is frozen at <strong>November 1, 2013</strong> for a
        second straight month, while the rest of the world&apos;s EB-2 date
        jumped three months to <strong>April 1, 2025</strong>. India&apos;s
        EB-3 date moved forward by three weeks, to{" "}
        <strong>January 22, 2014</strong>. And for filing purposes, USCIS
        confirmed that employment-based applicants must use the{" "}
        <strong>Dates for Filing</strong> chart in November — which is good
        news for anyone whose priority date falls between the two charts.
      </p>

      <div className="rounded-lg border border-amber-200 bg-amber-50 p-5">
        <p className="font-semibold text-amber-900">
          Key facts (November 2026 Visa Bulletin)
        </p>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-amber-900">
          <li>
            <strong>Issued by:</strong> U.S. Department of State, Bulletin
            Number 20, Volume XI — released October 22, 2026
          </li>
          <li>
            <strong>EB-2 India final action date:</strong> November 1, 2013 —
            no change, second month in a row
          </li>
          <li>
            <strong>EB-2 rest of world:</strong> April 1, 2025 — advanced
            three months from January 1, 2025
          </li>
          <li>
            <strong>EB-3 India final action date:</strong> January 22, 2014 —
            advanced 21 days from January 1, 2014
          </li>
          <li>
            <strong>Filing chart for November:</strong> USCIS says
            employment-based adjustment-of-status applicants must use the
            Dates for Filing chart — EB-2 India&apos;s filing date is January
            15, 2015
          </li>
          <li>
            <strong>Also under review:</strong> the premium processing
            timeframe rule (RIN 1615-AD25, at OIRA since October 13) and the
            H-1B modernization rule (RIN 1615-AD00, at OIRA since August 24)
          </li>
        </ul>
      </div>

      <div className="overflow-hidden rounded-lg border border-slate-200">
        <img
          src="/blog/november-2026-visa-bulletin-eb2-gap.svg"
          alt="EB-2 Final Action Dates in the November 2026 Visa Bulletin: India at November 1, 2013, China at October 1, 2021, and the rest of the world at April 1, 2025"
          className="h-auto w-full"
          width={1200}
          height={630}
        />
      </div>

      <h2>Step 1: What the Visa Bulletin Actually Is</h2>
      <p>
        The Visa Bulletin is the U.S. Department of State&apos;s monthly
        schedule for immigrant visas. It answers one question:{" "}
        <strong>
          whose priority date is old enough that a green card number is
          available this month?
        </strong>
      </p>
      <p>
        Every month, the State Department publishes two charts for each visa
        category. You need to know both, because they do different jobs.
      </p>
      <ul>
        <li>
          <strong>Final Action Dates (Chart A)</strong> — the date that
          controls when a green card can actually be <em>approved</em> and a
          visa number assigned. Your priority date must be{" "}
          <em>earlier than</em> this date.
        </li>
        <li>
          <strong>Dates for Filing (Chart B)</strong> — the date that
          controls when you may <em>submit</em> your adjustment-of-status
          application (Form I-485) early. USCIS decides each month whether
          applicants may use this chart instead of Chart A.
        </li>
      </ul>
      <p>
        Two letters appear in the charts. <strong>&quot;C&quot;</strong>{" "}
        means Current: numbers are available to everyone, regardless of
        priority date. <strong>&quot;U&quot;</strong> means Unavailable: no
        visa numbers are authorized that month at all.
      </p>
      <p>
        Your <strong>priority date</strong> is your place in line. For most
        employment-based cases, it is the date your PERM labor certification
        was filed with the Department of Labor. If no PERM was required (EB-1
        and some EB-2 NIW cases), it is the date your I-140 petition was
        filed with USCIS. You will find it on your PERM receipt or your I-140
        approval notice (Form I-797).
      </p>
      <p>
        One more rule shapes everything in this article. U.S. immigration law
        caps each country at <strong>7% of the annual employment-based
        total</strong> — 25,620 visas, per the bulletin itself. India has far
        more EB-2 and EB-3 applicants than 7% of the supply. That mismatch is
        the entire reason India&apos;s dates lag the rest of the world by
        years.
      </p>

      <h2>Step 2: November 2026 Final Action Dates — The Full Table</h2>
      <p>
        Here is the complete employment-based Final Action chart for November
        2026, exactly as published by the State Department, with the change
        from October in the last column.
      </p>
      <div className="overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th>Category</th>
              <th>India</th>
              <th>China (mainland-born)</th>
              <th>Rest of world</th>
              <th>Change from October</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>EB-1 (Priority Workers)</td>
              <td>Feb 1, 2023</td>
              <td>Aug 1, 2023</td>
              <td>Current</td>
              <td>China +1 month; India unchanged</td>
            </tr>
            <tr>
              <td>EB-2 (Advanced Degrees / Exceptional Ability)</td>
              <td>Nov 1, 2013</td>
              <td>Oct 1, 2021</td>
              <td>Apr 1, 2025</td>
              <td>Rest of world +3 months; India, China unchanged</td>
            </tr>
            <tr>
              <td>EB-3 (Skilled Workers / Professionals)</td>
              <td>Jan 22, 2014</td>
              <td>Jan 22, 2022</td>
              <td>Jun 15, 2024</td>
              <td>India +21 days; China +14 days; rest of world +1 month</td>
            </tr>
            <tr>
              <td>EB-3 Other Workers</td>
              <td>Jan 22, 2014</td>
              <td>Oct 1, 2019</td>
              <td>Jun 1, 2022</td>
              <td>India +21 days; rest of world +5 months; China unchanged</td>
            </tr>
            <tr>
              <td>EB-5 Unreserved</td>
              <td>Dec 1, 2023</td>
              <td>Dec 1, 2016</td>
              <td>Current</td>
              <td>Unchanged</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Mexico and the Philippines moved in step with the rest of the world
        for EB-2 (April 1, 2025). The Philippines&apos; EB-3 date stayed at
        August 15, 2023.
      </p>
      <h2>Step 3: EB-2 India — Why November 1, 2013 Is Not Moving</h2>
      <p>
        India&apos;s EB-2 final action date has now sat at November 1, 2013
        for two consecutive bulletins. That is not a typo, and it is not a
        delay in publishing. The date genuinely did not move.
      </p>
      <p>
        Context matters here. India&apos;s EB-2 category was marked
        Unavailable (U) from July through September 2026, at the end of
        fiscal year 2026. When the new fiscal year began in October, the date
        re-opened at November 1, 2013. November simply holds that same line.
      </p>
      <p>
        The mechanics are straightforward. Each month, the State Department
        hands out visa numbers in priority-date order, up to the per-country
        limit. When demand from India exceeds that limit — which it does by a
        wide margin — the cutoff can only advance as fast as old cases clear
        the queue. In a month where the queue barely cleared, the date stands
        still.
      </p>
      <p>
        What does this mean in plain terms? If your EB-2 India priority date
        is <strong>after</strong> November 1, 2013, your green card cannot be
        approved yet — no matter how long you have already waited. If your
        date is <strong>before</strong> it, a visa number is available to you
        now.
      </p>
      <p>
        How far behind is India, really? The November 2026 bulletin is about{" "}
        <strong>13 years</strong> ahead of India&apos;s EB-2 cutoff. For
        comparison, China&apos;s EB-2 cutoff trails the bulletin by about 5
        years, and the rest of the world&apos;s by about a year and seven
        months. That gap is the story of this bulletin.
      </p>

      <h2>Step 4: The Rest of the World Pulled Away</h2>
      <p>
        While India stood still, the rest of the world&apos;s EB-2 date
        advanced from January 1, 2025 to <strong>April 1, 2025</strong> — a
        full three-month jump in a single bulletin. Mexico and the Philippines
        moved with it.
      </p>
      <p>
        This is the normal pattern when a category is not oversubscribed for
        a country: dates move steadily, sometimes quickly, because there is
        no backlog pressing against the cap. The rest of the world&apos;s EB-2
        date was only set as a cutoff in October 2026 (it had been Current
        until then). Two months later, it has already advanced to April 2025.
      </p>
      <p>
        China&apos;s EB-2 date, by contrast, stayed at{" "}
        <strong>October 1, 2021</strong> — unchanged from October. China is
        the only other country with an EB-2 backlog on anything like
        India&apos;s scale, and its date is also standing still this month.
      </p>

      <h2>Step 5: EB-3 Moved — A Little, Everywhere</h2>
      <p>
        EB-3 is where November brings actual movement for India. The
        skilled-worker/professional cutoff advanced{" "}
        <strong>21 days</strong>, from January 1, 2014 to{" "}
        <strong>January 22, 2014</strong>.
      </p>
      <p>
        The rest of the EB-3 picture:
      </p>
      <ul>
        <li>
          <strong>Rest of world EB-3:</strong> advanced one month, to June
          15, 2024.
        </li>
        <li>
          <strong>China EB-3:</strong> advanced 14 days, to January 22, 2022.
        </li>
        <li>
          <strong>EB-3 Other Workers, rest of world:</strong> advanced five
          months, to June 1, 2022 — the biggest jump in the bulletin.
        </li>
        <li>
          <strong>EB-3 Other Workers, India:</strong> advanced 21 days, to
          January 22, 2014 — the same date as India&apos;s regular EB-3.
        </li>
        <li>
          <strong>Philippines EB-3:</strong> unchanged at August 15, 2023.
        </li>
      </ul>
      <p>
        Twenty-one days is modest. But for applicants whose priority dates
        fall between January 1 and January 22, 2014, it is the difference
        between waiting and moving forward this month.
      </p>

      <h2>Step 6: Which Chart Do You Use to File in November?</h2>
      <p>
        This is the part most people get wrong, so read it carefully. There
        are two different questions, and November gives them two different
        answers.
      </p>
      <p>
        <strong>Question 1: Can I file my I-485 application?</strong> For
        November 2026, USCIS has directed employment-based applicants to use
        the <strong>Dates for Filing</strong> chart. That chart is more
        generous than the Final Action chart.
      </p>
      <div className="overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th>Category (Dates for Filing)</th>
              <th>India</th>
              <th>China</th>
              <th>Rest of world</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>EB-1</td>
              <td>Jul 1, 2024</td>
              <td>Jul 1, 2024</td>
              <td>Current</td>
            </tr>
            <tr>
              <td>EB-2</td>
              <td>Jan 15, 2015</td>
              <td>Jan 1, 2023</td>
              <td>Mar 15, 2026</td>
            </tr>
            <tr>
              <td>EB-3</td>
              <td>Jan 15, 2015</td>
              <td>Apr 1, 2024</td>
              <td>Aug 1, 2024</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        <strong>Question 2: Can my green card be approved?</strong> That still
        depends on the <strong>Final Action</strong> chart — the first table
        in this article.
      </p>
      <p>
        Here is the worked example that makes the distinction concrete. Take
        an EB-2 India applicant with a priority date of{" "}
        <strong>December 2014</strong>:
      </p>
      <ul>
        <li>
          <strong>Filing:</strong> December 2014 is earlier than the Dates
          for Filing cutoff (January 15, 2015), so this applicant{" "}
          <em>can file</em> their I-485 in November — and filing can unlock
          an Employment Authorization Document (EAD) and advance parole
          while they wait.
        </li>
        <li>
          <strong>Approval:</strong> December 2014 is later than the Final
          Action cutoff (November 1, 2013), so the green card itself{" "}
          <em>cannot be approved yet</em>. Approval waits until the Final
          Action date passes December 2014.
        </li>
      </ul>
      <p>
        Filing early and being approved are two separate milestones. November
        lets a large group of applicants reach the first one, even though the
        second one is still years away for India EB-2.
      </p>
      <h2>Step 7: Find Your Priority Date and Check It in 4 Moves</h2>
      <p>
        If you are unsure where you stand, work through these four moves in
        order. Each one takes a minute.
      </p>
      <ol>
        <li>
          <strong>Find your priority date.</strong> For EB-2 and EB-3, it is
          the date your PERM was filed with the Department of Labor — check
          your PERM receipt or your I-140 approval notice (Form I-797). For
          EB-1, it is your I-140 filing date.
        </li>
        <li>
          <strong>Confirm your chargeability.</strong> The bulletin sorts
          you by country of <em>birth</em>, not citizenship. That is the
          column you read — India, China, or rest of world.
        </li>
        <li>
          <strong>Compare against both charts.</strong> First the Dates for
          Filing chart (can you file?), then the Final Action chart (can you
          be approved?). There are only three outcomes: both current, filing
          only, or neither yet.
        </li>
        <li>
          <strong>Use the tracker.</strong> Our{" "}
          <Link href="/tools/priority-date-tracker" className="underline text-blue-600">
            Priority Date Tracker
          </Link>{" "}
          now carries the November 2026 data. Enter your category, country,
          and priority date for an instant answer — and it shows how your
          date has moved across recent bulletins.
        </li>
      </ol>

      <h2>Premium Processing Rule: What Is Actually Under Review</h2>
      <p>
        The second story inside this bulletin cycle is not a date at all. It
        is a rule. On October 13, 2026, the Department of Homeland Security
        sent a proposed rule titled{" "}
        <strong>&quot;Amending the Premium Processing Timeframe&quot;</strong>{" "}
        (RIN 1615-AD25) to the White House Office of Information and
        Regulatory Affairs (OIRA) for review.
      </p>
      <p>
        Here is what is confirmed about it — and what is not:
      </p>
      <ul>
        <li>
          <strong>Status:</strong> pending OIRA review since October 13,
          2026. The listing carries no legal deadline.
        </li>
        <li>
          <strong>Significance:</strong> it is <em>not</em> designated
          economically significant.
        </li>
        <li>
          <strong>Text:</strong> not public. Nobody outside the review
          process has seen the draft.
        </li>
        <li>
          <strong>Direction:</strong> unknown. It is not confirmed whether
          the deadlines would get longer, shorter, or simply be counted
          differently.
        </li>
      </ul>
      <p>
        For context, premium processing is USCIS&apos;s paid fast track:
        employers and applicants pay an extra fee — $2,965 for most I-129 and
        I-140 filings since March 2026 — in exchange for guaranteed action
        within <strong>15, 30, or 45 business days</strong>, depending on the
        form. H-1B employers use it heavily, because what they are buying is
        certainty: a decision, a request for evidence, or a refund within a
        fixed window.
      </p>
      <p>
        The important part: <strong>nothing changes today</strong>. A rule
        entering OIRA review does not change any deadline. After review, the
        agency would publish a proposed rule in the Federal Register, take
        public comments, and only then finalize anything — a process measured
        in months, not days. Until a final rule takes effect, the current
        15/30/45-day clocks stand.
      </p>

      <h2>H-1B Modernization Rule Still Waiting at OIRA</h2>
      <p>
        A second, larger rule is also sitting at OIRA:{" "}
        <strong>
          &quot;Reforming the H-1B Nonimmigrant Visa Classification
          Program&quot;
        </strong>{" "}
        (RIN 1615-AD00), pending since August 24, 2026 and designated
        economically significant.
      </p>
      <p>
        Its text is likewise not public, so its contents cannot be reported
        yet — only its status. It is a proposed rule, not a final one, and it
        changes nothing on its own. When either rule&apos;s text is published,
        we will cover what it actually says rather than what it might say.
      </p>

      <h2>What to Watch Next</h2>
      <ul>
        <li>
          <strong>December 2026 Visa Bulletin</strong> — expected in
          mid-November. The question to watch: does India EB-2 move at all,
          or does it hold at November 1, 2013 for a third month?
        </li>
        <li>
          <strong>OIRA decisions on both rules</strong> — if either rule
          clears review, its proposed text becomes public and the comment
          period opens.
        </li>
        <li>
          <strong>USCIS&apos;s monthly chart direction</strong> — each month,
          USCIS announces whether adjustment-of-status applicants use the
          Final Action chart or the Dates for Filing chart. November uses
          Dates for Filing; December could differ.
        </li>
      </ul>

      <h2>November 2026 Visa Bulletin: Frequently Asked Questions</h2>
      <p>
        Short answers to the questions readers ask most about this bulletin.
        Longer explanations are in the sections above.
      </p>

      <h2>Methodology &amp; Sources</h2>
      <p>
        Every date in this article was taken from the U.S. Department of
        State&apos;s Visa Bulletin for November 2026 (Bulletin Number 20,
        Volume XI) and cross-checked against the bulletin&apos;s own tables.
        October-to-November movements were computed from the October 2026
        bulletin&apos;s published cutoffs. The OIRA statuses for RIN
        1615-AD25 and RIN 1615-AD00 are from the federal regulatory
        listing on reginfo.gov, as reported in the October 2026 coverage.
        USCIS&apos;s November chart direction (Dates for Filing for
        employment-based adjustment of status) is per USCIS&apos;s own
        announcement, as confirmed by multiple immigration law firms.
      </p>
      <p>
        This article reports what the bulletin says. It does not predict
        future movement — no official source publishes a schedule for when
        India EB-2 will advance, and any site claiming a date is guessing.
      </p>

      <h2>Sources</h2>
      <ul>
        <li>
          <a href="https://travel.state.gov/content/travel/en/legal/visa-law0/visa-bulletin/2027/visa-bulletin-for-november-2026.html" target="_blank" rel="noopener noreferrer" className="underline text-blue-600">
            U.S. Department of State — Visa Bulletin for November 2026
          </a>{" "}
          — Final Action Dates and Dates for Filing, employment-based
          categories (official source, all dates in this article)
        </li>
        <li>
          <a href="https://www.uscis.gov/visabulletininfo" target="_blank" rel="noopener noreferrer" className="underline text-blue-600">
            USCIS — Adjustment of Status Filing Charts
          </a>{" "}
          — which chart USCIS directs applicants to use each month
          (uscis.gov)
        </li>
        <li>
          <a href="https://www.reginfo.gov/public/do/eAgendaMain?operation=OPERATION_GET_AGENCY_RULE_LIST&currentPub=true&agencyCode&showStage=active&agencyCd=1600" target="_blank" rel="noopener noreferrer" className="underline text-blue-600">
            Reginfo.gov — DHS/USCIS Agency Rule List
          </a>{" "}
          — official regulatory listing, including RIN 1615-AD00
          (Reforming the H-1B Nonimmigrant Visa Classification Program)
        </li>
        <li>
          OIRA regulatory listing for RIN 1615-AD25 — &quot;Amending the
          Premium Processing Timeframe&quot; (reginfo.gov): received October
          13, 2026, pending review, not economically significant, no legal
          deadline
        </li>
        <li>
          <Link href="/tools/priority-date-tracker" className="underline text-blue-600">
            VisaTalentUSA — Priority Date Tracker
          </Link>{" "}
          — November 2026 bulletin data, updated with this article
        </li>
      </ul>

      <p className="text-sm text-slate-500">
        <em>
          Published: October 24, 2026. We will update this guide when the
          December 2026 Visa Bulletin is released. Not legal advice —
          consult a qualified immigration attorney for your specific
          situation.
        </em>
      </p>
    </>
  );
}
