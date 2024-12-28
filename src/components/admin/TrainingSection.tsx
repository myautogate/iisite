import React, { useState } from 'react';
import { Bot, Send } from 'lucide-react';
import ChatMessage from '../chat/ChatMessage';
import ChatInput from '../chat/ChatInput';

export default function TrainingSection() {
  const [conversation, setConversation] = useState<Array<{ type: 'user' | 'bot'; content: string }>>([]);
  const [expectedResponse, setExpectedResponse] = useState('');

  const handleUserMessage = (message: string) => {
    setConversation(prev => [...prev, { type: 'user', content: message }]);
  };

  const handleExpectedResponse = () => {
    if (expectedResponse.trim()) {
      setConversation(prev => [...prev, { type: 'bot', content: expectedResponse }]);
      setExpectedResponse('');
    }
  };

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-xl font-semibold mb-4">Conversation Preview</h3>
        <div className="h-[400px] overflow-y-auto space-y-4 mb-4">
          {conversation.map((message, index) => (
            <ChatMessage key={index} message={message} />
          ))}
        </div>
        <ChatInput onSend={handleUserMessage} />
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-xl font-semibold mb-4">Expected Response</h3>
        <div className="space-y-4">
          <textarea
            value={expectedResponse}
            onChange={(e) => setExpectedResponse(e.target.value)}
            placeholder="Enter the expected response from Whisper..."
            className="w-full h-[400px] px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent resize-none"
          />
          <button
            onClick={handleExpectedResponse}
            disabled={!expectedResponse.trim()}
            className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Bot className="w-4 h-4" />
            Add Bot Response
          </button>
        </div>
      </div>
    </div>
  );
}