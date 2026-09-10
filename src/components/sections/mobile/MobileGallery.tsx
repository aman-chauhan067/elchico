import React from 'react';
import styles from './MobileGallery.module.css';
import { gallery } from '../../../data';
import { SectionHeading } from '../../ui/SectionHeading';
import { Reveal } from '../../ui/Reveal';

export const MobileGallery: React.FC = () => {
  return (
    <section className={styles.section} id="gallery">
      <div className={`container ${styles.container}`}>
        
        <Reveal animation="fade-up">
          <SectionHeading 
            title="Gallery" 
            subtitle="Life at El Chico" 
            centered={false}
          />
        </Reveal>

        <div className={styles.stack}>
          {gallery.map((img) => (
            <Reveal key={img.id} animation="clip-up" delay={50} className={styles.item}>
              <img src={img.src} alt={img.type} className={styles.image} />
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
};
