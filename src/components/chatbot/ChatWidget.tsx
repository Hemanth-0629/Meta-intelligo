"use client";

import { useRef, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Bot, X, Send, Trash2, MessageCircle, Sparkles,
} from "lucide-react";
import { useChatbot } from "@/hooks/useChatbot";
import { ChatBubble } from "./ChatBubble";
import { TypingIndicator } from "./TypingIndicator";
import { quickSuggestions } from "@/data/knowledge-base";

export function ChatWidget() {
  const {
    messages, input, setInput,
    isTyping, isOpen, hasNew,
    toggle, close,
    sendMessage, sendSuggestion,
    clearHistory, handleKeyDown,
    bottomRef,
  } = useChatbot();

  const inputRef  = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    toggle();
    setTimeout(() => inputRef.current?.focus(), 300);
  };

  // Prevent trackpad/wheel scroll from bubbling to the page behind the widget
  const handleWheel = useCallback((e: React.WheelEvent<HTMLDivElement>) => {
    const el = scrollRef.current;
    if (!el) return;
    const { scrollTop, scrollHeight, clientHeight } = el;
    const atTop    = scrollTop === 0 && e.deltaY < 0;
    const atBottom = scrollTop + clientHeight >= scrollHeight && e.deltaY > 0;
    if (!atTop && !atBottom) {
      e.stopPropagation();
    }
  }, []);

  const showChips = messages.length <= 2;

  return (
    <>
      {/* ── Chat Panel ────────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="chat-panel"
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 28, stiffness: 360 }}
            className="fixed bottom-24 right-4 sm:right-6 z-40 flex flex-col rounded-2xl overflow-hidden shadow-2xl"
            style={{
              width: "min(92vw, 390px)",
              height: "min(85vh, 580px)",
              background: "linear-gradient(145deg,rgba(13,22,41,0.97),rgba(5,10,20,0.98))",
              backdropFilter: "blur(40px)",
              WebkitBackdropFilter: "blur(40px)",
              border: "1px solid rgba(255,255,255,0.07)",
              boxShadow: "0 32px 80px rgba(0,0,0,0.6),0 0 0 1px rgba(255,255,255,0.04),0 0 60px rgba(0,102,255,0.08)",
            }}
          >
            {/* ── Header ──────────────────────────────────────────────────────── */}
            <div
              className="flex items-center justify-between px-4 py-3.5 flex-shrink-0 border-b border-white/[0.06]"
              style={{ background: "linear-gradient(135deg,rgba(0,102,255,0.12),rgba(34,211,238,0.05))" }}
            >
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-sm shadow-lg">
                    M
                  </div>
                  <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-green-400 border-2 border-[#050a14]" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm font-bold text-white">Mira</span>
                    <span className="px-1.5 py-0.5 rounded text-[9px] font-semibold bg-blue-500/20 text-blue-300 border border-blue-500/20 uppercase tracking-wider">AI</span>
                  </div>
                  <div className="text-[10px] text-green-400 font-medium flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block animate-pulse" />
                    Online · responds instantly
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-0.5">
                <button onClick={clearHistory} title="Clear chat"
                  className="p-2 rounded-lg text-white/30 hover:text-white/60 hover:bg-white/[0.06] transition-all">
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
                <button onClick={close} title="Close"
                  className="p-2 rounded-lg text-white/30 hover:text-white/70 hover:bg-white/[0.06] transition-all">
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* ── Messages scroll area ─────────────────────────────────────────── */}
            <div
              ref={scrollRef}
              onWheel={handleWheel}
              className="flex-1 overflow-y-auto px-4 py-4"
              style={{
                overscrollBehavior: "contain",
                WebkitOverflowScrolling: "touch",
                scrollbarWidth: "thin",
                scrollbarColor: "rgba(0,102,255,0.25) transparent",
              }}
            >
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
              <div ref={bottomRef} className="h-2" />
            </div>

            {/* ── Quick start chips (only on fresh session) ────────────────────── */}
            <AnimatePresence>
              {showChips && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="px-4 pt-3 pb-2 border-t border-white/[0.05] flex-shrink-0"
                >
                  <p className="text-[10px] text-white/25 mb-2 uppercase tracking-widest font-medium">Quick start</p>
                  <div className="flex flex-wrap gap-1.5">
                    {quickSuggestions.map((s) => (
                      <button
                        key={s}
                        onClick={() => sendSuggestion(s)}
                        className="flex items-center gap-1 px-3 py-1.5 rounded-full text-[11px] font-medium bg-blue-500/10 border border-blue-500/25 text-blue-300 hover:bg-blue-500/25 hover:border-blue-400/40 transition-all"
                      >
                        <Sparkles className="w-2.5 h-2.5" />
                        {s}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* ── Input bar ───────────────────────────────────────────────────── */}
            <div className="px-3 pb-3 pt-2.5 border-t border-white/[0.06] flex-shrink-0">
              <div className="flex items-center gap-2 bg-white/[0.05] border border-white/[0.08] rounded-xl px-3 py-2.5 focus-within:border-blue-500/40 focus-within:bg-white/[0.07] transition-all">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask me anything about Meta Intelligo…"
                  disabled={isTyping}
                  className="flex-1 min-w-0 bg-transparent text-sm text-white placeholder-white/20 outline-none disabled:opacity-40"
                  autoComplete="off"
                  autoCorrect="off"
                  spellCheck={false}
                />
                <button
                  onClick={() => sendMessage(input)}
                  disabled={!input.trim() || isTyping}
                  className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 disabled:opacity-25 disabled:cursor-not-allowed flex items-center justify-center transition-all flex-shrink-0 shadow-sm"
                >
                  <Send className="w-3.5 h-3.5 text-white" />
                </button>
              </div>

              <div className="flex items-center justify-between mt-2 px-0.5">
                <span className="text-[10px] text-white/20">Powered by Meta Intelligo AI</span>
                <a
                  href="https://wa.me/919059495102"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-[10px] text-green-400/50 hover:text-green-400 transition-colors"
                >
                  <MessageCircle className="w-3 h-3" />
                  WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Floating trigger ──────────────────────────────────────────────────── */}
      <motion.button
        onClick={handleToggle}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.93 }}
        aria-label={isOpen ? "Close chat" : "Chat with Mira"}
        className="fixed bottom-6 right-[5.5rem] z-40 w-14 h-14 rounded-full flex items-center justify-center shadow-2xl"
        style={{
          background: isOpen
            ? "linear-gradient(135deg,#ef4444,#dc2626)"
            : "linear-gradient(135deg,#0066FF,#0047cc)",
          boxShadow: isOpen
            ? "0 8px 32px rgba(239,68,68,0.4)"
            : "0 8px 32px rgba(0,102,255,0.5)",
        }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div key="x"
              initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
              <X className="w-5 h-5 text-white" />
            </motion.div>
          ) : (
            <motion.div key="bot"
              initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
              <Bot className="w-5 h-5 text-white" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Unread badge */}
        <AnimatePresence>
          {hasNew && !isOpen && (
            <motion.div
              initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}
              className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red-500 border-2 border-[#050a14] flex items-center justify-center"
            >
              <span className="text-[8px] text-white font-bold">!</span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* ── Idle pulse ring ───────────────────────────────────────────────────── */}
      {!isOpen && (
        <motion.div
          className="fixed bottom-6 right-[5.5rem] z-30 w-14 h-14 rounded-full pointer-events-none"
          animate={{ scale: [1, 1.6, 1], opacity: [0.35, 0, 0.35] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
          style={{ background: "rgba(0,102,255,0.22)" }}
        />
      )}
    </>
  );
}
