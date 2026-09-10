import React from 'react';
import styles from './BakeryWorld.module.css';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';
import { concepts } from '../../data';
import { Sticker, type StickerVariant } from '../stickers/Sticker';

const stickerColors: StickerVariant[] = ['butter', 'strawberry', 'mint', 'sky'];

export const BakeryWorld: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.container}`}>
        
        <Reveal>
          <SectionHeading 
            title="Our Bakery World" 
            subtitle="Discover the different experiences we've crafted for you, all baked with the same love."
          />
        </Reveal>

        <div className={styles.grid}>
          {concepts.map((concept, index) => (
            <Reveal 
              key={concept.id} 
              animation="fade-up" 
              delay={index * 100}
              className={styles.cardWrapper}
            >
              <a href={`#${concept.id}`} className={styles.card}>
                <div className={styles.imageContainer}>
                  <img src={concept.image} alt={concept.title} className={styles.image} loading="lazy" />
                  <div className={styles.stickerWrapper}>
                    <Sticker 
                      variant={stickerColors[index % stickerColors.length]} 
                      rotation={(index % 2 === 0 ? 1 : -1) * (4 + index)}
                    >
                      {concept.stickerText}
                    </Sticker>
                  </div>
                </div>
                
                <div className={styles.content}>
                  <h3 className={styles.title}>{concept.title}</h3>
                  <p className={styles.description}>{concept.description}</p>
                  <span className={styles.cta}>Explore →</span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
};
