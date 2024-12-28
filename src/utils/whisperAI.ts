import { getAllEntries } from './knowledgeStore';
import { KnowledgeEntry } from '../types/knowledge';
import { tokenize, similarity, extractKeyPhrases } from './nlp';
import { templates, formatResponse } from './responseTemplates';
import { contextManager } from './contextManager';

// Calculate relevance score with NLP
const calculateRelevance = (entry: KnowledgeEntry, query: string): number => {
  const queryTokens = tokenize(query);
  const contentTokens = tokenize(entry.content);
  const queryPhrases = extractKeyPhrases(query);
  const contentPhrases = extractKeyPhrases(entry.content);
  
  let score = 0;

  // Token matching with improved weights
  queryTokens.forEach(queryToken => {
    contentTokens.forEach(contentToken => {
      const sim = similarity(queryToken, contentToken);
      if (sim > 0.8) score += sim * 3;  // Increased weight for token matches
    });
  });

  // Phrase matching with higher weight
  queryPhrases.forEach(queryPhrase => {
    contentPhrases.forEach(contentPhrase => {
      if (contentPhrase.includes(queryPhrase)) {
        score += 8;  // Increased weight for phrase matches
      }
    });
  });

  // Title matching bonus
  const titleTokens = tokenize(entry.title);
  queryTokens.forEach(queryToken => {
    titleTokens.forEach(titleToken => {
      const sim = similarity(queryToken, titleToken);
      if (sim > 0.8) score += sim * 5;  // High weight for title matches
    });
  });

  // Tag matching bonus
  entry.tags.forEach(tag => {
    const tagTokens = tokenize(tag);
    queryTokens.forEach(queryToken => {
      tagTokens.forEach(tagToken => {
        const sim = similarity(queryToken, tagToken);
        if (sim > 0.8) score += sim * 4;  // Good weight for tag matches
      });
    });
  });

  // Context bonus
  const context = contextManager.getContext();
  if (context && context.relevantTopics.includes(entry.category)) {
    score += 3;
  }

  return score;
};

// Find relevant entries with improved matching
const findRelevantEntries = (query: string): KnowledgeEntry[] => {
  const entries = getAllEntries();
  const scoredEntries = entries.map(entry => ({
    entry,
    score: calculateRelevance(entry, query)
  }));

  return scoredEntries
    .filter(item => item.score > 8)  // Increased threshold for better accuracy
    .sort((a, b) => b.score - a.score)
    .map(item => item.entry);
};

// Generate response with improved template handling
const generateResponse = (query: string): string => {
  const relevantEntries = findRelevantEntries(query);
  
  if (relevantEntries.length === 0) {
    return "I apologize, but I don't have enough information to answer that question accurately. Could you please rephrase or ask something more specific about our intercom system?";
  }

  const primaryEntry = relevantEntries[0];
  const secondaryEntry = relevantEntries[1];

  // Find matching template
  const matchingTemplate = templates.find(t => t.pattern.test(query));
  
  let response;
  if (matchingTemplate) {
    response = formatResponse(
      matchingTemplate.response,
      primaryEntry.content,
      secondaryEntry?.content
    );
  } else {
    response = primaryEntry.content;
    if (secondaryEntry) {
      response += " Additionally, " + secondaryEntry.content;
    }
  }

  // Update context
  contextManager.updateContext(
    query,
    response,
    relevantEntries.map(e => e.category)
  );

  return response;
};

export const getWhisperResponse = async (message: string): Promise<string> => {
  await new Promise(resolve => setTimeout(resolve, Math.random() * 500 + 500));
  return generateResponse(message);
};