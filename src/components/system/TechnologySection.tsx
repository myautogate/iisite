import React from 'react';
import { Shield, Smartphone, Globe } from 'lucide-react';

export default function TechnologySection() {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-8">Technology</h2>
      <div className="bg-white rounded-lg shadow-sm p-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <Shield className="w-8 h-8 text-gray-900 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Advanced Security</h3>
            <p className="text-gray-600">
              AES-256 and RSA-4096 encryption for secure communication
            </p>
          </div>
          <div>
            <Smartphone className="w-8 h-8 text-gray-900 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Web-Based Control</h3>
            <p className="text-gray-600">
              Easy setup and management via web browser interface
            </p>
          </div>
          <div>
            <Globe className="w-8 h-8 text-gray-900 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Universal Access</h3>
            <p className="text-gray-600">
              Compatible with any phone type worldwide
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}