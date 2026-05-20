export type MessageRole = "user" | "bot";

export interface ChatMessage {
  id: string;
  role: MessageRole;
  text: string;
  timestamp: Date;
  suggestions?: string[];
  cta?: ChatCTA;
}

export interface ChatCTA {
  label: string;
  href: string;
  external?: boolean;
  variant?: "primary" | "secondary" | "whatsapp";
}

export interface KnowledgeEntry {
  id: string;
  category: KnowledgeCategory;
  questions: string[];   // natural language variants
  keywords: string[];    // search index terms
  answer: string;
  suggestions?: string[];
  cta?: ChatCTA;
  priority?: number;     // higher = rank first when scores tie
}

export type KnowledgeCategory =
  | "company"
  | "services"
  | "products"
  | "courses"
  | "careers"
  | "contact"
  | "pricing"
  | "internship"
  | "staffing"
  | "faq";

export interface SearchResult {
  entry: KnowledgeEntry;
  score: number;
}

export interface ChatSession {
  messages: ChatMessage[];
  context: string[];   // last 3 topic categories for context awareness
}
