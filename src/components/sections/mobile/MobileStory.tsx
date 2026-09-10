import React from 'react';
import styles from './MobileStory.module.css';
import { story } from '../../../data';
import { SectionHeading } from '../../ui/SectionHeading';
import { Reveal } from '../../ui/Reveal';
import { SparkleIllustration } from '../../illustrations';

export const MobileStory: React.FC = () => {
  return (
    <section className={styles.section} id="story">
      <div className={`container ${styles.container}`}>
        
        <Reveal animation="fade-up">
          <SectionHeading 
            title="Our Heritage" 
            subtitle="A story of flour and time" 
            centered={false}
          />
        </Reveal>

        <div className={styles.stack}>
          {story.map((item, idx) => (
            <Reveal key={item.year} animation="fade-up" delay={idx * 100} className={styles.card}>
              <div className={styles.header}>
                <span className={styles.yearText}>{item.year}</span>
                {idx === 1 && (
                  <SparkleIllustration size={20} color="var(--color-strawberry)" strokeWidth={1.5} />
                )}
              </div>
              
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.desc}>{item.description}</p>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
};
