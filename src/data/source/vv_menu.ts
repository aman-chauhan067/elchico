import type { MenuCategory } from './menuData';

export const vvMenu: MenuCategory[] = [
  {
    name: "Kabhi Soup",
    items: [
      { name: "CREAM OF TOMATO", price: 110 },
      { name: "VEG SWEET CORN", price: 110 },
      { name: "VEG HOT 'N' SOUR", price: 110 },
      { name: "VEG MANCHOW", price: 110 },
      { name: "VEG LEMON CORIANDER", price: 110 }
    ]
  },
  {
    name: "Kabhi Salad",
    items: [
      { name: "MEDITERRANEAN CHICKPEA & CORN SALAD", price: 245 },
      { name: "MEXICAN RED BEAN SALAD", price: 245 },
      { name: "GREEK SALD", price: 245 }
    ]
  },
  {
    name: "Chaat ke Chatkare",
    items: [
      { name: "DILLI KE GOL GAPPE (Atta/Sooji)", price: 125 },
      { name: "PAPDI CHAAT", price: 165 },
      { name: "DAHI ALOO PHUCHKA", price: 190 },
      { name: "DILLI 6 DAHI BHALLE", price: 190 },
      { name: "BHALLA PAPDI CHAAT", price: 190 },
      { name: "KHASTA ALOO TIKKI", price: 190 },
      { name: "TIKKI CHOLE", price: 190 },
      { name: "BIKANERI RAJ KACHORI", price: 245 },
      { name: "LUCKNOW BASKET CHAAT", price: 245 }
    ]
  },
  {
    name: "From the Tandoor",
    items: [
      { name: "VEGETABLE SEEKH KEBAB", price: 395 },
      { name: "TANDOORI SOYA CHAAP", price: 395 },
      { name: "PANEER TIKKA", price: 395 },
      { name: "PERI PERI PANEER TIKKA", price: 395 }
    ]
  },
  {
    name: "Indian",
    items: [
      { name: "VADA PAV", price: 165 },
      { name: "DABELI", price: 165 },
      { name: "PAO BHAJI", price: 265 },
      { name: "PANEER 65", price: 265 },
      { name: "CHOWMEIN BHEL", price: 165 },
      { name: "MATRA KULCHA", price: 260 },
      { name: "ONION BHAJIYA", price: 295 },
      { name: "ASSORTED PAKORA (12 pcs)", price: 295 },
      { name: "PANEER PAKORA (6 pcs)", price: 310 }
    ]
  },
  {
    name: "Around the World",
    items: [
      { name: "FRENCH FRIES", description: "salted / peri peri", price: 250 },
      { name: "FALAFEL FANTASTIC", price: 260 },
      { name: "CHEESY GARLIC BREAD", price: 245 },
      { name: "CHILLI CHEESE TOAST", price: 295 },
      { name: "CRISPY VEGETABLE SPRING ROLLS", price: 260 },
      { name: "CRISPY HONEY CHILLI POTATO", price: 295 },
      { name: "BABY CORN MUSHROOM SALT & PEPPER", price: 375 },
      { name: "VEGETABLE MANCHURIAN (DRY)", price: 350 },
      { name: "CHILLI PANEER (DRY)", price: 375 }
    ]
  },
  {
    name: "Momos",
    items: [
      { name: "STEAMED DARJEELING MOMOS", price: 225, description: "served with the special hot chilli chutney" },
      { name: "TANDOORI MOMOS", price: 255, description: "served with the special hot chilli chutney" },
      { name: "SUPER CRUNCHY MOMOS", price: 255, description: "served with the special hot chilli chutney" }
    ]
  },
  {
    name: "Continental Combo Meals",
    items: [
      { name: "VEGETABLE CUTLETS (2 Pcs)", price: 275, description: "All served with French Fries & 1pc Garlic Toast" },
      { name: "FRESH COTTEGE CHEESE CUTLETS (2 Pcs)", price: 350, description: "All served with French Fries & 1pc Garlic Toast" },
      { name: "BAKED VEGETABLE", price: 375, description: "All served with French Fries & 1pc Garlic Toast" }
    ]
  },
  {
    name: "Burgers",
    items: [
      { name: "CRISPY ALOO TIKKI BURGER", price: 245 },
      { name: "VEGGIELICIOUS BURGER", price: 245 },
      { name: "FANTASTIC FALAFEL BURGER", price: 245 },
      { name: "PANEER PERI PERI BURGER", price: 325 }
    ]
  },
  {
    name: "Wraps",
    items: [
      { name: "ALOO TIKKI WRAP", price: 245 },
      { name: "VEGETABLE SEEKH WRAP", price: 245 },
      { name: "FALAFEL WRAP", price: 255 },
      { name: "PANEER TIKKA WRAP", price: 325 },
      { name: "SOYA TIKKA WRAP", price: 325 }
    ]
  },
  {
    name: "Sandwiches",
    items: [
      { name: "TOMATO-MOZZARELLA-BASIL SANDWICH", price: 245 },
      { name: "CHEESE-LETTUCE-TOMATO-OLIVES SANDWICH", price: 245 },
      { name: "PANEER TIKKA SANDWICH", price: 325 },
      { name: "BOMBAY SANDWICH", price: 245 },
      { name: "PLAIN COLESLAW SANDWICH (4 pcs)", price: 245 },
      { name: "VEG CLASSIC SANDWICH (4 pcs)", price: 245, description: "Butter, Tomato & Cucumber" },
      { name: "VEG GRILLED SANDWICH (4 pcs)", price: 295, description: "Butter, Tomato & Cucumber" }
    ]
  },
  {
    name: "Pizzas (9\")",
    items: [
      { name: "PIZZA MARGHERITA", price: 335 },
      { name: "ONION-TOMATO-CAPSICUM", price: 375 },
      { name: "CORN-CAPSICUM-ONION-JALAPENO", price: 375 },
      { name: "MUSHROOM-CAPSICUM-CORN-OLIVE", price: 375 },
      { name: "PANEER TIKKA-ONION-CORIANDER", price: 375 },
      { name: "VEG. SCHEZWAN PIZZA", price: 375 }
    ]
  },
  {
    name: "Pasta",
    items: [
      { name: "TOMATO AND BASIL", price: 375, description: "served with garlic toast on the side" },
      { name: "ROASTED VEGGIE ALFREDO", price: 375, description: "served with garlic toast on the side" },
      { name: "VEGGIE VEG MAC 'N' CHEESE", price: 375, description: "served with garlic toast on the side" },
      { name: "SPICY MEXICAN", price: 375, description: "served with garlic toast on the side" }
    ]
  },
  {
    name: "Desi Combo Meals",
    items: [
      { name: "DILLI 6 KE CHATKARE", variants: [{ name: "half", price: 250 }, { name: "full", price: 360 }], description: "Chole Bhature + Choice of Lassi/ Regular Soft Drink + Achaar (*Diet Soft Drinks not included)" },
      { name: "AGRA KA SWAAD", variants: [{ name: "half", price: 160 }, { name: "full", price: 275 }], description: "Bedmi Kachauri + Rasmisa Aloo (Half/ Full) + Achaar (dal pithi stuffed special Agra poories)" },
      { name: "BAHAAR E PUNJAB", price: 370, description: "Choice of Stuffed Kulcha + Dal Makhani (Aloo-Pyaz/ Mixed/ Paneer)" },
      { name: "KHUSHNUMA BIRYANI", price: 370, description: "VV Special Biryani + Raita + Pickle Papad + Salad" },
      { name: "SANGAM SWAD THALI", price: 475, description: "Dal Makhani + Mixed Vegetable + Kadhai Paneer Vegetable Pulao + Chaach 1 Mini Roti + 1 Mini Laccha Paratha 1 Gulab Jamun + Salad + Achaar" },
      { name: "U.P. KI THALI", price: 425, description: "Dal Tadka + Jeera Aloo + Kadhai Paneer Jeera Rice + 2 Mini Rotis + 1 Gulab Jamun + Salad + Achaar" },
      { name: "MINI THALI", price: 275, description: "Dal Makhani + Kadhai Paneer 1 Mini Roti + 1 Mini Laccha Paratha + Salad" }
    ]
  },
  {
    name: "Idli & Vada",
    items: [
      { name: "PLAIN IDLI", variants: [{ name: "half", price: 100 }, { name: "full", price: 175 }] },
      { name: "GHEE PODI IDLI", price: 185 },
      { name: "IDLI VADA DUET", price: 185 },
      { name: "MEDU VADA", price: 185 }
    ]
  },
  {
    name: "Upma",
    items: [
      { name: "VEGETABLE UPMA", price: 255 }
    ]
  },
  {
    name: "Uttapam",
    items: [
      { name: "TOMATO UTTAPAM", price: 265 },
      { name: "MIXED UTTAPAM", price: 265 },
      { name: "ONION UTTAPAM", price: 265 }
    ]
  },
  {
    name: "Dosa",
    items: [
      { name: "PLAIN DOSA", price: 225 },
      { name: "MASALA DOSA", price: 255 },
      { name: "MYSORE MASALA DOSA", price: 275 },
      { name: "BUTTER MASALA DOSA", price: 275 },
      { name: "RAVA MASALA DOSA", price: 260 },
      { name: "ONION RAVA MASALA DOSA", price: 275 },
      { name: "PANEER DOSA", price: 345 },
      { name: "GINI DOSA", price: 375 },
      { name: "VEGGIE VEG SPECIAL DOSA", price: 385 }
    ]
  },
  {
    name: "Chinese a-la-Carte",
    items: [
      { name: "VEGETABLE MANCHURIAN GRAVY", price: 375 },
      { name: "VEGETABLES IN HOT GARLIC SAUCE", price: 375 },
      { name: "CHILLI PANEER GRAVY", price: 375 },
      { name: "VEGETABLE FRIED RICE", price: 375 },
      { name: "VEGETABLE CHOWMEIN", price: 375 }
    ]
  },
  {
    name: "Chinese Combo Meals",
    items: [
      { name: "CHINESE COMBO MEALS", price: 375, description: "Choose Any 1 Gravy - VEGETABLE MANCHURIAN GRAVY, HOT GARLIC VEGETABLES GRAVY, CHILLI PANEERGRAVY + Choose Rice or Noodles - HAKKA NOODLES, FRIED RICE + Snacks in the Meal - SPRING ROLL, KIMCHI SALAD" }
    ]
  },
  {
    name: "Indian A la Carte",
    items: [
      { name: "DAL MAKHANI", price: 310 },
      { name: "DAL TADKA", price: 310 },
      { name: "AMRITSARI CHOLE", price: 310 },
      { name: "SOYA CHAAP BUTTER MASALA", price: 400 },
      { name: "PANEER MAKHANI", price: 400 },
      { name: "KADAI PANEER", price: 400 },
      { name: "PANEER TIKKA MASALA", price: 400 },
      { name: "PALAK PANEER", price: 400 },
      { name: "MATAR PANEER", price: 400 },
      { name: "SHAHI PANEER", price: 400 },
      { name: "MUSHROOM MATAR", price: 400 },
      { name: "RASMISA ALOO", price: 310 },
      { name: "MIXED VEGETABLE", price: 310 },
      { name: "SEASONAL VEGETABLE", price: 310 },
      { name: "ZEERA ALOO", price: 310 }
    ]
  },
  {
    name: "Accompaniments",
    items: [
      { name: "BOONDI RAITA", price: 175 },
      { name: "GREEN SALAD", price: 115 },
      { name: "PAPAD", price: 50 }
    ]
  },
  {
    name: "Indian Breads",
    items: [
      { name: "TANDOORI ROTI", price: 70 },
      { name: "TANDOORI BUTTER ROTI", price: 80 },
      { name: "LACCHA PARATHA", price: 95 },
      { name: "PUDINA PARATHA", price: 100 },
      { name: "MISSI ROTI", price: 100 },
      { name: "PLAIN NAAN", price: 120 },
      { name: "BUTTER NAAN", price: 130 },
      { name: "GARLIC NAAN", price: 135 },
      { name: "ALOO-PYAZ KULCHA", price: 160 },
      { name: "MIX KULCHA", price: 180 },
      { name: "PANEER KULCHA", price: 195 }
    ]
  },
  {
    name: "Rice",
    items: [
      { name: "STEAMED RICE", price: 295 },
      { name: "VEGETABLE PULAO", price: 365 },
      { name: "ZEERA RICE", price: 365 }
    ]
  },
  {
    name: "Shake-it-up",
    items: [
      { name: "VANILLA MAGIC", price: 245 },
      { name: "MANGO MANIA", price: 245 },
      { name: "CHEEKY CHOCOLATE", price: 245 },
      { name: "BERRY STRAWBERRY", price: 245 },
      { name: "BANANA CARAMEL", price: 245 },
      { name: "CHOCOLATE BROWNIE", price: 245 },
      { name: "OREO CRUMBLE", price: 245 },
      { name: "COOKIE CRUMBLE SHAKE", price: 245 },
      { name: "KRAZY KITKAT", price: 245 },
      { name: "COLD COFFEE", price: 245 },
      { name: "COLD COFFEE WITH ICE-CREAM", price: 245 }
    ]
  },
  {
    name: "Ice Cream Sodas/ Floats",
    items: [
      { name: "MIDNIGHT BEAUTY", price: 195 },
      { name: "GOLDEN GLOW", price: 195 }
    ]
  },
  {
    name: "Quenchers",
    items: [
      { name: "FRESH LIME SODA", price: 165, description: "sweet/ salted/ mixed" },
      { name: "LEMON ICE TEA", price: 165 },
      { name: "PEACH ICE TEA", price: 165 },
      { name: "BLUE LAGOON", price: 165 },
      { name: "VIRGIN MOJITO", price: 165 },
      { name: "MANGO CRUSH", price: 165 },
      { name: "KHUS LEMON SHERBET", price: 165 },
      { name: "SPICED JAMUN SHERBET", price: 165 },
      { name: "AAM MINT PANNA", price: 165 },
      { name: "JAIN SHIKANJI", price: 165 },
      { name: "ICED AMERICANO", price: 165 },
      { name: "MASALA CHAACH", price: 165 },
      { name: "LASSI", price: 165, description: "sweet/ salted" },
      { name: "AERATED BEVERAGES", price: 125 },
      { name: "DIET COLA", price: 135 },
      { name: "BOTTLED WATER", needsVerification: true, description: "at mrp" }
    ]
  },
  {
    name: "Serve It Hot",
    items: [
      { name: "MASALA CHAI", price: 100 },
      { name: "GREEN TEA", price: 100 },
      { name: "AMERICANO", price: 145 },
      { name: "CAPPUCCINO", price: 165 },
      { name: "CAFÉ LATTE", price: 165 },
      { name: "HOT CHOCOLATE", price: 145 }
    ]
  },
  {
    name: "Desserts",
    items: [
      { name: "GULAB JAMUN (1 pc)", price: 70 },
      { name: "ICE CREAM CHOICE (1 scoop)", price: 105 },
      { name: "GULAB JAMUN WITH ICE-CREAM (1 pc with 1 scoop)", price: 170 },
      { name: "BROWNIE WITH CHOCOLATE SAUCE", price: 185 },
      { name: "BROWNIE WITH ICE CREAM & NUTS", price: 285 },
      { name: "EL CHICO PUDDING", price: 285 },
      { name: "ICE-CREAM SUNDAE", price: 285 },
      { name: "HOT FUDGE SUNDAE", price: 285 },
      { name: "BANANA SPLIT", price: 285 }
    ]
  },
  {
    name: "In House Special Kulfis",
    items: [
      { name: "KULFI OF THE DAY", price: 195 },
      { name: "PARSI KULFI", price: 195 }
    ]
  }
];
