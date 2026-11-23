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

- [x] /written-tenant-screening-criteria-by-state/  (2026-11-23: ORS 90.295(3),(6); RCW 59.18.257(1)-(3); Minn. Stat. 504B.173; Cal. Civ. 1950.6(c). Local ordinances not reviewed)
- [x] /screening-guarantors-and-co-signers/  (2026-11-23: Cal. Civ. 1950.6(j); RCW 59.18.257(1)(c) form; 15 U.S.C. 1681b(a)(2); TurboTenant, RentRedi, SmartMove help/product pages)
- [x] /tenant-screening-without-ssn-itin/  (2026-11-23: SmartMove FAQs, TurboTenant IDV, RentRedi ITIN + manual verification, Rentec Q&A, Avail article; ORS 90.306; Cal. Civ. 1940.3; 42 U.S.C. 3604(a). RentPrep left out: no ITIN statement found on its own pages)
- [x] /rent-reporting-services-compared/  (2026-11-23: TurboTenant, RentRedi (incl. landlord-paid), Avail CreditBoost, Innago (affiliate); Cal. Civ. 1954.07)
- [x] /medical-debt-on-tenant-credit-reports/  (2026-11-23: Equifax joint release 4/11/2023, TransUnion 7/1/2022 release; NY S4907-A ch. 727 of 2023 (GBL 380-j) via nyassembly.gov because nysenate.gov blocked our fetch; Minn. 332C.03 + 332C.01; Cal. Civ. 1785.27. Colorado HB23-1126 page timed out, not included)

Next up:
1. Remaining fee-cap states, a batch of 5-6 each (start with NJ, IL, PA, TX, FL, GA, DC). (update to an existing page, not a new page)
2. Reusable reports, more states: review remaining states (start with MD, IL, NJ, MA, OR) for reusable/portable report rules and add to /reusable-tenant-screening-reports-by-state/. (update to an existing page)
3. Phased screening, part 2: Ann Arbor, Berkeley, Detroit, Oakland, Maryland, Montgomery County MD (primary-source review; add to /phased-tenant-screening-jurisdictions/ or a follow-up page). (update to an existing page)
4. Eviction record portals, more states: MD, NY, VA, MI, NC, IA, CT, AZ, IN (confirm coverage from court pages; extend /eviction-records-official-court-portals/). (update to an existing page)
5. Screening without a credit check: verifying income, landlord references and court records yourself, and what the law requires either way. (X, 2026-11-20 "no credit check, verify job and court records") [2026-11-22: deferred, not published: mostly practice advice; needs primary sources (statutes/agency pages) for what a landlord-run check must follow before it can be a sourced page]
6. Sealed and masked eviction records: what sealing/settlement means for the landlord and what a screening report may still show (CA 1161.2, MN 484.014, WA 59.18.367 and others). (X, 2026-11-19/20: "why do landlords agree to sealing?", LA landlords unable to find pending cases) [2026-11-22: deferred: overlaps the legal-limits section of /eviction-records-official-court-portals/; make it a distinct page only with new states or the screening-company side (FTC/CFPB v. TransUnion order on sealed records: https://search.ftc.gov/system/files/ftc_gov/pdf/tu_turss_order_final.pdf)]
7. Previous-landlord references and verification of rent: what you can ask, and when a third-party reference check becomes a consumer report under the FCRA. (X, 2026-11-16/20: VOR services, "call the landlord BEFORE the current one")
8. Source-of-income and housing voucher rules by state: where refusing Section 8 / voucher holders is barred, and how income minimums apply to the tenant share. (X, 2026-11-18 voucher threads)
9. Renters checking their own screening file before applying: how to get free file disclosures from tenant screening companies (TransUnion SmartMove, CoreLogic, RealPage and others) from their own pages. (X, 2026-11-18: "check your rental history report before you apply")
10. AI leasing agents and automated screening decisions: what existing law already requires (FCRA adverse action, state rules) when software recommends approve/deny. (X, 2026-11-21: Raleigh tenant told by a landlord's AI she could pay Nov 30, evicted Nov 19)
11. Income-to-rent ratio rules ("3x the rent"): jurisdictions that limit minimum income requirements or require counting vouchers and other income, from the ordinances themselves. (X, 2026-11-20: "verify income with documents, not words")
12. Charging a per-person "background check" fee and never running it: refund rules when the landlord doesn't screen (OR 90.295(5), MN 504B.173 subd. 2(b), CA 1950.6(e), WA 59.18.257(1)(b)) and what an applicant can recover. (X, 2026-11-20: reply to @MayorofSeattle about $100-per-person background checks never run before a denial)
13. Fake and "real but meaningless" pay stubs: how payroll-connected income verification and document-fraud tools work (Snappt, VeriFast, Plaid-based checks) from the providers' own pages, and what the landlord actually receives. (X, 2026-11-21: VeriFast on companies created only to issue pay stubs; 2026-11-20: apply-with-mobile-ID/payroll thread)
14. "Is it illegal to run credit or background checks in California?": what state law actually limits (fee cap 1950.6, voucher-holder credit rules, criminal-history limits) and which city ordinances add more, from the codes. (X, 2026-11-21: "in some states (like my home state of CA), it's illegal to do background or credit checks")
15. Landlords reporting unpaid rent or move-out balances to credit bureaus (FrontLobby-type services): FCRA furnisher duties (15 U.S.C. 1681s-2), positive-only vs negative reporting, and state limits, from the statutes and the services' own pages. (X, 2026-11-22: FrontLobby landlord rent-reporting ad)
16. How long tenant screening takes, provider by provider: report turnaround, identity-verification failures, manual TransUnion verification (24-48 hours per RentRedi) and report expiration (Rentec: 90 days credit, 14 days income). (X, 2026-11-19: "How long does a tenant background check take?")
