import React from 'react';
import styles from './MobileSignatureBakes.module.css';
import { menu } from '../../../data';
import { SectionHeading } from '../../ui/SectionHeading';
import { Reveal } from '../../ui/Reveal';

export const MobileSignatureBakes: React.FC = () => {
  return (
    <section className={styles.section} id="menu">
      <div className={`container ${styles.container}`}>
        <Reveal animation="fade-up">
          <SectionHeading 
            title="Signature Bakes" 
            subtitle="Swipe to explore" 
            centered={false}
          />
        </Reveal>
      </div>

      {/* Full width container for edge-to-edge swiping */}
      <div className={styles.carouselWrapper}>
        <div className={styles.carousel}>
          {menu.items.map((bake, idx) => (
            <Reveal key={bake.id} animation="fade-in" delay={idx * 50} className={styles.card}>
              <div className={styles.imageWrapper}>
                <img src={bake.image} alt={bake.name} className={styles.image} />
              </div>
              <div className={styles.content}>
                <h3 className={styles.title}>{bake.name}</h3>
                <span className={styles.price}>{bake.price}</span>
                <p className={styles.desc}>{bake.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
