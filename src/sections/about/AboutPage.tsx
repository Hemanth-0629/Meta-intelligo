"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Target,
  Eye,
  Database,
  Heart,
  Shield,
  Lightbulb,
  Users,
  Smile,
  MapPin,
  Mail,
  Phone,
  Linkedin,
  CheckCircle2,
  Award,
  Star,
  Quote,
} from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { CTASection } from "@/sections/home/CTASection";

const team = [
  {
    name: "Sai Teja",
    role: "Senior Software Engineer",
    specialty: "Java & Microservices",
    initials: "ST",
    gradient: "from-blue-500 to-indigo-600",
    linkedin: "#",
  },
  {
    name: "Lakshmi Priya",
    role: "UI/UX Lead Designer",
    specialty: "Design Systems",
    initials: "LP",
    gradient: "from-pink-500 to-rose-600",
    linkedin: "#",
  },
  {
    name: "Venkata Karthik",
    role: "Cloud & DevOps Specialist",
    specialty: "AWS & Kubernetes",
    initials: "VK",
    gradient: "from-cyan-500 to-blue-600",
    linkedin: "#",
  },
  {
    name: "Bhavani Sree",
    role: "QA Automation Engineer",
    specialty: "Test Architecture",
    initials: "BS",
    gradient: "from-green-500 to-teal-600",
    linkedin: "#",
  },
  {
    name: "Harsha Vardhan",
    role: "Product Manager",
    specialty: "Enterprise Products",
    initials: "HV",
    gradient: "from-orange-500 to-amber-600",
    linkedin: "#",
  },
  {
    name: "Keerthana Reddy",
    role: "Data Scientist",
    specialty: "AI & Machine Learning",
    initials: "KR",
    gradient: "from-purple-500 to-violet-600",
    linkedin: "#",
  },
];

const values = [
  { icon: Database, label: "Data With Purpose", color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20" },
  { icon: Heart, label: "Customer First", color: "text-rose-400", bg: "bg-rose-500/10", border: "border-rose-500/20" },
  { icon: Shield, label: "Act With Ownership", color: "text-green-400", bg: "bg-green-500/10", border: "border-green-500/20" },
  { icon: Lightbulb, label: "Think Forward", color: "text-yellow-400", bg: "bg-yellow-500/10", border: "border-yellow-500/20" },
  { icon: Users, label: "Move as One", color: "text-cyan-400", bg: "bg-cyan-500/10", border: "border-cyan-500/20" },
  { icon: Smile, label: "Keep It Human", color: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/20" },
];

const milestones = [
  { year: "2016", event: "Founded in Bengaluru with 5-person team focused on custom software" },
  { year: "2018", event: "Expanded into AI/ML services and secured first enterprise client" },
  { year: "2019", event: "Launched Cloud & DevOps practice; reached 100+ active clients" },
  { year: "2021", event: "Opened staffing & recruitment division; crossed 500+ placements" },
  { year: "2022", event: "Expanded to IoT, BIM, and specialized industry verticals" },
  { year: "2024", event: "1,000+ global clients; recognized as leading AI technology partner" },
];

export function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-24 overflow-hidden bg-space-950">
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute inset-0 grid-bg opacity-20" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="section-tag mb-6"
            >
              About Meta Intelligo
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-6 leading-tight"
            >
              We build technology
              <br />
              that <span className="text-gradient">transforms</span>
              <br />
              enterprises.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-white/50 max-w-2xl leading-relaxed"
            >
              Meta Intelligo Technologies was founded on a bold belief: that
              intelligent technology, delivered with precision and empathy,
              can revolutionize how enterprises compete, operate, and grow.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="relative py-20 bg-space-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            <AnimatedSection delay={0}>
              <div className="glass-card rounded-2xl p-8 h-full">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6">
                  <Target className="w-6 h-6 text-blue-400" />
                </div>
                <div className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-2">Mission</div>
                <h2 className="text-2xl font-bold text-white mb-4">Revolutionizing the digital landscape</h2>
                <p className="text-white/50 leading-relaxed">
                  Our mission is to revolutionize the digital landscape by delivering
                  innovative software solutions and AI-driven strategies that create
                  tangible, measurable value for every enterprise we serve. We combine
                  deep technical expertise with genuine business understanding to craft
                  solutions that matter.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="glass-card rounded-2xl p-8 h-full">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-6">
                  <Eye className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="text-xs font-semibold text-cyan-400 uppercase tracking-widest mb-2">Vision</div>
                <h2 className="text-2xl font-bold text-white mb-4">A globally trusted technology partner</h2>
                <p className="text-white/50 leading-relaxed">
                  We envision a world where every enterprise — regardless of size or
                  geography — has access to the cutting-edge AI, cloud, and digital
                  capabilities that drive sustainable competitive advantage. Meta Intelligo
                  will be the partner that makes that possible.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Company Story / Timeline */}
      <section className="relative py-20 overflow-hidden bg-space-950">
        <div className="absolute inset-0 dot-bg opacity-20" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-14">
            <div className="section-tag mb-5">Our Journey</div>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
              Eight years of building{" "}
              <span className="text-gradient">enterprise excellence</span>
            </h2>
          </AnimatedSection>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/40 via-blue-500/20 to-transparent" />

            <div className="space-y-8">
              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`relative flex flex-col md:flex-row items-start md:items-center gap-6 ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : "md:text-left"} ml-10 md:ml-0`}>
                    <div className="glass-card rounded-xl p-5">
                      <div className="text-blue-400 font-bold text-lg mb-1">{m.year}</div>
                      <p className="text-white/60 text-sm">{m.event}</p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500 border-2 border-space-950 shadow-glow-sm flex-shrink-0" />

                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative py-20 bg-space-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <div className="section-tag mx-auto mb-5">Core Values</div>
            <h2 className="text-4xl font-bold text-white tracking-tight mb-4">
              The principles that <span className="text-gradient">guide everything</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {values.map((v, i) => (
              <motion.div
                key={v.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="glass-card rounded-2xl p-5 text-center group card-hover"
              >
                <div
                  className={`w-12 h-12 rounded-xl ${v.bg} border ${v.border} flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform`}
                >
                  <v.icon className={`w-6 h-6 ${v.color}`} />
                </div>
                <div className={`text-sm font-semibold ${v.color}`}>{v.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="relative py-20 overflow-hidden bg-space-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <div className="section-tag mx-auto mb-5">Our Team</div>
            <h2 className="text-4xl font-bold text-white tracking-tight mb-4">
              The minds behind{" "}
              <span className="text-gradient">the innovation</span>
            </h2>
            <p className="text-white/50 max-w-xl mx-auto">
              A diverse, globally-minded team of engineers, designers, data scientists,
              and product managers passionate about enterprise technology.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="glass-card rounded-2xl p-5 text-center group card-hover"
              >
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${member.gradient} flex items-center justify-center text-white font-bold text-lg mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg`}
                >
                  {member.initials}
                </div>
                <div className="text-sm font-bold text-white mb-1">{member.name}</div>
                <div className="text-xs text-white/40 mb-1">{member.role}</div>
                <div className="text-[10px] text-white/30">{member.specialty}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Office & Location */}
      <section className="relative py-20 bg-space-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card rounded-2xl p-8 md:p-12 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="section-tag mb-5">Our Office</div>
              <h2 className="text-3xl font-bold text-white mb-4">
                Located in the heart of
                <br />
                <span className="text-gradient">India&apos;s Silicon Valley</span>
              </h2>
              <p className="text-white/50 mb-8 leading-relaxed">
                Our headquarters in Bengaluru, Karnataka — India&apos;s technology
                capital — keeps us at the center of innovation, talent, and
                enterprise connectivity.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white">Headquarters</div>
                    <div className="text-sm text-white/40">
                      Novel MSR Building, 1st Main St,<br />
                      Subbaiah Reddy Colony, Marathahalli,<br />
                      Bengaluru, Karnataka 560037
                    </div>
                  </div>
                </div>
                <a href="tel:+919059495102" className="flex items-center gap-3 group">
                  <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                    <Phone className="w-4 h-4 text-blue-400" />
                  </div>
                  <span className="text-sm text-white/50 group-hover:text-white transition-colors">+91 90 59 49 5102</span>
                </a>
                <a href="mailto:info@metaintelligo.com" className="flex items-center gap-3 group">
                  <div className="w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                    <Mail className="w-4 h-4 text-cyan-400" />
                  </div>
                  <span className="text-sm text-white/50 group-hover:text-white transition-colors">info@metaintelligo.com</span>
                </a>
                <a
                  href="https://www.linkedin.com/company/meta-intelligo-technologies-pvt-ltd/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group"
                >
                  <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                    <Linkedin className="w-4 h-4 text-blue-400" />
                  </div>
                  <span className="text-sm text-white/50 group-hover:text-blue-400 transition-colors">Follow on LinkedIn</span>
                </a>
              </div>
            </div>

            <div className="space-y-4">
              {[
                { icon: Award, label: "ISO 9001:2015 Certified", sub: "Quality management excellence", color: "text-yellow-400", bg: "bg-yellow-500/10", border: "border-yellow-500/20" },
                { icon: Shield, label: "Data Security Focused", sub: "GDPR and ISO 27001 aligned practices", color: "text-green-400", bg: "bg-green-500/10", border: "border-green-500/20" },
                { icon: CheckCircle2, label: "Agile & Scrum Certified", sub: "SAFe and Scrum-certified delivery teams", color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20" },
                { icon: Users, label: "50+ Technology Professionals", sub: "Cross-functional enterprise teams", color: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/20" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <div className={`w-10 h-10 rounded-xl ${item.bg} border ${item.border} flex items-center justify-center flex-shrink-0`}>
                    <item.icon className={`w-5 h-5 ${item.color}`} />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">{item.label}</div>
                    <div className="text-xs text-white/40">{item.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Real People — Placement Success Stories */}
      <section className="relative py-20 overflow-hidden bg-space-950">
        <div className="absolute inset-0 section-gradient opacity-40" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <div className="section-tag mx-auto mb-5">Placement Success</div>
            <h2 className="text-4xl font-bold text-white tracking-tight mb-4">
              Real people, <span className="text-gradient">real careers</span>
            </h2>
            <p className="text-white/50 max-w-xl mx-auto">
              Our training and staffing programs have placed professionals at
              industry-leading organizations across India and beyond.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Enimireddy Krishnareddy",
                role: "Data Analyst",
                company: "Ernst & Young (E&Y)",
                image: "/images/testimonials/person_0.png",
                quote: "Meta Intelligo gave me the real-world AI skills that E&Y was looking for. From training to placement — the journey was transformative.",
                ring: "ring-blue-500/40",
                accent: "text-blue-400",
                badge: "bg-blue-500/10 border-blue-500/20",
              },
              {
                name: "Jalapothu Omprakash",
                role: "Senior Associate",
                company: "Meta Intelligo Technologies",
                image: "/images/testimonials/person_1.png",
                quote: "Being part of the Meta Intelligo team means working on enterprise-grade projects with a culture that genuinely values ownership and innovation.",
                ring: "ring-cyan-500/40",
                accent: "text-cyan-400",
                badge: "bg-cyan-500/10 border-cyan-500/20",
              },
              {
                name: "Bindu Sree",
                role: "Senior Tester",
                company: "Infosys",
                image: "/images/testimonials/person_2.png",
                quote: "The practical automation training at Meta Intelligo was unlike anything else. I built real frameworks, and that took me straight to Infosys.",
                ring: "ring-purple-500/40",
                accent: "text-purple-400",
                badge: "bg-purple-500/10 border-purple-500/20",
              },
            ].map((person, i) => (
              <motion.div
                key={person.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card rounded-2xl p-7 card-hover group"
              >
                {/* Real photo — large */}
                <div className="flex items-center gap-4 mb-5">
                  <div className={`relative w-16 h-16 rounded-2xl overflow-hidden flex-shrink-0 ring-2 ${person.ring} shadow-lg`}>
                    <Image
                      src={person.image}
                      alt={person.name}
                      fill
                      className="object-cover object-top"
                      sizes="64px"
                    />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">{person.name}</div>
                    <div className="text-xs text-white/50">{person.role}</div>
                    <div className={`text-xs font-semibold mt-0.5 ${person.accent}`}>{person.company}</div>
                  </div>
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-3">
                  {[1,2,3,4,5].map((s) => (
                    <Star key={s} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-25 transition-opacity">
                  <Quote className="w-8 h-8 text-white" />
                </div>

                <p className="text-sm text-white/55 leading-relaxed italic">
                  &ldquo;{person.quote}&rdquo;
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
