import React from 'react';
import { Check } from 'lucide-react';

interface UseCaseProps {
  title: string;
  solution: string;
}

export default function UseCaseCard({ title, solution }: UseCaseProps) {
  return (
    <div className="flex gap-4 p-6 bg-white rounded-lg shadow-sm">
      <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
      <div>
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <p className="text-gray-600">{solution}</p>
      </div>
    </div>
  );
}