"use client";

import { motion } from "framer-motion";
import { ExternalLink, MessageCircle } from "lucide-react";
import Link from "next/link";
import type { ChatMessage } from "@/types/chatbot";
import { renderMarkdown } from "@/utils/chatbot-engine";

interface ChatBubbleProps {
  message: ChatMessage;
  onSuggestion: (s: string) => void;
}

function formatTime(d: Date) {
  return d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

export function ChatBubble({ message, onSuggestion }: ChatBubbleProps) {
  const isBot = message.role === "bot";

  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className={`flex items-end gap-2 mb-3 ${isBot ? "flex-row" : "flex-row-reverse"}`}
    >
      {/* Bot avatar */}
      {isBot && (
        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0 text-white text-[10px] font-bold shadow-sm self-end">
          M
        </div>
      )}

      <div className={`max-w-[82%] flex flex-col ${isBot ? "items-start" : "items-end"}`}>
        {/* Message bubble */}
        <div
          className={`px-4 py-3 rounded-2xl text-sm leading-relaxed ${
            isBot
              ? "rounded-bl-sm bg-white/[0.06] border border-white/[0.08] text-white/85"
              : "rounded-br-sm bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-md"
          }`}
        >
          {isBot ? (
            <div
              className="space-y-1"
              dangerouslySetInnerHTML={{ __html: renderMarkdown(message.text) }}
            />
          ) : (
            <span>{message.text}</span>
          )}
        </div>

        {/* Timestamp */}
        <span className="text-[10px] text-white/25 mt-1 px-1">
          {formatTime(message.timestamp)}
        </span>

        {/* CTA button */}
        {isBot && message.cta && (
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mt-2"
          >
            {message.cta.external ? (
              <a
                href={message.cta.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                  message.cta.variant === "whatsapp"
                    ? "bg-green-500 hover:bg-green-400 text-white"
                    : "bg-blue-600 hover:bg-blue-500 text-white"
                }`}
              >
                {message.cta.variant === "whatsapp" && (
                  <MessageCircle className="w-3.5 h-3.5" />
                )}
                {message.cta.label}
                <ExternalLink className="w-3 h-3 opacity-70" />
              </a>
            ) : (
              <Link
                href={message.cta.href}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white transition-all"
              >
                {message.cta.label}
              </Link>
            )}
          </motion.div>
        )}

        {/* Suggestion chips */}
        {isBot && message.suggestions && message.suggestions.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="flex flex-wrap gap-1.5 mt-2"
          >
            {message.suggestions.map((s) => (
              <button
                key={s}
                onClick={() => onSuggestion(s)}
                className="px-3 py-1.5 rounded-full text-[11px] font-medium bg-white/[0.05] border border-white/[0.1] text-white/60 hover:bg-blue-500/20 hover:border-blue-500/40 hover:text-blue-300 transition-all"
              >
                {s}
              </button>
            ))}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
