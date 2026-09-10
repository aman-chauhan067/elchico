import React from 'react';
import styles from './TabletHero.module.css';
import { Button } from '../../ui/Button';
import { Reveal } from '../../ui/Reveal';
import { Sticker } from '../../stickers/Sticker';

export const TabletHero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.container}`}>
        
        {/* Tablet prioritizes balance, less asymmetry */}
        <div className={styles.content}>
          <Reveal animation="fade-in" delay={100}>
            <span className={styles.eyebrow}>Since 1964</span>
          </Reveal>
          
          <Reveal animation="fade-up" delay={200}>
            <div className={styles.titleWrapper}>
              <h1 className={styles.title}>
                <span className={styles.titleLine1}>SWEET</span>
                <span className={styles.titleLine2}>
                  <span className="handwritten">little</span> MOMENTS
                </span>
              </h1>
            </div>
          </Reveal>

          <Reveal animation="fade-up" delay={300}>
            <Button variant="primary" size="lg" celebration={true}>Explore Menu</Button>
          </Reveal>
        </div>

        <div className={styles.visual}>
          <Reveal animation="clip-up" delay={400} duration={1000} className={styles.imageWrapper}>
            <img 
              src="https://images.unsplash.com/photo-1555507036-ab1e4006aaeb?q=80&w=1200&auto=format&fit=crop" 
              alt="Freshly baked pastries at El Chico" 
              className={styles.image}
            />
            
            {/* Tablet has fewer stickers, strategically placed away from edges to avoid overflow */}
            <Reveal animation="scale-up" delay={800} duration={600} className={styles.sticker}>
              <Sticker variant="strawberry" rotation={-3} size="md">
                BAKED WITH LOVE
              </Sticker>
            </Reveal>
          </Reveal>
        </div>

      </div>
    </section>
  );
};
