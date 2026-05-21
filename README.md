# Meta Intelligo Technologies — Official Website

> Premium enterprise-grade website for Meta Intelligo Technologies Pvt. Ltd.  
> AI-driven technology company based in Bengaluru, India.

---

## 🚀 Tech Stack

| Category | Technology | Version |
|---|---|---|
| Framework | Next.js (App Router) | 15.3.2 |
| Language | TypeScript | ^5.7.2 |
| Styling | Tailwind CSS | ^3.4.17 |
| Animations | Framer Motion | ^11.15.0 |
| Animations | GSAP | ^3.12.5 |
| Smooth Scroll | Lenis | ^1.1.14 |
| Map | MapLibre GL JS | ^5.24.0 |
| Map Tiles | Carto Dark Matter (free) | — |
| Search | Fuse.js | ^7.3.0 |
| Icons | Lucide React | ^0.468.0 |
| UI Components | Radix UI | ^1.x |
| Forms | React Hook Form + Zod | ^7.x / ^3.x |
| Counters | React CountUp | ^6.5.3 |
| Image Opt | Sharp | ^0.33.5 |
| Runtime | Node.js | ≥18.0.0 |
| Package Manager | npm | ≥9.0.0 |

---

## 📋 System Requirements

```
Node.js   >= 18.0.0
npm       >= 9.0.0
Git       (any recent version)
```

---

## ⚡ Quick Start

### Clone & Install
```bash
git clone https://github.com/Hemanth-0629/Meta-intelligo.git
cd Meta-intelligo
npm install
```

### Development
```bash
npm run dev
# Open http://localhost:3000
```

### Production Build
```bash
npm run build       # Creates static export in /out folder
npx serve out -p 3000
# Open http://localhost:3000
```

> **Note:** This project uses `output: "export"` for static hosting (Hostinger compatible).  
> Use `npx serve out` to serve — NOT `npm start`.

---

## 📁 Project Structure

```
meta-intelligo/
├── public/
│   └── images/
│       ├── logo.svg                    # Official Meta Intelligo brand logo
│       └── testimonials/
│           ├── person_0.png            # Enimireddy Krishnareddy (E&Y)
│           ├── person_1.png            # Jalapothu Omprakash (Meta Intelligo)
│           └── person_2.png            # Bindu Sree (Infosys)
│
├── src/
│   ├── app/                            # Next.js App Router pages
│   │   ├── layout.tsx                  # Root layout (Navbar, Footer, Widgets)
│   │   ├── globals.css                 # Global styles + Tailwind
│   │   ├── page.tsx                    # Home page
│   │   ├── about/page.tsx
│   │   ├── services/page.tsx
│   │   ├── industries/page.tsx
│   │   ├── portfolio/page.tsx
│   │   ├── careers/page.tsx
│   │   └── contact/page.tsx
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx              # Sticky glass navbar + mega menus
│   │   │   ├── Footer.tsx              # Enterprise footer
│   │   │   └── SmoothScroll.tsx        # Lenis smooth scroll wrapper
│   │   ├── ui/
│   │   │   ├── AnimatedSection.tsx     # Scroll reveal wrapper
│   │   │   ├── FloatingContact.tsx     # WhatsApp + contact widget
│   │   │   ├── InternshipButton.tsx    # Apply for Internship floating button
│   │   │   ├── ComingSoonModal.tsx     # Employee login coming soon modal
│   │   │   └── InternshipModal.tsx     # Internship application modal (unused)
│   │   ├── chatbot/
│   │   │   ├── ChatWidget.tsx          # Main AI chatbot widget
│   │   │   ├── ChatBubble.tsx          # Message bubble component
│   │   │   └── TypingIndicator.tsx     # Animated typing dots
│   │   └── map/
│   │       ├── InteractiveMap.tsx      # MapLibre GL JS map
│   │       ├── HQMarker.tsx            # Animated HQ location marker
│   │       ├── MapOverlayCard.tsx      # Glassmorphism info card
│   │       ├── map-theme.ts            # Coordinates + style config
│   │       └── map-utils.ts            # Map utility helpers
│   │
│   ├── sections/                       # Page-level sections
│   │   ├── home/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── StatsSection.tsx
│   │   │   ├── ServicesSection.tsx
│   │   │   ├── IndustriesSection.tsx
│   │   │   ├── PortfolioSection.tsx
│   │   │   ├── ValuesSection.tsx
│   │   │   ├── TestimonialsSection.tsx
│   │   │   └── CTASection.tsx
│   │   ├── services/ServicesPage.tsx
│   │   ├── industries/IndustriesPage.tsx
│   │   ├── portfolio/PortfolioPageFull.tsx
│   │   ├── about/AboutPage.tsx
│   │   ├── careers/CareersPage.tsx
│   │   └── contact/ContactPageFull.tsx
│   │
│   ├── data/
│   │   └── knowledge-base.ts           # AI chatbot knowledge base (30+ entries)
│   │
│   ├── hooks/
│   │   ├── useChatbot.ts               # Chatbot state + localStorage memory
│   │   └── useScrollReveal.ts          # Intersection observer hook
│   │
│   ├── utils/
│   │   └── chatbot-engine.ts           # Fuse.js 3-pass search engine
│   │
│   ├── types/
│   │   └── chatbot.ts                  # TypeScript types for chatbot
│   │
│   └── lib/
│       └── utils.ts                    # cn() utility (clsx + tailwind-merge)
│
├── next.config.ts                      # Next.js config (static export)
├── tailwind.config.ts                  # Tailwind + brand tokens
├── tsconfig.json                       # TypeScript config
├── postcss.config.js                   # PostCSS config
└── package.json                        # Dependencies
```

---

## 🌐 Pages

| Route | Description |
|---|---|
| `/` | Home — Hero, Stats, Services, Industries, Portfolio, Testimonials, CTA |
| `/about` | Company overview, mission, team, values, milestones |
| `/services` | All 11 enterprise services with capabilities |
| `/industries` | 8 industry verticals with specific solutions |
| `/portfolio` | 4 detailed case studies with metrics |
| `/careers` | Open roles, culture, benefits, employee stories |
| `/contact` | Contact form, interactive map, office details |

---

## ✨ Key Features

### 🤖 AI Chatbot (Mira)
- **100% frontend** — no backend, no API keys
- Fuse.js 3-pass search engine (keyword → fuzzy → raw fallback)
- 30+ knowledge entries: services, products, courses, careers, FAQ
- localStorage session memory (last 40 messages)
- Typing animation, suggestion chips, CTA buttons

### 🗺️ Interactive Map
- **MapLibre GL JS** — completely free, no API key
- Carto Dark Matter tiles (© CARTO, © OpenStreetMap)
- 3D building extrusions, animated HQ marker
- Glassmorphism overlay card with Call / WhatsApp / LinkedIn / Directions

### 🎨 Design System
- Dark navy theme (`#050a14` base)
- Electric blue accents (`#0066FF`)
- Glassmorphism cards
- Framer Motion scroll animations
- Lenis smooth scrolling
- Mobile-first responsive

### 📦 Floating Widgets
- **WhatsApp** — `wa.me/919059495102`
- **Contact Hub** — WhatsApp + Call + LinkedIn + Email
- **Apply for Internship** — opens external ERP form
- **AI Chatbot (Mira)** — bottom-right

---

## 📞 Contact Information

| Field | Value |
|---|---|
| Phone | +91 90 59 49 5102 |
| Email | info@metaintelligo.com |
| WhatsApp | https://wa.me/919059495102 |
| LinkedIn | https://www.linkedin.com/company/meta-intelligo-technologies-pvt-ltd/ |
| Address | Novel MSR Building, 1st Main St, Subbaiah Reddy Colony, Marathahalli, Bengaluru, Karnataka 560037 |

---

## 🚀 Deployment

### Static Export (Hostinger / Any Static Host)
```bash
npm run build
# Upload the contents of /out folder to your hosting provider
```

### Vercel (Recommended)
1. Import repo at vercel.com/new
2. Framework: Next.js (auto-detected)
3. Deploy — zero configuration needed

### Netlify
```bash
npm run build
# Publish directory: out
```

---

## 🔗 GitHub Repositories

- **Primary:** https://github.com/Hemanth-0629/Meta-intelligo
- **Mirror:** https://github.com/kennyQ21/Meta-ta

---

## 📄 License

© 2025 Meta Intelligo Technologies Pvt. Ltd. All rights reserved.
