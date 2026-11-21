"use client";
import { useState } from "react";
import { AnimatePresence, m } from "motion/react";
import { cn } from "../../lib/utils";

export function Accordion({ items }: { items: Array<{ question: string; answer: string }> }) {
  const [active, setActive] = useState(0);
  return (
    <div className="faq-list">
      {items.map((item, index) => {
        const open = active === index;
        return (
          <div className={cn("faq-item", open && "open")} key={item.question}>
            <button
              aria-expanded={open}
              aria-controls={`faq-panel-${index}`}
              onClick={() => setActive(open ? -1 : index)}
            >
              <span>{item.question}</span>
              <m.b
                aria-hidden="true"
                animate={{ rotate: open ? 45 : 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
              >
                +
              </m.b>
            </button>
            <AnimatePresence initial={false}>
              {open && (
                <m.div
                  id={`faq-panel-${index}`}
                  key="panel"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                  style={{ overflow: "hidden" }}
                >
                  <p>{item.answer}</p>
                </m.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
