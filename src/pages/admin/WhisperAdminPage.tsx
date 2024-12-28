import React, { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import KnowledgeBase from '../../components/admin/KnowledgeBase';
import ResourceManager from '../../components/admin/ResourceManager';
import TrainingSection from '../../components/admin/TrainingSection';
import ChatLogs from '../../components/admin/ChatLogs';
import WhisperSettings from '../../components/admin/WhisperSettings';

export default function WhisperAdminPage() {
  const { logout } = useAuth();
  const [activeTab, setActiveTab] = useState<'knowledge' | 'resources' | 'training' | 'logs' | 'settings'>('knowledge');

  return (
    <div className="py-24">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Whisper Admin Panel</h1>
          <button
            onClick={logout}
            className="px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition"
          >
            Logout
          </button>
        </div>

        <div className="mb-8">
          <nav className="flex gap-4">
            {[
              { id: 'knowledge', label: 'Knowledge Base' },
              { id: 'resources', label: 'Resources' },
              { id: 'training', label: 'Training' },
              { id: 'logs', label: 'Live Chats' },
              { id: 'settings', label: 'Settings' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`px-4 py-2 rounded-lg transition ${
                  activeTab === tab.id
                    ? 'bg-black text-white'
                    : 'hover:bg-gray-100'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        {activeTab === 'knowledge' && <KnowledgeBase />}
        {activeTab === 'resources' && <ResourceManager />}
        {activeTab === 'training' && <TrainingSection />}
        {activeTab === 'logs' && <ChatLogs />}
        {activeTab === 'settings' && <WhisperSettings />}
      </div>
    </div>
  );
}