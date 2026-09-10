import React, { useEffect } from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Reveal } from '../components/ui/Reveal';
import { story } from '../data/story';
import styles from './OurStory.module.css';
import { StatsSection } from '../components/sections/StatsSection';
import { useAdmin } from '../context/AdminContext';

export const OurStory: React.FC = () => {
  const { siteImages } = useAdmin();
  const heroRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    // Trigger confetti after a small delay for dramatic effect
    setTimeout(() => {
      if (heroRef.current) {
        import('../utils/celebration').then(({ triggerCelebration }) => {
          triggerCelebration({ wrapper: heroRef.current!, particleCount: 120 });
        });
      }
    }, 800);
  }, []);

  return (
    <div className={styles.page}>
      <Navbar />
      
      <main className={styles.main}>
        {/* Massive Pop Hero */}
        <section className={styles.hero} ref={heroRef}>
          <div className={styles.heroContainer}>
            <div className={styles.titleStack}>
              <Reveal animation="fade-up">
                <span className={styles.heroEyebrow}>Since 1964</span>
              </Reveal>
              <Reveal animation="fade-up" delay={150}>
                <h1 className={styles.giantTitle}>
                  <span className={styles.titleRow}>BAKING</span>
                  <span className={styles.titleRow}>THE WORLD</span>
                  <span className={styles.titleRow}>
                    A <span className={styles.handwritten}>better</span> PLACE
                  </span>
                </h1>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Sticky Timeline Eras */}
        <section className={styles.timelineSection}>
          {story.map((era) => (
            <div 
              key={era.id} 
              className={styles.eraPanel} 
              style={{ backgroundColor: era.bgColor, color: era.textColor }}
            >
              <div className={styles.eraContainer}>
                
                {/* Sticky Left: The Year */}
                <div className={styles.eraStickyCol}>
                  <Reveal animation="fade-in" duration={1000}>
                    <h2 className={styles.eraYear} style={{ color: era.accentColor }}>{era.year}</h2>
                  </Reveal>
                </div>

                {/* Scrolling Right: The Content */}
                <div className={styles.eraContentCol}>
                  <Reveal animation="clip-up" className={styles.eraImageWrapper}>
                    <img src={siteImages[`story-${era.id}`] || era.image} alt={era.title} className={styles.eraImage} />
                  </Reveal>
                  
                  <div className={styles.eraText}>
                    <Reveal animation="fade-up">
                      <h3 className={styles.eraTitle}>{era.title}</h3>
                    </Reveal>
                    <Reveal animation="fade-up" delay={200}>
                      <p className={styles.eraDescription}>{era.description}</p>
                    </Reveal>

                    {/* Render stats right inside the era content if isStats is true */}
                    {era.isStats && (
                      <div style={{ marginTop: '2rem' }}>
                        <StatsSection />
                      </div>
                    )}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </section>

        {/* Closing Pop Banner */}
        <section className={styles.closingBanner}>
          <div className={styles.marquee}>
            <div className={styles.marqueeTrack}>
              <span>✦ PART OF YOUR FAMILY ✦ SINCE 1964 ✦ BAKED WITH LOVE ✦ PART OF YOUR FAMILY ✦ SINCE 1964 ✦ BAKED WITH LOVE&nbsp;&nbsp;</span>
              <span>✦ PART OF YOUR FAMILY ✦ SINCE 1964 ✦ BAKED WITH LOVE ✦ PART OF YOUR FAMILY ✦ SINCE 1964 ✦ BAKED WITH LOVE&nbsp;&nbsp;</span>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};
