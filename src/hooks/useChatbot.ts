"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import type { ChatMessage, ChatSession } from "@/types/chatbot";
import {
  buildResponse,
  generateId,
  resolveSuggestion,
} from "@/utils/chatbot-engine";
import { greetings, quickSuggestions } from "@/data/knowledge-base";

const SESSION_KEY = "mi_chat_session";
const MAX_HISTORY = 40;
const TYPING_DELAY_MIN = 600;
const TYPING_DELAY_MAX = 1400;

function typingDelay(text: string): number {
  // Simulate reading time — longer messages take a bit more
  const base = TYPING_DELAY_MIN;
  const extra = Math.min(text.length * 1.5, TYPING_DELAY_MAX - TYPING_DELAY_MIN);
  return base + extra;
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
  if (typeof window === "undefined") return [makeGreeting()];
  try {
    const raw = localStorage.getItem(SESSION_KEY);
    if (!raw) return [makeGreeting()];
    const parsed: ChatSession = JSON.parse(raw);
    // Re-hydrate Date objects
    return parsed.messages.map((m) => ({
      ...m,
      timestamp: new Date(m.timestamp),
    }));
  } catch {
    return [makeGreeting()];
  }
}

function saveSession(messages: ChatMessage[]) {
  if (typeof window === "undefined") return;
  try {
    const session: ChatSession = {
      messages: messages.slice(-MAX_HISTORY),
      context: [],
    };
    localStorage.setItem(SESSION_KEY, JSON.stringify(session));
  } catch {
    /* quota exceeded — silently skip */
  }
}

export function useChatbot() {
  const [messages, setMessages] = useState<ChatMessage[]>([makeGreeting()]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [hasNew, setHasNew] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const hydrated = useRef(false);

  // Hydrate from localStorage after mount
  useEffect(() => {
    if (hydrated.current) return;
    hydrated.current = true;
    const saved = loadSession();
    if (saved.length > 1) setMessages(saved);
  }, []);

  // Save on every change
  useEffect(() => {
    if (!hydrated.current) return;
    saveSession(messages);
  }, [messages]);

  // Auto-scroll
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  // Notification badge when closed
  useEffect(() => {
    if (!isOpen && messages.length > 1) setHasNew(true);
  }, [messages, isOpen]);

  const open = useCallback(() => {
    setIsOpen(true);
    setHasNew(false);
  }, []);

  const close = useCallback(() => setIsOpen(false), []);
  const toggle = useCallback(() => {
    setIsOpen((v) => {
      if (!v) setHasNew(false);
      return !v;
    });
  }, []);

  const sendMessage = useCallback(
    async (rawText: string) => {
      const text = rawText.trim();
      if (!text || isTyping) return;

      // Add user message
      const userMsg: ChatMessage = {
        id: generateId(),
        role: "user",
        text,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, userMsg]);
      setInput("");
      setIsTyping(true);

      // Build response
      const response = buildResponse(text);
      const delay = typingDelay(response.text);

      await new Promise((r) => setTimeout(r, delay));

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
    },
    [isTyping]
  );

  const sendSuggestion = useCallback(
    (label: string) => {
      const resolved = resolveSuggestion(label);
      // Show chip label as user text but search with the mapped query
      const text = label.trim();
      if (!text || isTyping) return;

      const userMsg: ChatMessage = {
        id: generateId(),
        role: "user",
        text,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, userMsg]);
      setIsTyping(true);

      const response = buildResponse(resolved);
      const delay = typingDelay(response.text);

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

  const clearHistory = useCallback(() => {
    const fresh = makeGreeting();
    setMessages([fresh]);
    localStorage.removeItem(SESSION_KEY);
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
    messages,
    input,
    setInput,
    isTyping,
    isOpen,
    hasNew,
    open,
    close,
    toggle,
    sendMessage,
    sendSuggestion,
    clearHistory,
    handleKeyDown,
    bottomRef,
  };
}
