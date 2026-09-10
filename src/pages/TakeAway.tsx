import React, { useEffect } from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Reveal } from '../components/ui/Reveal';
import { sourceContact } from '../data/source/contact';
import styles from './TakeAway.module.css';
import { Phone } from 'lucide-react';

export const TakeAway: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const verifiedPhone = sourceContact.phones.find(p => p.verified)?.number;

  return (
    <div className={styles.page}>
      <Navbar />
      
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className="container">
            <Reveal animation="fade-up">
              <h1 className={styles.title}>
                <span className={styles.script}>Craving</span> EL CHICO?
              </h1>
              <p className={styles.subtitle}>
                Get your favorite European patisserie and gourmet meals delivered straight to your door.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Delivery Options Grid */}
        <section className={styles.optionsSection}>
          <div className="container">
            <div className={styles.grid}>
              
              {/* Option 1: Direct Call */}
              <Reveal animation="fade-up" delay={100} className={styles.cardWrapper}>
                <div className={`${styles.card} ${styles.cardPrimary}`}>
                  <div className={styles.cardIcon}>
                    <Phone size={32} />
                  </div>
                  <h2 className={styles.cardTitle}>Direct Takeaway</h2>
                  <p className={styles.cardText}>
                    Call us directly to place your order and pick it up fresh from our counter.
                  </p>
                  {verifiedPhone ? (
                    <a href={`tel:${verifiedPhone}`} className={styles.cardAction}>
                      Call {verifiedPhone.replace(/^0/, '')}
                    </a>
                  ) : (
                    <span className={styles.cardAction}>Not Available</span>
                  )}
                </div>
              </Reveal>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
