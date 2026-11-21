import type { Metadata } from "next";
import "../legal.css";

export const metadata: Metadata = {
  title: "Join your family's safety circle",
  description: "You've been invited to a Lookzon family safety circle. Open the app to join with your invite code.",
  robots: { index: false, follow: false },
};
export default function JoinLayout({children}:{children:React.ReactNode}){return children}
