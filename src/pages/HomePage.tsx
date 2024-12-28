import React from 'react';
import Hero from '../components/sections/Hero';
import Features from '../components/sections/Features';
import HowItWorks from '../components/sections/HowItWorks';
import YouTube from '../components/sections/YouTube';
import ComingSoon from '../components/sections/ComingSoon';
import Contact from '../components/sections/Contact';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
      <YouTube />
      <ComingSoon />
      <Contact />
    </>
  );
}