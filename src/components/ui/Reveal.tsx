import React, { useEffect, useRef, useState } from 'react';

type RevealProps = {
  children: React.ReactNode;
  animation?: 'fade-up' | 'fade-in' | 'slide-right' | 'slide-left' | 'clip-up' | 'scale-up';
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
};

export const Reveal: React.FC<RevealProps> = ({
  children,
  animation = 'fade-up',
  delay = 0,
  duration = 800, // Slightly longer, more elegant duration
  className = '',
  threshold = 0.1,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setIsVisible(true);
      return;
    }

    let isMounted = true;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && isMounted) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
        rootMargin: '100px', // More generous rootMargin
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    // Safety fallback: if it's still not visible after 2 seconds, just show it
    const timer = setTimeout(() => {
      if (isMounted && !isVisible) {
        setIsVisible(true);
      }
    }, 2000);

    return () => {
      isMounted = false;
      clearTimeout(timer);
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [threshold, isVisible]);

  const getInitialStyle = (): React.CSSProperties => {
    if (isVisible) {
      if (animation === 'clip-up') return { clipPath: 'inset(0 0 0 0)', opacity: 1, transform: 'translate(0, 0)' };
      return { opacity: 1, transform: 'translate(0, 0) scale(1)' };
    }
    
    switch (animation) {
      case 'fade-up':
        return { opacity: 0, transform: 'translateY(40px)' };
      case 'fade-in':
        return { opacity: 0 };
      case 'slide-right':
        return { opacity: 0, transform: 'translateX(-40px)' };
      case 'slide-left':
        return { opacity: 0, transform: 'translateX(40px)' };
      case 'clip-up':
        return { clipPath: 'inset(100% 0 0 0)', opacity: 0.5, transform: 'translateY(20px)' };
      case 'scale-up':
        return { opacity: 0, transform: 'scale(0.95)' };
      default:
        return { opacity: 0, transform: 'translateY(40px)' };
    }
  };

  const transitionStyle = animation === 'clip-up' 
    ? `clip-path ${duration}ms var(--ease-slide) ${delay}ms, opacity ${duration}ms ease ${delay}ms, transform ${duration}ms var(--ease-slide) ${delay}ms`
    : `opacity ${duration}ms ease ${delay}ms, transform ${duration}ms var(--ease-slide) ${delay}ms`;

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...getInitialStyle(),
        transition: transitionStyle,
        willChange: 'opacity, transform, clip-path',
      }}
    >
      {children}
    </div>
  );
};
