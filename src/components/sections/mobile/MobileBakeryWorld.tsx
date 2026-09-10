import React from 'react';
import styles from './MobileBakeryWorld.module.css';
import { concepts } from '../../../data';
import { SectionHeading } from '../../ui/SectionHeading';
import { Reveal } from '../../ui/Reveal';

export const MobileBakeryWorld: React.FC = () => {
  return (
    <section className={styles.section} id="concepts">
      <div className={`container ${styles.container}`}>
        <Reveal animation="fade-up">
          <SectionHeading 
            title="Our Bakery World" 
            subtitle="Different spaces, same soul" 
            centered={false}
          />
        </Reveal>

        <div className={styles.stack}>
          {concepts.map((concept, idx) => (
            <Reveal key={concept.id} animation="fade-up" delay={idx * 50} className={styles.card}>
              <div className={styles.imageWrapper}>
                <img src={concept.image} alt={concept.title} className={styles.image} />
              </div>
              <div className={styles.content}>
                <h3 className={styles.title}>{concept.title}</h3>
                <p className={styles.desc}>{concept.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
