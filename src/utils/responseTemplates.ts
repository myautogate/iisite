interface Template {
  pattern: RegExp;
  response: string;
}

export const templates: Template[] = [
  {
    pattern: /how (much|long|many|often)/i,
    response: "Based on {{content}}, {{additional}}"
  },
  {
    pattern: /what (is|are|does)/i,
    response: "{{content}} Additionally, {{additional}}"
  },
  {
    pattern: /can (you|it|i)/i,
    response: "Yes! {{content}}"
  },
  {
    pattern: /(explain|tell me about)/i,
    response: "Let me explain: {{content}}"
  }
];

export const formatResponse = (template: string, content: string, additional?: string): string => {
  return template
    .replace('{{content}}', content)
    .replace('{{additional}}', additional || '')
    .trim()
    .replace(/\s+/g, ' ');
};