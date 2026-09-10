import React from 'react';
import styles from './VisitUs.module.css';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';
import { contact } from '../../data';
import { Button } from '../ui/Button';
import { BaguetteIllustration } from '../illustrations';

export const VisitUs: React.FC = () => {
  return (
    <section id="visit" className={styles.section}>
      <div className={`container ${styles.container}`}>
        
        <Reveal>
          <SectionHeading 
            title="Visit Us" 
            subtitle="Come say hello and grab a fresh bake."
          />
        </Reveal>

        <div className={styles.card}>
          <div className={styles.illustration}>
            <BaguetteIllustration size={120} color="var(--color-cream)" strokeWidth={1} />
          </div>

          <Reveal animation="fade-up" className={styles.content}>
            <div className={styles.infoGroup}>
              <h4 className={styles.label}>Location</h4>
              <p className={styles.value}>{contact.address}</p>
            </div>
            
            <div className={styles.infoGroup}>
              <h4 className={styles.label}>Hours</h4>
              <p className={styles.value}>{contact.openingHours}</p>
            </div>

            <div className={styles.infoGroup}>
              <h4 className={styles.label}>Contact</h4>
              <p className={styles.value}>{contact.phone}</p>
              <p className={styles.value}>{contact.email}</p>
            </div>

            <div className={styles.actions}>
              <Button variant="primary" asChild>
                <a href={contact.googleMaps} target="_blank" rel="noopener noreferrer">Get Directions</a>
              </Button>
              <Button variant="outline" asChild>
                <a href={`tel:${contact.phone.replace(/[^0-9+]/g, '')}`}>Call Us</a>
              </Button>
              <Button variant="outline" asChild>
                <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp</a>
              </Button>
            </div>
          </Reveal>
        </div>

      </div>
    </section>
  );
};
