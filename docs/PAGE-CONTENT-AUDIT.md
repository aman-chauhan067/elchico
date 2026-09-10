# Page Content Audit

| Page | Source Content Available | Current Content | Missing | Action |
|------|--------------------------|-----------------|---------|--------|
| `/` (Home) | `brand.ts`, `gallery.ts`, `subbrands.ts` | Fully designed UI with verified data | - | Monitor for any `#` placeholder links. |
| `/about` | `brand.ts` ("established in 1964") | Scaffold placeholder | Brand narrative, images | Build simple verified narrative layout. |
| `/our-story` | `brand.ts` ("1964") | Scaffold placeholder | Historical milestones, images | Build honest timeline/story layout using only verified 1964 fact. |
| `/our-menu` | `menu.ts`, `source-assets.md`, 6 PDFs | Fake baked-in data | PDF links, Sub-brand categorisation, correct CTAs | Rewire to use the 6 source PDFs mapped to correct brands. |
| `/take-away` | `contact.ts` (phone) | Scaffold placeholder | Order flow, phone number, CTAs | Build straightforward call-to-order UX using verified phone. |
| `/gallery` | `gallery.ts` | Scaffold placeholder | Grid or interactive gallery | Implement gallery using the verified `gallery.ts` dataset. |
| `/contact-us`| `contact.ts` | Functioning simulated form | - | Verify no `0012345678` leaks. |
| `/blog` | None | Scaffold placeholder | Any verified posts | Create honest "Archive empty" or "Coming Soon" state. |
| `/elchico-restaurant` | `subbrands.ts`, `menu.ts`, `elrestro.jpg` | Scaffold placeholder | Description, Menu PDF, CTAs | Build custom sub-brand template. |
| `/the-baking-co` | `subbrands.ts`, `menu.ts`, `bakebanner1.jpg` | Scaffold placeholder | Description, Menu PDF, CTAs | Build custom sub-brand template (visually distinct). |
| `/veggie-veg` | `subbrands.ts`, `menu.ts`, `veggiepage.jpg` | Scaffold placeholder | Description, Menu PDF, CTAs | Build custom sub-brand template (visually distinct). |

## Notes on PDF Menus
From `source-assets.md` and `menus` folder:
1. `elchico-a_compressed.pdf` -> El Chico Restaurant Main
2. `Elchico-Restaurant-.pdf` -> El Chico Restaurant Alternative
3. `TBC-Menu-1.pdf` -> The Baking Co
4. `TBC-Civil-Lines-Menu-.pdf` -> The Baking Co Civil Lines Location
5. `VV-Elchico.pdf` -> Veggie Veg
6. `Vegetarianism-4-converted.pdf` -> Veggie Veg (Brochure)
7. `1-5_merged-1.pdf` -> Merged / Unknown (Needs categorization)
