import React from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  const navItems = [
    { to: isHome ? '#features' : '/#features', label: "Features" },
    { to: isHome ? '#how-it-works' : '/#how-it-works', label: "How It Works" },
    { to: isHome ? '#youtube' : '/#youtube', label: "Videos" },
    { to: isHome ? '#coming-soon' : '/#coming-soon', label: "Coming Soon" },
    { to: "/about", label: "About Us" },
    { to: "/system", label: "System" },
    { to: "/for-you", label: "For You?" },
    { to: isHome ? '#contact' : '/#contact', label: "Contact" },
  ];

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Logo className="h-12" variant="black" />
          </Link>
          
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className="text-gray-600 hover:text-black"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className="block text-gray-600 hover:text-black"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}