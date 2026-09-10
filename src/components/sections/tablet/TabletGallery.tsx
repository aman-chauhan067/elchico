import React from 'react';
import styles from './TabletGallery.module.css';
import { gallery } from '../../../data';
import { SectionHeading } from '../../ui/SectionHeading';
import { Reveal } from '../../ui/Reveal';

export const TabletGallery: React.FC = () => {
  return (
    <section className={styles.section} id="gallery">
      <div className={`container ${styles.container}`}>
        
        <Reveal animation="fade-up">
          <SectionHeading 
            title="Gallery" 
            subtitle="Life at El Chico" 
            centered={true}
          />
        </Reveal>

        <div className={styles.grid}>
          {gallery.map((img, idx) => (
            <Reveal key={img.id} animation="fade-in" delay={idx * 100} className={styles.item}>
              <img src={img.src} alt={img.type} className={styles.image} />
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
};
