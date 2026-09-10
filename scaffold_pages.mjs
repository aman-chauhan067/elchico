import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pagesDir = path.join(__dirname, 'src', 'pages');

const pages = [
  'About',
  'OurStory',
  'TakeAway',
  'ElChicoRestaurant',
  'TheBakingCo',
  'VeggieVeg',
  'Blog',
  'NotFound',
  'Gallery'
];

const template = (name) => `import React, { useEffect } from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Reveal } from '../components/ui/Reveal';

export const ${name}: React.FC = () => {
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
              ${name.replace(/([A-Z])/g, ' $1').trim()}
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
`;

pages.forEach(page => {
  const filePath = path.join(pagesDir, `${page}.tsx`);
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, template(page));
    console.log(`Created ${page}.tsx`);
  }
});
