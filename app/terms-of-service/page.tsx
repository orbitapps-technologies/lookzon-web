import { Legal } from "../privacy-policy/page";
export default function Terms() {
  return (
    <Legal
      title="Terms of Service"
      intro="These terms keep the Lookzon experience clear and fair for every family circle."
      sections={[
        [
          "Using Lookzon",
          "Use Lookzon for personal family safety and location coordination. Keep your account secure and invite only people you know and trust.",
        ],
        [
          "Subscriptions",
          "The Family Safety Circle starts with a ₹5, 2-day trial and continues at ₹990 per month unless cancelled.",
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
