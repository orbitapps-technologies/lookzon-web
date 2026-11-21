import { Accordion } from "../ui/accordion";
import { faqItems } from "./data";
import { Reveal } from "./motion";

export function Faq() {
  return (
    <section className="faq-section shell" id="faq">
      <Reveal className="faq-intro">
        <span className="kicker">Good questions</span>
        <h2>
          Asked by parents.
          <br />
          <em>Answered plainly.</em>
        </h2>
        <p className="lead">
          Still curious? Write to us at{" "}
          <a href="mailto:Lookzonsupport@gmail.com">Lookzonsupport@gmail.com</a> — a real person
          replies.
        </p>
      </Reveal>
      <Reveal delay={0.1}>
        <Accordion items={faqItems} />
      </Reveal>
    </section>
  );
}
