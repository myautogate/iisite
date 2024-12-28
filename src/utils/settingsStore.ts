interface WhisperSettings {
  isVisible: boolean;
}

const SETTINGS_KEY = 'whisper-settings';

const defaultSettings: WhisperSettings = {
  isVisible: true
};

export const getSettings = (): WhisperSettings => {
  const stored = localStorage.getItem(SETTINGS_KEY);
  return stored ? JSON.parse(stored) : defaultSettings;
};

export const updateSettings = (settings: Partial<WhisperSettings>): WhisperSettings => {
  const current = getSettings();
  const updated = { ...current, ...settings };
  localStorage.setItem(SETTINGS_KEY, JSON.stringify(updated));
  return updated;
};