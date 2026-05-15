"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Brain,
  Cloud,
  Code2,
  GitBranch,
  Globe,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Network,
  Package,
  Phone,
  Settings,
  Users,
  ArrowRight,
  Cpu,
  ExternalLink,
} from "lucide-react";

const services = [
  { label: "AI & Machine Learning", href: "/services#ai-ml" },
  { label: "Cloud Computing", href: "/services#cloud" },
  { label: "DevOps & CI/CD", href: "/services#devops" },
  { label: "Digital Transformation", href: "/services#digital" },
  { label: "Custom Software Dev", href: "/services#custom-dev" },
  { label: "Product Engineering", href: "/services#product" },
  { label: "IoT Solutions", href: "/services#iot" },
  { label: "Managed Services", href: "/services#managed" },
];

const industries = [
  { label: "Healthcare", href: "/industries#healthcare" },
  { label: "Banking & Finance", href: "/industries#banking" },
  { label: "Insurance", href: "/industries#insurance" },
  { label: "Manufacturing", href: "/industries#manufacturing" },
  { label: "Government", href: "/industries#government" },
  { label: "Retail & E-Commerce", href: "/industries#retail" },
  { label: "Logistics", href: "/industries#logistics" },
];

const company = [
  { label: "About Us", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
  { label: "Industries", href: "/industries" },
  { label: "Services", href: "/services" },
];

const socialLinks = [
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/company/meta-intelligo-technologies-pvt-ltd/",
    label: "LinkedIn",
    color: "hover:text-blue-400",
  },
  {
    icon: MessageCircle,
    href: "https://wa.me/919392825302",
    label: "WhatsApp",
    color: "hover:text-green-400",
  },
  {
    icon: Mail,
    href: "mailto:info@metaintelligo.com",
    label: "Email",
    color: "hover:text-cyan-400",
  },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] bg-space-950 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* CTA Banner */}
        <div className="py-16 border-b border-white/[0.06]">
          <div className="glass-card rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <div className="section-tag mb-4">Ready to Transform?</div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 tracking-tight">
                Build your AI-powered enterprise
                <span className="text-gradient"> today.</span>
              </h2>
              <p className="text-white/50 max-w-xl">
                Join 1,000+ businesses that trust Meta Intelligo to deliver
                measurable digital transformation outcomes.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <Link href="/contact" className="btn-primary px-8 py-4">
                Start a Project <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://wa.me/919392825302"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary px-8 py-4"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>

        {/* Main Footer Grid */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 group mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                <Cpu className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-lg font-bold text-white">Meta Intelligo</span>
                <div className="text-[10px] text-blue-400 font-medium tracking-widest uppercase">Technologies</div>
              </div>
            </Link>

            <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-xs">
              AI-driven enterprise technology solutions. We transform businesses
              through intelligent software, cloud innovation, and digital
              excellence.
            </p>

            {/* Contact Details */}
            <div className="space-y-3 mb-8">
              <a
                href="tel:+919392825302"
                className="flex items-center gap-3 text-sm text-white/50 hover:text-white transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                  <Phone className="w-3.5 h-3.5 text-blue-400" />
                </div>
                +91 93 92 82 5302
              </a>
              <a
                href="mailto:info@metaintelligo.com"
                className="flex items-center gap-3 text-sm text-white/50 hover:text-white transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                  <Mail className="w-3.5 h-3.5 text-cyan-400" />
                </div>
                info@metaintelligo.com
              </a>
              <div className="flex items-start gap-3 text-sm text-white/40">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-purple-400" />
                </div>
                <span>
                  Novel MSR Building, Marathahalli,
                  <br />
                  Bengaluru, Karnataka 560037
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={cn(
                    "w-10 h-10 rounded-lg bg-white/5 border border-white/[0.06] flex items-center justify-center text-white/40 transition-all hover:border-white/20",
                    social.color
                  )}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs font-semibold text-white/30 uppercase tracking-widest mb-5">
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/50 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-blue-400" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-xs font-semibold text-white/30 uppercase tracking-widest mb-5">
              Industries
            </h3>
            <ul className="space-y-3">
              {industries.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/50 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-cyan-400" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs font-semibold text-white/30 uppercase tracking-widest mb-5">
              Company
            </h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/50 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-purple-400" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Newsletter */}
            <div className="mt-8">
              <h3 className="text-xs font-semibold text-white/30 uppercase tracking-widest mb-3">
                Newsletter
              </h3>
              <p className="text-xs text-white/40 mb-3">
                AI, cloud & DevOps insights, monthly.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="you@company.com"
                  className="flex-1 min-w-0 bg-white/[0.04] border border-white/[0.08] rounded-lg px-3 py-2 text-xs text-white placeholder-white/30 focus:outline-none focus:border-blue-500/50"
                />
                <button className="btn-primary px-3 py-2 text-xs">
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} Meta Intelligo Technologies Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-xs text-white/30 hover:text-white/60 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-white/30 hover:text-white/60 transition-colors">
              Terms of Service
            </Link>
            <a
              href="https://www.linkedin.com/company/meta-intelligo-technologies-pvt-ltd/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-xs text-white/30 hover:text-blue-400 transition-colors"
            >
              <Linkedin className="w-3 h-3" />
              LinkedIn
              <ExternalLink className="w-2.5 h-2.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function cn(...classes: (string | undefined | boolean)[]) {
  return classes.filter(Boolean).join(" ");
}
