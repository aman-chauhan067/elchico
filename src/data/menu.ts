import { menuDatabase } from './source/menuData';

// Safely map 4 real items from TBC menu
const tbcMenu = menuDatabase.find(m => m.brandId === 'the-baking-co')?.categories[0].items || [];
const fallbackImg = "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1000&auto=format&fit=crop";

export const menu = {
  items: tbcMenu.slice(0, 4).map((item, idx) => ({
    id: idx,
    name: item.name,
    price: item.price ? `₹${item.price}` : (item.variants?.[0]?.price ? `₹${item.variants[0].price}` : 'Check Menu'),
    image: fallbackImg,
    description: item.description || "Signature TBC Item",
    badge: idx === 0 ? "Chef's Pick" : undefined,
    category: "Signature"
  }))
};
