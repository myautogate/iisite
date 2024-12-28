import React, { useState, useEffect } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { getSettings, updateSettings } from '../../utils/settingsStore';

export default function WhisperSettings() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const settings = getSettings();
    setIsVisible(settings.isVisible);
  }, []);

  const toggleVisibility = () => {
    const updated = updateSettings({ isVisible: !isVisible });
    setIsVisible(updated.isVisible);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-xl font-semibold mb-6">Whisper Settings</h3>
      
      <div className="flex items-center justify-between">
        <div>
          <p className="font-medium">Whisper Visibility</p>
          <p className="text-sm text-gray-600">
            Toggle whether Whisper is visible on the main site
          </p>
        </div>
        <button
          onClick={toggleVisibility}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition ${
            isVisible 
              ? 'bg-black text-white hover:bg-gray-800'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          {isVisible ? (
            <>
              <Eye className="w-4 h-4" />
              Visible
            </>
          ) : (
            <>
              <EyeOff className="w-4 h-4" />
              Hidden
            </>
          )}
        </button>
      </div>
    </div>
  );
}