import React, { useState, useEffect } from 'react';
import { Plus, Search } from 'lucide-react';
import { KnowledgeEntry } from '../../types/knowledge';
import { defaultCategories } from '../../types/knowledge';
import { getAllEntries, getEntriesByCategory, searchEntries } from '../../utils/knowledgeStore';
import KnowledgeEditor from './knowledge/KnowledgeEditor';
import KnowledgeList from './knowledge/KnowledgeList';

export default function KnowledgeBase() {
  const [entries, setEntries] = useState<KnowledgeEntry[]>([]);
  const [selectedCategory, setSelectedCategory] = useState(defaultCategories[0].id);
  const [searchQuery, setSearchQuery] = useState('');
  const [showEditor, setShowEditor] = useState(false);
  const [editingEntry, setEditingEntry] = useState<KnowledgeEntry | undefined>();

  useEffect(() => {
    if (searchQuery) {
      setEntries(searchEntries(searchQuery));
    } else {
      setEntries(getEntriesByCategory(selectedCategory));
    }
  }, [selectedCategory, searchQuery]);

  const handleSave = () => {
    setShowEditor(false);
    setEditingEntry(undefined);
    setEntries(getEntriesByCategory(selectedCategory));
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this entry?')) {
      const newEntries = entries.filter(entry => entry.id !== id);
      localStorage.setItem('whisper-knowledge-base', JSON.stringify(newEntries));
      setEntries(newEntries);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="flex gap-4">
          {defaultCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-lg transition ${
                selectedCategory === category.id
                  ? 'bg-black text-white'
                  : 'hover:bg-gray-100'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        <button
          onClick={() => {
            setEditingEntry(undefined);
            setShowEditor(true);
          }}
          className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
        >
          <Plus className="w-4 h-4" />
          Add Entry
        </button>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Search knowledge base..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
        />
      </div>

      {showEditor ? (
        <KnowledgeEditor
          entry={editingEntry}
          category={selectedCategory}
          onSave={handleSave}
        />
      ) : (
        <KnowledgeList
          entries={entries}
          onEdit={(entry) => {
            setEditingEntry(entry);
            setShowEditor(true);
          }}
          onDelete={handleDelete}
        />
      )}
    </div>
  );
}