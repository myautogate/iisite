import React from 'react';
import { Plus } from 'lucide-react';
import { PricingItem } from '../../../types/pricing';

interface ItemListProps {
  items: PricingItem[];
  onSelect: (item: PricingItem) => void;
}

export default function ItemList({ items, onSelect }: ItemListProps) {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      {items.map((item) => (
        <div key={item.id} className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex justify-between items-start">
            <div className="flex-1">
              <h3 className="font-semibold mb-2">{item.name}</h3>
              <div className="space-y-1 text-sm text-gray-600">
                <p>Cost: ${item.cost.toFixed(2)}</p>
                <p>MSRP: ${item.msrp.toFixed(2)}</p>
                <p>Installation: {item.installationTime}hr</p>
              </div>
            </div>
            <button
              onClick={() => onSelect(item)}
              className="p-2 hover:bg-gray-100 rounded-lg transition"
            >
              <Plus className="w-5 h-5" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}