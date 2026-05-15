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
  CheckCircle2,
} from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { CTASection } from "@/sections/home/CTASection";

const industries = [
  {
    id: "healthcare",
    icon: Heart,
    label: "Healthcare",
    tagline: "Smarter care through technology",
    desc: "HIPAA-compliant platforms, AI-powered diagnostics, patient data management, and telemedicine infrastructure. We help healthcare organizations deliver better patient outcomes at scale.",
    capabilities: [
      "Electronic Health Record (EHR) integrations",
      "Telemedicine platform development",
      "AI-powered diagnostic assistance",
      "Patient engagement portals",
      "Clinical data analytics",
      "HIPAA & healthcare compliance",
      "Medical IoT device integration",
      "Revenue cycle management",
    ],
    stat1: { label: "Efficiency Gain", value: "40%" },
    stat2: { label: "Patient Satisfaction", value: "+35%" },
    color: "text-rose-400",
    bg: "bg-rose-500/10",
    border: "border-rose-500/20",
    gradient: "from-rose-500/15 to-red-500/5",
  },
  {
    id: "banking",
    icon: Banknote,
    label: "Banking & Finance",
    tagline: "Fintech at enterprise scale",
    desc: "Core banking modernization, real-time fraud detection, regulatory compliance automation, and open banking APIs. Empowering financial institutions to compete in the digital era.",
    capabilities: [
      "Core banking system modernization",
      "Fraud detection & prevention (AI/ML)",
      "Open banking & API integration",
      "Regulatory compliance (RBI, Basel III)",
      "Real-time payment processing",
      "Digital onboarding & KYC",
      "Risk analytics platforms",
      "Mobile banking applications",
    ],
    stat1: { label: "Transaction Accuracy", value: "99.99%" },
    stat2: { label: "Fraud Detection", value: "98%" },
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    gradient: "from-blue-500/15 to-indigo-500/5",
  },
  {
    id: "insurance",
    icon: ShieldCheck,
    label: "Insurance",
    tagline: "Automating the full claims lifecycle",
    desc: "Claims automation, AI-powered underwriting, policy management systems, and customer portals. Reducing friction, improving accuracy, and delivering faster outcomes for policyholders.",
    capabilities: [
      "Claims processing automation",
      "AI underwriting assistance",
      "Policy management systems",
      "Customer self-service portals",
      "Fraud analytics & detection",
      "Actuarial data platforms",
      "Digital distribution channels",
      "Regulatory reporting automation",
    ],
    stat1: { label: "Faster Claims", value: "60%" },
    stat2: { label: "Processing Cost", value: "-45%" },
    color: "text-green-400",
    bg: "bg-green-500/10",
    border: "border-green-500/20",
    gradient: "from-green-500/15 to-teal-500/5",
  },
  {
    id: "manufacturing",
    icon: Factory,
    label: "Manufacturing",
    tagline: "Smart factory, lean operations",
    desc: "Smart factory solutions, predictive maintenance, supply chain optimization, and industrial IoT integration. Transform your manufacturing floor into an intelligent, connected ecosystem.",
    capabilities: [
      "IIoT sensor integration & monitoring",
      "Predictive maintenance platforms",
      "Supply chain visibility systems",
      "Quality control automation",
      "ERP integration & optimization",
      "Digital twin development",
      "Energy management systems",
      "Warehouse management automation",
    ],
    stat1: { label: "Downtime Reduction", value: "35%" },
    stat2: { label: "OEE Improvement", value: "+28%" },
    color: "text-orange-400",
    bg: "bg-orange-500/10",
    border: "border-orange-500/20",
    gradient: "from-orange-500/15 to-amber-500/5",
  },
  {
    id: "retail",
    icon: ShoppingBag,
    label: "Retail",
    tagline: "Omnichannel that actually works",
    desc: "Omnichannel commerce platforms, AI-driven personalization, inventory intelligence, and loyalty ecosystems. Deliver the seamless retail experience modern consumers demand.",
    capabilities: [
      "Omnichannel commerce architecture",
      "AI-powered personalization engine",
      "Inventory management & optimization",
      "Customer loyalty platforms",
      "Point-of-sale (POS) integration",
      "Demand forecasting",
      "Customer analytics & segmentation",
      "RFID & smart shelf solutions",
    ],
    stat1: { label: "Lead Growth", value: "3×" },
    stat2: { label: "Conversion Lift", value: "+45%" },
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
    gradient: "from-purple-500/15 to-pink-500/5",
  },
  {
    id: "logistics",
    icon: Truck,
    label: "Logistics",
    tagline: "Last-mile precision",
    desc: "Route optimization, real-time fleet management, last-mile delivery intelligence, and warehouse automation. Build logistics operations that scale efficiently and reliably.",
    capabilities: [
      "Route optimization algorithms",
      "Real-time fleet tracking",
      "Last-mile delivery management",
      "Warehouse management systems (WMS)",
      "Freight management platforms",
      "Customer delivery portals",
      "Driver app development",
      "Logistics analytics dashboards",
    ],
    stat1: { label: "Route Efficiency", value: "50%" },
    stat2: { label: "Delivery Accuracy", value: "99.2%" },
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
    gradient: "from-cyan-500/15 to-blue-500/5",
  },
  {
    id: "government",
    icon: Building2,
    label: "Government",
    tagline: "Digital governance for citizens",
    desc: "Citizen service portals, e-governance platforms, secure data infrastructure, and compliance systems. Helping government agencies deliver faster, more transparent, and more accessible public services.",
    capabilities: [
      "Citizen service portal development",
      "Document management systems",
      "E-governance & digital workflows",
      "Secure data infrastructure",
      "Interoperability & API integration",
      "Compliance & audit systems",
      "GIS & spatial data platforms",
      "Public-facing mobile applications",
    ],
    stat1: { label: "Service Digitization", value: "100%" },
    stat2: { label: "Processing Speed", value: "+70%" },
    color: "text-indigo-400",
    bg: "bg-indigo-500/10",
    border: "border-indigo-500/20",
    gradient: "from-indigo-500/15 to-violet-500/5",
  },
  {
    id: "ecommerce",
    icon: LayoutDashboard,
    label: "E-Commerce",
    tagline: "Conversion-first commerce",
    desc: "Headless commerce architectures, payment optimization, AI recommendation engines, and conversion rate engineering. Build e-commerce platforms that grow revenue by design.",
    capabilities: [
      "Headless commerce development",
      "Payment gateway integration & optimization",
      "AI product recommendation engines",
      "Conversion rate optimization (CRO)",
      "Search & merchandising",
      "Subscription & loyalty platforms",
      "Multi-vendor marketplace development",
      "Analytics & attribution",
    ],
    stat1: { label: "Conversion Lift", value: "45%" },
    stat2: { label: "Checkout Drop", value: "-30%" },
    color: "text-yellow-400",
    bg: "bg-yellow-500/10",
    border: "border-yellow-500/20",
    gradient: "from-yellow-500/15 to-orange-500/5",
  },
];

export function IndustriesPage() {
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
            Industry Expertise
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-6"
          >
            Deep domain knowledge
            <br />
            <span className="text-gradient">across every sector</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-white/50 max-w-2xl mx-auto"
          >
            We don't just deliver technology — we bring vertical-specific
            expertise that understands your regulations, your customers, and
            your competitive landscape.
          </motion.p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="relative py-16 bg-space-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {industries.map((industry, i) => (
              <motion.div
                key={industry.id}
                id={industry.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
                className="relative glass-card rounded-2xl p-8 md:p-10 overflow-hidden group"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${industry.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}
                />

                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row gap-8">
                    {/* Left */}
                    <div className="md:w-72 flex-shrink-0">
                      <div
                        className={`w-16 h-16 rounded-2xl ${industry.bg} border ${industry.border} flex items-center justify-center mb-5`}
                      >
                        <industry.icon className={`w-8 h-8 ${industry.color}`} />
                      </div>
                      <div className={`text-xs font-semibold ${industry.color} uppercase tracking-widest mb-1`}>
                        {industry.tagline}
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">{industry.label}</h2>
                      <p className="text-white/50 text-sm leading-relaxed mb-6">{industry.desc}</p>

                      {/* Stats */}
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-white/[0.04] rounded-xl p-3">
                          <div className={`text-xl font-bold ${industry.color}`}>{industry.stat1.value}</div>
                          <div className="text-xs text-white/40">{industry.stat1.label}</div>
                        </div>
                        <div className="bg-white/[0.04] rounded-xl p-3">
                          <div className={`text-xl font-bold ${industry.color}`}>{industry.stat2.value}</div>
                          <div className="text-xs text-white/40">{industry.stat2.label}</div>
                        </div>
                      </div>
                    </div>

                    {/* Right — capabilities */}
                    <div className="flex-1">
                      <h3 className="text-sm font-semibold text-white/40 uppercase tracking-widest mb-4">
                        Key Capabilities
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {industry.capabilities.map((cap) => (
                          <div key={cap} className="flex items-center gap-2.5">
                            <CheckCircle2 className={`w-4 h-4 ${industry.color} flex-shrink-0`} />
                            <span className="text-sm text-white/60">{cap}</span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-8">
                        <Link
                          href="/contact"
                          className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold ${industry.color} bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.08] transition-all`}
                        >
                          Discuss your {industry.label} project
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
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
