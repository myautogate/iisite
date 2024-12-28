import React from 'react';
import { Phone, Wifi, QrCode, Lock, Clock, Users, Zap, Wrench } from 'lucide-react';
import SystemFeature from './SystemFeature';

const features = [
  {
    icon: Wifi,
    title: 'No Traditional Wiring',
    description: 'Operates without phone lines or internet, using power and 3G cellular service'
  },
  {
    icon: Phone,
    title: 'Universal Compatibility',
    description: 'Works with any phone - cell phones, landlines, or office lines, no app needed'
  },
  {
    icon: QrCode,
    title: 'QR Code Access',
    description: 'Simple QR code scanning or direct dialing for instant property access'
  },
  {
    icon: Lock,
    title: 'Remote Control',
    description: 'Open gates or doors remotely through the Control Center'
  },
  {
    icon: Clock,
    title: '24/7 Operation',
    description: 'Round-the-clock access with optional battery backup'
  },
  {
    icon: Users,
    title: 'Scalable Solution',
    description: 'Accommodates thousands of users and multiple entry points'
  },
  {
    icon: Zap,
    title: 'Quick Installation',
    description: 'Straightforward installation process completed in hours'
  },
  {
    icon: Wrench,
    title: 'Full Warranty',
    description: '1-year warranty with optional lifetime coverage available'
  }
];

export default function FeatureGrid() {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-8">Core Features</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature) => (
          <SystemFeature
            key={feature.title}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
}