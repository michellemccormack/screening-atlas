# Page queue (Screening Atlas)

Five pages per night, top to bottom (keep at least 15 queued). Rules: every factual claim gets a source link.
Published pages must not show internal notes: no "unverified" or "affiliate link pending" badges, and no "Not captured" or "TODO" text. If a figure is missing, use an em dash (—) in the table cell; never invent a value. Only approved affiliate programs show the small "affiliate link" tag (add the id to the approved set in Aff.astro and use the tracking href). Unapproved <Aff/> links render as ordinary outbound links. Keep [source] citation links.

Live / built:
- [x] /application-fee-caps-by-state/  (15 states reviewed, 36 incl. DC listed as "not yet reviewed")
- [x] /tenant-screening-report-comparison/
- [x] /turbotenant-no-criminal-records-available/
- [x] /reusable-tenant-screening-reports-by-state/  (2026-11-19: CO, WA, CA, NY, RI, WI; other states not yet reviewed)
- [x] /alternatives-to-zillow-rental-manager-screening/  (2026-11-20: Zillow, Apartments.com, Avail + the 5 providers on the comparison page; unverified: Zillow vendor CIC vs Checkr, Zillow help-center exclusions, Rentec who-pays)
- [x] /oregon-tenant-screening-rules/  (2026-11-21: ORS 90.295, 90.297, 90.303, 90.304, 90.306 from the official 2025 ORS; local OR ordinances not reviewed)
- [x] /tenant-screening-cost-calculator/  (2026-11-21: static JS; prices re-checked on SmartMove, TurboTenant, RentRedi, Rentec, RentPrep pages; Rentec who-pays unverified)
- [x] /rent-collection-app-fees/  (2026-11-21: TurboTenant, RentRedi, Rentec Direct, Avail. SmartMove left out: screening only. Unverified: Rentec default fee payer, Avail payout days; Rentec pages conflict on ACH "free")
- [x] /eviction-records-official-court-portals/  (2026-11-21: portals PA, WI, MN, MA, WA, MO; legal limits CA, MN, WA, WI, OR. MO case types unverified. MD/NY/VA/AZ/IN portals blocked our fetch, not added)
- [x] /phased-tenant-screening-jurisdictions/  (2026-11-21: Cook County, DC, NYC, NJ from primary sources; Ann Arbor, Berkeley, Detroit, Oakland, MD, Montgomery Co. listed as not yet reviewed)
- [x] /smartmove-criminal-eviction-coverage-by-state/  (2026-11-22: queue item "SmartMove coverage by state" done as one 50-state + DC table, not per-state pages; criminal list rev. 1/14/2026, eviction list rev. 8/12/2026 + county PDF 2026-08-12, phased notice rev. 10/1/2026)
- [x] /adverse-action-notice-tenant-screening/  (2026-11-22: 15 U.S.C. 1681m(a), 1681a(k), 1681j(b), 1681g(f) from govinfo; WA RCW 59.18.257; OR ORS 90.304; SmartMove template page. The FTC "What Landlords Need to Know" page now 404s, so statute text used instead)
- [x] /bank-linked-income-verification-what-landlords-see/  (2026-11-22: RentRedi/Plaid, TurboTenant/Snappt, SmartMove Income Verification + Income Estimator, from their help/product pages. Avail left out: no landlord-facing income report description found)
- [x] /prepaid-rent-limits-by-state/  (2026-11-22: CA Civ 1950.5, MA c.186 15B, NY AG Residential Tenant's Rights Guide, HI 521-44, OR 90.100/90.300. NY statute page (nysenate.gov) blocked our fetch, so the AG guide is cited)
- [x] /holding-deposits-and-admin-fees-by-state/  (2026-11-22: WA 59.18.253, OR 90.297, CA 1950.5(b), MA 15B(1)(b), HI 521-44(b), NY AG guide)

Next up:
1. Remaining fee-cap states, a batch of 5-6 each (start with NJ, IL, PA, TX, FL, GA, DC). (update to an existing page, not a new page)
2. Reusable reports, more states: review remaining states (start with MD, IL, NJ, MA, OR) for reusable/portable report rules and add to /reusable-tenant-screening-reports-by-state/. (update to an existing page)
3. Phased screening, part 2: Ann Arbor, Berkeley, Detroit, Oakland, Maryland, Montgomery County MD (primary-source review; add to /phased-tenant-screening-jurisdictions/ or a follow-up page). (update to an existing page)
4. Eviction record portals, more states: MD, NY, VA, MI, NC, IA, CT, AZ, IN (confirm coverage from court pages; extend /eviction-records-official-court-portals/). (update to an existing page)
5. Screening without a credit check: verifying income, landlord references and court records yourself, and what the law requires either way. (X, 2026-11-20 "no credit check, verify job and court records") [2026-11-22: deferred, not published: mostly practice advice; needs primary sources (statutes/agency pages) for what a landlord-run check must follow before it can be a sourced page]
6. Sealed and masked eviction records: what sealing/settlement means for the landlord and what a screening report may still show (CA 1161.2, MN 484.014, WA 59.18.367 and others). (X, 2026-11-19/20: "why do landlords agree to sealing?", LA landlords unable to find pending cases) [2026-11-22: deferred: overlaps the legal-limits section of /eviction-records-official-court-portals/; make it a distinct page only with new states or the screening-company side (FTC/CFPB v. TransUnion order on sealed records: https://search.ftc.gov/system/files/ftc_gov/pdf/tu_turss_order_final.pdf)]
7. Applicants without an SSN (ITIN, new arrivals): which screening providers can run reports without an SSN, and state rules like ORS 90.306.
8. Medical debt and tenant credit reports: what the bureaus and screening providers currently exclude, from their own pages. (X, 2026-11-20: denial over a 520 score from medical debt)
9. Rent reporting for tenants: which platforms report rent to which bureaus, at what fee, and who pays (TurboTenant, RentRedi, Avail CreditBoost). (X, 2026-11-20: renter with 36 months on-time rent and thin credit)
10. Guarantors and co-signers: can you screen and charge a guarantor, and how each provider handles guarantor reports.
11. Written screening criteria: where you must give or post your criteria before taking an application or fee (OR ORS 90.295(3), WA RCW 59.18.257(1)(a), others), and what must be in it. (X, 2026-11-18/20: "write your screening rules down before you list", "same written criteria for every applicant")
12. Previous-landlord references and verification of rent: what you can ask, and when a third-party reference check becomes a consumer report under the FCRA. (X, 2026-11-16/20: VOR services, "call the landlord BEFORE the current one")
13. Source-of-income and housing voucher rules by state: where refusing Section 8 / voucher holders is barred, and how income minimums apply to the tenant share. (X, 2026-11-18 voucher threads)
14. Renters checking their own screening file before applying: how to get free file disclosures from tenant screening companies (TransUnion SmartMove, CoreLogic, RealPage and others) from their own pages. (X, 2026-11-18: "check your rental history report before you apply")
15. AI leasing agents and automated screening decisions: what existing law already requires (FCRA adverse action, state rules) when software recommends approve/deny. (X, 2026-11-21: Raleigh tenant told by a landlord's AI she could pay Nov 30, evicted Nov 19)
16. Income-to-rent ratio rules ("3x the rent"): jurisdictions that limit minimum income requirements or require counting vouchers and other income, from the ordinances themselves. (X, 2026-11-20: "verify income with documents, not words")
