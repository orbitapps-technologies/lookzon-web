import "../legal.css";
import Link from "next/link";
import { Brand } from "../../components/landing/shared";
export function Legal({
  title,
  intro,
  sections,
  updated,
}: {
  title: string;
  intro: string;
  sections: string[][];
  updated?: string;
}) {
  return (
    <main className="legal-page">
      <Brand />
      <span className="kicker">{updated ? `Last updated · ${updated}` : "LOOKZON · 2026"}</span>
      <h1>{title}</h1>
      <p className="legal-intro">{intro}</p>
      {sections.map(([h, p]) => (
        <section key={h}>
          <h2>{h}</h2>
          <p>{p}</p>
        </section>
      ))}
      <Link className="text-link" href="/">
        Back to home ↗
      </Link>
    </main>
  );
}
export default function Privacy() {
  return (
    <Legal
      title="Privacy Policy"
      intro="Lookzon is built around trust. This policy explains what we collect, why we collect it, and how you stay in control."
      sections={[
        [
          "Location access",
          "Lookzon uses foreground and background location to provide live family tracking, safe-zone notifications, route history, and crash response. Location is shared only with members of your chosen safety circle.",
        ],
        [
          "Microphone access",
          "The microphone is used only when you tap the assistant or invoke the supported wake-word experience. Lookzon does not continuously record conversations.",
        ],
        [
          "Your controls",
          "You can revoke permissions, leave a circle, or request account deletion from the app. For questions, contact support@lookzon.com.",
        ],
        [
          "Security",
          "We use encrypted connections and access controls designed to protect family data.",
        ],
      ]}
    />
  );
}
