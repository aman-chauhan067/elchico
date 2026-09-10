import React, { useEffect, useRef, useState } from 'react';
import styles from './StatsSection.module.css';
import { Reveal } from '../ui/Reveal';

type StatItemProps = {
  endValue: number;
  suffix: string;
  label: string;
  duration?: number;
};

const AnimatedNumber: React.FC<StatItemProps> = ({ endValue, suffix, label, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let startTime: number;
          let animationFrame: number;

          const updateCount = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            
            // Easing function (easeOutExpo)
            const easeProgress = progress >= duration ? 1 : 1 - Math.pow(2, -10 * progress / duration);
            
            if (progress < duration) {
              setCount(Math.floor(endValue * easeProgress));
              animationFrame = requestAnimationFrame(updateCount);
            } else {
              setCount(endValue);
            }
          };
          
          animationFrame = requestAnimationFrame(updateCount);
          return () => cancelAnimationFrame(animationFrame);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, [endValue, duration, hasAnimated]);

  return (
    <div className={styles.statCard} ref={ref}>
      <div className={styles.numberWrapper}>
        <span className={styles.number}>{count}</span>
        <span className={styles.suffix}>{suffix}</span>
      </div>
      <span className={styles.label}>{label}</span>
    </div>
  );
};

export const StatsSection: React.FC = () => {
  const stats = [
    { endValue: 58, suffix: '+', label: 'Years of Experience' },
    { endValue: 12, suffix: '', label: 'Awards Wins' },
    { endValue: 50, suffix: 'k', label: 'Happy Customers' },
    { endValue: 500, suffix: '+', label: 'Perfect Dishes' },
  ];

  return (
    <div className={styles.statsSection}>
      <div className={styles.grid}>
        {stats.map((stat, idx) => (
          <Reveal key={idx} animation="fade-up" delay={idx * 150}>
            <AnimatedNumber 
              endValue={stat.endValue} 
              suffix={stat.suffix} 
              label={stat.label} 
            />
          </Reveal>
        ))}
      </div>
    </div>
  );
};
