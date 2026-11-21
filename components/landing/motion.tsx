"use client";
import type { ReactNode } from "react";
import { LazyMotion, MotionConfig, domAnimation, m, useScroll, useSpring } from "motion/react";

export const ease = [0.22, 1, 0.36, 1] as const;

/** Loads only the DOM animation features (~15kb) instead of the full bundle, and respects reduced-motion. */
export function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  );
}

export function Reveal({
  children,
  className,
  delay = 0,
  y = 24,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  return (
    <m.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.8, ease, delay }}
    >
      {children}
    </m.div>
  );
}

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.3 });
  return <m.div className="scroll-progress" style={{ scaleX }} aria-hidden="true" />;
}
