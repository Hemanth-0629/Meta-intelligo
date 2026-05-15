"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Heart,
  Banknote,
  ShieldCheck,
  Factory,
  ShoppingBag,
  Truck,
  Building2,
  LayoutDashboard,
  ArrowRight,
} from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const industries = [
  {
    icon: Heart,
    label: "Healthcare",
    desc: "HIPAA-compliant platforms, patient data management, telemedicine, and AI-powered diagnostics.",
    href: "/industries#healthcare",
    color: "text-rose-400",
    bg: "bg-rose-500/10",
    border: "border-rose-500/20",
    stat: "40% efficiency gain",
  },
  {
    icon: Banknote,
    label: "Banking & Finance",
    desc: "Core banking modernization, fraud detection, regulatory compliance, and real-time analytics.",
    href: "/industries#banking",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    stat: "99.99% transaction accuracy",
  },
  {
    icon: ShieldCheck,
    label: "Insurance",
    desc: "Claims automation, underwriting intelligence, policy management, and customer portals.",
    href: "/industries#insurance",
    color: "text-green-400",
    bg: "bg-green-500/10",
    border: "border-green-500/20",
    stat: "60% faster claims",
  },
  {
    icon: Factory,
    label: "Manufacturing",
    desc: "Smart factory solutions, predictive maintenance, supply chain optimization, and IoT integration.",
    href: "/industries#manufacturing",
    color: "text-orange-400",
    bg: "bg-orange-500/10",
    border: "border-orange-500/20",
    stat: "35% downtime reduction",
  },
  {
    icon: ShoppingBag,
    label: "Retail",
    desc: "Omnichannel commerce, AI-driven personalization, inventory intelligence, and loyalty platforms.",
    href: "/industries#retail",
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
    stat: "3× lead increase",
  },
  {
    icon: Truck,
    label: "Logistics",
    desc: "Route optimization, fleet management, last-mile delivery tracking, and warehouse automation.",
    href: "/industries#logistics",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
    stat: "50% route efficiency",
  },
  {
    icon: Building2,
    label: "Government",
    desc: "Citizen service portals, e-governance platforms, secure data infrastructure, and compliance systems.",
    href: "/industries#government",
    color: "text-indigo-400",
    bg: "bg-indigo-500/10",
    border: "border-indigo-500/20",
    stat: "Digital-first delivery",
  },
  {
    icon: LayoutDashboard,
    label: "E-Commerce",
    desc: "Headless commerce, payment optimization, AI recommendations, and conversion rate engineering.",
    href: "/industries#ecommerce",
    color: "text-yellow-400",
    bg: "bg-yellow-500/10",
    border: "border-yellow-500/20",
    stat: "45% conversion lift",
  },
];

export function IndustriesSection() {
  return (
    <section className="relative py-28 overflow-hidden bg-space-950">
      <div className="absolute inset-0 section-gradient opacity-50" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <AnimatedSection>
            <div className="section-tag mb-5">Industry Expertise</div>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-5 leading-tight">
              Deep domain knowledge
              <br />
              across{" "}
              <span className="text-gradient">every sector</span>
            </h2>
            <p className="text-white/50 text-lg leading-relaxed mb-8">
              We bring vertical-specific expertise to every engagement. Our
              teams understand the regulatory, operational, and competitive
              dynamics of your industry — delivering solutions that fit your
              world precisely.
            </p>
            <Link href="/industries" className="btn-primary inline-flex px-7 py-3.5">
              Explore All Industries <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>

          <div className="grid grid-cols-2 gap-4">
            {industries.slice(0, 4).map((ind, i) => (
              <motion.div
                key={ind.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link href={ind.href} className="block group">
                  <div className="glass-card rounded-2xl p-5 card-hover h-full">
                    <div
                      className={`w-10 h-10 rounded-xl ${ind.bg} border ${ind.border} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}
                    >
                      <ind.icon className={`w-5 h-5 ${ind.color}`} />
                    </div>
                    <h3 className="text-sm font-bold text-white mb-1">{ind.label}</h3>
                    <div className={`text-xs font-medium ${ind.color} mb-2`}>{ind.stat}</div>
                    <p className="text-xs text-white/40 leading-relaxed">{ind.desc}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom 4 industries in a row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {industries.slice(4).map((ind, i) => (
            <motion.div
              key={ind.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link href={ind.href} className="block group">
                <div className="glass-card rounded-2xl p-5 card-hover flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-xl ${ind.bg} border ${ind.border} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}
                  >
                    <ind.icon className={`w-5 h-5 ${ind.color}`} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">{ind.label}</h3>
                    <div className={`text-xs ${ind.color}`}>{ind.stat}</div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
