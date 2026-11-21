import { Legal } from "../privacy-policy/page";
export default function Refund() {
  return (
    <Legal
      title="Refund Policy"
      intro="We want your family to feel confident trying Lookzon."
      sections={[
        [
          "Trial and cancellation",
          "The ₹5 trial gives full access for 48 hours. Cancel before the trial ends to prevent monthly renewal.",
        ],
        [
          "Renewals",
          "The ₹990 plan renews monthly through Cashfree UPI AutoPay or Cards.",
        ],
        [
          "Refund requests",
          "If a renewal was accidental or a service issue affected access, email support@lookzon.com. We review requests fairly.",
        ],
        [
          "Contact",
          "Support is available from Bengaluru, India at support@lookzon.com.",
        ],
      ]}
    />
  );
}
