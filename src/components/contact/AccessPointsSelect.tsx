import React from 'react';

const accessPointsOptions = [
  { value: '1', label: '1' },
  { value: '2-5', label: '2-5' },
  { value: '6-10', label: '6-10' },
  { value: '11+', label: '11+' }
];

interface AccessPointsSelectProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function AccessPointsSelect({ value, onChange }: AccessPointsSelectProps) {
  return (
    <div>
      <label htmlFor="accessPoints" className="block text-sm font-medium text-gray-700 mb-1">
        Number of Access Points
      </label>
      <select
        id="accessPoints"
        name="accessPoints"
        required
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
        value={value}
        onChange={onChange}
      >
        <option value="">Select number of access points</option>
        {accessPointsOptions.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}