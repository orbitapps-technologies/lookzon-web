"use client";
import Image from "next/image";
import { Fragment, useEffect, useRef, useState, type PointerEvent } from "react";
import { AnimatePresence, m, useInView, useMotionValue, useSpring, useTransform } from "motion/react";
import { Dialog } from "../ui/dialog";
import { playStoreUrl } from "./data";
import { useLang } from "./lang";
import { ease } from "./motion";
import { Arrow, Icon, PlayBadge } from "./shared";

const copy = {
  hi: {
    l1: "परिवार की सुरक्षा,",
    l2: "अब एक आवाज़ दूर।",
    lede: "लाइव लोकेशन, क्रैश डिटेक्शन और एक वॉइस असिस्टेंट जो आपकी भाषा समझता है — ताकि हाल-चाल जानने के लिए बार-बार फ़ोन न करना पड़े।",
  },
  en: {
    l1: "Know they're safe.",
    l2: "Without asking.",
    lede: "Live location, crash detection and a voice assistant that understands how your family actually talks — so you can stop calling just to check in.",
  },
};

function Line({ text, delay, accent }: { text: string; delay: number; accent?: boolean }) {
  return (
    <span className={accent ? "h-line accent" : "h-line"}>
      {text.split(" ").map((word, i, all) => (
        <Fragment key={`${word}-${i}`}>
          <span className="h-word">
            <m.span
              initial={{ y: "115%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, ease, delay: delay + i * 0.07 }}
            >
              {word}
            </m.span>
          </span>
          {i < all.length - 1 ? " " : null}
        </Fragment>
      ))}
    </span>
  );
}

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease, delay },
});

export function Hero() {
  const { lang } = useLang();
  const t = copy[lang];
  const [demo, setDemo] = useState(false);

  return (
    <>
      <section className="hero" id="top">
        <div className="hero-bg" aria-hidden="true" />
        <div className="shell hero-inner">
          <div className="hero-copy">
            <m.span className="pill" {...fadeUp(0)}>
              <span className="live-dot" /> Gemini voice · Hindi, Hinglish &amp; English
            </m.span>
            <h1 key={lang} lang={lang}>
              <Line text={t.l1} delay={0.1} />
              <Line text={t.l2} delay={0.32} accent />
            </h1>
            <m.p key={`${lang}-lede`} className="hero-lede" lang={lang} {...fadeUp(0.5)}>
              {t.lede}
            </m.p>
            <m.div className="hero-actions" {...fadeUp(0.62)}>
              <PlayBadge />
              <button className="btn btn-ghost btn-lg" onClick={() => setDemo(true)}>
                <span className="play-circle">
                  <Icon name="play" />
                </span>
                Watch the 30-sec demo
              </button>
            </m.div>
            <m.div className="proof" {...fadeUp(0.74)}>
              <div className="avatars" aria-hidden="true">
                <i>RK</i>
                <i>AS</i>
                <i>PM</i>
                <i>+</i>
              </div>
              <span>
                <strong>10,000+ families</strong> across India trust their circle to Lookzon
              </span>
            </m.div>
          </div>
          <HeroVisual />
        </div>
      </section>

      <Dialog open={demo} onClose={() => setDemo(false)}>
        <div className="demo-screen">
          <Image
            className="demo-logo"
            src="/brand/lookzon-mark-192.webp"
            alt="Lookzon"
            width={56}
            height={56}
          />
          <h3>
            Your family,
            <br />
            <em>in the know.</em>
          </h3>
          <div className="demo-wave" aria-hidden="true">
            {[1, 2, 3, 4, 5, 6, 7].map((n) => (
              <b key={n} />
            ))}
          </div>
        </div>
        <p>Lookzon keeps the important things close — without keeping you glued to your phone.</p>
        <a className="btn btn-primary btn-lg" href={playStoreUrl}>
          Get Lookzon on Google Play <Arrow />
        </a>
      </Dialog>
    </>
  );
}

const notes = [
  { i: "M", tone: "mint", title: "Mummy reached Home", sub: "Koramangala · just now" },
  { i: "R", tone: "violet", title: "Rahul reached School", sub: "Safe zone · 8:42 am" },
  { i: "P", tone: "amber", title: "Papa is driving", sub: "42 km/h · Outer Ring Rd" },
] as const;

function HeroVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 110, damping: 18 });
  const sy = useSpring(my, { stiffness: 110, damping: 18 });
  const rotateY = useTransform(sx, [-1, 1], [-9, 9]);
  const rotateX = useTransform(sy, [-1, 1], [7, -7]);
  const nearX = useTransform(sx, [-1, 1], [-16, 16]);
  const nearY = useTransform(sy, [-1, 1], [-12, 12]);
  const farX = useTransform(sx, [-1, 1], [12, -12]);
  const farY = useTransform(sy, [-1, 1], [8, -8]);

  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const id = setInterval(() => setN((v) => (v + 1) % notes.length), 3200);
    return () => clearInterval(id);
  }, [inView]);

  function onMove(e: PointerEvent<HTMLDivElement>) {
    if (e.pointerType !== "mouse") return;
    const r = e.currentTarget.getBoundingClientRect();
    mx.set(((e.clientX - r.left) / r.width) * 2 - 1);
    my.set(((e.clientY - r.top) / r.height) * 2 - 1);
  }
  function onLeave() {
    mx.set(0);
    my.set(0);
  }

  const note = notes[n];

  return (
    <m.div
      ref={ref}
      className="hero-art"
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.1, ease, delay: 0.15 }}
      aria-label="Lookzon app showing a family's live locations on a map"
      role="img"
    >
      <div className="ring ring-1" />
      <div className="ring ring-2" />

      <m.div className="phone" style={{ rotateX, rotateY }}>
        <div className="phone-screen">
          <div className="phone-notch" />
          <div className="phone-top">
            <span>9:41</span>
            <span className="sig">
              <i />
              <i />
              <i />
            </span>
          </div>
          <div className="phone-head">
            <div>
              <small>YOUR CIRCLE</small>
              <b>Sharma family</b>
            </div>
            <span className="online">
              <i /> 3 online
            </span>
          </div>
          <div className="phone-map">
            <MapSvg />
            <span className="map-tag">
              <Icon name="home" /> Home · safe zone
            </span>
          </div>
          <div className="phone-note">
            <AnimatePresence initial={false}>
              <m.div
                key={n}
                className="phone-card"
                initial={{ y: 26, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -26, opacity: 0 }}
                transition={{ duration: 0.5, ease }}
              >
                <span className={`mini-avatar ${note.tone}`}>{note.i}</span>
                <span>
                  <b>{note.title}</b>
                  <small>{note.sub}</small>
                </span>
                <span className="ok">
                  <Icon name="check" />
                </span>
              </m.div>
            </AnimatePresence>
          </div>
          <div className="phone-nav">
            <span className="active">
              <Icon name="users" />
              Circle
            </span>
            <span>
              <Icon name="pin" />
              Places
            </span>
            <span>
              <Icon name="mic" />
              Assistant
            </span>
          </div>
        </div>
      </m.div>

      <m.div className="float-wrap f-status" style={{ x: nearX, y: nearY }}>
        <m.div {...pop(0.9)}>
          <div className="float-card">
            <span className="float-icon">
              <Icon name="shield" />
            </span>
            <span>
              <small>Circle status</small>
              <strong>Everyone&apos;s safe</strong>
            </span>
          </div>
        </m.div>
      </m.div>

      <m.div className="float-wrap f-alert" style={{ x: farX, y: farY }}>
        <m.div {...pop(1.1)}>
          <div className="float-card">
            <span className="float-icon">
              <Icon name="pin" />
            </span>
            <span>
              <small>Arrived</small>
              <strong>Rahul · School · 8:42</strong>
            </span>
          </div>
        </m.div>
      </m.div>

      <m.div className="float-wrap f-ai" style={{ x: nearX, y: farY }}>
        <m.div {...pop(1.3)}>
          <div className="float-card">
            <span className="float-icon">
              <Icon name="spark" />
            </span>
            <span>
              <small>Lookzon assistant</small>
              <strong lang="hi">“मम्मी घर पर हैं, battery 85% है।”</strong>
            </span>
          </div>
        </m.div>
      </m.div>
    </m.div>
  );
}

const pop = (delay: number) => ({
  initial: { opacity: 0, y: 18, scale: 0.94 },
  animate: { opacity: 1, y: 0, scale: 1 },
  transition: { duration: 0.7, ease, delay },
});

const routeD = "M64 290 C 74 230, 86 182, 105 150 S 152 88, 196 46";

function MapSvg() {
  return (
    <svg viewBox="0 0 250 320" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id="hero-route-grad" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stopColor="#5eead4" />
          <stop offset="1" stopColor="#a78bfa" />
        </linearGradient>
      </defs>
      <rect x="112" y="200" width="54" height="34" rx="8" fill="#10221e" />
      <rect x="10" y="88" width="40" height="30" rx="8" fill="#151d27" />
      <g stroke="#1a2530" strokeWidth="11" fill="none" strokeLinecap="round">
        <path d="M-10 74 L260 40" />
        <path d="M-10 214 L260 248" />
        <path d="M58 -10 L92 330" />
        <path d="M184 -10 L162 330" />
        <path d="M-10 140 Q120 162 260 128" />
      </g>
      <g stroke="#131c25" strokeWidth="4" fill="none">
        <path d="M-10 280 L260 298" />
        <path d="M126 -10 L132 330" />
        <path d="M224 -10 L242 330" />
      </g>
      <circle cx="105" cy="150" r="54" fill="#5eead40d" stroke="#5eead455" strokeDasharray="4 5" />
      <path id="hero-route-guide" d={routeD} fill="none" stroke="none" />
      <m.path
        d={routeD}
        stroke="url(#hero-route-grad)"
        strokeWidth="3.5"
        fill="none"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2.2, ease: "easeInOut", delay: 0.8 }}
      />
      <g>
        <circle r="9" fill="#fbbf2433" />
        <circle r="5.5" fill="#fbbf24" stroke="#0a0f14" strokeWidth="2" />
        <animateMotion dur="8s" repeatCount="indefinite" begin="2.6s">
          <mpath href="#hero-route-guide" />
        </animateMotion>
      </g>
      <g transform="translate(105 150)">
        <circle className="svg-ping" r="16" fill="#5eead4" />
        <circle r="16" fill="#5eead4" stroke="#0a0f14" strokeWidth="3" />
        <text y="4.5" textAnchor="middle" fontSize="13" fontWeight="700" fill="#0b0f14">
          M
        </text>
      </g>
      <g transform="translate(196 46)">
        <circle className="svg-ping slow" r="14" fill="#a78bfa" />
        <circle r="14" fill="#a78bfa" stroke="#0a0f14" strokeWidth="3" />
        <text y="4.5" textAnchor="middle" fontSize="12" fontWeight="700" fill="#0b0f14">
          R
        </text>
      </g>
    </svg>
  );
}
