import React, { useState, useRef, useEffect } from 'react';
import { X, ThumbsUp, ThumbsDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import WhisperCharacter from './WhisperCharacter';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';
import { getWhisperResponse } from '../../utils/whisperAI';
import { logChatInteraction, addFeedback } from '../../utils/chatLogger';
import { getSettings } from '../../utils/settingsStore';

// ... existing interfaces ...

export default function WhisperChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [lastInteractionId, setLastInteractionId] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Check visibility setting
  useEffect(() => {
    const checkVisibility = () => {
      const settings = getSettings();
      setIsVisible(settings.isVisible);
    };

    // Check initially
    checkVisibility();

    // Set up storage event listener
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'whisper-settings') {
        checkVisibility();
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  // ... rest of the existing component code ...

  if (!isVisible) return null;

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 bg-black text-white p-4 rounded-full shadow-lg hover:bg-gray-800 transition"
        aria-label="Open chat"
      >
        <WhisperCharacter size={44} isActive={!isOpen} />
      </button>

      {/* ... rest of the existing JSX ... */}
    </>
  );
}