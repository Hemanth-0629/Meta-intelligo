"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
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
} from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { CTASection } from "@/sections/home/CTASection";

const openings = [
  {
    title: "Senior AI/ML Engineer",
    team: "AI & Data",
    type: "Full-time",
    location: "Bengaluru (Hybrid)",
    level: "Senior",
    icon: Brain,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    skills: ["Python", "TensorFlow/PyTorch", "MLOps", "AWS SageMaker"],
    desc: "Design and deploy production ML models at enterprise scale. You'll work on high-impact AI systems across healthcare, finance, and retail verticals.",
  },
  {
    title: "Full-Stack Software Engineer",
    team: "Product Engineering",
    type: "Full-time",
    location: "Bengaluru (Hybrid)",
    level: "Mid–Senior",
    icon: Code2,
    color: "text-green-400",
    bg: "bg-green-500/10",
    border: "border-green-500/20",
    skills: ["React/Next.js", "Node.js", "TypeScript", "PostgreSQL"],
    desc: "Build and ship full-stack web applications for enterprise clients. Own the frontend experience and backend APIs end-to-end.",
  },
  {
    title: "Cloud & DevOps Engineer",
    team: "Infrastructure",
    type: "Full-time",
    location: "Bengaluru (Remote OK)",
    level: "Mid–Senior",
    icon: Cloud,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
    skills: ["AWS/Azure/GCP", "Kubernetes", "Terraform", "CI/CD"],
    desc: "Architect and manage cloud infrastructure for enterprise clients. Build CI/CD pipelines, automate infrastructure, and ensure 99.9% uptime.",
  },
  {
    title: "QA Automation Engineer",
    team: "Quality Engineering",
    type: "Full-time",
    location: "Bengaluru (Hybrid)",
    level: "Mid",
    icon: GitBranch,
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
    skills: ["Selenium/Playwright", "Cypress", "API Testing", "Performance Testing"],
    desc: "Build robust automated test suites for web and mobile applications. Ensure production quality across complex enterprise systems.",
  },
  {
    title: "Data Analyst",
    team: "Data & Analytics",
    type: "Full-time",
    location: "Bengaluru (Hybrid)",
    level: "Junior–Mid",
    icon: BarChart3,
    color: "text-orange-400",
    bg: "bg-orange-500/10",
    border: "border-orange-500/20",
    skills: ["Python/R", "SQL", "Tableau/Power BI", "Statistical Analysis"],
    desc: "Transform data into actionable insights for enterprise clients. Build dashboards, run analyses, and tell data-driven stories that drive decisions.",
  },
  {
    title: "UI/UX Designer",
    team: "Design",
    type: "Full-time",
    location: "Bengaluru (Hybrid)",
    level: "Mid–Senior",
    icon: Palette,
    color: "text-pink-400",
    bg: "bg-pink-500/10",
    border: "border-pink-500/20",
    skills: ["Figma", "Design Systems", "User Research", "Prototyping"],
    desc: "Design beautiful, intuitive enterprise software experiences. From user research to high-fidelity prototypes — you'll shape how thousands of people work.",
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
    initials: "JO",
    gradient: "from-cyan-500 to-blue-600",
    quote: "Working at Meta Intelligo has been the most intellectually stimulating experience of my career. The culture of innovation, the trust leadership places in every team member, and the quality of enterprise projects we handle — it's everything you want in a technology company.",
  },
];

export function CareersPage() {
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
            <a
              href="mailto:careers@metaintelligo.com"
              className="btn-secondary px-8 py-4"
            >
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

          {/* Testimonial */}
          <AnimatedSection>
            <div className="glass-card rounded-2xl p-8 md:p-10">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                {/* Real photo of Jalapothu Omprakash */}
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
                  <div className="text-sm text-white/40">{testimonials[0].role} · Meta Intelligo Technologies</div>
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
              <a href="mailto:careers@metaintelligo.com" className="text-blue-400 hover:underline">
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

                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="text-lg font-bold text-white">{job.title}</h3>
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-white/[0.04] text-white/40 border border-white/[0.06]">
                        {job.level}
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-white/40 mb-3">
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
                    <p className="text-sm text-white/50 mb-3">{job.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {job.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 py-1 rounded-lg text-xs font-medium bg-white/[0.04] text-white/40 border border-white/[0.06]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a
                    href="mailto:careers@metaintelligo.com"
                    className="btn-primary flex-shrink-0 text-sm px-5 py-2.5 inline-flex"
                  >
                    Apply Now <ArrowRight className="w-4 h-4" />
                  </a>
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
    </>
  );
}
