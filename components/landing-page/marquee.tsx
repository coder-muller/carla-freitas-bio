"use client";

import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  wrap,
} from "motion/react";
import { useRef } from "react";

import { Logo } from "@/components/logo";
import { SERVICES } from "@/lib/content";
import { cn } from "@/lib/utils";

const BASE_VELOCITY = -1.6;
const COPIES = 4;

/** Service names drifting sideways; scroll speed pushes them faster and flips direction. */
export function Marquee() {
  const reduce = useReducedMotion();
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 4], { clamp: false });
  const direction = useRef(1);
  const x = useTransform(baseX, (value) => `${wrap(-25, -50, value)}%`);

  useAnimationFrame((_, delta) => {
    if (reduce) return;
    const factor = velocityFactor.get();
    if (factor < 0) direction.current = -1;
    else if (factor > 0) direction.current = 1;

    let moveBy = direction.current * BASE_VELOCITY * (delta / 1000);
    moveBy += direction.current * moveBy * factor;
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <section aria-label="Áreas de atuação" className="overflow-clip border-y border-foreground/8 py-7 md:py-9">
      <motion.div className="flex w-max whitespace-nowrap will-change-transform" style={{ x }}>
        {Array.from({ length: COPIES }, (_, copy) => (
          <div key={copy} aria-hidden={copy > 0} className="flex shrink-0 items-center">
            {SERVICES.map((service, index) => (
              <span key={service.short} className="flex items-center">
                <span
                  className={cn(
                    "px-6 font-serif text-4xl leading-none text-foreground md:px-9 md:text-6xl",
                    index % 2 === 1 && "text-primary italic",
                  )}
                >
                  {service.short}
                </span>
                <Logo size={20} className="text-accent" />
              </span>
            ))}
          </div>
        ))}
      </motion.div>
    </section>
  );
}
