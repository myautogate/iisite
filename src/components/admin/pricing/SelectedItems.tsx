import React from 'react';
import { Plus, Minus } from 'lucide-react';
import { CalculatorItem } from '../../../types/pricing';

interface SelectedItemsProps {
  items: CalculatorItem[];
  onUpdateQuantity: (id: string, quantity: number) => void;
}

export default function SelectedItems({ items, onUpdateQuantity }: SelectedItemsProps) {
  if (items.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        No items selected. Add items from the list above.
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {items.map((item) => (
        <div key={item.id} className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm">
          <div className="flex-1">
            <h4 className="font-medium">{item.name}</h4>
            <div className="text-sm text-gray-600">
              <p>Unit Cost: ${item.cost.toFixed(2)}</p>
              <p>Unit MSRP: ${item.msrp.toFixed(2)}</p>
              <p>Total Cost: ${(item.cost * item.quantity).toFixed(2)}</p>
              <p>Total MSRP: ${(item.msrp * item.quantity).toFixed(2)}</p>
              <p>Installation Time: {(item.installationTime * item.quantity).toFixed(1)}hr</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
              className="p-1 hover:bg-gray-100 rounded-lg transition"
              disabled={item.quantity <= 1}
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="w-8 text-center">{item.quantity}</span>
            <button
              onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
              className="p-1 hover:bg-gray-100 rounded-lg transition"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}