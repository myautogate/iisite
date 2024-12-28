import React from 'react';
import PricingCalculator from '../../components/admin/pricing/PricingCalculator';

export default function PricingPage() {
  return (
    <div className="py-24">
      <div className="container mx-auto max-w-6xl px-4">
        <h1 className="text-3xl font-bold mb-8">Pricing Calculator</h1>
        <PricingCalculator />
      </div>
    </div>
  );
}