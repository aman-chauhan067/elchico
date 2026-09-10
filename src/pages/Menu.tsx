import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import styles from './Menu.module.css';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Button } from '../components/ui/Button';
import { Reveal } from '../components/ui/Reveal';
import type { MenuData } from '../data/source/menuData';
import { sourceMenuCollections } from '../data/source/menu';
import { useAdmin } from '../context/AdminContext';

export const Menu: React.FC = () => {
  const { menuDatabase } = useAdmin();
  const [searchParams, setSearchParams] = useSearchParams();
  const brandFilter = searchParams.get('brand') || 'all';
  const heroRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      if (heroRef.current) {
        import('../utils/celebration').then(({ triggerCelebration }) => {
          triggerCelebration({ wrapper: heroRef.current!, particleCount: 120 });
        });
      }
    }, 800);
  }, []);

  const handleFilter = (e: React.MouseEvent<HTMLButtonElement>, brand: string) => {
    if (e.currentTarget) {
      import('../utils/celebration').then(({ triggerCelebration }) => {
        triggerCelebration({ wrapper: e.currentTarget as unknown as HTMLDivElement, particleCount: 40 });
      });
    }

    if (brand === 'all') {
      searchParams.delete('brand');
    } else {
      searchParams.set('brand', brand);
    }
    setSearchParams(searchParams);
  };

  const filteredMenus = menuDatabase.filter(
    (menu) => brandFilter === 'all' || menu.brandId === brandFilter
  );

  // Helper to find the PDF link if available
  const getPdfLink = (brandId: string) => {
    const collection = sourceMenuCollections.find(c => c.brandId === brandId);
    if (!collection) return null;
    return collection.pdfs[0]?.path; 
  };

  const getBrandColor = (brandId: string) => {
    switch(brandId) {
      case 'el-chico-restaurant': return 'var(--color-peach)';
      case 'the-baking-co': return 'var(--color-vanilla)';
      case 'veggie-veg': return 'var(--color-pistachio)';
      default: return 'var(--color-cream)';
    }
  };

  return (
    <div className={styles.page}>
      <Navbar />
      
      <main className={styles.main}>
        {/* Massive Pop Hero */}
        <section className={styles.hero} ref={heroRef}>
          <div className={styles.heroContainer}>
            <div className={styles.titleStack}>
              <Reveal animation="fade-up" delay={150}>
                <h1 className={styles.giantTitle}>
                  <span className={styles.titleRow}>EXPLORE</span>
                  <span className={styles.titleRow}>THE</span>
                  <span className={styles.titleRow}>
                    <span className={styles.handwritten}>menu</span>
                  </span>
                </h1>
              </Reveal>
            </div>
            
            <Reveal animation="fade-in" delay={600}>
              <p className={styles.heroSubtext}>
                Authentic items, prices, and descriptions transcribed directly from our original source menus.
              </p>
            </Reveal>

            <Reveal animation="fade-in" delay={800}>
              <div className={styles.filters}>
                <button 
                  className={`${styles.filterBtn} ${brandFilter === 'all' ? styles.filterBtnActive : ''}`}
                  onClick={(e) => handleFilter(e, 'all')}
                >
                  All Brands
                </button>
                <button 
                  className={`${styles.filterBtn} ${brandFilter === 'el-chico-restaurant' ? styles.filterBtnActive : ''}`}
                  onClick={(e) => handleFilter(e, 'el-chico-restaurant')}
                >
                  El Chico Restaurant
                </button>
                <button 
                  className={`${styles.filterBtn} ${brandFilter === 'the-baking-co' ? styles.filterBtnActive : ''}`}
                  onClick={(e) => handleFilter(e, 'the-baking-co')}
                >
                  The Baking Co.
                </button>
                <button 
                  className={`${styles.filterBtn} ${brandFilter === 'veggie-veg' ? styles.filterBtnActive : ''}`}
                  onClick={(e) => handleFilter(e, 'veggie-veg')}
                >
                  Veggie Veg
                </button>
              </div>
            </Reveal>
          </div>
        </section>

        <section className={styles.menuSection}>
          <div className={styles.container}>
            
            <div className={styles.menuDataContainer}>
              {filteredMenus.map((menu: MenuData, idx) => {
                const pdfPath = getPdfLink(menu.brandId);

                return (
                  <Reveal key={menu.menuId} animation="fade-up" delay={idx * 100}>
                    <div className={styles.brandMenu} style={{ '--brand-color': getBrandColor(menu.brandId) } as React.CSSProperties}>
                      <div className={styles.menuHeader}>
                        <h2 className={styles.menuTitle}>{menu.title}</h2>
                        {pdfPath && (
                          <div className={styles.pdfFallback}>
                            <Button asChild variant="outline" size="sm">
                              <a href={pdfPath} target="_blank" rel="noreferrer">
                                View Original PDF
                              </a>
                            </Button>
                          </div>
                        )}
                      </div>

                      <div className={styles.categoriesGrid}>
                        {menu.categories.map((cat, catIdx) => (
                          <div key={catIdx} className={styles.category}>
                            <h3 className={styles.categoryTitle}>{cat.name}</h3>
                            <div className={styles.itemList}>
                              {cat.items.map((item, itemIdx) => (
                                <div key={itemIdx} className={styles.item}>
                                  <div className={styles.itemHeader}>
                                    <div className={styles.itemName}>
                                      {item.dietary === 'veg' && <span className={`${styles.dietIcon} ${styles.dietIconVeg}`} title="Vegetarian" />}
                                      {item.dietary === 'non-veg' && <span className={`${styles.dietIcon} ${styles.dietIconNonVeg}`} title="Non-Vegetarian" />}
                                      {item.name}
                                      {item.needsVerification && (
                                        <span className={styles.verificationBadge} title="Price/Item extracted via OCR/Vision and needs manual verification against source PDF.">Verify</span>
                                      )}
                                    </div>
                                    {item.price !== undefined && (
                                      <div className={styles.itemPrice}>₹{item.price}</div>
                                    )}
                                  </div>
                                  
                                  {item.description && (
                                    <div className={styles.itemDesc}>{item.description}</div>
                                  )}

                                  {item.variants && item.variants.length > 0 && (
                                    <div className={styles.variants}>
                                      {item.variants.map((v, vIdx) => (
                                        <div key={vIdx} className={styles.variant}>
                                          <span>{v.name}</span>
                                          <span>₹{v.price}</span>
                                        </div>
                                      ))}
                                    </div>
                                  )}
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Reveal>
                );
              })}
              
              {filteredMenus.length === 0 && (
                <div style={{ textAlign: 'center', padding: '4rem 0' }}>
                  <p>No menus found for this brand.</p>
                </div>
              )}
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
