import { Legal } from "../privacy-policy/page";
import { pageMeta } from "../../lib/site";

export const metadata = pageMeta({
  title: "Refund & Cancellation Policy",
  description: "Lookzon's ₹5 48-hour trial, ₹990/month auto-renewal, how to cancel, and our no-refund policy with its exceptions.",
  path: "/refund-policy",
});

export default function Refund() {
  return (
    <Legal
      title="Refund & Cancellation Policy"
      updated="21 November 2026"
      intro="Please read this before you start your trial. By subscribing to Lookzon, you agree that payments are non-refundable, as explained below."
      sections={[
        [
          "₹5 trial",
          "The ₹5 trial gives full access to Lookzon for 48 hours. The trial fee is non-refundable.",
        ],
        [
          "Automatic renewal",
          "Unless you cancel before the 48-hour trial ends, your subscription renews automatically at ₹990 per month, charged through Cashfree using UPI AutoPay or your card. It continues to renew every month until you cancel. You will be notified by your bank or UPI app before each recurring charge, in line with RBI rules on recurring payments.",
        ],
        [
          "No refunds",
          "All payments are final. Once the trial fee or a monthly charge has been deducted, it will not be refunded — including for partially used months, unused time, a change of mind, or if you forget to cancel before the renewal date.",
        ],
        [
          "Exceptions",
          "We will only reverse a charge where it was our error or where the law requires it: for example, if you were charged twice for the same period, or charged after you had already cancelled. Report such a charge within 7 days of the deduction, with your transaction ID, and we will investigate and correct genuine errors.",
        ],
        [
          "How to cancel",
          "You can cancel at any time by cancelling the Lookzon AutoPay mandate in your UPI app or with your bank, or by writing to support@lookzon.com. Cancelling stops all future charges. Your access continues until the end of the period you have already paid for, and no refund is issued for that period.",
        ],
        [
          "Contact",
          "For billing questions, write to support@lookzon.com from the phone number or email linked to your account. Lookzon is a product of ORBITAPPS TECHNOLOGIES LLP (www.orbitappstechnologiesllp.com), Bengaluru, India.",
        ],
      ]}
    />
  );
}
