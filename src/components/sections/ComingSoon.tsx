import React from 'react';
import Feature from '../Feature';
import { Key, Bell, Users, Settings } from 'lucide-react';

export default function ComingSoon() {
  return (
    <section id="coming-soon" className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-12">Coming Soon</h2>
        <div className="grid md:grid-cols-4 gap-8">
          <Feature 
            icon={Key}
            title="Invisible Keys"
            description="Temporary access codes for scheduled visitors, like Uber/Doordash, etc"
          />
          <Feature 
            icon={Bell}
            title="Smart Notifications"
            description="Real-time alerts for entry attempts"
          />
          <Feature 
            icon={Users}
            title="Multi-User and Multi-Property Management"
            description="Manage multiple user/property permissions"
          />
          <Feature 
            icon={Settings}
            title="Advanced Controls"
            description="Customizable access schedules and rules"
          />
        </div>
      </div>
    </section>
  );
}