import React, { createContext, useContext, useState, useEffect } from 'react';
import { gallery as initialGallery } from '../data/gallery';
import type { GalleryItem } from '../data/gallery';
import { menuDatabase as initialMenuDatabase } from '../data/source/menuData';
import type { MenuData } from '../data/source/menuData';

type AdminContextType = {
  galleryItems: GalleryItem[];
  menuDatabase: MenuData[];
  siteImages: Record<string, string>;
  updateGalleryItem: (id: string, newSrc: string) => void;
  updateMenuItemPrice: (menuId: string, catIdx: number, itemIdx: number, newPrice: number) => void;
  updateSiteImage: (key: string, newSrc: string) => void;
};

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export const AdminProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>(initialGallery);
  const [menuDatabase, setMenuDatabase] = useState<MenuData[]>(initialMenuDatabase);
  
  // Track all major photos used on the website
  const [siteImages, setSiteImages] = useState<Record<string, string>>({
    'home-hero-bg': '/assets/source/images/rooftoprest.jpg',
    'rooftop-bg': '/assets/source/images/rooftoprest.jpg',
    'story-hero-bg': 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1200&auto=format&fit=crop',
    'story-era-1': 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1200&auto=format&fit=crop',
    'story-era-2': 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1200&auto=format&fit=crop',
    'story-era-3': 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=1200&auto=format&fit=crop',
  });

  // Load from local storage on mount
  useEffect(() => {
    const savedGallery = localStorage.getItem('admin_gallery');
    if (savedGallery) setGalleryItems(JSON.parse(savedGallery));

    const savedMenu = localStorage.getItem('admin_menuDatabase');
    if (savedMenu) setMenuDatabase(JSON.parse(savedMenu));

    const savedImages = localStorage.getItem('admin_siteImages');
    if (savedImages) setSiteImages(JSON.parse(savedImages));
  }, []);

  // Sync to local storage
  useEffect(() => {
    localStorage.setItem('admin_gallery', JSON.stringify(galleryItems));
  }, [galleryItems]);

  useEffect(() => {
    localStorage.setItem('admin_menuDatabase', JSON.stringify(menuDatabase));
  }, [menuDatabase]);

  useEffect(() => {
    localStorage.setItem('admin_siteImages', JSON.stringify(siteImages));
  }, [siteImages]);

  const updateGalleryItem = (id: string, newSrc: string) => {
    setGalleryItems(prev => prev.map(item => item.id === id ? { ...item, src: newSrc } : item));
  };

  const updateMenuItemPrice = (menuId: string, catIdx: number, itemIdx: number, newPrice: number) => {
    setMenuDatabase(prev => {
      const copy = JSON.parse(JSON.stringify(prev)) as MenuData[];
      const menu = copy.find(m => m.menuId === menuId);
      if (menu && menu.categories[catIdx] && menu.categories[catIdx].items[itemIdx]) {
        menu.categories[catIdx].items[itemIdx].price = newPrice;
      }
      return copy;
    });
  };

  const updateSiteImage = (key: string, newSrc: string) => {
    setSiteImages(prev => ({ ...prev, [key]: newSrc }));
  };

  return (
    <AdminContext.Provider value={{
      galleryItems,
      menuDatabase,
      siteImages,
      updateGalleryItem,
      updateMenuItemPrice,
      updateSiteImage
    }}>
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (context === undefined) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
};
