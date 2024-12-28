import React from 'react';
import BrandStory from '../components/about/BrandStory';
import CompanyHistory from '../components/about/CompanyHistory';
import TeamSection from '../components/about/TeamSection';

export default function AboutPage() {
  return (
    <div className="py-24">
      <div className="container mx-auto max-w-4xl px-4">
        <h1 className="text-4xl font-bold mb-12 text-center">About Invisible Intercom™</h1>
        <BrandStory />
        <CompanyHistory />
        <TeamSection />
      </div>
    </div>
  );
}