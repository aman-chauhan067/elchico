import React from 'react';
import styles from './TabletVisitUs.module.css';
import { contact } from '../../../data';
import { Button } from '../../ui/Button';
import { Reveal } from '../../ui/Reveal';

export const TabletVisitUs: React.FC = () => {
  return (
    <section className={styles.section} id="visit">
      <div className={`container ${styles.container}`}>
        
        <Reveal animation="fade-up" className={styles.left}>
          <h2 className={styles.heading}>
            Come<br/>Say Hello
          </h2>
        </Reveal>

        <Reveal animation="clip-up" delay={200} className={styles.right}>
          <div className={styles.card}>
            
            <div className={styles.infoGroup}>
              <h3 className={styles.label}>Location</h3>
              <p className={styles.text}>{contact.address}</p>
            </div>

            <div className={styles.infoGroup}>
              <h3 className={styles.label}>Hours</h3>
              <p className={styles.text}>{contact.openingHours}</p>
            </div>

            <div className={styles.infoGroup}>
              <h3 className={styles.label}>Contact</h3>
              <p className={styles.text}>{contact.phone}</p>
              <p className={styles.text}>{contact.email}</p>
            </div>

            <div className={styles.actions}>
              <Button variant="primary">Directions</Button>
              <Button variant="outline">WhatsApp</Button>
            </div>
            
          </div>
        </Reveal>

      </div>
    </section>
  );
};
