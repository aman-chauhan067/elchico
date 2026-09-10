# El Chico Contact Verification (Phase 0.5)

## 1. Phone Numbers
- `09415128975`
  - **Status:** `VERIFIED`
  - **Notes:** Appears on multiple internal pages and closely matches Indian mobile/landline formatting for businesses.
- `0012345678`
  - **Status:** `PLACEHOLDER`
  - **Notes:** Extracted from a dummy widget/footer area in the WPBakery theme. This should NOT be used in the redesign.

## 2. Emails
- `coffee@yoursite.com`
  - **Status:** `PLACEHOLDER`
  - **Notes:** A default theme string. The redesign needs a dynamic form or a real verified email (e.g., `info@elchico.in`). Do not hardcode this placeholder into production data.

## 3. Social Media
- **Facebook:** `https://www.facebook.com/ElchicoRestaurant` (`VERIFIED`)
- **Instagram:** `https://www.instagram.com/cafeelchico/` (`VERIFIED`)
- **Instagram (Alternate):** `https://www.instagram.com/elchicoprayagraj/` (`VERIFIED` - specifically targets the Prayagraj location).

## 4. Physical Address / Locations
- **Status:** `UNCLEAR` (Headless audit did not pull a cleanly formatted address string, relies heavily on a Google Maps embed on `/contact-us/`).
- **Action:** The redesign must build a clean `locations.ts` object extracting the exact address from the Maps embed coordinates once the visual phase begins.
