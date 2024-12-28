import React from 'react';
import Header from './components/Header';
import Hero from './components/sections/Hero';
import Features from './components/sections/Features';
import HowItWorks from './components/sections/HowItWorks';
import YouTube from './components/sections/YouTube';
import ComingSoon from './components/sections/ComingSoon';
import Contact from './components/sections/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <Features />
      <HowItWorks />
      <YouTube />
      <ComingSoon />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;