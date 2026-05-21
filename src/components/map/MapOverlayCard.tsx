"use client";

import { motion } from "framer-motion";
import {
  MapPin, Phone, MessageCircle, Linkedin,
  Navigation, Building2, ExternalLink,
} from "lucide-react";

const GMAPS =
  "https://www.google.com/maps/search/?api=1&query=Meta+Intelligo+Technologies+Marathahalli+Bengaluru";
const WHATSAPP = "https://wa.me/919059495102";
const LINKEDIN =
  "https://www.linkedin.com/company/meta-intelligo-technologies-pvt-ltd/";
const PHONE = "tel:+919059495102";

export function MapOverlayCard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -24, y: 12 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ delay: 1.6, duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="absolute top-5 left-5 z-20 w-72 pointer-events-auto"
    >
      <div
        className="rounded-2xl overflow-hidden"
        style={{
          background:
            "linear-gradient(145deg,rgba(5,10,20,0.94),rgba(13,22,41,0.92))",
          backdropFilter: "blur(32px)",
          WebkitBackdropFilter: "blur(32px)",
          border: "1px solid rgba(0,102,255,0.18)",
          boxShadow:
            "0 24px 64px rgba(0,0,0,0.6), 0 0 40px rgba(0,102,255,0.07), inset 0 1px 0 rgba(255,255,255,0.04)",
        }}
      >
        {/* Header */}
        <div
          className="px-5 py-4 border-b border-white/[0.05]"
          style={{
            background:
              "linear-gradient(135deg,rgba(0,102,255,0.1),rgba(34,211,238,0.04))",
          }}
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-blue-500/15 border border-blue-500/25 flex items-center justify-center flex-shrink-0">
              <Building2 className="w-4.5 h-4.5 text-blue-400" style={{ width: 18, height: 18 }} />
            </div>
            <div>
              <div className="text-sm font-bold text-white leading-tight">
                Meta Intelligo HQ
              </div>
              <div className="flex items-center gap-1 mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
                <span className="text-[10px] text-green-400 font-medium">Open now</span>
              </div>
            </div>
          </div>
        </div>

        {/* Address */}
        <div className="px-5 py-4 border-b border-white/[0.05]">
          <div className="flex gap-3">
            <MapPin className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-xs text-white/70 leading-relaxed">
                Novel MSR Building, 1st Main St,
                <br />
                Subbaiah Reddy Colony, Marathahalli,
                <br />
                Bengaluru, Karnataka 560037
              </p>
            </div>
          </div>
        </div>

        {/* Action buttons */}
        <div className="px-5 py-4 grid grid-cols-2 gap-2.5">
          <a
            href={PHONE}
            className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl text-xs font-semibold text-white transition-all"
            style={{
              background: "rgba(0,102,255,0.12)",
              border: "1px solid rgba(0,102,255,0.2)",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = "rgba(0,102,255,0.22)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = "rgba(0,102,255,0.12)")
            }
          >
            <Phone className="w-3.5 h-3.5 text-blue-400" />
            Call Us
          </a>

          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl text-xs font-semibold text-white transition-all"
            style={{
              background: "rgba(34,197,94,0.12)",
              border: "1px solid rgba(34,197,94,0.2)",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = "rgba(34,197,94,0.22)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = "rgba(34,197,94,0.12)")
            }
          >
            <MessageCircle className="w-3.5 h-3.5 text-green-400" />
            WhatsApp
          </a>

          <a
            href={LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl text-xs font-semibold text-white transition-all"
            style={{
              background: "rgba(10,102,194,0.12)",
              border: "1px solid rgba(10,102,194,0.2)",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = "rgba(10,102,194,0.22)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = "rgba(10,102,194,0.12)")
            }
          >
            <Linkedin className="w-3.5 h-3.5 text-[#60a5fa]" />
            LinkedIn
          </a>

          <a
            href={GMAPS}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl text-xs font-semibold text-white transition-all"
            style={{
              background: "rgba(168,85,247,0.12)",
              border: "1px solid rgba(168,85,247,0.2)",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = "rgba(168,85,247,0.22)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = "rgba(168,85,247,0.12)")
            }
          >
            <Navigation className="w-3.5 h-3.5 text-purple-400" />
            Directions
          </a>
        </div>

        {/* Open in Maps full-width */}
        <div className="px-5 pb-4">
          <a
            href={GMAPS}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-xs font-semibold transition-all"
            style={{
              background:
                "linear-gradient(135deg,rgba(0,102,255,0.15),rgba(34,211,238,0.08))",
              border: "1px solid rgba(0,102,255,0.25)",
              color: "#93c5fd",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background =
                "linear-gradient(135deg,rgba(0,102,255,0.28),rgba(34,211,238,0.15))")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background =
                "linear-gradient(135deg,rgba(0,102,255,0.15),rgba(34,211,238,0.08))")
            }
          >
            <ExternalLink className="w-3.5 h-3.5" />
            Open in Google Maps
          </a>
        </div>
      </div>
    </motion.div>
  );
}
