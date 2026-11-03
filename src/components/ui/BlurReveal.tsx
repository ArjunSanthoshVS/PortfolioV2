"use client";

import React, { useEffect, useRef, useState } from "react";

export interface BlurRevealProps {
  children: React.ReactNode;
  as?: React.ElementType;
  delay?: number;
  duration?: number;
  className?: string;
  style?: React.CSSProperties;
  immediate?: boolean;
  threshold?: number;
  rootMargin?: string;
}

export default function BlurReveal({
  children,
  as: Component = "div",
  delay = 0,
  duration = 700,
  className = "",
  style,
  immediate = false,
  threshold = 0.1,
  rootMargin = "0px 0px -30px 0px",
}: BlurRevealProps) {
  const [isRevealed, setIsRevealed] = useState(immediate);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (immediate) {
      setIsRevealed(true);
      return;
    }

    if (typeof window === "undefined") return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsRevealed(true);
      return;
    }

    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      setIsRevealed(true);
      return;
    }

    // Check if element is already within viewport
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setIsRevealed(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
          observer.unobserve(el);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [immediate, threshold, rootMargin]);

  return (
    <Component
      ref={ref}
      className={`blur-reveal-scroll ${isRevealed ? "is-revealed" : ""} ${className}`.trim()}
      style={{
        transitionDelay: delay ? `${delay}ms` : undefined,
        transitionDuration: duration ? `${duration}ms` : undefined,
        ...style,
      }}
    >
      {children}
    </Component>
  );
}

