import React, { useEffect } from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Reveal } from '../components/ui/Reveal';

export const NotFound: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--color-paper)' }}>
      <Navbar />
      
      <main style={{ flex: 1, paddingTop: '140px', paddingBottom: 'var(--space-48)' }}>
        <div className="container">
          <Reveal animation="fade-up">
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(3rem, 6vw, 5rem)', color: 'var(--color-cocoa)', textAlign: 'center' }}>
              Not Found
            </h1>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-lg)', color: 'var(--color-cocoa)', textAlign: 'center', opacity: 0.8, marginTop: 'var(--space-8)' }}>
              Content coming soon...
            </p>
          </Reveal>
        </div>
      </main>

      <Footer />
    </div>
  );
};
