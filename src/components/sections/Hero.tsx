import React from 'react';
import styles from './Hero.module.css';
import { Button } from '../ui/Button';
import { Sticker } from '../stickers/Sticker';
import { Reveal } from '../ui/Reveal';
import { brand } from '../../data';
import { CroissantIllustration, SparkleIllustration, StrawberryIllustration } from '../illustrations';

export const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.container}`}>
        
        <div className={styles.content}>
          <Reveal animation="fade-up" delay={100}>
            <span className={styles.eyebrow}>{brand.name}</span>
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
            <div className={styles.sinceBadge}>
              Since {brand.established}
            </div>
          </Reveal>

          <Reveal animation="fade-up" delay={400}>
            <p className={styles.description}>
              {brand.tagline}. A little sweetness, baked into every moment.
            </p>
          </Reveal>

          <Reveal animation="fade-up" delay={500}>
            <div className={styles.actions}>
              <Button variant="primary" size="lg" asChild>
                <a href="#menu">Explore Menu</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#story">Our Story</a>
              </Button>
            </div>
          </Reveal>
        </div>

        <div className={styles.visual}>
          <Reveal animation="clip-up" delay={400} duration={1200} className={styles.imageWrapper}>
            <img 
              src="https://images.unsplash.com/photo-1555507036-ab1e4006aaeb?q=80&w=1200&auto=format&fit=crop" 
              alt="Freshly baked pastries at El Chico" 
              className={styles.image}
            />
            
            <Reveal animation="scale-up" delay={900} duration={600} className={styles.sticker1}>
              <Sticker variant="strawberry" rotation={-5} size="lg">
                BAKED WITH LOVE
              </Sticker>
            </Reveal>
            
            <Reveal animation="scale-up" delay={1100} duration={600} className={styles.sticker2}>
              <Sticker variant="butter" rotation={3} size="md">
                FRESH TODAY
              </Sticker>
            </Reveal>

            <Reveal animation="fade-in" delay={1300} className={styles.croissant}>
              <CroissantIllustration size={64} color="var(--color-butter)" strokeWidth={1} />
            </Reveal>

            <Reveal animation="fade-in" delay={1400} className={styles.strawberry}>
              <StrawberryIllustration size={48} color="var(--color-strawberry)" strokeWidth={1} />
            </Reveal>
            
            <Reveal animation="fade-in" delay={1500} className={styles.sparkle}>
              <SparkleIllustration size={32} color="var(--color-mint)" strokeWidth={1.5} />
            </Reveal>
          </Reveal>
        </div>

      </div>
    </section>
  );
};
