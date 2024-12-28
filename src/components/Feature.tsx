import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function Feature({ icon: Icon, title, description }: FeatureProps) {
  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <Icon className="w-12 h-12 mb-4 text-gray-900" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
}