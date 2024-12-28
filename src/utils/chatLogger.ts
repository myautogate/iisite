import { z } from 'zod';

export interface ChatInteraction {
  id: string;
  timestamp: Date;
  userMessage: string;
  botResponse: string;
  feedback?: {
    helpful: boolean;
    comment?: string;
  };
}

const chatInteractionSchema = z.object({
  id: z.string(),
  timestamp: z.string().transform(str => new Date(str)),
  userMessage: z.string(),
  botResponse: z.string(),
  feedback: z.object({
    helpful: z.boolean(),
    comment: z.string().optional()
  }).optional()
});

export const chatInteractionsSchema = z.array(chatInteractionSchema);

// Store chat interactions in localStorage
export const logChatInteraction = (interaction: Omit<ChatInteraction, 'id' | 'timestamp'>) => {
  const existingData = localStorage.getItem('whisper-chat-logs');
  const interactions: ChatInteraction[] = existingData 
    ? JSON.parse(existingData)
    : [];

  const newInteraction: ChatInteraction = {
    id: Math.random().toString(36).substring(2),
    timestamp: new Date(),
    ...interaction
  };

  interactions.push(newInteraction);
  localStorage.setItem('whisper-chat-logs', JSON.stringify(interactions));

  return newInteraction;
};

// Retrieve chat interactions
export const getChatInteractions = (): ChatInteraction[] => {
  const data = localStorage.getItem('whisper-chat-logs');
  if (!data) return [];

  try {
    const parsed = JSON.parse(data);
    const result = chatInteractionsSchema.safeParse(parsed);
    return result.success ? result.data : [];
  } catch {
    return [];
  }
};

// Add feedback to a chat interaction
export const addFeedback = (id: string, feedback: ChatInteraction['feedback']) => {
  const interactions = getChatInteractions();
  const updated = interactions.map(interaction => 
    interaction.id === id 
      ? { ...interaction, feedback }
      : interaction
  );
  localStorage.setItem('whisper-chat-logs', JSON.stringify(updated));
};