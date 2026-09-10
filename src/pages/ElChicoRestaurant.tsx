import React, { useEffect } from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Reveal } from '../components/ui/Reveal';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
import styles from './SubBrand.module.css';

export const ElChicoRestaurant: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.page}>
      <Navbar />
      
      <main className={styles.main}>
        <section className={styles.hero} style={{ backgroundColor: 'var(--color-cream)' }}>
          <div className={styles.heroBg}>
            <img src="/assets/source/images/elrestro.jpg" alt="El Chico Restaurant Interior" />
          </div>
          
          <div className={styles.container}>
            <div className={styles.heroContent}>
              <Reveal animation="fade-up">
                <h1 className={styles.title}>
                  El Chico Restaurant
                </h1>
                <p className={styles.description}>
                  The core fine dining restaurant experience. A legacy brand established in 1964, offering fine dining, bakery, and vegetarian options in Civil Lines, Prayagraj.
                </p>
                <div className={styles.actions}>
                  <Button asChild variant="primary" size="lg">
                    <Link to="/our-menu">View Menus</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to="/contact-us">Book a Table</Link>
                  </Button>
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
