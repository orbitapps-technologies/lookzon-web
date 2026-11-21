"use client";
import { useState } from "react";
import { AnimatePresence, m, useMotionValueEvent, useScroll } from "motion/react";
import { cn } from "../../lib/utils";
import { playStoreUrl } from "./data";
import { useLang } from "./lang";
import { Brand, Icon } from "./shared";

const links = [
  ["#features", "Features"],
  ["#voice", "Assistant"],
  ["#safety", "Safety"],
  ["#pricing", "Pricing"],
  ["#faq", "FAQ"],
] as const;

export function Header() {
  const { lang, toggle } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 12));

  return (
    <header className={cn("site-header", (scrolled || open) && "scrolled")}>
      <nav className="nav shell" aria-label="Main">
        <Brand />
        <div className="nav-links">
          {links.map(([href, label]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </div>
        <div className="nav-actions">
          <button
            className="lang"
            onClick={toggle}
            aria-label={lang === "hi" ? "Switch headline to English" : "हिंदी में देखें"}
          >
            {lang === "hi" ? "EN" : "हिं"}
          </button>
          <a className="btn btn-primary nav-cta" href={playStoreUrl}>
            Get the app
          </a>
          <button
            className="menu-btn"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
          >
            <Icon name={open ? "close" : "menu"} />
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {open && (
          <m.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            {links.map(([href, label]) => (
              <a key={href} href={href} onClick={() => setOpen(false)}>
                {label}
              </a>
            ))}
          </m.div>
        )}
      </AnimatePresence>
    </header>
  );
}
