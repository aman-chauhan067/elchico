import React, { useEffect } from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Reveal } from '../components/ui/Reveal';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
import styles from './SubBrand.module.css';

export const VeggieVeg: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.page}>
      <Navbar />
      
      <main className={styles.main}>
        <section className={styles.hero} style={{ backgroundColor: 'var(--color-mint)' }}>
          <div className={styles.heroBg}>
            <img src="/assets/source/images/veggiepage.jpg" alt="Veggie Veg Offerings" />
          </div>
          
          <div className={styles.container}>
            <div className={styles.heroContent}>
              <Reveal animation="fade-up">
                <h1 className={styles.title} style={{ color: 'var(--color-cocoa)' }}>
                  Veggie Veg
                </h1>
                <p className={styles.description}>
                  Our dedicated vegetarian menu and brand. Pure vegetarian delights, curated for our guests seeking an authentic and fresh vegetarian dining experience.
                </p>
                <div className={styles.actions}>
                  <Button asChild variant="primary" size="lg">
                    <Link to="/our-menu">View Menus</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to="/take-away">Order Now</Link>
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
