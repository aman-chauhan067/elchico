import React from 'react';
import styles from './TabletRooftop.module.css';
import { Button } from '../../ui/Button';
import { Reveal } from '../../ui/Reveal';
import { Sticker } from '../../stickers/Sticker';

export const TabletRooftop: React.FC = () => {
  return (
    <section id="rooftop" className={styles.section}>
      <div className={`container ${styles.container}`}>
        
        <Reveal animation="clip-up" duration={1000} className={styles.imageWrapper}>
          <img 
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop" 
            alt="El Chico Rooftop" 
            className={styles.image}
          />
          <div className={styles.stickerWrapper}>
            <Sticker variant="cream" size="sm" rotation={4}>EXPERIENCE</Sticker>
          </div>
        </Reveal>

        <Reveal animation="fade-up" delay={200} className={styles.content}>
          <h2 className={styles.title}>El Chico Rooftop</h2>
          <p className={styles.subtitle}>Dinner above the city.</p>
          <div className={styles.actions}>
            <Button variant="primary" size="lg">Explore Rooftop</Button>
          </div>
        </Reveal>

      </div>
    </section>
  );
};
