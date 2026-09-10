import React from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { TabletHero } from '../components/sections/tablet/TabletHero';
import { TabletBrandIntro } from '../components/sections/tablet/TabletBrandIntro';
import { TabletBakeryWorld } from '../components/sections/tablet/TabletBakeryWorld';
import { TabletSignatureBakes } from '../components/sections/tablet/TabletSignatureBakes';
import { TabletStory } from '../components/sections/tablet/TabletStory';
import { TabletRooftop } from '../components/sections/tablet/TabletRooftop';
import { TabletGallery } from '../components/sections/tablet/TabletGallery';
import { TabletVisitUs } from '../components/sections/tablet/TabletVisitUs';

export const TabletLayout: React.FC = () => {
  return (
    <>
      <Navbar />
      <main>
        <TabletHero />
        <TabletBrandIntro />
        <TabletBakeryWorld />
        <TabletSignatureBakes />
        <TabletStory />
        <TabletRooftop />
        <TabletGallery />
        <TabletVisitUs />
      </main>
      <Footer />
    </>
  );
};
