import type { MenuCategory } from './menuData';

export const elchicoAMenu: MenuCategory[] = [
  {
    name: "COLD BEVERAGES",
    items: [
      { name: "Mineral Water Bottle", needsVerification: true },
      { name: "Diet Cola", price: 191 },
      { name: "Fresh Lime (Soda/Water)", price: 191 },
      { name: "Masala Lemonade", price: 191 },
      { name: "Mojito (Classic/Cucumber & Mint/Orange & Basil)", price: 235 },
      { name: "Fruit Spritzer (Green Apple/Pomogranate/Pineapple)", price: 235 },
      { name: "Blue Lagoon", price: 235 },
      { name: "Lassi (Salted/Sweet)", price: 235 },
      { name: "Iced Tea (lemon/Peach)", price: 235 },
      { name: "Cold Coffee", price: 235 },
      { name: "Cold Coffee with Ice-cream", price: 300 },
      { name: "Milk Shakes - (Vanilla/Strawberry/Chocolate)", price: 300 }
    ]
  },
  {
    name: "HOT BEVERAGES",
    items: [
      { name: "Cona Coffee", price: 215 },
      { name: "Nescafe Gold With Milk / Cream", price: 215 },
      { name: "Davidoff With Milk / Cream", price: 245 },
      { name: "Tea Pot (Darjeeling Leaf Tea/Green Tea/Chamomile)", price: 215 },
      { name: "Hot Chocolate", price: 215 }
    ]
  },
  {
    name: "SANDWICHES (GRILLED/PLAIN) / BURGERS",
    items: [
      { name: "Plain Cheese Sandwich", price: 350 },
      { name: "Cheese and Tomato Sandwich", price: 350 },
      { name: "Paneer Tikka Sandwich", price: 400 },
      { name: "Tomato and Cucumber Sandwich", price: 325 },
      { name: "Vegetable Patty Burger", price: 350 },
      { name: "Grilled Chicken Sandwich", price: 425 },
      { name: "Chicken Tikka Sandwich", price: 425 },
      { name: "Chicken Burger", price: 425 },
      { name: "Mutton Patty Burger", price: 475 }
    ]
  },
  {
    name: "APPETIZERS VEGETARIAN",
    items: [
      { name: "Subz Kebab Khazana", price: 850 },
      { name: "Subz Galawati Kebab (6 Pieces)", price: 475 },
      { name: "Tandoori Masala Aloo (10-12 Pieces)", price: 455 },
      { name: "Mushroom Tikka (10-12 Pieces)", price: 525 },
      { name: "Paneer Tikka (8 Pieces)", price: 525 },
      { name: "Malai Paneer Tikka (8 Pieces)", price: 525 },
      { name: "Achari Paneer Tikka (8 Pieces)", price: 525 },
      { name: "Thai Chilli Basil Soya Chaap (8 Pieces)", price: 525 },
      { name: "Lotus Stem Honey Chilli", price: 525 },
      { name: "Honey Chilli Potato", price: 455 },
      { name: "Paneer Salt & Pepper", price: 550 },
      { name: "Babycorn Mushroom Salt & Pepper", price: 525 },
      { name: "Guntur Chilli Paneer", price: 550 },
      { name: "Vegetable Spring Rolls (6 Pieces)", price: 475 },
      { name: "Methi Corn Kebab (8 Pieces)", price: 475 },
      { name: "Crispy Corn", price: 525 }
    ]
  },
  {
    name: "APPETIZERS NON-VEGETARIAN",
    items: [
      { name: "Murg Pahadi Kebab (8 Pieces)", price: 600 },
      { name: "Tandoori Chicken", variants: [{ name: "Half", price: 475 }, { name: "Full", price: 750 }] },
      { name: "Chicken Tikka (8 Pieces)", price: 600 },
      { name: "Chicken Reshmi Kebab (8 Pieces)", price: 600 },
      { name: "Chicken Chilli Garlic Kebab (8 Pieces)", price: 600 },
      { name: "Italian Spicy Chicken Sausages", price: 515 },
      { name: "Guntur Chilli Chicken", price: 600 },
      { name: "Mutton Seekh Kebab (8 Pieces)", price: 650 },
      { name: "Mutton Shammi Kebab (6 Pieces)", price: 610 },
      { name: "Ajwaini Fish Tikka (8 Pieces) (Sole)", price: 700 },
      { name: "Tawa Pepper Fish In Banana Leaf (8 Pieces) (Sole)", price: 700 },
      { name: "Jhinga Ajwaini (8 Pieces)", price: 800 },
      { name: "Non-veg Kebab Khazana", price: 1050 },
      { name: "Chicken Satay", price: 515 },
      { name: "Oriental Black Pepper Chicken (Dry)", price: 575 },
      { name: "Fish Salt And Pepper", price: 700 },
      { name: "Thai Wok Fish", price: 700 },
      { name: "Fish Finger With Tartar Sauce", price: 700 },
      { name: "Panko Fried Coconut Shrimp (8 Pieces)", price: 750 },
      { name: "Prawns Salt & Pepper", price: 800 }
    ]
  },
  {
    name: "SALADS",
    items: [
      { name: "Thai Raw Papaya Salad", variants: [{ name: "Veg", price: 350 }, { name: "Chicken", price: 425 }, { name: "Prawns", price: 550 }] },
      { name: "Caesar Salad", variants: [{ name: "Veg", price: 350 }, { name: "Smoked Chicken", price: 450 }] },
      { name: "Warm Grill Veg Salad", price: 350 },
      { name: "Greek Salad", price: 400 },
      { name: "Exotic Vegetable Salad", price: 400 },
      { name: "Russian Salad", price: 350 },
      { name: "Chicken Tikka Salad", price: 499 },
      { name: "Italian Chicken Salad", price: 499 },
      { name: "Roast Chicken, Pineapple & Cheese salad", price: 499 }
    ]
  },
  {
    name: "SOUP",
    items: [
      { name: "Japanese Miso Soup", price: 265 },
      { name: "Mushroom Jalapeno Veloute", price: 265 },
      { name: "Cream of Tomato Soup", price: 265 },
      { name: "Tomato Basil", price: 265 },
      { name: "French Onion", price: 295 },
      { name: "Sweet Corn", variants: [{ name: "Vegetable", price: 265 }, { name: "Chicken", price: 295 }] },
      { name: "Lemon Coriander", variants: [{ name: "Vegetable", price: 265 }, { name: "Chicken", price: 295 }] },
      { name: "Hot And Sour", variants: [{ name: "Vegetable", price: 265 }, { name: "Chicken", price: 295 }] },
      { name: "Manchow", variants: [{ name: "Vegetable", price: 265 }, { name: "Chicken", price: 295 }] },
      { name: "Clear Soup", variants: [{ name: "Vegetable", price: 265 }, { name: "Chicken", price: 295 }] },
      { name: "Spicy Thai Noodle Soup", variants: [{ name: "Vegetable", price: 265 }, { name: "Chicken", price: 295 }] },
      { name: "Tom Yum", variants: [{ name: "Vegetable", price: 265 }, { name: "Chicken", price: 295 }, { name: "Prawns", price: 305 }] },
      { name: "Tom Kha", variants: [{ name: "Vegetable", price: 265 }, { name: "Chicken", price: 300 }, { name: "Prawns", price: 315 }] },
      { name: "Smoked Chicken Jalapeno Veloute", price: 295 },
      { name: "Chicken Consomme", price: 295 }
    ]
  },
  {
    name: "INDIAN CURRIES VEGETARIAN",
    items: [
      { name: "Paneer Khatta Pyaaz", price: 575 },
      { name: "Kadai Paneer", price: 575 },
      { name: "Paneer Tikka Masala", price: 575 },
      { name: "Stuffed Paneer Rolls, Spinach Gravy", price: 550 },
      { name: "Paneer Shahi Korma", price: 550 },
      { name: "Angoori Malai Kofta", price: 550 },
      { name: "Matar Paneer", price: 550 },
      { name: "Palak Paneer", price: 550 },
      { name: "Khoya Matar", price: 550 },
      { name: "El Chico Dum Aloo", price: 525 },
      { name: "Martaban Ke Chole", price: 499 },
      { name: "Zeera Aloo", price: 499 },
      { name: "Mixed Vegetables", price: 499 },
      { name: "Subz Chilli Milli", price: 550 },
      { name: "Sookhi Subzi - Seasonal Vegetable Of The Day", price: 499 }
    ]
  },
  {
    name: "DAL",
    items: [
      { name: "Dal Urad Makhani", price: 525 },
      { name: "Dal Arhar Masala Fry", price: 499 },
      { name: "Dal Palak", price: 499 }
    ]
  },
  {
    name: "INDIAN CURRIES NON-VEGETARIAN",
    items: [
      { name: "Butter Chicken (Boneless)", price: 700 },
      { name: "Butter Chicken (half)", price: 650 },
      { name: "Murg Bhartha", price: 650 },
      { name: "Chicken Tikka Masala", price: 700 },
      { name: "Lahori Chicken Kadai", price: 675 },
      { name: "El Chico Chicken Curry", price: 650 },
      { name: "Murg Dhaniwal Korma (boneless)", price: 700 },
      { name: "Murg Awadhi Korma (boneless)", price: 700 },
      { name: "Chicken Kali Mirch (boneless)", price: 700 },
      { name: "El Chico Mutton Curry", price: 710 },
      { name: "Nalli Nihari", price: 750 },
      { name: "Dhaba Gosht", price: 710 },
      { name: "Rara Gosht", price: 710 },
      { name: "Lahori Gosht Kadai", price: 710 },
      { name: "Awadhi Gosht Korma", price: 710 },
      { name: "Keema Masala / Keema Matar", price: 710 },
      { name: "Goan Fish Curry (Sole)", price: 765 },
      { name: "Goan Prawn Curry", price: 850 }
    ]
  },
  {
    name: "BIRYANI & PULAO",
    items: [
      { name: "Awadhi Subz Biryani", price: 550 },
      { name: "Peas Pulao", price: 410 },
      { name: "Shahi Jeera Pulao", price: 410 },
      { name: "Steamed Basmati", price: 410 },
      { name: "Gosht Biryani", price: 700 },
      { name: "Chicken Biryani", price: 675 },
      { name: "Egg Biryani", price: 600 }
    ]
  },
  {
    name: "ACCOMPANIMENTS",
    items: [
      { name: "Roasted Papad (2 Pcs.)", price: 80 },
      { name: "Pineapple Raita/Boondi Raita/Mixed Vegetable Raita", price: 250 },
      { name: "Green Salad", price: 195 },
      { name: "Special Papad Basket", price: 215 }
    ]
  },
  {
    name: "TANDOOR BREADS",
    items: [
      { name: "MILLET KI ROTI", price: 90 },
      { name: "Roti Tandoori", price: 75 },
      { name: "Butter Roti", price: 90 },
      { name: "Garlic Roti", price: 95 },
      { name: "Missi Roti", price: 105 },
      { name: "Plain Naan", price: 115 },
      { name: "Butter Naan", price: 145 },
      { name: "Garlic Naan", price: 175 },
      { name: "Cheese Naan", price: 200 },
      { name: "Cheese & Garlic Naan", price: 225 },
      { name: "Plain Kulcha Tandoori", price: 115 },
      { name: "Paneer Kulcha", price: 200 },
      { name: "Vegetable Kulcha", price: 200 },
      { name: "Onion Masala Kulcha", price: 145 },
      { name: "Laccha Paratha", price: 145 },
      { name: "Paneer Paratha", price: 200 },
      { name: "Vegetable Paratha", price: 200 },
      { name: "Pudina Paratha", price: 150 },
      { name: "Basil Olive Paratha", price: 200 },
      { name: "Hari Mirch Ka Paratha", price: 150 },
      { name: "Lal Mirch Ka Paratha", price: 150 },
      { name: "Keema Naan", price: 260 },
      { name: "El Chico Special Bread Basket", price: 550 }
    ]
  },
  {
    name: "ORIENTAL DIMSUM - 6 pcs",
    items: [
      { name: "Mushroom Crystal Dumpling", price: 575 },
      { name: "Exotic Vegetables & Chive", price: 575 },
      { name: "Sweet Corn & Water Chestnut", price: 575 },
      { name: "Chicken and Mushroom Dumpling", price: 610 },
      { name: "Chicken and Coriander Siu Mai", price: 610 },
      { name: "Prawn, Ginger & Scallion", price: 650 }
    ]
  },
  {
    name: "SUSHI - 8 PCS",
    items: [
      { name: "Vegetable Tempura Dragon Roll", price: 575 },
      { name: "Californian Cream Cheese & Vegetable", price: 610 },
      { name: "Sesame Chicken", price: 610 },
      { name: "Prawns Tempura Dragon Roll", price: 650 },
      { name: "Californian Crab Roll", price: 675 }
    ]
  },
  {
    name: "CHICKEN/MUTTON/FISH/PRAWNS (ORIENTAL)",
    items: [
      { name: "Sliced Garlic Chicken (Gravy)", price: 600 },
      { name: "El Chico Special Chilli Chicken (Dry / Gravy)", price: 600 },
      { name: "Chicken Manchurian - (Dry / Gravy)", price: 600 },
      { name: "Kung Pao Chicken (Gravy)", price: 600 },
      { name: "Szechuan Chicken (Gravy)", price: 600 },
      { name: "Sliced Chicken With Babycorn, Mushrooms & Vegetables (Gravy)", price: 600 },
      { name: "Thai Chicken Curry - ( Red / Green ) served with a portion of rice", price: 650 },
      { name: "Fish In Hot Garlic Sauce (Gravy)", price: 650 },
      { name: "Szechuan Style (Fish / Prawns) (Gravy)", variants: [{ name: "Fish", price: 650 }, { name: "Prawns", price: 750 }] },
      { name: "Stir Fried Fish / Prawns In Chilli And Black Bean Sauce (Gravy)", variants: [{ name: "Fish", price: 700 }, { name: "Prawns", price: 775 }] }
    ]
  },
  {
    name: "VEGETARIAN (ORIENTAL)",
    items: [
      { name: "Chilli Paneer - ( Dry / Gravy )", price: 550 },
      { name: "Paneer Manchurian - ( Dry / Gravy )", price: 550 },
      { name: "Kung Pao Paneer (Gravy )", price: 550 },
      { name: "Vegetables Hong Kong Style (Gravy )", price: 525 },
      { name: "Vegetable Manchurian - ( Dry / Gravy )", price: 525 },
      { name: "Sweet & Sour Vegetables With Pineapple (Gravy )", price: 525 },
      { name: "Szechuan Style Vegetables (Gravy )", price: 525 },
      { name: "Sliced Vegetables With Babycorn & Mushroom (Gravy )", price: 550 },
      { name: "Chilli Potatoes ( Dry / Gravy )", price: 525 },
      { name: "Thai Vegetable Curry - Red/Green (served with a portion of rice)", price: 600 }
    ]
  },
  {
    name: "RICE & NOODLES FRIED RICE / CHOWMEIN",
    items: [
      { name: "Vegetable", price: 500 },
      { name: "Chilli Garlic", price: 525 },
      { name: "Steamed Rice", price: 410 },
      { name: "Mixed Meat", price: 575 },
      { name: "Chicken & Egg", price: 525 },
      { name: "Egg", price: 515 }
    ]
  },
  {
    name: "CHOPSUEY",
    items: [
      { name: "Vegetable Chopsuey", price: 500 },
      { name: "Chicken Chopsuey", price: 525 },
      { name: "American Chopsuey (chicken, mutton and egg)", price: 575 }
    ]
  },
  {
    name: "CONTINENTAL QUESADILLA'S",
    items: [
      { name: "Onion, Corn, Jalepenos & Olives", price: 400 },
      { name: "Grilled Chicken, Onions & Jalepenos", price: 450 }
    ]
  },
  {
    name: "CONTINENTAL VEGETARIAN",
    items: [
      { name: "Baked Vegetables", price: 550 },
      { name: "Cannelloni", price: 600 },
      { name: "Fresh Cottage Cheese Cutlets", price: 525 },
      { name: "Vegetable Cutlets", price: 350 },
      { name: "Grilled Cottage Cheese Steak In BBQ Sauce", price: 680 },
      { name: "Mushroom Stroganoff", price: 550 },
      { name: "Grilled Vegetables Arabiata", price: 550 },
      { name: "Mushroom Risotto", price: 550 }
    ]
  },
  {
    name: "SIZZLERS",
    items: [
      { name: "Vegetable Grill", price: 725 },
      { name: "Grilled Cottage Cheese Steak", price: 750 },
      { name: "Mixed grill - Chicken, Mutton, Fish, Egg", price: 850 },
      { name: "Grilled Minced Chicken Steak", price: 750 },
      { name: "Grilled Chicken", price: 750 },
      { name: "Roast Mutton With Mushrooms", price: 800 },
      { name: "Grilled Minced Mutton Chops", price: 750 },
      { name: "Grilled Fish, prepared with river sole fish", price: 800 }
    ]
  },
  {
    name: "CHICKEN/MUTTON/FISH/PRAWNS (CONTINENTAL)",
    items: [
      { name: "Roast Chicken And Chips", price: 700 },
      { name: "Chicken Cutlet & Chips", price: 645 },
      { name: "Grilled Chicken With Mushroom Sauce / Pepper Sauce", price: 645 },
      { name: "Smoked Chicken Risotto", price: 695 },
      { name: "Grilled Chicken Parmigiana", price: 695 },
      { name: "Stuffed Chicken Breasts", price: 695 },
      { name: "Chicken Strognoff", price: 695 },
      { name: "Roast Mutton & Chips", price: 775 },
      { name: "Mutton Cutlets & Chips", price: 775 },
      { name: "Baked Fish", price: 800 },
      { name: "Tomato Fish", price: 800 },
      { name: "Fried Fish And Chips", price: 800 },
      { name: "Grilled Fish In Lemon Caper Butter", price: 800 },
      { name: "Grilled Prawns", price: 875 },
      { name: "Prawn Risotto", price: 875 }
    ]
  },
  {
    name: "PASTA (Penne / Spaghetti Fettucinni)",
    items: [
      { name: "Mac & Cheese ( Macaroni )", price: 575 },
      { name: "Spinach and Cottage Cheese Ravioli", price: 575 },
      { name: "Aglio Olio ( Roast Veg / Roast Chicken ) Spaghetti", variants: [{ name: "Roast Veg", price: 525 }, { name: "Roast Chicken", price: 625 }] },
      { name: "Vegetable Lasagne", price: 575 },
      { name: "Tomato Basil ( Roast Veg / Roast Chicken )", variants: [{ name: "Roast Veg", price: 525 }, { name: "Roast Chicken", price: 625 }] },
      { name: "Arabiata ( Roast Veg / Roast Chicken )", variants: [{ name: "Roast Veg", price: 525 }, { name: "Roast Chicken", price: 625 }] },
      { name: "Cheese Sauce (Veg. / Chicken)", variants: [{ name: "Veg", price: 575 }, { name: "Chicken", price: 675 }] },
      { name: "Basil And Cashew Pesto ( Veg. / Chicken )", variants: [{ name: "Veg", price: 575 }, { name: "Chicken", price: 650 }] },
      { name: "Roast Chicken Lasagne", price: 650 },
      { name: "Butter Chicken Pasta", price: 650 },
      { name: "Baked Penne pasta in a Spicy Peri-Peri sauce", variants: [{ name: "Veg", price: 525 }, { name: "Chicken", price: 625 }] },
      { name: "Chicken Bolognaise (Spaghetti)", price: 650 }
    ]
  },
  {
    name: "PASTA ACCOMPANIMENTS",
    items: [
      { name: "Garlic Toast (4 Pcs.)", price: 225 },
      { name: "Garlic Toast with Cheese (4 Pcs.)", price: 275 },
      { name: "French Fries With Dips", price: 355 }
    ]
  },
  {
    name: "DESSERTS",
    items: [
      { name: "Ice-cream - Belgian Chocolate/ Coffee Almond Fudge / Fig & Honey", price: 250 },
      { name: "Vanilla Ice-cream With Hot Chocolate Sauce", price: 250 },
      { name: "Fresh Fruit Cheese Cake", price: 250 },
      { name: "Fruit Salad And Cream", price: 250 },
      { name: "El Chico Tuttie Fruttie", price: 325 },
      { name: "Small Tuttie Fruttie", price: 225 },
      { name: "Hawaiian Snowball", price: 250 },
      { name: "Hot Gulab Jamun (2 Pieces)", price: 215 },
      { name: "Hot Gulab Jamun With Ice-cream", price: 250 },
      { name: "Crème Brulee", price: 300 },
      { name: "El Chico Special Pudding", price: 300 },
      { name: "Hot Brownie With Chocolate Sauce", price: 300 },
      { name: "Sizzling Brownie", price: 300 },
      { name: "Brownie Sundae", price: 300 },
      { name: "Chocolate Indulgence", price: 400 },
      { name: "Day Special", price: 175 }
    ]
  }
];
