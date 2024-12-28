import { KnowledgeEntry } from '../types/knowledge';

const STORAGE_KEY = 'whisper-knowledge-base';

export const saveKnowledgeEntry = (entry: KnowledgeEntry): void => {
  const entries = getAllEntries();
  const existingIndex = entries.findIndex(e => e.id === entry.id);
  
  if (existingIndex >= 0) {
    entries[existingIndex] = entry;
  } else {
    entries.push(entry);
  }
  
  localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
};

export const getAllEntries = (): KnowledgeEntry[] => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

export const getEntriesByCategory = (category: string): KnowledgeEntry[] => {
  return getAllEntries().filter(entry => entry.category === category);
};

export const searchEntries = (query: string): KnowledgeEntry[] => {
  const searchTerm = query.toLowerCase();
  return getAllEntries().filter(entry => 
    entry.title.toLowerCase().includes(searchTerm) ||
    entry.content.toLowerCase().includes(searchTerm) ||
    entry.tags.some(tag => tag.toLowerCase().includes(searchTerm))
  );
};