"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Phone, Linkedin } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function CTASection() {
  return (
    <section className="relative py-28 overflow-hidden bg-space-900">
      {/* Radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-radial from-blue-500/15 via-transparent to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection>
          <div className="section-tag mx-auto mb-6">Let&apos;s Build Together</div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-6 leading-tight">
            Ready to transform
            <br />
            your <span className="text-gradient">enterprise?</span>
          </h2>
          <p className="text-xl text-white/50 max-w-2xl mx-auto mb-12">
            Join 1,000+ enterprises that trust Meta Intelligo to deliver
            cutting-edge AI, cloud, and digital transformation outcomes.
            Let&apos;s start with a free consultation.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link href="/contact" className="btn-primary px-10 py-5 text-base">
              Launch Your Digital Journey
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="https://wa.me/919059495102"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary px-10 py-5 text-base"
            >
              <MessageCircle className="w-5 h-5 text-green-400" />
              WhatsApp Us Now
            </a>
          </div>

          {/* Quick contact options */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm">
            <a
              href="tel:+919059495102"
              className="flex items-center gap-2 text-white/40 hover:text-white/70 transition-colors"
            >
              <Phone className="w-4 h-4 text-blue-400" />
              +91 90 59 49 5102
            </a>
            <div className="w-px h-4 bg-white/10 hidden sm:block" />
            <a
              href="mailto:info@metaintelligo.com"
              className="flex items-center gap-2 text-white/40 hover:text-white/70 transition-colors"
            >
              info@metaintelligo.com
            </a>
            <div className="w-px h-4 bg-white/10 hidden sm:block" />
            <a
              href="https://www.linkedin.com/company/meta-intelligo-technologies-pvt-ltd/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/40 hover:text-blue-400 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              Follow on LinkedIn
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
