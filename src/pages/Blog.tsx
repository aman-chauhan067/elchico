import React, { useEffect } from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Reveal } from '../components/ui/Reveal';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
import styles from './Blog.module.css';

export const Blog: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.page}>
      <Navbar />
      
      <main className={styles.main}>
        <div className={styles.container}>
          <Reveal animation="fade-up">
            <div className={styles.emptyState}>
              <svg className={styles.icon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
              <h1 className={styles.title}>Our Journal</h1>
              <p className={styles.subtitle}>
                We are currently crafting stories from our kitchen and our heritage. Check back soon for updates, recipes, and news.
              </p>
              <Button asChild variant="outline">
                <Link to="/">Return Home</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </main>

      <Footer />
    </div>
  );
};
