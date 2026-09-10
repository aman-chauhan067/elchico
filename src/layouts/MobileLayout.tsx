import React from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { MobileHero } from '../components/sections/mobile/MobileHero';
import { MobileBrandIntro } from '../components/sections/mobile/MobileBrandIntro';
import { MobileSignatureBakes } from '../components/sections/mobile/MobileSignatureBakes';
import { MobileStory } from '../components/sections/mobile/MobileStory';
import { MobileBakeryWorld } from '../components/sections/mobile/MobileBakeryWorld';
import { MobileRooftop } from '../components/sections/mobile/MobileRooftop';
import { MobileGallery } from '../components/sections/mobile/MobileGallery';
import { MobileVisitUs } from '../components/sections/mobile/MobileVisitUs';

export const MobileLayout: React.FC = () => {
  return (
    <>
      <Navbar />
      <main>
        <MobileHero />
        {/* Intentionally reordered for Mobile UX: Brand Intro -> Bakes -> Story -> World */}
        <MobileBrandIntro />
        <MobileSignatureBakes />
        <MobileStory />
        <MobileBakeryWorld />
        <MobileRooftop />
        <MobileGallery />
        <MobileVisitUs />
      </main>
      <Footer />
    </>
  );
};
