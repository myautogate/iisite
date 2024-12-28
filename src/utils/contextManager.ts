interface Context {
  lastQuery: string;
  lastResponse: string;
  relevantTopics: string[];
  timestamp: number;
}

const MAX_CONTEXT_AGE = 5 * 60 * 1000; // 5 minutes

class ContextManager {
  private context: Context | null = null;

  updateContext(query: string, response: string, topics: string[]) {
    this.context = {
      lastQuery: query,
      lastResponse: response,
      relevantTopics: topics,
      timestamp: Date.now()
    };
  }

  getContext(): Context | null {
    if (!this.context) return null;
    
    // Clear context if too old
    if (Date.now() - this.context.timestamp > MAX_CONTEXT_AGE) {
      this.context = null;
      return null;
    }

    return this.context;
  }

  clear() {
    this.context = null;
  }
}

export const contextManager = new ContextManager();