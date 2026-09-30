"use client";

import { motion, type Variants } from "motion/react";

import { cn } from "@/lib/utils";

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

const item: Variants = {
  hidden: { opacity: 0, transform: "translateY(28px)", filter: "blur(6px)" },
  visible: {
    opacity: 1,
    transform: "translateY(0px)",
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: EASE_OUT },
  },
};

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  return (
    <motion.div
      className={className}
      variants={item}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

interface RevealGroupProps {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  as?: "div" | "ul" | "ol";
}

export function RevealGroup({ children, className, stagger = 0.07, as = "div" }: RevealGroupProps) {
  const Component = motion[as];

  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: stagger } } }}
    >
      {children}
    </Component>
  );
}

interface RevealItemProps {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "li" | "article";
}

export function RevealItem({ children, className, as = "div" }: RevealItemProps) {
  const Component = motion[as];

  return (
    <Component className={cn(className)} variants={item}>
      {children}
    </Component>
  );
}
