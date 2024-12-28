import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SystemFeatureProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function SystemFeature({ icon: Icon, title, description }: SystemFeatureProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <Icon className="w-8 h-8 text-gray-900 mb-4" />
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}