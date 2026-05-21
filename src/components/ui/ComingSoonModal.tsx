"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Rocket, Bell } from "lucide-react";

interface Props {
  open: boolean;
  onClose: () => void;
}

export function ComingSoonModal({ open, onClose }: Props) {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 350 }}
            className="fixed inset-0 z-[70] flex items-center justify-center p-4 pointer-events-none"
          >
            <div
              className="pointer-events-auto w-full max-w-sm rounded-2xl p-8 text-center relative"
              style={{
                background: "linear-gradient(145deg,rgba(13,22,41,0.98),rgba(5,10,20,0.99))",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 32px 80px rgba(0,0,0,0.6), 0 0 60px rgba(0,102,255,0.1)",
              }}
            >
              {/* Close */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-1.5 rounded-lg text-white/30 hover:text-white/70 hover:bg-white/[0.06] transition-all"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/10 border border-blue-500/20 flex items-center justify-center mx-auto mb-5">
                <Rocket className="w-8 h-8 text-blue-400" />
              </div>

              {/* Content */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-semibold mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                Coming Soon
              </div>

              <h2 className="text-2xl font-bold text-white mb-3 tracking-tight">
                Employee Portal
              </h2>
              <p className="text-white/50 text-sm leading-relaxed mb-6">
                Our employee login portal is currently under development. It will
                provide secure access to payroll, attendance, HR tools, and more.
              </p>

              {/* Notify CTA */}
              <a
                href="mailto:info@metaintelligo.com?subject=Employee Portal Notification Request"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white transition-all shadow-lg"
              >
                <Bell className="w-4 h-4" />
                Notify Me When Live
              </a>

              <p className="text-xs text-white/25 mt-4">
                Expected Q3 2025 · Built on our HRM platform
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
