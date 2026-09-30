"use client";

import { animate, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef } from "react";

interface CountUpProps {
  to: number;
  from?: number;
  duration?: number;
  className?: string;
}

export function CountUp({ to, from = 0, duration = 2, className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -15% 0px" });
  const reduce = useReducedMotion();

  useEffect(() => {
    const node = ref.current;
    if (!node || !inView) return;
    if (reduce) {
      node.textContent = String(to);
      return;
    }

    const controls = animate(from, to, {
      duration,
      ease: [0.23, 1, 0.32, 1],
      onUpdate: (value) => {
        node.textContent = String(Math.round(value));
      },
    });

    return () => controls.stop();
  }, [inView, reduce, from, to, duration]);

  return (
    <span ref={ref} className={className} style={{ fontVariantNumeric: "tabular-nums" }}>
      {to}
    </span>
  );
}
