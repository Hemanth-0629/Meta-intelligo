"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import type { ChatMessage, ChatSession } from "@/types/chatbot";
import { buildResponse, generateId } from "@/utils/chatbot-engine";
import { greetings, quickSuggestions } from "@/data/knowledge-base";

const SESSION_KEY = "mi_chat_session_v2";
const MAX_HISTORY = 40;

// Simulate realistic typing delay based on response length
function typingDelay(text: string): number {
  return Math.min(500 + text.length * 1.2, 1800);
}

function makeGreeting(): ChatMessage {
  return {
    id: generateId(),
    role: "bot",
    text: greetings[0],
    timestamp: new Date(),
    suggestions: quickSuggestions,
  };
}

function loadSession(): ChatMessage[] {
  if (typeof window === "undefined" || !window.localStorage) return [];
  try {
    const raw = window.localStorage.getItem(SESSION_KEY);
    if (!raw) return [];
    const parsed: ChatSession = JSON.parse(raw);
    if (!parsed.messages?.length) return [];
    return parsed.messages.map((m) => ({
      ...m,
      timestamp: new Date(m.timestamp),
    }));
  } catch {
    return [];
  }
}

function saveSession(messages: ChatMessage[]) {
  if (typeof window === "undefined" || !window.localStorage) return;
  try {
    const session: ChatSession = {
      messages: messages.slice(-MAX_HISTORY),
      context: [],
    };
    window.localStorage.setItem(SESSION_KEY, JSON.stringify(session));
  } catch { /* quota exceeded */ }
}

export function useChatbot() {
  const [messages, setMessages] = useState<ChatMessage[]>([makeGreeting()]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [hasNew, setHasNew] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const hydrated = useRef(false);

  // Hydrate localStorage once on mount
  useEffect(() => {
    if (hydrated.current) return;
    hydrated.current = true;
    const saved = loadSession();
    if (saved.length > 0) setMessages(saved);
  }, []);

  // Persist on every change
  useEffect(() => {
    if (!hydrated.current) return;
    saveSession(messages);
  }, [messages]);

  // Auto-scroll to latest message
  useEffect(() => {
    setTimeout(() => {
      bottomRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
    }, 50);
  }, [messages, isTyping]);

  // Badge when closed and new message arrives
  useEffect(() => {
    if (!isOpen && messages.length > 1) setHasNew(true);
  }, [messages, isOpen]);

  const open  = useCallback(() => { setIsOpen(true); setHasNew(false); }, []);
  const close = useCallback(() => setIsOpen(false), []);
  const toggle = useCallback(() => {
    setIsOpen((v) => { if (!v) setHasNew(false); return !v; });
  }, []);

  // ── Core send: used for both free-text AND chip labels ──────────────────────
  // displayText = what shows in the bubble
  // queryText   = what gets searched (same for free text; chip label for chips)
  const _send = useCallback(
    (displayText: string, queryText: string) => {
      const display = displayText.trim();
      const query   = queryText.trim();
      if (!display || !query || isTyping) return;

      const userMsg: ChatMessage = {
        id: generateId(),
        role: "user",
        text: display,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, userMsg]);
      setInput("");
      setIsTyping(true);

      const response = buildResponse(query);
      const delay    = typingDelay(response.text);

      setTimeout(() => {
        const botMsg: ChatMessage = {
          id: generateId(),
          role: "bot",
          text: response.text,
          timestamp: new Date(),
          suggestions: response.suggestions,
          cta: response.cta,
        };
        setMessages((prev) => [...prev, botMsg]);
        setIsTyping(false);
      }, delay);
    },
    [isTyping]
  );

  // Free-text send (Enter key / Send button)
  const sendMessage = useCallback(
    (text: string) => _send(text, text),
    [_send]
  );

  // Chip send: display label, but engine sees the label too
  // (engine's CHIP_TO_ID map resolves it instantly to the correct entry)
  const sendSuggestion = useCallback(
    (label: string) => _send(label, label),
    [_send]
  );

  const clearHistory = useCallback(() => {
    setMessages([makeGreeting()]);
    try { if (typeof window !== "undefined" && window.localStorage) window.localStorage.removeItem(SESSION_KEY); } catch { /* */ }
  }, []);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        sendMessage(input);
      }
    },
    [input, sendMessage]
  );

  return {
    messages, input, setInput,
    isTyping, isOpen, hasNew,
    open, close, toggle,
    sendMessage, sendSuggestion,
    clearHistory, handleKeyDown,
    bottomRef,
  };
}
