import React from 'react';
import styles from './MobileBrandIntro.module.css';
import { brand } from '../../../data';
import { Reveal } from '../../ui/Reveal';

export const MobileBrandIntro: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.container}`}>
        
        <Reveal animation="fade-up" delay={100}>
          <div className={styles.yearBadge}>
            <span className={styles.year}>{brand.established}</span>
          </div>
          <h2 className={styles.heading}>{brand.tagline}</h2>
        </Reveal>

        <Reveal animation="clip-up" delay={200} duration={600} className={styles.imageWrapper}>
          <img src="https://images.unsplash.com/photo-1555507036-ab1e4006aaeb?q=80&w=600&auto=format&fit=crop" alt="El Chico Bakery Heritage" className={styles.image} />
        </Reveal>
        
        <Reveal animation="fade-up" delay={300} className={styles.textBlock}>
          <p className={styles.paragraph}>{brand.description}</p>
          <span className={styles.handwritten}>our promise to you</span>
        </Reveal>

      </div>
    </section>
  );
};
