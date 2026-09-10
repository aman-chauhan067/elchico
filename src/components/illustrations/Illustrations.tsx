import React from 'react';

// Common props for all illustrations
export interface IllustrationProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
}

const baseProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export const CroissantIllustration: React.FC<IllustrationProps> = ({ size = 24, color = "currentColor", strokeWidth = 1.5, ...props }) => (
  <svg width={size} height={size} strokeWidth={strokeWidth} color={color} {...baseProps} {...props}>
    <path d="M4.5 12C4.5 12 2 13 2 15C2 17 5 18 5 18C5 18 7 19.5 12 19.5C17 19.5 19 18 19 18C19 18 22 17 22 15C22 13 19.5 12 19.5 12C19.5 12 20 9 18 7C16 5 13.5 5 12 5C10.5 5 8 5 6 7C4 9 4.5 12 4.5 12Z" />
    <path d="M7 11C7 11 9 13.5 12 13.5C15 13.5 17 11 17 11" />
    <path d="M9 7.5C9 7.5 10 9.5 12 9.5C14 9.5 15 7.5 15 7.5" />
    <path d="M5.5 15.5C5.5 15.5 6 16.5 8 17" />
    <path d="M18.5 15.5C18.5 15.5 18 16.5 16 17" />
  </svg>
);

export const StrawberryIllustration: React.FC<IllustrationProps> = ({ size = 24, color = "currentColor", strokeWidth = 1.5, ...props }) => (
  <svg width={size} height={size} strokeWidth={strokeWidth} color={color} {...baseProps} {...props}>
    <path d="M12 21.5C12 21.5 5 17 5 11C5 7 8 5 12 5C16 5 19 7 19 11C19 17 12 21.5 12 21.5Z" />
    <path d="M12 5C12 5 13 2 15 2" />
    <path d="M12 5C12 5 10.5 3 9 3" />
    <path d="M12 5V2.5" />
    <circle cx="9" cy="10" r="0.5" fill="currentColor" />
    <circle cx="15" cy="11" r="0.5" fill="currentColor" />
    <circle cx="11.5" cy="14" r="0.5" fill="currentColor" />
    <circle cx="14" cy="16" r="0.5" fill="currentColor" />
    <circle cx="8.5" cy="15" r="0.5" fill="currentColor" />
  </svg>
);

export const CherryIllustration: React.FC<IllustrationProps> = ({ size = 24, color = "currentColor", strokeWidth = 1.5, ...props }) => (
  <svg width={size} height={size} strokeWidth={strokeWidth} color={color} {...baseProps} {...props}>
    <circle cx="7" cy="17" r="4" />
    <circle cx="17" cy="16" r="4" />
    <path d="M7 13C7 13 8 5 14 3" />
    <path d="M17 12C17 12 16 6 14 3" />
    <path d="M14 3C14 3 16 2 18 2C18 2 19 4 18 5C17 6 14 3 14 3Z" />
  </svg>
);

export const CupcakeIllustration: React.FC<IllustrationProps> = ({ size = 24, color = "currentColor", strokeWidth = 1.5, ...props }) => (
  <svg width={size} height={size} strokeWidth={strokeWidth} color={color} {...baseProps} {...props}>
    <path d="M6 14L7.5 21H16.5L18 14" />
    <path d="M4 14C4 14 6 15 12 15C18 15 20 14 20 14C20 14 21 11 19 10C17 9 17 6 14 6C11 6 9.5 8 8 8C6 8 5 9 4 10C2 11 4 14 4 14Z" />
    <circle cx="12" cy="4" r="2" />
    <path d="M9 14V21" />
    <path d="M12 15V21" />
    <path d="M15 14V21" />
  </svg>
);

export const CakeSliceIllustration: React.FC<IllustrationProps> = ({ size = 24, color = "currentColor", strokeWidth = 1.5, ...props }) => (
  <svg width={size} height={size} strokeWidth={strokeWidth} color={color} {...baseProps} {...props}>
    <path d="M3 13L21 6L18 17H4L3 13Z" />
    <path d="M3 13L21 6" />
    <path d="M4 17V20C4 20 8 21 11 21C14 21 18 20 18 20V17" />
    <path d="M7 10C7 10 9 8 11 8C13 8 15 10 15 10" />
    <circle cx="18" cy="4" r="1.5" />
  </svg>
);

export const CoffeeCupIllustration: React.FC<IllustrationProps> = ({ size = 24, color = "currentColor", strokeWidth = 1.5, ...props }) => (
  <svg width={size} height={size} strokeWidth={strokeWidth} color={color} {...baseProps} {...props}>
    <path d="M5 9L6 19C6 20.1046 6.89543 21 8 21H14C15.1046 21 16 20.1046 16 19L17 9H5Z" />
    <path d="M17 11H18C19.6569 11 21 12.3431 21 14C21 15.6569 19.6569 17 18 17H16.5" />
    <path d="M8 4C8 4 9 2 10 2C11 2 10.5 4 11.5 4C12.5 4 12 2 13 2" />
    <path d="M12 5C12 5 13 3 14 3C15 3 14.5 5 15.5 5C16.5 5 16 3 17 3" />
    <path d="M4 9H18" />
  </svg>
);

export const BaguetteIllustration: React.FC<IllustrationProps> = ({ size = 24, color = "currentColor", strokeWidth = 1.5, ...props }) => (
  <svg width={size} height={size} strokeWidth={strokeWidth} color={color} {...baseProps} {...props}>
    <path d="M4.5 19.5C2 17 2 14 4 12L15 3C17 1 20 1 21 3C22 5 22 8 20 10L9 21C7 23 4 23 2 21" />
    <path d="M7 13L11 9" />
    <path d="M10 16L14 12" />
    <path d="M13 19L17 15" />
  </svg>
);

export const FlowerIllustration: React.FC<IllustrationProps> = ({ size = 24, color = "currentColor", strokeWidth = 1.5, ...props }) => (
  <svg width={size} height={size} strokeWidth={strokeWidth} color={color} {...baseProps} {...props}>
    <circle cx="12" cy="12" r="3" />
    <path d="M12 9C12 9 10 4 12 3C14 4 12 9 12 9Z" />
    <path d="M12 15C12 15 14 20 12 21C10 20 12 15 12 15Z" />
    <path d="M9 12C9 12 4 10 3 12C4 14 9 12 9 12Z" />
    <path d="M15 12C15 12 20 14 21 12C20 10 15 12 15 12Z" />
    <path d="M10 10C10 10 6 6 7.5 4.5C9 6 10 10 10 10Z" />
    <path d="M14 14C14 14 18 18 16.5 19.5C15 18 14 14 14 14Z" />
    <path d="M14 10C14 10 18 6 19.5 7.5C18 9 14 10 14 10Z" />
    <path d="M10 14C10 14 6 18 4.5 16.5C6 15 10 14 10 14Z" />
  </svg>
);

export const RibbonIllustration: React.FC<IllustrationProps> = ({ size = 24, color = "currentColor", strokeWidth = 1.5, ...props }) => (
  <svg width={size} height={size} strokeWidth={strokeWidth} color={color} {...baseProps} {...props}>
    <path d="M12 14C13.6569 14 15 12.6569 15 11C15 9.34315 13.6569 8 12 8C10.3431 8 9 9.34315 9 11C9 12.6569 10.3431 14 12 14Z" />
    <path d="M10.5 13.5L5 21L7 16L3 14L9.5 11.5" />
    <path d="M13.5 13.5L19 21L17 16L21 14L14.5 11.5" />
    <path d="M12 8C12 8 10 3 12 2C14 3 12 8 12 8Z" />
  </svg>
);

export const SparkleIllustration: React.FC<IllustrationProps> = ({ size = 24, color = "currentColor", strokeWidth = 1.5, ...props }) => (
  <svg width={size} height={size} strokeWidth={strokeWidth} color={color} {...baseProps} {...props}>
    <path d="M12 3C12 8 16 12 21 12C16 12 12 16 12 21C12 16 8 12 3 12C8 12 12 8 12 3Z" />
  </svg>
);

export const HeartIllustration: React.FC<IllustrationProps> = ({ size = 24, color = "currentColor", strokeWidth = 1.5, ...props }) => (
  <svg width={size} height={size} strokeWidth={strokeWidth} color={color} {...baseProps} {...props}>
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);
