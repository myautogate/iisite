import React from 'react';
import { ShieldCheck, Key, Eye } from 'lucide-react';

export default function SecuritySection() {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-8">Security Features</h2>
      <div className="bg-gray-50 rounded-lg p-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="flex items-start space-x-4">
            <ShieldCheck className="w-6 h-6 text-gray-900 flex-shrink-0" />
            <div>
              <h3 className="font-semibold mb-2">Encrypted Communication</h3>
              <p className="text-gray-600 text-sm">Military-grade encryption for all data transmission</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <Key className="w-6 h-6 text-gray-900 flex-shrink-0" />
            <div>
              <h3 className="font-semibold mb-2">Secure Access Control</h3>
              <p className="text-gray-600 text-sm">Granular permissions and access management</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <Eye className="w-6 h-6 text-gray-900 flex-shrink-0" />
            <div>
              <h3 className="font-semibold mb-2">Activity Monitoring</h3>
              <p className="text-gray-600 text-sm">Comprehensive access logs and analytics</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}