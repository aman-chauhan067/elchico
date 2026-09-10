import React from 'react';
import styles from './Gallery.module.css';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';
import { gallery } from '../../data';
import { Sticker } from '../stickers/Sticker';

export const Gallery: React.FC = () => {
  return (
    <section id="gallery" className={styles.section}>
      <div className={`container ${styles.container}`}>
        
        <Reveal>
          <SectionHeading 
            title="A Peek Inside" 
            subtitle="Moments captured at El Chico."
          />
        </Reveal>

        <div className={styles.galleryGrid}>
          {gallery.filter(i => i.type === 'image').slice(0, 5).map((item, index) => {
            const spanClass = item.colSpan > 1 && item.rowSpan > 1 ? styles.spanRow : '';
            return (
              <Reveal 
                key={item.id} 
                animation="fade-up" 
                delay={index * 100}
                className={`${styles.imageWrapper} ${spanClass}`}
              >
                <div className={styles.imageInner}>
                  <img src={item.src} alt={item.type} className={styles.image} loading="lazy" />
                  
                  {/* Randomly place a sticker on the first image for scrapbook feel */}
                  {index === 0 && (
                    <div className={styles.sticker}>
                      <Sticker variant="lavender" size="sm" rotation={12}>SWEET</Sticker>
                    </div>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
};
