"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Linkedin,
  MessageCircle,
  ArrowRight,
  CheckCircle2,
  Send,
} from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { InteractiveMap } from "@/components/map/InteractiveMap";

const services = [
  "AI & Machine Learning",
  "Cloud Computing",
  "DevOps & CI/CD",
  "Digital Transformation",
  "Custom Software Development",
  "Product Engineering",
  "Enterprise Software & CRM",
  "IoT Solutions",
  "Managed Services",
  "Staffing & Recruitment",
  "BIM Services",
  "Other",
];

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+91 90 59 49 5102",
    href: "tel:+919059495102",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@metaintelligo.com",
    href: "mailto:info@metaintelligo.com",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Chat instantly",
    href: "https://wa.me/919059495102",
    color: "text-green-400",
    bg: "bg-green-500/10",
    border: "border-green-500/20",
    external: true,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Follow our company page",
    href: "https://www.linkedin.com/company/meta-intelligo-technologies-pvt-ltd/",
    color: "text-blue-300",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    external: true,
  },
];

export function ContactPageFull() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1500));
    setSubmitting(false);
    setSubmitted(true);
  };

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
            Get in Touch
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-6"
          >
            Let&apos;s build your
            <br />
            <span className="text-gradient">next breakthrough</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-white/50 max-w-xl mx-auto"
          >
            Tell us about your project. We&apos;ll respond within one business day
            with a tailored consultation proposal.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative py-16 bg-space-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-10">
            {/* Left — Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <AnimatedSection>
                <div className="glass-card rounded-2xl p-8">
                  <h2 className="text-xl font-bold text-white mb-6">
                    Get in touch directly
                  </h2>
                  <div className="space-y-4">
                    {contactInfo.map((info) => (
                      <a
                        key={info.label}
                        href={info.href}
                        target={(info as any).external ? "_blank" : undefined}
                        rel={(info as any).external ? "noopener noreferrer" : undefined}
                        className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.06] transition-all group"
                      >
                        <div
                          className={`w-10 h-10 rounded-xl ${info.bg} border ${info.border} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}
                        >
                          <info.icon className={`w-5 h-5 ${info.color}`} />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-white/30 uppercase tracking-widest">
                            {info.label}
                          </div>
                          <div className="text-sm font-medium text-white/70 group-hover:text-white transition-colors">
                            {info.value}
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <div className="glass-card rounded-2xl p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white mb-1">Headquarters</h3>
                      <p className="text-sm text-white/50 leading-relaxed">
                        Novel MSR Building, 1st Main St,
                        <br />
                        Subbaiah Reddy Colony, Marathahalli,
                        <br />
                        Bengaluru, Karnataka 560037
                        <br />
                        India
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Response time section removed */}
            </div>

            {/* Right — Contact Form */}
            <div className="lg:col-span-3">
              <AnimatedSection direction="left">
                <div className="glass-card rounded-2xl p-8 md:p-10">
                  <AnimatePresence mode="wait">
                    {submitted ? (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center py-10"
                      >
                        <div className="w-20 h-20 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center mx-auto mb-6">
                          <CheckCircle2 className="w-10 h-10 text-green-400" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-3">
                          Message received!
                        </h3>
                        <p className="text-white/50 mb-6 max-w-sm mx-auto">
                          Thank you for reaching out. Our team will review your
                          inquiry and respond within one business day.
                        </p>
                        <div className="flex items-center justify-center gap-3">
                          <a
                            href="https://wa.me/919059495102"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-secondary text-sm px-5 py-2.5 inline-flex"
                          >
                            <MessageCircle className="w-4 h-4 text-green-400" />
                            WhatsApp for faster response
                          </a>
                        </div>
                      </motion.div>
                    ) : (
                      <motion.form
                        key="form"
                        onSubmit={handleSubmit}
                        className="space-y-5"
                      >
                        <div>
                          <h2 className="text-2xl font-bold text-white mb-1">
                            Send us a message
                          </h2>
                          <p className="text-white/40 text-sm">
                            Share your project details and we&apos;ll craft a tailored proposal.
                          </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-semibold text-white/40 uppercase tracking-widest mb-2">
                              Full Name *
                            </label>
                            <input
                              type="text"
                              required
                              placeholder=""
                              value={formData.name}
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                              className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.06] transition-all"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-semibold text-white/40 uppercase tracking-widest mb-2">
                              Company
                            </label>
                            <input
                              type="text"
                              placeholder=""
                              value={formData.company}
                              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                              className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.06] transition-all"
                            />
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-semibold text-white/40 uppercase tracking-widest mb-2">
                              Email Address *
                            </label>
                            <input
                              type="email"
                              required
                              placeholder=""
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.06] transition-all"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-semibold text-white/40 uppercase tracking-widest mb-2">
                              Phone Number *
                            </label>
                            <input
                              type="tel"
                              required
                              placeholder=""
                              value={formData.phone}
                              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                              className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.06] transition-all"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-white/40 uppercase tracking-widest mb-2">
                            Service Interested In
                          </label>
                          <select
                            value={formData.service}
                            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                            className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.06] transition-all"
                          >
                            <option value="" className="bg-space-900">Select a service...</option>
                            {services.map((s) => (
                              <option key={s} value={s} className="bg-space-900">
                                {s}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-white/40 uppercase tracking-widest mb-2">
                            Description *
                          </label>
                          <textarea
                            required
                            rows={5}
                            placeholder=""
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.06] transition-all resize-none"
                          />
                        </div>

                        <button
                          type="submit"
                          disabled={submitting}
                          className="btn-primary w-full justify-center py-4 text-base disabled:opacity-60 disabled:cursor-not-allowed"
                        >
                          {submitting ? (
                            <>
                              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                              Sending...
                            </>
                          ) : (
                            <>
                              Send Message
                              <Send className="w-4 h-4" />
                            </>
                          )}
                        </button>

                        <p className="text-xs text-center text-white/30">
                          By submitting, you agree to our Privacy Policy. We never share your data.
                        </p>
                      </motion.form>
                    )}
                  </AnimatePresence>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Interactive Map */}
      <section className="relative py-16 bg-space-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-8 text-center">
            <div className="section-tag mx-auto mb-4">Find Us</div>
            <h2 className="text-3xl font-bold text-white tracking-tight mb-2">
              Visit our <span className="text-gradient">headquarters</span>
            </h2>
            <p className="text-white/40 text-sm">
              Novel MSR Building, Marathahalli, Bengaluru 560037
            </p>
          </AnimatedSection>
          <InteractiveMap />
        </div>
      </section>
    </>
  );
}
