import React from 'react';
import FeatureGrid from '../components/system/FeatureGrid';
import TechnologySection from '../components/system/TechnologySection';
import PricingSection from '../components/system/PricingSection';
import SecuritySection from '../components/system/SecuritySection';
import FutureFeatures from '../components/system/FutureFeatures';

export default function SystemPage() {
  return (
    <div className="py-24">
      <div className="container mx-auto max-w-6xl px-4">
        <h1 className="text-4xl font-bold mb-8">System Details</h1>
        <div className="space-y-16">
          <FeatureGrid />
          <TechnologySection />
          <SecuritySection />
          <PricingSection />
          <FutureFeatures />
        </div>
      </div>
    </div>
  );
}