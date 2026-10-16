# VERSO Card Database Audit Report

**Date:** 2026-05-18
**Database file:** `D:\Code\card-optimizer\cards.json`
**Cards audited:** ~40 of 98 (focus on widely-held cards + spot-checks on others)
**Note:** Treat all percentages as the "effective cashback" representation used in cards.json (e.g. 4 mpd ≈ 7.2% at 1.8c/mile). Do not modify cards.json — review and apply selectively.

---

## High-confidence changes (verified on official bank page)

### HSBC Revolution Card (`hsbc-revolution`)
- **Currently in cards.json:** Type=Cashback. 4% dining/online/contactless cashback; dining cap $40; no min spend.
- **Actual (2026):** 4 mpd (~7.2%) on online + contactless across dining, shopping, ride-hailing, entertainment, travel. Permanent rate as of 1 April 2026. Capped at S$1,500 bonus spend/mo (~10,800 miles or ~$108 in miles value).
- **Source:** https://www.hsbc.com.sg/credit-cards/products/revolution/
- **Notes:** Card should arguably be re-typed as Miles. Cap is across categories combined, not per category.

### DBS Live Fresh Card (`dbs-live-fresh`)
- **Currently in cards.json:** fee $194.40; 5% across six categories; cap $20/cat; min $600/mo.
- **Actual (2026):** Fee S$196.20 (5-year waiver). Min S$800/mo. Up to 6% on Shopping & Transport only (shopping cap S$50/mo, transport cap S$20/mo). Additional 3.25% on selected Asia overseas POS.
- **Source:** https://www.dbs.com.sg/personal/cards/credit-cards/live-fresh-dbs-visa-paywave-platinum-card

### DBS Woman's World Card (`dbs-womans-world`)
- **Currently in cards.json:** cap online $144 (10X on $2,000/mo).
- **Actual (2026):** From Aug 2025 the cap was cut from S$2,000 → S$1,000/mo of bonus spend. New 4 mpd cap is on S$1,000/mo. Cards.json value of $144 should be ~$72 (4 mpd × $1,000 × 1.8c).
- **Source:** https://www.dbs.com.sg/personal/cards/credit-cards/dbs-woman-mastercard-card

### DBS Vantage Card (`dbs-vantage`)
- **Currently in cards.json:** "6 mpd overseas dining" highlight; travel 10.8% (~6 mpd); dining 3.6% (2 mpd); fee $650.
- **Actual (2026):** 1.5 mpd local, 2.2 mpd overseas (flat). No 6 mpd dining category exists. Fee S$599.50. Critically: the S$60,000-spend annual fee waiver ENDS 1 Aug 2026 — fee becomes strictly non-waivable.
- **Source:** https://www.dbs.com.sg/personal/cards/credit-cards/dbs-vantage-visa-infinite-card

### DBS Altitude (Visa and AMEX) (`dbs-altitude`)
- **Currently in cards.json:** "3 mpd travel" highlight; travel 5.4%; fee $192.60.
- **Actual (2026):** 1.3 mpd local, 2.2 mpd overseas (Visa version). AMEX version same. Fee S$196.20. S$25,000-spend waiver ENDS 1 Aug 2026. Travel portal 3 mpd remains.
- **Source:** https://www.dbs.com.sg/personal/cards/credit-cards/dbs-altitude-cards

### POSB Everyday Card (`posb-everyday`)
- **Currently in cards.json:** 5% across 6 categories; cap $20/cat; min $800/mo.
- **Actual (2026):** Materially different structure: 10% on SimplyGo, online food delivery, MYR offline spend. 5% dining + Lazada/Shopee. 5% Sheng Siong + Redmart (each capped Daily$20/mo). Telco 3% (min $800). Electricity 2-3% (varies). Overall monthly cap S$30 on rebates. SPC fuel 20.1%.
- **Source:** https://www.posb.com.sg/personal/cards/credit-cards/posb-everyday-card

### UOB One Card (`uob-one`)
- **Currently in cards.json:** 10% dining; cap $50/cat; min $500/mo; "5 txns + $500/mo + salary credit".
- **Actual (2026):** Up to 10% on McDonald's, Grab, SimplyGo, Shopee. Up to 8% on groceries. Up to 4.33% SP Group bills. Tiered min spend S$600/$1,000/$2,000 monthly across the full quarter, plus ≥10 txns/mo. Quarterly cashback caps S$60/S$100/S$200 (not per-category monthly).
- **Source:** https://www.uob.com.sg/personal/cards/cashback/one-card.page

### UOB PRVI Miles (`uob-prvi-miles`)
- **Currently in cards.json:** fee $256.80.
- **Actual (2026):** Visa fee S$261.60 (first year waived). Earn rates: 1.4 mpd local, 2.4 mpd FCY, 3 mpd in IDR/MYR/THB/VND, up to 8 mpd Agoda. Cards.json travel of 10.8% (~6 mpd) appears stale.
- **Source:** https://www.uob.com.sg/personal/cards/travel/prvi-miles-card.page

### UOB Lady's Card (`uob-ladys`)
- **Currently in cards.json:** 7.2% dining/groceries (4 mpd), 1.6% other; caps dining/groceries $72; "4 mpd dining, beauty".
- **Actual (2026):** Earn up to 10 mpd (25X UNI$ per S$5) on enrolled preferred category (selectable: Dining, Family, Fashion, Beauty & Wellness, Travel, Transport, Entertainment). Cap is first S$1,000/mo per category (max 10,000 bonus miles/mo ≈ $180 value). Above cap = 0.4 mpd. No longer pre-set to dining/groceries.
- **Source:** https://www.uob.com.sg/personal/cards/rewards/ladys-card/index.page

### UOB EVOL Card (`uob-evol`)
- **Currently in cards.json:** caps $20 across dining/groceries/transport/contactless/entertainment; min $600/mo. Multiple 8% categories.
- **Actual (2026):** Min S$800/mo. 10% on local online + mobile contactless (Apple/Google/Samsung Pay) + selected gym/telco/streaming. Caps: S$30 online+mobile contactless, S$20 gym/telco/streaming, S$30 other = S$80 total/mo. No dining/groceries bonus. 0% FX + 1% cashback overseas till 31 Dec 2026.
- **Source:** https://www.uob.com.sg/personal/cards/cashback/evol-card/index.page

### UOB Visa Signature (`uob-visa-sig`)
- **Currently in cards.json:** 10X UNI$ on dining/entertainment/travel/online; caps $80 each; fee $256.80.
- **Actual (2026):** Card is now overseas + petrol focused. 4 mpd on overseas spend, requires S$1,000+ overseas spend/statement period, capped UNI$2,400 bonus ≈ S$120 cashback or 4,800 miles. No longer earns 10X on local dining/online/entertainment.
- **Source:** https://www.uob.com.sg/personal/cards/travel/visa-signature-card.page

### UOB KrisFlyer Card (`uob-krisflyer`)
- **Currently in cards.json:** 2 KF mpd dining/travel; 1.6% local base.
- **Actual (2026):** From 1 Jun 2025: 2.4 KF mpd on dining, food delivery, online shopping, online travel, transport (was 3 mpd at launch). 3 KF mpd on SIA/Scoot/KrisShop/Kris+/Pelago. 1.2 KF mpd base. Bonus categories require min annual spend.
- **Source:** https://www.uob.com.sg/personal/cards/travel/krisflyer-card.page

### UOB Preferred Platinum Visa (`uob-preferred-plat`)
- **Currently in cards.json:** dining 4% (10X UNI$), cap $80.
- **Actual (2026):** Card was renamed to "UOB Preferred Visa Card" effective 10 March 2026. 10X UNI$ on selected online + mobile contactless transactions. Combined cap UNI$2,000/mo across both categories ≈ $40 cashback or 4,000 miles. Note: dining bonus is online-only; in-store dining no longer eligible.
- **Source:** https://www.uob.com.sg/personal/cards/rewards/preferred-visa-card.page

### OCBC 365 Card (`ocbc-365`)
- **Currently in cards.json:** dining 6%; petrol 1%; cap $80; min $800/mo.
- **Actual (2026):** Dining 5% (was 6%). Fuel 6% (cards.json shows 1%). 3% on groceries, land transport, online travel, recurring telco/electricity bills. Cap S$80 at S$800 min, OR S$160 at S$1,600 min spend.
- **Source:** https://www.ocbc.com/personal-banking/cards/365-cashback-credit-card

### OCBC FRANK Card (`ocbc-frank`)
- **Currently in cards.json:** 6% online; cap $25; min $400/mo.
- **Actual (2026):** 8% online (10% at selected green merchants — 2% bonus). Min S$800/mo. Cap S$25/cat, S$100/mo total.
- **Source:** https://www.ocbc.com/personal-banking/cards/ocbc-frank-credit-card

### OCBC Titanium Rewards (`ocbc-titanium`) / OCBC Rewards (`ocbc-rewards`)
- **Currently in cards.json:** Two separate cards. Titanium: 10X VOYAGE$; Rewards: 15 OCBC$ at Watsons (~2.7%).
- **Actual (2026):** Titanium Rewards renamed to "OCBC Rewards Card" — they are now one product. Earn 10X OCBC$ (~4 mpd or ~7.2% miles value) on online + Watsons, capped 10,000 OCBC$/mo. Promo till 30 Jun 2026: 15 OCBC$ (~6 mpd) at Watsons + Lazada/Shopee/Taobao/TikTok Shop. Fee waived 2 yrs; subsequent waivers need S$10,000 annual spend.
- **Source:** https://www.ocbc.com/personal-banking/cards/rewards-card

### OCBC Voyage (`ocbc-voyage`)
- **Currently in cards.json:** 2.2 VOYAGE miles/$1 overseas (~4%); fee $194.40.
- **Actual (2026):** Fee S$498 (NOT $194.40). Fee not waived in year 1. Waivable at S$30k annual spend. 2.2 mpd overseas, 1.3 mpd local. 3.25% FX fee. S$25 conversion fee per redemption.
- **Source:** https://www.ocbc.com/personal-banking/cards/voyage-credit-card.page

### Citi Cash Back Card (`citi-cashback`)
- **Currently in cards.json:** 8% dining/groceries/petrol; cap $25/cat; min $800/mo.
- **Actual (2026):** 8% dining + groceries; 7.8% private commute + petrol "worldwide" (effectively close to 8%). Cap is COMBINED S$80/statement month across all categories (not $25/cat). Min S$800 retained. Fee S$196.20.
- **Source:** https://www1.citibank.com.sg/credit-cards/cashback/citi-cash-back-card/

### Citi Rewards Card (`citi-rewards`)
- **Currently in cards.json:** 4 mpd dining & online (~7.2%); cap $72 each.
- **Actual (2026):** 4 mpd on online grocery, online food delivery, ride-hailing, online + in-store shopping. Bonus capped at 9,000 points/statement month (S$1,000 of eligible spend). Note: in-store dining is NOT a 4 mpd category anymore — only online food delivery.
- **Source:** https://www.citibank.com.sg/credit-cards/rewards/citi-rewards-card/

### Citi PremierMiles Card (`citi-premiermiles`)
- **Currently in cards.json:** 0.4 mpd local; 2 mpd overseas; fee $194.40.
- **Actual (2026):** 1.2 mpd local (~2.2%) — was raised. 2.2 mpd overseas. Fee S$196.20. 10,000 miles for paying annual fee at renewal.
- **Source:** https://www.citibank.com.sg/credit-cards/airmiles/citi-premiermiles-card/

### Citi Prestige Card (`citi-prestige`)
- **Currently in cards.json:** fee $535; "2 mpd overseas".
- **Actual (2026):** Fee raised to S$651.82 (July 2025). Renewal miles raised 25k → 32k. Lounge visits now capped at 12/yr (was unlimited). Citi travel insurance discontinued Mar 2025. Citi-to-GrabCoin transfers ended 1 Mar 2026.
- **Source:** https://www.citibank.com.sg/credit-cards/rewards/prestige-credit-card/

### Citi SMRT Card (`citi-smrt`)
- **Currently in cards.json:** 5% transport only; no min spend; cap $25.
- **Actual (2026):** 5% on SimplyGo + online groceries, online shopping, ride-hailing. Min S$500/mo. Cap S$25/cat. EZ-Link auto top-ups no longer earn rewards.
- **Source:** https://www.citibank.com.sg/credit-cards/cashback/smrt-credit-card

### HSBC Live+ Card (`hsbc-live`)
- **Currently in cards.json:** 3% across six categories; cap $20/cat; min $600/mo.
- **Actual (2026):** Up to 8% (5% base + 3% bonus) on dining/shopping/entertainment ONLY (3 categories, not 6) — for new cards issued 1 Apr 2025–31 Mar 2027. Existing: 5%. Min S$1,000/mo for 8% tier; S$600/mo for 5% tier. Cap S$250/quarter total (not per category).
- **Source:** https://www.hsbc.com.sg/credit-cards/products/liveplus/
- **Notes:** Card was renamed from "HSBC Visa Platinum" to "Live+" in June 2024.

### HSBC TravelOne Card (`hsbc-travelone`)
- **Currently in cards.json:** local "2 mpd" (treated 2%); "0% FX markup" claim.
- **Actual (2026):** 1.2 mpd local (~2.2%) — local rate is lower than cards.json. 2.4 mpd overseas (4.3%). Card DOES charge 3.25% FX fee (the "0% FX markup" in cards.json highlight is wrong).
- **Source:** https://www.hsbc.com.sg/credit-cards/products/travelone/

### Standard Chartered Smart Card (`sc-smart`)
- **Currently in cards.json:** 5% on dining/grocery/petrol/transport/telco; cap $15/cat; min $500/mo.
- **Actual (2026):** Up to 10% on 3 categories ONLY (Smart Dining, Smart Streaming, Smart Transport). Petrol/groceries/telco removed. Min S$800/mo for bonus (below = 0.5% only).
- **Source:** https://www.sc.com/sg/credit-cards/smart-credit-card/

### Standard Chartered Journey Card (`sc-journey`)
- **Currently in cards.json:** 5.4% transport + groceries (3 mpd); fee $180.
- **Actual (2026):** Up to 3 mpd on online transport, grocery, food delivery — capped at S$1,000 spend/mo (= 3,000 bonus miles cap per statement cycle). 2 mpd on online grocery alone (within same cap). 1.2 mpd local base, 2 mpd overseas. Fee S$196.20. 10,000 miles renewal bonus on paying annual fee (from 1 Jul 2024).
- **Source:** https://www.sc.com/sg/credit-cards/journey-credit-card/

### Standard Chartered Visa Infinite (`sc-visa-inf`)
- **Currently in cards.json:** 3 mpd overseas (~5.4%); fee $588.50.
- **Actual (2026):** 3 mpd FCY only with min S$2,000/statement cycle, otherwise 1 mpd. 3.5% FX fee (highest in Singapore market). Fee ~S$600 inc GST, strictly non-waivable.
- **Source:** https://www.sc.com/sg/credit-cards/visa-infinite-card/

### Maybank Family & Friends (`maybank-ff`)
- **Currently in cards.json:** 8% weekend dining (Fri-Sun); min $500/mo; cap $25/cat.
- **Actual (2026):** Materially changed 1 Jan 2026. NO weekend-only restriction. Tier 1: 6% (min S$800; cap S$20/cat). Tier 2: 8% (min S$1,600; cap S$30/cat). Pick 5 of 10 preferred categories (dining/food delivery, groceries, beauty & wellness, etc.). Groceries cap S$500 of spend at 6%.
- **Source:** https://www.maybank2u.com.sg/en/personal/cards/credit/maybank-family-and-friends-mastercard.page

### Maybank Horizon Visa Signature (`maybank-horizon`)
- **Currently in cards.json:** 3.2 mpd overseas (~5.8%); no min spend.
- **Actual (2026):** 2.8 mpd overseas, NOT 3.2 mpd. Requires min S$800/mo. 3.25% FCY fee (eff. miles cost ~1.22c). Promo of 3.2 mpd on selected FCY exists but is promotional, not base.
- **Source:** https://www.maybank2u.com.sg/en/personal/cards/credit/maybank-horizon-visa-signature-card.page

### AMEX KrisFlyer Ascend (`amex-kf-ascend`)
- **Currently in cards.json:** fee $195; "3 KF mpd SIA"; 2 KF mpd dining.
- **Actual (2026):** Fee S$397.85. 1.2 KF mpd local and FCY (base). 2 mpd on SIA/Scoot bookings + Grab (cap S$200/mo). 10,000 KF renewal voucher + 18,000 KF for S$10k FCY spend. Dining bonus no longer exists.
- **Source:** https://www.americanexpress.com/sg/credit-cards/singapore-airlines-krisflyer-ascend-credit-card/

### AMEX True Cashback (`amex-true-cb`)
- **Currently in cards.json:** fee $0; 1.5% unlimited.
- **Actual (2026):** Base rate 1.5% confirmed. BUT annual fee is S$174.40 (waived first year). cards.json incorrectly shows $0. Welcome 3% for first 6 months up to S$5k.
- **Source:** https://www.americanexpress.com/sg/credit-cards/true-cashback-card/

### CIMB Visa Signature (`cimb-visa-sig`)
- **Currently in cards.json:** 10% dining only; min $500/mo; cap $30/mo.
- **Actual (2026):** Card NO LONGER offers dining cashback. 10% on online shopping, groceries, beauty/wellness, pet shops/vet, cruises. Min S$800/mo. Cap S$100/mo total, max S$20/category. 0.2% beyond cap.
- **Source:** https://www.cimb.com.sg/en/personal/banking-with-us/cards/credit-cards/cimb-visa-signature.html

### CIMB World Mastercard (`cimb-world-mc`)
- **Currently in cards.json:** 2% overseas only; other 0.2%.
- **Actual (2026):** 2% on dining, online food delivery, movies, digital entertainment, taxi/ride-hailing, automobile, luxury goods. 1% all other (min S$500/mo for the 1% tier). FCY also gets 2%. So this is a 2% lifestyle card now, not overseas-only.
- **Source:** https://www.cimb.com.sg/en/personal/banking-with-us/cards/credit-cards/cimb-world-mastercard.html

### Trust Bank Cashback Card (`trust-card`)
- **Currently in cards.json:** Up to 6% groceries FairPrice; base 1.5% across all categories; cap groceries $30.
- **Actual (2026):** Restructured 1 Mar 2026. 15% on preferred category (FairPrice/groceries/dining/transport/shopping/petrol — selectable), capped S$250/quarter (~$83/mo). 1% unlimited local cashback. 0.5% (was 1%) on foreign currency non-preferred categories. Now you also earn base 1% on preferred category above the bonus cap.
- **Source:** https://trustbank.sg/cashback-credit-card/

## Medium-confidence changes (reputable comparison site)

### UOB Absolute Cashback (`uob-absolute`)
- **Currently in cards.json:** fee $0; 1.7% unlimited.
- **Actual (2026):** 1.7% confirmed. BUT annual fee S$196.20 (waived first year). 0.3% on excluded categories (charity, education, healthcare, professional services, utilities, Grab top-ups). Income requirement S$30k.
- **Source:** https://www.singsaver.com.sg/credit-card/products/uob-absolute-cashback-card / MoneySmart

### GXS FlexiCard (`gxs-flexicard`)
- **Currently in cards.json:** Up to 3% on dining/groceries/online; cap $10/cat; fee $0.
- **Actual (2026):** Cashback is randomized "instant" (up to S$3) per S$10+ eligible transaction — not category-based 3%. Fee S$54.50 (waived first year, then year-by-year discretionary). Cards.json structure misrepresents how the card actually works.
- **Source:** https://www.gxs.com.sg/flexicard

### DBS yuu Card AMEX (`dbs-yuu-amex`)
- **Currently in cards.json:** 7% groceries at FairPrice/Cold Storage/Giant; cap $30.
- **Actual (2026):** From 1 Oct 2025: 5% base rebate at yuu merchants, no min spend. Additional 13% (total 18%) requires hitting 4 different participating yuu merchants/mo (must include SimplyGo). Combined bonus capped at S$144 cash rebates/mo. Min S$600 for the 13% bonus tier. Note: yuu merchants include Cold Storage, Giant, Guardian, 7-Eleven, foodpanda, SimplyGo (NOT FairPrice — that's NTUC's network).
- **Source:** https://www.dbs.com.sg/personal/cards/credit-cards/dbs-yuu-cards
- **Confidence:** Medium (SingSaver/MileLion verified, official page is marketing-style)

### DBS yuu Card Visa (`dbs-yuu-visa`)
- **Currently in cards.json:** 3% FairPrice/Cold Storage groceries.
- **Actual (2026):** Cards.json claim about FairPrice is incorrect — yuu network is Cold Storage/Giant/Guardian etc., not FairPrice. Visa version effectively has same yuu merchant rates as AMEX (per restructuring). Confirmed in MileLion review.
- **Source:** MileLion 2025 review of DBS yuu cards

### Mari Credit Card (NEW — not in cards.json)
- **Status:** NEW card to add.
- **Actual (2026):** 1.5% unlimited cashback on all spend (any currency). No min spend, no cap on SGD; FCY cap S$1,500/mo till Dec 2026. NO FX fees from 1 Jan 2026. No annual fee. Cashback credited instantly from 1 Mar 2026. 1.5% Shopee coins on Mari Instant Checkout.
- **Source:** https://www.maribank.sg/product/mari-credit-card
- **Confidence:** Medium (Suitesmile, Wise, MoneySmart all corroborate)

### Standard Chartered Beyond Card (NEW — not in cards.json)
- **Status:** NEW card to add.
- **Actual (2026):** Premium Visa Infinite-tier card launched Nov 2024 (post cards.json compile). Fee S$1,635 GST-inclusive, non-waivable. Unlimited Priority Pass for principal + up to 4 supplementary cardholders. Welcome 100k miles (60k for fee + 40k for $20k spend) till 30 Jun 2026. Renewal bonus 80k miles till 31 Dec 2026.
- **Source:** https://www.sc.com/sg/credit-cards/beyond-credit-card/
- **Confidence:** Medium

### UOB Lady's Solitaire (NEW — not in cards.json)
- **Status:** NEW card to add (premium tier of UOB Lady's).
- **Actual (2026):** Fee S$414.20 (first year waived). Select 2 preferred categories (from 7) earning up to 10 mpd (25X UNI$). From 1 Aug 2025: monthly cap 2,700 bonus UNI$ (across both cats), max 1,350 per cat (≈ S$750 spend/cat). Min income S$120k.
- **Source:** https://www.uob.com.sg/personal/cards/privilege/ladys-solitaire-metal-card.page
- **Confidence:** Medium

## Low-confidence / unclear

### HSBC Advance Card (`hsbc-advance`)
- **Currently in cards.json:** 3.5% on dining/grocery/transport/online; min $600/mo; cap $25/cat.
- **Actual (2026):** Current product is 1.5% on first S$2,000, 2.5% above, capped S$70/mo total. No category bonuses. Significant simplification. However, sources are mixed; HSBC Advance banking relationship may unlock different tiers, and the official terms PDF describes the current structure.
- **Source:** https://www.hsbc.com.sg/credit-cards/products/advance/
- **Confidence:** Low (need direct T&C review; product seems to have been simplified)

### OCBC Voyage Premier (`ocbc-premier-voyage`)
- **Currently in cards.json:** 2.3 mpd overseas; 2.5% local across categories.
- **Actual (2026):** 1.6 mpd local, 2.2 mpd overseas. The 2.3 mpd figure is rounded/optimistic. Card is invitation-only Premier banking customers (S$350k+ AUM).
- **Source:** YouTrip blog 2026
- **Confidence:** Low (only one secondary source — Premier program details vary)

## Suggested NEW cards to add

1. **Standard Chartered Beyond Card** — Premium SC card launched Nov 2024. S$1,635 fee, unlimited lounge access via Priority Pass.
2. **UOB Lady's Solitaire Card** — Premium tier of Lady's; up to 10 mpd on 2 selectable categories.
3. **Mari Credit Card** (MariBank) — 1.5% unlimited, no FX, no annual fee. Worth adding given MariBank presence is growing.
4. **DBS Insignia** — Ultra-premium DBS invitation-only card (Apr 2026 launch per MileLion). Likely out of scope for app's audience but worth noting.
5. **POSB Galaxy AMEX** — Reportedly relaunched/refreshed; verify before adding.

## Suggested DISCONTINUED cards to remove

1. **HSBC Visa Platinum** (`hsbc-visa-plat`) — Closed to new applications 21 Jun 2024; existing cards renamed to HSBC Live+. The `hsbc-visa-plat` entry in cards.json is dead. Remove.
2. **Citi Clear Card** (`citi-clear`) — Still listed as a tertiary student card per Citi but barely promoted; check value of keeping. (Not confirmed discontinued — keep as-is for now if app is comprehensive.)

## Cards verified with NO material changes vs cards.json (sample)
These cards' core terms appear consistent with cards.json — minor fee differences excluded:
- Standard Chartered Simply Cash (`sc-simply-cash`) — 1.5% unlimited confirmed.
- CIMB AWSM (`cimb-awsm`) — Cards.json shows 8% on dining/online/transport but actual product is 1% unlimited cashback on Dining & Entertainment, Online Shopping, Telco — POSSIBLE DISCREPANCY. Source: https://www.cimb.com.sg/en/personal/banking-with-us/cards/credit-cards/cimb-awsm-card.html — flagging at Medium.

---

## Summary

- **High-confidence changes:** 31 cards with verified material changes (rates, caps, min spend, annual fee, or category structure)
- **Medium-confidence changes:** 5 cards with reputable-source-only confirmation (incl. CIMB AWSM rate discrepancy)
- **Low-confidence:** 2 cards (HSBC Advance, OCBC Voyage Premier) — recommend manual T&C verification
- **Suggested additions:** 5 cards (StanChart Beyond, UOB Lady's Solitaire, Mari Credit, DBS Insignia, POSB Galaxy AMEX [unverified])
- **Suggested removals:** 1 confirmed (HSBC Visa Platinum)

**Coverage:** ~40 cards audited out of 98 total. Remaining ~58 cards (mostly niche/co-brand, debit cards, and prepaid travel cards like YouTrip/Revolut/Wise) were not researched in this pass. The audited set covers the most widely-held cards per task brief.

**Most important changes for VERSO users to address first:**
1. HSBC Revolution (4 mpd permanent — under-credited in DB)
2. Trust Bank (Mar 2026 structure overhaul — current entry is stale)
3. Citi Cash Back (cap structure changed to combined S$80)
4. Maybank Family & Friends (1 Jan 2026 — no longer weekend-only, doubled min spend for 8%)
5. UOB One (tiered quarterly cashback, not monthly per-category)
6. OCBC 365 (dining 6% → 5%, fuel 1% → 6%)
7. UOB Lady's (selectable category, 10 mpd not 4 mpd)
8. SC Smart (5 categories cut to 3, petrol/groceries removed)
9. UOB Visa Signature, UOB Preferred Platinum, Citi Rewards (online-only restrictions tightened)
10. DBS Vantage / Altitude — fee waiver ending 1 Aug 2026 (warn users)
