import React from 'react';

interface Props {
  className?: string;
  color?: string;
  strokeWidth?: number;
  size?: number;
}

export const ArrowIllustration: React.FC<Props> = ({ 
  className = '',
  color = 'currentColor',
  strokeWidth = 2,
  size = 48
}) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ overflow: 'visible' }}
    >
      <path 
        d="M20,80 C40,85 70,75 80,40" 
        stroke={color} 
        strokeWidth={strokeWidth} 
        strokeLinecap="round" 
        fill="none"
      />
      <path 
        d="M65,45 L80,40 L85,55" 
        stroke={color} 
        strokeWidth={strokeWidth} 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        fill="none"
      />
    </svg>
  );
};
