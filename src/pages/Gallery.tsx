import React, { useEffect } from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Reveal } from '../components/ui/Reveal';
import styles from './Gallery.module.css';
import { useAdmin } from '../context/AdminContext';

export const Gallery: React.FC = () => {
  const { galleryItems } = useAdmin();
  const heroRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      if (heroRef.current) {
        import('../utils/celebration').then(({ triggerCelebration }) => {
          triggerCelebration({ wrapper: heroRef.current!, particleCount: 150 });
        });
      }
    }, 800);
  }, []);

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
                  <span className={styles.titleRow}>OUR</span>
                  <span className={styles.titleRow}>SWEET</span>
                  <span className={styles.titleRow}>
                    <span className={styles.handwritten}>gallery</span>
                  </span>
                </h1>
              </Reveal>
            </div>
          </div>
        </section>

        <section className={styles.gallerySection}>
          <div className={styles.container}>
            <div className={styles.galleryGrid}>
              {galleryItems.map((item, index) => {
                const rotateDeg = [4, -5, 3, -6, 2, -4, 6, -3, 5, -2, 4, -5][index % 12];
                return (
                  <Reveal key={item.id} animation="fade-up" delay={(index % 4) * 100}>
                    <div 
                      className={`${styles.bentoWrapper} ${item.type === 'empty' ? styles.bentoEmpty : ''}`}
                      style={{ 
                        gridColumn: `span ${item.colSpan}`, 
                        gridRow: `span ${item.rowSpan}`,
                        transform: `rotate(${rotateDeg}deg)`
                      }}
                    >
                      <div 
                        className={`${styles.bentoItem} ${item.type === 'text' ? styles.stickyNoteItem : ''}`} 
                        style={
                          item.type === 'text' ? { backgroundColor: item.color || 'var(--color-vanilla)' } :
                          item.type !== 'image' ? { background: 'transparent', boxShadow: 'none', border: 'none' } : 
                          {}
                        }
                      >
                        {item.type === 'image' && item.src && (
                          <>
                            <img 
                              src={item.src} 
                              alt="Gallery image" 
                              className={styles.bentoImage} 
                              loading="lazy"
                            />
                            <div className={styles.bentoOverlay}>
                              <span className={styles.bentoLabel}>sweet</span>
                            </div>
                          </>
                        )}
                        
                        {item.type === 'text' && item.text && (
                          <div className={styles.bentoText}>
                            <span>{item.text}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
