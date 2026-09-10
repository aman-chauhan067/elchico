import React from 'react';
import styles from './MobileVisitUs.module.css';
import { contact } from '../../../data';
import { Button } from '../../ui/Button';
import { Reveal } from '../../ui/Reveal';

export const MobileVisitUs: React.FC = () => {
  return (
    <section className={styles.section} id="visit">
      <div className={`container ${styles.container}`}>
        
        <Reveal animation="fade-up" className={styles.header}>
          <h2 className={styles.heading}>Come Say Hello</h2>
        </Reveal>

        <Reveal animation="fade-up" delay={100} className={styles.actions}>
          {/* Thumb friendly full width buttons first on mobile */}
          <Button variant="primary" size="lg" className={styles.btn}>Get Directions</Button>
          <div className={styles.btnRow}>
            <Button variant="outline" className={styles.btnHalf}>Call Us</Button>
            <Button variant="outline" className={styles.btnHalf}>WhatsApp</Button>
          </div>
        </Reveal>

        <Reveal animation="clip-up" delay={200} className={styles.card}>
          <div className={styles.infoGroup}>
            <h3 className={styles.label}>Location</h3>
            <p className={styles.text}>{contact.address}</p>
          </div>

          <div className={styles.infoGroup}>
            <h3 className={styles.label}>Hours</h3>
            <p className={styles.text}>{contact.openingHours}</p>
          </div>
        </Reveal>

      </div>
    </section>
  );
};
