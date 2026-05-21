"use client";

import { motion } from "framer-motion";
import {
  MapPin, Phone, MessageCircle, Linkedin,
  Navigation, Building2, ExternalLink, Clock,
} from "lucide-react";

const GMAPS =
  "https://www.google.com/maps/search/?api=1&query=Meta+Intelligo+Technologies+Marathahalli+Bengaluru";
const WHATSAPP = "https://wa.me/919059495102";
const LINKEDIN =
  "https://www.linkedin.com/company/meta-intelligo-technologies-pvt-ltd/";
const PHONE = "tel:+919059495102";

interface ActionBtn {
  href: string;
  icon: React.ElementType;
  label: string;
  bg: string;
  border: string;
  hoverBg: string;
  iconColor: string;
  external?: boolean;
}

const ACTIONS: ActionBtn[] = [
  {
    href: PHONE, icon: Phone, label: "Call",
    bg: "rgba(0,102,255,.1)", border: "rgba(0,102,255,.22)", hoverBg: "rgba(0,102,255,.2)",
    iconColor: "#60a5fa",
  },
  {
    href: WHATSAPP, icon: MessageCircle, label: "WhatsApp", external: true,
    bg: "rgba(34,197,94,.1)", border: "rgba(34,197,94,.22)", hoverBg: "rgba(34,197,94,.2)",
    iconColor: "#4ade80",
  },
  {
    href: LINKEDIN, icon: Linkedin, label: "LinkedIn", external: true,
    bg: "rgba(10,102,194,.1)", border: "rgba(10,102,194,.22)", hoverBg: "rgba(10,102,194,.2)",
    iconColor: "#93c5fd",
  },
  {
    href: GMAPS, icon: Navigation, label: "Navigate", external: true,
    bg: "rgba(168,85,247,.1)", border: "rgba(168,85,247,.22)", hoverBg: "rgba(168,85,247,.2)",
    iconColor: "#c084fc",
  },
];

function ActionButton({ btn }: { btn: ActionBtn }) {
  return (
    <motion.a
      href={btn.href}
      target={btn.external ? "_blank" : undefined}
      rel={btn.external ? "noopener noreferrer" : undefined}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      className="flex flex-col items-center gap-1.5 px-3 py-3 rounded-xl text-white transition-colors group"
      style={{ background: btn.bg, border: `1px solid ${btn.border}` }}
      onMouseEnter={(e) => (e.currentTarget.style.background = btn.hoverBg)}
      onMouseLeave={(e) => (e.currentTarget.style.background = btn.bg)}
    >
      <btn.icon className="w-4 h-4" style={{ color: btn.iconColor }} />
      <span className="text-[10px] font-semibold text-white/70 group-hover:text-white transition-colors">
        {btn.label}
      </span>
    </motion.a>
  );
}

export function MapOverlayCard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20, y: 10 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ delay: 1.8, duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="absolute top-4 left-4 z-20 w-64 pointer-events-auto"
    >
      <div
        className="rounded-2xl overflow-hidden"
        style={{
          background:
            "linear-gradient(160deg, rgba(5,10,20,.95) 0%, rgba(13,22,41,.93) 100%)",
          backdropFilter: "blur(36px)",
          WebkitBackdropFilter: "blur(36px)",
          border: "1px solid rgba(0,102,255,.16)",
          boxShadow:
            "0 20px 60px rgba(0,0,0,.65), 0 0 40px rgba(0,102,255,.06), inset 0 1px 0 rgba(255,255,255,.04)",
        }}
      >
        {/* ── Header ── */}
        <div
          className="px-4 py-3.5 border-b border-white/[0.05]"
          style={{
            background:
              "linear-gradient(135deg, rgba(0,102,255,.1), rgba(34,211,238,.04))",
          }}
        >
          <div className="flex items-center gap-2.5">
            <div
              className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{
                background: "rgba(0,102,255,.15)",
                border: "1px solid rgba(0,102,255,.25)",
              }}
            >
              <Building2 className="w-4 h-4 text-blue-400" />
            </div>
            <div>
              <div className="text-[13px] font-bold text-white leading-tight">
                Meta Intelligo HQ
              </div>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                <span className="text-[10px] text-green-400 font-medium">Open</span>
                <span className="text-[10px] text-white/30">· Mon–Sat</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Address ── */}
        <div className="px-4 py-3 border-b border-white/[0.05]">
          <div className="flex gap-2.5">
            <MapPin className="w-3.5 h-3.5 text-blue-400 flex-shrink-0 mt-0.5" />
            <p className="text-[11px] text-white/65 leading-relaxed">
              Novel MSR Building, 1st Main St,
              <br />Subbaiah Reddy Colony,
              <br />Marathahalli, Bengaluru 560037
            </p>
          </div>
        </div>

        {/* ── Quick actions grid ── */}
        <div className="px-4 py-3 grid grid-cols-4 gap-2 border-b border-white/[0.05]">
          {ACTIONS.map((btn) => (
            <ActionButton key={btn.label} btn={btn} />
          ))}
        </div>

        {/* ── Open in Maps full CTA ── */}
        <div className="px-4 py-3">
          <motion.a
            href={GMAPS}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-[11px] font-semibold transition-all"
            style={{
              background:
                "linear-gradient(135deg, rgba(0,102,255,.14), rgba(34,211,238,.07))",
              border: "1px solid rgba(0,102,255,.24)",
              color: "#93c5fd",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background =
                "linear-gradient(135deg, rgba(0,102,255,.26), rgba(34,211,238,.14))")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background =
                "linear-gradient(135deg, rgba(0,102,255,.14), rgba(34,211,238,.07))")
            }
          >
            <ExternalLink className="w-3.5 h-3.5" />
            Open in Google Maps
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}
