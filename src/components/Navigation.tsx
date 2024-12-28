import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const routes = [
  { path: '/', label: 'Home' },
  { path: '/system', label: 'System' },
  { path: '/about', label: 'About' }
];

export default function Navigation() {
  const location = useLocation();

  return (
    <nav className="bg-gray-100 p-4 rounded-lg">
      <div className="flex space-x-4">
        {routes.map(({ path, label }) => (
          <Link
            key={path}
            to={path}
            className={`px-4 py-2 rounded-md transition ${
              location.pathname === path
                ? 'bg-black text-white'
                : 'hover:bg-gray-200'
            }`}
          >
            {label}
          </Link>
        ))}
      </div>
    </nav>
  );
}