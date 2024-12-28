import React, { useState } from 'react';
import { Save, Plus } from 'lucide-react';
import { KnowledgeEntry } from '../../../types/knowledge';
import { saveKnowledgeEntry } from '../../../utils/knowledgeStore';

interface KnowledgeEditorProps {
  entry?: KnowledgeEntry;
  category: string;
  onSave: () => void;
}

export default function KnowledgeEditor({ entry, category, onSave }: KnowledgeEditorProps) {
  const [formData, setFormData] = useState<Partial<KnowledgeEntry>>(
    entry || {
      category,
      title: '',
      content: '',
      tags: []
    }
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newEntry: KnowledgeEntry = {
      id: entry?.id || Math.random().toString(36).substring(2),
      category,
      title: formData.title || '',
      content: formData.content || '',
      tags: formData.tags || [],
      lastUpdated: new Date().toISOString()
    };
    
    saveKnowledgeEntry(newEntry);
    onSave();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Title
        </label>
        <input
          type="text"
          value={formData.title}
          onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
          placeholder="E.g., Average Installation Time"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Content
        </label>
        <textarea
          value={formData.content}
          onChange={(e) => setFormData(prev => ({ ...prev, content: e.target.value }))}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent h-32"
          placeholder="Enter detailed information..."
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Tags (comma-separated)
        </label>
        <input
          type="text"
          value={formData.tags?.join(', ')}
          onChange={(e) => setFormData(prev => ({ 
            ...prev, 
            tags: e.target.value.split(',').map(tag => tag.trim()).filter(Boolean)
          }))}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
          placeholder="installation, time, residential"
        />
      </div>

      <button
        type="submit"
        className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
      >
        <Save className="w-4 h-4" />
        Save Entry
      </button>
    </form>
  );
}