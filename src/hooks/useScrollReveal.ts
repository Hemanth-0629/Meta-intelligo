"use client";

import { useInView } from "react-intersection-observer";

interface ScrollRevealOptions {
  threshold?: number;
  triggerOnce?: boolean;
  delay?: number;
}

export function useScrollReveal({
  threshold = 0.1,
  triggerOnce = true,
}: ScrollRevealOptions = {}) {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce,
  });

  return { ref, inView };
}
