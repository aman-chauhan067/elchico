# Link Audit

| Link Type | Source / Destination | Status | Notes |
|-----------|-----------------------|--------|-------|
| Internal Route | `/about` | PASS | Renders verified content. |
| Internal Route | `/our-story` | PASS | Renders verified content. |
| Internal Route | `/our-menu` | PASS | Renders verified PDF list. |
| Internal Route | `/gallery` | PASS | Renders masonry grid. |
| Internal Route | `/contact-us` | PASS | Renders simulated form. |
| Internal Route | `/take-away` | PASS | Renders CTA to call the verified number. |
| Internal Route | `/blog` | PASS | Renders Empty Archive state. |
| Internal Route | `/elchico-restaurant` | PASS | Sibling sub-brand route works. |
| Internal Route | `/the-baking-co` | PASS | Sibling sub-brand route works. |
| Internal Route | `/veggie-veg` | PASS | Sibling sub-brand route works. |
| PDF Links | 6 verified source PDFs | PASS | Menu page links directly to correct `/assets/source/menus/...` |
| Phone Link | `tel:+919415128975` | PASS | Found in Take Away and Contact. |
| Email Link | `mailto:hello@elchico.in` | PASS | Found in About and Contact. |
| Map Link | `https://maps.app.goo.gl/...` (or equivalent) | NOT TESTABLE | Needs explicit URL from client. Address is rendered correctly in text. |
| Social Links | Instagram / Facebook | PASS | Footer routes to verified source data. |
