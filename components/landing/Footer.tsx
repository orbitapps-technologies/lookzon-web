import Image from "next/image";
import Link from "next/link";
import { site } from "../../lib/site";
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

        <div className="footer-body">
          <div className="footer-word" aria-hidden="true">
            lookzon
          </div>
        <div className="footer-grid">
          <div className="footer-brand">
            <Brand />
            <p>
              The family safety app built for India — live location, crash alerts and a voice
              assistant that speaks your language.
            </p>
            <a className="footer-mail" href="mailto:Lookzonsupport@gmail.com">
              <span className="fm-icon">
                <Icon name="mail" />
              </span>
              <span>
                <small>Write to us</small>
                Lookzonsupport@gmail.com
              </span>
            </a>
            <div className="footer-badges">
              <span>
                <Icon name="shield" /> Encrypted by design
              </span>
              <span>
                <Icon name="pin" /> Made in India
              </span>
            </div>
          </div>

          {columns.map((col) => (
            <nav className="footer-col" key={col.title} aria-label={col.title}>
              <b>{col.title}</b>
              {col.links.map(([href, label]) => (
                <Link key={href} href={href}>
                  {label}
                  <Icon name="arrow" className="fl-arrow" />
                </Link>
              ))}
            </nav>
          ))}

          <div className="footer-company">
            <b>Company</b>
            <a className="fc-name" href={site.companyUrl} target="_blank" rel="noopener">
              ORBITAPPS TECHNOLOGIES LLP
              <Icon name="arrow" className="fc-name-arrow" />
            </a>
            <p className="fc-tagline">Lookzon is a product of OrbitApps Technologies</p>
            <p className="fc-addr">
              <Icon name="pin" /> Bengaluru, Karnataka, India
            </p>
            <a className="fc-play" href={playStoreUrl} aria-label="Get Lookzon on Google Play">
              <span className="fc-play-icon">
                <Image src="/brand/lookzon-mark-96.webp" alt="" width={34} height={34} />
              </span>
              <span className="fc-play-text">
                <small>GET IT ON</small>
                Google Play
              </span>
              <Icon name="arrow" className="fc-arrow" />
            </a>
          </div>
        </div>
        </div>

        <div className="footer-bottom">
          <span>
            © 2026{" "}
            <a className="fb-company" href={site.companyUrl} target="_blank" rel="noopener">
              ORBITAPPS TECHNOLOGIES LLP
            </a>
            . All rights reserved.
          </span>
          <nav className="fb-links" aria-label="Legal">
            <Link href="/privacy-policy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/refund-policy">Refunds</Link>
          </nav>
          <span className="footer-bottom-right">
            <span className="fb-secure">
              <Icon name="lock" /> Payments secured by Cashfree
            </span>
            <a href="#top" className="to-top" aria-label="Back to top">
              <Icon name="arrow" />
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
