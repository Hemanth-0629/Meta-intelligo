"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Quote, Star, ArrowRight, ExternalLink } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import Link from "next/link";

// Real people from Meta Intelligo — photos extracted from company PDF
const testimonials = [
  {
    name: "Enimireddy Krishnareddy",
    role: "Data Analyst",
    company: "Ernst & Young (E&Y)",
    companyShort: "E&Y",
    image: "/images/testimonials/person_0.png",
    rating: 5,
    quote:
      "Meta Intelligo's AI training program completely transformed my career. The hands-on curriculum and mentorship from industry practitioners gave me real-world skills that Ernst & Young looks for. Within months, I transitioned into a Data Analyst role at one of the Big Four.",
    highlight: "Big Four placement",
    highlight_color: "text-blue-400",
    badge_bg: "bg-blue-500/10 border-blue-500/20",
    avatar_border: "ring-blue-500/40",
  },
  {
    name: "Jalapothu Omprakash",
    role: "Senior Associate",
    company: "Meta Intelligo Technologies",
    companyShort: "Meta Intelligo",
    image: "/images/testimonials/person_1.png",
    rating: 5,
    quote:
      "Working at Meta Intelligo has been the most intellectually stimulating experience of my career. The culture of innovation, the trust leadership places in every team member, and the quality of enterprise projects we handle — it's everything you want in a technology company.",
    highlight: "Innovation culture",
    highlight_color: "text-cyan-400",
    badge_bg: "bg-cyan-500/10 border-cyan-500/20",
    avatar_border: "ring-cyan-500/40",
  },
  {
    name: "Bindu Sree",
    role: "Senior Tester",
    company: "Infosys",
    companyShort: "Infosys",
    image: "/images/testimonials/person_2.png",
    rating: 5,
    quote:
      "The QA automation skills I developed through Meta Intelligo's program directly enabled me to land my role at Infosys. Training went far beyond theory — we built real automation frameworks on actual production systems. That practical depth is what sets Meta Intelligo apart.",
    highlight: "Infosys placement",
    highlight_color: "text-purple-400",
    badge_bg: "bg-purple-500/10 border-purple-500/20",
    avatar_border: "ring-purple-500/40",
  },
];

const placedAt = ["E&Y", "Infosys", "TCS", "Wipro", "Accenture", "Deloitte", "IBM", "Capgemini", "Cognizant", "HCL"];

export function TestimonialsSection() {
  return (
    <section className="relative py-28 overflow-hidden bg-space-950">
      <div className="absolute inset-0 section-gradient opacity-40" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <div className="section-tag mx-auto mb-5">Real Success Stories</div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Trusted by professionals at
            <br />
            <span className="text-gradient">world-class organizations</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            Our graduates and team members go on to shape the future of enterprise
            technology at leading global organizations.
          </p>
        </AnimatedSection>

        {/* Testimonial Cards with real photos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="relative glass-card rounded-2xl p-7 card-hover group flex flex-col"
            >
              {/* Background glow on hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-white/[0.03] to-transparent" />

              {/* Quote icon */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-30 transition-opacity">
                <Quote className="w-10 h-10 text-blue-400" />
              </div>

              <div className="relative z-10 flex flex-col flex-1">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Highlight badge */}
                <span
                  className={`inline-flex items-center self-start px-3 py-1 rounded-full text-xs font-semibold border mb-4 ${t.badge_bg} ${t.highlight_color}`}
                >
                  {t.highlight}
                </span>

                {/* Quote */}
                <p className="text-sm text-white/60 leading-relaxed flex-1 italic mb-7">
                  &ldquo;{t.quote}&rdquo;
                </p>

                {/* Author row with REAL photo */}
                <div className="flex items-center gap-4 pt-5 border-t border-white/[0.06]">
                  {/* Real photo */}
                  <div className={`relative w-14 h-14 rounded-2xl overflow-hidden flex-shrink-0 ring-2 ${t.avatar_border} shadow-lg`}>
                    <Image
                      src={t.image}
                      alt={t.name}
                      fill
                      className="object-cover object-top"
                      sizes="56px"
                    />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white leading-snug">{t.name}</div>
                    <div className="text-xs text-white/50 mt-0.5">{t.role}</div>
                    <div className={`text-xs font-semibold mt-0.5 ${t.highlight_color}`}>
                      {t.companyShort}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Placement companies row */}
        <AnimatedSection>
          <div className="glass-card rounded-2xl p-8">
            <p className="text-center text-xs font-semibold text-white/30 uppercase tracking-widest mb-7">
              Our alumni and team members are placed at
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {placedAt.map((company) => (
                <span
                  key={company}
                  className="px-5 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06] text-sm font-semibold text-white/30 hover:text-white/60 hover:bg-white/[0.06] transition-all cursor-default"
                >
                  {company}
                </span>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link href="/careers" className="inline-flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors">
                Join our team or placement program
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
