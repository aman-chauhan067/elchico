import React, { useState, useEffect } from 'react';
import styles from './Contact.module.css';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Button } from '../components/ui/Button';
import { Reveal } from '../components/ui/Reveal';
import { sourceContact } from '../data/source/contact';

export const Contact: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    // Simulate network request
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  const verifiedPhone = sourceContact.phones.find(p => p.verified)?.number;
  const verifiedEmail = sourceContact.emails.find(e => e.verified)?.email;
  const verifiedAddress = sourceContact.locations[0]?.address;

  return (
    <div className={styles.page}>
      <Navbar />
      
      <main className={styles.main}>
        <div className={styles.container}>
          
          <div className={styles.grid}>
            
            {/* Left Column: Info */}
            <Reveal animation="slide-right" className={styles.infoCol}>
              <h1 className={styles.title}>Get In Touch With Us</h1>
              
              <div className={styles.description}>
                Located in Allahabad this 50 year old restaurant has stood the time of change 
                and continued to dish out quality food and confectionary day after day.
              </div>

              <div className={styles.contactDetails}>
                {verifiedAddress && (
                  <div className={styles.detailItem}>
                    <div className={styles.iconWrapper}>
                      {/* Simple map pin SVG */}
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <span>{verifiedAddress}</span>
                  </div>
                )}
                
                {verifiedEmail && (
                  <div className={styles.detailItem}>
                    <div className={styles.iconWrapper}>
                      {/* Simple envelope SVG */}
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <a href={`mailto:${verifiedEmail}`}>{verifiedEmail}</a>
                  </div>
                )}

                {verifiedPhone && (
                  <div className={styles.detailItem}>
                    <div className={styles.iconWrapper}>
                      {/* Simple phone SVG */}
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <span>Phone: +91 {verifiedPhone.replace(/^0/, '')}</span>
                  </div>
                )}
              </div>
            </Reveal>

            {/* Right Column: Form */}
            <Reveal animation="slide-left" delay={200} className={styles.formCol}>
              {status === 'success' ? (
                <Reveal animation="scale-up" delay={100}>
                  <div className={styles.successState}>
                    <div className={styles.successIcon}>✓</div>
                    <h2 className={styles.successTitle}>Simulation Successful</h2>
                    <p className={styles.successMessage}>
                      This is a purely front-end simulation. No actual data was sent or stored.
                      In a real production environment, this form would connect to an email service or backend API.
                    </p>
                    <Button onClick={() => setStatus('idle')} variant="outline">
                      Send another message
                    </Button>
                  </div>
                </Reveal>
              ) : (
                <form className={styles.form} onSubmit={handleSubmit}>
                  <div className={styles.formRow}>
                    <div className={styles.inputGroup}>
                      <label htmlFor="name">Your Name (*)</label>
                      <input id="name" type="text" required className={styles.input} disabled={status === 'loading'} />
                    </div>
                    <div className={styles.inputGroup}>
                      <label htmlFor="email">Your Email (*)</label>
                      <input id="email" type="email" required className={styles.input} disabled={status === 'loading'} />
                    </div>
                  </div>

                  <div className={styles.formRow}>
                    <div className={styles.inputGroup}>
                      <label htmlFor="phone">Phone</label>
                      <input id="phone" type="tel" className={styles.input} disabled={status === 'loading'} />
                    </div>
                    <div className={styles.inputGroup}>
                      <label htmlFor="department">Department</label>
                      <div className={styles.selectWrapper}>
                        <select id="department" className={styles.input} disabled={status === 'loading'}>
                          <option>Business Department</option>
                          <option>Reservations</option>
                          <option>Catering</option>
                          <option>General Inquiry</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className={styles.inputGroup}>
                    <label htmlFor="message">Your Question</label>
                    <textarea id="message" rows={4} className={styles.textarea} disabled={status === 'loading'}></textarea>
                  </div>

                  <Button type="submit" variant="primary" size="lg" className={styles.submitBtn} disabled={status === 'loading'}>
                    {status === 'loading' ? 'Sending...' : 'Submit'}
                  </Button>
                </form>
              )}
            </Reveal>

          </div>
          
        </div>
      </main>

      <Footer />
    </div>
  );
};
