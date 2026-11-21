import { Legal } from "../privacy-policy/page";
import { pageMeta } from "../../lib/site";

export const metadata = pageMeta({
  title: "Terms of Service",
  description: "The terms for using Lookzon, the family safety app — subscriptions, acceptable use and safety limitations.",
  path: "/terms",
});
export default function Terms() {
  return (
    <Legal
      title="Terms of Service"
      updated="21 November 2026"
      intro="These terms keep the Lookzon experience clear and fair for every family circle."
      sections={[
        [
          "Using Lookzon",
          "Use Lookzon for personal family safety and location coordination. Keep your account secure and invite only people you know and trust.",
        ],
        [
          "Subscriptions",
          "The Family Safety Circle starts with a ₹5, 48-hour trial and then renews automatically at ₹990 per month until you cancel. All payments are non-refundable once charged, except as described in our Refund Policy.",
        ],
        [
          "Safety limitations",
          "Lookzon is a support tool, not a replacement for emergency services. In an emergency, contact local authorities first.",
        ],
        ["Contact", "Questions can be sent to support@lookzon.com."],
      ]}
    />
  );
}
