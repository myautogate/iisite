import React, { useState, useMemo } from 'react';
import { Calculator, FileDown } from 'lucide-react';
import { PricingItem, CalculatorItem, pricingData } from '../../../types/pricing';
import { generatePDF } from '../../../utils/pdfGenerator';
import CategorySelector from './CategorySelector';
import ItemList from './ItemList';
import SelectedItems from './SelectedItems';

export default function PricingCalculator() {
  const [selectedCategory, setSelectedCategory] = useState<string>('controller');
  const [selectedItems, setSelectedItems] = useState<CalculatorItem[]>([]);

  const filteredItems = useMemo(() => {
    return pricingData.filter(item => item.category === selectedCategory);
  }, [selectedCategory]);

  const totals = useMemo(() => {
    return selectedItems.reduce(
      (acc, item) => ({
        cost: acc.cost + item.cost * item.quantity,
        msrp: acc.msrp + item.msrp * item.quantity,
        installationTime: acc.installationTime + item.installationTime * item.quantity
      }),
      { cost: 0, msrp: 0, installationTime: 0 }
    );
  }, [selectedItems]);

  const handleAddItem = (item: PricingItem) => {
    setSelectedItems(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i =>
          i.id === item.id
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (id: string, quantity: number) => {
    setSelectedItems(prev =>
      quantity === 0
        ? prev.filter(item => item.id !== id)
        : prev.map(item =>
            item.id === id
              ? { ...item, quantity }
              : item
          )
    );
  };

  const handleExportPDF = (type: 'dealer' | 'customer') => {
    generatePDF(selectedItems, totals, type);
  };

  return (
    <div className="space-y-8">
      <CategorySelector
        selectedCategory={selectedCategory}
        onSelect={setSelectedCategory}
      />

      <ItemList
        items={filteredItems}
        onSelect={handleAddItem}
      />

      <div className="border-t pt-8">
        <h3 className="text-xl font-semibold mb-4">Selected Items</h3>
        <SelectedItems
          items={selectedItems}
          onUpdateQuantity={handleUpdateQuantity}
        />
      </div>

      <div className="bg-black text-white p-6 rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold">Totals</h3>
          <div className="flex gap-4">
            <button
              onClick={() => handleExportPDF('dealer')}
              className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-100 transition"
            >
              <FileDown className="w-4 h-4" />
              Dealer PDF
            </button>
            <button
              onClick={() => handleExportPDF('customer')}
              className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-100 transition"
            >
              <FileDown className="w-4 h-4" />
              Customer PDF
            </button>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <p className="text-gray-400">Total Cost</p>
            <p className="text-2xl font-bold">${totals.cost.toFixed(2)}</p>
          </div>
          <div>
            <p className="text-gray-400">Total MSRP</p>
            <p className="text-2xl font-bold">${totals.msrp.toFixed(2)}</p>
          </div>
          <div>
            <p className="text-gray-400">Installation Time</p>
            <p className="text-2xl font-bold">{totals.installationTime.toFixed(1)} hours</p>
          </div>
        </div>
      </div>
    </div>
  );
}