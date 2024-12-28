import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ScrollToSection from './ScrollToSection';
import WhisperChat from './chat/WhisperChat';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <ScrollToSection />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <WhisperChat />
    </div>
  );
}