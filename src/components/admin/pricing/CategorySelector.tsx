import React from 'react';
import { pricingData } from '../../../types/pricing';

const categories = ['controller', 'cellular', 'sign', 'subscription'] as const;

interface CategorySelectorProps {
  selectedCategory: string;
  onSelect: (category: string) => void;
}

export default function CategorySelector({ selectedCategory, onSelect }: CategorySelectorProps) {
  return (
    <div className="flex gap-4 overflow-x-auto pb-2">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelect(category)}
          className={`px-4 py-2 rounded-lg whitespace-nowrap transition ${
            selectedCategory === category
              ? 'bg-black text-white'
              : 'hover:bg-gray-100'
          }`}
        >
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </button>
      ))}
    </div>
  );
}