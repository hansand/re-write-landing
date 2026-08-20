"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type RevealVariant = "up" | "up-sm" | "scale";

interface RevealProps {
  children: ReactNode;
  as?: "div" | "li";
  className?: string;
  delayMs?: number;
  variant?: RevealVariant;
}

export function Reveal({ children, as = "div", className = "", delayMs = 0, variant = "up" }: RevealProps) {
  const ref = useRef<HTMLDivElement & HTMLLIElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const classes = `reveal reveal-${variant}${visible ? " is-visible" : ""}${className ? ` ${className}` : ""}`;
  const style = delayMs ? { transitionDelay: `${delayMs}ms` } : undefined;

  if (as === "li") {
    return (
      <li ref={ref} className={classes} style={style}>
        {children}
      </li>
    );
  }

  return (
    <div ref={ref} className={classes} style={style}>
      {children}
    </div>
  );
}
