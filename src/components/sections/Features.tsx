import React from 'react';
import Feature from '../Feature';
import { QrCode, Phone, Shield, Award } from 'lucide-react';

export default function Features() {
  return (
    <section id="features" className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-12">Current Features</h2>
        <div className="grid md:grid-cols-4 gap-8">
          <Feature 
            icon={QrCode}
            title="QR Code Access"
            description="Simple QR code scanning for instant property access"
          />
          <Feature 
            icon={Phone}
            title="Phone Call Option"
            description="Direct phone connection to property owner or manager"
          />
          <Feature 
            icon={Shield}
            title="Secure Access"
            description="Protected entry system with owner verification"
          />
          <Feature 
            icon={Award}
            title="Patented Technology"
            description="Protected by US Patent 11,973,896 B2"
          />
        </div>
      </div>
    </section>
  );
}