export interface BlogPostMeta {
  slug: string;
  title: string;
  excerpt: string;
  datePublished: string;
  dateModified: string;
  readingMinutes: number;
  tags: string[];
  faqs?: { question: string; answer: string }[];
}

export const blogPosts: BlogPostMeta[] = [
  {
    slug: "h1b-lottery-2028",
    title: "H-1B Lottery 2028: Odds, Dates & Wage-Weighted Guide",
    excerpt:
      "Complete H-1B lottery 2028 guide: wage-weighted selection odds by level (15% to 61%), expected registration dates, fees, and proven strategies to maximize your chances — backed by 1.5M+ real DOL filing records.",
    datePublished: "2026-10-10T00:00:00+00:00",
    dateModified: "2026-10-10T00:00:00+00:00",
    readingMinutes: 18,
    tags: ["H-1B Lottery", "Guides", "H-1B Odds"],
    faqs: [
      {
        question: "When is the H-1B lottery 2028 registration?",
        answer: "USCIS has not announced FY2028 dates yet. Based on the FY2027 pattern, expect registration in early March 2027, with selection notices by late March 2027. USCIS typically announces dates in January or February.",
      },
      {
        question: "What are my H-1B lottery 2028 chances at Level 2 wage?",
        answer: "DHS projects roughly 31% selection for Level II wage registrations — about double the Level I rate. Your actual odds depend on the overall wage mix of the registration pool.",
      },
      {
        question: "Is the H-1B still a lottery in 2028?",
        answer: "Yes, but a weighted lottery. Selection remains random within the entry pool — a Level I registration with 1 entry can absolutely be selected. Higher wage levels simply hold more entries (up to 4x), which shifts the probabilities without eliminating chance.",
      },
      {
        question: "Can two employers register me for the H-1B lottery 2028?",
        answer: "Yes — multiple legitimate employers may each register you. But the anti-gaming rule assigns the lowest wage level across all your registrations to every one of them, so a weak second registration can drag down a strong first one.",
      },
      {
        question: "Does a higher salary guarantee H-1B selection?",
        answer: "No. Even at Level IV, DHS projects ~61% selection — meaning nearly 4 in 10 Level IV registrations are still not selected. Higher wages dramatically improve odds; they guarantee nothing.",
      },
      {
        question: "How do I find my OEWS wage level?",
        answer: "Ask your employer or immigration attorney for your SOC (occupation) code and worksite area. Then check the Department of Labor's OEWS wage data for that occupation-area pair — your offered wage determines which of the four levels you clear.",
      },
      {
        question: "Will there be a second H-1B lottery round for FY2028?",
        answer: "Possibly, if the first selection doesn't fill the 85,000 cap. USCIS did not need a second round for FY2027 (~35.3% selected). Watch for announcements in late spring 2027.",
      },
      {
        question: "What is the H-1B lottery 2028 registration fee?",
        answer: "$215 per beneficiary, paid by the employer at registration. This is separate from petition filing fees ($460–$780 base, plus training and fraud fees) due only if selected.",
      },
    ],
  },
  {
    slug: "h1b-lottery",
    title: "H-1B Lottery Guide: Process, Results & Odds",
    excerpt:
      "Complete H-1B lottery guide: how the H-1B visa lottery works, registration process, when H-1B lottery results are announced, real selection odds, fees, and proven strategies — backed by 1.5M+ real DOL filing records.",
    datePublished: "2026-10-11T00:00:00+00:00",
    dateModified: "2026-10-11T00:00:00+00:00",
    readingMinutes: 15,
    tags: ["H-1B Lottery", "Guides", "H-1B Odds"],
    faqs: [
      {
        question: "What is the H-1B lottery?",
        answer: "The H-1B lottery is USCIS's random selection process for choosing which H-1B visa petitions to accept each fiscal year. Employers first submit electronic registrations ($215 each) in March; USCIS randomly selects up to the 85,000 annual cap (65,000 regular + 20,000 U.S. master's exemption). Only selected employers file full petitions.",
      },
      {
        question: "When are H-1B lottery results announced?",
        answer: "USCIS typically notifies selected registrants by March 31 through the online registration system. If the initial selection doesn't fill the cap, additional selection rounds may occur in summer.",
      },
      {
        question: "What are the odds of winning the H-1B lottery?",
        answer: "Overall selection rates were ~35% for FY2026 (~344,000 registrations for 85,000 spots). Your personal odds are better with a U.S. master's degree (two selection rounds) and vary by wage level.",
      },
      {
        question: "How much does the H-1B lottery cost?",
        answer: "The registration fee is $215 per beneficiary, paid by the employer. If selected, petition filing costs $460–$780 plus $750–$1,500 training fee and $500 fraud fee. Employers must pay all H-1B fees by law.",
      },
      {
        question: "Can I enter the H-1B lottery without an employer?",
        answer: "No. Only U.S. employers can submit H-1B registrations — there is no self-petitioning. However, cap-exempt employers (universities, research nonprofits) can sponsor H-1B workers year-round without the lottery.",
      },
      {
        question: "How can I improve my H-1B lottery chances?",
        answer: "Earn a U.S. master's degree (two draws instead of one), target cap-exempt employers, negotiate a higher wage level, get multiple legitimate employer registrations, and choose sponsors with strong petition approval records.",
      },
    ],
  },
  {
    slug: "h1b-visa-stamping",
    title: "H-1B Visa Stamping 2026: Slots, Dropbox & Interview Guide",
    excerpt:
      "Complete H-1B visa stamping guide for 2026: how to find appointment slots in India, Dropbox interview-waiver eligibility self-test, full document checklist, interview questions, 221(g) recovery playbook, timeline planner, and 4 scenario tracks — grounded in official State Department guidance.",
    datePublished: "2026-10-13T00:00:00+00:00",
    dateModified: "2026-10-13T00:00:00+00:00",
    readingMinutes: 20,
    tags: ["H-1B Visa", "Guides", "Visa Stamping"],
    faqs: [
      {
        question: "How long does H-1B visa stamping take in India?",
        answer: "From VAC biometrics to passport return, plan for 2–4 weeks in normal season and 4–6 weeks in December–January. A 221(g) can add 1–8+ weeks. Slot-booking wait before you start is separate — in peak season it can take weeks of daily checking to find an interview slot.",
      },
      {
        question: "How do I find H-1B visa stamping slots in India?",
        answer: "Check ustraveldocs.com/in daily, early morning India time, across all five posts (New Delhi, Mumbai, Chennai, Hyderabad, Kolkata). Book 6–8 weeks before December travel. If you qualify for Dropbox, VAC document-drop slots are far easier to secure than interview slots.",
      },
      {
        question: "Can I get H-1B stamping without an interview in 2026?",
        answer: "Possibly through the Dropbox interview waiver, but 2026 rules are narrower: you must renew the same classification (H-1B to H-1B), your prior H-1B visa must have expired within 48 months, you must have no prior refusals or violations, and you must apply in your home country.",
      },
      {
        question: "What does a 221(g) mean for H-1B stamping?",
        answer: "A 221(g) is a temporary refusal pending further review — not a denial. Submit exactly what the officer's slip requests, notify your employer and attorney immediately, and track your case on CEAC. Document-based 221(g)s often resolve in 1–3 weeks; security reviews can take 60+ days.",
      },
      {
        question: "Is it safe to travel to India for H-1B stamping now?",
        answer: "Stamping remains routine for straightforward cases, but 2026 brings tighter screening: expanded social-media vetting, narrowed interview waivers, and a 1-reschedule limit. It is risky if you have prior refusals, a recent employer change with thin documentation, or a non-refundable return flight days after your interview.",
      },
      {
        question: "How much does H-1B visa stamping cost?",
        answer: "The MRV application fee is $205 (non-refundable). A reciprocity issuance fee may apply depending on nationality. VAC/courier charges run about $20–30. Your employer pays H-1B petition costs by law — stamping fees are typically yours.",
      },
      {
        question: "Can I do H-1B stamping in Canada or Mexico?",
        answer: "Third-country applications are discouraged but not prohibited; Canada/Mexico posts accept limited TCN applicants. Only consider this for straightforward renewal cases — if you hit a 221(g) abroad, you will be stuck outside both the U.S. and India while it resolves.",
      },
      {
        question: "Do I need H-1B stamping if I never leave the U.S.?",
        answer: "No. The visa stamp is only for re-entry. If you remain in the U.S. in valid H-1B status, your I-797 approval is sufficient. You need stamping only when you travel abroad and need to come back.",
      },
    ],
  },
  {
    slug: "h1b-extension-process-2026-changes",
    title: "H-1B Extension Deference Ending: What Changes (Oct 2026)",
    excerpt:
      "BREAKING: DHS proposed ending deference to prior H-1B approvals on extensions (Federal Register, Oct 14, 2026). Step-by-step guide to what changes in the H-1B extension process, the H-4 EAD final rule, which employers face the most re-scrutiny — backed by real DOL data.",
    datePublished: "2026-10-14T00:00:00+00:00",
    dateModified: "2026-10-14T00:00:00+00:00",
    readingMinutes: 14,
    tags: ["H-1B Extension", "Policy News", "H-1B Guides"],
    faqs: [
      {
        question: "Has USCIS already ended deference on H-1B extensions?",
        answer: "No. As of October 14, 2026, DHS has only proposed removing the deference regulation (docket USCIS-2026-0529). The current policy remains in effect until a final rule is published.",
      },
      {
        question: "How does the H-1B extension process work right now?",
        answer: "Your employer files Form I-129 before your status expires (up to 6 months early). Under current deference policy, if nothing material changed, the officer gives weight to your prior approval — processing is typically faster with fewer RFEs than initial petitions.",
      },
      {
        question: "What is an RFE and why does it matter for H-1B extensions?",
        answer: "A Request for Evidence asks for more documentation before USCIS decides. DHS projects ~6,044 extra RFEs per year if deference ends, and RFE cases average 76 days vs 12 days without one.",
      },
      {
        question: "When is the comment deadline for the proposed deference rule?",
        answer: "November 13, 2026 — 30 days from the October 14 Federal Register publication (docket USCIS-2026-0529).",
      },
      {
        question: "What happened to H-4 EAD automatic renewals?",
        answer: "They have ended under a separate final rule effective immediately. H-4 spouses must hold a valid, unexpired EAD to work. DHS estimates 20,000–33,000 EADs could lapse in an 18-month window starting May 2027.",
      },
      {
        question: "Which employers will feel the H-1B extension change most?",
        answer: "Employers with the largest H-1B workforces — Amazon (~19,900 FY2026 LCA filings), Google, Cognizant, Apple, and EY lead by filing volume. IT services firms faced the heaviest scrutiny during the last no-deference period (2017–2021).",
      },
      {
        question: "Should I file my H-1B extension earlier than planned?",
        answer: "Filing up to 6 months before expiry is already allowed and prudent — it builds buffer against any slowdown. But don't file a rushed, weaker petition just to beat a rule that isn't final yet. Talk to your immigration attorney.",
      },
      {
        question: "Does the proposal affect my already-filed H-1B extension?",
        answer: "No. Even if finalized, the rule would apply prospectively from its effective date. Extensions filed under the current rule are governed by the current rule.",
      },
    ],
  },
  {
    slug: "perm-processing-time",
    title: "PERM Processing Time 2026: DOL Timeline Guide",
    excerpt:
      "How long does PERM take in 2026? DOL averages 336 days for analyst review (Dec 2025 priority dates), PWD at June 2026 filings. Complete stage-by-stage PERM processing time guide with real DOL data, audit timelines, and what to do while you wait.",
    datePublished: "2026-10-15T00:00:00+00:00",
    dateModified: "2026-10-15T00:00:00+00:00",
    readingMinutes: 16,
    tags: ["PERM", "Green Card", "Guides"],
    faqs: [
      {
        question: "How long is PERM approval taking now?",
        answer: "As of DOL's October 2026 data, analyst review averages 336 calendar days (about 11 months), and DOL is adjudicating cases with December 2025 priority dates. Adding PWD (4–8 months) and recruitment (2–3 months), plan for roughly 17–22 months end-to-end without an audit.",
      },
      {
        question: "What is the expected timeline for PERM approval in 2026?",
        answer: "For cases filed in 2026, expect 18–30 months from PWD request to certified ETA-9089 depending on audit selection. DOL's queues improved through mid-2026 but remain deep, with nearly 49,000 PERM prevailing wage requests pending from June–September 2026 filings.",
      },
      {
        question: "Is PERM approval getting faster?",
        answer: "It improved through mid-2026 from prior peaks, but the trend has plateaued — the 336-day analyst average and large PWD backlog suggest timelines are stabilizing rather than continuing to fall. Seasonal surges each October–April can temporarily lengthen waits.",
      },
      {
        question: "Is there premium processing for PERM?",
        answer: "No. Unlike USCIS petitions such as the H-1B, DOL offers no premium or expedited processing for PERM labor certifications at any price. Every case moves through the same queues in priority-date order.",
      },
      {
        question: "What happens if my PERM is audited?",
        answer: "The employer receives an audit letter (usually with a 30-day response deadline) and the case moves to DOL's separate audit review queue, currently also adjudicating December 2025 priority dates. An audit typically adds several months to the overall timeline.",
      },
      {
        question: "How will I know if my PERM is approved?",
        answer: "DOL issues the certified Form ETA-9089 to the employer or attorney. You can track progress via the DOL FLAG case status search using your A-number case ID, or by comparing your priority date to DOL's monthly currently-adjudicating dates.",
      },
      {
        question: "What is next after PERM approval?",
        answer: "The employer files Form I-140 with USCIS, attaching the certified ETA-9089 — which must be filed within 180 days of certification. After I-140 approval, the applicant waits for their priority date to become current in the Visa Bulletin, then files Form I-485 or completes consular processing.",
      },
    ],
  },
  {
    slug: "i140-processing-time",
    title: "I-140 Processing Time 2026: USCIS Timeline Guide",
    excerpt:
      "How long does I-140 take in 2026? USCIS median is 3.7 months (fastest since 2021). Complete I-140 processing time guide by EB category, premium processing costs and timelines, historical trends, and what to do while you wait.",
    datePublished: "2026-10-17T00:00:00+00:00",
    dateModified: "2026-10-17T00:00:00+00:00",
    readingMinutes: 12,
    tags: ["I-140", "Green Card", "Guides"],
    faqs: [
      {
        question: "How long is I-140 processing taking in 2026?",
        answer: "USCIS decided half of all regular I-140 petitions in 3.7 months in FY 2026 (through June 30) — the fastest median since 2021, down from 7.9 months in FY 2025. Individual timelines vary by EB category and service center, ranging from 4.5 to 22.5 months.",
      },
      {
        question: "How much is premium processing for I-140?",
        answer: "Premium processing for Form I-140 costs $2,965 as of 2026 (Form I-907). It guarantees USCIS action within 15 business days for most categories, or 45 business days for EB-1C and EB-2 NIW. It does not increase approval odds.",
      },
      {
        question: "Which EB category has the fastest I-140 processing?",
        answer: "EB-1A and EB-1B tend toward the shorter end of the 4.5–22.5 month range at well-performing service centers, since officers evaluate credentials against defined regulatory criteria. EB-2 NIW is more variable (up to 20 months) due to the subjective three-prong Dhanasar assessment.",
      },
      {
        question: "Does premium processing increase I-140 approval chances?",
        answer: "No. USCIS applies identical legal standards with or without premium processing. It only accelerates the decision timeline. A weak petition gets denied faster, not approved.",
      },
      {
        question: "What is the I-140 processing time for EB-2 NIW?",
        answer: "EB-2 National Interest Waiver petitions take up to 20 months under standard processing at some service centers. Premium processing is available with a 45 business-day guarantee.",
      },
      {
        question: "What comes before I-140?",
        answer: "For EB-2 and EB-3 cases, PERM labor certification comes first — typically 18–30 months including prevailing wage determination, recruitment, and DOL analyst review. See our PERM processing time guide for current DOL timelines.",
      },
      {
        question: "What happens after I-140 approval?",
        answer: "I-140 approval locks in your priority date. You then wait for it to become current in the monthly Visa Bulletin, then file Form I-485 (if in the U.S.) or complete consular processing abroad. For India/China EB-2/EB-3, the Visa Bulletin wait — not I-140 processing — is the real bottleneck.",
      },
    ],
  },
  {
    slug: "uscis-filing-deadline-rule-2026",
    title: "USCIS Filing Deadline Rule Changes Oct 23, 2026",
    excerpt:
      "USCIS Policy Alert PA-2026-15 takes effect October 23, 2026: the weekend next-business-day cushion survives for day-counted paper deadlines (RFE/NOID responses, I-290B appeals) but ends for date-based cutoffs — H-1B extensions due by an I-94 expiry and filings due before a 21st birthday. Full guide with worked examples.",
    datePublished: "2026-10-22T00:00:00+00:00",
    dateModified: "2026-10-22T00:00:00+00:00",
    readingMinutes: 13,
    tags: ["Policy News", "USCIS", "Guides"],
    faqs: [
      {
        question: "What is USCIS Policy Alert PA-2026-15?",
        answer: "PA-2026-15, issued September 23, 2026, updates the USCIS Policy Manual (Volume 1, Part B, Chapter 6, Section E) to clarify how the regulatory definition of 'day' in 8 CFR 1.2 applies to filing deadlines. It takes effect October 23, 2026, for paper filings USCIS receives on or after that date.",
      },
      {
        question: "What actually changed on October 23, 2026?",
        answer: "The next-business-day extension no longer applies to deadlines tied to a substantive eligibility date — such as filing before a 21st birthday or filing an H-1B extension of stay before an I-94 expiry date. It still applies to deadlines stated in days (RFE/NOID responses, I-290B appeal and motion periods) for paper filings.",
      },
      {
        question: "My H-1B I-94 expires on a Saturday. When must my extension be filed?",
        answer: "USCIS must receive the extension before your current stay expires — for a paper filing, in practice by Friday, the last business day before the Saturday expiry. A package received on Monday is late under PA-2026-15, and USCIS generally will not approve an extension of stay filed after the prior status expired, apart from a narrow extraordinary-circumstances exception.",
      },
      {
        question: "Do RFE and NOID deadlines still extend past weekends?",
        answer: "Yes — for paper responses. If the last day of the response period stated in your notice falls on a Saturday, Sunday, or federal holiday, a paper response received by the end of the next business day is timely. NOID responses are capped at a maximum of 30 days by regulation, and the exact period printed in your notice always controls.",
      },
      {
        question: "Does the rule apply to online filings?",
        answer: "No. USCIS treats an electronic filing as received at the moment it is submitted, so online filings never receive a weekend or holiday extension — under the old guidance or the new one.",
      },
      {
        question: "Does PA-2026-15 apply to filings USCIS received before October 23, 2026?",
        answer: "No. It applies to paper filings received on or after October 23, 2026. Filings received earlier are governed by the prior 2023 guidance, which did extend the weekend rule to birthday- and period-based deadlines.",
      },
      {
        question: "What if a filing is due before my child turns 21 and the birthday is on a weekend?",
        answer: "The filing must be received before the birthday — by the preceding business day at the latest. Eligibility cutoffs do not move for weekends or holidays under the new guidance. This is the reverse of the 2023–2026 rule, so double-check any older advice you received.",
      },
      {
        question: "Is PA-2026-15 a new law or regulation?",
        answer: "No. It is agency guidance interpreting the existing regulation at 8 CFR 1.2. It reverses USCIS's March 2023 guidance and returns to the pre-2023 reading of the definition of 'day,' citing the Supreme Court's 2025 decision in Monsalvo Velasquez v. Bondi.",
      },
    ],
  },
  {
    slug: "november-2026-visa-bulletin",
    title: "November 2026 Visa Bulletin: India EB-2 Stuck at 2013, Rest of World Reaches 2025",
    excerpt:
      "November 2026 Visa Bulletin explained step by step: India EB-2 frozen at November 1, 2013 for a second month while the rest of the world advanced to April 1, 2025; India EB-3 moved to January 22, 2014; USCIS will use the Dates for Filing chart; plus the premium processing rule now under White House review.",
    datePublished: "2026-10-24T00:00:00+00:00",
    dateModified: "2026-10-24T00:00:00+00:00",
    readingMinutes: 12,
    tags: ["Visa Bulletin", "Green Card", "EB-2", "Priority Dates"],
    faqs: [
      {
        question: "What is India EB-2's final action date in the November 2026 Visa Bulletin?",
        answer: "November 1, 2013 — unchanged from October 2026, the second straight month with no movement. Only EB-2 India applicants with a priority date earlier than November 1, 2013 can have their green card approved.",
      },
      {
        question: "When will the EB-2 India date move forward?",
        answer: "No official source publishes a schedule. The date moves only as old cases clear the queue within India's 7% per-country cap. Watch the December 2026 bulletin (expected mid-November) for the next data point — any site claiming a specific future date is guessing.",
      },
      {
        question: "What is the difference between Final Action Dates and Dates for Filing?",
        answer: "Final Action Dates control when a green card can actually be approved and a visa number assigned. Dates for Filing control when you may submit your I-485 adjustment-of-status application early — but only in months when USCIS says that chart may be used. In November 2026, USCIS directed employment-based applicants to use the Dates for Filing chart.",
      },
      {
        question: "Which chart do I use to file my I-485 in November 2026?",
        answer: "The Dates for Filing chart. For example, an EB-2 India applicant with a priority date before January 15, 2015 can file their I-485 in November — even though approval still requires the Final Action Date (November 1, 2013) to pass their priority date.",
      },
      {
        question: "My EB-2 India priority date is December 2014. What can I do in November 2026?",
        answer: "You can file your I-485, because December 2014 is earlier than the Dates for Filing cutoff of January 15, 2015. Filing can unlock an Employment Authorization Document (EAD) and advance parole while you wait. Your green card cannot be approved until the Final Action Date passes December 2014.",
      },
      {
        question: "Does the Visa Bulletin affect the H-1B lottery?",
        answer: "No. The Visa Bulletin governs immigrant visas (green cards). The H-1B lottery is a separate USCIS process for temporary work status. The bulletin matters once you are in the green card queue, not for lottery selection.",
      },
      {
        question: "Will the premium processing rule change deadlines now?",
        answer: "No. The proposed rule 'Amending the Premium Processing Timeframe' (RIN 1615-AD25) is only under OIRA review since October 13, 2026. Its text is not public and its direction is unknown. Current 15/30/45-business-day clocks stand until a final rule takes effect, which is months away at the earliest.",
      },
      {
        question: "When will the December 2026 Visa Bulletin come out?",
        answer: "Visa Bulletins are typically released in the second week of the month for the following month, so expect the December 2026 bulletin in mid-November 2026. We will update this guide and the Priority Date Tracker when it lands.",
      },
    ],
  },
  {
    slug: "h1b-100k-fee-status",
    title: "H-1B 100K Fee Status: Is the $100,000 Fee Active Now?",
    excerpt:
      "Live status of the $100,000 H-1B fee: blocked by two federal courts and not being collected as of October 25, 2026 — full timeline from Proclamation 10973 through the October 9 Ninth Circuit appeal, plus the separate $103,265 DHS proposal explained.",
    datePublished: "2026-10-25T00:00:00+00:00",
    dateModified: "2026-10-25T00:00:00+00:00",
    readingMinutes: 14,
    tags: ["H-1B Fee", "H-1B News", "Court Rulings"],
    faqs: [
      {
        question: "Is the $100,000 H-1B fee active now?",
        answer: "No. As of October 25, 2026, two federal court orders block its enforcement — the June 8, 2026 Massachusetts vacatur and the September 30, 2026 California injunction — and USCIS is not collecting the payment. The government's October 9, 2026 appeal to the Ninth Circuit does not change that, because an appeal alone does not lift an injunction.",
      },
      {
        question: "Who would have to pay the $100,000 fee if it came back?",
        answer: "Under the USCIS guidance of October 20, 2025: employers filing new H-1B petitions for beneficiaries outside the United States without a valid H-1B visa; petitions requesting consular, port-of-entry, or pre-flight notification; and change-of-status, amendment, or extension petitions where USCIS denies the requested benefit and approves the case for consular processing instead.",
      },
      {
        question: "Does the fee apply to renewals, extensions, or F-1 to H-1B change of status?",
        answer: "No — not under the USCIS guidance. Approved change of status, amendment, extension, or change of employer for someone inside the United States was outside the fee's scope, and that includes the usual F-1 (OPT) to H-1B change of status. The fee only attached if the requested benefit was denied and the case went to consular processing.",
      },
      {
        question: "What is the $103,265 H-1B fee? Is it the same thing?",
        answer: "No. It is a separate DHS proposal published in the Federal Register on August 25, 2026 (Docket USCIS-2026-0298) that would charge $103,265 on every cap-subject H-1B petition, on top of existing fees. It is not in effect, its comment period closed September 24, 2026, and no final rule has been issued. It also explicitly excludes cap-exempt employers, which the proclamation payment never did.",
      },
      {
        question: "Can the $100,000 fee come back?",
        answer: "Yes. If an appeals court grants a stay of either blocking order, or if the government wins on the merits, collection can resume — and USCIS has said DHS still intends to collect the payment if the orders are lifted. That is why this page says BLOCKED rather than cancelled, and why employers should keep it as a contingent cost.",
      },
      {
        question: "Did the September 2026 extension bring the fee back?",
        answer: "No. Proclamation 11069 (September 18, 2026) extended the restriction on paper through September 21, 2027, but the September 30, 2026 California order expressly covers implementation under both the original proclamation and the extension. The extension changed the paper expiry date, not the enforcement reality.",
      },
      {
        question: "How many employers actually paid the $100,000?",
        answer: "Over 700 petitions, according to Proclamation 11069 itself, which states the payment had been made for over 700 petitions since the original proclamation took effect on September 21, 2025.",
      },
      {
        question: "What should employers do right now?",
        answer: "Do not pay the $100,000 today, but do not treat it as gone either: keep it as a contingent cost, confirm any covered filing with immigration counsel, watch stay decisions (the fastest way it returns), and keep the separate $103,265 proposal in its own budget line.",
      },
    ],
  },
  {
    slug: "h4-ead-guide",
    title: "H-4 EAD Guide 2026: Who Qualifies, How to Apply, Fee & Renewal Rules",
    excerpt:
      "Complete H-4 EAD guide for H-1B spouses: the two eligibility paths (approved I-140 or AC21 extension), step-by-step Form I-765 application, the $520 paper fee, honest processing times, and renewal now that automatic extensions are gone — sourced to USCIS.",
    datePublished: "2026-10-27T00:00:00+00:00",
    dateModified: "2026-10-27T00:00:00+00:00",
    readingMinutes: 16,
    tags: ["H-4 EAD", "H-1B Spouses", "Guides"],
    faqs: [
      {
        question: "What is an H-4 EAD?",
        answer: "A work permit (Form I-766 card) for certain H-4 spouses of H-1B workers. H-4 status alone does not authorize work, and H-4 children are never eligible. It allows unrestricted work — any employer, multiple jobs, or self-employment.",
      },
      {
        question: "Who qualifies for an H-4 EAD?",
        answer: "H-4 spouses whose H-1B spouse is the principal beneficiary of an approved Form I-140, or has been granted H-1B status beyond six years under AC21 sections 106(a) and (b). A pending I-140 alone does not qualify, and priority-date currency does not matter for the approved-I-140 path.",
      },
      {
        question: "How much does the H-4 EAD cost?",
        answer: "$520 for a paper Form I-765 filing. As of October 2026, category (c)(26) is not accepted online, so the $470 online price does not apply to H-4 EAD. The $410 figure still seen online is the pre-April-2024 fee — confirm the current fee on the USCIS G-1055 fee schedule before filing.",
      },
      {
        question: "How long does H-4 EAD processing take?",
        answer: "It varies sharply by filing type: USCIS figures reported in October 2026 put category (c)(26) at about 6.5 months when filed with an H-4 extension and about 17.5 months for a standalone I-765. Check the live USCIS processing-times tool for your category and center.",
      },
      {
        question: "Can I keep working while my H-4 EAD renewal is pending?",
        answer: "Not for renewals filed on or after October 30, 2025. A DHS final rule (October 14, 2026, 91 FR 65306) permanently ended the automatic extension for those renewals — work authorization ends the day after the card expires and resumes only when the new card is approved. Renewals filed before October 30, 2025 keep up to 540 days.",
      },
      {
        question: "Is premium processing available for the H-4 EAD?",
        answer: "No. USCIS does not offer premium processing for Form I-765 in category (c)(26), and premium processing on the H-1B petition does not cover the H-4 extension or the EAD.",
      },
      {
        question: "Can H-4 children get an EAD?",
        answer: "No. Only H-4 spouses are eligible under category (c)(26); H-4 children can never receive work authorization through this category.",
      },
      {
        question: "Is the H-4 EAD program ending?",
        answer: "No. The rule at 8 CFR 274a.12(c)(26) remains in effect, and the Supreme Court declined review of the challenge to it on October 14, 2025. What ended is the automatic renewal extension, not the program. A separate proposal to eliminate the 60-day grace period is pending and does not rescind the H-4 EAD.",
      },
    ],
  },
  {
    slug: "h1b-salary-database",
    title: "H-1B Salary Database Guide 2026: How to Search, Read & Compare Real LCA Salaries",
    excerpt:
      "How to read any H-1B salary database properly: what an LCA wage really is, what wage levels I–IV mean, step-by-step searches by company, job title and state, and how to compare two offers — all from real DOL LCA records, with worked examples from Amazon and Software Engineer.",
    datePublished: "2026-10-28T00:00:00+00:00",
    dateModified: "2026-10-28T00:00:00+00:00",
    readingMinutes: 14,
    tags: ["H-1B Salary Database", "H-1B Salaries", "Guides"],
    faqs: [
      {
        question: "Is the salary data in H-1B databases real?",
        answer: "Yes, when the database cites the Department of Labor. Every figure in this guide comes from DOL Labor Condition Application disclosure data — 1,532,089 H-1B records across FY2024–FY2026. If a salary site cannot name its source, treat its numbers as marketing, not data.",
      },
      {
        question: "What is the difference between LCA wage and actual salary?",
        answer: "The LCA wage is the offered wage attested on the Labor Condition Application at filing time — at least the prevailing wage and at least the actual wage paid to similarly employed workers. Actual salary can be higher because bonuses, equity, raises after filing, and role changes are not in the LCA record. Use the database median as a market benchmark, not a prediction of your payslip.",
      },
      {
        question: "What do wage levels I–IV mean?",
        answer: "Prevailing-wage levels set by the job's requirements: Level I is entry-level work, Level II is qualified work, Level III is experienced work, and Level IV is fully competent, expert-level work. Higher levels carry higher prevailing wages and, under the wage-weighted lottery rule, more selection entries. Compare salaries within the same level when you can.",
      },
      {
        question: "How do I find salaries for my job title?",
        answer: "Use the Sponsor Match Finder: type your title and read the snapshot — total FY2026 (through Q3) filings, median offered salary, and LCA certification rate — plus the ranked list of top sponsoring employers for that exact title. For Software Engineer, that snapshot is 40,003 filings and a $151,000 median.",
      },
      {
        question: "How do I find salaries at a specific company?",
        answer: "Open the company's sponsor profile from the Top 1,000 sponsor list. Amazon's profile, for example, shows 19,937 FY2026 (through Q3) filings, a $158,000 median offered salary, a 99.98% LCA certification rate, and breakdowns by top titles and worksite states.",
      },
      {
        question: "Can I compare two job offers with this data?",
        answer: "Yes, if you compare the same metric in the same year: employer medians against employer medians, or title medians against title medians, all FY2026 (through Q3). An offer above the matching median is strong; an offer well below it is a citable negotiation point. Never compare a title median with an employer median, or a through-Q3 figure with a full-year figure.",
      },
      {
        question: "Is the median salary a guaranteed salary?",
        answer: "No. The median is the middle offered wage across filings for that employer or title — half the filings are above it, half below. Your own offer depends on your wage level, worksite, experience, and negotiation. Treat the median as the market level, not as a promise.",
      },
      {
        question: "What does the DOL LCA certification rate mean?",
        answer: "Certified LCA cases divided by filed cases, where certified includes both Certified and Certified - Withdrawn. It measures DOL paperwork certification — a compliance-quality signal. It is not the USCIS H-1B petition approval rate, and a high rate does not guarantee any individual petition will be approved.",
      },
    ],
  },
  {
    slug: "h1b-grace-period",
    title: "H-1B Grace Period After Layoff: The 60-Day Rule, Day-by-Day Plan & the 2026 Elimination Proposal",
    excerpt:
      "Laid off on H-1B? You have up to 60 consecutive calendar days — or until your I-94 ends, whichever is shorter — under 8 CFR 214.1(l)(2). The exact rule, when the clock starts, the four paths (new employer, B-2, dependent status, departure), H-4 EAD during the grace period, and the DHS proposal to eliminate it (comments due November 10, 2026).",
    datePublished: "2026-10-30T00:00:00+00:00",
    dateModified: "2026-10-30T00:00:00+00:00",
    readingMinutes: 16,
    tags: ["H-1B Grace Period", "H-1B Layoff", "Guides"],
    faqs: [
      {
        question: "How long is the H-1B grace period after a layoff?",
        answer: "Up to 60 consecutive calendar days, or until your authorized validity period (I-94) ends, whichever is shorter — under 8 CFR 214.1(l)(2). It is discretionary, applies once per authorized validity period, and does not itself authorize work.",
      },
      {
        question: "When does the 60-day grace period start?",
        answer: "The day after termination of employment, typically determined by the last day for which a salary or wage is paid. Severance paid after your last working day does not automatically move the clock; if you remain an active, paid employee on garden leave or a notice period, the date is fact-dependent.",
      },
      {
        question: "Does severance pay extend the H-1B grace period?",
        answer: "Not automatically. USCIS applies the \"last day salary or wage is paid\" test, and severance is generally compensation for job loss, not payment for services rendered. Lump-sum severance or PTO paid after your last working day does not by itself push the start date later.",
      },
      {
        question: "Can I work during the 60-day grace period?",
        answer: "No — the grace period preserves status, not work authorization. The exception is a separate authorization: an eligible H-1B worker may begin work for a new employer immediately after USCIS receives a nonfrivolous I-129 petition (portability). A valid dependent EAD or a compelling circumstances EAD are other separate bases.",
      },
      {
        question: "Can I change employers during the grace period, and when can I start work?",
        answer: "Yes. Your new employer files Form I-129 with a certified LCA before your grace period ends. If you are eligible for portability, you may begin work immediately after USCIS receives the nonfrivolous petition — the legal trigger is receipt by USCIS, not approval and not the receipt notice (though many attorneys advise waiting for the notice as a safety practice). If the petition is denied, portability work authorization ends.",
      },
      {
        question: "What happens if I don't find a job within 60 days?",
        answer: "It depends on whether you filed something in time. A timely, nonfrivolous filing pending past Day 60 keeps you in a period of authorized stay. With no qualifying filing, you are out of status after the grace period ends and should depart by the deadline to avoid unlawful-presence accrual.",
      },
      {
        question: "What happens on day 61?",
        answer: "Day 61 is not an automatic 3-year bar. With a timely filing pending, you remain in authorized stay; unlawful presence is tolled while it is pending and restarts the day after a denial. With no filing, you are out of status and accruing risk; the 3-year and 10-year bars attach on departure after more than 180 days or one year or more of unlawful presence, respectively.",
      },
      {
        question: "Can I travel outside the US during the grace period?",
        answer: "You can depart, but departure ends the grace period immediately and it cannot be recaptured on re-entry. Re-entry requires a new status basis and CBP admission, which is discretionary. Do not travel on the assumption that your old status will still be waiting when you return.",
      },
      {
        question: "Can my H-4 spouse keep working on H-4 EAD during the grace period?",
        answer: "Yes — USCIS states directly that an H-4 spouse's EAD or employment authorization incident to status remains valid during the maximum 60-day grace period. But when the grace period ends without a new basis, derivative H-4 status ends with it, and the EAD becomes invalid for work even if the card's printed expiry date is later.",
      },
      {
        question: "Can I change to B-2, H-4, or F-1 status during the grace period?",
        answer: "Yes, by filing Form I-539 before the grace period ends. A timely, nonfrivolous filing gives you a period of authorized stay while it is pending, but the new status itself requires approval. B-2 does not permit work; H-4 work requires a separate approved H-4 EAD.",
      },
      {
        question: "Is the grace period automatic, or can USCIS deny or shorten it?",
        answer: "It is discretionary — the regulation says DHS may eliminate or shorten it as a matter of discretion, and USCIS decides when adjudicating your later filing. There is no form to apply for it. Ask for a favorable exercise of discretion in your later filing's cover letter.",
      },
      {
        question: "Can I use the grace period more than once?",
        answer: "Once per authorized validity period. A new employer and a new validity period can give rise to a fresh grace period on a later termination. Returning to the same employer on the same petition does not reset it.",
      },
      {
        question: "Does the grace period apply if I quit instead of being laid off?",
        answer: "Yes. USCIS confirms the grace period may apply to both voluntary and involuntary cessation of employment. Resignation counts the same way a layoff does — the clock still runs from the day after employment ends.",
      },
      {
        question: "What is the difference between the 60-day and 10-day grace periods?",
        answer: "The 60-day period (8 CFR 214.1(l)(2)) applies when employment ends before the validity period ends — a layoff, resignation, or termination. The 10-day period (8 CFR 214.1(l)(1)) attaches to the edges of a completed validity period: up to 10 days before it begins and 10 days after it ends. The 10-day period does not cover a mid-petition layoff, and it cannot be stacked onto the 60 days.",
      },
      {
        question: "Has the 60-day grace period been eliminated in 2026?",
        answer: "No. DHS has only proposed eliminating it (91 FR 57807, September 11, 2026, docket USCIS-2026-0364, comments due November 10, 2026). The current rule in 8 CFR 214.1(l)(2) remains in effect until a final rule is published with its own effective date.",
      },
    ],
  },
  {
    slug: "h1b-lca",
    title: "H-1B LCA Guide 2026: The Employer Filing Playbook, From Wage Check to Certified LCA",
    excerpt:
      "End-to-end employer guide to the Labor Condition Application: choosing the SOC code and wage, filing ETA Form 9035/9035E in FLAG, every worksite case, the posting notice in full, denial and correction, validity and amendment triggers, and the Public Access File — without repeating the salary guide's wage-level tables.",
    datePublished: "2026-11-02T00:00:00+00:00",
    dateModified: "2026-11-02T00:00:00+00:00",
    readingMinutes: 22,
    tags: ["H-1B LCA", "H-1B Guides", "Guides"],
    faqs: [
      {
        question: "How long does LCA certification take?",
        answer: "DOL reviews LCAs within seven working days for completeness and obvious errors or inaccuracies. That is a review deadline, not a merits decision — and a filing returned for errors restarts the clock when the corrected version is submitted.",
      },
      {
        question: "How long is a certified LCA valid?",
        answer: "A certified H-1B LCA is valid for up to three years, but the end date written on the LCA controls, and the employment period in the petition cannot run past it. A new period of employment needs a new LCA.",
      },
      {
        question: "What is the difference between the LCA and the H-1B petition?",
        answer: "The LCA is the employer's attestation filing with the Department of Labor, covering wages, working conditions, no strike or lockout, and notice. The petition is Form I-129 filed with USCIS, which decides whether the job is a specialty occupation and the worker is qualified. The certified LCA must come first; the petition cannot be filed without it.",
      },
      {
        question: "Does a certified LCA guarantee USCIS approval?",
        answer: "No. Certification means only that DOL found the form complete with no obvious inaccuracies. USCIS adjudicates the petition separately and can issue a request for evidence or deny it — including where the petition does not match the certified LCA on wage, worksite, or duties.",
      },
      {
        question: "What must the posting notice say, and how long must it stay up?",
        answer: "The notice must state that H-1B workers are sought, how many, in which classification, at what wages, for what period, and at which locations, plus that the LCA is available for public inspection and the Wage and Hour Division complaint statement. It must be given on or within 30 days before filing. A posted or bulletin-board notice runs for 10 days; individual direct notice, such as a single email to each affected employee, counts once. Union workplaces give notice to the bargaining representative instead.",
      },
      {
        question: "Do I need a new LCA if the worker moves to a new worksite?",
        answer: "It depends on the move. Within the same area of intended employment, with unchanged job terms, no new LCA is needed — but post the existing LCA notice at the new site. Outside the area, a new LCA plus an amended petition filed before the move are required. Short-term placements outside the area need neither, but only up to 30 workdays in a year (60 where the worker keeps a workstation and ties at the permanent site), with the required wage and travel and lodging costs covered.",
      },
      {
        question: "What goes in the Public Access File?",
        answer: "The certified LCA, the worker's rate of pay, a description of the actual wage system, the prevailing wage rate and its source, documentation of the notice given to workers, and evidence that the H-1B worker received a copy of the LCA. Keep it at the principal U.S. office or the worksite, make it available to any interested party who asks, and retain it for the full period the regulation sets.",
      },
      {
        question: "What happens if the LCA is denied?",
        answer: "The petition cannot proceed without a certified LCA, so a denial stops the case at DOL. The fix is a corrected filing addressing the error — wage, occupation, worksite, or notice — which restarts the seven-working-day review. Common causes are a wage below the required wage, a SOC code that does not match the duties, and a worksite missing or mismatched to its wage area.",
      },
    ],
  },
  {
    slug: "h4-visa-guide",
    title: "H-4 Visa Guide 2026: Stamping, Status, Work Rules, and the Age-21 Playbook",
    excerpt:
      "Complete H-4 visa guide for H-1B spouses and children: who qualifies, the stamp-vs-status-vs-I-94 distinction, step-by-step consular stamping and Form I-539 extensions, the 2025 stamping and interview-waiver changes, work and study rules, the age-21 playbook, and 221(g) delays — sourced to USCIS and the State Department.",
    datePublished: "2026-11-03T00:00:00+00:00",
    dateModified: "2026-11-03T00:00:00+00:00",
    readingMinutes: 24,
    tags: ["H-4 Visa", "H-1B Guides", "Guides"],
    faqs: [
      {
        question: "What is an H-4 visa?",
        answer: "The H-4 is the dependent visa for the spouse and unmarried children under 21 of an H-category worker, most commonly an H-1B worker. It lets them live in the US for as long as the principal keeps valid status. It is not a work visa and it is not independent of the principal's status.",
      },
      {
        question: "Who can apply for an H-4 visa?",
        answer: "A lawful spouse and unmarried children under 21 of an H-1B, H-1B1, H-2A, H-2B, or H-3 worker. Parents, siblings, unmarried partners, and children who have turned 21 or married cannot qualify, regardless of the relationship.",
      },
      {
        question: "Can H-4 visa holders work in the US?",
        answer: "Not on H-4 status alone. Only certain spouses — those whose principal has an approved I-140, or holds H-1B status extended beyond six years under AC21 — can apply for an Employment Authorization Document (EAD). H-4 children cannot work under this rule at any age. See our H-4 EAD guide for the full process.",
      },
      {
        question: "How do I apply for an H-4 visa stamp?",
        answer: "Complete Form DS-160 (one per applicant, including children), pay the $205 H-category visa fee, book an interview at a consulate in your country of nationality or legal residence, attend with the documents in the checklist above, and check your I-94 record after entry.",
      },
      {
        question: "What documents do I need for H-4 stamping?",
        answer: "Passport valid 6+ months, DS-160 confirmation, appointment letter, the marriage certificate (original + copy) for a spouse or birth certificates for children, and the principal's I-797 approval notice, recent pay stubs, employment verification letter, and visa stamp copy. Extra marriage proof helps if the marriage is under two years old. The full checklist is in the documents section above.",
      },
      {
        question: "Is dropbox available for H-4 renewals?",
        answer: "Do not count on it. Interview-waiver (\"dropbox\") eligibility narrowed sharply through 2025, and most H-1B/H-4 applicants are now called for in-person interviews. Some consulates may still offer it in narrow cases — check your consulate's current instructions and keep an interview plan ready.",
      },
      {
        question: "How do I extend H-4 status inside the US?",
        answer: "File Form I-539 with USCIS before the current status expires, with proof of the relationship and of the principal's current status. A timely filing lets you remain in an authorized period of stay while USCIS decides. It does not grant work authorization.",
      },
      {
        question: "What happens when my child turns 21 on H-4?",
        answer: "H-4 eligibility ends on the 21st birthday. Plan 12+ months ahead: for most children in school, the next status is F-1, which needs an I-20 and a change-of-status filing with enough lead time. The Child Status Protection Act helps green-card cases — it does not freeze H-4 age. See the age-out playbook above.",
      },
    ],
  },
  {
    slug: "h1b-visa-cost",
    title: "H-1B Visa Cost 2026: How Much Does It Really Cost to Sponsor an H-1B Worker?",
    excerpt:
      "H-1B visa cost, broken down by employer type: every USCIS fee from Form G-1055 (edition 10/26/26), who pays what by law, transfer, extension and amendment totals, dependent costs, and the 2026 fee changes that are in effect, blocked, or only proposed.",
    datePublished: "2026-11-05T00:00:00+00:00",
    dateModified: "2026-11-05T00:00:00+00:00",
    readingMinutes: 37,
    tags: ["H-1B Visa Cost", "H-1B Guides", "Guides"],
    faqs: [
      {
        question: "How much does an H-1B visa cost in total?",
        answer: "For a regular employer, a new cap-subject petition costs $3,545 online ($3,595 on paper), or $6,510 with premium processing. A small for-profit employer pays $2,225 (a small nonprofit that owes ACWIA pays $1,925 for a new cap-subject petition), and a university or ACWIA-exempt nonprofit filing a cap-exempt petition pays $960. Those are USCIS fees only — attorney fees are separate.",
      },
      {
        question: "Who pays H-1B fees — the employer or the employee?",
        answer: "The employer files the petition and pays the petition fees. The worker can never pay any part of the ACWIA training fee or the $500 fraud fee, in any form. Other petition costs are the employer's business expenses and cannot be shifted to the worker if they would push pay below the required wage. The worker normally pays only personal costs, such as the $205 consular fee and dependents' applications.",
      },
      {
        question: "How much does an H-1B transfer cost?",
        answer: "A regular employer pays $3,330 online ($3,380 on paper), or $6,295 with premium processing. A small for-profit employer pays $2,010 (a small nonprofit pays $1,710) and an ACWIA-exempt nonprofit pays $960. There is no $215 registration fee on a transfer, because a previously counted worker has already been counted against the cap. If the worker's only H-1B employment was cap-exempt and never counted, the cap may still apply.",
      },
      {
        question: "How much does an H-1B extension cost?",
        answer: "A first extension for a regular employer costs $2,830 online; a second or later extension costs $1,330, because the ACWIA fee drops off after the first extension. A small for-profit employer pays $1,510 for a first extension and $760 for a second or later one (a small nonprofit pays $1,210 for a first extension). A covered employer adds $4,000 to either.",
      },
      {
        question: "Is the $100,000 H-1B fee still in effect?",
        answer: "No. As of November 5, 2026, it is blocked by a Massachusetts court's vacatur of the implementing guidance (June 8, 2026) and a California preliminary injunction (September 30, 2026), and it is not being collected. The government has appealed, and USCIS says it still plans to collect the payment if the orders are lifted.",
      },
      {
        question: "Is the $103,265 H-1B fee in effect?",
        answer: "No. It is a proposed rule published August 25, 2026 (91 FR 54817, Docket USCIS-2026-0298). Comments closed September 24, 2026, and no final rule or effective date has been published. Nothing is owed. It would apply to cap-subject petitions only, not to cap-exempt petitions — and, on the best available secondary reading, not to a transfer by a worker who was already counted against the cap. A never-counted worker moving to a cap-subject employer would be filing a cap-subject petition, so the fee would apply to them if the rule is finalized as proposed.",
      },
      {
        question: "How much is premium processing in 2026, and what does it guarantee?",
        answer: "Premium processing costs $2,965 since March 1, 2026, up from $2,805. It guarantees a USCIS action — approval, denial, RFE, or NOID — within 15 business days, not an approval. An RFE or NOID stops the clock, and a new 15-business-day period starts on the response. The fee is refunded only if USCIS takes no qualifying action in time.",
      },
      {
        question: "How much does an H-4 visa cost?",
        answer: "At a consulate abroad, $205 per dependent — the MRV fee, with no reciprocity fee for Indian or Chinese nationals. Inside the US, one $470 paper Form I-539 covers a whole family on Form I-539A forms; filing online costs $420 per person, because online I-539 accepts a single applicant only. An H-4 EAD for a qualifying spouse costs $520 on paper; category (c)(26) cannot be filed online.",
      },
    ],
  },
  {
    slug: "h1b-change-of-status",
    title: "H-1B Change of Status in 2026: F-1 to H-1B, Cap-Gap, and How to File",
    excerpt:
      "H-1B change of status, start to finish: who can change status to H-1B and who cannot, the F-1 to H-1B journey, cap-gap to April 1, every 2026 fee with the arithmetic, processing times, the travel rule, H-4 dependents, what happens if the request is denied, and the 2026 changes that are in effect, blocked, or only proposed.",
    datePublished: "2026-11-06T00:00:00+00:00",
    dateModified: "2026-11-06T00:00:00+00:00",
    readingMinutes: 38,
    tags: ["H-1B Change of Status", "H-1B Guides", "Guides"],
    faqs: [
      {
        question: "What is H-1B change of status?",
        answer:
          "Change of status is a change of nonimmigrant classification for a person already lawfully in the United States, without leaving the country. For H-1B, the worker's employer files Form I-129 asking USCIS to change the worker's status, and if USCIS approves it, the new status takes effect on the start date on the approval notice. It is governed by section 248 of the Immigration and Nationality Act and 8 CFR Part 248.",
      },
      {
        question: "Can I change status from F-1 to H-1B without leaving the US?",
        answer:
          "Yes — it is the most common change of status to H-1B. Your employer registers you in the March lottery, and if you are selected, files Form I-129 with a certified LCA requesting a change of status. If approved, your status changes to H-1B on the validity start date printed on the approval notice — October 1 is the earliest start date for cap-subject cases, not an automatic effective date for every approval. Work authorization begins when the change of status takes effect, as shown on the notice, not merely because the petition was approved. Cap-gap extends your F-1 status — and your OPT work authorization, if OPT was valid when the petition was filed — until April 1 of the fiscal year requested, or the approved petition's validity start date, whichever is earlier.",
      },
      {
        question: "What is cap-gap, and how long does it last?",
        answer:
          "Cap-gap is the automatic extension of an F-1 student's status while a cap-subject H-1B petition is pending, so the student does not fall out of status between OPT expiry and October 1. Since January 17, 2025 it runs until April 1 of the fiscal year requested, or the approved petition's start date, whichever is earlier. If OPT was valid when the petition was filed, work authorization extends too; if the student was already in the 60-day grace period, status extends but work authorization does not.",
      },
      {
        question: "Does the H-1B fee apply to change of status?",
        answer:
          "Yes. The regular USCIS fees apply in full to a change-of-status petition — it is the same I-129 petition, filed by the employer, with the same $215 registration, I-129 base fee, Asylum Program Fee, fraud fee and ACWIA fee. There is no separate change-of-status fee and no discount. The $100,000 proclamation payment does not apply to a change of status USCIS grants for a worker inside the US, and it is not currently being collected at all. The proposed $103,265 fee, if finalized, would apply to cap-subject change-of-status petitions.",
      },
      {
        question: "How long does H-1B change of status take?",
        answer:
          "The calendar for a cap-subject F-1 to H-1B case is about seven months from March registration to the October 1 start date, and the start date cannot be moved earlier even if USCIS approves the petition in April or May. USCIS adjudication of the I-129 itself has no fixed timeline; premium processing guarantees an action within 15 business days for $2,965. As of November 6, 2026, the USCIS Case Processing Times tool showed 10 months for Form I-129, H-1B change of status in the US, at Service Center Operations (SCOPS) — 80% of cases completed within 10 months.",
      },
      {
        question: "Can I travel while my change of status is pending?",
        answer:
          "No — do not travel. Leaving the United States while the change-of-status request is pending abandons the request. The petition can still be approved, but only for consular notification, which means leaving, getting a visa stamp, and re-entering. Departure before adjudication can also make the $100,000 proclamation payment apply. After the petition and the change of status are both approved, travel and readmission in F-1 status before October 1 is generally allowed.",
      },
      {
        question: "What happens if my change of status is denied?",
        answer:
          "If the change of status is denied but the petition is approved, the petition is approved for consular notification only — you do not get H-1B status from it, and you must depart, get an H-1B visa, and re-enter. You keep any prior status you still hold, and if cap-gap applied, a 60-day grace period runs from the denial — unless the denial was for a status violation, misrepresentation or fraud, in which case there is no grace period. There is no appeal from a denied change of status request. If both the petition and the request are denied, your options are a still-valid prior status, the 60-day grace period, a timely Form I-539 to another status, a new petition, or departure.",
      },
      {
        question: "Do my dependents need separate applications?",
        answer:
          "Yes. A spouse and unmarried children under 21 change to H-4 status on their own Form I-539 — they are not covered by the worker's I-129 alone. The fee is $470 on paper for the whole family, or $420 per person online. File the I-539s packaged together with the I-129 so USCIS adjudicates them together. Only the spouse may apply for H-4 work authorization, and only with an approved I-140 or AC21 beyond-six-year H-1B status.",
      },
      {
        question: "What is the H-1B registration fee, and is it refunded if I am not selected?",
        answer:
          "The registration fee is $215 per beneficiary, paid by the employer in the March registration window for cap-subject petitions. It is never refunded — not if the beneficiary is not selected, and not if duplicate registrations are invalidated. It is charged only once, at registration; a selected beneficiary's petition does not carry a second registration fee.",
      },
      {
        question: "Does the $100,000 fee apply to change of status?",
        answer:
          "No, not to a change of status USCIS grants for a worker inside the United States. It does apply if USCIS finds the worker ineligible for change of status, or if the worker departs before adjudication. And in practice it is not being collected at all as of November 2026, because a Massachusetts court vacated the implementing guidance and a California court enjoined enforcement under both proclamations, while the government appeals. The proclamations run to September 21, 2027, so the status can change.",
      },
      {
        question: "Can a B-1/B-2 visitor change status to H-1B?",
        answer:
          "The regulation does not bar it — B-1/B-2 is not in the barred categories of 8 CFR 248.2. But a visitor who acts inconsistently with visitor status shortly after entering faces the preconceived-intent problem: State Department guidance says conduct inconsistent with visitor status within 90 days of entry can support a presumption of willful misrepresentation. It is guidance for consular officers, not a USCIS rule. Filing the change-of-status application alone is not enough to trigger the presumption — what matters is conduct inconsistent with visitor status and what the person actually told officers at entry.",
      },
      {
        question: "What is the difference between change of status and consular processing?",
        answer:
          "Change of status happens inside the US: the employer files Form I-129, USCIS approves it with a new I-94 attached, and status changes on the start date without travel — and cap-gap covers the wait for F-1 students. Consular processing happens abroad: the petition is approved for consular notification, the worker gets a visa stamp at a US embassy or consulate, and is admitted in H-1B status. There is no cap-gap on the consular route, and the worker cannot work until admitted.",
      },
    ],
  },
  {
    slug: "h1b-visa-slots-india",
    title: "H-1B Visa Slots in India 2026: Current Wait Times, Why Appointments Vanished, and What to Do",
    excerpt:
      "H-1B visa slots in India are scarce, but the picture is more complicated than the headlines: the official forecast says 1 to 6.5 months by consulate, while the live booking calendar often shows nothing at all. This guide covers the current wait times, the dated timeline of why slots vanished, how booking works now, emergency appointments, and what to do — and what not to do — while you wait.",
    datePublished: "2026-11-07T00:00:00+00:00",
    dateModified: "2026-11-07T00:00:00+00:00",
    readingMinutes: 26,
    tags: ["H-1B Visa Slots", "H-1B Stamping", "India"],
    faqs: [
      {
        question: "Are H-1B visa slots available in India right now?",
        answer:
          "The official forecast says the next petition-based appointment is 1 to 6.5 months away by post, but the live booking calendar often shows no bookable H-1B interview date. There is no official H-1B-only wait time. Book any date you can, then reschedule into cancellations — but remember you get one free reschedule, so check the rescheduling allowance shown in your account before changing an appointment.",
      },
      {
        question: "When will H-1B visa slots open in India?",
        answer:
          "Nobody knows, and no official reopening date exists. The State Department says posts release additional slots regularly, but no weekday pattern has been found and releases are irregular. Check the official portal yourself, at different times of day.",
      },
      {
        question: "How do I check H-1B visa slot availability in India?",
        answer:
          "Two places: the State Department's Global Visa Wait Times table, which gives the official forecast by post, and the official booking portal reached from the embassy or consulate's own visa page. Treat tracker sites and slot-alert apps only as a prompt to check the official portal, and never share your login with one.",
      },
      {
        question: "Can I book my H-1B interview at any consulate in India?",
        answer:
          "For renewals, generally yes — applicants may attend any post regardless of home city, so check all five posts for availability. First-time H and L interviews are principally centralized in Hyderabad, so a first-timer has less choice of post. Book through the portal's family and dependent option if family members are traveling with you, and schedule according to the capacity available.",
      },
      {
        question: "Is Dropbox available for H-1B visa stamping in India?",
        answer:
          "No. Dropbox is the interview-waiver process, and it ended for H-1B and H-4 effective September 2, 2025. Every H-1B renewal now needs an in-person interview, regardless of prior visa history or how recently the last visa expired.",
      },
      {
        question: "Can I get my H-1B stamped in another country?",
        answer:
          "Since September 6, 2025, applicants are told to schedule in their country of nationality or residence. Applying elsewhere may mean it is harder to qualify, significantly longer waits, and fees that are not refunded or transferred. Existing third-country appointments were generally not cancelled.",
      },
      {
        question: "How do I request an emergency appointment?",
        answer:
          "First complete the DS-160, pay the fee, and schedule the first available regular interview. Only then submit an expedited request through the portal, and do not cancel the existing appointment while you wait. Funerals, medical emergencies, urgent business travel and school start dates may support an expedited request, subject to local criteria; weddings, graduations, conferences and tourism do not. A separate Mission India Emergency Request process exists for appointments cancelled in December 2025, with a rebooking window after approval — law-firm summaries describe it as 10 days.",
      },
      {
        question: "How much is the H-1B visa fee in India?",
        answer:
          "The MRV fee is $205, paid in rupees at the consular exchange rate — at the rate in effect on May 25, 2026 (Rs 98 to the dollar), that worked out to Rs 20,090, but treat it as a dated example, not a guaranteed current amount. Indian nationals pay a $0 reciprocity fee. The receipt is valid 365 days to schedule an interview. The $250 Visa Integrity Fee is provided for by statute at issuance — budget for it, but confirm at your post, because collection in India was not independently confirmed.",
      },
      {
        question: "What if my appointment was cancelled?",
        answer:
          "In the December 2025 mass cancellations, interviews were moved to March–April 2026, then to October 2026, then to 2027, while biometrics appointments continued on their original dates. Do not appear on the old date. The Mission India Emergency Request process gives a rebooking window after approval — law-firm summaries describe it as 10 days — and slots may still not be available inside that window. Follow the deadline stated in your approval notice.",
      },
      {
        question: "Do I need to keep my social media public?",
        answer:
          "Yes. Since December 15, 2025, all H-1B applicants and H-4 dependents must set all social-media profiles to public for the online-presence review, and list the handles used in the last five years on the DS-160. Officers do not ask for passwords.",
      },
      {
        question: "Will the $100,000 fee apply to me?",
        answer:
          "Only for certain new petitions: those filed on or after September 21, 2025 for beneficiaries outside the US without a valid H-1B visa, or requesting consular notification. It does not apply where USCIS grants the requested change of status, extension or amendment in the US, and later visa stamping alone does not re-trigger it. Leaving the US while a change-of-status petition is pending converts it to consular notification, which can trigger the fee. In practice it is not being collected at all as of November 2026, because of court orders — but the proclamation runs to September 21, 2027 and appeals are pending.",
      },
      {
        question: "How long is the MRV fee receipt valid?",
        answer:
          "365 days from payment to schedule an interview. The interview itself may fall later if it is booked inside that window. If no interview is scheduled within a year, the receipt expires and the fee must be paid again.",
      },
    ],
  },
  {
    slug: "stem-opt",
    title: "STEM OPT Guide 2026: The 24-Month Extension, How to Apply, and What's Actually Changing",
    excerpt:
      "STEM OPT is still 24 months — no rule has cut it to one year. This guide covers who qualifies, the I-983 training plan, how to file Form I-765, the 150-day unemployment clock, travel, cap-gap, and the 2026 fee proposal and court cases that are actually changing things.",
    datePublished: "2026-11-08T00:00:00+00:00",
    dateModified: "2026-11-08T00:00:00+00:00",
    readingMinutes: 32,
    tags: ["STEM OPT", "OPT", "F-1 Visa"],
    faqs: [
      {
        question: "Is STEM OPT now just one year instead of two?",
        answer:
          "No. STEM OPT is still a 24-month extension, and we found no rule, proposal or bill to cut it to 12 months as of November 8, 2026. The section above explains where the rumor came from — a DHS review letter, a misread fee proposal, and confusion with 12-month non-STEM OPT.",
      },
      {
        question: "How long is STEM OPT?",
        answer:
          "24 months, on top of 12 months of initial post-completion OPT — 36 months of work authorization in total for a STEM graduate who qualifies. It replaced the old 17-month STEM OPT extension in May 2016.",
      },
      {
        question: "Who qualifies for STEM OPT?",
        answer:
          "An F-1 student in a valid period of post-completion OPT who holds a bachelor's, master's or doctoral degree in a field on the DHS STEM list, from an accredited and SEVP-certified school, working at least 20 hours a week in a job directly related to the degree, for an E-Verify employer. Students on OPT from a non-STEM degree may qualify using a previous STEM degree from a U.S. institution, if it was conferred within 10 years of the DSO recommendation and they have not already used a STEM OPT extension on it.",
      },
      {
        question: "When can I apply for STEM OPT?",
        answer:
          "Up to 90 days before your current OPT employment authorization expires, and within 60 days of the date your DSO enters the recommendation into SEVIS. USCIS must receive your Form I-765 no later than your current post-completion OPT end date. You cannot apply during the 60-day grace period after OPT ends.",
      },
      {
        question: "How much does STEM OPT cost?",
        answer:
          "Form I-765 costs $470 if you file online and $520 if you file on paper, from the USCIS Fee Schedule. Premium processing (Form I-907) is an optional $1,780, and USCIS must take adjudicative action within 30 business days — it does not guarantee approval or EAD delivery within that period. The proposed $70,000 OPT fee is covered in the question below.",
      },
      {
        question: "What is the I-983 training plan?",
        answer:
          "A formal training plan you complete with your employer before your DSO can recommend the extension. It states your learning objectives, how the training will achieve them, how your performance will be evaluated, and your employer's attestations. You complete Section 1 and sign the student certification in Section 2, and your employer completes Section 3 and signs the certifications in Sections 4 and 6; Section 5, the training plan itself, is completed by you and your employer together. Your DSO reviews it for completeness but does not approve it. The full breakdown, including the 12- and 24-month evaluations and the new-employer rule, is in the I-983 Training Plan section above.",
      },
      {
        question: "Can I be self-employed on STEM OPT?",
        answer:
          "No. You cannot be self-employed on STEM OPT, and you cannot work on a volunteer or unpaid basis. The employer signing the I-983 must be a separate entity that employs you and provides the training. You can work for a start-up or small business if all the requirements are met.",
      },
      {
        question: "How many days of unemployment am I allowed on STEM OPT?",
        answer:
          "150 days in total across your whole OPT period — 90 days on initial OPT plus 60 more on STEM OPT, counted cumulatively. If you used 40 days before your first job, you have 110 left, not 150. Exceeding the limit violates your F-1 status.",
      },
      {
        question: "Can I travel on STEM OPT?",
        answer:
          "Yes, with your EAD in hand, an I-20 endorsed for travel and signed by your DSO, a valid passport and a valid F-1 visa. Universities advise the travel signature is valid for six months on OPT or STEM OPT. Avoid traveling while your I-765 is pending, and never travel while a change-of-status petition is pending — that abandons the change of status.",
      },
      {
        question: "Can I get a second STEM OPT extension?",
        answer:
          "Yes, if you earn another qualifying STEM degree at a higher educational level and are in a valid period of post-completion OPT based on that degree. Each extension needs a fresh I-983, a fresh DSO recommendation and a fresh Form I-765. A second degree at the same level does not qualify.",
      },
      {
        question:
          "What happens to my STEM OPT if my H-1B petition is picked in the lottery?",
        answer:
          "If your employer files a timely cap-subject H-1B petition requesting a change of status while you are on OPT or STEM OPT, cap-gap automatically extends your F-1 status and your work authorization until April 1 of the fiscal year, or the validity start date of the approved petition, whichever is earlier. No new EAD is issued — your proof is an updated I-20 with a cap-gap notation. Do not travel abroad before the change-of-status petition is approved.",
      },
      {
        question: "Does the proposed $70,000 OPT fee apply to me now?",
        answer:
          "No. It is only a proposal, published October 8, 2026, with comments due November 9, 2026 — there is no final rule, no effective date, and nothing is owed today. If it ever takes effect, the school would pay it before recommending you, not you. The full proposal is in the 2026 rules tracker above.",
      },
    ],
  },
];

export function getBlogPost(slug: string): BlogPostMeta | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getAllBlogSlugs(): string[] {
  return blogPosts.map((p) => p.slug);
}

export interface AuthorInfo {
  name: string;
  slug: string;
  role: string;
  image: string;
  path: string;
  bioShort: string;
  bioLong: string[];
  sameAs: string[];
}

export const AUTHOR: AuthorInfo = {
  name: "Muhammad Talha",
  slug: "muhammad-talha",
  role: "Founder, HireSkys",
  image: "/muhammad-talha.jpg",
  path: "/author/muhammad-talha",
  bioShort:
    "Founder of HireSkys. Muhammad Talha built VisaTalentUSA on official U.S. Department of Labor H-1B disclosure data — so international professionals can find real visa sponsors, real salaries, and honest lottery odds instead of rumors.",
  bioLong: [
    "Muhammad Talha is the founder of HireSkys, the remote-jobs platform behind VisaTalentUSA. He built VisaTalentUSA to turn the U.S. Department of Labor's public H-1B disclosure files — millions of Labor Condition Application records — into a searchable database anyone can use.",
    "His work focuses on the data behind U.S. work visas: which employers actually sponsor H-1B workers, what they pay, how wage levels affect the lottery, and how policy changes — the wage-weighted selection rule, the $100,000 fee — show up in real filing behavior. Every guide on this site is written from that filing data and checked against official USCIS and Department of Labor sources.",
  ],
  sameAs: ["https://www.hireskys.com"],
};
