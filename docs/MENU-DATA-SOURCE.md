# Menu Data Source Documentation

## Purpose
This document provides an overview of the menu data ingestion pipeline for the El Chico website redesign. It documents the transition from static PDF files to structured digital data.

## The Problem
The original website relied heavily on large PDF files for its menus. This created a suboptimal user experience, particularly on mobile devices, and prevented the text from being searchable or indexable.

## The Solution
During Phase 3 of the redesign, all 7 PDF menus were manually transcribed and converted into a structured JSON/TypeScript format. 

### Data Structure
The core data structure is defined in `src/data/source/menuData.ts`. It follows a hierarchical model:

```typescript
interface MenuData {
  brandId: string;           // e.g., 'el-chico-restaurant'
  menuId: string;            // e.g., 'tbc-menu-1'
  title: string;             // Human-readable title
  categories: MenuCategory[];// List of categories (e.g., 'HOT BEVERAGES')
}

interface MenuCategory {
  name: string;
  items: MenuItem[];
}

interface MenuItem {
  name: string;
  description?: string;
  price?: number;
  variants?: { name: string; price: number }[];
  dietary?: 'veg' | 'non-veg' | 'vegan' | 'eggless';
  needsVerification?: boolean; 
}
```

## Extraction Methodology
1. **Source of Truth**: The PDFs located in `public/assets/source/menus/` were used as the absolute source of truth.
2. **Transcription**: Data was extracted manually and via OCR.
3. **Preservation**: Strict adherence to the source text was maintained, including typographical errors, to ensure authentic representation of the original business data. No creative liberties were taken with item names or prices.
4. **Verification Flags**: Items with ambiguous layouts or unclear pricing due to PDF formatting were flagged with `needsVerification: true`. The frontend UI displays a "Verify" badge next to these items to alert stakeholders.

## Files
- `src/data/source/menuData.ts`: The central database and schema.
- `src/data/source/elchico_a.ts`: Extracted from `elchico-a_compressed.pdf`.
- `src/data/source/elchico_restaurant.ts`: Extracted from `Elchico-Restaurant-.pdf`.
- `src/data/source/tbc_civil_lines.ts`: Extracted from `TBC-Civil-Lines-Menu-.pdf`.
- `src/data/source/tbc_menu_1.ts`: Extracted from `TBC-Menu-1.pdf`.
- `src/data/source/vv_menu.ts`: Extracted from `VV-Elchico.pdf`.
- `src/data/source/vegetarianism_brochure.ts`: Extracted from `Vegetarianism-4-converted.pdf`.

## UI Integration
The digital menus are rendered in `src/pages/Menu.tsx`. The new page includes:
- Brand-based filtering (All, El Chico, The Baking Co, Veggie Veg).
- URL state management (`?brand=veggie-veg`).
- Dietary icons.
- Fallback links to the original PDFs for reference.
