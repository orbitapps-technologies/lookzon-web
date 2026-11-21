"use client";
import { useRef, type PointerEvent } from "react";
import { playStoreUrl } from "./data";
import { Reveal } from "./motion";
import { Arrow, Icon } from "./shared";

const included = [
  "Unlimited family members",
  "Live tracking + 24-hour route history",
  "AI voice queries in Hindi & English",
  "Crash detection + 24/7 SOS",
];

export function Pricing() {
  const ref = useRef<HTMLDivElement>(null);

  // Cursor spotlight: writes CSS variables directly, no React re-render per frame.
  function onMove(e: PointerEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--x", `${e.clientX - r.left}px`);
    el.style.setProperty("--y", `${e.clientY - r.top}px`);
  }

  return (
    <section className="pricing-section shell" id="pricing">
      <Reveal>
        <div className="pricing-wrap" ref={ref} onPointerMove={onMove}>
          <div className="pricing-intro">
            <span className="kicker">Simple pricing</span>
            <h2>
              One plan.
              <br />
              <em>Everyone you love.</em>
            </h2>
            <p className="lead">
              No tiers to compare, no per-member charges. Try the full app for 48 hours for ₹5, then
              decide.
            </p>
          </div>

          <div className="price-card">
            <div className="price-inner">
              <span className="trial-label">48-HOUR TRIAL</span>
              <div className="price">
                <span>₹</span>
                <strong>5</strong>
                <small>for the first 48 hours</small>
              </div>
              <p className="then">
                After 48 hours, <b>₹990/month</b> will be charged automatically. Cancel anytime.
              </p>
              <div className="price-divider" />
              <ul>
                {included.map((item) => (
                  <li key={item}>
                    <Icon name="check" />
                    {item}
                  </li>
                ))}
              </ul>
              <a className="btn btn-primary btn-lg" href={playStoreUrl}>
                Start your safety circle <Arrow />
              </a>
              <small className="secure-note">
                <Icon name="lock" /> Secure payments with Cashfree · Cancel anytime
              </small>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
