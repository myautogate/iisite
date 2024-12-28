import React from 'react';

const propertyTypes = [
  'Single Family Home',
  'Apartment Building',
  'Home Owners Association',
  'Office Building',
  'Parking Lot/Parking Garage'
];

interface PropertyTypeSelectProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function PropertyTypeSelect({ value, onChange }: PropertyTypeSelectProps) {
  return (
    <div>
      <label htmlFor="propertyType" className="block text-sm font-medium text-gray-700 mb-1">
        Property Type
      </label>
      <select
        id="propertyType"
        name="propertyType"
        required
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
        value={value}
        onChange={onChange}
      >
        <option value="">Select property type</option>
        {propertyTypes.map(type => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
    </div>
  );
}