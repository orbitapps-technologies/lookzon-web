"use client";
import { useEffect, useRef } from "react";
import { animate, m, useInView, useMotionValue, useScroll, useSpring, useTransform } from "motion/react";
import { Reveal, ease } from "./motion";
import { Arrow } from "./shared";

const steps = [
  { title: "Impact sensed", body: "The phone notices a sudden, violent change in motion — on a bike, in a car or an auto." },
  { title: "Five checks confirm it", body: "Potholes, speed-breakers and a phone slipping out of a pocket are filtered out." },
  { title: "Your circle is alerted", body: "Everyone in the circle gets the signal, the exact location, and the next step." },
  { title: "SOS, always one press away", body: "Four presses of the power button send an SOS any time — no unlocking, no app to open." },
];

function Count({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.8 });
  const v = useMotionValue(0);
  const text = useTransform(v, (n) => `${Math.round(n)}${suffix}`);
  useEffect(() => {
    if (!inView) return;
    const controls = animate(v, to, { duration: 1.4, ease });
    return () => controls.stop();
  }, [inView, to, v]);
  return <m.span ref={ref}>{text}</m.span>;
}

export function Safety() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "end 60%"] });
  const fill = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <section className="safety-section shell" id="safety">
      <div className="safety-layout">
        <Reveal className="safety-copy">
          <span className="kicker">A calmer kind of smart</span>
          <h2>
            When something goes wrong,
            <br />
            <em>every second counts.</em>
          </h2>
          <p className="lead">
            From the road to the front door, Lookzon quietly watches for the moments you can&apos;t.
            No panicked phone calls, no guessing where they are.
          </p>
          <div className="stats">
            <div className="stat">
              <b>24/7</b>
              <small>Always-on coverage</small>
            </div>
            <div className="stat">
              <b>
                <Count to={5} />
              </b>
              <small>Layer crash check</small>
            </div>
            <div className="stat">
              <b>
                <Count to={4} suffix="×" />
              </b>
              <small>Power press for SOS</small>
            </div>
          </div>
          <a className="text-link" href="#pricing">
            Protect your family <Arrow />
          </a>
        </Reveal>

        <div className="steps" ref={ref}>
          <div className="steps-track" aria-hidden="true">
            <m.div className="steps-fill" style={{ scaleY: fill }} />
          </div>
          {steps.map((s, i) => (
            <m.div
              className="step"
              key={s.title}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.7 }}
              transition={{ duration: 0.6, ease, delay: i * 0.05 }}
            >
              <span className="step-dot">{String(i + 1).padStart(2, "0")}</span>
              <b>{s.title}</b>
              <p>{s.body}</p>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
