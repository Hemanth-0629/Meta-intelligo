"use client";

import { motion } from "framer-motion";
import { GraduationCap, ExternalLink } from "lucide-react";

const INTERNSHIP_FORM_URL =
  "https://erp.ecomsmart.world/form-builder/d11ad164-b3f5-4ebf-a2f3-e94cc3cc07c2-1779094293";

export function InternshipButton() {
  return (
    <motion.a
      href={INTERNSHIP_FORM_URL}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1.2 }}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      className="fixed bottom-6 left-6 z-50 flex items-center gap-2.5 px-4 py-3 rounded-2xl text-sm font-semibold text-white shadow-2xl"
      style={{
        background:
          "linear-gradient(135deg,rgba(13,22,41,0.95),rgba(5,10,20,0.98))",
        border: "1px solid rgba(0,102,255,0.35)",
        boxShadow:
          "0 8px 32px rgba(0,0,0,0.5), 0 0 24px rgba(0,102,255,0.15)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
      }}
    >
      <div className="w-7 h-7 rounded-lg bg-blue-500/20 border border-blue-500/30 flex items-center justify-center flex-shrink-0">
        <GraduationCap className="w-4 h-4 text-blue-400" />
      </div>
      <span className="hidden sm:block">Apply for Internship</span>
      <span className="sm:hidden">Internship</span>
      <ExternalLink className="w-3 h-3 text-white/40" />

      {/* Pulse dot */}
      <span className="relative flex h-2 w-2 flex-shrink-0">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-60" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
      </span>
    </motion.a>
  );
}
