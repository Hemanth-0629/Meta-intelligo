"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Briefcase,
  MapPin,
  Clock,
  Users,
  Zap,
  Heart,
  Star,
  Award,
  Brain,
  Code2,
  Cloud,
  GitBranch,
  BarChart3,
  Palette,
  X,
  ExternalLink,
  CheckCircle2,
  Sparkles,
  IndianRupee,
} from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { CTASection } from "@/sections/home/CTASection";

const APPLY_URL =
  "https://erp.ecomsmart.world/form-builder/d11ad164-b3f5-4ebf-a2f3-e94cc3cc07c2-1779094293";

const openings = [
  {
    title: "Senior AI/ML Engineer",
    team: "AI & Data",
    type: "Full-time",
    location: "Bengaluru (Hybrid)",
    level: "Senior",
    experience: "5–9 years",
    compensation: "₹28L – ₹48L per annum",
    icon: Brain,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    skills: ["Python", "TensorFlow/PyTorch", "MLOps", "AWS SageMaker", "Docker/Kubernetes", "SQL/NoSQL"],
    desc: "Design and deploy production ML models at enterprise scale. You'll work on high-impact AI systems across healthcare, finance, and retail verticals.",
    about:
      "We are looking for a Senior AI/ML Engineer to join our growing AI & Data team. In this role, you will lead the end-to-end lifecycle of machine learning products — from data exploration and model design to deployment and monitoring in production. You will be embedded within cross-functional teams serving Fortune 500 clients in healthcare, banking, and manufacturing, where your models will directly influence business decisions affecting thousands of users daily.\n\nThis is a high-ownership role. You will have the autonomy to choose the right tools and approaches, the support of a world-class engineering culture, and the opportunity to grow into a lead or architect position. If you love turning data into working intelligent systems and thrive on the challenge of making them reliable at enterprise scale, this role is for you.",
    responsibilities: [
      "Lead design and development of production-grade ML models, including supervised, unsupervised, and deep learning systems",
      "Build and maintain scalable ML pipelines using MLOps best practices (versioning, experiment tracking, automated retraining)",
      "Collaborate with data engineers to ensure data quality, feature engineering pipelines, and efficient data access patterns",
      "Deploy models to cloud platforms (AWS SageMaker, Azure ML, Vertex AI) and optimize for latency, throughput, and cost",
      "Establish monitoring frameworks to detect model drift, data drift, and anomalies in production inference",
      "Conduct thorough model evaluation, bias analysis, and documentation to meet enterprise compliance and explainability requirements",
      "Mentor and guide junior ML engineers through code reviews, design sessions, and knowledge-sharing workshops",
      "Partner with product managers and domain experts to translate business problems into well-scoped ML solutions",
      "Stay current with the latest research (NLP, computer vision, tabular ML, LLMs) and evaluate applicability to client problems",
      "Contribute to the team's internal AI/ML knowledge base, tooling standards, and best-practice documentation",
    ],
    requirements: [
      "5+ years of hands-on ML/AI engineering experience with demonstrable production deployments",
      "Deep expertise in Python and at least one major deep learning framework (TensorFlow or PyTorch)",
      "Proven experience with MLOps platforms: MLflow, Kubeflow, Weights & Biases, or AWS SageMaker Pipelines",
      "Solid understanding of classical ML (regression, classification, clustering, ensemble methods) and modern deep learning architectures",
      "Experience deploying and serving models via REST APIs, batch inference, or streaming pipelines (Kafka, Flink)",
      "Strong SQL skills and experience with large-scale data platforms (Spark, BigQuery, Redshift, or similar)",
      "Familiarity with containerization and orchestration (Docker, Kubernetes) for ML workloads",
      "Excellent written and verbal communication skills — able to explain complex ML concepts to non-technical stakeholders",
      "Bachelor's or Master's degree in Computer Science, Statistics, Mathematics, or a related quantitative field",
    ],
    niceToHave: [
      "Experience fine-tuning or deploying large language models (LLMs) using frameworks like Hugging Face Transformers or LangChain",
      "Background in healthcare, financial services, or manufacturing domain applications of AI",
      "Publications or open-source contributions in ML/AI",
      "Familiarity with responsible AI principles, model cards, and fairness toolkits",
    ],
  },
  {
    title: "Full-Stack Software Engineer",
    team: "Product Engineering",
    type: "Full-time",
    location: "Bengaluru (Hybrid)",
    level: "Mid–Senior",
    experience: "3–6 years",
    compensation: "₹18L – ₹35L per annum",
    icon: Code2,
    color: "text-green-400",
    bg: "bg-green-500/10",
    border: "border-green-500/20",
    skills: ["React/Next.js", "Node.js", "TypeScript", "PostgreSQL", "REST/GraphQL", "AWS"],
    desc: "Build and ship full-stack web applications for enterprise clients. Own the frontend experience and backend APIs end-to-end.",
    about:
      "We are hiring a Full-Stack Software Engineer to join our Product Engineering team and help build the next generation of enterprise web applications. You will own features from design to deployment — writing TypeScript on both client and server, collaborating with designers to implement polished UIs, and architecting backend services that scale reliably under enterprise load.\n\nOur engineering culture prioritizes clean code, meaningful code reviews, and technical autonomy with accountability. You will work in fast-moving two-week sprints alongside product managers, designers, and QA engineers, and ship real software to real users every cycle. This role offers strong growth opportunity into a tech lead or senior architect track.",
    responsibilities: [
      "Design, develop, and maintain scalable full-stack web applications using React/Next.js on the frontend and Node.js on the backend",
      "Build and document RESTful and GraphQL APIs, ensuring proper authentication, validation, and error handling",
      "Collaborate closely with UI/UX designers to implement pixel-perfect, accessible, and responsive interfaces",
      "Design database schemas and write optimized queries for PostgreSQL (or other relational databases)",
      "Write comprehensive unit, integration, and end-to-end tests to maintain a high-quality, stable codebase",
      "Participate actively in architecture reviews, technical planning, and sprint ceremonies",
      "Integrate third-party services and APIs (payment gateways, CRMs, cloud storage, analytics platforms)",
      "Conduct peer code reviews, provide constructive feedback, and uphold engineering standards across the team",
      "Identify and resolve performance bottlenecks, memory leaks, and security vulnerabilities proactively",
      "Maintain clear technical documentation for APIs, architecture decisions, and onboarding guides",
    ],
    requirements: [
      "3–6 years of professional full-stack development experience",
      "Strong proficiency in React (hooks, context, performance optimization) and Next.js (SSR, SSG, API routes)",
      "Solid Node.js experience — Express, Fastify, or similar frameworks",
      "TypeScript expertise on both frontend and backend",
      "Experience designing and querying relational databases (PostgreSQL preferred), including indexing and query optimization",
      "Understanding of authentication patterns: JWT, OAuth 2.0, session management",
      "Exposure to cloud infrastructure concepts on AWS, GCP, or Azure",
      "Comfortable with Git workflows, CI/CD pipelines, and deployment processes",
      "Strong written and verbal communication; able to work independently and collaborate cross-functionally",
    ],
    niceToHave: [
      "Experience with React Native or mobile web optimization for enterprise users",
      "Familiarity with microservices architecture, event-driven systems, or message queues (Redis, RabbitMQ, SQS)",
      "Prior work in enterprise SaaS, ERP, or CRM product development",
      "Contributions to open-source projects or a public portfolio of shipped products",
    ],
  },
  {
    title: "Cloud & DevOps Engineer",
    team: "Infrastructure",
    type: "Full-time",
    location: "Bengaluru (Remote OK)",
    level: "Mid–Senior",
    experience: "3–6 years",
    compensation: "₹20L – ₹38L per annum",
    icon: Cloud,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
    skills: ["AWS/Azure/GCP", "Kubernetes", "Terraform", "CI/CD", "Docker", "Prometheus/Grafana"],
    desc: "Architect and manage cloud infrastructure for enterprise clients. Build CI/CD pipelines, automate infrastructure, and ensure 99.9% uptime.",
    about:
      "We are looking for a Cloud & DevOps Engineer who is passionate about building resilient, automated infrastructure at scale. You will be the backbone of our clients' cloud environments — designing multi-cloud architectures, building self-healing CI/CD pipelines, and ensuring systems stay available and performant around the clock.\n\nYou will work closely with software engineers and client infrastructure teams to assess, migrate, and modernize legacy systems to cloud-native environments. This is a high-visibility role with direct client interaction, strong technical ownership, and a clear path to Cloud Architect or Platform Engineering Lead.",
    responsibilities: [
      "Design, provision, and manage cloud infrastructure across AWS, Azure, and/or GCP using infrastructure-as-code (Terraform, Pulumi, or CloudFormation)",
      "Build and maintain robust CI/CD pipelines using GitHub Actions, GitLab CI, Jenkins, or CircleCI to enable continuous delivery",
      "Architect and operate Kubernetes clusters (EKS, AKS, GKE) — including resource management, autoscaling, and security hardening",
      "Implement comprehensive observability stacks: metrics (Prometheus/Grafana), logging (ELK/OpenSearch), and distributed tracing (Jaeger/Zipkin)",
      "Enforce cloud security best practices: IAM least-privilege, secrets management (Vault, AWS Secrets Manager), network segmentation, and compliance controls",
      "Manage incident response, on-call rotations, and post-mortems to drive systemic reliability improvements",
      "Collaborate with development teams to embed DevOps culture — shift-left testing, containerization, and infrastructure-as-code adoption",
      "Perform cloud cost analysis, rightsizing, and reservation planning to optimize infrastructure spend for clients",
      "Conduct disaster recovery planning, backup validation, and multi-region failover testing",
      "Advise clients on cloud migration strategy, including lift-and-shift, re-platforming, and cloud-native refactoring approaches",
    ],
    requirements: [
      "3–6 years of hands-on DevOps/Cloud engineering experience with real production responsibilities",
      "Deep expertise in at least one major cloud provider (AWS preferred) with hands-on IaC experience using Terraform",
      "Proficiency in Kubernetes administration — networking, RBAC, Helm, storage, and troubleshooting",
      "Strong scripting skills in Bash and Python for automation and tooling",
      "Experience building and maintaining CI/CD pipelines at scale",
      "Working knowledge of networking concepts: VPCs, load balancers, DNS, firewalls, VPNs, and TLS/SSL",
      "Understanding of container security, image scanning, and supply chain security principles",
      "Strong problem-solving skills and ability to troubleshoot complex distributed systems under pressure",
    ],
    niceToHave: [
      "AWS, Azure, or GCP professional-level certifications",
      "Experience with service mesh technologies (Istio, Linkerd) or API gateways (Kong, AWS API Gateway)",
      "Background in FinOps — cloud cost governance and multi-cloud spend optimization",
      "Exposure to GitOps workflows using ArgoCD or Flux",
    ],
  },
  {
    title: "QA Automation Engineer",
    team: "Quality Engineering",
    type: "Full-time",
    location: "Bengaluru (Hybrid)",
    level: "Mid",
    experience: "2–5 years",
    compensation: "₹12L – ₹24L per annum",
    icon: GitBranch,
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
    skills: ["Selenium/Playwright", "Cypress", "API Testing", "Performance Testing", "Python/Java", "CI/CD Integration"],
    desc: "Build robust automated test suites for web and mobile applications. Ensure production quality across complex enterprise systems.",
    about:
      "We are hiring a QA Automation Engineer who believes that quality is everyone's responsibility but takes personal ownership of it anyway. In this role, you will build and maintain automated test frameworks that guard our enterprise applications against regressions, performance issues, and integration failures — running thousands of checks on every code push.\n\nYou will work alongside developers from day one of each feature, writing test plans, identifying edge cases, and ensuring that what ships to clients is reliable, fast, and correct. This role is ideal for a QA engineer who wants to grow beyond manual testing into a deeply technical, automation-first quality practice.",
    responsibilities: [
      "Design and implement robust automated test frameworks for web applications using Playwright, Selenium, or Cypress",
      "Develop comprehensive API test suites (functional, contract, and performance) using Postman, REST-assured, or custom frameworks",
      "Integrate automated tests into CI/CD pipelines (GitHub Actions, Jenkins) to provide fast, reliable feedback on every pull request",
      "Conduct performance and load testing using k6, Apache JMeter, or Gatling to validate system behavior under enterprise traffic volumes",
      "Create and maintain detailed test plans, test cases, and bug reports with clear reproduction steps and severity assessments",
      "Collaborate with developers during feature development to review requirements, identify testability gaps, and define acceptance criteria",
      "Perform exploratory testing sessions on new features and releases to catch issues that automated suites may miss",
      "Establish and monitor test coverage metrics, flakiness rates, and overall QA health dashboards",
      "Participate in root cause analysis for production incidents and add regression tests to prevent recurrence",
      "Champion quality best practices, contribute to team standards, and help onboard new engineers to the QA workflow",
    ],
    requirements: [
      "2–5 years of QA automation experience with a strong portfolio of automated test suites",
      "Proficiency in at least one modern UI automation framework: Playwright, Selenium WebDriver, or Cypress",
      "Solid experience testing REST and GraphQL APIs; able to write and interpret complex API test scenarios",
      "Programming skills in Python or Java sufficient to write maintainable, reusable test code",
      "Experience integrating tests into CI/CD pipelines and analyzing test results at scale",
      "Strong analytical skills — ability to break down complex user flows into exhaustive test scenarios",
      "Excellent written communication for bug reports, test documentation, and stakeholder updates",
      "Understanding of Agile/Scrum methodologies and comfort working in sprint-based delivery teams",
    ],
    niceToHave: [
      "ISTQB Foundation or Advanced certification",
      "Experience with mobile testing (Appium, XCUITest, Espresso) for enterprise mobile applications",
      "Familiarity with security testing concepts (OWASP Top 10, SQL injection, XSS validation)",
      "Exposure to visual regression testing tools such as Percy or Chromatic",
    ],
  },
  {
    title: "Data Analyst",
    team: "Data & Analytics",
    type: "Full-time",
    location: "Bengaluru (Hybrid)",
    level: "Junior–Mid",
    experience: "1–4 years",
    compensation: "₹8L – ₹20L per annum",
    icon: BarChart3,
    color: "text-orange-400",
    bg: "bg-orange-500/10",
    border: "border-orange-500/20",
    skills: ["Python/R", "SQL", "Tableau/Power BI", "Statistical Analysis", "Excel/Google Sheets", "dbt"],
    desc: "Transform data into actionable insights for enterprise clients. Build dashboards, run analyses, and tell data-driven stories that drive decisions.",
    about:
      "We are looking for a Data Analyst who is obsessed with turning messy, complex data into clear, compelling stories that drive real business decisions. In this role, you will be embedded with client teams across healthcare, logistics, and retail to understand their data challenges, design the right metrics, and build dashboards that leadership actually uses.\n\nYou do not need to be a data engineer or ML specialist — but you do need deep SQL fluency, strong visualization instincts, and the ability to communicate your findings to both technical and non-technical audiences. This role offers a clear path into senior analytics or a pivot into data science or analytics engineering.",
    responsibilities: [
      "Collect, clean, validate, and transform large datasets from multiple sources (databases, APIs, flat files, cloud storage) into analysis-ready formats",
      "Write complex SQL queries to extract insights from relational and cloud data warehouses (Redshift, BigQuery, Snowflake, or similar)",
      "Build interactive, self-service dashboards and reports in Tableau, Power BI, or Looker for client business stakeholders",
      "Conduct exploratory data analysis (EDA) to identify trends, outliers, correlations, and business opportunities",
      "Define, document, and monitor KPIs and business metrics in collaboration with client operations and product teams",
      "Prepare and present data-driven insights reports to both technical and executive audiences with clear narrative and recommendations",
      "Support data modeling and dbt workflow development alongside data engineering teams",
      "Respond to ad-hoc data requests from internal and client teams with speed, accuracy, and appropriate caveats",
      "Maintain data dictionaries, dashboard documentation, and data lineage records for governed analytics environments",
      "Identify data quality issues and work with engineering to implement upstream fixes and monitoring",
    ],
    requirements: [
      "1–4 years of professional data analysis experience in a business context",
      "Advanced SQL proficiency — window functions, CTEs, subqueries, and performance optimization",
      "Experience building production dashboards in Tableau, Power BI, or Looker consumed by non-technical stakeholders",
      "Comfortable with Python or R for data manipulation (Pandas, NumPy) and basic statistical analysis",
      "Strong statistical reasoning — hypothesis testing, confidence intervals, correlation vs. causation, and descriptive statistics",
      "Excellent data storytelling skills — able to translate numbers into clear, actionable narratives for business audiences",
      "High attention to detail and personal accountability for the accuracy of your outputs",
      "Strong written and verbal communication skills in English; comfortable presenting to senior stakeholders",
    ],
    niceToHave: [
      "Experience with dbt (data build tool) for analytics engineering and data transformation",
      "Familiarity with A/B testing design and statistical significance frameworks",
      "Exposure to cloud data platforms: Google BigQuery, Snowflake, or AWS Redshift",
      "Google Data Analytics, Tableau Desktop Specialist, or Microsoft Power BI certification",
    ],
  },
  {
    title: "UI/UX Designer",
    team: "Design",
    type: "Full-time",
    location: "Bengaluru (Hybrid)",
    level: "Mid–Senior",
    experience: "3–6 years",
    compensation: "₹15L – ₹30L per annum",
    icon: Palette,
    color: "text-pink-400",
    bg: "bg-pink-500/10",
    border: "border-pink-500/20",
    skills: ["Figma", "Design Systems", "User Research", "Prototyping", "Usability Testing", "Motion Design"],
    desc: "Design beautiful, intuitive enterprise software experiences. From user research to high-fidelity prototypes — you'll shape how thousands of people work.",
    about:
      "We are hiring a UI/UX Designer to lead the design of enterprise software products that thousands of professionals rely on every day. This is not a pixel-pushing role — you will own the full user-centered design process from discovery workshops and user interviews through wireframes, prototypes, and polished high-fidelity designs, all the way to working with engineers during implementation.\n\nYou will work closely with product managers, software engineers, and client stakeholders to understand complex business workflows and transform them into experiences that are not just functional, but genuinely delightful to use. If you believe great enterprise software does not have to be ugly or confusing, and you have the portfolio to prove it, we want to hear from you.",
    responsibilities: [
      "Lead end-to-end UX design processes: stakeholder discovery, user interviews, journey mapping, information architecture, wireframing, prototyping, and high-fidelity design",
      "Conduct user research through interviews, contextual inquiry, surveys, and usability testing; synthesize findings into actionable design recommendations",
      "Design and maintain a comprehensive, scalable design system in Figma — components, tokens, patterns, documentation — used across multiple product teams",
      "Create interactive prototypes (low and high fidelity) in Figma for stakeholder reviews, user testing sessions, and developer handoff",
      "Partner closely with frontend engineers during implementation — provide detailed specs, review builds against designs, and iterate on edge cases",
      "Define and track UX success metrics in collaboration with product and analytics teams (task completion rates, error rates, user satisfaction scores)",
      "Facilitate design workshops, design critiques, and stakeholder feedback sessions with both clients and internal teams",
      "Design accessible experiences following WCAG 2.1 AA guidelines and platform-specific accessibility standards",
      "Create motion design specifications and micro-interaction guidelines that bring interfaces to life without sacrificing performance",
      "Advocate for user needs in every product meeting — push back on requirements that harm usability and propose better alternatives",
    ],
    requirements: [
      "3–6 years of UI/UX design experience with a portfolio demonstrating user-centered design for complex digital products",
      "Expert-level Figma proficiency — components, auto-layout, variables/tokens, prototyping, and developer handoff workflows",
      "Experience designing and maintaining component-based design systems at scale",
      "Proven ability to conduct and synthesize qualitative user research and usability tests",
      "Strong visual design fundamentals: typography, color theory, spacing systems, and responsive layout design",
      "Understanding of frontend capabilities and constraints — comfortable discussing implementation details with engineers",
      "Experience designing enterprise or B2B software (dashboards, data tables, multi-step forms, workflow builders) is highly valued",
      "Excellent verbal and written communication — able to present and defend design decisions clearly to cross-functional teams and client stakeholders",
    ],
    niceToHave: [
      "Experience with motion design tools (Principle, Jitter, or After Effects) for defining animation specs",
      "Basic understanding of HTML/CSS sufficient to communicate with engineers and occasionally prototype in code",
      "Background in service design or design thinking facilitation",
      "Certification in UX research methods (Nielsen Norman Group or similar)",
    ],
  },
];

const perks = [
  { icon: Star, label: "Competitive Salary", desc: "Market-leading compensation with performance bonuses", color: "text-yellow-400" },
  { icon: Brain, label: "Learning Budget", desc: "₹50,000/year for courses, certifications, and conferences", color: "text-blue-400" },
  { icon: Heart, label: "Health Coverage", desc: "Comprehensive medical, dental, and vision for you and family", color: "text-rose-400" },
  { icon: Users, label: "Mentorship", desc: "Direct mentorship from senior engineers and leadership", color: "text-cyan-400" },
  { icon: Zap, label: "High-Impact Work", desc: "Work on real enterprise systems used by thousands daily", color: "text-purple-400" },
  { icon: Award, label: "Career Growth", desc: "Clear growth paths with structured promotions and feedback", color: "text-green-400" },
];

const testimonials = [
  {
    name: "Jalapothu Omprakash",
    role: "Senior Associate",
    quote: "Working at Meta Intelligo has been the most intellectually stimulating experience of my career. The culture of innovation, the trust leadership places in every team member, and the quality of enterprise projects we handle — it's everything you want in a technology company.",
  },
];

type Opening = (typeof openings)[number];

function JobDetailsModal({ job, onClose }: { job: Opening; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/75 backdrop-blur-sm"
        onClick={onClose}
      />

      <motion.div
        initial={{ opacity: 0, y: 48, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 48, scale: 0.96 }}
        transition={{ type: "spring", damping: 30, stiffness: 340 }}
        className="relative w-full max-w-2xl max-h-[92vh] flex flex-col rounded-3xl border border-white/[0.10] shadow-2xl"
        style={{ background: "rgba(4, 9, 20, 0.99)" }}
      >
        {/* Sticky Header */}
        <div
          className="flex-shrink-0 flex items-start justify-between gap-4 p-6 border-b border-white/[0.07]"
          style={{ background: "rgba(4, 9, 20, 0.99)" }}
        >
          <div className="flex items-start gap-4">
            <div
              className={`w-12 h-12 rounded-xl ${job.bg} border ${job.border} flex items-center justify-center flex-shrink-0 mt-0.5`}
            >
              <job.icon className={`w-6 h-6 ${job.color}`} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white leading-tight">{job.title}</h2>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-white/40 mt-1.5">
                <span className="flex items-center gap-1.5">
                  <Briefcase className="w-3.5 h-3.5" /> {job.team}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" /> {job.location}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" /> {job.type}
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-3 mt-2">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-white/[0.05] text-white/50 border border-white/[0.08]">
                  {job.level}
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-white/[0.05] text-white/50 border border-white/[0.08]">
                  {job.experience} exp.
                </span>
                <span className={`flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold ${job.bg} ${job.color} border ${job.border}`}>
                  <IndianRupee className="w-3 h-3" />
                  {job.compensation}
                </span>
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-white/40 hover:text-white hover:bg-white/[0.08] transition-all flex-shrink-0 mt-0.5"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="flex-1 min-h-0 overflow-y-auto overscroll-contain p-6 space-y-8" data-lenis-prevent>
          {/* About the Role */}
          <div>
            <h3 className="text-xs font-semibold text-white/30 uppercase tracking-widest mb-3">
              About the Role
            </h3>
            {job.about.split("\n\n").map((para, i) => (
              <p key={i} className={`text-white/65 leading-relaxed text-sm ${i > 0 ? "mt-3" : ""}`}>
                {para}
              </p>
            ))}
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className="text-xs font-semibold text-white/30 uppercase tracking-widest mb-3">
              Tech Stack &amp; Tools
            </h3>
            <div className="flex flex-wrap gap-2">
              {job.skills.map((skill) => (
                <span
                  key={skill}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium ${job.bg} ${job.color} border ${job.border}`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Responsibilities */}
          <div>
            <h3 className="text-xs font-semibold text-white/30 uppercase tracking-widest mb-3">
              What You&apos;ll Do
            </h3>
            <ul className="space-y-3">
              {job.responsibilities.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-white/65 leading-relaxed">
                  <CheckCircle2
                    className={`w-4 h-4 mt-0.5 flex-shrink-0 ${job.color}`}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Requirements */}
          <div>
            <h3 className="text-xs font-semibold text-white/30 uppercase tracking-widest mb-3">
              What We&apos;re Looking For
            </h3>
            <ul className="space-y-3">
              {job.requirements.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-white/65 leading-relaxed">
                  <div
                    className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${job.color.replace("text-", "bg-")}`}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Nice to Have */}
          <div className={`rounded-2xl p-5 border ${job.border} ${job.bg}`}>
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className={`w-4 h-4 ${job.color}`} />
              <h3 className={`text-xs font-semibold uppercase tracking-widest ${job.color}`}>
                Nice to Have
              </h3>
            </div>
            <ul className="space-y-2.5">
              {job.niceToHave.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-white/55 leading-relaxed">
                  <div className={`w-1 h-1 rounded-full mt-2 flex-shrink-0 opacity-60 ${job.color.replace("text-", "bg-")}`} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Sticky Footer — Apply Now */}
        <div
          className="flex-shrink-0 flex items-center justify-between gap-4 px-6 py-4 border-t border-white/[0.07]"
          style={{ background: "rgba(4, 9, 20, 0.99)" }}
        >
          <div>
            <p className="text-sm font-medium text-white">Ready to apply?</p>
            <p className="text-xs text-white/40 mt-0.5">Takes less than 5 minutes</p>
          </div>
          <a
            href={APPLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary px-6 py-3 text-sm inline-flex flex-shrink-0"
          >
            Apply Now <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </motion.div>
    </div>
  );
}

export function CareersPage() {
  const [selectedJob, setSelectedJob] = useState<Opening | null>(null);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-24 overflow-hidden bg-space-950">
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute inset-0 grid-bg opacity-20" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="section-tag mx-auto mb-6"
          >
            Join Our Team
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-6"
          >
            Build your best work
            <br />
            <span className="text-gradient">at Meta Intelligo</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/50 max-w-2xl mx-auto mb-10"
          >
            Join a team of engineers, data scientists, and designers solving
            complex enterprise challenges with AI, cloud, and modern software.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-center gap-4"
          >
            <a href="#openings" className="btn-primary px-8 py-4">
              View Open Roles <ArrowRight className="w-4 h-4" />
            </a>
            <a href="mailto:careers@metaintelligo.com" className="btn-secondary px-8 py-4">
              Send Us Your Resume
            </a>
          </motion.div>
        </div>
      </section>

      {/* Culture Stats */}
      <section className="relative py-16 bg-space-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {[
              { value: "50+", label: "Team Members", color: "text-blue-400" },
              { value: "4.8★", label: "Glassdoor Rating", color: "text-yellow-400" },
              { value: "92%", label: "Employee Satisfaction", color: "text-green-400" },
              { value: "8+", label: "Years of Growth", color: "text-purple-400" },
            ].map((stat) => (
              <div key={stat.label} className="glass-card rounded-2xl p-6 text-center">
                <div className={`text-3xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
                <div className="text-sm text-white/40">{stat.label}</div>
              </div>
            ))}
          </div>

          <AnimatedSection>
            <div className="glass-card rounded-2xl p-8 md:p-10">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="relative w-16 h-16 rounded-2xl overflow-hidden flex-shrink-0 ring-2 ring-cyan-500/40 shadow-lg">
                  <Image
                    src="/images/testimonials/person_1.png"
                    alt={testimonials[0].name}
                    fill
                    className="object-cover object-top"
                    sizes="64px"
                  />
                </div>
                <div>
                  <p className="text-white/70 text-lg leading-relaxed italic mb-4">
                    &ldquo;{testimonials[0].quote}&rdquo;
                  </p>
                  <div className="text-sm font-bold text-white">{testimonials[0].name}</div>
                  <div className="text-sm text-white/40">
                    {testimonials[0].role} · Meta Intelligo Technologies
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Open Roles */}
      <section id="openings" className="relative py-20 bg-space-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-12">
            <div className="section-tag mb-5">Open Positions</div>
            <h2 className="text-4xl font-bold text-white tracking-tight mb-3">
              We&apos;re <span className="text-gradient">actively hiring</span>
            </h2>
            <p className="text-white/50">
              Can&apos;t find the right role? Email{" "}
              <a
                href="mailto:careers@metaintelligo.com"
                className="text-blue-400 hover:underline"
              >
                careers@metaintelligo.com
              </a>{" "}
              with your resume.
            </p>
          </AnimatedSection>

          <div className="space-y-4">
            {openings.map((job, i) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="glass-card rounded-2xl p-6 group card-hover"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-5">
                  <div
                    className={`w-12 h-12 rounded-xl ${job.bg} border ${job.border} flex items-center justify-center flex-shrink-0`}
                  >
                    <job.icon className={`w-6 h-6 ${job.color}`} />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="text-lg font-bold text-white">{job.title}</h3>
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-white/[0.04] text-white/40 border border-white/[0.06]">
                        {job.level}
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-white/40 mb-2">
                      <span className="flex items-center gap-1.5">
                        <Briefcase className="w-3.5 h-3.5" /> {job.team}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5" /> {job.location}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" /> {job.type}
                      </span>
                      <span className={`flex items-center gap-1 font-medium ${job.color}`}>
                        <IndianRupee className="w-3.5 h-3.5" /> {job.compensation}
                      </span>
                    </div>
                    <p className="text-sm text-white/50 mb-3">{job.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {job.skills.slice(0, 4).map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 py-1 rounded-lg text-xs font-medium bg-white/[0.04] text-white/40 border border-white/[0.06]"
                        >
                          {skill}
                        </span>
                      ))}
                      {job.skills.length > 4 && (
                        <span className="px-2.5 py-1 rounded-lg text-xs font-medium bg-white/[0.04] text-white/30 border border-white/[0.06]">
                          +{job.skills.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedJob(job)}
                    className="btn-secondary flex-shrink-0 text-sm px-5 py-2.5 inline-flex"
                  >
                    Job Details <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Perks */}
      <section className="relative py-20 bg-space-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <div className="section-tag mx-auto mb-5">Life at Meta Intelligo</div>
            <h2 className="text-4xl font-bold text-white tracking-tight mb-3">
              Benefits designed for <span className="text-gradient">great people</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {perks.map((perk, i) => (
              <motion.div
                key={perk.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass-card rounded-2xl p-6 card-hover"
              >
                <perk.icon className={`w-8 h-8 ${perk.color} mb-4`} />
                <h3 className="text-base font-bold text-white mb-2">{perk.label}</h3>
                <p className="text-sm text-white/50">{perk.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />

      {/* Job Details Modal */}
      <AnimatePresence>
        {selectedJob && (
          <JobDetailsModal job={selectedJob} onClose={() => setSelectedJob(null)} />
        )}
      </AnimatePresence>
    </>
  );
}
