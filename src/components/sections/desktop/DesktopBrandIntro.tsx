import React from 'react';
import styles from './DesktopBrandIntro.module.css';
import { sourceBrand } from '../../../data/source/brand';
import { Reveal } from '../../ui/Reveal';
import { HeartIllustration } from '../../illustrations';

export const DesktopBrandIntro: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        {/* Decorative mark / annotation top left */}
        <div className={styles.topLeftAnnotation}>
          <span className={styles.annotationText}>verified heritage</span>
          <div className={styles.line}></div>
        </div>

        {/* Large Cropped Typography */}
        <Reveal animation="fade-up" duration={1000} delay={100}>
          <div className={styles.giantCroppedText}>
            TRADITION
          </div>
        </Reveal>

        {/* Asymmetric layout core */}
        <div className={styles.editorialGrid}>
          
          <div className={styles.colLeft}>
            <Reveal animation="slide-right" delay={200}>
              <div className={styles.yearBadge}>
                <span className={styles.year}>{sourceBrand.establishedYear}</span>
                <HeartIllustration size={32} color="var(--color-strawberry)" strokeWidth={1.5} className={styles.heart} />
              </div>
            </Reveal>
            
            <Reveal animation="fade-in" delay={400}>
              <span className={styles.handwrittenNote}>
                our promise to you
              </span>
            </Reveal>
          </div>

          <div className={styles.colRight}>
            <Reveal animation="fade-up" delay={300}>
              <h2 className={styles.strongStatement}>
                {sourceBrand.tagline}
              </h2>
            </Reveal>

            <Reveal animation="fade-up" delay={500}>
              <p className={styles.supportingParagraph}>
                {sourceBrand.description}
              </p>
            </Reveal>
          </div>

        </div>

      </div>
    </section>
  );
};
