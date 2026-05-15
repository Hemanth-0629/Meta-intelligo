"use client";

import { motion } from "framer-motion";
import { Database, Heart, Shield, Lightbulb, Users, Smile } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const values = [
  {
    icon: Database,
    label: "Data With Purpose",
    desc: "Every decision we make is grounded in data. Insights drive strategy, not assumptions.",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
  },
  {
    icon: Heart,
    label: "Customer First",
    desc: "Our clients' success is our success. We build long-term partnerships, not just projects.",
    color: "text-rose-400",
    bg: "bg-rose-500/10",
    border: "border-rose-500/20",
  },
  {
    icon: Shield,
    label: "Act With Ownership",
    desc: "We take full accountability for outcomes. Every team member owns the impact of their work.",
    color: "text-green-400",
    bg: "bg-green-500/10",
    border: "border-green-500/20",
  },
  {
    icon: Lightbulb,
    label: "Think Forward",
    desc: "We anticipate tomorrow's challenges today, building solutions that scale with the future.",
    color: "text-yellow-400",
    bg: "bg-yellow-500/10",
    border: "border-yellow-500/20",
  },
  {
    icon: Users,
    label: "Move as One",
    desc: "Collaboration without silos. Our cross-functional teams deliver unified, coherent solutions.",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
  },
  {
    icon: Smile,
    label: "Keep It Human",
    desc: "Technology serves people. We design every solution with empathy, usability, and impact in mind.",
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
  },
];

export function ValuesSection() {
  return (
    <section className="relative py-28 overflow-hidden bg-space-950">
      <div className="absolute inset-0 dot-bg opacity-20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <div className="section-tag mx-auto mb-5">Our DNA</div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            The principles that{" "}
            <span className="text-gradient">guide everything</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            Six core values that define how we work, how we build, and how we
            serve our clients every single day.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {values.map((value, i) => (
            <motion.div
              key={value.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="glass-card rounded-2xl p-7 card-hover group"
            >
              <div
                className={`w-12 h-12 rounded-xl ${value.bg} border ${value.border} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}
              >
                <value.icon className={`w-6 h-6 ${value.color}`} />
              </div>
              <h3 className={`text-lg font-bold mb-2 ${value.color}`}>
                {value.label}
              </h3>
              <p className="text-sm text-white/50 leading-relaxed">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
