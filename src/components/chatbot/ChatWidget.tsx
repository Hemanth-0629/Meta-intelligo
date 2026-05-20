"use client";

import { useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Bot,
  X,
  Send,
  Trash2,
  Minimize2,
  MessageCircle,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import { useChatbot } from "@/hooks/useChatbot";
import { ChatBubble } from "./ChatBubble";
import { TypingIndicator } from "./TypingIndicator";
import { quickSuggestions } from "@/data/knowledge-base";

export function ChatWidget() {
  const {
    messages,
    input,
    setInput,
    isTyping,
    isOpen,
    hasNew,
    toggle,
    close,
    sendMessage,
    sendSuggestion,
    clearHistory,
    handleKeyDown,
    bottomRef,
  } = useChatbot();

  const inputRef = useRef<HTMLInputElement>(null);

  const handleToggle = () => {
    toggle();
    setTimeout(() => inputRef.current?.focus(), 300);
  };

  return (
    <>
      {/* ── Chat Panel ────────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="chat-panel"
            initial={{ opacity: 0, scale: 0.92, y: 20, originX: 1, originY: 1 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ type: "spring", damping: 28, stiffness: 380 }}
            className="fixed bottom-24 right-4 sm:right-6 z-40 w-[92vw] sm:w-[380px] max-h-[600px] flex flex-col rounded-2xl overflow-hidden shadow-2xl"
            style={{
              background: "linear-gradient(145deg, rgba(13,22,41,0.97) 0%, rgba(5,10,20,0.98) 100%)",
              backdropFilter: "blur(40px)",
              WebkitBackdropFilter: "blur(40px)",
              border: "1px solid rgba(255,255,255,0.07)",
              boxShadow: "0 32px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04), 0 0 60px rgba(0,102,255,0.08)",
            }}
          >
            {/* ── Header ── */}
            <div
              className="flex items-center justify-between px-4 py-3.5 border-b border-white/[0.07] flex-shrink-0"
              style={{ background: "linear-gradient(135deg, rgba(0,102,255,0.12), rgba(34,211,238,0.06))" }}
            >
              <div className="flex items-center gap-3">
                {/* Avatar */}
                <div className="relative">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-sm shadow-lg">
                    M
                  </div>
                  {/* Online dot */}
                  <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-green-400 border-2 border-space-900" />
                </div>

                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm font-bold text-white">Mira</span>
                    <span className="px-1.5 py-0.5 rounded text-[9px] font-semibold bg-blue-500/20 text-blue-300 border border-blue-500/20 uppercase tracking-wider">
                      AI
                    </span>
                  </div>
                  <div className="text-[10px] text-green-400 font-medium flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
                    Online — typically replies instantly
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  onClick={clearHistory}
                  title="Clear chat"
                  className="p-1.5 rounded-lg text-white/30 hover:text-white/60 hover:bg-white/[0.06] transition-all"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={close}
                  title="Close chat"
                  className="p-1.5 rounded-lg text-white/30 hover:text-white/70 hover:bg-white/[0.06] transition-all"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* ── Messages ── */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-0 scroll-smooth">
              <AnimatePresence initial={false}>
                {messages.map((msg) => (
                  <ChatBubble
                    key={msg.id}
                    message={msg}
                    onSuggestion={sendSuggestion}
                  />
                ))}
              </AnimatePresence>

              {isTyping && <TypingIndicator />}
              <div ref={bottomRef} />
            </div>

            {/* ── Quick chips (only if few messages) ── */}
            {messages.length <= 2 && (
              <div className="px-4 pb-3 flex flex-wrap gap-1.5 border-t border-white/[0.05] pt-3">
                {quickSuggestions.map((s) => (
                  <button
                    key={s}
                    onClick={() => sendSuggestion(s)}
                    className="flex items-center gap-1 px-3 py-1.5 rounded-full text-[11px] font-medium bg-blue-500/10 border border-blue-500/25 text-blue-300 hover:bg-blue-500/25 transition-all"
                  >
                    <Sparkles className="w-2.5 h-2.5" />
                    {s}
                  </button>
                ))}
              </div>
            )}

            {/* ── Input Bar ── */}
            <div className="px-3 pb-3 pt-2 border-t border-white/[0.06] flex-shrink-0">
              <div className="flex items-center gap-2 bg-white/[0.05] border border-white/[0.08] rounded-xl px-3 py-2 focus-within:border-blue-500/40 focus-within:bg-white/[0.07] transition-all">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask me anything..."
                  disabled={isTyping}
                  className="flex-1 bg-transparent text-sm text-white placeholder-white/25 outline-none disabled:opacity-50"
                  autoComplete="off"
                />
                <button
                  onClick={() => sendMessage(input)}
                  disabled={!input.trim() || isTyping}
                  className="w-8 h-8 rounded-lg bg-blue-600 hover:bg-blue-500 disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center transition-all flex-shrink-0"
                >
                  <Send className="w-3.5 h-3.5 text-white" />
                </button>
              </div>

              {/* Footer links */}
              <div className="flex items-center justify-between mt-2 px-1">
                <span className="text-[10px] text-white/20">
                  Powered by Meta Intelligo AI
                </span>
                <a
                  href="https://wa.me/919059495102"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-[10px] text-green-400/60 hover:text-green-400 transition-colors"
                >
                  <MessageCircle className="w-3 h-3" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Floating Trigger Button ────────────────────────────────────────────── */}
      <motion.button
        onClick={handleToggle}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.93 }}
        className="fixed bottom-6 right-[5.5rem] z-40 w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all"
        style={{
          background: isOpen
            ? "linear-gradient(135deg, #ef4444, #dc2626)"
            : "linear-gradient(135deg, #0066FF, #0052cc)",
          boxShadow: isOpen
            ? "0 8px 32px rgba(239,68,68,0.4)"
            : "0 8px 32px rgba(0,102,255,0.5), 0 0 0 0 rgba(0,102,255,0.3)",
        }}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.18 }}
            >
              <X className="w-5 h-5 text-white" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.18 }}
            >
              <Bot className="w-5 h-5 text-white" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* New-message badge */}
        <AnimatePresence>
          {hasNew && !isOpen && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red-500 border-2 border-space-900 flex items-center justify-center"
            >
              <span className="text-[8px] text-white font-bold">!</span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* ── Pulse ring (idle state) ─────────────────────────────────────────── */}
      {!isOpen && (
        <motion.div
          className="fixed bottom-6 right-[5.5rem] z-30 w-14 h-14 rounded-full pointer-events-none"
          animate={{ scale: [1, 1.5, 1], opacity: [0.4, 0, 0.4] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          style={{ background: "rgba(0, 102, 255, 0.25)" }}
        />
      )}
    </>
  );
}
