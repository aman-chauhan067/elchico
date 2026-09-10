import { useEffect, useRef } from 'react';

/**
 * A lightweight parallax hook that uses IntersectionObserver and requestAnimationFrame.
 * It applies a CSS transform variable to the referenced element.
 * Respects prefers-reduced-motion.
 */
export function useParallax(speed: number = 0.2) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      return; // Disable parallax for reduced motion
    }

    const element = ref.current;
    if (!element) return;

    let rafId: number;
    let isVisible = false;

    // We use an observer so we only run rAF when the element is actually in view.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting;
        });
      },
      { rootMargin: '100px' }
    );

    observer.observe(element);

    const updatePosition = () => {
      if (isVisible) {
        // Calculate offset based on scroll position relative to the element's top position
        // This makes the parallax effect start roughly when the element enters the viewport
        const rect = element.getBoundingClientRect();
        // Distance from center of viewport
        const offset = (window.innerHeight / 2) - (rect.top + rect.height / 2);
        
        // Apply transform. We use translate3d for hardware acceleration.
        element.style.transform = `translate3d(0, ${offset * speed}px, 0)`;
      }
      rafId = requestAnimationFrame(updatePosition);
    };

    rafId = requestAnimationFrame(updatePosition);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(rafId);
      if (element) {
        element.style.transform = '';
      }
    };
  }, [speed]);

  return ref;
}
