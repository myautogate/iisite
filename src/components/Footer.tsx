import React from 'react';
import Logo from './Logo';
import SocialLinks from './SocialLinks';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Logo className="h-8" variant="white" />
          </div>
          <div className="flex space-x-8">
            <a href="#features" className="hover:text-gray-300">Features</a>
            <a href="#how-it-works" className="hover:text-gray-300">How It Works</a>
            <a href="#youtube" className="hover:text-gray-300">Videos</a>
            <a href="#coming-soon" className="hover:text-gray-300">Coming Soon</a>
            <a href="#contact" className="hover:text-gray-300">Contact</a>
          </div>
        </div>
        <div className="mt-8 flex flex-col items-center">
          <SocialLinks />
          <div className="text-gray-400 mt-8">
            © {new Date().getFullYear()} Invisible Intercom. All rights reserved.
          </div>
          <div className="text-gray-400 mt-2 text-sm">
            Protected by US Patent 11,973,896 B2
          </div>
        </div>
      </div>
    </footer>
  );
}