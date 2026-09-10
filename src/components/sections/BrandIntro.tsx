import React from 'react';
import styles from './BrandIntro.module.css';
import { Reveal } from '../ui/Reveal';
import { brand } from '../../data';
import { RibbonIllustration, HeartIllustration } from '../illustrations';

export const BrandIntro: React.FC = () => {
  return (
    <section id="story" className={styles.intro}>
      <div className={`container ${styles.container}`}>
        
        <Reveal animation="fade-up" className={styles.textWrapper}>
          <div className={styles.ornament}>
            <RibbonIllustration size={40} color="var(--color-peach)" />
          </div>
          
          <h2 className={styles.title}>{brand.tagline}</h2>
          
          <p className={styles.description}>
            {brand.description}
          </p>
          
          <div className={styles.note}>
            <span className="handwritten">A piece of our heritage in every bite.</span>
            <HeartIllustration size={20} color="var(--color-strawberry)" className={styles.heart} />
          </div>
        </Reveal>

      </div>
    </section>
  );
};
