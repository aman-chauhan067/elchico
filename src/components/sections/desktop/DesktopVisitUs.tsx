import React from 'react';
import styles from './DesktopVisitUs.module.css';
import { Reveal } from '../../ui/Reveal';
import { sourceContact } from '../../../data/source/contact';
import { sourceBrand } from '../../../data/source/brand';

export const DesktopVisitUs: React.FC = () => {
  
  // Create a clean display version of the verified phone
  const phoneObj = sourceContact.phones.find(p => p.verified);
  const displayPhone = phoneObj ? phoneObj.number : "09415128975";

  return (
    <section className={styles.section} id="visit-us">
      
      <div className={styles.surfaceTexture}></div>
      
      <div className={styles.container}>
        
        <Reveal animation="fade-up" duration={1200} className={styles.postcardWrapper}>
          
          <div className={styles.postcard}>
            
            <div className={styles.stampArea}>
              <div className={styles.postmark}>
                <span className={styles.postmarkCity}>PRAYAGRAJ</span>
                <span className={styles.postmarkDate}>EST. 1964</span>
              </div>
              <div className={styles.stamp}>
                <img 
                  src="/assets/source/images/veggiepage2.jpg" 
                  alt="Stamp"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=100&auto=format&fit=crop';
                  }}
                />
              </div>
            </div>

            <div className={styles.postcardGrid}>
              
              <div className={styles.messageCol}>
                <h3 className={styles.greeting}>We'd love to see you.</h3>
                <p className={styles.messageBody}>
                  Whether you're stopping by for a fresh cup of coffee, a quick bite at The Baking Co, 
                  or an evening of fine dining at our rooftop, you're always family here.
                </p>
                <span className={styles.handwrittenSignoff}>
                  Warmly,<br/>
                  {sourceBrand.name}
                </span>
              </div>

              <div className={styles.addressCol}>
                
                <div className={styles.divider}></div>
                
                <div className={styles.detailsBlock}>
                  <h4 className={styles.label}>Location</h4>
                  <p className={styles.detailText}>
                    {sourceContact.locations[0]?.address || "Civil Lines, Prayagraj\nUttar Pradesh, India"}
                  </p>
                </div>

                <div className={styles.detailsBlock}>
                  <h4 className={styles.label}>Call Us</h4>
                  <p className={styles.detailText}>
                    {displayPhone}
                  </p>
                </div>

                <div className={styles.detailsBlock}>
                  <h4 className={styles.label}>Opening Hours</h4>
                  <p className={styles.detailText}>
                    Monday - Sunday<br/>
                    11:00 AM - 11:00 PM
                  </p>
                </div>

                <a 
                  href="https://www.google.com/maps/search/El+Chico+Prayagraj" 
                  target="_blank" 
                  rel="noreferrer"
                  className={styles.directionsBtn}
                >
                  Get Directions →
                </a>

              </div>

            </div>

          </div>

        </Reveal>

      </div>
    </section>
  );
};
