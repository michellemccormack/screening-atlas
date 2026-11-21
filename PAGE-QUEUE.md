# Page queue (Screening Atlas)

Five pages per night, top to bottom (keep at least 15 queued). Rules: every factual claim gets a source link;
anything not confirmed on a primary or provider page gets the <Unverified/> badge;
affiliate links use <Aff id="..."/> placeholders until programs are approved.

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

Next up:
1. Remaining fee-cap states, a batch of 5-6 each (start with NJ, IL, PA, TX, FL, GA, DC).
2. SmartMove coverage-by-state pages (criminal + eviction availability per state from the TransUnion disclaimer).
3. Reusable reports, more states: review remaining states (start with MD, IL, NJ, MA, OR) for reusable/portable report rules and add to /reusable-tenant-screening-reports-by-state/.
4. Phased screening, part 2: Ann Arbor, Berkeley, Detroit, Oakland, Maryland, Montgomery County MD (primary-source review; add to /phased-tenant-screening-jurisdictions/ or a follow-up page).
5. Eviction record portals, more states: MD, NY, VA, MI, NC, IA, CT, AZ, IN (confirm coverage from court pages; extend /eviction-records-official-court-portals/).
6. Adverse action notices: what a landlord must send after denying (or raising the deposit) based on a screening report; FCRA 615(a) from FTC/CFPB pages. (X, 2026-11-21: "if a screening report sank you, the landlord must name the company")
7. Bank-linked income verification (Plaid etc.): what the landlord actually sees in each provider's income report. (X, 2026-11-20: applicant asking what landlords see when they log in through Plaid)
8. Prepaid / advance rent limits by state: can you accept months of rent up front, and what caps apply (e.g. NY one-month cap). (X, 2026-11-19/20 threads on applicants offering 6 months upfront)
9. Screening without a credit check: verifying income, landlord references and court records yourself, and what the law requires either way. (X, 2026-11-20 "no credit check, verify job and court records")
10. Sealed and masked eviction records: what sealing/settlement means for the landlord and what a screening report may still show (CA 1161.2, MN 484.014, WA 59.18.367 and others). (X, 2026-11-19/20: "why do landlords agree to sealing?", LA landlords unable to find pending cases)
11. Holding deposits and "administrative fees" vs application fees: which states regulate each. (X, 2026-11-20: applicant charged $75 application + $150 admin + $45 screening)
12. Applicants without an SSN (ITIN, new arrivals): which screening providers can run reports without an SSN, and state rules like ORS 90.306.
13. Medical debt and tenant credit reports: what the bureaus and screening providers currently exclude, from their own pages. (X, 2026-11-20: denial over a 520 score from medical debt)
14. Rent reporting for tenants: which platforms report rent to which bureaus, at what fee, and who pays (TurboTenant, RentRedi, Avail CreditBoost). (X, 2026-11-20: renter with 36 months on-time rent and thin credit)
15. Guarantors and co-signers: can you screen and charge a guarantor, and how each provider handles guarantor reports.
