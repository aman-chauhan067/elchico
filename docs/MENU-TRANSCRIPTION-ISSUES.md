# Menu Transcription Issues

During Phase 3, the 7 PDF menus from the original website were manually transcribed and converted into structured TypeScript data. Due to the image-based and multi-column layout of the PDFs, some issues were encountered.

## 1. General Formatting & Layout
- The source PDFs were primarily designed for print (or digital flipbooks) rather than data extraction.
- Some menus had multi-column layouts where prices were occasionally misaligned with item names, requiring manual visual alignment.

## 2. Unclear Prices or Variants
- In a few isolated cases, an item was listed without a clear price or the layout made it ambiguous which price belonged to which item.
- These items have been flagged in the source code with the `needsVerification: true` property in the `MenuItem` interface.

## 3. Duplication and Merged Files
- The file `1-5_merged-1.pdf` was found to be a composite of `Elchico-Restaurant-.pdf` and `VV-Elchico.pdf`. Its contents were extracted via the individual source files to avoid duplication in the final structured data.
- The `Vegetarianism-4-converted.pdf` file acts more as a brochure/manifesto about vegetarianism rather than a standard menu with prices, but it has been ingested as requested to preserve 100% of the source data.

## 4. Typographical Errors in Source
- Some spelling inconsistencies were present in the source PDFs (e.g., "Cocacola" vs "Coca Cola", "Pomogranate", "Tacitose").
- **Resolution**: Following the strict rule of "Preserve exact source content", these typographical errors were carried over exactly as they appear in the PDFs. No creative naming or fixing of source text was performed.

## Next Steps for Content Owners
- Search the codebase for `needsVerification: true` (e.g., in `src/data/source/elchico_restaurant.ts`) and manually verify these specific items against a high-resolution master copy of the physical menu.
