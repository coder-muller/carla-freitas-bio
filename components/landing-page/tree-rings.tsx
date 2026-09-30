"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "motion/react";
import { useEffect, useMemo } from "react";

import { Logo } from "@/components/logo";
import { CONTACT } from "@/lib/content";
import { cn, mapRange } from "@/lib/utils";

const SIZE = 600;
const CENTER = SIZE / 2;
const POINTS = 72;
const CORE_ANGLE = -0.42;

/** Small seeded PRNG so server and client draw the exact same rings. */
function mulberry32(seed: number) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const round = (value: number) => Math.round(value * 100) / 100;

interface Ring {
  d: string;
  tick: { x: number; y: number };
  depth: number;
  latewood: boolean;
}

function buildRings(count: number): Ring[] {
  const random = mulberry32(2004);
  const rings: Ring[] = [];
  let radius = 36;

  for (let k = 0; k < count; k++) {
    const progress = k / (count - 1);
    const eccentricity = 0.09 * progress;
    const jitterFreq = 4 + Math.floor(random() * 5);
    const jitterPhase = random() * Math.PI * 2;

    const r = (theta: number) =>
      radius *
      (1 +
        0.045 * Math.sin(2 * theta + 0.6) +
        0.03 * Math.sin(3 * theta + 2.1) +
        0.018 * Math.sin(5 * theta + 4) +
        0.006 * Math.sin(jitterFreq * theta + jitterPhase) +
        eccentricity * Math.cos(theta - 0.9));

    const points = Array.from({ length: POINTS }, (_, i) => {
      const theta = (i / POINTS) * Math.PI * 2;
      return [CENTER + r(theta) * Math.cos(theta), CENTER + r(theta) * Math.sin(theta)];
    });

    // Closed Catmull-Rom spline converted to cubic Béziers.
    let d = `M${round(points[0][0])},${round(points[0][1])}`;
    for (let i = 0; i < POINTS; i++) {
      const p0 = points[(i - 1 + POINTS) % POINTS];
      const p1 = points[i];
      const p2 = points[(i + 1) % POINTS];
      const p3 = points[(i + 2) % POINTS];
      d += `C${round(p1[0] + (p2[0] - p0[0]) / 6)},${round(p1[1] + (p2[1] - p0[1]) / 6)} ${round(
        p2[0] - (p3[0] - p1[0]) / 6,
      )},${round(p2[1] - (p3[1] - p1[1]) / 6)} ${round(p2[0])},${round(p2[1])}`;
    }

    rings.push({
      d: `${d}Z`,
      tick: {
        x: round(CENTER + r(CORE_ANGLE) * Math.cos(CORE_ANGLE)),
        y: round(CENTER + r(CORE_ANGLE) * Math.sin(CORE_ANGLE)),
      },
      depth: 1 - progress * 0.85,
      latewood: k % 5 === 4,
    });

    radius += 7 + random() * 6.5;
  }

  return rings;
}


interface RingLayerProps {
  ring: Ring;
  index: number;
  px: MotionValue<number>;
  py: MotionValue<number>;
}

function RingLayer({ ring, index, px, py }: RingLayerProps) {
  const x = useTransform(px, (value) => value * 18 * ring.depth);
  const y = useTransform(py, (value) => value * 18 * ring.depth);

  return (
    <motion.g style={{ x, y }}>
      <path
        d={ring.d}
        pathLength={1}
        className="ring-draw"
        style={{ "--i": index } as React.CSSProperties}
        fill="none"
        stroke="currentColor"
        strokeOpacity={ring.latewood ? 0.55 : 0.2 + (1 - ring.depth) * 0.15}
        strokeWidth={ring.latewood ? 1.6 : 1}
        vectorEffect="non-scaling-stroke"
      />
      <path
        d={ring.d}
        className="ring-pulse"
        style={{ "--i": index } as React.CSSProperties}
        fill="none"
        stroke="var(--accent)"
        strokeWidth={2}
        vectorEffect="non-scaling-stroke"
      />
      <circle
        cx={ring.tick.x}
        cy={ring.tick.y}
        r={ring.latewood ? 3.2 : 2}
        className="fade-up"
        style={{ "--d": `${900 + index * 45}ms` } as React.CSSProperties}
        fill={ring.latewood ? "var(--accent)" : "currentColor"}
        fillOpacity={ring.latewood ? 1 : 0.5}
      />
    </motion.g>
  );
}

export function TreeRings({ years, className }: { years: number; className?: string }) {
  const rings = useMemo(() => buildRings(years), [years]);
  const inner = rings[0].tick;
  const outer = rings[rings.length - 1].tick;
  const reduce = useReducedMotion();
  const px = useSpring(useMotionValue(0), { stiffness: 60, damping: 18 });
  const py = useSpring(useMotionValue(0), { stiffness: 60, damping: 18 });
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, (value) => mapRange(value, [0, 900], [1, 1.14]));
  const rotate = useTransform(scrollY, (value) => mapRange(value, [0, 900], [0, -8]));
  const opacity = useTransform(scrollY, (value) => mapRange(value, [0, 700], [1, 0.25]));

  useEffect(() => {
    if (reduce || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    function onMove(event: PointerEvent) {
      px.set((event.clientX / window.innerWidth) * 2 - 1);
      py.set((event.clientY / window.innerHeight) * 2 - 1);
    }

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [reduce, px, py]);

  const coreX = useTransform(px, (value) => value * 9);
  const coreY = useTransform(py, (value) => value * 9);
  const logoX = useTransform(px, (value) => value * 18);
  const logoY = useTransform(py, (value) => value * 18);

  return (
    <motion.div
      aria-hidden="true"
      className={cn("pointer-events-none text-primary select-none", className)}
      style={reduce ? undefined : { scale, rotate, opacity }}
    >
      <div className="relative size-full">
      <svg viewBox={`0 0 ${SIZE} ${SIZE}`} className="size-full overflow-visible">
        <g className="fade-up" style={{ "--d": "1100ms" } as React.CSSProperties}>
          <motion.line
            x1={inner.x}
            y1={inner.y}
            x2={outer.x + (outer.x - CENTER) * 0.14}
            y2={outer.y + (outer.y - CENTER) * 0.14}
            stroke="currentColor"
            strokeOpacity={0.35}
            strokeDasharray="2 5"
            style={{ x: coreX, y: coreY }}
            vectorEffect="non-scaling-stroke"
          />
        </g>

        {rings.map((ring, index) => (
          <RingLayer key={index} ring={ring} index={index} px={px} py={py} />
        ))}

        <g className="fade-up font-mono" style={{ "--d": "1700ms" } as React.CSSProperties}>
          <text x={outer.x + 34} y={outer.y - 28} fontSize={13} fill="currentColor" fillOpacity={0.75} letterSpacing="0.08em">
            HOJE
          </text>
          <text x={inner.x + 18} y={inner.y - 40} fontSize={13} fill="currentColor" fillOpacity={0.75} letterSpacing="0.08em">
            {CONTACT.since}
          </text>
        </g>
      </svg>

      <motion.div
        className="absolute top-1/2 left-1/2 grid size-[12%] -translate-x-1/2 -translate-y-1/2 place-items-center"
        style={{ x: logoX, y: logoY }}
      >
        <span className="fade-up grid size-full place-items-center" style={{ "--d": "500ms" } as React.CSSProperties}>
          <Logo size={38} className="h-auto w-[62%] text-primary" />
        </span>
      </motion.div>
      </div>
    </motion.div>
  );
}
