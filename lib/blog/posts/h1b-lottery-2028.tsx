export default function H1BLottery2028Content() {
  return (
    <>
      <p className="lead">
        The H-1B lottery is no longer a lottery in the old sense. Since the
        February 2026 final rule, USCIS selects registrations using{" "}
        <strong>wage-level weighting</strong> — higher-paid filings get more
        entries, and lower-paid filings get fewer. If you are planning for the
        FY2028 cap season (registration expected March 2027), this guide
        explains exactly how the system works, what your real odds are, and
        what you and your employer can do to improve them.
      </p>

      <div className="rounded-lg border border-blue-200 bg-blue-50 p-5">
        <p className="font-semibold text-blue-900">Key takeaways</p>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-blue-900">
          <li>Wage Level IV = 4 entries, Level III = 3, Level II = 2, Level I = 1</li>
          <li>DHS projects selection rates of roughly 15% (Level I) to 61% (Level IV)</li>
          <li>Registration fee is $215 per beneficiary; the $100K fee remains blocked by courts</li>
          <li>Multiple employers registering you? The <em>lowest</em> wage level applies</li>
          <li>Last updated: October 10, 2026</li>
        </ul>
      </div>

      <h2>How the wage-weighted H-1B lottery works</h2>
      <p>
        Before 2026, every H-1B cap registration had an equal chance — a pure
        random draw. The Department of Homeland Security changed that with a
        final rule effective February 27, 2026, first applied to the FY2027 cap
        season. The new system assigns <strong>weighted entries</strong> based
        on the wage level of the offered position:
      </p>
      <table>
        <thead>
          <tr>
            <th>Wage level</th>
            <th>Lottery entries</th>
            <th>DHS-projected selection rate</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Level I (entry)</td>
            <td>1</td>
            <td>~15%</td>
          </tr>
          <tr>
            <td>Level II (qualified)</td>
            <td>2</td>
            <td>~31%</td>
          </tr>
          <tr>
            <td>Level III (experienced)</td>
            <td>3</td>
            <td>~46%</td>
          </tr>
          <tr>
            <td>Level IV (fully competent)</td>
            <td>4</td>
            <td>~61%</td>
          </tr>
        </tbody>
      </table>
      <p>
        These projections come from DHS modeling, not from published USCIS
        results. The old random baseline selected about 29.6% of
        registrations — so Level I filings now do roughly <em>half</em> as well
        as before, while Level IV filings do roughly <em>twice</em> as well.
      </p>

      <h3>How your wage level is determined</h3>
      <p>
        Your wage level comes from the Department of Labor&apos;s Occupational
        Employment and Wage Statistics (OEWS) data for your occupation (SOC
        code) and worksite area. The offered wage is compared against the four
        prevailing-wage levels for that occupation and location — whichever
        level the wage meets or exceeds determines your entries. A $95,000
        offer might be Level II in one metro and Level I in another, because
        prevailing wages vary sharply by location.
      </p>

      <h3>The anti-gaming rules</h3>
      <p>
        DHS built in rules to prevent manipulation. If multiple employers
        register the same beneficiary, the <strong>lowest</strong> wage level
        among those registrations applies to all of them. The same lowest-level
        logic applies when a position spans multiple worksite areas. And if an
        employer cuts the wage after selection, the petition risks denial or
        revocation. The message is clear: the wage you register with should be
        the wage you actually intend to pay.
      </p>

      <h2>H-1B lottery 2028: key dates and timeline</h2>
      <p>
        USCIS has not yet announced FY2028 cap-season dates. Based on the
        FY2027 cycle, expect a similar cadence — but treat every date below as
        projected until USCIS confirms it:
      </p>
      <table>
        <thead>
          <tr>
            <th>Milestone</th>
            <th>FY2027 (actual)</th>
            <th>FY2028 (projected)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Registration opens</td>
            <td>Early March 2026</td>
            <td>Early March 2027 (TBA)</td>
          </tr>
          <tr>
            <td>Registration closes</td>
            <td>Mid/late March 2026</td>
            <td>Mid/late March 2027 (TBA)</td>
          </tr>
          <tr>
            <td>Selection notices</td>
            <td>~March 31, 2026</td>
            <td>Late March 2027 (TBA)</td>
          </tr>
          <tr>
            <td>Petition filing window</td>
            <td>April 1 – June 30, 2026</td>
            <td>April – June 2027 (TBA)</td>
          </tr>
          <tr>
            <td>Employment start date</td>
            <td>October 1, 2026</td>
            <td>October 1, 2027</td>
          </tr>
        </tbody>
      </table>

      <h3>Fees you will pay</h3>
      <ul>
        <li>
          <strong>Registration:</strong> $215 per beneficiary (paid by the
          employer at registration)
        </li>
        <li>
          <strong>Form I-129 petition:</strong> base filing fee plus ACWIA
          training fee ($750 or $1,500 depending on employer size), fraud
          prevention fee ($500), and optional premium processing ($2,965)
        </li>
        <li>
          <strong>The $100,000 fee:</strong> a controversial proclamation-era
          fee was blocked by a federal court on September 30, 2026 and is{" "}
          <strong>not currently in effect</strong>. DHS has proposed a separate
          fee through rulemaking. Check our fee tracker for the latest status
          before you plan around it.
        </li>
      </ul>

      <h2>What are my chances? Selection odds by wage level</h2>
      <p>
        Every odds calculator on the internet — including the well-known ones —
        uses <em>assumed</em> wage distributions. Nobody publishes the actual
        mix of Level I through IV filings, because computing it requires
        analyzing millions of Labor Condition Application records. That is
        exactly what our dataset does.
      </p>
      <p>
        DHS&apos;s official projections (Level I ~15%, II ~31%, III ~46%, IV
        ~61%) assume a particular distribution of registrations across wage
        levels. The real distribution — which we compute from FY2024–2026 LCA
        filings — determines how those projections play out in practice. Two
        things matter for your personal odds: <strong>which level you
        file at</strong>, and <strong>how crowded each level is</strong>.
      </p>

      <h3>Master&apos;s cap vs. regular cap</h3>
      <p>
        The 20,000 advanced-degree (master&apos;s cap) registrations are drawn
        first, then unselected master&apos;s-cap registrations roll into the
        65,000 regular cap — and wage weighting applies within each draw. A
        master&apos;s degree still helps, but it no longer helps as much as it
        did under pure random selection if your wage level is low. A Level I
        master&apos;s registration gets 1 entry in each draw; a Level III
        bachelor&apos;s registration gets 3.
      </p>

      <h2>Strategy: how to maximize your selection odds</h2>

      <h3>For F-1 / OPT students</h3>
      <p>
        This is the hard truth nobody else states plainly: most entry-level
        offers for new graduates land at <strong>Level I</strong>, which now
        carries roughly 15% selection odds — about half the old random rate.
        If your employer can raise the offer to clear Level II, your entries
        double. That conversation is worth having early, before registration.
        Also consider: cap-exempt employers (universities, nonprofit research
        organizations) skip the lottery entirely.
      </p>

      <h3>For employers</h3>
      <p>
        Wage-level planning is now lottery planning. Setting the offered wage
        at the top of a level band versus the bottom of the next band can mean
        the difference between 1 and 2 entries — a doubling of odds for a
        marginal salary difference. Document the wage basis carefully; DHS
        scrutinizes post-selection wage changes.
      </p>

      <h3>Which employers file at Level III and IV wages?</h3>
      <p>
        This is a question no other guide answers, because it requires
        employer-level filing data. Our sponsor pages show each
        employer&apos;s wage distribution — check the top sponsors to see which
        companies concentrate their filings at higher wage levels. Technology
        product companies and quantitative finance firms skew heavily toward
        Levels III and IV; high-volume IT services firms skew toward Levels I
        and II.
      </p>

      <h2>What happens if you are not selected</h2>
      <p>
        Not being selected is not the end of the road. Options include: trying
        again next year (many beneficiaries are selected on a second attempt),
        cap-exempt employment (no lottery, no cap, year-round filing),
        Day 1 CPT programs (high risk — USCIS scrutinizes these heavily),
        O-1 visas for extraordinary ability, L-1 intracompany transfers, or
        remote work from abroad while re-entering the lottery. Each has
        trade-offs; talk to an immigration attorney before committing to any
        of them.
      </p>

      <h2>Frequently asked questions</h2>

      <h3>Is the H-1B still a lottery?</h3>
      <p>
        Yes, but a weighted one. Selection is still random within each wage
        level&apos;s entry pool — a Level I registration can absolutely be
        selected, it just has fewer entries than higher-wage registrations.
      </p>

      <h3>Can two employers register me to double my chances?</h3>
      <p>
        They can both register you, but the anti-gaming rule assigns the{" "}
        <em>lowest</em> wage level across all your registrations. Two
        legitimate job offers are fine; manufacturing extra registrations is
        not a strategy.
      </p>

      <h3>Does a higher salary guarantee selection?</h3>
      <p>
        No. Level IV&apos;s projected ~61% is the best odds in the system, but
        more than a third of Level IV registrations are still not selected in
        DHS&apos;s model. It dramatically improves your chances; it does not
        guarantee anything.
      </p>

      <h3>Will there be a second lottery round?</h3>
      <p>
        USCIS sometimes runs a second selection if the first round
        doesn&apos;t fill the cap (it did not need one for FY2026, with a
        ~35.3% selection rate). Watch for announcements in late spring.
      </p>

      <h3>How do I find my wage level?</h3>
      <p>
        Ask your employer or attorney for the SOC code and worksite area, then
        check the DOL&apos;s OEWS wage data for that occupation and area. Your
        offered wage determines which of the four levels you clear.
      </p>

      <h2>Methodology and sources</h2>
      <p>
        Filing statistics referenced in this guide are computed from the U.S.
        Department of Labor&apos;s public Labor Condition Application (LCA)
        disclosure data, FY2024–FY2026. Lottery mechanics are drawn from the
        DHS final rule (effective February 27, 2026) and USCIS cap-season
        guidance. DHS selection-rate projections are the agency&apos;s
        published estimates. This guide is for information only and is not
        legal advice — consult an immigration attorney for your situation.
      </p>
      <p className="text-sm text-slate-500">
        Last updated: October 10, 2026. We refresh this guide as USCIS
        announces FY2028 dates.
      </p>
    </>
  );
}
