import React from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { DesktopHero } from '../components/sections/desktop/DesktopHero';
import { DesktopBrandIntro } from '../components/sections/desktop/DesktopBrandIntro';
import { DesktopSignatureBakes } from '../components/sections/desktop/DesktopSignatureBakes';
import { DesktopStory } from '../components/sections/desktop/DesktopStory';
import { DesktopRooftop } from '../components/sections/desktop/DesktopRooftop';
import { DesktopGallery } from '../components/sections/desktop/DesktopGallery';
import { DesktopVisitUs } from '../components/sections/desktop/DesktopVisitUs';

export const DesktopLayout: React.FC = () => {
  return (
    <>
      <Navbar />
      <main>
        <DesktopHero />
        <DesktopBrandIntro />
        <DesktopSignatureBakes />
        <DesktopStory />
        <DesktopRooftop />
        <DesktopGallery />
        <DesktopVisitUs />
      </main>
      <Footer />
    </>
  );
};
