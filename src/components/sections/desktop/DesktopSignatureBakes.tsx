import React from 'react';
import { Link } from 'react-router-dom';
import styles from './DesktopSignatureBakes.module.css';
import { Reveal } from '../../ui/Reveal';
import { useParallax } from '../../../utils/useParallax';
import { Button } from '../../ui/Button';

export const DesktopSignatureBakes: React.FC = () => {
  const parallaxText = useParallax(0.1);
  const parallaxImg = useParallax(-0.05);

  return (
    <section className={styles.section} id="menu">
      <div className={styles.canvas}>
        
        <div className={styles.left}>
          <div ref={parallaxText as React.RefObject<HTMLDivElement>} className={styles.giantText}>
            FRESH<br/>OUT OF<br/>THE OVEN
          </div>
          
          <div className={styles.list}>
            <Reveal animation="fade-up" delay={100} className={styles.listItem}>
              <div className={styles.listHeader}>
                <h4 className={styles.listTitle}>Veggie Veg Specials</h4>
                <span className={styles.listPrice}>PDF Menu</span>
              </div>
              <p className={styles.listDesc}>Pure vegetarian delights, curated for our guests.</p>
              <Link to="/our-menu" className={styles.menuLink}>
                View Digital Menu →
              </Link>
            </Reveal>

            <Reveal animation="fade-up" delay={200} className={styles.listItem}>
              <div className={styles.listHeader}>
                <h4 className={styles.listTitle}>El Chico Restaurant</h4>
                <span className={styles.listPrice}>PDF Menu</span>
              </div>
              <p className={styles.listDesc}>The classic fine dining experience since 1964.</p>
              <Link to="/our-menu" className={styles.menuLink}>
                View Digital Menu →
              </Link>
            </Reveal>
          </div>
        </div>

        <div className={styles.right}>
          <Reveal animation="slide-left" duration={1200} className={styles.heroImageWrapperOuter}>
            <div ref={parallaxImg as React.RefObject<HTMLDivElement>} className={styles.heroImageInner}>
              <img 
                src="https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=800&auto=format&fit=crop" 
                alt="The Baking Co Patisserie" 
                className={styles.heroImage} 
              />
            </div>
            
            <div className={styles.heroLabel}>
              <span className={styles.handwritten}>The Baking Co.</span>
              <h3>Signature Patisserie</h3>
              <p>Explore our handcrafted selection of cakes, breads, and treats.</p>
              <div className={styles.heroButtonWrapper} style={{ marginTop: 'var(--space-6)' }}>
                <Link to="/our-menu" style={{ textDecoration: 'none' }}>
                  <Button variant="primary" size="sm">
                    Explore Digital Menu
                  </Button>
                </Link>
              </div>
            </div>
          </Reveal>
        </div>

      </div>
    </section>
  );
};
