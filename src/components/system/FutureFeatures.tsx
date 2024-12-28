import React from 'react';
import { Sparkles } from 'lucide-react';

const futureFeatures = [
  'Native mobile app for enhanced control',
  '24/7 AI Assistant Support (Whisper)',
  'Smart home system integrations',
  'Advanced analytics and reporting',
  'Property management software integration',
  'Nationwide service expansion'
];

export default function FutureFeatures() {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-8">Coming Soon</h2>
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg p-8 text-white">
        <div className="flex items-center mb-6">
          <Sparkles className="w-8 h-8 mr-4" />
          <h3 className="text-xl font-semibold">Future Enhancements</h3>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {futureFeatures.map((feature) => (
            <div key={feature} className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-white rounded-full" />
              <p>{feature}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}