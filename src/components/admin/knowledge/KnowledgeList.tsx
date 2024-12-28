import React from 'react';
import { Edit, Trash2 } from 'lucide-react';
import { KnowledgeEntry } from '../../../types/knowledge';

interface KnowledgeListProps {
  entries: KnowledgeEntry[];
  onEdit: (entry: KnowledgeEntry) => void;
  onDelete: (id: string) => void;
}

export default function KnowledgeList({ entries, onEdit, onDelete }: KnowledgeListProps) {
  return (
    <div className="space-y-4">
      {entries.map((entry) => (
        <div key={entry.id} className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-semibold">{entry.title}</h3>
            <div className="flex gap-2">
              <button
                onClick={() => onEdit(entry)}
                className="p-1 hover:bg-gray-100 rounded-lg transition"
              >
                <Edit className="w-4 h-4" />
              </button>
              <button
                onClick={() => onDelete(entry.id)}
                className="p-1 hover:bg-gray-100 rounded-lg transition text-red-500"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
          <p className="text-gray-600 text-sm mb-2">{entry.content}</p>
          <div className="flex gap-2">
            {entry.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs bg-gray-100 px-2 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}