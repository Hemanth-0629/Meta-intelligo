"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, TrendingUp, Download, Star } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const projects = [
  {
    title: "Retail Analytics Platform",
    category: "AI & Data Engineering",
    desc: "Built an AI-powered retail analytics platform with demand forecasting, inventory optimization, and real-time sales intelligence for a mid-size retail chain.",
    metrics: [
      { label: "Forecast Accuracy", value: "94%" },
      { label: "Inventory Waste", value: "-38%" },
      { label: "Revenue Lift", value: "+22%" },
    ],
    tech: ["Python", "TensorFlow", "AWS", "React", "PostgreSQL"],
    gradient: "from-blue-500/20 to-indigo-500/10",
    accent: "text-blue-400",
    href: "/portfolio#retail-analytics",
  },
  {
    title: "Find My Future — EdTech App",
    category: "Mobile Product Engineering",
    desc: "End-to-end mobile education platform connecting students with career guidance, mentors, and skill-building pathways. Achieved 10,000+ downloads in the first quarter.",
    metrics: [
      { label: "Downloads", value: "10K+" },
      { label: "App Rating", value: "4.7★" },
      { label: "User Retention", value: "78%" },
    ],
    tech: ["React Native", "Node.js", "MongoDB", "Firebase", "AWS"],
    gradient: "from-green-500/20 to-teal-500/10",
    accent: "text-green-400",
    href: "/portfolio#find-my-future",
  },
  {
    title: "AWS Cloud Migration",
    category: "Cloud & DevOps",
    desc: "Migrated a legacy enterprise ERP to a cloud-native microservices architecture on AWS. Achieved dramatic reductions in deployment time and infrastructure costs.",
    metrics: [
      { label: "Deploy Time", value: "-65%" },
      { label: "Cost Savings", value: "40%" },
      { label: "Uptime", value: "99.9%" },
    ],
    tech: ["AWS ECS", "Terraform", "Docker", "GitHub Actions", "CloudWatch"],
    gradient: "from-orange-500/20 to-amber-500/10",
    accent: "text-orange-400",
    href: "/portfolio#aws-migration",
  },
  {
    title: "Real Estate Lead Platform",
    category: "Digital Transformation",
    desc: "Complete digital redesign and marketing automation integration for a real estate agency. Tripled qualified lead volume through conversion-focused UX and AI chatbot integration.",
    metrics: [
      { label: "Lead Growth", value: "3×" },
      { label: "Bounce Rate", value: "-52%" },
      { label: "Conversion", value: "+180%" },
    ],
    tech: ["Next.js", "Tailwind CSS", "HubSpot", "Vercel", "Framer"],
    gradient: "from-purple-500/20 to-pink-500/10",
    accent: "text-purple-400",
    href: "/portfolio#real-estate",
  },
];

export function PortfolioSection() {
  return (
    <section className="relative py-28 overflow-hidden bg-space-900">
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <div className="section-tag mx-auto mb-5">Our Work</div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Projects that define{" "}
            <span className="text-gradient">enterprise excellence</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto text-lg">
            Real results for real businesses. Each engagement is a story of
            transformation, innovation, and measurable impact.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: (i % 2) * 0.1 }}
            >
              <Link href={project.href} className="block h-full group">
                <div className="relative h-full glass-card rounded-2xl p-8 card-hover overflow-hidden">
                  {/* Gradient bg on hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}
                  />

                  <div className="relative z-10">
                    {/* Category */}
                    <div className="flex items-center justify-between mb-5">
                      <span className={`badge ${project.accent.replace("text-", "text-")}`}>
                        {project.category}
                      </span>
                      <ExternalLink className={`w-4 h-4 ${project.accent} opacity-0 group-hover:opacity-100 transition-opacity`} />
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-white/50 leading-relaxed mb-6">
                      {project.desc}
                    </p>

                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-3 mb-6">
                      {project.metrics.map((m) => (
                        <div
                          key={m.label}
                          className="bg-white/[0.04] rounded-xl p-3 text-center"
                        >
                          <div className={`text-xl font-bold ${project.accent} mb-0.5`}>
                            {m.value}
                          </div>
                          <div className="text-[10px] text-white/40 leading-tight">
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-lg text-[11px] font-medium bg-white/[0.04] text-white/40 border border-white/[0.06]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <AnimatedSection className="text-center">
          <Link href="/portfolio" className="btn-primary px-8 py-4 inline-flex">
            View Full Portfolio <ArrowRight className="w-4 h-4" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
