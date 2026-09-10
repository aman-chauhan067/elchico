import type { MenuCategory } from './menuData';

export const vegetarianismBrochure: MenuCategory[] = [
  {
    name: "MILK SHAKES",
    items: [
      { name: "VANILLA MAGIC", price: 175, dietary: 'veg' },
      { name: "MANGO MANIA", price: 175, dietary: 'veg' },
      { name: "CHEEKY CHOCOLATE", price: 205, dietary: 'veg' },
      { name: "BERRY STRAWBERRY", price: 205, dietary: 'veg' },
      { name: "BANANA CARAMEL", price: 205, dietary: 'veg' },
      { name: "CHOCOLATE BROWNIE", price: 205, dietary: 'veg' },
      { name: "OREO CRUMBLE", price: 205, dietary: 'veg' },
      { name: "COOKIE CRUMBLE SHAKE", price: 205, dietary: 'veg' },
      { name: "KRAZY KITKAT", price: 205, dietary: 'veg' },
      { name: "COLD COFFEE", price: 175, dietary: 'veg' },
      { name: "COLD COFFEE WITH ICE-CREAM", price: 205, dietary: 'veg' }
    ]
  },
  {
    name: "ICE-CREAM SODAS /FLOATS",
    items: [
      { name: "MIDNIGHT BEAUTY", description: "(Cola with Ice-cream)", price: 145, dietary: 'veg' },
      { name: "GOLDEN GLOW", description: "(Mirinda with Ice-cream)", price: 145, dietary: 'veg' }
    ]
  },
  {
    name: "QUENCHERS",
    items: [
      { name: "AERATED BEVERAGES", price: 100, dietary: 'veg' },
      { name: "DIET COLA", price: 115, dietary: 'veg' },
      { name: "FRESH LIME SODA (Sweet/Salted/Mixed)", price: 135, dietary: 'veg' },
      { name: "LEMON ICE TEA", price: 135, dietary: 'veg' },
      { name: "PEACH ICE TEA", price: 135, dietary: 'veg' },
      { name: "LASSI (Sweet/ Salted)", price: 135, dietary: 'veg' },
      { name: "VIRGIN MOJITO", price: 135, dietary: 'veg' },
      { name: "MANGO CRUSH", price: 135, dietary: 'veg' },
      { name: "KHUS LEMON SHERBET", price: 135, dietary: 'veg' },
      { name: "AAM MINT PANNA", price: 135, dietary: 'veg' },
      { name: "JAIN SHIKANJI", price: 135, dietary: 'veg' },
      { name: "MASALA CHAACH", price: 135, dietary: 'veg' },
      { name: "BOTTLED WATER", needsVerification: true, dietary: 'veg' } // Price is MRP
    ]
  },
  {
    name: "TEA",
    items: [
      { name: "MASALA CHAI", price: 90, dietary: 'veg' },
      { name: "GREEN TEA", price: 90, dietary: 'veg' }
    ]
  },
  {
    name: "COFFEE",
    items: [
      { name: "AMERICANO", price: 125, dietary: 'veg' },
      { name: "ICED AMERICANO", price: 125, dietary: 'veg' },
      { name: "CAPPUCCINO", price: 135, dietary: 'veg' },
      { name: "CAFÉ LATTE", price: 135, dietary: 'veg' },
      { name: "SOUTH INDIAN FILTER COFFEE", price: 135, dietary: 'veg' },
      { name: "PHITI HUI COFFEE", price: 145, dietary: 'veg' },
      { name: "HOT CHOCOLATE", price: 145, dietary: 'veg' }
    ]
  },
  {
    name: "SUPER SOUPS",
    items: [
      { name: "CREAM OF TOMATO", price: 110, dietary: 'veg' },
      { name: "SWEET CORN", price: 110, dietary: 'veg' },
      { name: "HOT 'N' SOUR", price: 110, dietary: 'veg' },
      { name: "MANCHOW", price: 110, dietary: 'veg' }
    ]
  },
  {
    name: "KEBABS",
    items: [
      { name: "VEGETABLE SEEKH KEBAB", price: 320, dietary: 'veg' },
      { name: "TANDOORI SOYA CHAAP", price: 350, dietary: 'veg' },
      { name: "PANEER TIKKA", price: 350, dietary: 'veg' },
      { name: "PERI PERI PANEER TIKKA", price: 350, dietary: 'veg' }
    ]
  },
  {
    name: "SALADS",
    items: [
      { name: "MEDITERRANEAN CHICKPEA & CORN", price: 210, dietary: 'veg' },
      { name: "MEXICAN RED BEAN", price: 210, dietary: 'veg' },
      { name: "GREEK SALAD", price: 210, dietary: 'veg' }
    ]
  },
  {
    name: "BURGERS & SANDWICHES",
    items: [
      { name: "CRISPY ALOO TIKKI BURGER", price: 210, dietary: 'veg' },
      { name: "VEGGIELICIOUS BURGER", price: 210, dietary: 'veg' },
      { name: "FANTASTIC FALAFEL BURGER", price: 225, dietary: 'veg' },
      { name: "PANEER PERI PERI BURGER", price: 275, dietary: 'veg' },
      { name: "BOMBAY SANDWICH", price: 210, dietary: 'veg' },
      { name: "TOMATO-MOZZARELLA BASIL SANDWICH", price: 210, dietary: 'veg' },
      { name: "CHEESE-LETTUCE-TOMATO-OLIVES SANDWICH", price: 210, dietary: 'veg' },
      { name: "PANEER TIKKA SANDWICH", price: 250, dietary: 'veg' },
      { name: "VEG. MAYO SANDWICH (4PCS.)", price: 210, dietary: 'veg' }
    ]
  },
  {
    name: "WRAPS",
    items: [
      { name: "ALOO TIKKI WRAP", price: 210, dietary: 'veg' },
      { name: "VEGETABLE SEEKH WRAP", price: 210, dietary: 'veg' },
      { name: "FALAFEL WRAP", price: 225, dietary: 'veg' },
      { name: "PANEER TIKKA WRAP", price: 270, dietary: 'veg' },
      { name: "SOYA TIKKA WRAP", price: 270, dietary: 'veg' }
    ]
  },
  {
    name: "CHAAT CHASKA",
    items: [
      { name: "DILLI KE GOL GAPPE (Atta/Sooji)", price: 100, dietary: 'veg' },
      { name: "TEEKHI SEV PURI", price: 135, dietary: 'veg' },
      { name: "MAKHANE KI BHEL CHAAT", price: 145, dietary: 'veg' },
      { name: "PAPDI CHAAT", price: 155, dietary: 'veg' },
      { name: "DAHI ALOO PHUCHKA", price: 155, dietary: 'veg' },
      { name: "DILLI 6 DAHI BHALLE", price: 155, dietary: 'veg' },
      { name: "BHALLA PAPDI CHAAT", price: 155, dietary: 'veg' },
      { name: "KHASTA ALOO TIKKI", price: 155, dietary: 'veg' },
      { name: "BIKANERI RAJ KACHORI", price: 195, dietary: 'veg' },
      { name: "LUCKNOW BASKET CHAAT", price: 195, dietary: 'veg' }
    ]
  },
  {
    name: "SNACKS",
    items: [
      { name: "VADA PAV", price: 135, dietary: 'veg' },
      { name: "DABELI", price: 135, dietary: 'veg' },
      { name: "CHOWMEIN BHEL", price: 135, dietary: 'veg' },
      { name: "TIKKI CHOLE", price: 155, dietary: 'veg' },
      { name: "FRENCH FRIES (Salted / Peri Peri)", price: 195, dietary: 'veg' },
      { name: "PAO BHAJI", price: 210, dietary: 'veg' },
      { name: "CRISPY VEGETABLE SPRINGROLLS", price: 210, dietary: 'veg' },
      { name: "SUPER SPICY POTATO WEDGES", price: 210, dietary: 'veg' },
      { name: "FALAFEL FANTASTIC", price: 210, dietary: 'veg' },
      { name: "CHEESY GARLIC BREAD", price: 210, dietary: 'veg' },
      { name: "MATRA KULCHA", price: 210, dietary: 'veg' },
      { name: "PANEER 65", price: 265, dietary: 'veg' },
      { name: "PANEER PAKORA (8PCS.)", price: 265, dietary: 'veg' },
      { name: "ASSORTED PAKORA (12PCS)", price: 265, dietary: 'veg' },
      { name: "VEGETABLE MANCHURIAN (DRY)", price: 265, dietary: 'veg' },
      { name: "CHILLI CHEESE TOAST", price: 280, dietary: 'veg' },
      { name: "CHILLI PANEER (DRY)", price: 325, dietary: 'veg' }
    ]
  },
  {
    name: "PIZZA",
    items: [
      { name: "PIZZA MARGHERITA", price: 270, dietary: 'veg' },
      { name: "ONION-TOMATO-CAPSICUM", price: 310, dietary: 'veg' },
      { name: "CORN-CAPSICUM-ONION-JALAPENO", price: 310, dietary: 'veg' },
      { name: "MUSHROOM-CAPSICUM-CORN-OLIVE", price: 310, dietary: 'veg' },
      { name: "PANEER TIKKA-ONION-CORIANDER", price: 310, dietary: 'veg' },
      { name: "VEG. SCHEZWAN PIZZA", price: 310, dietary: 'veg' }
    ]
  },
  {
    name: "PASTA",
    items: [
      { name: "TOMATO AND BASIL PASTA", price: 265, dietary: 'veg' },
      { name: "ROASTED VEGGIE ALFREDO PASTA", price: 290, dietary: 'veg' },
      { name: "VEGGIE VEG MAC 'N' CHEESE PASTA", price: 290, dietary: 'veg' },
      { name: "SPICY MEXICAN PASTA", price: 310, dietary: 'veg' }
    ]
  },
  {
    name: "CHINESE (MOMO MANIA)",
    items: [
      { name: "STEAMED DARJEELING MOMOS", price: 195, dietary: 'veg' },
      { name: "TANDOORI MOMOS", price: 220, dietary: 'veg' },
      { name: "SUPER CRUNCHY MOMOS", price: 220, dietary: 'veg' }
    ]
  },
  {
    name: "CHINESE MEAL COMBOS",
    items: [
      { name: "VEGETABLE MANCHURIAN", price: 265, dietary: 'veg' },
      { name: "HOT GARLIC VEGETABLES", price: 325, dietary: 'veg' },
      { name: "CHILLI PANEER", price: 325, dietary: 'veg' },
      { name: "GREEN THAI CURRY RICE", price: 325, dietary: 'veg' }
    ]
  },
  {
    name: "CHINESE ALA CARTE",
    items: [
      { name: "VEGETABLE MANCHURIAN", price: 265, dietary: 'veg' },
      { name: "HOT GARLIC VEGETABLES", price: 325, dietary: 'veg' },
      { name: "CHILLI PANEER (GRAVY)", price: 325, dietary: 'veg' },
      { name: "GREEN THAI CURRY", price: 325, dietary: 'veg' },
      { name: "STEAMED RICE", price: 265, dietary: 'veg' },
      { name: "VEGETABLE FRIED RICE", price: 315, dietary: 'veg' },
      { name: "VEGETABLE CHOWMEIN", price: 315, dietary: 'veg' }
    ]
  },
  {
    name: "NORTH INDIAN COMBO MEALS",
    items: [
      { name: "CHOLE BHATURE", variants: [{name: 'HALF', price: 125}, {name: 'FULL', price: 225}], dietary: 'veg' },
      { name: "BEDMI KACHAURI WITH RASMISA ALOO", variants: [{name: 'HALF', price: 125}, {name: 'FULL', price: 225}], dietary: 'veg' },
      { name: "ALOO-PYAZ KULCHA WITH DAL MAKHANI", price: 320, dietary: 'veg' },
      { name: "MIX KULCHA WITH DAL MAKHANI", price: 320, dietary: 'veg' },
      { name: "PANEER KULCHA WITH DAL MAKHANI", price: 320, dietary: 'veg' },
      { name: "VEGGIE VEG BIRYANI", price: 320, dietary: 'veg' }
    ]
  },
  {
    name: "NORTH INDIAN ALA CARTE",
    items: [
      { name: "DAL MAKHANI", price: 265, dietary: 'veg' },
      { name: "DAL TADKA", price: 265, dietary: 'veg' },
      { name: "AMRITSARI CHOLE", price: 265, dietary: 'veg' },
      { name: "SOYA CHAAP BUTTER MASALA", price: 325, dietary: 'veg' },
      { name: "PANEER MAKHANI", price: 325, dietary: 'veg' },
      { name: "KADAI PANEER", price: 325, dietary: 'veg' },
      { name: "PANEER TIKKA MASALA", price: 325, dietary: 'veg' },
      { name: "MUSHROOM MATAR", price: 325, dietary: 'veg' },
      { name: "RASMISA ALOO", price: 265, dietary: 'veg' },
      { name: "SEASONAL VEGETABLES", price: 265, dietary: 'veg' },
      { name: "MIXED VEGETABLE", price: 265, dietary: 'veg' },
      { name: "PLAIN STEAMED RICE", price: 265, dietary: 'veg' },
      { name: "VEGETABLE PULAO", price: 325, dietary: 'veg' },
      { name: "BOONDI RAITA", price: 150, dietary: 'veg' },
      { name: "GREEN SALAD", price: 100, dietary: 'veg' },
      { name: "TANDOORI ROTI", price: 55, dietary: 'veg' },
      { name: "TANDOORI BUTTER ROTI", price: 65, dietary: 'veg' },
      { name: "LACCHA PARATHA", price: 80, dietary: 'veg' },
      { name: "PUDINA PARATHA", price: 85, dietary: 'veg' },
      { name: "MISSI ROTI", price: 85, dietary: 'veg' },
      { name: "PLAIN NAAN", price: 100, dietary: 'veg' },
      { name: "BUTTER NAAN", price: 110, dietary: 'veg' },
      { name: "GARLIC NAAN", price: 115, dietary: 'veg' },
      { name: "ALOO-PYAZ KULCHA", price: 140, dietary: 'veg' },
      { name: "MIX KULCHA", price: 160, dietary: 'veg' },
      { name: "PANEER KULCHA", price: 175, dietary: 'veg' }
    ]
  },
  {
    name: "NORTH INDIAN THALI",
    items: [
      { name: "VEGGIE VEG SPECIAL THALI", description: "(chaach, dal makhani, mixed vegetable, kadhai paneer, vegetable pulao, 1 roti or 1 mini roti & 1 mini laccha paratha, 1 gulab jamun, salad and pickle)", price: 425, dietary: 'veg' }
    ]
  },
  {
    name: "SOUTH INDIAN (IDLI / VADA / UPMA / UTTAPAM)",
    items: [
      { name: "PLAIN IDLI", price: 155, dietary: 'veg' },
      { name: "GHEE PODI IDLI", price: 175, dietary: 'veg' },
      { name: "IDLI VADA DUET", price: 200, dietary: 'veg' },
      { name: "MEDU VADA", price: 165, dietary: 'veg' },
      { name: "VEGETABLE UPMA", price: 215, dietary: 'veg' },
      { name: "ONION UTTAPAM", price: 220, dietary: 'veg' },
      { name: "TOMATO UTTAPAM", price: 220, dietary: 'veg' },
      { name: "MIXED UTTAPAM", price: 220, dietary: 'veg' }
    ]
  },
  {
    name: "SOUTH INDIAN (DOSA)",
    items: [
      { name: "PLAIN DOSA", price: 200, dietary: 'veg' },
      { name: "MASALA DOSA", price: 220, dietary: 'veg' },
      { name: "MYSORE MASALA DOSA", price: 250, dietary: 'veg' },
      { name: "BUTTER MASALA DOSA", price: 250, dietary: 'veg' },
      { name: "RAVA MASALA DOSA", price: 220, dietary: 'veg' },
      { name: "ONION RAVA MASALA DOSA", price: 240, dietary: 'veg' },
      { name: "PANEER DOSA", price: 275, dietary: 'veg' },
      { name: "GINI DOSA", price: 300, dietary: 'veg' },
      { name: "VEGGIE VEG SPECIAL DOSA", price: 325, dietary: 'veg' }
    ]
  },
  {
    name: "DESSERTS (OUR HOUSE SPECIAL KULFIS)",
    items: [
      { name: "KULFI PINEAPPLE", price: 155, dietary: 'veg' },
      { name: "KULFI COCONUT", price: 155, dietary: 'veg' },
      { name: "KULFI OF THE DAY", price: 155, dietary: 'veg' },
      { name: "KULFI CHOCOLATE & ROASTED ALMOND", price: 175, dietary: 'veg' },
      { name: "PARSI KULFI", price: 175, dietary: 'veg' }
    ]
  },
  {
    name: "OTHER DESSERTS",
    items: [
      { name: "ICE CREAM CHOICE", description: "(Vanilla, Strawberry, Chocolate, Mango)", price: 80, dietary: 'veg' },
      { name: "GULAB JAMUN (Single Piece)", price: 80, dietary: 'veg' },
      { name: "GULAB JAMUN WITH ICE-CREAM", price: 155, dietary: 'veg' },
      { name: "EL CHICO CHOCOLATE PUDDING", price: 175, dietary: 'veg' },
      { name: "EL CHICO TRIFLE PUDDING", price: 175, dietary: 'veg' },
      { name: "BROWNIE WITH CHOCOLATE SAUCE", price: 175, dietary: 'veg' },
      { name: "ICE-CREAM SUNDAE", price: 240, dietary: 'veg' },
      { name: "HOT FUDGE SUNDAE", price: 240, dietary: 'veg' },
      { name: "BANANA SPLIT", price: 240, dietary: 'veg' },
      { name: "BROWNIE WITH ICE CREAM & NUTS", price: 240, dietary: 'veg' }
    ]
  }
];
