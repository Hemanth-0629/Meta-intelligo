import type { KnowledgeEntry } from "@/types/chatbot";

export const knowledgeBase: KnowledgeEntry[] = [
  // ─── COMPANY OVERVIEW ────────────────────────────────────────────────────────
  {
    id: "company-overview",
    category: "company",
    priority: 10,
    questions: [
      "What is Meta Intelligo?",
      "Tell me about Meta Intelligo",
      "Who are you?",
      "What does Meta Intelligo do?",
      "About the company",
      "What company is this?",
      "Meta Intelligo overview",
    ],
    keywords: ["meta intelligo", "company", "about", "who", "what do you do", "overview", "introduction", "tell me"],
    answer:
      "**Meta Intelligo Technologies** is an AI-driven enterprise technology company headquartered in Bengaluru, India.\n\nWe deliver end-to-end digital transformation solutions across:\n• 🤖 AI & Machine Learning\n• ☁️ Cloud Computing & DevOps\n• 💻 Custom Software Development\n• 📱 Product Engineering\n• 👥 Staffing & Recruitment\n\nWe serve 10+ clients across Healthcare, Banking, Insurance, Manufacturing, Retail, and more.",
    suggestions: ["Our Services", "Our Products", "Courses & Training", "Contact Us"],
    cta: { label: "Explore Services", href: "/services" },
  },

  {
    id: "company-location",
    category: "company",
    priority: 8,
    questions: [
      "Where are you located?",
      "What is your address?",
      "Where is the office?",
      "Office location",
      "Bengaluru office",
    ],
    keywords: ["location", "address", "office", "where", "bengaluru", "bangalore", "karnataka", "marathahalli", "headquarters"],
    answer:
      "📍 **Our Office:**\nNovel MSR Building, 1st Main St,\nSubbaiah Reddy Colony, Marathahalli,\nBengaluru, Karnataka 560037\n\n📞 +91 90 59 49 5102\n📧 info@metaintelligo.com\n\nWe're in the heart of India's Silicon Valley!",
    suggestions: ["Contact Us", "WhatsApp Us", "Our Services"],
    cta: { label: "Get Directions", href: "https://maps.google.com/?q=Marathahalli+Bengaluru", external: true },
  },

  {
    id: "company-stats",
    category: "company",
    priority: 7,
    questions: [
      "How many clients do you have?",
      "What are your stats?",
      "Company achievements",
      "Track record",
      "Experience",
      "How long have you been operating?",
    ],
    keywords: ["clients", "stats", "achievements", "experience", "years", "track record", "how many", "portfolio", "numbers"],
    answer:
      "🏆 **Meta Intelligo by the numbers:**\n\n• **10+** Global clients served\n• **7+ Years** of enterprise excellence\n• **65%** Average cost reduction delivered\n• **99.9%** Uptime SLA on managed services\n• **500+** Professionals placed\n• **11** Service lines\n• **8** Industry verticals",
    suggestions: ["Our Services", "Our Portfolio", "Careers"],
  },

  {
    id: "company-values",
    category: "company",
    priority: 5,
    questions: [
      "What are your values?",
      "Company culture",
      "Mission and vision",
      "What do you believe in?",
    ],
    keywords: ["values", "culture", "mission", "vision", "beliefs", "principles", "ethos"],
    answer:
      "💡 **Our Core Values:**\n\n• **Data With Purpose** — Every decision is data-driven\n• **Customer First** — Your success is our success\n• **Act With Ownership** — Full accountability for outcomes\n• **Think Forward** — We anticipate tomorrow's challenges today\n• **Move as One** — Cross-functional collaboration\n• **Keep It Human** — Technology that serves people",
    suggestions: ["About Us", "Careers", "Contact Us"],
    cta: { label: "Learn More", href: "/about" },
  },

  // ─── SERVICES ─────────────────────────────────────────────────────────────────
  {
    id: "services-overview",
    category: "services",
    priority: 10,
    questions: [
      "What services do you offer?",
      "What can you do for me?",
      "List your services",
      "Services overview",
      "What are your capabilities?",
    ],
    keywords: ["services", "offer", "capabilities", "what can you do", "solutions", "help", "provide"],
    answer:
      "🚀 **Our Enterprise Services:**\n\n1. 🤖 **AI & Machine Learning** — Intelligent models & automation\n2. ☁️ **Cloud Computing** — AWS, Azure, GCP migrations\n3. ⚙️ **DevOps & CI/CD** — Automated delivery pipelines\n4. 🌐 **Digital Transformation** — Legacy modernization\n5. 💻 **Custom Software Dev** — Tailored enterprise apps\n6. 📦 **Product Engineering** — Full-cycle product delivery\n7. 🏢 **Enterprise Software & CRM** — ERP, CRM platforms\n8. 📡 **IoT Solutions** — Connected device ecosystems\n9. 🛠️ **Managed Services** — 24/7 IT operations\n10. 👥 **Staffing & Recruitment** — Top tech talent\n11. 🏗️ **BIM Services** — Building information modeling",
    suggestions: ["AI & ML", "Cloud Services", "DevOps", "Staffing"],
    cta: { label: "View All Services", href: "/services" },
  },

  {
    id: "service-ai-ml",
    category: "services",
    priority: 9,
    questions: [
      "Tell me about AI services",
      "Machine learning solutions",
      "What AI do you offer?",
      "AI chatbot development",
      "ML model development",
      "Artificial intelligence services",
      "Predictive analytics",
      "NLP services",
    ],
    keywords: ["ai", "artificial intelligence", "machine learning", "ml", "deep learning", "nlp", "chatbot", "prediction", "model", "neural network", "tensorflow", "pytorch", "data science"],
    answer:
      "🤖 **AI & Machine Learning Services:**\n\nWe build production-grade intelligent systems:\n\n• Custom ML model development & training\n• Natural Language Processing (NLP)\n• Computer vision & image recognition\n• Predictive analytics & demand forecasting\n• AI-powered chatbots & virtual agents\n• MLOps — deployment & monitoring\n\n**Tech:** TensorFlow, PyTorch, Scikit-learn, OpenAI API, AWS SageMaker\n\n📈 Clients see up to **94% forecast accuracy** and **22% revenue lift**.",
    suggestions: ["Cloud Services", "Digital Transformation", "Get a Quote"],
    cta: { label: "Start AI Project", href: "/contact" },
  },

  {
    id: "service-cloud",
    category: "services",
    priority: 9,
    questions: [
      "Cloud computing services",
      "AWS migration",
      "Azure cloud",
      "Google Cloud",
      "Cloud infrastructure",
      "Cloud migration",
      "Cloud native",
    ],
    keywords: ["cloud", "aws", "azure", "google cloud", "gcp", "migration", "infrastructure", "kubernetes", "docker", "terraform", "devops", "serverless", "cloud native"],
    answer:
      "☁️ **Cloud Computing Services:**\n\n• Multi-cloud strategy & architecture\n• AWS, Azure & Google Cloud migrations\n• Cloud-native application development\n• Kubernetes & container orchestration\n• Cost optimization & FinOps\n• Cloud security & compliance\n\n**Results we deliver:**\n✅ 65% reduction in deployment time\n✅ 40% infrastructure cost savings\n✅ 99.9% uptime SLA\n\n**Certified in:** AWS, Azure, GCP, Kubernetes",
    suggestions: ["DevOps Services", "Managed Services", "Get a Quote"],
    cta: { label: "Cloud Consultation", href: "/contact" },
  },

  {
    id: "service-devops",
    category: "services",
    priority: 8,
    questions: [
      "DevOps services",
      "CI/CD pipeline",
      "Continuous integration",
      "Infrastructure as code",
      "Automation",
      "GitOps",
    ],
    keywords: ["devops", "cicd", "ci/cd", "pipeline", "automation", "infrastructure as code", "terraform", "ansible", "jenkins", "github actions", "gitops", "deployment", "monitoring"],
    answer:
      "⚙️ **DevOps & CI/CD Services:**\n\n• CI/CD pipeline design & implementation\n• Infrastructure as Code (Terraform, Ansible)\n• GitOps & automated deployments\n• Monitoring, logging & alerting\n• DevSecOps security integration\n• Performance engineering\n\n**Tools:** GitHub Actions, Jenkins, Terraform, Prometheus, Grafana, Datadog\n\n⚡ We reduce deployment time by up to **65%**.",
    suggestions: ["Cloud Services", "Managed Services", "Get a Quote"],
    cta: { label: "Discuss DevOps", href: "/contact" },
  },

  {
    id: "service-digital-transformation",
    category: "services",
    priority: 8,
    questions: [
      "Digital transformation",
      "Modernize legacy systems",
      "Legacy migration",
      "Digital strategy",
      "Digital upgrade",
      "Digitize operations",
    ],
    keywords: ["digital transformation", "legacy", "modernization", "digitize", "digital strategy", "migration", "upgrade", "process automation", "enterprise", "modernize"],
    answer:
      "🌐 **Digital Transformation Services:**\n\n• Digital strategy & technology roadmapping\n• Legacy system modernization\n• Process digitization & automation\n• Change management & enablement\n• Customer experience transformation\n• Enterprise architecture advisory\n\nWe help enterprises move from legacy constraints to agile, cloud-first operations that scale with growth.",
    suggestions: ["Custom Software", "Cloud Services", "Get a Quote"],
    cta: { label: "Start Transformation", href: "/contact" },
  },

  {
    id: "service-custom-software",
    category: "services",
    priority: 8,
    questions: [
      "Custom software development",
      "Build a web app",
      "Software development",
      "Web application development",
      "API development",
      "Mobile app development",
      "Backend development",
    ],
    keywords: ["custom software", "web app", "software development", "application", "full stack", "backend", "frontend", "api", "mobile app", "react", "nodejs", "java", "python", "build"],
    answer:
      "💻 **Custom Software Development:**\n\n• Full-stack web application development\n• Microservices & REST API development\n• Database design & optimization\n• Third-party system integrations\n• Performance & scalability engineering\n• Legacy code modernization\n\n**Tech Stack:** React, Next.js, Node.js, Python, Java, PostgreSQL, MongoDB\n\nWe build enterprise software that scales to millions of users.",
    suggestions: ["Product Engineering", "Mobile Apps", "Get a Quote"],
    cta: { label: "Build With Us", href: "/contact" },
  },

  {
    id: "service-staffing",
    category: "staffing",
    priority: 9,
    questions: [
      "Staffing services",
      "Hire developers",
      "IT recruitment",
      "Technology talent",
      "Staff augmentation",
      "Dedicated team",
      "Hire engineers",
      "Contract staffing",
      "Permanent placement",
    ],
    keywords: ["staffing", "recruitment", "hire", "talent", "developers", "engineers", "staff augmentation", "dedicated team", "placement", "contract", "permanent", "resource"],
    answer:
      "👥 **Staffing & Recruitment:**\n\nConnect with pre-vetted technology professionals:\n\n• Permanent & contract placements\n• Team augmentation & dedicated teams\n• Technical screening & vetting\n• Executive technology search\n• Graduate & fresher programs\n• Workforce training & upskilling\n\n**Specializations:** Java, Python, React, DevOps, Data Science, QA Automation, Cloud\n\n500+ professionals placed at top companies.",
    suggestions: ["Courses & Training", "Careers at Meta Intelligo", "Contact Us"],
    cta: { label: "Find Talent", href: "/contact" },
  },

  {
    id: "service-managed",
    category: "services",
    priority: 7,
    questions: [
      "Managed services",
      "IT support",
      "24/7 support",
      "IT operations",
      "Infrastructure management",
      "Server management",
    ],
    keywords: ["managed services", "24/7", "support", "it operations", "infrastructure management", "monitoring", "maintenance", "helpdesk", "uptime", "server"],
    answer:
      "🛠️ **Managed Services:**\n\n24/7 end-to-end IT management:\n\n• Round-the-clock infrastructure monitoring\n• Incident management & SLA adherence\n• Security patching & vulnerability management\n• Capacity planning & auto-scaling\n• Backup & disaster recovery\n• Monthly performance reporting\n\n**We guarantee 99.9% uptime SLA.**\n\nFocus on your business — we own your infrastructure.",
    suggestions: ["Cloud Services", "DevOps", "Get a Quote"],
    cta: { label: "Get Managed Services", href: "/contact" },
  },

  {
    id: "service-iot",
    category: "services",
    priority: 6,
    questions: [
      "IoT solutions",
      "Internet of things",
      "Smart devices",
      "Industrial IoT",
      "Connected devices",
      "Sensor data",
      "Edge computing",
    ],
    keywords: ["iot", "internet of things", "smart devices", "industrial", "iiot", "connected", "sensors", "edge computing", "mqtt", "real time", "automation"],
    answer:
      "📡 **IoT Solutions:**\n\n• IoT architecture design & implementation\n• Edge computing & real-time processing\n• Device management platforms\n• Industrial IoT (IIoT) solutions\n• Predictive maintenance systems\n• IoT security & compliance\n\n**Industries:** Manufacturing, Logistics, Healthcare, Smart Buildings\n\nFrom sensor to insight — in milliseconds.",
    suggestions: ["Cloud Services", "AI & ML", "Get a Quote"],
    cta: { label: "Build IoT Solution", href: "/contact" },
  },

  {
    id: "service-bim",
    category: "services",
    priority: 5,
    questions: [
      "BIM services",
      "Building information modeling",
      "Architecture modeling",
      "Construction technology",
      "3D modeling",
      "Digital twin",
    ],
    keywords: ["bim", "building information", "modeling", "architecture", "construction", "revit", "navisworks", "3d", "digital twin", "clash detection", "aec"],
    answer:
      "🏗️ **BIM Services:**\n\n• 3D BIM modeling & coordination\n• Clash detection & resolution\n• 4D construction scheduling\n• 5D cost estimation integration\n• Digital twin development\n• As-built documentation\n\n**Tools:** Revit, Navisworks, AutoCAD, ArchiCAD, BIM 360\n\nFor architecture, engineering & construction (AEC) industries.",
    suggestions: ["Digital Transformation", "IoT Solutions", "Get a Quote"],
    cta: { label: "Discuss BIM Project", href: "/contact" },
  },

  // ─── PRODUCTS ─────────────────────────────────────────────────────────────────
  {
    id: "products-overview",
    category: "products",
    priority: 10,
    questions: [
      "What products do you have?",
      "Your software products",
      "SaaS products",
      "Ready-made software",
      "Product portfolio",
      "HRM LMS CRM AMS",
    ],
    keywords: ["products", "software products", "saas", "hrm", "lms", "crm", "ams", "ready made", "platform", "system"],
    answer:
      "📦 **Our Ready-to-Deploy Products:**\n\n1. 👥 **HRM** — Human Resource Management System\n   Complete HR lifecycle, payroll, attendance & compliance\n\n2. 📚 **LMS** — Learning Management System\n   Online training, assessments & certification tracking\n\n3. 📊 **CRM** — Customer Relationship Management\n   AI-powered sales pipeline & customer intelligence\n\n4. 🏭 **AMS** — Asset Management System\n   Real-time asset tracking, lifecycle & maintenance\n\nAll products are cloud-ready, customizable & enterprise-grade.",
    suggestions: ["HRM System", "LMS Platform", "CRM Solution", "Asset Management"],
    cta: { label: "Request a Demo", href: "/contact" },
  },

  {
    id: "product-hrm",
    category: "products",
    priority: 9,
    questions: [
      "HRM system",
      "HR software",
      "Human resource management",
      "Employee management",
      "Payroll software",
      "Attendance system",
      "HR platform",
    ],
    keywords: ["hrm", "hr", "human resource", "employee", "payroll", "attendance", "leave management", "performance", "appraisal", "onboarding", "workforce"],
    answer:
      "👥 **HRM — Human Resource Management System:**\n\n**Core Modules:**\n• Employee onboarding & lifecycle\n• Payroll processing & compliance\n• Attendance & leave management\n• Performance appraisals & reviews\n• Recruitment & applicant tracking\n• Training & development\n• Analytics & workforce reporting\n\n**Deployment:** Cloud (SaaS) or On-Premises\n**Integration:** Biometric, ERP, Accounting systems\n\n✅ Fully customizable to your HR workflows.",
    suggestions: ["LMS Platform", "Request a Demo", "Contact Sales"],
    cta: { label: "Request HRM Demo", href: "/contact" },
  },

  {
    id: "product-lms",
    category: "products",
    priority: 9,
    questions: [
      "LMS platform",
      "Learning management system",
      "Online training platform",
      "E-learning software",
      "Course management",
      "Corporate training",
      "Employee learning",
    ],
    keywords: ["lms", "learning management", "elearning", "e-learning", "online training", "course", "certification", "assessment", "quiz", "education platform", "corporate training"],
    answer:
      "📚 **LMS — Learning Management System:**\n\n**Features:**\n• Course creation & content management\n• Video lectures & interactive content\n• Assessments, quizzes & certifications\n• Progress tracking & analytics\n• Live virtual classrooms\n• Mobile-friendly learner app\n• Gamification & leaderboards\n\n**Used by:** Corporate training teams, universities, upskilling programs\n\n🎓 Our own training programs run on this platform!",
    suggestions: ["Courses & Training", "HRM System", "Request a Demo"],
    cta: { label: "Request LMS Demo", href: "/contact" },
  },

  {
    id: "product-crm",
    category: "products",
    priority: 9,
    questions: [
      "CRM software",
      "Customer relationship management",
      "Sales CRM",
      "Sales pipeline",
      "Lead management",
      "Customer management system",
    ],
    keywords: ["crm", "customer relationship", "sales", "pipeline", "leads", "contact management", "deals", "opportunities", "marketing automation", "customer intelligence"],
    answer:
      "📊 **CRM — Customer Relationship Management:**\n\n**Features:**\n• AI-powered lead scoring & prioritization\n• Visual sales pipeline management\n• Automated follow-ups & reminders\n• Email & WhatsApp campaign integration\n• Customer 360° view\n• Revenue analytics & forecasting\n• Mobile CRM app\n\n**Integration:** WhatsApp, Email, ERP, telephony systems\n\n📈 Clients see 3× increase in qualified leads after deployment.",
    suggestions: ["HRM System", "LMS Platform", "Request a Demo"],
    cta: { label: "Request CRM Demo", href: "/contact" },
  },

  {
    id: "product-ams",
    category: "products",
    priority: 8,
    questions: [
      "Asset management system",
      "AMS software",
      "Asset tracking",
      "Equipment management",
      "Fixed asset management",
      "Inventory tracking",
    ],
    keywords: ["ams", "asset management", "asset tracking", "equipment", "inventory", "fixed assets", "maintenance", "lifecycle", "qr code", "rfid", "depreciation"],
    answer:
      "🏭 **AMS — Asset Management System:**\n\n**Features:**\n• Real-time asset tracking (QR/RFID/GPS)\n• Lifecycle monitoring & depreciation\n• Preventive maintenance scheduling\n• Centralized asset dashboard\n• Audit trails & compliance\n• Mobile asset tagging app\n• Analytics & asset reports\n\n**Industries:** Manufacturing, Healthcare, Logistics, Government\n\n⚙️ Reduce asset downtime by 35% with intelligent maintenance alerts.",
    suggestions: ["IoT Solutions", "Managed Services", "Request a Demo"],
    cta: { label: "Request AMS Demo", href: "/contact" },
  },

  // ─── COURSES & TRAINING ────────────────────────────────────────────────────────
  {
    id: "courses-overview",
    category: "courses",
    priority: 10,
    questions: [
      "What courses do you offer?",
      "Training programs",
      "Tech courses",
      "Learn at Meta Intelligo",
      "Upskilling programs",
      "Professional training",
      "Certification courses",
    ],
    keywords: ["courses", "training", "learn", "upskill", "certification", "programs", "classes", "workshop", "bootcamp", "education"],
    answer:
      "🎓 **Courses & Training Programs:**\n\n1. 🤖 **AI & Machine Learning** — Hands-on ML model building\n2. ⚙️ **DevOps & Cloud** — CI/CD, AWS, Kubernetes\n3. 📊 **Data Science** — Python, statistics, visualization\n4. 💻 **Full Stack Development** — React, Node.js, databases\n5. 🧪 **QA Automation** — Selenium, Playwright, Cypress\n6. ☕ **Java Programming** — Core to enterprise Java\n7. 🐍 **Python Programming** — Fundamentals to advanced\n\n✅ Placement assistance included\n✅ Real project experience\n✅ Industry mentors",
    suggestions: ["AI & ML Course", "DevOps Course", "Placement Program", "Internship"],
    cta: { label: "Enroll Now", href: "/contact" },
  },

  {
    id: "course-aiml",
    category: "courses",
    priority: 9,
    questions: [
      "AI ML course",
      "Machine learning training",
      "Artificial intelligence course",
      "Data science course",
      "Learn AI",
      "AI certification",
    ],
    keywords: ["ai course", "ml course", "machine learning training", "artificial intelligence", "data science training", "deep learning course", "python ai", "tensorflow course"],
    answer:
      "🤖 **AI & Machine Learning Course:**\n\n**Duration:** 3–6 months (flexible batches)\n**Mode:** Online & Offline (Bengaluru)\n\n**Curriculum:**\n• Python for Data Science\n• Statistics & probability\n• Supervised & unsupervised learning\n• Deep learning & neural networks\n• NLP & computer vision\n• Real project deployment\n• Industry case studies\n\n🏆 **Placement:** Our graduates work at E&Y, Infosys, TCS and more!\n\n_\"Meta Intelligo's AI program transformed my career\" — Enimireddy Krishnareddy, E&Y_",
    suggestions: ["DevOps Course", "Placement Program", "Enroll Now"],
    cta: { label: "Apply for AI Course", href: "/contact" },
  },

  {
    id: "course-devops",
    category: "courses",
    priority: 9,
    questions: [
      "DevOps course",
      "Cloud training",
      "AWS training",
      "Kubernetes course",
      "CI CD training",
      "Learn DevOps",
    ],
    keywords: ["devops course", "cloud training", "aws course", "kubernetes training", "docker training", "cicd course", "jenkins", "terraform training", "devops certification"],
    answer:
      "⚙️ **DevOps & Cloud Training:**\n\n**Duration:** 2–4 months\n**Mode:** Online & Offline\n\n**Curriculum:**\n• Linux fundamentals\n• Git & version control\n• Docker & containerization\n• Kubernetes orchestration\n• CI/CD with GitHub Actions & Jenkins\n• Infrastructure as Code (Terraform)\n• AWS / Azure cloud services\n• Monitoring with Prometheus & Grafana\n\n✅ Hands-on labs on real cloud environments\n✅ DevOps certification prep",
    suggestions: ["AI & ML Course", "Full Stack Course", "Enroll Now"],
    cta: { label: "Apply for DevOps Course", href: "/contact" },
  },

  {
    id: "course-fullstack",
    category: "courses",
    priority: 8,
    questions: [
      "Full stack development course",
      "Web development training",
      "React course",
      "Node.js training",
      "JavaScript course",
      "MERN stack",
    ],
    keywords: ["full stack", "web development", "react", "nodejs", "javascript", "mern", "frontend", "backend", "html css", "web course"],
    answer:
      "💻 **Full Stack Development Course:**\n\n**Duration:** 4–6 months\n**Mode:** Online & Offline\n\n**Curriculum:**\n• HTML5, CSS3, JavaScript (ES6+)\n• React.js & Next.js\n• Node.js & Express\n• REST API design\n• MongoDB & PostgreSQL\n• Authentication & security\n• Deployment on Vercel / AWS\n• Portfolio project building\n\n✅ Build 3+ real-world projects\n✅ GitHub portfolio setup",
    suggestions: ["QA Automation Course", "DevOps Course", "Enroll Now"],
    cta: { label: "Apply for Full Stack Course", href: "/contact" },
  },

  {
    id: "course-qa",
    category: "courses",
    priority: 8,
    questions: [
      "QA automation course",
      "Testing course",
      "Selenium training",
      "Software testing",
      "Playwright course",
      "Cypress testing",
      "Manual testing",
    ],
    keywords: ["qa", "testing", "automation", "selenium", "playwright", "cypress", "manual testing", "jmeter", "api testing", "performance testing", "quality assurance"],
    answer:
      "🧪 **QA Automation Training:**\n\n**Duration:** 2–3 months\n**Mode:** Online & Offline\n\n**Curriculum:**\n• Manual testing fundamentals\n• Selenium WebDriver\n• Playwright & Cypress\n• API testing (Postman, RestAssured)\n• Performance testing (JMeter)\n• Test frameworks (TestNG, JUnit)\n• Agile & BDD testing\n• CI/CD integration\n\n🏆 _Bindu Sree became Senior Tester at Infosys after this program!_",
    suggestions: ["Full Stack Course", "DevOps Course", "Enroll Now"],
    cta: { label: "Apply for QA Course", href: "/contact" },
  },

  // ─── CAREERS ──────────────────────────────────────────────────────────────────
  {
    id: "careers-overview",
    category: "careers",
    priority: 10,
    questions: [
      "Jobs at Meta Intelligo",
      "Career opportunities",
      "Hiring",
      "Work with you",
      "Open positions",
      "Job openings",
      "Employment",
    ],
    keywords: ["jobs", "career", "hiring", "work", "employment", "openings", "positions", "join", "vacancies", "opportunity", "recruit"],
    answer:
      "🚀 **Careers at Meta Intelligo:**\n\nWe're actively hiring passionate technologists!\n\n**Open Roles:**\n• Senior AI/ML Engineer\n• Full-Stack Software Engineer\n• Cloud & DevOps Engineer\n• QA Automation Engineer\n• Data Analyst\n• UI/UX Designer\n\n**Why join us?**\n✅ Competitive salary + bonuses\n✅ ₹50,000/year learning budget\n✅ Work on enterprise-scale AI projects\n✅ Mentorship from industry leaders\n✅ Flexible hybrid work model",
    suggestions: ["Apply Now", "Apply for Internships", "Internship Program", "Courses & Training"],
    cta: { label: "View Open Roles", href: "/careers" },
  },

  {
    id: "internship",
    category: "internship",
    priority: 9,
    questions: [
      "Internship program",
      "Internship opportunity",
      "Student internship",
      "Engineering internship",
      "Summer internship",
      "Intern at Meta Intelligo",
      "Graduate program",
      "Fresher jobs",
      "Apply for internship",
      "How to apply for internship",
    ],
    keywords: ["internship", "intern", "student", "fresher", "graduate", "trainee", "summer", "junior", "entry level", "college", "campus", "apply internship"],
    answer:
      "🎓 **Internship Program at Meta Intelligo:**\n\nWe offer **paid 3–6 month internships** for students and fresh graduates!\n\n**What you get:**\n• Real enterprise project experience\n• Mentorship by senior engineers\n• Exposure to AI, Cloud, DevOps, Full Stack & QA\n• Certificate of completion\n• Pre-placement offer opportunity\n\n**Who can apply:**\n• B.Tech / BCA / MCA / M.Tech students\n• Basic programming knowledge required\n• Passion to learn & build\n\n👇 **Click the button below or use the 'Apply for Internship' button at the bottom-left of the page to apply instantly!**",
    suggestions: ["Courses & Training", "Placement Program", "Careers & Jobs", "Contact Us"],
    cta: { label: "Apply for Internship", href: "/careers" },
  },

  {
    id: "placement-program",
    category: "careers",
    priority: 9,
    questions: [
      "Placement assistance",
      "Job placement",
      "Placement program",
      "Get placed",
      "Job guarantee",
      "After course placement",
      "Placement record",
    ],
    keywords: ["placement", "placed", "job guarantee", "hire after training", "placement record", "alumni", "campus placement", "job assistance"],
    answer:
      "🏆 **Placement Program:**\n\nOur training-to-placement pipeline has placed 500+ professionals!\n\n**Success Stories:**\n• **Enimireddy Krishnareddy** → Data Analyst @ E&Y\n• **Bindu Sree** → Senior Tester @ Infosys\n• Alumni at TCS, Wipro, Accenture, Deloitte, IBM, Cognizant\n\n**Our Placement Process:**\n1. Complete the training program\n2. Build real project portfolio\n3. Resume & interview preparation\n4. Mock interviews with industry leaders\n5. Direct referrals to hiring partners\n\n✅ Active hiring partner network across India",
    suggestions: ["Courses & Training", "AI & ML Course", "DevOps Course"],
    cta: { label: "Join Placement Program", href: "/contact" },
  },

  // ─── CONTACT & SUPPORT ───────────────────────────────────────────────────────
  {
    id: "contact-info",
    category: "contact",
    priority: 10,
    questions: [
      "Contact details",
      "How to contact you",
      "Phone number",
      "Email address",
      "Get in touch",
      "Reach you",
      "Support contact",
    ],
    keywords: ["contact", "phone", "email", "reach", "get in touch", "support", "call", "message", "enquiry", "inquiry", "number", "address"],
    answer:
      "📞 **Contact Meta Intelligo:**\n\n• **Phone:** +91 90 59 49 5102\n• **Email:** info@metaintelligo.com\n• **WhatsApp:** Available 24/7\n• **Office:** Novel MSR Building, Marathahalli, Bengaluru 560037\n\n🕐 **Response Times:**\n• WhatsApp / Phone → Within 1 hour\n• Email → Within 4 hours\n• Project consultation → Within 1 business day",
    suggestions: ["WhatsApp Us", "Send Email", "Visit Office"],
    cta: { label: "WhatsApp Us Now", href: "https://wa.me/919059495102", external: true, variant: "whatsapp" },
  },

  {
    id: "whatsapp-contact",
    category: "contact",
    priority: 10,
    questions: [
      "WhatsApp",
      "Chat on WhatsApp",
      "WhatsApp number",
      "Message on WhatsApp",
      "Connect on WhatsApp",
    ],
    keywords: ["whatsapp", "whatsapp number", "chat", "message", "wa", "instant message"],
    answer:
      "💬 **Chat with us on WhatsApp!**\n\nWe're available on WhatsApp for instant support:\n\n📱 **+91 90 59 49 5102**\n\nClick below to start a conversation right now. Our team typically responds within **1 hour** during business hours.",
    suggestions: ["Call Us", "Send Email", "Visit Office"],
    cta: { label: "Open WhatsApp", href: "https://wa.me/919059495102", external: true, variant: "whatsapp" },
  },

  {
    id: "linkedin-connect",
    category: "contact",
    priority: 7,
    questions: [
      "LinkedIn",
      "Follow on LinkedIn",
      "LinkedIn page",
      "Social media",
    ],
    keywords: ["linkedin", "social", "follow", "connect", "social media", "professional network"],
    answer:
      "🔗 **Follow us on LinkedIn!**\n\nStay updated with our latest:\n• Technology insights & blogs\n• Job openings\n• Company news\n• Industry trends\n• Client success stories\n\n**Meta Intelligo Technologies Pvt. Ltd.**",
    suggestions: ["Contact Us", "Careers", "Our Services"],
    cta: { label: "Follow on LinkedIn", href: "https://www.linkedin.com/company/meta-intelligo-technologies-pvt-ltd/", external: true },
  },

  {
    id: "get-quote",
    category: "contact",
    priority: 9,
    questions: [
      "Get a quote",
      "Pricing",
      "How much does it cost?",
      "Rates",
      "Cost estimate",
      "Proposal",
      "How much do you charge?",
    ],
    keywords: ["quote", "pricing", "cost", "rate", "price", "estimate", "proposal", "budget", "how much", "charges", "fee"],
    answer:
      "💰 **Pricing & Quotes:**\n\nOur pricing is tailored to each project's scope, complexity, and timeline. We offer:\n\n• **Fixed-price projects** — for well-defined scope\n• **Time & material** — for evolving requirements\n• **Dedicated teams** — monthly retainer model\n• **Product licenses** — per-seat or enterprise\n\n📋 **Get a free consultation** and we'll provide a detailed proposal within 1 business day.\n\nNo obligation. No hidden fees.",
    suggestions: ["Contact Us", "WhatsApp Us", "Our Services"],
    cta: { label: "Get Free Quote", href: "/contact" },
  },

  // ─── FAQ ──────────────────────────────────────────────────────────────────────
  {
    id: "faq-how-start",
    category: "faq",
    priority: 9,
    questions: [
      "How do I get started?",
      "How to begin?",
      "Start a project",
      "First step",
      "Onboarding process",
    ],
    keywords: ["get started", "begin", "start", "first step", "onboard", "how to", "process", "kickoff", "initiate project"],
    answer:
      "🚀 **Getting Started is Easy:**\n\n**Step 1:** Fill out the contact form or WhatsApp us\n**Step 2:** Free discovery call (30–60 mins)\n**Step 3:** We send a tailored proposal\n**Step 4:** Sign agreement & kickoff meeting\n**Step 5:** Agile sprint-based delivery begins\n\n⚡ Most projects kick off within **5 business days** of agreement.\n\nReady? Let's talk!",
    suggestions: ["Contact Us", "WhatsApp Us", "Our Services"],
    cta: { label: "Start Now", href: "/contact" },
  },

  {
    id: "faq-industries",
    category: "faq",
    priority: 8,
    questions: [
      "What industries do you serve?",
      "Which sectors?",
      "Healthcare technology",
      "Banking software",
      "Retail technology",
    ],
    keywords: ["industries", "sectors", "healthcare", "banking", "insurance", "manufacturing", "retail", "logistics", "government", "ecommerce", "finance"],
    answer:
      "🏭 **Industries We Serve:**\n\n• 🏥 **Healthcare** — HIPAA-compliant platforms, telemedicine\n• 🏦 **Banking & Finance** — Core banking, fraud detection\n• 🛡️ **Insurance** — Claims automation, underwriting AI\n• 🏭 **Manufacturing** — Smart factory, predictive maintenance\n• 🛍️ **Retail** — Omnichannel, AI personalization\n• 🚚 **Logistics** — Route optimization, fleet management\n• 🏛️ **Government** — e-Governance, citizen portals\n• 🛒 **E-Commerce** — Headless commerce, conversion optimization",
    suggestions: ["Our Services", "Portfolio", "Contact Us"],
    cta: { label: "Explore Industries", href: "/industries" },
  },

  {
    id: "faq-portfolio",
    category: "faq",
    priority: 8,
    questions: [
      "Show me your work",
      "Portfolio",
      "Case studies",
      "Previous projects",
      "What have you built?",
      "Client projects",
      "Success stories",
    ],
    keywords: ["portfolio", "case study", "previous work", "projects", "examples", "built", "clients", "showcase", "achievements"],
    answer:
      "📁 **Our Notable Projects:**\n\n📊 **Retail Analytics Platform**\n→ 94% forecast accuracy, +22% revenue lift\n\n📱 **Find My Future (EdTech App)**\n→ 10,000+ downloads, 4.7★ rating\n\n☁️ **Enterprise ERP Cloud Migration**\n→ 65% faster deployments, 40% cost savings\n\n🏠 **Real Estate Lead Platform**\n→ 3× qualified lead growth\n\nEach project comes with full transparency on metrics and outcomes.",
    suggestions: ["View Full Portfolio", "Contact Us", "Get a Quote"],
    cta: { label: "View Full Portfolio", href: "/portfolio" },
  },

  {
    id: "faq-tech-stack",
    category: "faq",
    priority: 7,
    questions: [
      "What technologies do you use?",
      "Tech stack",
      "Programming languages",
      "Frameworks you work with",
      "Technology expertise",
    ],
    keywords: ["technology", "tech stack", "programming", "languages", "frameworks", "tools", "expertise", "react", "python", "java", "aws"],
    answer:
      "⚙️ **Our Technology Stack:**\n\n**Frontend:** React, Next.js, Vue.js, TypeScript\n**Backend:** Node.js, Python, Java, Go\n**Mobile:** React Native, Flutter\n**Cloud:** AWS, Azure, Google Cloud\n**DevOps:** Docker, Kubernetes, Terraform, GitHub Actions\n**AI/ML:** TensorFlow, PyTorch, Scikit-learn, Hugging Face\n**Databases:** PostgreSQL, MongoDB, Redis, Elasticsearch\n**CMS & More:** Headless CMS, Microservices, REST/GraphQL APIs",
    suggestions: ["Our Services", "Custom Software", "Contact Us"],
  },

  {
    id: "faq-remote-work",
    category: "faq",
    priority: 6,
    questions: [
      "Do you work remotely?",
      "Remote services",
      "Work from anywhere",
      "Global clients",
      "International projects",
    ],
    keywords: ["remote", "global", "international", "online", "worldwide", "offshore", "distributed", "work from home"],
    answer:
      "🌍 **Yes — We Work Globally!**\n\nMeta Intelligo serves clients worldwide:\n\n• Fully remote project delivery\n• Agile sprint ceremonies via video call\n• 24/7 coverage across time zones\n• Secure collaboration tools\n• Regular delivery milestones & demos\n\nFrom Bengaluru to the world — we deliver enterprise technology with global standards.",
    suggestions: ["Get a Quote", "Contact Us", "Our Portfolio"],
    cta: { label: "Start Remote Project", href: "/contact" },
  },
];

// Quick suggestion chips shown in the chat window
export const quickSuggestions = [
  "Explore Services",
  "Our Products",
  "Courses & Training",
  "Careers & Jobs",
  "Contact Support",
];

// Greeting messages (rotated)
export const greetings = [
  "👋 Hi! I'm **Mira**, Meta Intelligo's AI assistant. I can answer questions about our services, courses, products, and more.\n\nWhat can I help you with today?",
];

// Fallback when no answer found
export const fallbackResponse = {
  answer:
    "🤔 I'm not sure I have the perfect answer for that. Let me connect you with our team who can help!\n\n**Fastest ways to reach us:**\n• 💬 WhatsApp: +91 90 59 49 5102\n• 📧 Email: info@metaintelligo.com\n• 📞 Call: +91 90 59 49 5102",
  suggestions: ["WhatsApp Us", "Our Services", "Courses & Training", "Careers"],
  cta: { label: "WhatsApp Us Now", href: "https://wa.me/919059495102", external: true, variant: "whatsapp" as const },
};
