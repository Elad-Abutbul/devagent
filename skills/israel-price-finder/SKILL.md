
---
name: israel-price-finder
description: Search, verify and compare product prices in Israeli stores, including Eilat prices, shipping, warranty and branch stock availability. Use for Israeli shopping and price comparison requests.
---

# Israel Price Finder

## Goal

Find the cheapest verified offers for products sold in Israel.

The user should only need to write a simple request such as:
"תמצא לי AirPods Pro 3 הכי זולות בארץ"

Perform the research automatically using available tools.

Respond in Hebrew.

## 1. Identify the Product

1. Identify the exact brand, model, generation and variant.
2. Look for a manufacturer model number, SKU or EAN when available.
3. Never compare different generations or variants as if they were identical.
4. Prefer new and sealed products unless the user requests otherwise.
5. Exclude refurbished, used, open-box and display products from the main comparison.
6. If the user specifies an exact model, do not replace it with another.
7. If the request is ambiguous and would lead to comparing materially different products, ask one short clarification question.

## 2. Search Israeli Stores

Search multiple relevant Israeli retailers and comparison services.

Prioritize:

- KSP
- Ivory
- BUG
- Zap
- WiseBuy
- Eline
- BestCell
- MobileLand
- NexTech
- NewSale

Also search other relevant Israeli stores when useful.

Do not assume these stores have every product.

Search broadly enough to identify competitive offers, but avoid unnecessary repeated searches.

Do not claim that every store in Israel was checked.

## 3. Verify Product Prices

For each relevant store:

1. Locate the matching product page.
2. Open the product page when accessible.
3. Verify that the model matches the user's request.
4. Extract the regular price in ILS.
5. Extract the Eilat price when available.
6. Identify conditional prices, coupons or membership-only discounts.
7. Check whether the price is currently valid.
8. Save the direct product URL.
9. Record when the information was checked.

Prefer directly observed product-page prices over search snippets.

If a price is only available from search results, label it as not directly verified.

Never invent a price.

## 4. Eilat Prices

1. Always check for an Eilat price when available.
2. Keep Eilat prices separate from regular prices.
3. Never rank an Eilat-only offer as the cheapest regular offer.
4. Explain if Eilat pricing requires physical pickup or other conditions.
5. Do not assume every store offers Eilat pricing.
6. Report the cheapest verified Eilat offer separately.

## 5. Shipping and Total Cost

For every relevant offer, check:

- Product price
- Free store pickup
- Pickup-point delivery cost
- Home delivery cost
- Express delivery cost, if relevant
- Free shipping eligibility
- Minimum order requirements

Calculate the final price for each available delivery option.

Do not assume shipping is free unless verified.

When comparing the cheapest regular offers, use the lowest verified total cost available to the user, and clearly state the fulfillment method.

If the user requests home delivery, rank offers by total home-delivery cost.

Keep Eilat offers in a separate ranking.

## 6. Stock Availability

Check stock availability whenever the website provides it.

### Online availability

1. Determine whether the product can currently be ordered.
2. Distinguish between immediate availability, preorder and backorder.
3. Check estimated delivery time when published.
4. Do not assume that a working purchase button guarantees physical stock.

### Branch availability

1. Look for buttons such as:
   - הצג זמינות מלאי בסניפים
   - בדיקת מלאי בסניפים
   - זמינות בסניפים
   - מלאי בחנויות
2. Use the available browser tool to open the stock availability interface.
3. Inspect the displayed branch availability.
4. List branches explicitly marked as in stock.
5. Distinguish between:
   - In stock at branch
   - Available for order to branch
   - Out of stock
   - Unknown
6. Do not claim a branch has stock based only on general delivery availability.

If branch availability cannot be verified, write:
"לא אומת — יש לבדוק ידנית"

### Restock dates

If a product is out of stock:

1. Look for an official restock or estimated availability date.
2. Report the date only if it is explicitly published.
3. Include the source.
4. Never invent restock dates.

## 7. Popups and Website Navigation

When opening a store website:

1. Check whether a popup, promotional overlay or cookie dialog blocks the page.
2. Close promotional popups using their visible close buttons.
3. Reject optional tracking cookies when a clear rejection option is available.
4. Never automatically accept marketing cookies.
5. After closing the popup, continue the product search.
6. Use the browser tool for navigation, searches, clicks and stock checks when needed.
7. Avoid unnecessary interactions.

Never:

- Complete purchases
- Enter payment information
- Create store accounts
- Submit personal information
- Bypass CAPTCHA
- Circumvent anti-bot protections
- Change account settings

If access is blocked, stop and mark the source as unverified.

## 8. Warranty and Importer

Check the following when available:

1. Warranty duration.
2. Warranty provider.
3. Official or parallel importer.
4. Relevant warranty conditions.

Do not assume that the cheapest product has the best warranty.

If warranty details cannot be verified, write:
"לא אומת — יש לבדוק ידנית"

A more expensive offer may be recommended when it has a meaningful verified advantage.

Clearly distinguish the cheapest offer from the recommended offer.

## 9. Verification Status

Use these statuses:

### VERIFIED
The exact product and reported information were confirmed from a reliable source.

### OUT_OF_STOCK
The retailer explicitly states that the matching product is unavailable.

### NOT_FOUND
A completed accessible search did not locate the matching product.

This does not prove the store never sells it.

### UNVERIFIED_MANUAL_CHECK
The product or relevant information could not be verified due to:

- HTTP errors
- Access restrictions
- Browser failures
- Missing information
- Ambiguous product matching
- Outdated prices
- Unavailable stock data

Display:
"לא אומת — יש לבדוק ידנית"

Verification may be partial.

For example, a price may be verified while physical branch stock is unverified.

Never label all fields as verified when only some fields were checked.

## 10. Error Handling

If a website fails:

1. Identify the failure when possible.
2. Do not invent missing information.
3. Do not repeatedly retry access restrictions such as HTTP 403.
4. Continue searching other accessible stores.
5. Include the failed store in the results as unverified.
6. Explain briefly why verification failed.

Never confuse a failed website request with a product being unavailable.

## 11. Ranking and Recommendation

Create two separate rankings:

### Regular prices
Rank by the cheapest verified total price using the stated delivery or pickup method.

### Eilat prices
Rank verified Eilat offers separately.

Clearly identify:

- Cheapest verified offer
- Cheapest verified Eilat offer
- Recommended offer, if different
- Reasons for the recommendation

Do not recommend a more expensive product without explaining its advantage.

Never claim "the cheapest in Israel" unless the available evidence supports that scope.

Prefer:
"המחיר הזול ביותר שמצאתי מבין ההצעות שאומתו"

## 12. Output Format

Always respond in Hebrew.

Start with a short summary of the best verified offer.

Then display a comparison table containing:

| Store | Regular Price | Eilat Price | Shipping | Warranty | Stock | Status |
|-------|---------------|-------------|----------|----------|-------|--------|

Include direct product links.

After the table, provide:

### Cheapest Regular Offer
Show the retailer, verified total price, fulfillment method and product link.

### Cheapest Eilat Offer
Show the retailer, price, conditions and product link.

### Stock Availability
Show confirmed available branches when requested or relevant.

### Recommended Offer
Recommend an offer based on price, warranty, shipping and verified availability.

### Unverified Stores
List stores that could not be checked and briefly explain why.

### Verification Time
State when the prices and stock were checked.

Keep the final answer concise and readable.

## 13. Safety and Reliability

1. Never fabricate sources, prices or availability.
2. Never perform purchases.
3. Never provide unverified information as confirmed.
4. Never silently substitute a different product.
5. Respect website restrictions.
6. Do not access unrelated local files or personal accounts.
7. Do not run local shell commands unless the user explicitly authorizes them.
8. Ask for approval before any action that modifies external data.
9. Clearly communicate uncertainty.
10. Prefer accuracy over an impressive-looking result.
