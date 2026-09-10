# EL CHICO SOURCE MASTER DOCUMENT

## 1. Overview
This document represents the master findings from the headless source audit of `https://elchico.in/`.

**SOURCE WEBSITE**: `https://elchico.in/`
**TOTAL ROUTES**: 18
**TOTAL PAGES DISCOVERED**: 11
**TOTAL SECTIONS MAPPED**: 5 primary homepage sections
**TOTAL INTERACTIONS**: 23 CTAs
**TOTAL FORMS**: 13 (including comments)
**TOTAL IMAGE ASSETS**: 8 unique images (excluding SVGs)
**TOTAL ASSETS DOWNLOADED**: 0 (Headless extraction recorded URLs)
**EXTERNAL SERVICES**: Contact Form 7, WooCommerce (detected styles), Slider Revolution.

## 2. All Routes
- `/` (Homepage)
- `/about/`
- `/our-story/`
- `/our-menu/`
- `/gallery/`
- `/take-away/`
- `/contact-us/`
- `/the-baking-co/`
- `/veggie-veg/`
- `/elchico-restaurant/`
- `/blog/`

## 3. Navigation Map
**Main Menu**: Home, About Us, Our Story, Menu, Gallery, Order Now, Contact.

## 4. CTA Inventory
- "Order Now (At Discounted Price)" -> `/take-away/`
- "Join Now" -> `/contact-us/`
- "More details" -> `/the-baking-co/`, `/veggie-veg/`, `/elchico-restaurant/`

## 5. Contact Information (Extracted)
- **Phone**: `0012345678`, `094151+28975`
- **Email**: `coffee@yoursite.com` (Placeholder)
- **Facebook**: `https://www.facebook.com/ElchicoRestaurant`
- **Instagram**: `https://www.instagram.com/cafeelchico/`, `https://www.instagram.com/elchicoprayagraj/`

## 6. Identified Issues in Source
- The current site relies heavily on PDF files for menus.
- Dummy placeholder text/emails exist.
- Multiple versions of social links.
- Uses WPBakery and Slider Revolution which bloat the DOM.

## 7. Next Steps
Move to the REDESIGN phase utilizing the existing art-directed architecture (Desktop, Tablet, Mobile) to create a premium experience replacing this generic WordPress structure.
