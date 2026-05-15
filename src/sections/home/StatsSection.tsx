"use client";

import { useRef } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { AnimatedSection, StaggerContainer, staggerItem } from "@/components/ui/AnimatedSection";
import { motion } from "framer-motion";
import { TrendingUp, Users, Award, Clock } from "lucide-react";

const stats = [
  {
    value: 1000,
    suffix: "+",
    label: "Global Clients Served",
    desc: "Across 20+ countries",
    icon: Users,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
  },
  {
    value: 65,
    suffix: "%",
    label: "Average Cost Reduction",
    desc: "Through cloud & automation",
    icon: TrendingUp,
    color: "text-green-400",
    bg: "bg-green-500/10",
    border: "border-green-500/20",
  },
  {
    value: 8,
    suffix: "+",
    label: "Years of Excellence",
    desc: "Enterprise technology delivery",
    icon: Award,
    color: "text-yellow-400",
    bg: "bg-yellow-500/10",
    border: "border-yellow-500/20",
  },
  {
    value: 99.9,
    suffix: "%",
    label: "Uptime SLA",
    desc: "24/7 managed services",
    icon: Clock,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
    decimals: 1,
  },
];

function StatCard({ stat, index }: { stat: (typeof stats)[0]; index: number }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="relative glass-card rounded-2xl p-8 card-hover group"
    >
      {/* Glow on hover */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-blue-500/5 to-transparent" />

      <div className={`w-12 h-12 rounded-xl ${stat.bg} border ${stat.border} flex items-center justify-center mb-5`}>
        <stat.icon className={`w-6 h-6 ${stat.color}`} />
      </div>

      <div className={`text-5xl font-bold ${stat.color} mb-2 tracking-tight`}>
        {inView ? (
          <CountUp
            end={stat.value}
            suffix={stat.suffix}
            duration={2.5}
            decimals={(stat as any).decimals || 0}
            separator=","
          />
        ) : (
          "0" + stat.suffix
        )}
      </div>
      <div className="text-base font-semibold text-white mb-1">{stat.label}</div>
      <div className="text-sm text-white/40">{stat.desc}</div>
    </motion.div>
  );
}

const techPartners = [
  "AWS", "Google Cloud", "Microsoft Azure", "Kubernetes", "Docker",
  "React", "Node.js", "Python", "TensorFlow", "PostgreSQL"
];

export function StatsSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 section-gradient" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <div className="section-tag mx-auto mb-5">Impact That Matters</div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Numbers that tell our story
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            Measurable results delivered to enterprises worldwide. Every metric
            represents real transformation and lasting value.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} />
          ))}
        </div>

        {/* Tech Partners Marquee */}
        <AnimatedSection>
          <div className="glass-card rounded-2xl p-8">
            <p className="text-center text-xs font-semibold text-white/30 uppercase tracking-widest mb-8">
              Powered by industry-leading technologies
            </p>
            <div className="relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-space-800/80 to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-space-800/80 to-transparent z-10 pointer-events-none" />
              <motion.div
                className="flex gap-12 items-center"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                {[...techPartners, ...techPartners].map((tech, i) => (
                  <span
                    key={`${tech}-${i}`}
                    className="text-sm font-semibold text-white/30 hover:text-white/60 transition-colors whitespace-nowrap"
                  >
                    {tech}
                  </span>
                ))}
              </motion.div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
