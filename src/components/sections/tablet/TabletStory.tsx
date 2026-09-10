import React from 'react';
import styles from './TabletStory.module.css';
import { story } from '../../../data';
import { SectionHeading } from '../../ui/SectionHeading';
import { Reveal } from '../../ui/Reveal';

export const TabletStory: React.FC = () => {
  return (
    <section className={styles.section} id="story">
      <div className={`container ${styles.container}`}>
        
        <Reveal animation="fade-up">
          <SectionHeading 
            title="Our Heritage" 
            subtitle="A story of flour and time" 
            centered={true}
          />
        </Reveal>

        <div className={styles.timeline}>
          {story.map((item, idx) => (
            <div key={item.year} className={styles.milestone}>
              
              <Reveal animation="scale-up" delay={idx * 150} className={styles.yearNode}>
                <span className={styles.yearText}>{item.year}</span>
              </Reveal>

              <Reveal animation="fade-up" delay={idx * 150 + 100} className={styles.content}>
                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.desc}>{item.description}</p>
              </Reveal>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
