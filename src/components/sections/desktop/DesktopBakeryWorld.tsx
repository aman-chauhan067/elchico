import React, { useRef, useEffect, useState } from 'react';
import styles from './DesktopBakeryWorld.module.css';
import { Reveal } from '../../ui/Reveal';
import { Sticker } from '../../stickers/Sticker';

export const DesktopBakeryWorld: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add a slight delay to the opening animation
            setTimeout(() => {
              setIsOpen(true);
            }, 400);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.4 } // Trigger when 40% visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={styles.section} id="concepts">
      {/* Giant background text for depth */}
      <div className={styles.giantBg}>BAKERY</div>

      <div className={styles.container}>
        {/* Left Side: Typography */}
        <div className={styles.textContent}>
          <Reveal animation="fade-up">
            <span className={styles.eyebrow}>est. 1964</span>
            <h2 className={styles.heading}>
              Baking the world<br />
              <span className={styles.headingAccent}>a better place</span>
            </h2>
            <p className={styles.subtext}>
              Step into our world of fresh European patisserie and handmade joy.
            </p>
          </Reveal>
        </div>

        {/* Right Side: The Interactive Bakery Window */}
        <div className={styles.windowWrapper}>
          <div className={`${styles.archWindow} ${isOpen ? styles.open : ''}`}>
            
            {/* The Interior (Revealed when open) */}
            <div className={styles.interior}>
              <img 
                src="https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=600&auto=format&fit=crop" 
                alt="Bakery Interior"
                className={styles.interiorImage}
              />
              <div className={styles.interiorDecorations}>
                {/* Emerging cake/element */}
                <img 
                  src="/assets/source/images/cake-cutout.png" 
                  alt="" 
                  className={styles.emergingCake}
                  onError={(e) => {
                    // Fallback to a placeholder if the cutout doesn't exist
                    e.currentTarget.style.display = 'none';
                  }}
                />
                
                <div className={styles.openSign}>
                  <Sticker variant="mint" rotation={-12} size="md">OPEN NOW</Sticker>
                </div>
              </div>
            </div>

            {/* The Doors */}
            <div className={`${styles.door} ${styles.doorLeft}`}>
              <div className={styles.doorFrame}>
                <div className={styles.glass}></div>
                <div className={styles.handle}></div>
              </div>
            </div>
            <div className={`${styles.door} ${styles.doorRight}`}>
              <div className={styles.doorFrame}>
                <div className={styles.glass}></div>
                <div className={styles.handle}></div>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Bottom ribbon */}
      <div className={styles.ribbon}>
        <div className={styles.ribbonTrack}>
          <span>✦ baked fresh daily ✦ european patisserie ✦ handmade with love ✦ baked fresh daily ✦ european patisserie ✦ handmade with love ✦&nbsp;</span>
          <span>✦ baked fresh daily ✦ european patisserie ✦ handmade with love ✦ baked fresh daily ✦ european patisserie ✦ handmade with love ✦&nbsp;</span>
        </div>
      </div>
    </section>
  );
};
