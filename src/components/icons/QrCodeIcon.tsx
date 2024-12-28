import React from 'react';
import { QrCode } from 'lucide-react';

interface QrCodeIconProps {
  className?: string;
  color?: string;
}

export default function QrCodeIcon({ className = "h-8 w-8", color = "currentColor" }: QrCodeIconProps) {
  return <QrCode className={className} color={color} />;
}