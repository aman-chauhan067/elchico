import type { MenuCategory } from './menuData';

export const tbcCivilLinesMenu: MenuCategory[] = [
  {
    name: "Pastries",
    items: [
      { name: "Belgium Pastry", price: 140 },
      { name: "Almond Chocolate", price: 135 }
    ]
  },
  {
    name: "Cheese Cake",
    items: [
      { name: "Blueberry Cheese Cake", price: 185 },
      { name: "Caramel Cheese Cake", price: 185 },
      { name: "Biscoff Cheese Cake", price: 185 },
      { name: "Hazelnut Cheese Cake", price: 185 },
      { name: "Low Suger Cheese Cake", price: 185 }
    ]
  },
  {
    name: "Jar Pudding",
    items: [
      { name: "Belgium Jar", price: 175 },
      { name: "Trio Chocolate", price: 175 },
      { name: "Trimisu", price: 175 }
    ]
  },
  {
    name: "Pastries (Non-Veg)",
    items: [
      { name: "Butter Scotch", price: 85, dietary: 'non-veg' },
      { name: "Chocolate Gooey", price: 95, dietary: 'non-veg' },
      { name: "Black Forest", price: 85, dietary: 'non-veg' },
      { name: "Chocolate Pyramid", price: 85, dietary: 'non-veg' },
      { name: "Chocolate Special", price: 85, dietary: 'non-veg' },
      { name: "Pineapple", price: 85, dietary: 'non-veg' },
      { name: "Choco Truffle", price: 110, dietary: 'non-veg' },
      { name: "Christmas Rum Ball", price: 80, dietary: 'non-veg' },
      { name: "Kit Kat", price: 95, dietary: 'non-veg' },
      { name: "Caramel Crunch", price: 85, dietary: 'non-veg' },
      { name: "Chocolate Icing", price: 85, dietary: 'non-veg' }
    ]
  },
  {
    name: "Pastries (Veg)",
    items: [
      { name: "Blue Berry", price: 85, dietary: 'veg' },
      { name: "Cassata", price: 85, dietary: 'veg' },
      { name: "Choco Truffle", price: 110, dietary: 'veg' },
      { name: "Pineapple", price: 85, dietary: 'veg' },
      { name: "Strawberry", price: 85, dietary: 'veg' },
      { name: "Choco Chip", price: 85, dietary: 'veg' },
      { name: "Red Velvet", price: 85, dietary: 'veg' },
      { name: "Fresh Mango", price: 125, dietary: 'veg' },
      { name: "Cream Roll", price: 55, dietary: 'veg' },
      { name: "Choco Lava Cake", price: 80, dietary: 'veg' }
    ]
  },
  {
    name: "Eclairs",
    items: [
      { name: "Classic Éclair", price: 100 }
    ]
  },
  {
    name: "Macaron's",
    items: [
      { name: "Vanilla Macron", price: 70, dietary: 'non-veg' },
      { name: "Chocolate Macron", price: 70, dietary: 'non-veg' },
      { name: "Blueberry Macron", price: 70, dietary: 'non-veg' },
      { name: "Raspberry Macron", price: 70, dietary: 'non-veg' },
      { name: "Lemon Macron", price: 70, dietary: 'non-veg' }
    ]
  },
  {
    name: "Tarts",
    items: [
      { name: "Lemon Tart", price: 60 },
      { name: "Baked Chocolate Tart", price: 55 },
      { name: "Salted Caramel Tart", price: 55 },
      { name: "Berry Crumble Tart", price: 60 },
      { name: "Bonoffee Pie", price: 55 }
    ]
  },
  {
    name: "Dough Nut",
    items: [
      { name: "Chocolate Doughnut", price: 90 }
    ]
  },
  {
    name: "Croissants",
    items: [
      { name: "Plain Butter", price: 120 },
      { name: "Chocolate", price: 150 },
      { name: "Chicken Ham & Cheese", price: 180, dietary: 'non-veg' },
      { name: "Almond", price: 190 },
      { name: "Garlic & Chilli", price: 150 }
    ]
  },
  {
    name: "Cup Cakes",
    items: [
      { name: "Classic Vanilla", price: 65 },
      { name: "Blueberry", price: 65 },
      { name: "Red Velvet", price: 65 },
      { name: "Chocolate", price: 65 }
    ]
  },
  {
    name: "Rusks",
    items: [
      { name: "Mini Butter Rusk- 250gms", price: 185 },
      { name: "Cake Rusk- 250gms", price: 175 },
      { name: "Cake Rusk Fruit Eggless- 250gms", price: 170, dietary: 'eggless' },
      { name: "Cake Rusk Plain- 250gms", price: 175 },
      { name: "Finger Rusk- 350gms", price: 215 },
      { name: "Garlick Rusk- 250gms", price: 185 },
      { name: "Gol Rusk- 350gms", price: 210 },
      { name: "Mini Sauf Rusk- 250gms", price: 160 },
      { name: "Sauf Rusk- 250gms", price: 210 },
      { name: "Suger Free Rusk- 350gms", price: 165 },
      { name: "Wheat Masala Rusk- 250gms", price: 185 }
    ]
  },
  {
    name: "Khari",
    items: [
      { name: "Khari Ajwain- 100gms", price: 100 },
      { name: "Khari Methi- 100gms", price: 100 },
      { name: "Khari Zeera- 100gms", price: 100 },
      { name: "Khari Plain- 100gms", price: 100 }
    ]
  },
  {
    name: "Cheese Straw",
    items: [
      { name: "Cheese Straw - 200gms", price: 160 },
      { name: "Peri Peri Straw - 200gms", price: 175 },
      { name: "Cinnamon Stick - 200gms", price: 175 },
      { name: "Suger Puff - 200gms", price: 175 }
    ]
  },
  {
    name: "Muffins",
    items: [
      { name: "Blueberry Muffins", price: 80 },
      { name: "Butter Scotch Muffins", price: 80 },
      { name: "Choco Chip Muffins", price: 80 },
      { name: "Mango Muffins", price: 80 },
      { name: "Orange Muffins", price: 80 },
      { name: "Pineapple Muffins", price: 80 },
      { name: "Strawberry Muffins", price: 80 },
      { name: "Tootie Frootie Muffins", price: 80 }
    ]
  },
  {
    name: "Cake Slice",
    items: [
      { name: "Chocolate Cake Slice", price: 115 },
      { name: "Date Walnut Raisin Cake Slice", price: 160 },
      { name: "Vanilla Choco Chip Cake Slice", price: 100 },
      { name: "Walnut Cinnamon Cake Slice", price: 160 }
    ]
  },
  {
    name: "Brownies",
    items: [
      { name: "Brownie Toffee", price: 90 },
      { name: "5 Star Brownie", price: 100 },
      { name: "Chocolate Brownie", price: 90 },
      { name: "Choco Chip Brownie", price: 100 },
      { name: "Oreo Brownie", price: 100 },
      { name: "Walnut Brownie", price: 100 }
    ]
  },
  {
    name: "Chocolates",
    items: [
      { name: "Choc Coated Cashewnut", price: 500 },
      { name: "Chocolate Coated Almonds", price: 500 },
      { name: "Chocolate Coated Rasin", price: 350 },
      { name: "Carame Fudge Toffee", price: 100 },
      { name: "Almond Praline Rocks", price: 200 },
      { name: "Choc Dates With Almonds", price: 250 },
      { name: "White Choc Cranberry Bark", price: 200 },
      { name: "Chocolate Mandiants", price: 200 },
      { name: "Chocolate Coated Biscuit", price: 200 },
      { name: "Chocolate Coated Butterscotch", price: 375 }
    ]
  },
  {
    name: "Cakes",
    items: [
      { name: "Strawberry Cake", variants: [{ name: "500 GMS", price: 600 }, { name: "1 KG", price: 1200 }] },
      { name: "Chocolate Cake", variants: [{ name: "500 GMS", price: 750 }, { name: "1 KG", price: 1500 }] },
      { name: "Butter Scotch Cake", variants: [{ name: "500 GMS", price: 750 }, { name: "1 KG", price: 1500 }] },
      { name: "Pineapple Cake", variants: [{ name: "500 GMS", price: 750 }, { name: "1 KG", price: 1500 }] },
      { name: "Black Forest Cake", variants: [{ name: "500 GMS", price: 800 }, { name: "1 KG", price: 1600 }] },
      { name: "Chocolate Chip Cake", variants: [{ name: "500 GMS", price: 800 }, { name: "1 KG", price: 1600 }] },
      { name: "Chocolate Truffle Cake", variants: [{ name: "500 GMS", price: 950 }, { name: "1 KG", price: 1900 }] },
      { name: "White Forest Cake", variants: [{ name: "500 GMS", price: 800 }, { name: "1 KG", price: 1600 }] },
      { name: "Caramel Crunch Cake", variants: [{ name: "500 GMS", price: 800 }, { name: "1 KG", price: 1600 }] },
      { name: "Red Velvet Cake", variants: [{ name: "500 GMS", price: 800 }, { name: "1 KG", price: 1600 }] },
      { name: "Blueberry Cake", variants: [{ name: "500 GMS", price: 800 }, { name: "1 KG", price: 1600 }] },
      { name: "Fresh Fruit Cake", variants: [{ name: "500 GMS", price: 850 }, { name: "1 KG", price: 1700 }] },
      { name: "Hazelnut Cake", variants: [{ name: "500 GMS", price: 1000 }, { name: "1 KG", price: 2000 }] },
      { name: "Trio Of Chocolate Cake", variants: [{ name: "500 GMS", price: 1000 }, { name: "1 KG", price: 2000 }] },
      { name: "Opera Cake", variants: [{ name: "500 GMS", price: 1000 }, { name: "1 KG", price: 2000 }] },
      { name: "Belgium Cake", variants: [{ name: "500 GMS", price: 1000 }, { name: "1 KG", price: 2000 }] },
      { name: "Date & Walnut Cake", variants: [{ name: "500 GMS", price: 800 }, { name: "1 KG", price: 1600 }] },
      { name: "Carrot Cake", variants: [{ name: "500 GMS", price: 800 }, { name: "1 KG", price: 1600 }] },
      { name: "Coffee Cake", variants: [{ name: "500 GMS", price: 850 }, { name: "1 KG", price: 1700 }] },
      { name: "Cheese Cake", variants: [{ name: "500 GMS", price: 1000 }, { name: "1 KG", price: 2000 }] }
    ]
  },
  {
    name: "Savoury Veg",
    items: [
      { name: "Mini Veg Pizza", price: 60, dietary: 'veg' },
      { name: "Paneer Kulcha Bun", price: 90, dietary: 'veg' },
      { name: "Chillie Paneer Bun", price: 95, dietary: 'veg' },
      { name: "Corn Toast", price: 65, dietary: 'veg' },
      { name: "Garlic Toast", price: 50, dietary: 'veg' },
      { name: "Paneer Hot Dog", price: 95, dietary: 'veg' },
      { name: "Paneer Pizza Bun", price: 135, dietary: 'veg' },
      { name: "Pasta Ring", price: 95, dietary: 'veg' },
      { name: "Manchurian Bun", price: 95, dietary: 'veg' },
      { name: "Spring Roll Bun", price: 95, dietary: 'veg' },
      { name: "Vegetable Burger", price: 95, dietary: 'veg' },
      { name: "Veg Dazzy Roll", price: 95, dietary: 'veg' },
      { name: "Veg Kathi Roll", price: 125, dietary: 'veg' },
      { name: "Veg Footlong", price: 125, dietary: 'veg' },
      { name: "Veg Samosa", price: 60, dietary: 'veg' }
    ]
  },
  {
    name: "Savoury Non-Veg",
    items: [
      { name: "Chicken Bun", price: 115, dietary: 'non-veg' },
      { name: "Chicken Burger", price: 140, dietary: 'non-veg' },
      { name: "Chicken Footlong", price: 150, dietary: 'non-veg' },
      { name: "Chicken Khathi Roll", price: 150, dietary: 'non-veg' },
      { name: "Chicken Pizza Bun", price: 150, dietary: 'non-veg' },
      { name: "Chicken Spiral Roll", price: 115, dietary: 'non-veg' }
    ]
  },
  {
    name: "Sandwiches Veg",
    items: [
      { name: "Aloo Tikki Sandwiches", price: 80, dietary: 'veg' },
      { name: "Cheese Mayo Sandwiches", price: 70, dietary: 'veg' },
      { name: "Paneer Tikka Sandwiches", price: 115, dietary: 'veg' },
      { name: "Vegetable Mayo Sandwiches", price: 60, dietary: 'veg' },
      { name: "Tomato & Cheese Sandwiches", price: 125, dietary: 'veg' }
    ]
  },
  {
    name: "Sandwiches Non-Veg",
    items: [
      { name: "Chicken Sandwiches", price: 70, dietary: 'non-veg' },
      { name: "Chicken Salami & Cheese Sandwiches", price: 125, dietary: 'non-veg' },
      { name: "Chicken Tikka Sandwiches", price: 125, dietary: 'non-veg' },
      { name: "Omlette Sandwiches", price: 90, dietary: 'non-veg' }
    ]
  },
  {
    name: "Breads",
    items: [
      { name: "Bun Burger (4 Pcs)", price: 45 },
      { name: "Bread Sticks Ajwain", price: 75 },
      { name: "Bread Sticks Cheese", price: 100 },
      { name: "Bread Sticks Garlic", price: 100 },
      { name: "Bread Sticks Masala", price: 100 },
      { name: "Bread Sticks Multigrain", price: 100 },
      { name: "Bread Cheese", price: 80 },
      { name: "Bread Focaassia", price: 80 },
      { name: "Bread Tomato Masala 300gms", price: 100 },
      { name: "Bun Dinner Rolls (5 Pc)", price: 40 },
      { name: "Bread French 250 Gms", price: 50 },
      { name: "Bread 400gm Fruit", price: 60 },
      { name: "Bun Fruit (2pc)", price: 45 },
      { name: "Bread Garlic 250 Gms", price: 60 },
      { name: "Bun Hot Dog (4 Pcs)", price: 45 },
      { name: "Kulcha 130gm (2pc)", price: 35 },
      { name: "Lavash 100 Gms", price: 75 },
      { name: "Bread Milk 400 Gms", price: 50 },
      { name: "Bun Burger Mini 250gm (6pc)", price: 45 },
      { name: "Bread Multigrain 400 Gms", price: 65 },
      { name: "Bun Pao (6 Pc)", price: 48 },
      { name: "Pizza Base Small (5pcs)", price: 50 },
      { name: "Pizza Base 200gm (2 Pc)", price: 55 },
      { name: "Bread Half Sandwich 400 Gms", price: 50 },
      { name: "Bread Full Sandwich 800 Gms", price: 100 },
      { name: "Pizza Base W.W. 200gm (2 Pc)", price: 70 },
      { name: "Bread Whole Wheat 400 Gms", price: 55 },
      { name: "Whole Wheat Burger Bun 4pcs", price: 55 },
      { name: "Whole Wheat Kulcha 2pcs", price: 40 },
      { name: "Whole Wheat Pao Bun 6pcs", price: 52 }
    ]
  },
  {
    name: "Biscuits",
    items: [
      { name: "Biscuit Ajwain", price: 275 },
      { name: "Biscuit Almond", price: 425 },
      { name: "Biscuit Belgium Choc", price: 450 },
      { name: "Biscuit Besan Burfi", price: 290 },
      { name: "Biscuit Butter Salted", price: 290 },
      { name: "Biscuit Butter Vanilla", price: 290 },
      { name: "Biscuit Butterscotch", price: 290 },
      { name: "Biscuit Coconut", price: 290 },
      { name: "Biscuit Jam", price: 290 },
      { name: "Biscuit Nankhatai Almond", price: 270 },
      { name: "Biscuit Choco Chip", price: 290 },
      { name: "Biscuit Oats And Honey", price: 290 },
      { name: "Biscuit Tootie Frootie", price: 290 },
      { name: "Biscuit (Atta)", price: 275 },
      { name: "Biscuit Zeera", price: 290 },
      { name: "Biscotti Almond", price: 400 },
      { name: "Biscotti Cranberry & Pistachio", price: 425 },
      { name: "Biscotti Paper", price: 350 },
      { name: "Biscotti Vanilla Choco Chip", price: 300 },
      { name: "Biscuit Coconut Macroon", price: 290 },
      { name: "Biscuit Crunchy Meusli", price: 325 },
      { name: "Biscuit Date Walnut Raisin", price: 325 },
      { name: "Namkeen Tit Bits", price: 160 },
      { name: "Biscuit Multigrain", price: 325 },
      { name: "Biscuit Nankhatai Besan", price: 270 },
      { name: "Biscuit Red Velvet", price: 290 },
      { name: "Biscuit Rich Almond Sticks", price: 450 },
      { name: "Biscuit Sugar Free", price: 290 }
    ]
  },
  {
    name: "Ice Cream Tubs",
    items: [
      { name: "Belgium Choc", price: 450 },
      { name: "Black Forest", price: 250 },
      { name: "Blueberry", price: 250 },
      { name: "Butter Scotch", price: 200 },
      { name: "Cappuchino", price: 425 },
      { name: "Choc Walnut", price: 250 },
      { name: "Chocolate", price: 250 },
      { name: "Chocolate Chip", price: 250 },
      { name: "Coconut", price: 250 },
      { name: "Coffee", price: 400 },
      { name: "Coffee Walnut", price: 350 },
      { name: "Kesar Pista", price: 350 },
      { name: "Kit Kat", price: 250 },
      { name: "Mango", price: 200 },
      { name: "Oreo", price: 250 },
      { name: "Paan", price: 250 },
      { name: "Red Velvet", price: 250 },
      { name: "Thandhai", price: 300 },
      { name: "Tootie Frootie", price: 200 },
      { name: "Vanilla", price: 275 },
      { name: "Vanilla Brownie", price: 325 },
      { name: "Vanilla Choc Chip", price: 325 },
      { name: "Low Sugar Mango", price: 300 },
      { name: "Low Sugar Banana", price: 300 },
      { name: "Low Sugar Belgium Choc", price: 350 },
      { name: "Low Sugar Coffee", price: 300 },
      { name: "Low Sugar Vanilla", price: 300 }
    ]
  },
  {
    name: "Tea Time Cakes",
    items: [
      { name: "Plain Cake", price: 250 },
      { name: "Fruit Cake", price: 270 },
      { name: "Chocolate Chip", price: 315 },
      { name: "Chocolaye Walnut", price: 350 },
      { name: "5 Star", price: 280 },
      { name: "Dairy Milk", price: 280 },
      { name: "Cinnimon Walnut", price: 480 },
      { name: "Rich Plum Fruit Cake-1kg", price: 1500 }
    ]
  }
];
