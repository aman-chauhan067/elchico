export interface SourceSubBrand {
  id: string;
  name: string;
  route: string;
  description: string;
}

export const sourceSubBrands: SourceSubBrand[] = [
  {
    id: "the-baking-co",
    name: "The Baking Co",
    route: "/the-baking-co/",
    description: "Bakery and patisserie offerings."
  },
  {
    id: "veggie-veg",
    name: "Veggie Veg",
    route: "/veggie-veg/",
    description: "Dedicated vegetarian menu and brand."
  },
  {
    id: "elchico-restaurant",
    name: "El Chico Restaurant",
    route: "/elchico-restaurant/",
    description: "The core fine dining restaurant experience."
  }
];
