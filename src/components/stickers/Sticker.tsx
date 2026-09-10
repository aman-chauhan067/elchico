import React from 'react';
import styles from './Sticker.module.css';

export type StickerVariant = 'strawberry' | 'butter' | 'mint' | 'sky' | 'lavender' | 'peach' | 'cream';

export interface StickerProps {
  children: React.ReactNode;
  variant?: StickerVariant;
  rotation?: number;
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const Sticker: React.FC<StickerProps> = ({
  children,
  variant = 'butter',
  rotation = 0,
  size = 'md',
  icon,
  className = '',
  style,
}) => {
  const rootStyle = {
    '--sticker-rotation': `${rotation}deg`,
    ...style,
  } as React.CSSProperties;

  return (
    <div 
      className={`${styles.sticker} ${styles[`variant-${variant}`]} ${styles[`size-${size}`]} ${className}`}
      style={rootStyle}
    >
      {icon && <span className={styles.icon}>{icon}</span>}
      <span className={styles.text}>{children}</span>
    </div>
  );
};
