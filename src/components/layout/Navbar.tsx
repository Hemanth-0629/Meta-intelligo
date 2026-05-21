"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Brain, Cloud, Code2, GitBranch, Globe, Layers, LayoutDashboard,
  Menu, Network, Package, Settings, Users, X, ChevronDown, ArrowRight,
  Building2, Heart, Banknote, ShieldCheck, Factory, ShoppingBag, Truck,
  CircleUser,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { ComingSoonModal } from "@/components/ui/ComingSoonModal";

const services = [
  { label: "AI & Machine Learning", href: "/services#ai-ml", icon: Brain, desc: "Intelligent models & automation" },
  { label: "Cloud Computing", href: "/services#cloud", icon: Cloud, desc: "Scalable cloud infrastructure" },
  { label: "DevOps & CI/CD", href: "/services#devops", icon: GitBranch, desc: "Continuous delivery pipelines" },
  { label: "Digital Transformation", href: "/services#digital", icon: Globe, desc: "End-to-end digital strategy" },
  { label: "Custom Software Dev", href: "/services#custom-dev", icon: Code2, desc: "Tailored enterprise applications" },
  { label: "Product Engineering", href: "/services#product", icon: Package, desc: "Full-cycle product delivery" },
  { label: "Enterprise Software", href: "/services#enterprise", icon: Layers, desc: "ERP, CRM & beyond" },
  { label: "IoT Solutions", href: "/services#iot", icon: Network, desc: "Connected device ecosystems" },
  { label: "Managed Services", href: "/services#managed", icon: Settings, desc: "24/7 IT operations" },
  { label: "Staffing & Recruitment", href: "/services#staffing", icon: Users, desc: "Top-tier tech talent" },
  { label: "BIM Services", href: "/services#bim", icon: Building2, desc: "Building information modeling" },
];

const industries = [
  { label: "Healthcare", href: "/industries#healthcare", icon: Heart },
  { label: "Banking & Finance", href: "/industries#banking", icon: Banknote },
  { label: "Insurance", href: "/industries#insurance", icon: ShieldCheck },
  { label: "Manufacturing", href: "/industries#manufacturing", icon: Factory },
  { label: "Retail", href: "/industries#retail", icon: ShoppingBag },
  { label: "Logistics", href: "/industries#logistics", icon: Truck },
  { label: "Government", href: "/industries#government", icon: Building2 },
  { label: "E-Commerce", href: "/industries#ecommerce", icon: LayoutDashboard },
];

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [loginModal, setLoginModal] = useState(false);
  const pathname = usePathname();
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveMenu(null);
  }, [pathname]);

  const handleMenuEnter = (menu: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMenu(menu);
  };

  const handleMenuLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveMenu(null), 150);
  };

  return (
    <>
      <ComingSoonModal open={loginModal} onClose={() => setLoginModal(false)} />
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "glass-strong border-b border-white/[0.06] py-3"
            : "bg-transparent py-5"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <div className="relative h-9 w-auto transition-opacity group-hover:opacity-90">
                <Image
                  src="/images/logo.svg"
                  alt="Meta Intelligo Technologies"
                  width={180}
                  height={36}
                  className="h-9 w-auto"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {/* Services Mega Menu */}
              <div
                className="relative"
                onMouseEnter={() => handleMenuEnter("services")}
                onMouseLeave={handleMenuLeave}
              >
                <button
                  className={cn(
                    "flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-all",
                    activeMenu === "services"
                      ? "text-blue-400 bg-blue-500/10"
                      : "text-white/70 hover:text-white hover:bg-white/5"
                  )}
                >
                  Services
                  <ChevronDown
                    className={cn(
                      "w-4 h-4 transition-transform duration-200",
                      activeMenu === "services" && "rotate-180"
                    )}
                  />
                </button>
                <AnimatePresence>
                  {activeMenu === "services" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.97 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[620px] rounded-2xl shadow-2xl p-6 border border-white/[0.10]" style={{background: 'rgba(5, 10, 22, 0.97)', backdropFilter: 'blur(24px)'}}
                    >
                      <div className="grid grid-cols-2 gap-2">
                        {services.map((s) => (
                          <Link
                            key={s.href}
                            href={s.href}
                            className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/[0.06] group transition-all"
                          >
                            <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/20 transition-colors">
                              <s.icon className="w-4 h-4 text-blue-400" />
                            </div>
                            <div>
                              <div className="text-sm font-medium text-white group-hover:text-blue-300 transition-colors">
                                {s.label}
                              </div>
                              <div className="text-xs text-white/40">{s.desc}</div>
                            </div>
                          </Link>
                        ))}
                      </div>
                      <div className="mt-4 pt-4 border-t border-white/[0.06] flex items-center justify-between">
                        <p className="text-xs text-white/40">Enterprise-grade solutions for every need</p>
                        <Link
                          href="/services"
                          className="flex items-center gap-1 text-xs font-medium text-blue-400 hover:text-blue-300 transition-colors"
                        >
                          View all services <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Industries Mega Menu */}
              <div
                className="relative"
                onMouseEnter={() => handleMenuEnter("industries")}
                onMouseLeave={handleMenuLeave}
              >
                <button
                  className={cn(
                    "flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-all",
                    activeMenu === "industries"
                      ? "text-blue-400 bg-blue-500/10"
                      : "text-white/70 hover:text-white hover:bg-white/5"
                  )}
                >
                  Industries
                  <ChevronDown
                    className={cn(
                      "w-4 h-4 transition-transform duration-200",
                      activeMenu === "industries" && "rotate-180"
                    )}
                  />
                </button>
                <AnimatePresence>
                  {activeMenu === "industries" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.97 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[380px] rounded-2xl shadow-2xl p-5 border border-white/[0.10]" style={{background: 'rgba(5, 10, 22, 0.97)', backdropFilter: 'blur(24px)'}}
                    >
                      <div className="grid grid-cols-2 gap-2">
                        {industries.map((ind) => (
                          <Link
                            key={ind.href}
                            href={ind.href}
                            className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/[0.06] group transition-all"
                          >
                            <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-500/20 transition-colors">
                              <ind.icon className="w-4 h-4 text-cyan-400" />
                            </div>
                            <span className="text-sm font-medium text-white/80 group-hover:text-white transition-colors">
                              {ind.label}
                            </span>
                          </Link>
                        ))}
                      </div>
                      <div className="mt-4 pt-4 border-t border-white/[0.06]">
                        <Link
                          href="/industries"
                          className="flex items-center gap-1 text-xs font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
                        >
                          Explore all industries <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-4 py-2 text-sm font-medium rounded-lg transition-all",
                    pathname === link.href
                      ? "text-blue-400 bg-blue-500/10"
                      : "text-white/70 hover:text-white hover:bg-white/5"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-2.5">
              {/* Employee Login — icon only */}
              <button
                onClick={() => setLoginModal(true)}
                title="Employee Login"
                aria-label="Employee Login"
                className="w-9 h-9 flex items-center justify-center rounded-lg text-white/50 hover:text-white hover:bg-white/[0.06] border border-white/[0.08] hover:border-white/[0.18] transition-all"
              >
                <CircleUser className="w-4 h-4" />
              </button>
              <Link href="/contact" className="btn-primary text-sm px-5 py-2.5">
                Get Started
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              className="lg:hidden p-2 rounded-lg text-white/70 hover:text-white hover:bg-white/5 transition-all"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-space-950/80 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              className="absolute right-0 top-0 bottom-0 w-[85vw] max-w-sm glass-strong border-l border-white/[0.06] overflow-y-auto"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
            >
              <div className="p-6 pt-20">
                <div className="space-y-1">
                  <p className="text-xs font-semibold text-white/30 uppercase tracking-widest px-3 mb-3">Services</p>
                  {services.slice(0, 6).map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/[0.06] transition-all"
                    >
                      <s.icon className="w-4 h-4 text-blue-400" />
                      <span className="text-sm text-white/80">{s.label}</span>
                    </Link>
                  ))}
                  <Link
                    href="/services"
                    className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-blue-400"
                  >
                    View all services <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                <div className="my-4 border-t border-white/[0.06]" />

                <div className="space-y-1">
                  <p className="text-xs font-semibold text-white/30 uppercase tracking-widest px-3 mb-3">Navigation</p>
                  {[
                    { label: "Industries", href: "/industries" },
                    ...navLinks,
                  ].map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="flex items-center px-3 py-2.5 text-sm text-white/80 hover:text-white rounded-xl hover:bg-white/[0.06] transition-all"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>

                <div className="mt-6 space-y-3">
                  <Link
                    href="/contact"
                    className="btn-primary w-full justify-center"
                  >
                    Get Started <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href="tel:+919059495102"
                    className="btn-secondary w-full justify-center"
                  >
                    Call +91 93 92 82 5302
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
