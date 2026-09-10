# EL CHICO SOURCE CONTENT MAP

This document maps the verified logical architecture of the source website to inform the redesign structure.

```text
EL CHICO (Master Brand)
│
├── 1. Core Pages
│   ├── Home (`/`)
│   ├── Our Story (`/our-story/`)
│   │   └── Rich brand history (Since 1964)
│   ├── About Us (`/about/`)
│   ├── Gallery (`/gallery/`)
│   └── Contact Us (`/contact-us/`)
│       ├── General Form
│       ├── Maps Embed
│       └── Verified Phones (09415128975)
│
├── 2. Ordering & Menus
│   ├── Our Menu (`/our-menu/`)
│   │   └── Link to `elchico-a_compressed.pdf`
│   └── Take Away (`/take-away/`)
│       └── Aggregation of all PDF downloads
│
├── 3. Sub-Brands
│   ├── El Chico Restaurant
│   │   ├── Route: `/elchico-restaurant/`
│   │   ├── Asset: `Elchico-Restaurant-.pdf`
│   │   └── Focus: Fine Dining
│   │
│   ├── The Baking Co
│   │   ├── Route: `/the-baking-co/`
│   │   ├── Asset: `TBC-Menu-1.pdf` & `TBC-Civil-Lines-Menu-.pdf`
│   │   └── Focus: Bakery & Patisserie
│   │
│   └── Veggie Veg
│       ├── Route: `/veggie-veg/`
│       ├── Asset: `VV-Elchico.pdf`
│       └── Focus: Pure Vegetarian
│
└── 4. Content & Marketing
    └── Blog (`/blog/`)
        ├── Opening a Restaurant (`/opening-a-restaurant...`)
        └── The Food Industry (`/the-food-industry...`)
```

## Structural Observations
- **PDF Bottleneck:** The current architecture funnels users away from HTML experiences and forces PDF downloads to view products.
- **Redundant Routing:** `/our-menu/`, `/take-away/`, and the individual sub-brand pages all essentially serve the same function: distributing PDFs.
- **Redesign Opportunity:** A unified digital interactive menu that filters by sub-brand (Restaurant / TBC / VV) will vastly improve UX and SEO.
