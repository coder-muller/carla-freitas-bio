"use client";

import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "motion/react";
import { useRef } from "react";

import { cn } from "@/lib/utils";

interface WordProps {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
  emphasis?: boolean;
}

function Word({ children, progress, range, emphasis }: WordProps) {
  const opacity = useTransform(progress, range, [0.14, 1]);

  return (
    <motion.span style={{ opacity }} className={cn(emphasis && "text-primary italic")}>
      {children}
    </motion.span>
  );
}

function parseWords(text: string) {
  let emphasis = false;
  return text.split(" ").map((raw) => {
    if (raw.startsWith("*")) emphasis = true;
    const word = { text: raw.replaceAll("*", ""), emphasis };
    if (/\*[.,]?$/.test(raw)) emphasis = false;
    return word;
  });
}

interface ScrollTextProps {
  /** Wrap words in *asterisks* to emphasize them. */
  text: string;
  className?: string;
}

/** Paragraph whose words ink in one by one as it scrolls through the viewport. */
export function ScrollText({ text, className }: ScrollTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.5"] });

  const words = parseWords(text);

  if (reduce) {
    return (
      <p ref={ref} className={className}>
        {words.map((word, index) => (
          <span key={index} className={cn(word.emphasis && "text-primary italic")}>
            {word.text}{" "}
          </span>
        ))}
      </p>
    );
  }

  return (
    <p ref={ref} className={className}>
      {words.map((word, index) => {
        const start = index / words.length;
        return (
          <span key={index}>
            <Word progress={scrollYProgress} range={[start, start + 1 / words.length]} emphasis={word.emphasis}>
              {word.text}
            </Word>{" "}
          </span>
        );
      })}
    </p>
  );
}
