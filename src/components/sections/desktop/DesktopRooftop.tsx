import React from 'react';
import { Link } from 'react-router-dom';
import styles from './DesktopRooftop.module.css';
import { Reveal } from '../../ui/Reveal';
import { useParallax } from '../../../utils/useParallax';
import { Button } from '../../ui/Button';
import { useAdmin } from '../../../context/AdminContext';

export const DesktopRooftop: React.FC = () => {
  const { siteImages } = useAdmin();
  const parallaxBg = useParallax(0.2);

  return (
    <section className={styles.section} id="rooftop">
      
      {/* Parallax Image Background */}
      <div className={styles.bgWrapper}>
        <div ref={parallaxBg as React.RefObject<HTMLDivElement>} className={styles.bgInner}>
          <img 
            src={siteImages['rooftop-bg'] || "/assets/source/images/rooftoprest.jpg"} 
            alt="El Chico Rooftop" 
            className={styles.bgImage} 
          />
          <div className={styles.overlay} />
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          <Reveal animation="fade-up">
            <h2 className={styles.heading}>
              <span className={styles.headingRow1}>ELEVATE YOUR</span>
              <span className={styles.headingRow2}>
                <span className={styles.script}>perfect</span> EVENING
              </span>
            </h2>
          </Reveal>
          
          <Reveal animation="fade-up" delay={200}>
            <p className={styles.subtext}>
              Experience our legendary rooftop dining. Fine food, great company, and the beautiful night sky of Prayagraj.
            </p>
          </Reveal>

          <Reveal animation="fade-up" delay={400}>
            <Button variant="secondary" size="lg" className={styles.cta} asChild>
              <Link to="/contact-us">Book a Table</Link>
            </Button>
          </Reveal>
        </div>
      </div>

    </section>
  );
};
