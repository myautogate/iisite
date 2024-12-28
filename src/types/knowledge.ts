export interface KnowledgeEntry {
  id: string;
  category: string;
  title: string;
  content: string;
  tags: string[];
  lastUpdated: string;
}

export interface KnowledgeCategory {
  id: string;
  name: string;
  description: string;
}

export const defaultCategories: KnowledgeCategory[] = [
  {
    id: 'installation',
    name: 'Installation',
    description: 'Installation processes, times, and requirements'
  },
  {
    id: 'features',
    name: 'Features',
    description: 'Product features and capabilities'
  },
  {
    id: 'pricing',
    name: 'Pricing',
    description: 'Pricing information and plans'
  },
  {
    id: 'technical',
    name: 'Technical',
    description: 'Technical specifications and requirements'
  }
];