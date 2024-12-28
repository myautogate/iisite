import { KnowledgeEntry } from '../types/knowledge';

// Tokenize and clean text
export const tokenize = (text: string): string[] => {
  return text.toLowerCase()
    .replace(/[^\w\s]/g, '')
    .split(/\s+/)
    .filter(Boolean);
};

// Calculate word similarity using Levenshtein distance
export const similarity = (word1: string, word2: string): number => {
  if (word1 === word2) return 1;
  if (word1.length < 2 || word2.length < 2) return 0;

  const matrix: number[][] = [];
  for (let i = 0; i <= word1.length; i++) {
    matrix[i] = [i];
  }
  for (let j = 0; j <= word2.length; j++) {
    matrix[0][j] = j;
  }

  for (let i = 1; i <= word1.length; i++) {
    for (let j = 1; j <= word2.length; j++) {
      const cost = word1[i - 1] === word2[j - 1] ? 0 : 1;
      matrix[i][j] = Math.min(
        matrix[i - 1][j] + 1,
        matrix[i][j - 1] + 1,
        matrix[i - 1][j - 1] + cost
      );
    }
  }

  const maxLength = Math.max(word1.length, word2.length);
  return 1 - matrix[word1.length][word2.length] / maxLength;
};

// Extract key phrases from text
export const extractKeyPhrases = (text: string): string[] => {
  const tokens = tokenize(text);
  const phrases: string[] = [];
  
  // Extract 2-3 word phrases
  for (let i = 0; i < tokens.length - 1; i++) {
    phrases.push(tokens[i] + ' ' + tokens[i + 1]);
    if (i < tokens.length - 2) {
      phrases.push(tokens[i] + ' ' + tokens[i + 1] + ' ' + tokens[i + 2]);
    }
  }

  return [...new Set(phrases)];
};