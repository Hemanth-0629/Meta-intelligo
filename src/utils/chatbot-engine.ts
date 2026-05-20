import Fuse from "fuse.js";
import {
  knowledgeBase,
  fallbackResponse,
  quickSuggestions,
} from "@/data/knowledge-base";
import type { KnowledgeEntry, SearchResult, ChatMessage, ChatCTA } from "@/types/chatbot";

// ─── Stopwords ───────────────────────────────────────────────────────────────
const STOPWORDS = new Set([
  "a", "an", "the", "is", "are", "was", "were", "be", "been", "being",
  "have", "has", "had", "do", "does", "did", "will", "would", "could",
  "should", "may", "might", "shall", "can", "need", "dare", "ought",
  "used", "to", "for", "of", "in", "on", "at", "by", "from", "with",
  "about", "into", "through", "during", "before", "after", "above",
  "below", "between", "each", "few", "more", "most", "other", "some",
  "such", "no", "nor", "not", "only", "own", "same", "so", "than",
  "too", "very", "s", "t", "just", "don", "i", "me", "my", "myself",
  "we", "our", "you", "your", "he", "she", "they", "it", "its", "this",
  "that", "these", "those", "what", "which", "who", "how", "when", "where",
  "why", "and", "but", "or", "if", "then", "else", "any",
]);

// ─── Text Normalisation ───────────────────────────────────────────────────────
export function normalizeText(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function removeStopwords(text: string): string {
  return text
    .split(" ")
    .filter((w) => w.length > 1 && !STOPWORDS.has(w))
    .join(" ");
}

export function processQuery(raw: string): string {
  return removeStopwords(normalizeText(raw));
}

// ─── Fuse.js Search Index ────────────────────────────────────────────────────
// Flatten each entry into searchable docs
interface SearchDoc {
  id: string;
  combined: string;    // questions + keywords merged
  entry: KnowledgeEntry;
}

const searchDocs: SearchDoc[] = knowledgeBase.map((entry) => ({
  id: entry.id,
  combined: [
    ...entry.questions,
    ...entry.keywords,
    entry.category,
  ].join(" ").toLowerCase(),
  entry,
}));

const fuse = new Fuse(searchDocs, {
  keys: ["combined"],
  threshold: 0.42,           // 0 = exact, 1 = anything — tuned for typo tolerance
  distance: 200,
  minMatchCharLength: 2,
  includeScore: true,
  ignoreLocation: true,
  useExtendedSearch: false,
  findAllMatches: false,
});

// ─── Category Shortcuts ───────────────────────────────────────────────────────
// Map quick chip labels → search queries for instant resolution
const CHIP_MAP: Record<string, string> = {
  "Explore Services":    "services overview what do you offer",
  "Our Products":        "products overview HRM LMS CRM AMS",
  "Courses & Training":  "courses training programs",
  "Careers & Jobs":      "careers jobs openings",
  "Contact Support":     "contact details phone email",
  "AI & ML":             "ai machine learning services",
  "Cloud Services":      "cloud computing aws azure",
  "DevOps":              "devops cicd pipeline",
  "Staffing":            "staffing recruitment hire",
  "WhatsApp Us":         "whatsapp contact",
  "Call Us":             "phone contact number",
  "Send Email":          "email contact",
  "Our Services":        "services overview",
  "HRM System":          "hrm human resource management product",
  "LMS Platform":        "lms learning management system",
  "CRM Solution":        "crm customer relationship management",
  "Asset Management":    "ams asset management system",
  "AI & ML Course":      "ai machine learning course training",
  "DevOps Course":       "devops cloud training course",
  "Full Stack Course":   "full stack web development course",
  "QA Automation Course":"qa automation testing course",
  "Placement Program":   "placement assistance job after course",
  "Internship Program":  "internship program student",
  "Get a Quote":         "pricing quote cost estimate",
  "View Full Portfolio":  "portfolio case studies projects",
  "Apply Now":           "careers jobs apply",
  "Request a Demo":      "product demo request",
  "Enroll Now":          "course enrollment apply",
  "About Us":            "about meta intelligo company",
  "Life at Meta Intelligo":"careers culture benefits",
  "Our Portfolio":       "portfolio projects case studies",
  "Contact Us":          "contact details phone email",
  "Start AI Project":    "ai services contact",
  "Cloud Consultation":  "cloud services contact",
  "Find Talent":         "staffing recruitment contact",
};

// ─── Core Search ──────────────────────────────────────────────────────────────
export function searchKnowledge(rawQuery: string): SearchResult | null {
  // 1. Check chip map first (exact match for suggestion chips / CTAs)
  const chipKey = rawQuery.trim();
  const mappedQuery = CHIP_MAP[chipKey] ?? rawQuery;

  const processed = processQuery(mappedQuery);
  if (!processed) return null;

  // 2. Run Fuse search
  const results = fuse.search(processed);
  if (!results.length) return null;

  const best = results[0];
  const fuseScore = best.score ?? 1;    // lower = better in Fuse

  // 3. Boost by entry priority
  const priorityBonus = (best.item.entry.priority ?? 5) * 0.01;
  const finalScore = 1 - fuseScore + priorityBonus;

  // 4. Accept if Fuse confidence is good enough
  if (fuseScore > 0.55) return null;    // too fuzzy = fallback

  return { entry: best.item.entry, score: finalScore };
}

// ─── Suggestion Resolution ────────────────────────────────────────────────────
// Convert suggestion chip labels into query strings for search
export function resolveSuggestion(label: string): string {
  return CHIP_MAP[label] ?? label;
}

// ─── Response Builder ─────────────────────────────────────────────────────────
export interface BotResponse {
  text: string;
  suggestions: string[];
  cta?: ChatCTA;
}

export function buildResponse(rawQuery: string): BotResponse {
  const result = searchKnowledge(rawQuery);

  if (result) {
    return {
      text: result.entry.answer,
      suggestions: result.entry.suggestions ?? quickSuggestions.slice(0, 4),
      cta: result.entry.cta,
    };
  }

  // Fallback
  return {
    text: fallbackResponse.answer,
    suggestions: fallbackResponse.suggestions,
    cta: fallbackResponse.cta,
  };
}

// ─── UID Generator ────────────────────────────────────────────────────────────
export function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
}

// ─── Markdown-lite renderer ───────────────────────────────────────────────────
// Converts **bold**, bullet lists, and line breaks into JSX-safe HTML string
export function renderMarkdown(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")        // bold
    .replace(/^• (.+)$/gm, '<span class="flex gap-1.5"><span class="mt-1 shrink-0">•</span><span>$1</span></span>') // bullets
    .replace(/\n/g, "<br />");                               // newlines
}
