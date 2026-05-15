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
  CheckCircle2,
  Zap,
} from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { CTASection } from "@/sections/home/CTASection";

const services = [
  {
    id: "ai-ml",
    icon: Brain,
    label: "AI & Machine Learning",
    tagline: "Intelligence at enterprise scale",
    desc: "We build intelligent ML models that analyze data, identify patterns, and generate actionable predictions — automating decision-making and surfacing insights that drive competitive advantage.",
    features: [
      "Custom ML model development & training",
      "Natural language processing (NLP)",
      "Computer vision & image recognition",
      "Predictive analytics & forecasting",
      "AI-powered chatbots & virtual agents",
      "MLOps — model deployment & monitoring",
    ],
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    gradient: "from-blue-500/20 to-indigo-500/5",
    tech: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenAI API", "Hugging Face", "AWS SageMaker"],
  },
  {
    id: "cloud",
    icon: Cloud,
    label: "Cloud Computing",
    tagline: "Scalable, secure, cost-optimized",
    desc: "Design, migrate, and operate cloud-native architectures that reduce costs, improve reliability, and give your teams the agility to innovate faster.",
    features: [
      "Multi-cloud strategy & architecture",
      "AWS, Azure & Google Cloud migration",
      "Cloud-native application development",
      "Kubernetes & container orchestration",
      "Cost optimization & FinOps",
      "Cloud security & compliance",
    ],
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
    gradient: "from-cyan-500/20 to-blue-500/5",
    tech: ["AWS", "Azure", "GCP", "Kubernetes", "Terraform", "Docker"],
  },
  {
    id: "devops",
    icon: GitBranch,
    label: "DevOps & CI/CD",
    tagline: "Ship faster, break nothing",
    desc: "Accelerate software delivery with automated pipelines, infrastructure as code, and continuous monitoring. Reduce deployment time by up to 65%.",
    features: [
      "CI/CD pipeline design & implementation",
      "Infrastructure as Code (IaC)",
      "GitOps & automated deployments",
      "Monitoring, logging & alerting",
      "Security DevSecOps integration",
      "Performance engineering",
    ],
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
    gradient: "from-purple-500/20 to-pink-500/5",
    tech: ["GitHub Actions", "Jenkins", "Terraform", "Ansible", "Prometheus", "Grafana"],
  },
  {
    id: "digital",
    icon: Globe,
    label: "Digital Transformation",
    tagline: "Legacy to leading-edge",
    desc: "End-to-end digital strategy and execution. We modernize legacy systems, digitize operations, and build future-ready enterprises that adapt to change.",
    features: [
      "Digital strategy & roadmapping",
      "Legacy system modernization",
      "Process digitization & automation",
      "Change management & enablement",
      "Customer experience transformation",
      "Enterprise architecture advisory",
    ],
    color: "text-indigo-400",
    bg: "bg-indigo-500/10",
    border: "border-indigo-500/20",
    gradient: "from-indigo-500/20 to-violet-500/5",
    tech: ["Microservices", "API-first", "Event-driven", "Low-code", "RPA", "BPM"],
  },
  {
    id: "custom-dev",
    icon: Code2,
    label: "Custom Software Development",
    tagline: "Built exactly for your business",
    desc: "Tailored enterprise applications built from the ground up. From microservices backends to complex frontends, we engineer software that solves your exact business challenge.",
    features: [
      "Full-stack web application development",
      "Microservices & API development",
      "Database design & optimization",
      "Third-party integrations",
      "Performance & scalability engineering",
      "Code audits & legacy modernization",
    ],
    color: "text-green-400",
    bg: "bg-green-500/10",
    border: "border-green-500/20",
    gradient: "from-green-500/20 to-teal-500/5",
    tech: ["React", "Next.js", "Node.js", "Python", "Java", "PostgreSQL"],
  },
  {
    id: "product",
    icon: Package,
    label: "Product Engineering",
    tagline: "From concept to market",
    desc: "Full product lifecycle delivery — from UX research and design through development, testing, and go-to-market. We build products users love.",
    features: [
      "Product strategy & discovery",
      "UX research & design",
      "Agile product development",
      "Mobile app development (iOS/Android)",
      "Quality assurance & testing",
      "Post-launch support & iteration",
    ],
    color: "text-orange-400",
    bg: "bg-orange-500/10",
    border: "border-orange-500/20",
    gradient: "from-orange-500/20 to-amber-500/5",
    tech: ["React Native", "Flutter", "Figma", "Storybook", "Playwright", "App Store Connect"],
  },
  {
    id: "enterprise",
    icon: Layers,
    label: "Enterprise Software & CRM",
    tagline: "Intelligent enterprise at scale",
    desc: "AI-driven CRM solutions and enterprise platforms that power sustainable growth, customer intelligence, and operational excellence.",
    features: [
      "CRM implementation & customization",
      "ERP integration & migration",
      "Customer data platform (CDP)",
      "Sales & marketing automation",
      "Business intelligence & reporting",
      "Enterprise integration middleware",
    ],
    color: "text-rose-400",
    bg: "bg-rose-500/10",
    border: "border-rose-500/20",
    gradient: "from-rose-500/20 to-red-500/5",
    tech: ["Salesforce", "HubSpot", "SAP", "Microsoft Dynamics", "Zoho", "Custom CRM"],
  },
  {
    id: "iot",
    icon: Network,
    label: "IoT Solutions",
    tagline: "Connect, sense, automate",
    desc: "Connected device ecosystems with real-time data pipelines, edge computing, and intelligent automation. From sensor to insight in milliseconds.",
    features: [
      "IoT architecture design",
      "Edge computing & real-time processing",
      "Device management platforms",
      "Industrial IoT (IIoT) solutions",
      "Predictive maintenance systems",
      "IoT security & compliance",
    ],
    color: "text-teal-400",
    bg: "bg-teal-500/10",
    border: "border-teal-500/20",
    gradient: "from-teal-500/20 to-emerald-500/5",
    tech: ["AWS IoT", "Azure IoT Hub", "MQTT", "Time-series DB", "Edge AI", "Raspberry Pi"],
  },
  {
    id: "managed",
    icon: Settings,
    label: "Managed Services",
    tagline: "24/7 enterprise reliability",
    desc: "End-to-end management of your IT systems with 24/7 monitoring, proactive maintenance, and continuous optimization. We own uptime so you own growth.",
    features: [
      "24/7 infrastructure monitoring",
      "Incident management & SLA adherence",
      "Security patching & vulnerability management",
      "Capacity planning & scaling",
      "Backup & disaster recovery",
      "Monthly performance reporting",
    ],
    color: "text-slate-300",
    bg: "bg-slate-500/10",
    border: "border-slate-500/20",
    gradient: "from-slate-500/20 to-gray-500/5",
    tech: ["Datadog", "PagerDuty", "AWS CloudWatch", "Splunk", "Terraform", "Runbooks"],
  },
  {
    id: "staffing",
    icon: Users,
    label: "Staffing & Recruitment",
    tagline: "Top-tier technology talent",
    desc: "Connect with pre-vetted technology professionals — from senior engineers to complete project teams. Technical assessment included.",
    features: [
      "Permanent & contract placement",
      "Team augmentation & dedicated teams",
      "Technical screening & vetting",
      "Executive technology search",
      "Graduate & fresher programs",
      "Workforce training & upskilling",
    ],
    color: "text-violet-400",
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
    gradient: "from-violet-500/20 to-purple-500/5",
    tech: ["Java", "Python", "React", "DevOps", "Data Science", "QA Automation"],
  },
  {
    id: "bim",
    icon: Building2,
    label: "BIM Services",
    tagline: "Digital construction excellence",
    desc: "Building Information Modeling for architecture, engineering, and construction sectors. Digital twins, clash detection, and lifecycle asset management.",
    features: [
      "3D BIM modeling & coordination",
      "Clash detection & resolution",
      "4D construction scheduling",
      "5D cost estimation integration",
      "Digital twin development",
      "As-built documentation",
    ],
    color: "text-amber-400",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
    gradient: "from-amber-500/20 to-yellow-500/5",
    tech: ["Revit", "Navisworks", "AutoCAD", "ArchiCAD", "BIM 360", "IFC"],
  },
];

export function ServicesPage() {
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
            Our Services
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-6"
          >
            Enterprise solutions for
            <br />
            <span className="text-gradient">every digital challenge</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-white/50 max-w-2xl mx-auto mb-10"
          >
            From AI automation to cloud migration — we deliver the full
            spectrum of enterprise technology services that modern businesses
            need to compete and win.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-center gap-3"
          >
            <Link href="/contact" className="btn-primary px-8 py-4">
              Get a Free Consultation <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="relative py-16 bg-space-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {services.map((service, i) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
                className="relative glass-card rounded-2xl p-8 md:p-10 overflow-hidden group"
              >
                {/* Gradient bg */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}
                />

                <div className="relative z-10 grid md:grid-cols-[auto_1fr_auto] gap-8 items-start">
                  {/* Icon */}
                  <div
                    className={`w-16 h-16 rounded-2xl ${service.bg} border ${service.border} flex items-center justify-center flex-shrink-0`}
                  >
                    <service.icon className={`w-8 h-8 ${service.color}`} />
                  </div>

                  {/* Content */}
                  <div>
                    <div className={`text-xs font-semibold ${service.color} uppercase tracking-widest mb-1`}>
                      {service.tagline}
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                      {service.label}
                    </h2>
                    <p className="text-white/50 text-base leading-relaxed mb-6 max-w-2xl">
                      {service.desc}
                    </p>

                    {/* Features grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
                      {service.features.map((feat) => (
                        <div key={feat} className="flex items-center gap-2.5">
                          <CheckCircle2 className={`w-4 h-4 ${service.color} flex-shrink-0`} />
                          <span className="text-sm text-white/60">{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2">
                      {service.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-lg text-xs font-medium bg-white/[0.04] text-white/40 border border-white/[0.06]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex-shrink-0">
                    <Link
                      href="/contact"
                      className="btn-secondary inline-flex text-sm px-5 py-3 whitespace-nowrap"
                    >
                      Get Started <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
