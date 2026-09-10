import React from 'react';
import styles from './TabletBrandIntro.module.css';
import { brand } from '../../../data';
import { Reveal } from '../../ui/Reveal';
import { HeartIllustration } from '../../illustrations';

export const TabletBrandIntro: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.container}`}>
        
        <div className={styles.top}>
          <Reveal animation="fade-up" delay={100} className={styles.header}>
            <div className={styles.yearBadge}>
              <span className={styles.year}>{brand.established}</span>
              <HeartIllustration size={36} color="var(--color-strawberry)" strokeWidth={1.5} className={styles.heart} />
            </div>
            <h2 className={styles.heading}>{brand.tagline}</h2>
            <span className={styles.handwritten}>our promise to you</span>
          </Reveal>
        </div>

        <div className={styles.bottom}>
          <Reveal animation="clip-up" delay={200} duration={800} className={styles.imageWrapper}>
            <img src="https://images.unsplash.com/photo-1555507036-ab1e4006aaeb?q=80&w=600&auto=format&fit=crop" alt="El Chico Bakery Heritage" className={styles.image} />
          </Reveal>
          
          <Reveal animation="fade-up" delay={300} className={styles.textBlock}>
            <p className={styles.paragraph}>{brand.description}</p>
          </Reveal>
        </div>

      </div>
    </section>
  );
};
