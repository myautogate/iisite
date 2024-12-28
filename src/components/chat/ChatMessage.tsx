import React from 'react';
import WhisperCharacter from './WhisperCharacter';

interface ChatMessageProps {
  message: {
    type: 'user' | 'bot';
    content: string;
  };
}

export default function ChatMessage({ message }: ChatMessageProps) {
  const isBot = message.type === 'bot';
  
  return (
    <div className={`flex gap-3 ${isBot ? 'flex-row' : 'flex-row-reverse'}`}>
      {isBot ? (
        <div className="flex-shrink-0">
          <WhisperCharacter size={32} />
        </div>
      ) : (
        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
          <span className="text-sm">You</span>
        </div>
      )}
      <div
        className={`rounded-lg px-4 py-2 max-w-[80%] ${
          isBot
            ? 'bg-black text-white'
            : 'bg-gray-100 text-gray-900'
        }`}
      >
        {message.content}
      </div>
    </div>
  );
}