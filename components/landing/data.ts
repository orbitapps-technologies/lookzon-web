import type { IconName } from "./shared";

export const playStoreUrl = "https://play.google.com/store/apps/details?id=com.lookzon.app";

export const features: { icon: IconName; title: string; tag: string; body: string }[] = [
  {
    icon: "mic",
    title: "AI voice co-pilot",
    tag: "Gemini-powered",
    body: "Ask the way you'd ask at home — in Hindi, Hinglish or English. “Papa kahan hain?” works just as well as “Where's Dad?”",
  },
  {
    icon: "pin",
    title: "Live location, quietly",
    tag: "Battery-smart GPS",
    body: "Your circle stays visible on the map, and smart GPS throttling pauses updates when a phone is still — so nobody's battery is gone by lunchtime.",
  },
  {
    icon: "pulse",
    title: "Crash detection",
    tag: "Built for Indian roads",
    body: "Five sensor checks filter out potholes, speed-breakers and dropped phones, so your family is alerted only when it really matters.",
  },
  {
    icon: "route",
    title: "Route history",
    tag: "Last 24 hours",
    body: "Replay the day's journeys with speeds and meaningful stops — for the times you just want to know how they got there.",
  },
  {
    icon: "shield",
    title: "Safe zones",
    tag: "100 m – 5 km",
    body: "Draw a circle around home, school or coaching, and get a gentle nudge when someone in your family arrives.",
  },
  {
    icon: "siren",
    title: "Panic lock + phone finder",
    tag: "Always ready",
    body: "Four presses of the power button trigger an SOS. Phone lost somewhere on silent? Ring it remotely with a loud siren.",
  },
];

export const faqItems = [
  {
    question: "Does Lookzon drain the battery?",
    answer:
      "No. Smart stationary sleep pauses frequent GPS updates while a phone is still, and smooth tracking resumes the moment it starts moving.",
  },
  {
    question: "What happens if the phone has no internet?",
    answer:
      "Location points are queued securely on the device and sync automatically as soon as the connection comes back.",
  },
  {
    question: "Can my family hear me through the voice assistant?",
    answer:
      "No. Voice is processed only when you tap the assistant or say the supported wake word — never in the background.",
  },
  {
    question: "How do I invite my parents or children?",
    answer:
      "Share a single WhatsApp invite link. Your family member opens it, enters the six-digit code, and they're in your circle.",
  },
];
