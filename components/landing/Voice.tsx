"use client";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, m, useInView } from "motion/react";
import { cn } from "../../lib/utils";
import { Reveal, ease } from "./motion";
import { Icon } from "./shared";

const convo = [
  {
    q: "मम्मी कहाँ हैं?",
    a: "मम्मी घर पर हैं — 15 मिनट पहले पहुँचीं। Battery 85% है।",
    meta: ["Home", "Koramangala", "85% battery"],
  },
  {
    q: "Rahul school पहुँच गया?",
    a: "हाँ, Rahul 8:42 पर school पहुँच गया था। अभी safe zone के अंदर है।",
    meta: ["School", "Safe zone", "8:42 am"],
  },
  {
    q: "Priya के phone पर siren बजा दो",
    a: "ठीक है — Priya के phone पर siren बज रहा है, silent mode में भी।",
    meta: ["Phone finder", "Siren on"],
  },
];

export function Voice() {
  const [idx, setIdx] = useState(0);
  const [phase, setPhase] = useState<"typing" | "answer">("typing");
  const [touched, setTouched] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.4 });

  // thinking → answer
  useEffect(() => {
    if (!inView) return;
    const id = setTimeout(() => setPhase("answer"), 1100);
    return () => clearTimeout(id);
  }, [idx, inView]);

  // gently cycle through examples until the visitor picks one
  useEffect(() => {
    if (!inView || touched || phase !== "answer") return;
    const id = setTimeout(() => ask((idx + 1) % convo.length), 5200);
    return () => clearTimeout(id);
  }, [phase, idx, inView, touched]);

  function ask(i: number) {
    setIdx(i);
    setPhase("typing");
  }

  const c = convo[idx];

  return (
    <section className="voice-section" id="voice">
      <div className="shell voice-layout">
        <Reveal className="voice-copy">
          <span className="kicker">Speak naturally</span>
          <h2>
            Just ask.
            <br />
            <em>Like you would at home.</em>
          </h2>
          <p className="lead">
            Hindi, Hinglish or English — Lookzon understands the small, everyday questions families
            actually ask. Pick one and hear how it answers.
          </p>
          <div className="speech-list" role="group" aria-label="Example questions">
            {convo.map((item, i) => (
              <button
                key={item.q}
                lang="hi"
                className={cn(idx === i && "active")}
                aria-pressed={idx === i}
                onClick={() => {
                  setTouched(true);
                  ask(i);
                }}
              >
                “{item.q}”
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="assistant" ref={ref}>
            <div className="assistant-inner">
              <div className="assistant-head">
                <span className="assistant-avatar">
                  <Icon name="spark" />
                </span>
                <span>
                  <b>Lookzon Assistant</b>
                  <small>{phase === "typing" ? "Listening…" : "Answered in Hindi"}</small>
                </span>
              </div>
              <div className={cn("wave", phase === "answer" && "idle")} aria-hidden="true">
                {Array.from({ length: 17 }, (_, i) => (
                  <b key={i} />
                ))}
              </div>
              <div className="assistant-body" aria-live="polite">
                <AnimatePresence mode="wait">
                  <m.div
                    key={idx}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25 }}
                  >
                    <m.div
                      className="bubble user"
                      lang="hi"
                      initial={{ opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, ease }}
                    >
                      <small>YOU SAID</small>“{c.q}”
                    </m.div>
                    {phase === "typing" ? (
                      <div className="bubble ai typing" aria-label="Assistant is thinking">
                        <i />
                        <i />
                        <i />
                      </div>
                    ) : (
                      <>
                        <m.div
                          className="bubble ai"
                          lang="hi"
                          initial="hidden"
                          animate="show"
                          variants={{ show: { transition: { staggerChildren: 0.045 } } }}
                        >
                          <small>LOOKZON</small>
                          {c.a.split(" ").map((w, i) => (
                            <m.span
                              key={i}
                              className="word"
                              variants={{
                                hidden: { opacity: 0, y: 4 },
                                show: { opacity: 1, y: 0 },
                              }}
                            >
                              {w}{" "}
                            </m.span>
                          ))}
                        </m.div>
                        <m.div
                          className="assistant-meta"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.5 }}
                        >
                          {c.meta.map((t) => (
                            <span key={t}>{t}</span>
                          ))}
                        </m.div>
                      </>
                    )}
                  </m.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
