"use client";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { AnimatePresence, m, useInView } from "motion/react";
import { cn } from "../../lib/utils";
import { features } from "./data";
import { Reveal, ease } from "./motion";
import { Icon } from "./shared";

const CYCLE_MS = 7000;

export function Features() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.35 });
  const running = inView && !paused;

  useEffect(() => {
    if (!running) return;
    const id = setTimeout(() => setActive((a) => (a + 1) % features.length), CYCLE_MS);
    return () => clearTimeout(id);
  }, [active, running]);

  const f = features[active];

  return (
    <section className="section shell" id="features">
      <Reveal className="section-heading">
        <div>
          <span className="kicker">Why Lookzon</span>
          <h2>
            Everything you&apos;d check on.
            <br />
            <em>Handled quietly.</em>
          </h2>
        </div>
        <p>
          Six tools that work in the background, so your family can get on with their day — and you
          can get on with yours. Tap any one to try it.
        </p>
      </Reveal>

      <Reveal>
        <div
          className="showcase"
          ref={ref}
          onPointerEnter={(e) => e.pointerType === "mouse" && setPaused(true)}
          onPointerLeave={() => setPaused(false)}
        >
          <div className="feature-list" role="tablist" aria-label="Lookzon features">
            {features.map((item, i) => (
              <button
                key={item.title}
                role="tab"
                id={`feature-tab-${i}`}
                aria-selected={active === i}
                aria-controls="feature-stage"
                className={cn("feature-tab", active === i && "active")}
                onClick={() => setActive(i)}
              >
                <span className="tab-icon">
                  <Icon name={item.icon} />
                </span>
                <span className="tab-text">
                  <b>{item.title}</b>
                  <small>{item.tag}</small>
                </span>
                {active === i && (
                  <span className="tab-progress" aria-hidden="true">
                    {running && (
                      <m.i
                        key={`${i}-${active}`}
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

          <div
            className="stage"
            id="feature-stage"
            role="tabpanel"
            aria-labelledby={`feature-tab-${active}`}
          >
            <AnimatePresence mode="wait" initial={false}>
              <m.div
                key={active}
                className="stage-inner"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.38, ease }}
              >
                <div className="stage-visual">{visuals[active]}</div>
                <div className="stage-copy">
                  <span className="feature-tag">{f.tag}</span>
                  <h3>{f.title}</h3>
                  <p>{f.body}</p>
                </div>
              </m.div>
            </AnimatePresence>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

const stagger = (i: number, base = 0.1) => ({
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease, delay: base + i * 0.12 },
});

function VoiceViz() {
  return (
    <div className="viz viz-voice">
      <div className="wave compact" aria-hidden="true">
        {Array.from({ length: 13 }, (_, i) => (
          <b key={i} />
        ))}
      </div>
      <m.div className="bubble user" lang="hi" {...stagger(0)}>
        <small>YOU</small>“Rahul कहाँ है?”
      </m.div>
      <m.div className="bubble ai" lang="hi" {...stagger(1, 0.5)}>
        <small>LOOKZON</small>Rahul school में है — 8:42 पर पहुँचा था।
      </m.div>
    </div>
  );
}

function LiveViz() {
  const people = [
    { i: "M", x: "28%", y: "62%", c: "mint" },
    { i: "R", x: "66%", y: "30%", c: "violet" },
    { i: "P", x: "78%", y: "72%", c: "amber" },
  ];
  return (
    <div className="viz viz-live">
      {people.map((p, k) => (
        <m.span
          key={p.i}
          className={`live-av ${p.c}`}
          style={{ left: p.x, top: p.y }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.15 + k * 0.12 }}
        >
          {p.i}
        </m.span>
      ))}
      <m.span className="live-chip lc-1" {...stagger(0, 0.5)}>
        <i className="blink-dot" /> Updated 12 s ago
      </m.span>
      <m.span className="live-chip lc-2" {...stagger(1, 0.5)}>
        <Icon name="battery" /> GPS resting · phone is still
      </m.span>
    </div>
  );
}

function CrashViz() {
  return (
    <div className="viz viz-crash">
      <div className="crash-head">
        <span>Motion sensors</span>
        <span>Live</span>
      </div>
      <svg className="crash-graph" viewBox="0 0 240 110" aria-hidden="true">
        <path d="M0 60H240" stroke="rgba(232,238,242,.08)" strokeDasharray="3 4" />
        <m.path
          d="M0 60 L18 57 L34 62 L52 58 L70 61 L88 58 L100 60 L108 18 L115 98 L122 30 L130 74 L140 58 L158 61 L176 59 L194 60 L212 59 L240 60"
          fill="none"
          stroke="#5eead4"
          strokeWidth="2"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.4, ease: "easeInOut" }}
        />
        <m.rect
          x="100"
          y="8"
          width="34"
          height="96"
          rx="6"
          fill="#fbbf2414"
          stroke="#fbbf2455"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        />
      </svg>
      <div className="crash-checks">
        {[0, 1, 2, 3, 4].map((i) => (
          <span className="check-bar" key={i}>
            <m.i
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.3, delay: 1.1 + i * 0.22 }}
            />
          </span>
        ))}
        <span className="mono">5 / 5 checks</span>
      </div>
      <m.div className="crash-result" {...stagger(0, 2.3)}>
        <Icon name="siren" /> Real impact confirmed — circle alerted with live location
      </m.div>
    </div>
  );
}

function RouteViz() {
  const stops = [
    { time: "8:10 am", place: "Left Home", meta: "HSR Layout" },
    { time: "8:42 am", place: "Reached School", meta: "Avg 24 km/h" },
    { time: "3:30 pm", place: "Left School", meta: "Picked up by Papa" },
    { time: "4:05 pm", place: "At Coaching", meta: "Stayed 2 h" },
  ];
  return (
    <div className="viz viz-route">
      <m.span
        className="route-line"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1, ease }}
      />
      {stops.map((s, i) => (
        <m.div className="route-item" key={s.time} {...stagger(i, 0.15)}>
          <span>
            <b>{s.place}</b>
            <small>{s.meta}</small>
          </span>
          <span className="route-time">{s.time}</span>
        </m.div>
      ))}
    </div>
  );
}

const zoneSteps = [100, 250, 500, 1000, 2500, 5000];
function ZoneViz() {
  const [s, setS] = useState(2);
  const value = zoneSteps[s];
  const label = value >= 1000 ? `${value / 1000} km` : `${value} m`;
  return (
    <div className="viz viz-zone">
      <div className="zone-map">
        <m.div
          className="zone-circle"
          animate={{ scale: (28 + s * 16) / 110 }}
          transition={{ type: "spring", stiffness: 180, damping: 20 }}
        />
        <span className="zone-pin">
          <Icon name="home" />
        </span>
        <span className="live-chip zone-label">Home · {label}</span>
      </div>
      <label className="zone-control">
        <span>Drag to resize</span>
        <input
          type="range"
          min={0}
          max={zoneSteps.length - 1}
          value={s}
          onChange={(e) => setS(Number(e.target.value))}
          aria-valuetext={label}
        />
        <span className="mono">{label}</span>
      </label>
    </div>
  );
}

function arc(i: number) {
  const r = 66;
  const c = 75;
  const gap = 10;
  const rad = (deg: number) => ((deg - 90) * Math.PI) / 180;
  const a0 = rad(i * 90 + gap / 2);
  const a1 = rad((i + 1) * 90 - gap / 2);
  const pt = (a: number) => `${(c + r * Math.cos(a)).toFixed(2)} ${(c + r * Math.sin(a)).toFixed(2)}`;
  return `M ${pt(a0)} A ${r} ${r} 0 0 1 ${pt(a1)}`;
}

function PanicViz() {
  const [count, setCount] = useState(0);
  const sent = count >= 4;
  useEffect(() => {
    if (!sent) return;
    const id = setTimeout(() => setCount(0), 2800);
    return () => clearTimeout(id);
  }, [sent]);

  const msg = sent
    ? "SOS sent to 3 members with live location"
    : count === 0
      ? "Press it four times, like the power button"
      : `${4 - count} more…`;

  return (
    <div className="viz viz-panic">
      <span className="demo-note">Try it · demo</span>
      <m.button
        className={cn("panic-btn", sent && "sent")}
        whileTap={{ scale: 0.92 }}
        onClick={() => !sent && setCount((c) => c + 1)}
        aria-label="SOS demo: press four times"
      >
        <svg className="panic-ring" viewBox="0 0 150 150" aria-hidden="true">
          {[0, 1, 2, 3].map((i) => (
            <path key={i} d={arc(i)} className={i < count ? "on" : undefined} />
          ))}
        </svg>
        <Icon name="power" />
      </m.button>
      <AnimatePresence mode="wait">
        <m.p
          key={msg}
          className={cn("panic-msg", sent && "sent")}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.2 }}
          aria-live="polite"
        >
          {msg}
        </m.p>
      </AnimatePresence>
    </div>
  );
}

const visuals: ReactNode[] = [
  <VoiceViz key="voice" />,
  <LiveViz key="live" />,
  <CrashViz key="crash" />,
  <RouteViz key="route" />,
  <ZoneViz key="zone" />,
  <PanicViz key="panic" />,
];
