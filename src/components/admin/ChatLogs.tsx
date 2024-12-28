import React, { useState, useEffect } from 'react';
import { MessageSquare, ThumbsUp, ThumbsDown } from 'lucide-react';
import { getChatInteractions, ChatInteraction } from '../../utils/chatLogger';

export default function ChatLogs() {
  const [interactions, setInteractions] = useState<ChatInteraction[]>([]);
  const [filter, setFilter] = useState<'all' | 'positive' | 'negative'>('all');

  useEffect(() => {
    const logs = getChatInteractions();
    setInteractions(logs.sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime()));
  }, []);

  const filteredInteractions = interactions.filter(interaction => {
    if (filter === 'positive') return interaction.feedback?.helpful;
    if (filter === 'negative') return interaction.feedback?.helpful === false;
    return true;
  });

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold">Live Chat Interactions</h3>
        <div className="flex gap-2">
          {[
            { id: 'all', label: 'All' },
            { id: 'positive', label: 'Positive Feedback' },
            { id: 'negative', label: 'Negative Feedback' }
          ].map((option) => (
            <button
              key={option.id}
              onClick={() => setFilter(option.id as typeof filter)}
              className={`px-3 py-1 rounded-lg transition ${
                filter === option.id
                  ? 'bg-black text-white'
                  : 'hover:bg-gray-100'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        {filteredInteractions.map((interaction) => (
          <div key={interaction.id} className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex justify-between items-start mb-2">
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-500">
                  {interaction.timestamp.toLocaleString()}
                </span>
              </div>
              {interaction.feedback && (
                <div className="flex items-center gap-1">
                  {interaction.feedback.helpful ? (
                    <ThumbsUp className="w-4 h-4 text-green-500" />
                  ) : (
                    <ThumbsDown className="w-4 h-4 text-red-500" />
                  )}
                </div>
              )}
            </div>
            <div className="space-y-2">
              <div className="bg-gray-50 p-3 rounded">
                <p className="font-medium mb-1">User</p>
                <p className="text-gray-600">{interaction.userMessage}</p>
              </div>
              <div className="bg-gray-50 p-3 rounded">
                <p className="font-medium mb-1">Whisper</p>
                <p className="text-gray-600">{interaction.botResponse}</p>
              </div>
              {interaction.feedback?.comment && (
                <div className="bg-gray-50 p-3 rounded">
                  <p className="font-medium mb-1">Feedback</p>
                  <p className="text-gray-600">{interaction.feedback.comment}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}