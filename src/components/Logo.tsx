import React from 'react';
import QrCodeIcon from './icons/QrCodeIcon';

interface LogoProps {
  className?: string;
  variant?: 'black' | 'white';
  showQrCode?: boolean;
}

export default function Logo({ className = "h-8", variant = 'black', showQrCode = true }: LogoProps) {
  const logoPath = variant === 'white' 
    ? '/invisible-intercom-white.png'
    : '/invisible-intercom-black.png';

  return (
    <div className="flex items-center gap-2">
      {showQrCode && (
        <QrCodeIcon 
          className={className} 
          color={variant === 'white' ? 'white' : 'black'} 
        />
      )}
      <img 
        src={logoPath}
        alt="Invisible Intercom"
        className={className}
      />
    </div>
  );
}