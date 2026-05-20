"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Phone, Linkedin, Mail, X, Plus } from "lucide-react";

const actions = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    href: "https://wa.me/919059495102",
    bg: "bg-green-500",
    hoverBg: "hover:bg-green-400",
    external: true,
  },
  {
    icon: Phone,
    label: "Call Us",
    href: "tel:+919059495102",
    bg: "bg-blue-500",
    hoverBg: "hover:bg-blue-400",
    external: false,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/meta-intelligo-technologies-pvt-ltd/",
    bg: "bg-[#0A66C2]",
    hoverBg: "hover:bg-[#095ba7]",
    external: true,
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:info@metaintelligo.com",
    bg: "bg-purple-500",
    hoverBg: "hover:bg-purple-400",
    external: false,
  },
];

export function FloatingContact() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3" style={{ marginRight: 0 }}>
      <AnimatePresence>
        {open &&
          actions.map((action, i) => (
            <motion.a
              key={action.label}
              href={action.href}
              target={action.external ? "_blank" : undefined}
              rel={action.external ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, x: 20, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 20, scale: 0.8 }}
              transition={{ delay: i * 0.05, type: "spring", damping: 20 }}
              className="flex items-center gap-3 group"
            >
              <span className="hidden group-hover:block bg-space-800 text-white text-xs font-medium px-3 py-1.5 rounded-lg border border-white/10 whitespace-nowrap shadow-lg">
                {action.label}
              </span>
              <div
                className={cn(
                  "w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg transition-all",
                  action.bg,
                  action.hoverBg
                )}
              >
                <action.icon className="w-5 h-5" />
              </div>
            </motion.a>
          ))}
      </AnimatePresence>

      {/* WhatsApp always visible */}
      <motion.a
        href="https://wa.me/919059495102"
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "w-14 h-14 rounded-full bg-green-500 hover:bg-green-400 flex items-center justify-center text-white shadow-lg transition-all",
          open && "hidden"
        )}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        title="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </motion.a>

      {/* Main toggle button */}
      <motion.button
        onClick={() => setOpen(!open)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={cn(
          "w-14 h-14 rounded-full flex items-center justify-center text-white shadow-xl transition-all",
          open
            ? "bg-red-500 hover:bg-red-400 glow-blue"
            : "bg-gradient-to-br from-blue-500 to-cyan-500 hover:from-blue-400 hover:to-cyan-400 glow-blue"
        )}
        aria-label="Contact options"
      >
        <motion.div
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
        >
          {open ? <X className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
        </motion.div>
      </motion.button>
    </div>
  );
}

function cn(...classes: (string | undefined | boolean)[]) {
  return classes.filter(Boolean).join(" ");
}
