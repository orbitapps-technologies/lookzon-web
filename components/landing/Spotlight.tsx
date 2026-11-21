"use client";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, m, useInView } from "motion/react";
import { cn } from "../../lib/utils";
import { ease } from "./motion";
import { Icon } from "./shared";

export type Spot = { name: string; date: string; text: string; helpful?: number; tone: string };

const CYCLE_MS = 6500;

export function Spotlight({ items }: { items: Spot[] }) {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.4 });
  const running = inView && !paused;

  useEffect(() => {
    if (!running) return;
    const id = setTimeout(() => setI((v) => (v + 1) % items.length), CYCLE_MS);
    return () => clearTimeout(id);
  }, [i, running, items.length]);

  const r = items[i];
  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div
      className="spot"
      ref={ref}
      onPointerEnter={(e) => e.pointerType === "mouse" && setPaused(true)}
      onPointerLeave={() => setPaused(false)}
    >
      <div className="spot-main">
        <div className="spot-top">
          <span className="gp-badge">
            <Icon name="play" /> Google Play review
          </span>
          <span className="spot-count">
            {pad(i + 1)} / {pad(items.length)}
          </span>
        </div>

        <AnimatePresence mode="wait" initial={false}>
          <m.figure
            key={i}
            className="spot-figure"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.45, ease }}
            aria-live="polite"
          >
            <blockquote>“{r.text}”</blockquote>
            <figcaption>
              <span className={`spot-av ${r.tone}`} aria-hidden="true">
                {r.name[0]}
              </span>
              <span>
                <b>{r.name}</b>
                <small>
                  {r.date}
                  {r.helpful ? ` · ${r.helpful} people found this helpful` : ""}
                </small>
              </span>
            </figcaption>
          </m.figure>
        </AnimatePresence>

        <div className="spot-nav">
          <button aria-label="Previous review" onClick={() => setI((i - 1 + items.length) % items.length)}>
            <Icon name="chevL" />
          </button>
          <button aria-label="Next review" onClick={() => setI((i + 1) % items.length)}>
            <Icon name="chevR" />
          </button>
        </div>
      </div>

      <div className="spot-list" role="tablist" aria-label="Choose a review">
        {items.map((it, k) => (
          <button
            key={it.name}
            role="tab"
            aria-selected={k === i}
            className={cn("spot-item", k === i && "active")}
            onClick={() => setI(k)}
          >
            <span className={`spot-av sm ${it.tone}`} aria-hidden="true">
              {it.name[0]}
            </span>
            <span className="spot-item-text">
              <b>{it.name}</b>
              <small>{it.text}</small>
            </span>
            {k === i && (
              <span className="spot-progress" aria-hidden="true">
                {running && (
                  <m.i
                    key={`p-${i}`}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: CYCLE_MS / 1000, ease: "linear" }}
                  />
                )}
              </span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
