import React from 'react';

interface BrandLogoProps {
  variant?: 'horizontal' | 'compact' | 'footer';
  className?: string;
}

export const BrandLogoMark: React.FC<{ className?: string; strokeColor?: string }> = ({
  className = 'w-11 h-11',
  strokeColor = '#C5A16A',
}) => (
  <svg
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    {/* Outer delicate floral & hair halo arc */}
    <path
      d="M44 10C25 10 12 24.5 12 42.5C12 55.5 20.5 66.5 32.5 70"
      stroke={strokeColor}
      strokeWidth="2.1"
      strokeLinecap="round"
    />
    {/* Flowing hair strands */}
    <path
      d="M46 12C33 13 21 23.5 21 38C21 49.5 28 58 37.5 62"
      stroke={strokeColor}
      strokeWidth="2.3"
      strokeLinecap="round"
    />
    <path
      d="M49 16C39 17.5 29.5 26 29.5 38.5C29.5 47.5 34.5 54.5 41.5 58.5"
      stroke={strokeColor}
      strokeWidth="1.9"
      strokeLinecap="round"
    />
    {/* Feminine face profile silhouette */}
    <path
      d="M46.5 20.5C51.5 23 55 27.5 55.5 32.5L58.8 39.2C59.4 40.3 58.8 41.6 57.6 42L55.5 42.7C55.4 44.5 54.8 46.2 53.8 47.5L55 49.2C55.2 50 54.7 50.8 53.9 51L52.6 51.4C52.1 54.8 49.5 57.5 46 58.5C42.5 59.5 38.5 58.2 36 55.5"
      stroke={strokeColor}
      strokeWidth="2.1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Serene closed eye & subtle brow */}
    <path
      d="M47 32.5C49.2 31.8 51.4 32.2 53 33.4"
      stroke={strokeColor}
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    <path
      d="M47.8 36.2C49.5 37.2 51.5 37.1 53 36"
      stroke={strokeColor}
      strokeWidth="1.7"
      strokeLinecap="round"
    />
    {/* Minimal floral blossom accent in hair */}
    <path
      d="M25.5 22.5C23 19.5 24 15.5 28 15C28.5 18.5 27.5 21.2 25.5 22.5Z"
      stroke={strokeColor}
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
    <path
      d="M25.5 22.5C21.8 22.5 18.5 20.2 19 16.5C22.4 17 24.6 19.2 25.5 22.5Z"
      stroke={strokeColor}
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
    <circle cx="26" cy="22.8" r="1.6" fill={strokeColor} />
    {/* Delicate neck line */}
    <path
      d="M41.5 58.5C41.5 63.5 43.2 67 47.5 69.5"
      stroke={strokeColor}
      strokeWidth="1.9"
      strokeLinecap="round"
    />
  </svg>
);

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'horizontal',
  className = '',
}) => {
  if (variant === 'compact') {
    return (
      <span className={`inline-flex items-center gap-2.5 ${className}`}>
        <BrandLogoMark className="w-9 h-9 shrink-0" />
        <span className="font-serif-display text-lg font-semibold tracking-tight text-[#762C3E] whitespace-nowrap">
          Hidden Beauty Salon
        </span>
      </span>
    );
  }

  if (variant === 'footer') {
    return (
      <span className={`inline-flex items-center gap-3 ${className}`}>
        <BrandLogoMark className="w-12 h-12 shrink-0" strokeColor="#E3C493" />
        <span className="flex flex-col">
          <span className="font-serif-display text-xl font-semibold tracking-tight text-[#FFF9F6] whitespace-nowrap">
            Hidden Beauty Salon
          </span>
          <span className="text-[11px] tracking-[0.14em] uppercase text-[#E3C493] font-normal">
            Reveal Your Natural Beauty.
          </span>
        </span>
      </span>
    );
  }

  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <BrandLogoMark className="w-11 h-11 shrink-0" />
      <span className="flex flex-col leading-none">
        <span className="font-serif-display text-xl lg:text-[22px] font-semibold tracking-tight text-[#762C3E] whitespace-nowrap">
          Hidden Beauty Salon
        </span>
        <span className="text-[11px] tracking-[0.12em] text-[#9E6B73] mt-1 font-normal whitespace-nowrap">
          Reveal Your Natural Beauty.
        </span>
      </span>
    </span>
  );
};

export const SilhouetteAccentArt: React.FC<{ className?: string }> = ({
  className = 'w-28 h-36',
}) => (
  <svg
    viewBox="0 0 120 150"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M72 18C45 20 26 42 26 70C26 92 38 111 56 122"
      stroke="#C5A16A"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M76 26C54 29 38 47 38 71C38 89 48 104 64 112"
      stroke="#C5A16A"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    <path
      d="M75 30C84 34 89 42 90 51L96 63C97 65 96 67 94 68L90 69.5C90 73 88.5 76 86.5 78.5L88.5 82C88.8 83.4 87.8 84.8 86.4 85.2L84 86C83 92.5 78 97.5 71 99.2C64.5 100.8 57.5 98.2 53.5 93"
      stroke="#C5A16A"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M75 51.5C78.5 50 82 50.8 84.5 52.8"
      stroke="#C5A16A"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    <path
      d="M76 58C79 59.8 82.5 59.6 85 57.6"
      stroke="#C5A16A"
      strokeWidth="1.7"
      strokeLinecap="round"
    />
    <path
      d="M65 99.5C65 112 69 124 80 132"
      stroke="#C5A16A"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
);
