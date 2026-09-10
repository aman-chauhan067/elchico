import React, { useEffect, useRef, useState } from 'react';
import styles from './Story.module.css';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';
import { story } from '../../data';
import { CupcakeIllustration } from '../illustrations';

export const Story: React.FC = () => {
  const lineRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    // Respect reduced motion for the line animation
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setScrollProgress(100);
      return;
    }

    const handleScroll = () => {
      if (!lineRef.current) return;
      const rect = lineRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how far the line is through the viewport
      if (rect.top < windowHeight && rect.bottom > 0) {
        const total = rect.height + windowHeight / 2;
        const current = windowHeight - rect.top;
        const progress = Math.min(100, Math.max(0, (current / total) * 100));
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className={styles.section}>
      <div className={`container ${styles.container}`}>
        
        <Reveal>
          <SectionHeading 
            title="Our Story" 
            subtitle="Baking memories since 1964."
          />
        </Reveal>

        <div className={styles.timeline}>
          <div 
            ref={lineRef}
            className={styles.line} 
            style={{ '--progress': `${scrollProgress}%` } as React.CSSProperties}
          ></div>

          {story.map((item, index) => (
            <Reveal 
              key={index}
              animation={index % 2 === 0 ? 'slide-right' : 'slide-left'}
              delay={100}
              className={`${styles.item} ${index % 2 === 0 ? styles.left : styles.right}`}
            >
              <div className={styles.marker}>
                <CupcakeIllustration size={24} color="var(--color-cream)" />
              </div>
              <div className={styles.content}>
                <span className={styles.year}>{item.year}</span>
                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.description}>{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
};
