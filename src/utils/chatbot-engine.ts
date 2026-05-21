import Fuse from "fuse.js";
import {
  knowledgeBase,
  fallbackResponse,
  quickSuggestions,
} from "@/data/knowledge-base";
import type { KnowledgeEntry, ChatCTA } from "@/types/chatbot";

// ─── Stopwords ───────────────────────────────────────────────────────────────
const STOPWORDS = new Set([
  "a","an","the","is","are","was","were","be","been","being","have","has",
  "had","do","does","did","will","would","could","should","may","might",
  "shall","can","need","to","for","of","in","on","at","by","from","with",
  "about","into","through","during","before","after","above","below",
  "between","each","few","more","most","other","some","such","no","nor",
  "not","only","own","same","so","than","too","very","s","t","just","don",
  "i","me","my","we","our","you","your","he","she","they","it","its",
  "this","that","these","those","what","which","who","how","when","where",
  "why","and","but","or","if","then","else","any","tell","show","give",
  "know","want","need","like","use","get","make","let","see","look",
]);

// ─── Text helpers ─────────────────────────────────────────────────────────────
export function normalizeText(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function tokenize(text: string): string[] {
  return normalizeText(text)
    .split(" ")
    .filter((w) => w.length > 1 && !STOPWORDS.has(w));
}

// ─── Direct chip → entry ID map (bypasses Fuse entirely for chips) ─────────
const CHIP_TO_ID: Record<string, string> = {
  "Explore Services":     "services-overview",
  "Our Services":         "services-overview",
  "Services":             "services-overview",
  "Our Products":         "products-overview",
  "Products":             "products-overview",
  "HRM System":           "product-hrm",
  "LMS Platform":         "product-lms",
  "CRM Solution":         "product-crm",
  "Asset Management":     "product-ams",
  "Courses & Training":   "courses-overview",
  "Courses":              "courses-overview",
  "AI & ML Course":       "course-aiml",
  "DevOps Course":        "course-devops",
  "Full Stack Course":    "course-fullstack",
  "QA Automation Course": "course-qa",
  "Careers & Jobs":           "careers-overview",
  "Careers":                  "careers-overview",
  "Open Positions":           "careers-overview",
  "Apply Now":                "careers-overview",
  "Internship Program":       "internship",
  "Internship":               "internship",
  "Apply for Internships":    "internship",
  "Placement Program":    "placement-program",
  "Contact Support":      "contact-info",
  "Contact Us":           "contact-info",
  "WhatsApp Us":          "whatsapp-contact",
  "Call Us":              "contact-info",
  "Send Email":           "contact-info",
  "LinkedIn":             "linkedin-connect",
  "Get a Quote":          "get-quote",
  "Request a Demo":       "products-overview",
  "Enroll Now":           "courses-overview",
  "View Full Portfolio":  "faq-portfolio",
  "Our Portfolio":        "faq-portfolio",
  "About Us":             "company-overview",
  "Life at Meta Intelligo":"careers-overview",
  "AI & ML":              "service-ai-ml",
  "Cloud Services":       "service-cloud",
  "DevOps":               "service-devops",
  "Staffing":             "service-staffing",
  "Find Talent":          "service-staffing",
  "Start AI Project":     "service-ai-ml",
  "Cloud Consultation":   "service-cloud",
  "Discuss DevOps":       "service-devops",
  "Build With Us":        "service-custom-software",
  "Get Managed Services": "service-managed",
  "Build IoT Solution":   "service-iot",
  "Discuss BIM Project":  "service-bim",
  "Join Placement Program":"placement-program",
  "Apply for Internship": "internship",
  "Apply for AI Course":  "course-aiml",
  "Apply for DevOps Course":"course-devops",
  "Apply for Full Stack Course":"course-fullstack",
  "Apply for QA Course":  "course-qa",
  "Start Now":            "faq-how-start",
  "Explore Industries":   "faq-industries",
  "Get Directions":       "company-location",
  "Follow on LinkedIn":   "linkedin-connect",
  "Open WhatsApp":        "whatsapp-contact",
  "Get Free Quote":       "get-quote",
};

// ─── Keyword → entry ID shortcuts (hard category detection) ─────────────────
const KEYWORD_MAP: Array<{ terms: string[]; id: string }> = [
  { terms: ["hrm","human resource","hr software","payroll","attendance","leave","employee management"], id: "product-hrm" },
  { terms: ["lms","learning management","elearning","e-learning","online training","course platform","certification platform"], id: "product-lms" },
  { terms: ["crm","customer relationship","sales crm","lead management","sales pipeline"], id: "product-crm" },
  { terms: ["ams","asset management","asset tracking","equipment tracking","fixed asset"], id: "product-ams" },
  { terms: ["ai course","ml course","machine learning course","data science course","ai training","ml training","learn ai","learn ml"], id: "course-aiml" },
  { terms: ["devops course","cloud course","aws training","kubernetes course","docker course","ci cd course"], id: "course-devops" },
  { terms: ["full stack course","web development course","react course","node course","mern course"], id: "course-fullstack" },
  { terms: ["qa course","testing course","automation course","selenium course","playwright course"], id: "course-qa" },
  { terms: ["internship","intern","student program","trainee","fresher","graduate program","entry level","campus"], id: "internship" },
  { terms: ["placement","placed","job after course","job guarantee","placement record","placement assistance"], id: "placement-program" },
  { terms: ["staffing","staff augmentation","hire developers","hire engineers","dedicated team","it recruitment","tech talent"], id: "service-staffing" },
  { terms: ["iot","internet of things","smart devices","industrial iot","connected devices","edge computing"], id: "service-iot" },
  { terms: ["bim","building information","3d modeling","revit","construction technology","digital twin"], id: "service-bim" },
  { terms: ["managed services","24/7 support","it operations","infrastructure management","server management","uptime"], id: "service-managed" },
  { terms: ["digital transformation","legacy modernization","digitize","process automation","modernize"], id: "service-digital-transformation" },
  { terms: ["custom software","web app","software development","application development","full stack dev","mobile app"], id: "service-custom-software" },
  { terms: ["devops","cicd","ci/cd","pipeline","github actions","terraform","jenkins","gitops"], id: "service-devops" },
  { terms: ["cloud","aws","azure","gcp","google cloud","cloud migration","kubernetes","cloud native"], id: "service-cloud" },
  { terms: ["ai","artificial intelligence","machine learning","ml","nlp","chatbot development","predictive","deep learning"], id: "service-ai-ml" },
  { terms: ["whatsapp","wa.me","chat instantly","message us"], id: "whatsapp-contact" },
  { terms: ["linkedin","follow us","social media"], id: "linkedin-connect" },
  { terms: ["quote","pricing","cost","how much","price","rate","budget","proposal"], id: "get-quote" },
  { terms: ["career","job","hiring","vacancy","open position","join team","employment","work at"], id: "careers-overview" },
  { terms: ["location","address","office","where","bengaluru","bangalore","marathahalli"], id: "company-location" },
  { terms: ["contact","phone number","email address","reach you","get in touch","support"], id: "contact-info" },
  { terms: ["portfolio","case study","previous work","project","what have you built","success story"], id: "faq-portfolio" },
  { terms: ["get started","how to start","begin","first step","onboarding","kickoff"], id: "faq-how-start" },
  { terms: ["industries","healthcare","banking","insurance","manufacturing","retail","logistics","government","ecommerce"], id: "faq-industries" },
  { terms: ["technology","tech stack","programming language","framework","tools used"], id: "faq-tech-stack" },
  { terms: ["remote","global","international","online work","offshore"], id: "faq-remote-work" },
  { terms: ["product","hrm","lms","crm","ams","software product","saas"], id: "products-overview" },
  { terms: ["courses","training","upskill","certification","bootcamp","program","learn","study"], id: "courses-overview" },
  { terms: ["service","capability","what can you do","what do you offer","solution"], id: "services-overview" },
  { terms: ["about","who are you","company","overview","meta intelligo","what is meta"], id: "company-overview" },
  { terms: ["achievement","stats","clients","how many","track record","experience","years"], id: "company-stats" },
  { terms: ["value","culture","mission","vision","belief","principle"], id: "company-values" },
];

// ─── Build ID→entry lookup ────────────────────────────────────────────────────
const entryMap = new Map<string, KnowledgeEntry>(
  knowledgeBase.map((e) => [e.id, e])
);

// ─── Fuse.js: search across questions + keywords as separate weighted keys ───
interface FuseDoc {
  id: string;
  questions: string;
  keywords: string;
  entry: KnowledgeEntry;
}

const fuseDocs: FuseDoc[] = knowledgeBase.map((e) => ({
  id: e.id,
  questions: e.questions.join(" "),
  keywords: e.keywords.join(" "),
  entry: e,
}));

const fuse = new Fuse(fuseDocs, {
  keys: [
    { name: "questions", weight: 0.65 },
    { name: "keywords",  weight: 0.35 },
  ],
  threshold: 0.5,
  distance: 300,
  minMatchCharLength: 2,
  includeScore: true,
  ignoreLocation: true,
  useExtendedSearch: false,
  findAllMatches: false,
});

// ─── Core search: 3-pass matching ────────────────────────────────────────────
function findEntry(query: string): KnowledgeEntry | null {
  const lower = normalizeText(query);
  const tokens = tokenize(query);

  // Pass 1: direct keyword map — check if ANY keyword term appears in the query
  for (const { terms, id } of KEYWORD_MAP) {
    for (const term of terms) {
      if (lower.includes(term)) {
        const entry = entryMap.get(id);
        if (entry) return entry;
      }
    }
  }

  // Pass 2: Fuse.js fuzzy match on the processed query
  if (tokens.length > 0) {
    const fuseQuery = tokens.join(" ");
    const results = fuse.search(fuseQuery);
    if (results.length > 0) {
      const best = results[0];
      const score = best.score ?? 1;
      if (score < 0.6) {   // accept fuzzy match up to 60% distance
        return best.item.entry;
      }
    }
  }

  // Pass 3: raw query fallback (in case tokenization removed too much)
  if (query.trim().length > 0) {
    const results = fuse.search(query.trim());
    if (results.length > 0 && (results[0].score ?? 1) < 0.7) {
      return results[0].item.entry;
    }
  }

  return null;
}

// ─── Public API ───────────────────────────────────────────────────────────────

export interface BotResponse {
  text: string;
  suggestions: string[];
  cta?: ChatCTA;
}

/**
 * Main entry point: handles both chip labels and free-text queries.
 * Chips use the CHIP_TO_ID map for instant O(1) lookup.
 * Free text goes through the 3-pass engine.
 */
export function buildResponse(rawInput: string): BotResponse {
  const trimmed = rawInput.trim();

  // --- Chip direct lookup (fastest path) ---
  const directId = CHIP_TO_ID[trimmed];
  if (directId) {
    const entry = entryMap.get(directId);
    if (entry) {
      return {
        text: entry.answer,
        suggestions: entry.suggestions ?? quickSuggestions.slice(0, 4),
        cta: entry.cta,
      };
    }
  }

  // --- 3-pass search for free text ---
  const entry = findEntry(trimmed);
  if (entry) {
    return {
      text: entry.answer,
      suggestions: entry.suggestions ?? quickSuggestions.slice(0, 4),
      cta: entry.cta,
    };
  }

  // --- Fallback ---
  return {
    text: fallbackResponse.answer,
    suggestions: fallbackResponse.suggestions,
    cta: fallbackResponse.cta,
  };
}

// ─── Utilities ────────────────────────────────────────────────────────────────
export function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
}

export function renderMarkdown(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(
      /^• (.+)$/gm,
      '<span class="flex gap-2"><span class="shrink-0 mt-0.5">•</span><span>$1</span></span>'
    )
    .replace(/\n/g, "<br />");
}
