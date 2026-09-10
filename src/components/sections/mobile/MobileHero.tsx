import React from 'react';
import styles from './MobileHero.module.css';
import { Button } from '../../ui/Button';
import { Reveal } from '../../ui/Reveal';
import { Sticker } from '../../stickers/Sticker';

export const MobileHero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.container}`}>
        
        {/* Image dominant at top for visual storytelling */}
        <div className={styles.visual}>
          <Reveal animation="clip-up" delay={100} duration={800} className={styles.imageWrapper}>
            <img 
              src="https://images.unsplash.com/photo-1555507036-ab1e4006aaeb?q=80&w=600&auto=format&fit=crop" 
              alt="Freshly baked pastries at El Chico" 
              className={styles.image}
            />
            {/* Single small sticker for texture, no hover interaction */}
            <div className={styles.sticker}>
              <Sticker variant="butter" rotation={4} size="sm">
                FRESH
              </Sticker>
            </div>
          </Reveal>
        </div>

        {/* Typography structured for vertical readability */}
        <div className={styles.content}>
          <Reveal animation="fade-up" delay={200}>
            <span className={styles.eyebrow}>Since 1964</span>
          </Reveal>
          
          <Reveal animation="fade-up" delay={300}>
            <div className={styles.titleWrapper}>
              <h1 className={styles.title}>
                <span className={styles.titleLine1}>SWEET</span>
                <span className={styles.titleLine2}>
                  <span className="handwritten">little</span> MOMENTS
                </span>
              </h1>
            </div>
          </Reveal>

          {/* Large thumb-friendly CTA */}
          <Reveal animation="fade-up" delay={400}>
            <div className={styles.actions}>
              <Button variant="primary" size="lg" className={styles.button} celebration>Explore Menu</Button>
            </div>
          </Reveal>
        </div>

      </div>
    </section>
  );
};
