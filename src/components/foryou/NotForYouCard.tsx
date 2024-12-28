import React from 'react';
import { XCircle } from 'lucide-react';

interface NotForYouProps {
  title: string;
  description: string;
}

export default function NotForYouCard({ title, description }: NotForYouProps) {
  return (
    <div className="flex gap-4 p-6 bg-white rounded-lg shadow-sm">
      <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
      <div>
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}