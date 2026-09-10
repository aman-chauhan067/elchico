# Functionality Map & Checklist (Phase 2)

## 1. NAVIGATION
| Source Feature | Source Location | Redesigned Location | Implementation | Status |
|---|---|---|---|---|
| Main Navbar | Global Header | `<Navbar />` | Logo to home, active states, working CTAs | [ ] Pending |
| "Homefood reimagined" | Navbar | `<Navbar />` | Simple routing to `/` | [ ] Pending |
| "About Us (who we are)" | Navbar | `<Navbar />` | Simple routing to `/about` | [ ] Pending |
| "Our Story" | Navbar | `<Navbar />` | Simple routing to `/our-story` | [ ] Pending |
| "Menu (food & drinks)" | Navbar | `<Navbar />` | Route to `/our-menu` | [ ] Pending |
| "Gallery (interior pics)" | Navbar | `<Navbar />` | Route to `/gallery` | [ ] Pending |
| "Order Now" / "Take Away" | Navbar | `<Navbar />` | Route to `/take-away` | [ ] Pending |
| "Contact (reach us)" | Navbar | `<Navbar />` | Route to `/contact-us` | [ ] Pending |
| Mobile Navigation | Global Header | `<Navbar />` | Hamburger, open/close, trap focus | [ ] Pending |

## 2. PAGES
| Source Feature | Source Location | Redesigned Location | Implementation | Status |
|---|---|---|---|---|
| Home | `/` | `/` | Existing design, ensure all CTAs work | [ ] Pending |
| About Us | `/about/` | `/about` | Basic page explaining company | [ ] Pending |
| Our Story | `/our-story/` | `/our-story` | Timeline / history (Since 1964) | [ ] Pending |
| Gallery | `/gallery/` | `/gallery` | Infinite gallery canvas with interactions | [ ] Pending |
| Contact Us | `/contact-us/` | `/contact-us` | Form + Map + Verified contact details | [ ] Pending |
| Blog | `/blog/` | `/blog` | Clean archive of existing posts | [ ] Pending |
| 404 Page | Unknown | `/404` or `*` route | Friendly El Chico 404 with Home CTA | [ ] Pending |

## 3. SUB-BRANDS
| Source Feature | Source Location | Redesigned Location | Implementation | Status |
|---|---|---|---|---|
| El Chico Restaurant | `/elchico-restaurant/` | `/elchico-restaurant` | Fine dining focus, link to specific PDFs | [ ] Pending |
| The Baking Co | `/the-baking-co/` | `/the-baking-co` | Bakery focus, B&W logo, link to specific PDFs | [ ] Pending |
| Veggie Veg | `/veggie-veg/` | `/veggie-veg` | Pure Veg focus, link to specific PDFs | [ ] Pending |
| Sub-Brand Links | Homepage Cards | `DesktopBakeryWorld` / `DesktopSignatureBakes` | Ensure "Explore" links route to sub-brand pages | [ ] Pending |

## 4. MENU
| Source Feature | Source Location | Redesigned Location | Implementation | Status |
|---|---|---|---|---|
| Menu Page | `/our-menu/` | `/our-menu` | Aggregator page for viewing PDFs | [ ] Pending |
| Menu Links/PDFs | Various | Various | Working `<a>` tags targeting `/assets/source/menus/*.pdf` | [ ] Pending |

## 5. ORDERING
| Source Feature | Source Location | Redesigned Location | Implementation | Status |
|---|---|---|---|---|
| Take Away Page | `/take-away/` | `/take-away` | Flow leading to PDFs and contact | [ ] Pending |
| Fake Checkout | None | None | Intentionally deferred (Backend required) | [x] Deferred |

## 6. CONTACT & FORMS
| Source Feature | Source Location | Redesigned Location | Implementation | Status |
|---|---|---|---|---|
| General Contact Form | Multiple pages | `/contact-us` | Functional UI with proper validation states | [ ] Pending |
| Blog Comments | `/wp-comments-post.php`| None | Intentionally deferred (Spam / no backend) | [x] Deferred |
| Form Backend | CF7 Endpoints | `console.log` / `mailto` | Defer real API submission; simulate states | [x] Deferred |
| Verified Phone | `/contact-us/` | Footer / Contact | Links formatted as `tel:+919415128975` | [ ] Pending |

## 7. FOOTER
| Source Feature | Source Location | Redesigned Location | Implementation | Status |
|---|---|---|---|---|
| Social Links | Footer | `<Footer />` | `href` to Facebook & Instagram (new tab) | [ ] Pending |
| Navigation Links | Footer | `<Footer />` | Working internal routes | [ ] Pending |

## 8. OTHER INTERACTIONS
| Source Feature | Source Location | Redesigned Location | Implementation | Status |
|---|---|---|---|---|
| Hero Photo Shuffle | Homepage Hero | `DesktopHero` | Fix intervals, z-index, add reduced-motion check | [ ] Pending |
| Celebration Burst | Homepage CTA | `DesktopHero` | Verify particle physics, z-index, cleanup | [ ] Pending |
| External Link Behavior| Various | Various | `target="_blank" rel="noopener noreferrer"` | [ ] Pending |
| Reduced Motion | Global | Global | Add `prefers-reduced-motion` media queries | [ ] Pending |
