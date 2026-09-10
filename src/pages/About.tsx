import React, { useEffect } from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Reveal } from '../components/ui/Reveal';
import { sourceBrand } from '../data/source/brand';
import { sourceContact } from '../data/source/contact';
import styles from './About.module.css';

export const About: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const verifiedPhone = sourceContact.phones.find(p => p.verified)?.number;
  const verifiedEmail = sourceContact.emails.find(e => e.verified)?.email;
  const verifiedAddress = sourceContact.locations[0]?.address;

  return (
    <div className={styles.page}>
      <Navbar />
      
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.container}>
            <Reveal animation="fade-up">
              <span className={styles.eyebrow}>Since {sourceBrand.establishedYear}</span>
              <h1 className={styles.title}>
                About {sourceBrand.name}
              </h1>
              <div className={styles.content}>
                <p>
                  {sourceBrand.description}
                </p>
                <p style={{ marginTop: 'var(--space-4)' }}>
                  <strong>{sourceBrand.tagline}.</strong> We take pride in our heritage, offering a diverse range of culinary experiences through our signature restaurants and patisseries.
                </p>
              </div>

              <div className={styles.grid}>
                <div className={styles.infoBlock}>
                  <h3>Location</h3>
                  {verifiedAddress ? (
                    <p>{verifiedAddress}</p>
                  ) : (
                    <p>Prayagraj, Uttar Pradesh, India</p>
                  )}
                </div>
                <div className={styles.infoBlock}>
                  <h3>Contact</h3>
                  {verifiedEmail && <p>Email: <a href={`mailto:${verifiedEmail}`}>{verifiedEmail}</a></p>}
                  {verifiedPhone && <p>Phone: +91 {verifiedPhone.replace(/^0/, '')}</p>}
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
