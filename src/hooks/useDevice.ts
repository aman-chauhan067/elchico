import { useState, useEffect } from 'react';

type DeviceType = 'mobile' | 'tablet' | 'desktop';

// Breakpoints matching the design-tokens
const TABLET_BREAKPOINT = 768;
const DESKTOP_BREAKPOINT = 1024;

export const useDevice = (): DeviceType => {
  const [device, setDevice] = useState<DeviceType>('desktop');

  useEffect(() => {
    // Only run on client
    if (typeof window === 'undefined') return;

    const handleResize = () => {
      const width = window.innerWidth;
      if (width < TABLET_BREAKPOINT) {
        setDevice('mobile');
      } else if (width >= TABLET_BREAKPOINT && width < DESKTOP_BREAKPOINT) {
        setDevice('tablet');
      } else {
        setDevice('desktop');
      }
    };

    // Initial check
    handleResize();

    // Event listener with simple debouncing for performance
    let timeoutId: ReturnType<typeof setTimeout>;
    const debouncedResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleResize, 100);
    };

    window.addEventListener('resize', debouncedResize, { passive: true });
    
    return () => {
      window.removeEventListener('resize', debouncedResize);
      clearTimeout(timeoutId);
    };
  }, []);

  return device;
};
