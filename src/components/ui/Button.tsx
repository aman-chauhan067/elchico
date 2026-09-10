import React from 'react';
import styles from './Button.module.css';
import { triggerCelebration } from '../../utils/celebration';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  size?: 'sm' | 'md' | 'lg';
  asChild?: boolean;
  celebration?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant = 'primary', size = 'md', asChild, celebration = true, onClick, ...props }, ref) => {
    
    const wrapperRef = React.useRef<HTMLDivElement>(null);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (celebration && wrapperRef.current) {
        const count = window.innerWidth < 768 ? 20 : window.innerWidth < 1024 ? 35 : 60;
        triggerCelebration({ wrapper: wrapperRef.current, particleCount: count });
      }
      onClick?.(e);
    };

    const btn = (
      <button
        ref={ref}
        className={`${styles.button} ${styles[`variant-${variant}`]} ${styles[`size-${size}`]} ${className} ${celebration ? styles.celebrationButton : ''}`}
        onClick={handleClick}
        {...props}
      />
    );

    if (celebration) {
      return (
        <div ref={wrapperRef} className={styles.celebrationWrapper}>
          {btn}
        </div>
      );
    }

    return btn;
  }
);
Button.displayName = 'Button';
