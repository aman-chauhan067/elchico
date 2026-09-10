export interface MenuPdf {
  title: string;
  filename: string;
  path: string;
  type: 'menu' | 'brochure' | 'merged';
}

export interface SourceMenuCollection {
  brandId: string; // matches id in subbrands.ts, or 'general'
  brandName: string;
  pdfs: MenuPdf[];
}

export const sourceMenuCollections: SourceMenuCollection[] = [
  {
    brandId: "elchico-restaurant",
    brandName: "El Chico Restaurant",
    pdfs: [
      {
        title: "Main Restaurant Menu",
        filename: "elchico-a_compressed.pdf",
        path: "/assets/source/menus/elchico-a_compressed.pdf",
        type: 'menu'
      },
      {
        title: "Extended Restaurant Menu",
        filename: "Elchico-Restaurant-.pdf",
        path: "/assets/source/menus/Elchico-Restaurant-.pdf",
        type: 'menu'
      }
    ]
  },
  {
    brandId: "the-baking-co",
    brandName: "The Baking Co.",
    pdfs: [
      {
        title: "Patisserie Menu",
        filename: "TBC-Menu-1.pdf",
        path: "/assets/source/menus/TBC-Menu-1.pdf",
        type: 'menu'
      },
      {
        title: "Civil Lines Location Menu",
        filename: "TBC-Civil-Lines-Menu-.pdf",
        path: "/assets/source/menus/TBC-Civil-Lines-Menu-.pdf",
        type: 'menu'
      }
    ]
  },
  {
    brandId: "veggie-veg",
    brandName: "Veggie Veg",
    pdfs: [
      {
        title: "Vegetarian Menu",
        filename: "VV-Elchico.pdf",
        path: "/assets/source/menus/VV-Elchico.pdf",
        type: 'menu'
      },
      {
        title: "Vegetarianism Brochure",
        filename: "Vegetarianism-4-converted.pdf",
        path: "/assets/source/menus/Vegetarianism-4-converted.pdf",
        type: 'brochure'
      }
    ]
  },
  {
    brandId: "general",
    brandName: "Combined & General Menus",
    pdfs: [
      {
        title: "Combined Menu Assortment",
        filename: "1-5_merged-1.pdf",
        path: "/assets/source/menus/1-5_merged-1.pdf",
        type: 'merged'
      }
    ]
  }
];
