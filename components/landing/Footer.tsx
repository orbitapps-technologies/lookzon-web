import Image from "next/image";
import Link from "next/link";
import { playStoreUrl } from "./data";
import { Reveal } from "./motion";
import { Brand, Icon, PlayBadge } from "./shared";

const columns = [
  {
    title: "Product",
    links: [
      ["#features", "Features"],
      ["#voice", "AI voice assistant"],
      ["#safety", "Crash detection"],
      ["#reviews", "Reviews"],
      ["#pricing", "Pricing"],
    ],
  },
  {
    title: "Support",
    links: [
      ["#faq", "FAQ"],
      ["/contact", "Contact us"],
      ["/refund-policy", "Refund policy"],
    ],
  },
  {
    title: "Legal",
    links: [
      ["/privacy-policy", "Privacy policy"],
      ["/terms", "Terms & conditions"],
    ],
  },
] as const;

export function Footer() {
  return (
    <footer className="footer">
      <div className="shell">
        <Reveal>
          <div className="cta-card">
            <div className="cta-copy">
              <span className="kicker">Start today · ₹5 for 48 hours</span>
              <h2>
                Your family is already out there.
                <br />
                <em>Know they&apos;re okay.</em>
              </h2>
              <div className="cta-actions">
                <span className="app-tile">
                  <Image
                    src="/brand/lookzon-logo-384.webp"
                    alt="Lookzon app icon"
                    width={64}
                    height={64}
                  />
                </span>
                <PlayBadge />
                <span className="cta-note">
                  <Icon name="lock" /> Then ₹990/month · Consent-based sharing · Cancel anytime
                </span>
              </div>
            </div>
            <div className="cta-stack" aria-hidden="true">
              <div className="cta-chip c1">
                <span className="mini-avatar">M</span>
                <span>
                  <b>Mummy reached Home</b>
                  <small>just now</small>
                </span>
              </div>
              <div className="cta-chip c2">
                <span className="mini-avatar violet">R</span>
                <span>
                  <b>Rahul is at School</b>
                  <small>safe zone</small>
                </span>
              </div>
              <div className="cta-chip c3">
                <span className="mini-avatar amber">P</span>
                <span>
                  <b>Papa is driving</b>
                  <small>42 km/h</small>
                </span>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="footer-grid">
          <div className="footer-brand">
            <Brand />
            <p>
              The family safety app built for India — live location, crash alerts and a voice
              assistant that speaks your language.
            </p>
            <a className="footer-mail" href="mailto:Lookzonsupport@gmail.com">
              <Icon name="spark" /> Lookzonsupport@gmail.com
            </a>
          </div>
          {columns.map((col) => (
            <nav className="footer-col" key={col.title} aria-label={col.title}>
              <b>{col.title}</b>
              {col.links.map(([href, label]) => (
                <Link key={href} href={href}>
                  {label}
                </Link>
              ))}
            </nav>
          ))}
          <div className="footer-col">
            <b>Company</b>
            <span>ORBITAPPS TECHNOLOGIES LLP</span>
            <span>Bengaluru, Karnataka, India</span>
            <a href={playStoreUrl}>Lookzon on Google Play</a>
          </div>
        </div>

        <div className="footer-word" aria-hidden="true">
          lookzon
        </div>

        <div className="footer-bottom">
          <span>© 2026 ORBITAPPS TECHNOLOGIES LLP. All rights reserved.</span>
          <span className="footer-bottom-right">
            <span>Payments secured by Cashfree</span>
            <a href="#top" className="to-top" aria-label="Back to top">
              <Icon name="arrow" />
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
