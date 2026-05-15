"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Brain,
  Cloud,
  Code2,
  GitBranch,
  Globe,
  Network,
  Package,
  Settings,
  Users,
  Building2,
  Layers,
  ArrowRight,
} from "lucide-react";
import { AnimatedSection, StaggerContainer, staggerItem } from "@/components/ui/AnimatedSection";

const services = [
  {
    icon: Brain,
    label: "AI & Machine Learning",
    desc: "Intelligent ML models that analyze data, identify patterns, and generate actionable predictions to automate critical decision-making.",
    gradient: "from-blue-500/20 to-indigo-500/10",
    iconColor: "text-blue-400",
    iconBg: "bg-blue-500/10 border-blue-500/20",
    href: "/services#ai-ml",
    tag: "Core Capability",
  },
  {
    icon: Cloud,
    label: "Cloud Computing",
    desc: "Design, migrate, and operate cloud-native architectures on AWS, Azure, and Google Cloud. Reduce costs by up to 65%.",
    gradient: "from-cyan-500/20 to-blue-500/10",
    iconColor: "text-cyan-400",
    iconBg: "bg-cyan-500/10 border-cyan-500/20",
    href: "/services#cloud",
    tag: "Infrastructure",
  },
  {
    icon: GitBranch,
    label: "DevOps & CI/CD",
    desc: "Accelerate delivery with automated pipelines, infrastructure as code, container orchestration, and continuous monitoring.",
    gradient: "from-purple-500/20 to-pink-500/10",
    iconColor: "text-purple-400",
    iconBg: "bg-purple-500/10 border-purple-500/20",
    href: "/services#devops",
    tag: "Delivery",
  },
  {
    icon: Globe,
    label: "Digital Transformation",
    desc: "End-to-end digital strategy and execution. Modernize legacy systems, digitize processes, and build future-ready enterprises.",
    gradient: "from-indigo-500/20 to-violet-500/10",
    iconColor: "text-indigo-400",
    iconBg: "bg-indigo-500/10 border-indigo-500/20",
    href: "/services#digital",
    tag: "Strategy",
  },
  {
    icon: Code2,
    label: "Custom Software Development",
    desc: "Tailored enterprise applications built from the ground up. Microservices, APIs, and scalable backend architectures.",
    gradient: "from-green-500/20 to-teal-500/10",
    iconColor: "text-green-400",
    iconBg: "bg-green-500/10 border-green-500/20",
    href: "/services#custom-dev",
    tag: "Engineering",
  },
  {
    icon: Package,
    label: "Product Engineering",
    desc: "Full product lifecycle from ideation to launch. UI/UX design, development, testing, and continuous iteration.",
    gradient: "from-orange-500/20 to-amber-500/10",
    iconColor: "text-orange-400",
    iconBg: "bg-orange-500/10 border-orange-500/20",
    href: "/services#product",
    tag: "Product",
  },
  {
    icon: Layers,
    label: "Enterprise Software & CRM",
    desc: "AI-driven CRM solutions and enterprise platforms that power sustainable business growth and customer intelligence.",
    gradient: "from-rose-500/20 to-red-500/10",
    iconColor: "text-rose-400",
    iconBg: "bg-rose-500/10 border-rose-500/20",
    href: "/services#enterprise",
    tag: "Enterprise",
  },
  {
    icon: Network,
    label: "IoT Solutions",
    desc: "Connected device ecosystems with real-time data pipelines, edge computing, and intelligent automation at scale.",
    gradient: "from-teal-500/20 to-emerald-500/10",
    iconColor: "text-teal-400",
    iconBg: "bg-teal-500/10 border-teal-500/20",
    href: "/services#iot",
    tag: "Connected",
  },
  {
    icon: Settings,
    label: "Managed Services",
    desc: "24/7 end-to-end IT management with proactive monitoring, security patching, and performance optimization.",
    gradient: "from-slate-500/20 to-gray-500/10",
    iconColor: "text-slate-300",
    iconBg: "bg-slate-500/10 border-slate-500/20",
    href: "/services#managed",
    tag: "Operations",
  },
  {
    icon: Users,
    label: "Staffing & Recruitment",
    desc: "Connect with pre-vetted technology talent. From senior engineers to complete project teams.",
    gradient: "from-violet-500/20 to-purple-500/10",
    iconColor: "text-violet-400",
    iconBg: "bg-violet-500/10 border-violet-500/20",
    href: "/services#staffing",
    tag: "Talent",
  },
  {
    icon: Building2,
    label: "BIM Services",
    desc: "Building Information Modeling for architecture, engineering, and construction. Digital twins and lifecycle management.",
    gradient: "from-amber-500/20 to-yellow-500/10",
    iconColor: "text-amber-400",
    iconBg: "bg-amber-500/10 border-amber-500/20",
    href: "/services#bim",
    tag: "Construction",
  },
];

export function ServicesSection() {
  return (
    <section className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-space-900" />
      <div className="absolute inset-0 dot-bg opacity-30" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <div className="section-tag mx-auto mb-5">Our Capabilities</div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Enterprise solutions for every{" "}
            <span className="text-gradient">digital challenge</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto text-lg">
            From AI-powered automation to cloud migration, we deliver the full
            spectrum of enterprise technology services that modern businesses demand.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {services.map((service, i) => (
            <motion.div
              key={service.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
            >
              <Link href={service.href} className="block h-full group">
                <div className="relative h-full glass-card rounded-2xl p-6 card-hover overflow-hidden">
                  {/* Gradient background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}
                  />

                  <div className="relative z-10">
                    {/* Tag */}
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-semibold text-white/40 bg-white/5 border border-white/[0.06] mb-4">
                      {service.tag}
                    </span>

                    {/* Icon */}
                    <div
                      className={`w-12 h-12 rounded-xl ${service.iconBg} border flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <service.icon className={`w-6 h-6 ${service.iconColor}`} />
                    </div>

                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                      {service.label}
                    </h3>
                    <p className="text-sm text-white/50 leading-relaxed mb-4">
                      {service.desc}
                    </p>

                    <div className="flex items-center gap-1 text-xs font-medium text-white/30 group-hover:text-blue-400 transition-colors">
                      Learn more
                      <ArrowRight className="w-3.5 h-3.5 translate-x-0 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <AnimatedSection className="text-center">
          <Link href="/services" className="btn-secondary px-8 py-4 inline-flex">
            Explore All Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
