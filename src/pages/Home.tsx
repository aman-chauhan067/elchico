import React from 'react';
import { useDevice } from '../hooks/useDevice';
import { DesktopLayout } from '../layouts/DesktopLayout';
import { TabletLayout } from '../layouts/TabletLayout';
import { MobileLayout } from '../layouts/MobileLayout';

export const Home: React.FC = () => {
  const device = useDevice();

  if (device === 'mobile') return <MobileLayout />;
  if (device === 'tablet') return <TabletLayout />;
  return <DesktopLayout />;
};
