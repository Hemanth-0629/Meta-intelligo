"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ExternalLink,
  TrendingUp,
  Download,
  Star,
  Clock,
  Users,
  Zap,
} from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { CTASection } from "@/sections/home/CTASection";

const projects = [
  {
    id: "retail-analytics",
    title: "Retail Analytics Platform",
    category: "AI & Data Engineering",
    industry: "Retail",
    client: "Mid-Size Retail Chain",
    duration: "6 months",
    team: "8 engineers",
    desc: "Built an AI-powered retail analytics platform with demand forecasting, inventory optimization, real-time sales intelligence, and automated replenishment workflows. The platform integrates with POS systems, e-commerce, and warehouse management to provide a single source of truth for business decision-making.",
    challenge:
      "The client was making inventory decisions based on gut feel, resulting in 20–30% overstock and frequent stockouts on high-demand items. Sales data existed in siloed systems across 40+ store locations.",
    solution:
      "We built a unified data lake on AWS, implemented real-time data pipelines using Kinesis, developed ML forecasting models using XGBoost and LSTM neural networks, and delivered dashboards with drill-down analytics for store managers and executives.",
    metrics: [
      { label: "Forecast Accuracy", value: "94%", icon: TrendingUp, color: "text-blue-400" },
      { label: "Inventory Waste", value: "-38%", icon: Zap, color: "text-green-400" },
      { label: "Revenue Lift", value: "+22%", icon: Star, color: "text-yellow-400" },
      { label: "ROI", value: "340%", icon: TrendingUp, color: "text-purple-400" },
    ],
    tech: ["Python", "TensorFlow", "AWS Kinesis", "AWS S3", "React", "PostgreSQL", "Airflow", "Docker"],
    accent: "text-blue-400",
    border: "border-blue-500/20",
    bg: "bg-blue-500/10",
    gradient: "from-blue-500/20 to-indigo-500/10",
  },
  {
    id: "find-my-future",
    title: "Find My Future — EdTech App",
    category: "Mobile Product Engineering",
    industry: "Education",
    client: "EdTech Startup",
    duration: "4 months",
    team: "5 engineers",
    desc: "End-to-end mobile education platform connecting students with career guidance, industry mentors, and structured skill-building pathways. The app includes AI-powered career recommendation, mentor matching, live Q&A sessions, and gamified learning modules.",
    challenge:
      "Students in Tier-2 and Tier-3 cities lacked access to quality career guidance and industry mentors. The startup needed a scalable platform to reach 100,000 students without heavy infrastructure costs.",
    solution:
      "We delivered a React Native app for iOS and Android, a Node.js backend with real-time video using Agora, mentor matching via collaborative filtering, push notification infrastructure, and an admin dashboard for content management and analytics.",
    metrics: [
      { label: "Downloads", value: "10K+", icon: Download, color: "text-green-400" },
      { label: "App Rating", value: "4.7★", icon: Star, color: "text-yellow-400" },
      { label: "User Retention", value: "78%", icon: Users, color: "text-blue-400" },
      { label: "Sessions/User", value: "14/mo", icon: Clock, color: "text-purple-400" },
    ],
    tech: ["React Native", "Node.js", "MongoDB", "Firebase", "AWS", "Agora", "Redux", "Stripe"],
    accent: "text-green-400",
    border: "border-green-500/20",
    bg: "bg-green-500/10",
    gradient: "from-green-500/20 to-teal-500/10",
  },
  {
    id: "aws-migration",
    title: "Enterprise ERP Cloud Migration",
    category: "Cloud & DevOps",
    industry: "Manufacturing",
    client: "Mid-Market Manufacturer",
    duration: "8 months",
    team: "10 engineers",
    desc: "Migrated a 15-year-old monolithic on-premises ERP system to a cloud-native microservices architecture on AWS. The new architecture handles 10× the transaction volume with automated scaling, zero-downtime deployments, and comprehensive observability.",
    challenge:
      "The legacy ERP ran on aging on-premises hardware with 6-hour deployment windows and frequent outages. Infrastructure costs consumed 40% of the IT budget with no scalability headroom.",
    solution:
      "We decomposed the monolith into 22 microservices using domain-driven design, containerized with Docker, orchestrated with AWS ECS, implemented a CI/CD pipeline with GitHub Actions, and set up full observability with CloudWatch, Datadog, and PagerDuty alerting.",
    metrics: [
      { label: "Deploy Time Reduction", value: "65%", icon: Zap, color: "text-orange-400" },
      { label: "Cost Savings", value: "40%", icon: TrendingUp, color: "text-green-400" },
      { label: "System Uptime", value: "99.9%", icon: Clock, color: "text-blue-400" },
      { label: "Scale Capacity", value: "10×", icon: Star, color: "text-purple-400" },
    ],
    tech: ["AWS ECS", "Docker", "Terraform", "GitHub Actions", "CloudWatch", "Datadog", "PostgreSQL", "RabbitMQ"],
    accent: "text-orange-400",
    border: "border-orange-500/20",
    bg: "bg-orange-500/10",
    gradient: "from-orange-500/20 to-amber-500/10",
  },
  {
    id: "real-estate",
    title: "Real Estate Lead Platform",
    category: "Digital Transformation",
    industry: "Real Estate",
    client: "Regional Real Estate Agency",
    duration: "3 months",
    team: "4 engineers",
    desc: "Complete digital redesign and conversion optimization for a real estate agency. The engagement included a new website, AI-powered chatbot for lead qualification, HubSpot CRM integration, automated email nurture sequences, and WhatsApp follow-up automation.",
    challenge:
      "The agency's existing website had a 78% bounce rate and generated fewer than 20 qualified leads per month despite strong organic traffic. Sales team was spending 60% of their time on unqualified follow-ups.",
    solution:
      "We redesigned the site with conversion-first UX, built an AI chatbot that qualifies leads with 5 key questions before routing to the right agent, integrated HubSpot CRM, automated WhatsApp follow-ups via Twilio, and set up analytics dashboards to track lead quality.",
    metrics: [
      { label: "Lead Growth", value: "3×", icon: TrendingUp, color: "text-purple-400" },
      { label: "Bounce Rate", value: "-52%", icon: Zap, color: "text-red-400" },
      { label: "Conversion Rate", value: "+180%", icon: Star, color: "text-yellow-400" },
      { label: "Qualified Leads/mo", value: "60+", icon: Users, color: "text-blue-400" },
    ],
    tech: ["Next.js", "Tailwind CSS", "HubSpot", "OpenAI API", "Twilio", "Vercel", "Framer Motion", "Google Analytics"],
    accent: "text-purple-400",
    border: "border-purple-500/20",
    bg: "bg-purple-500/10",
    gradient: "from-purple-500/20 to-pink-500/10",
  },
];

export function PortfolioPageFull() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-20 overflow-hidden bg-space-950">
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute inset-0 grid-bg opacity-20" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="section-tag mx-auto mb-6"
          >
            Our Work
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-6"
          >
            Projects that define
            <br />
            <span className="text-gradient">enterprise excellence</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-white/50 max-w-2xl mx-auto"
          >
            Real results for real enterprises. Each case study is a story of
            transformation, innovation, and measurable impact.
          </motion.p>
        </div>
      </section>

      {/* Projects */}
      <section className="relative py-16 bg-space-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              id={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7 }}
              className="relative glass-card rounded-2xl overflow-hidden"
            >
              {/* Accent gradient */}
              <div className={`h-1 bg-gradient-to-r ${project.gradient.replace("/20", "/60").replace("/10", "/30")}`} />

              <div className="p-8 md:p-10">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-8">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className={`badge ${project.accent}`}>{project.category}</span>
                      <span className="badge text-white/40">{project.industry}</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">{project.title}</h2>
                    <div className="flex items-center gap-4 text-sm text-white/40">
                      <span className="flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5" /> {project.client}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" /> {project.duration}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5" /> {project.team}
                      </span>
                    </div>
                  </div>
                  <Link href="/contact" className="btn-secondary flex-shrink-0 text-sm px-5 py-2.5 inline-flex">
                    Build Something Similar <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                {/* Overview */}
                <p className="text-white/60 leading-relaxed mb-8">{project.desc}</p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  {/* Challenge */}
                  <div>
                    <h3 className="text-xs font-semibold text-white/30 uppercase tracking-widest mb-3">The Challenge</h3>
                    <p className="text-sm text-white/50 leading-relaxed">{project.challenge}</p>
                  </div>
                  {/* Solution */}
                  <div>
                    <h3 className="text-xs font-semibold text-white/30 uppercase tracking-widest mb-3">Our Solution</h3>
                    <p className="text-sm text-white/50 leading-relaxed">{project.solution}</p>
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  {project.metrics.map((m) => (
                    <div key={m.label} className="bg-white/[0.04] rounded-xl p-4 text-center">
                      <m.icon className={`w-5 h-5 ${m.color} mx-auto mb-2`} />
                      <div className={`text-2xl font-bold ${m.color} mb-1`}>{m.value}</div>
                      <div className="text-xs text-white/40">{m.label}</div>
                    </div>
                  ))}
                </div>

                {/* Tech Stack */}
                <div>
                  <h3 className="text-xs font-semibold text-white/30 uppercase tracking-widest mb-3">
                    Technology Stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 rounded-lg text-xs font-medium bg-white/[0.04] text-white/50 border border-white/[0.06] hover:text-white/70 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
