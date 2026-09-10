import type { MenuCategory } from './menuData';

export const elchicoRestaurantMenu: MenuCategory[] = [
  {
    name: 'COLD BEVERAGES',
    items: [
      { name: 'Mineral Water Bottle', needsVerification: true },
      { name: 'Chilled Aerated Beverages (Cocacola / Sprite / Thumsup)', price: 210 },
      { name: 'Diet Cola', price: 210 },
      { name: 'Fresh Lime (Soda/Water)', price: 210 },
      { name: 'Masala Lemonade', price: 245 },
      { name: 'Mojito (Classic/Cucumber & Mint/Orange & Basil)', price: 245 },
      { name: 'Fruit Spritzer (Green Apple/Pomogranate/Pineapple)', price: 245 },
      { name: 'Blue Lagoon', price: 245 },
      { name: 'Lassi (Salted/Sweet)', price: 245 },
      { name: 'Iced Tea (Lemon/Peach)', price: 245 },
      { name: 'Cold Coffee', price: 255 },
      { name: 'Cold Coffee with Ice-cream', price: 325 },
      { name: 'Milk Shakes - (Vanilla/Strawberry/Chocolate/Oreo/Kit-Kat)', price: 325 },
    ]
  },
  {
    name: 'HOT BEVERAGES',
    items: [
      { name: 'Cona Coffee', price: 235 },
      { name: 'Nescafe Gold With Milk / Cream', price: 235 },
      { name: 'Tea Pot (Darjeeling Leaf Tea/Green Tea)', price: 235 },
      { name: 'Hot Chocolate', price: 235 },
      { name: 'Readymade Masala Tea', price: 235 },
    ]
  },
  {
    name: 'BURGERS / SANDWICHES (GRILLED/PLAIN)',
    items: [
      { name: 'Cheese and Tomato Sandwich', description: 'Mozzerella & Cheddar cheese layered with fresh tomatos.', price: 375, dietary: 'veg' },
      { name: 'Vegetable Club Sandwich', description: 'Interlaid with Grilled Cottage Cheese lettuce, tomatos, cucumber, mayonnaise and cheese.', price: 425, dietary: 'veg' },
      { name: 'Paneer Tikka Sandwich', description: 'Paneer tikka mixed with capsicum and onion with tangy tandoori mayonnaise.', price: 425, dietary: 'veg' },
      { name: 'Vegetable Patty Burger', description: 'Vegetable patty made with potato carrot and beans layered with Ice berg lettuce & cheese slice.', price: 390, dietary: 'veg' },
      { name: 'Egg Sandwich', description: 'Soft boiled egg, seasoned with mustard dressing & mayonnaise.', price: 375, dietary: 'non-veg' },
      { name: 'Non - Veg Club Sandwich', description: 'Three slices of bread layered with lettuce, tomato, cucmber, chicken, fried egg & cheese slice.', price: 475, dietary: 'non-veg' },
      { name: 'Chicken Sandwich', description: 'Shredded grilled chicken mixed with mayonnaise', price: 375, dietary: 'non-veg' },
      { name: 'Chicken Patty Burger', description: 'Chicken patty topped with lettuce, tomatoes, fried egg & coleslaw.', price: 500, dietary: 'non-veg' },
      { name: 'Mutton Patty Burger', description: 'Mutton patty topped with lettuce, tomatoes, fried egg and caramelized onion.', price: 525, dietary: 'non-veg' },
    ]
  },
  {
    name: 'APPETIZERS VEGETARIAN',
    items: [
      { name: 'Methi Corn Kebab (6 Pieces)', price: 515, dietary: 'veg' },
      { name: 'Subz Galawati Kebab (6 Pieces)', price: 515, dietary: 'veg' },
      { name: 'Dahi Ke Kebab (6pieces)', price: 515, dietary: 'veg' },
      { name: 'Honey Chilli Potato', price: 515, dietary: 'veg' },
      { name: 'Vegetable Spring Rolls (6 Pieces)', price: 515, dietary: 'veg' },
      { name: 'Thai Chilli Basil Soya Chaap (8 Pieces)', price: 550, dietary: 'veg' },
      { name: 'Lotus Stem Honey Chilli', price: 550, dietary: 'veg' },
      { name: 'Babycorn Mushroom Salt & Pepper', price: 550, dietary: 'veg' },
      { name: 'Crispy Corn', price: 550, dietary: 'veg' },
      { name: 'Tandoori Masala Aloo (8 Pieces)', price: 515, dietary: 'veg' },
      { name: 'Mushroom Tikka (12 Pieces)', price: 515, dietary: 'veg' },
      { name: 'Paneer Tikka (8 Pieces)', price: 550, dietary: 'veg' },
      { name: 'Malai Paneer Tikka (8 Pieces)', price: 550, dietary: 'veg' },
      { name: 'Paneer Thecha ( 8 Pieces)', price: 550, dietary: 'veg' },
      { name: 'Achari Paneer Tikka (8 Pieces)', price: 550, dietary: 'veg' },
      { name: 'Paneer Gilafi Seekh (6 Pieces)', price: 550, dietary: 'veg' },
      { name: 'Paneer Salt & Pepper', price: 550, dietary: 'veg' },
      { name: 'Chilli Paneer-dry', price: 550, dietary: 'veg' },
      { name: 'Guntur Chilli Paneer', price: 550, dietary: 'veg' },
      { name: 'Subz Kabab Khazana', price: 950, dietary: 'veg' },
    ]
  },
  {
    name: 'APPETIZERS NON-VEGETARIAN',
    items: [
      { name: 'Tandoori Chicken', variants: [{name: 'half', price: 525}, {name: 'full', price: 925}], dietary: 'non-veg' },
      { name: 'Chicken Spring Rolls (6 Pieces)', price: 525, dietary: 'non-veg' },
      { name: 'Chicken Satay (8 Pieces)', price: 625, dietary: 'non-veg' },
      { name: 'Chilli Chicken - Dry', price: 675, dietary: 'non-veg' },
      { name: 'Guntur Chilli Chicken (8 Pieces)', price: 675, dietary: 'non-veg' },
      { name: 'Drums Of Heaven (4 Pieces)', price: 675, dietary: 'non-veg' },
      { name: 'Pahadi Chicken Tikka (8 Pieces)', price: 675, dietary: 'non-veg' },
      { name: 'Chicken Tikka (8 Pieces)', price: 675, dietary: 'non-veg' },
      { name: 'Chicken Malai Tikka (8 Pieces)', price: 675, dietary: 'non-veg' },
      { name: 'Chicken Chilli Garlic Tikka (8 Pieces)', price: 675, dietary: 'non-veg' },
      { name: 'Murgh Kalimirch Tikka (8 Pieces)', price: 675, dietary: 'non-veg' },
      { name: 'Mutton Boti Kebab Boneless', price: 795, dietary: 'non-veg' },
      { name: 'Mutton Seekh Kebab (8 Pieces)', price: 720, dietary: 'non-veg' },
      { name: 'Mutton Shammi Kebab (6 Pieces)', price: 720, dietary: 'non-veg' },
      { name: 'Ajwaini Fish Tikka (8 Pieces)', price: 775, dietary: 'non-veg' },
      { name: 'Kasturi Fish Tikka (8 Pieces)', price: 775, dietary: 'non-veg' },
      { name: 'Fish Salt And Pepper (8 Pieces)', price: 775, dietary: 'non-veg' },
      { name: 'Chilly Fish-dry (8 Pieces)', price: 775, dietary: 'non-veg' },
      { name: 'Fish Fingers With Tartar Sauce (8 Pieces)', price: 775, dietary: 'non-veg' },
      { name: 'Non-veg Kabab Khazana', price: 1200, dietary: 'non-veg' },
      { name: 'Panco Fried Cooconut Shrimp (8 Pieces)', price: 900, dietary: 'non-veg' },
      { name: 'Prawns Salt & Pepper (8 Pieces)', price: 900, dietary: 'non-veg' },
      { name: 'Jhinga Ajwaini (8 Pieces)', price: 900, dietary: 'non-veg' },
    ]
  },
  {
    name: 'SOUP',
    items: [
      { name: 'Japanese Miso Soup', price: 275 },
      { name: 'Mushroom Jalapeno Veloute', price: 275 },
      { name: 'Cream Of Tomato Soup', price: 275 },
      { name: 'Tomato Basil', price: 275 },
      { name: 'French Onion', price: 295 },
      { name: 'Sweet Corn', variants: [{name: 'Vegetable', price: 295}, {name: 'Chicken', price: 315}] },
      { name: 'Lemon Coriander', variants: [{name: 'Vegetable', price: 295}, {name: 'Chicken', price: 315}] },
      { name: 'Hot And Sour', variants: [{name: 'Vegetable', price: 295}, {name: 'Chicken', price: 315}] },
      { name: 'Manchow', variants: [{name: 'Vegetable', price: 295}, {name: 'Chicken', price: 315}] },
      { name: 'Clear Soup', variants: [{name: 'Vegetable', price: 295}, {name: 'Chicken', price: 315}] },
      { name: 'Spicy Thai Noodle Soup', variants: [{name: 'Vegetable', price: 295}, {name: 'Chicken', price: 315}] },
      { name: 'Tom Yum', variants: [{name: 'Vegetable', price: 295}, {name: 'Chicken', price: 315}] },
      { name: 'Tom Kha', variants: [{name: 'Vegetable', price: 295}, {name: 'Chicken', price: 315}] },
      { name: 'Smoked Chicken Jalapeno Veloute', price: 315, dietary: 'non-veg' },
      { name: 'Chicken Consomme', price: 315, dietary: 'non-veg' },
    ]
  },
  {
    name: 'RAMEN',
    items: [
      { name: 'Vegetable', price: 495, dietary: 'veg' },
      { name: 'Chicken', price: 595, dietary: 'non-veg' },
      { name: 'Prawns', price: 715, dietary: 'non-veg' },
    ]
  },
  {
    name: 'SALADS',
    items: [
      { name: 'Thai Raw Papaya Salad', variants: [{name: 'Veg', price: 425}, {name: 'Chicken', price: 495}, {name: 'Prawn', price: 525}] },
      { name: 'Caesar Salad', variants: [{name: 'Veg', price: 435}, {name: 'Chicken', price: 495}] },
      { name: 'Russian Salad', price: 435 },
      { name: 'Mediterranean Chickpea Salad with Lavash', price: 435 },
      { name: 'Vegan Burrito Bowl', price: 455, dietary: 'vegan' },
      { name: 'Chicken Tikka Salad', price: 575, dietary: 'non-veg' },
      { name: 'Chicken Burrito Bowl', price: 575, dietary: 'non-veg' },
    ]
  },
  {
    name: 'INDIAN CURRIES VEGETARIAN',
    items: [
      { name: 'Paneer Khatta Pyaz', price: 645, dietary: 'veg' },
      { name: 'Kadai Paneer', price: 645, dietary: 'veg' },
      { name: 'Paneer Tikka Masala', price: 645, dietary: 'veg' },
      { name: 'Stuffed Paneer Rolls Spinach Gravy', price: 645, dietary: 'veg' },
      { name: 'Paneer Shahi Korma', price: 645, dietary: 'veg' },
      { name: 'Paneer Butter Masala', price: 645, dietary: 'veg' },
      { name: 'Matar Paneer', price: 645, dietary: 'veg' },
      { name: 'Palak Paneer', price: 645, dietary: 'veg' },
      { name: 'Angoori Malai Kofta', price: 645, dietary: 'veg' },
      { name: 'Mushroom Do Pyaza', price: 645, dietary: 'veg' },
      { name: 'Mushroom Hara Pyaz', price: 645, dietary: 'veg' },
      { name: 'Kadhai Corn Mushroom', price: 645, dietary: 'veg' },
      { name: 'El Chico Dum Aloo', price: 645, dietary: 'veg' },
      { name: 'Zeera Aloo', price: 595, dietary: 'veg' },
      { name: 'Martaban Ke Chole', price: 645, dietary: 'veg' },
      { name: 'Subz Chilli Milli', price: 645, dietary: 'veg' },
      { name: 'Mixed Vegetable', price: 645, dietary: 'veg' },
      { name: 'Sookhi Subzi - Seasonal Vegetable of the Day', price: 645, dietary: 'veg' },
    ]
  },
  {
    name: 'INDIAN CURRIES NON-VEGETARIAN',
    items: [
      { name: 'Butter Chicken (Boneless) - 6 Pieces', price: 795, dietary: 'non-veg' },
      { name: 'Butter Chicken (Half)', price: 750, dietary: 'non-veg' },
      { name: 'Murg Bhartha', price: 750, dietary: 'non-veg' },
      { name: 'Chicken Mughlai', price: 750, dietary: 'non-veg' },
      { name: 'Chicken Kadai', price: 750, dietary: 'non-veg' },
      { name: 'El Chico Chicken Curry', price: 750, dietary: 'non-veg' },
      { name: 'Murg Lakhnawi Korma (Boneless)', price: 795, dietary: 'non-veg' },
      { name: 'Chicken Tikka Masala (Boneless)', price: 795, dietary: 'non-veg' },
      { name: 'Egg Curry', price: 675, dietary: 'non-veg' },
      { name: 'Masala Omelette Curry', price: 675, dietary: 'non-veg' },
      { name: 'El Chico Mutton Curry', price: 815, dietary: 'non-veg' },
      { name: 'Dhaba Gosht', price: 815, dietary: 'non-veg' },
      { name: 'Mutton Kadai', price: 815, dietary: 'non-veg' },
      { name: 'Mutton Roghan Josh', price: 815, dietary: 'non-veg' },
      { name: 'Nalli Nihari', price: 815, dietary: 'non-veg' },
      { name: 'Fish Curry', price: 875, dietary: 'non-veg' },
      { name: 'Fish Malabar', price: 875, dietary: 'non-veg' },
      { name: 'Goan Prawn Curry', price: 950, dietary: 'non-veg' },
    ]
  },
  {
    name: 'DAL',
    items: [
      { name: 'Dal Makhani', price: 615, dietary: 'veg' },
      { name: 'Dal Arhar Masala Fry', price: 615, dietary: 'veg' },
    ]
  },
  {
    name: 'BIRYANI, PULAO & KHICHDI',
    items: [
      { name: 'Peas Pulao/Onion Pulao', price: 275, dietary: 'veg' },
      { name: 'Shahi Jeera Pulao', price: 275, dietary: 'veg' },
      { name: 'Steamed Rice', price: 275, dietary: 'veg' },
      { name: 'Daal Khichdi', price: 595, dietary: 'veg' },
      { name: 'Masala Khichdi', price: 595, dietary: 'veg' },
      { name: 'Awadhi Subz Biryani', price: 645, dietary: 'veg' },
      { name: 'Egg Biryani', price: 695, dietary: 'non-veg' },
      { name: 'Chicken Biryani', price: 745, dietary: 'non-veg' },
      { name: 'Chicken Biryani (Boneless)', price: 745, dietary: 'non-veg' },
      { name: 'Gosht Biryani', price: 815, dietary: 'non-veg' },
    ]
  },
  {
    name: 'ACCOMPANIMENTS',
    items: [
      { name: 'Roasted Papad (4 Pcs.)', price: 115 },
      { name: 'Special Papad Basket', price: 275 },
      { name: 'Green Salad', price: 155 },
      { name: 'Pineapple Raita/boondi Raita/mixed Vegetable Raita', price: 275 },
    ]
  },
  {
    name: 'TANDOOR BREADS',
    items: [
      { name: 'Roti Tandoori', price: 80, dietary: 'veg' },
      { name: 'Butter Roti', price: 100, dietary: 'veg' },
      { name: 'Garlic Roti', price: 110, dietary: 'veg' },
      { name: 'Missi Roti', price: 110, dietary: 'veg' },
      { name: 'Plain Naan', price: 120, dietary: 'veg' },
      { name: 'Butter Naan', price: 150, dietary: 'veg' },
      { name: 'Garlic Naan', price: 180, dietary: 'veg' },
      { name: 'Cheese Naan', price: 200, dietary: 'veg' },
      { name: 'Cheese & Garlic Naan', price: 225, dietary: 'veg' },
      { name: 'Plain Kulcha Tandoori', price: 120, dietary: 'veg' },
      { name: 'Onion Masala Kulcha', price: 145, dietary: 'veg' },
      { name: 'Paneer Kulcha', price: 210, dietary: 'veg' },
      { name: 'Vegetable Kulcha', price: 210, dietary: 'veg' },
      { name: 'Laccha Paratha', price: 150, dietary: 'veg' },
      { name: 'Pudina Paratha', price: 150, dietary: 'veg' },
      { name: 'Hari Mirch Ka Paratha', price: 150, dietary: 'veg' },
      { name: 'Lal Mirch Ka Paratha', price: 150, dietary: 'veg' },
      { name: 'Paneer Paratha', price: 210, dietary: 'veg' },
      { name: 'Vegetable Paratha', price: 210, dietary: 'veg' },
      { name: 'Bread Basket', price: 585, dietary: 'veg' },
    ]
  },
  {
    name: 'DIMSUM - 6 PCS',
    items: [
      { name: 'Mushroom Crystal Dumpling', price: 645, dietary: 'veg' },
      { name: 'Exotic Vegetables & Chive', price: 645, dietary: 'veg' },
      { name: 'Chicken And Mushroom Dumpling', price: 675, dietary: 'non-veg' },
      { name: 'Chicken And Coriander Siu Mai', price: 675, dietary: 'non-veg' },
    ]
  },
  {
    name: 'SUSHI - 8 PCS',
    items: [
      { name: 'Vegetable Makki Roll', price: 625, dietary: 'veg' },
      { name: 'Vegetable Tempura Dragon Roll', price: 625, dietary: 'veg' },
      { name: 'Californian Cream Cheese & Vegetable', price: 625, dietary: 'veg' },
      { name: 'Chicken Makki Roll', price: 675, dietary: 'non-veg' },
      { name: 'Sesame Chicken', price: 675, dietary: 'non-veg' },
      { name: 'Prawn Tempura Dragon Roll', price: 745, dietary: 'non-veg' },
    ]
  },
  {
    name: 'RICE & NOODLES FRIED RICE / CHOWMEIN',
    items: [
      { name: 'Vegetable', price: 595, dietary: 'veg' },
      { name: 'Chilli Garlic', price: 595, dietary: 'veg' },
      { name: 'Egg', price: 595, dietary: 'non-veg' },
      { name: 'Chicken & Egg', price: 645, dietary: 'non-veg' },
      { name: 'Mixed Meat', price: 675, dietary: 'non-veg' },
    ]
  },
  {
    name: 'CHOPSUEY',
    items: [
      { name: 'Vegetable Chopsuey', price: 595, dietary: 'veg' },
      { name: 'Chicken Chopsuey', price: 645, dietary: 'non-veg' },
      { name: 'American Chopsuey (Chicken, mutton and egg)', price: 675, dietary: 'non-veg' },
    ]
  },
  {
    name: 'ORIENTAL VEGETARIAN',
    items: [
      { name: 'Vegetables Hong Kong Style', price: 595, dietary: 'veg' },
      { name: 'Vegetable Manchurian ( Gravy )', price: 595, dietary: 'veg' },
      { name: 'Sweet & Sour Vegetables With Pineapple', price: 595, dietary: 'veg' },
      { name: 'Szechuan Style Vegetables', price: 595, dietary: 'veg' },
      { name: 'Sliced Vegetables With Babycorn & Mushroom', price: 595, dietary: 'veg' },
      { name: 'Chilli Potatoes ( Gravy )', price: 595, dietary: 'veg' },
      { name: 'Exotic Stir Fried Asian Greens', price: 645, dietary: 'veg' },
      { name: 'Chilli Paneer ( Gravy )', price: 645, dietary: 'veg' },
      { name: 'Paneer Manchurian ( Gravy )', price: 645, dietary: 'veg' },
      { name: 'Kung Pao Paneer', price: 645, dietary: 'veg' },
      { name: 'Thai Vegetable Curry - Red/Green', price: 645, dietary: 'veg' },
    ]
  },
  {
    name: 'ORIENTAL NON-VEGETARIAN',
    items: [
      { name: 'Sliced Garlic Chicken (Gravy)', price: 715, dietary: 'non-veg' },
      { name: 'Chicken Hongkong Style (Gravy)', price: 715, dietary: 'non-veg' },
      { name: 'Chilli Chicken (Gravy)', price: 715, dietary: 'non-veg' },
      { name: 'Chicken Manchurian (Gravy)', price: 715, dietary: 'non-veg' },
      { name: 'Chicken Hot Garlic Sauce (Gravy)', price: 715, dietary: 'non-veg' },
      { name: 'Kung Pao Chicken', price: 715, dietary: 'non-veg' },
      { name: 'Szechuan Chicken', price: 715, dietary: 'non-veg' },
      { name: 'Sliced Chicken with Babycorn, Mushrooms & Vegetables', price: 715, dietary: 'non-veg' },
      { name: 'Thai Chicken Curry- Red / Green', price: 715, dietary: 'non-veg' },
      { name: 'Fish in Hot Garlic Sauce', price: 815, dietary: 'non-veg' },
      { name: 'Szechuan Style Fish / Prawns', variants: [{name: 'Fish', price: 815}, {name: 'Prawns', price: 895}], dietary: 'non-veg' },
      { name: 'Stir Fried Fish / Prawns in Chilli and Black Bean Sauce', variants: [{name: 'Fish', price: 815}, {name: 'Prawns', price: 895}], dietary: 'non-veg' },
    ]
  },
  {
    name: "CONTINENTAL QUESADILLA'S",
    items: [
      { name: 'Onions, Corn, Jalapenos & Olives', price: 445, dietary: 'veg' },
      { name: 'Grilled Chicken, Onions & Jalapenos', price: 495, dietary: 'non-veg' },
    ]
  },
  {
    name: 'CONTINENTAL VEGETARIAN',
    items: [
      { name: 'Vegetable Cutlets', price: 450, dietary: 'veg' },
      { name: 'Vegetable Enchiladas', price: 525, dietary: 'veg' },
      { name: 'Vegetable Tacitoes', price: 525, dietary: 'veg' },
      { name: 'Fresh Cottage Cheese Cutlets', price: 575, dietary: 'veg' },
      { name: 'Baked Vegetables', price: 595, dietary: 'veg' },
      { name: 'Mushroom Stroganoff', price: 595, dietary: 'veg' },
      { name: 'Baked Spinach And Corn', price: 595, dietary: 'veg' },
      { name: 'Mushroom Risotto', price: 595, dietary: 'veg' },
      { name: 'Texan Cottage', price: 595, dietary: 'veg' },
      { name: 'Cannelloni', price: 595, dietary: 'veg' },
    ]
  },
  {
    name: 'CONTINENTAL NON VEGETARIAN',
    items: [
      { name: 'Grilled Chicken With Mushroom Or Pepper Sauce', price: 755, dietary: 'non-veg' },
      { name: 'Chicken Cutlet & Chips', price: 755, dietary: 'non-veg' },
      { name: 'Chicken Enchiladas', price: 755, dietary: 'non-veg' },
      { name: 'Chicken Tacitose', price: 755, dietary: 'non-veg' },
      { name: 'Chicken Cannelloni', price: 755, dietary: 'non-veg' },
      { name: 'Chicken Stroganoff', price: 755, dietary: 'non-veg' },
      { name: 'Roast Chicken and Chips', price: 795, dietary: 'non-veg' },
      { name: 'Chicken Risotto', price: 795, dietary: 'non-veg' },
      { name: 'Chicken Ala Keiv', price: 795, dietary: 'non-veg' },
      { name: 'Stuffed Chicken Breast', price: 795, dietary: 'non-veg' },
      { name: 'Roast Mutton & Chips', price: 825, dietary: 'non-veg' },
      { name: 'Mutton Cutlets & Chips', price: 825, dietary: 'non-veg' },
      { name: 'Baked Fish.', price: 875, dietary: 'non-veg' },
      { name: 'Tomato Fish', price: 875, dietary: 'non-veg' },
      { name: 'Grilled Fish In Lemon Caper Butter', price: 875, dietary: 'non-veg' },
      { name: 'Fried Fish & Chips (In your choice Crumbed / Battered Fried)', price: 875, dietary: 'non-veg' },
      { name: 'Grilled Prawns', price: 945, dietary: 'non-veg' },
    ]
  },
  {
    name: 'CONTINENTAL ACCOMPANIMENTS',
    items: [
      { name: 'Garlic Toast (4 Pcs.)', price: 245 },
      { name: 'Garlic Toast with Cheese (4 Pcs.)', price: 295 },
      { name: 'French Fries With Dips', price: 425 },
    ]
  },
  {
    name: 'SIZZLERS',
    items: [
      { name: 'Vegetable Grill', price: 825, dietary: 'veg' },
      { name: 'Grilled Cottage Cheese Steak', price: 875, dietary: 'veg' },
      { name: 'Grilled Minced Cottage Cheese Patty', price: 875, dietary: 'veg' },
      { name: 'Grilled Minced Chicken Steak', price: 895, dietary: 'non-veg' },
      { name: 'Grilled Chicken', price: 895, dietary: 'non-veg' },
      { name: 'Grilled Mince Mutton Chops', price: 925, dietary: 'non-veg' },
      { name: 'Roast Mutton With Mushrooms', price: 925, dietary: 'non-veg' },
      { name: 'Grilled Fish', price: 925, dietary: 'non-veg' },
      { name: 'Mixed Grill-chicken, Mutton, Fish, Egg', price: 975, dietary: 'non-veg' },
    ]
  },
  {
    name: 'PASTA (Penne / Spaghetti)',
    items: [
      { name: 'Aglio Olio ( Roast Veg / Roast Chicken ) Spaghetti', variants: [{name: 'Roast Veg', price: 625}, {name: 'Roast Chicken', price: 725}] },
      { name: 'Arabiata', variants: [{name: 'Roast Veg', price: 625}, {name: 'Roast Chicken', price: 725}] },
      { name: 'Cheese Sauce', variants: [{name: 'Veg', price: 675}, {name: 'Chicken', price: 775}] },
      { name: 'Mac & Cheese', price: 675 },
      { name: 'Spinach And Cottage Cheese Ravioli', price: 675, dietary: 'veg' },
      { name: 'Vegetable Lasagne', price: 675, dietary: 'veg' },
      { name: 'Roast Chicken Lasagne', price: 725, dietary: 'non-veg' },
      { name: 'Butter Chicken Pasta', price: 725, dietary: 'non-veg' },
    ]
  },
  {
    name: 'DESSERTS',
    items: [
      { name: 'Choice Of Ice-cream', variants: [{name: 'Vanilla/Strawberry', price: 195}, {name: 'Chocolate/Coffee/Orange', price: 215}] },
      { name: 'Vanilla Ice-cream With Hot Chocolate Sauce', price: 275 },
      { name: 'Blueberry Cheesecake', price: 275 },
      { name: 'Fruit Salad And Cream', price: 275 },
      { name: 'El Chico Tuttie Fruttie', price: 375 },
      { name: 'Small Tuttie Fruttie', price: 275 },
      { name: 'Hawaiian Snowball', price: 295 },
      { name: 'Gulab Jamun (2 Pieces)', price: 245 },
      { name: 'Hot Gulab Jamun With Ice-cream', price: 275 },
      { name: 'Triple Sundae', price: 525 },
      { name: 'El Chico Special Pudding', price: 325 },
      { name: 'Chocolate Indulgence', price: 495 },
      { name: 'Creme Brulee, Rich Egg And Cream Custard With Caramel Crust', price: 325 },
      { name: 'Hot Brownie With Chocolate Sauce', price: 275 },
      { name: 'Sizzling Brownie With Vanilla Ice-cream And Chocolate Sauce', price: 375 },
    ]
  }
];
