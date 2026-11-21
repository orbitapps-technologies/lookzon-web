"use client";
import { useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";
import { Brand } from "../../components/landing/shared";
const play = "https://play.google.com/store/apps/details?id=com.lookzon.app";
function Card() {
  const p = useSearchParams();
  const code = p.get("code") || "LOOK24";
  const [copied, setCopied] = useState(false);
  return (
    <main className="join-page">
      <div className="join-card">
        <Brand />
        <span className="kicker">YOU&apos;VE BEEN INVITED</span>
        <h1>
          Join your family&apos;s
          <br />
          <em>safety circle.</em>
        </h1>
        <p>
          Lookzon keeps the people you love connected, wherever the day takes
          them.
        </p>
        <div className="invite-code">
          <small>YOUR INVITE CODE</small>
          <strong>{code}</strong>
          <button
            onClick={() => {
              navigator.clipboard?.writeText(code);
              setCopied(true);
            }}
          >
            {copied ? "Copied" : "Copy code"}
          </button>
        </div>
        <a className="btn btn-primary btn-lg" href={`lookzon://join?code=${code}`}>
          Open Lookzon app ↗
        </a>
        <a className="join-fallback" href={play}>
          Don&apos;t have the app? Get it on Google Play
        </a>
      </div>
    </main>
  );
}
export default function Join() {
  return (
    <Suspense>
      <Card />
    </Suspense>
  );
}
