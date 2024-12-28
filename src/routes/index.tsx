import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout';
import HomePage from '../pages/HomePage';
import SystemPage from '../pages/SystemPage';
import AboutPage from '../pages/AboutPage';
import ForYouPage from '../pages/ForYouPage';
import WhisperAdminPage from '../pages/admin/WhisperAdminPage';
import PricingPage from '../pages/admin/PricingPage';
import LoginPage from '../pages/admin/LoginPage';
import ProtectedRoute from '../components/auth/ProtectedRoute';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/system',
        element: <SystemPage />,
      },
      {
        path: '/about',
        element: <AboutPage />,
      },
      {
        path: '/for-you',
        element: <ForYouPage />,
      },
    ],
  },
  {
    path: '/admin',
    children: [
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'whisper',
        element: (
          <ProtectedRoute>
            <WhisperAdminPage />
          </ProtectedRoute>
        ),
      },
      {
        path: 'pricing',
        element: (
          <ProtectedRoute>
            <PricingPage />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);