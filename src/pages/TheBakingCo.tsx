import React, { useEffect } from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Reveal } from '../components/ui/Reveal';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
import styles from './SubBrand.module.css';

export const TheBakingCo: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.page}>
      <Navbar />
      
      <main className={styles.main}>
        <section className={styles.hero} style={{ backgroundColor: 'var(--color-peach)' }}>
          <div className={styles.heroBg}>
            <img src="/assets/source/images/bakebanner1.jpg" alt="The Baking Co Patisserie" />
          </div>
          
          <div className={styles.container}>
            <div className={styles.heroContent}>
              <Reveal animation="fade-up">
                <h1 className={styles.title} style={{ color: 'var(--color-strawberry)' }}>
                  The Baking Co.
                </h1>
                <p className={styles.description}>
                  Bakery and patisserie offerings crafted with love. A delightful extension of the El Chico legacy bringing European patisserie to Prayagraj.
                </p>
                <div className={styles.actions}>
                  <Button asChild variant="primary" size="lg">
                    <Link to="/our-menu">View Menus</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to="/contact-us">Contact Us</Link>
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
