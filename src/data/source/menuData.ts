export interface MenuVariant {
  name: string;
  price: number;
}

export interface MenuItem {
  name: string;
  description?: string;
  price?: number;
  variants?: MenuVariant[];
  dietary?: 'veg' | 'non-veg' | 'vegan' | 'eggless';
  needsVerification?: boolean;
}

export interface MenuCategory {
  name: string;
  items: MenuItem[];
}

export interface MenuData {
  brandId: string;
  menuId: string;
  title: string;
  categories: MenuCategory[];
}

import { elchicoAMenu } from './elchico_a';
import { elchicoRestaurantMenu } from './elchico_restaurant';
import { tbcCivilLinesMenu } from './tbc_civil_lines';
import { tbcMenu1 } from './tbc_menu_1';
import { vvMenu } from './vv_menu';
import { vegetarianismBrochure } from './vegetarianism_brochure';

export const menuDatabase: MenuData[] = [
  {
    brandId: 'el-chico-restaurant',
    menuId: 'elchico-restaurant-main',
    title: 'El Chico Restaurant - Main Menu',
    categories: elchicoRestaurantMenu
  },
  {
    brandId: 'el-chico-restaurant',
    menuId: 'elchico-a',
    title: 'El Chico Restaurant - Menu A',
    categories: elchicoAMenu
  },
  {
    brandId: 'the-baking-co',
    menuId: 'tbc-menu-1',
    title: 'The Baking Co. - Assorted Menu',
    categories: tbcMenu1
  },
  {
    brandId: 'the-baking-co',
    menuId: 'tbc-civil-lines',
    title: 'The Baking Co. - Civil Lines',
    categories: tbcCivilLinesMenu
  },
  {
    brandId: 'veggie-veg',
    menuId: 'vv-elchico',
    title: 'Veggie Veg - Pure Vegetarian',
    categories: vvMenu
  },
  {
    brandId: 'veggie-veg', // Assuming vegetarianism brochure belongs to Veggie Veg or El Chico Restaurant veg section. Let's map it to El Chico for now as it describes El Chico's commitment.
    menuId: 'vegetarianism-brochure',
    title: 'Vegetarianism Brochure',
    categories: vegetarianismBrochure
  }
];
