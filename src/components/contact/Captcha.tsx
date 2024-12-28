import React from 'react';
import { RefreshCw } from 'lucide-react';

export default function Captcha() {
  const [captchaText, setCaptchaText] = React.useState('');
  const [userInput, setUserInput] = React.useState('');

  const generateCaptcha = () => {
    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let captcha = '';
    for (let i = 0; i < 6; i++) {
      captcha += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptchaText(captcha);
    setUserInput('');
  };

  React.useEffect(() => {
    generateCaptcha();
  }, []);

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">Verification</label>
      <div className="flex gap-4 items-center">
        <div className="bg-gray-100 px-4 py-2 rounded-lg font-mono text-lg tracking-wider">
          {captchaText}
        </div>
        <button
          type="button"
          onClick={generateCaptcha}
          className="p-2 hover:bg-gray-100 rounded-lg transition"
          aria-label="Refresh captcha"
        >
          <RefreshCw className="w-5 h-5" />
        </button>
      </div>
      <input
        type="text"
        required
        placeholder="Enter the code above"
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value.toUpperCase())}
      />
    </div>
  );
}