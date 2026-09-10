import React from 'react';
import styles from './Rooftop.module.css';
import { Button } from '../ui/Button';
import { Reveal } from '../ui/Reveal';
import { Sticker } from '../stickers/Sticker';

export const Rooftop: React.FC = () => {
  return (
    <section id="rooftop" className={styles.section}>
      <div className={styles.background}>
        <img 
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1600&auto=format&fit=crop" 
          alt="El Chico Rooftop" 
          className={styles.image}
        />
        <div className={styles.overlay}></div>
      </div>

      <div className={`container ${styles.container}`}>
        <Reveal animation="fade-up" className={styles.content}>
          <div className={styles.stickerWrapper}>
            <Sticker variant="cream" size="sm" rotation={-5}>EXPERIENCE</Sticker>
          </div>
          <h2 className={styles.title}>El Chico Rooftop</h2>
          <p className={styles.subtitle}>Dinner above the city.</p>
          <div className={styles.actions}>
            <Button variant="primary" size="lg">Explore Rooftop</Button>
            <Button variant="outline" size="lg" className={styles.visitBtn}>Visit Us</Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
