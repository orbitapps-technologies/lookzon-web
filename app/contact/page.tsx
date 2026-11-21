import { Legal } from "../privacy-policy/page";
import { pageMeta } from "../../lib/site";

export const metadata = pageMeta({
  title: "Contact us",
  description: "Get help with your Lookzon family circle, subscription or account. Support from Bengaluru, India.",
  path: "/contact",
});
export default function Contact() {
  return (
    <Legal
      title="Contact Lookzon"
      intro="Need a hand with your circle, subscription, or account? We are here to help."
      sections={[
        [
          "Support",
          "Email support@lookzon.com and include the phone number or account email associated with your account.",
        ],
        [
          "Response time",
          "Our support team aims to respond within two business days.",
        ],
        ["Location", "Lookzon is based in Bengaluru, India."],
      ]}
    />
  );
}
