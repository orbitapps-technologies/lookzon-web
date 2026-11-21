import { Header } from "../components/landing/Header";
import { Hero } from "../components/landing/Hero";
import { Features } from "../components/landing/Features";
import { Voice } from "../components/landing/Voice";
import { Safety } from "../components/landing/Safety";
import { Pricing } from "../components/landing/Pricing";
import { Reviews } from "../components/landing/Reviews";
import { Faq } from "../components/landing/Faq";
import { Footer } from "../components/landing/Footer";
import { LangProvider } from "../components/landing/lang";
import { MotionProvider, ScrollProgress } from "../components/landing/motion";
import { HomeJsonLd } from "../components/seo/JsonLd";
import { pageMeta, site } from "../lib/site";

export const metadata = pageMeta({
  title: site.title,
  description: site.description,
  path: "/",
  absoluteTitle: true,
});

const ticker = [
  "One circle, total peace of mind",
  "Encrypted by design",
  "Made in India",
  "Hindi · Hinglish · English",
  "Offline-ready sync",
  "Battery-smart GPS",
];

export default function Home() {
  return (
    <MotionProvider>
      <HomeJsonLd />
      <LangProvider>
        <ScrollProgress />
        <Header />
        <main>
          <Hero />
          <div className="ticker" aria-hidden="true">
            <div className="ticker-track">
              {[...ticker, ...ticker].map((t, i) => (
                <span key={i}>{t}</span>
              ))}
            </div>
          </div>
          <Features />
          <Voice />
          <Safety />
          <Reviews />
          <Pricing />
          <Faq />
        </main>
        <Footer />
      </LangProvider>
    </MotionProvider>
  );
}
