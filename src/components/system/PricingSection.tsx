import React from 'react';
import { DollarSign } from 'lucide-react';

export default function PricingSection() {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-8">Pricing & Plans</h2>
      <div className="bg-white rounded-lg shadow-sm p-8">
        <div className="flex items-center mb-6">
          <DollarSign className="w-8 h-8 mr-4 text-gray-900" />
          <h3 className="text-xl font-semibold">Affordable Solutions</h3>
        </div>
        <div className="space-y-4">
          <p className="text-gray-600">
            Competitive pricing with flexible residential and commercial plans
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Pay-as-you-use pricing model</li>
            <li>No long-term contracts required</li>
            <li>Optional lifetime warranty available</li>
            <li>Professional installation included</li>
          </ul>
        </div>
      </div>
    </section>
  );
}