import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "../../lib/utils";
import { playStoreUrl } from "./data";

const paths = {
  mic: (
    <>
      <rect x="9" y="3" width="6" height="11" rx="3" />
      <path d="M5 11a7 7 0 0 0 14 0M12 18v3" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s-7-6.2-7-12a7 7 0 0 1 14 0c0 5.8-7 12-7 12z" />
      <circle cx="12" cy="9" r="2.5" />
    </>
  ),
  pulse: <path d="M3 12h4l3-8 4 16 3-8h4" />,
  route: (
    <>
      <circle cx="6" cy="19" r="2" />
      <circle cx="18" cy="5" r="2" />
      <path d="M8 19h7a3.5 3.5 0 0 0 0-7H9a3.5 3.5 0 0 1 0-7h7" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l8 3v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  siren: (
    <path d="M6 16v-5a6 6 0 0 1 12 0v5M4 16h16M10 20h4M12 2v2M3.5 6 5 7M20.5 6 19 7" />
  ),
  arrow: <path d="M7 17 17 7M8 7h9v9" />,
  check: <path d="m5 12 4.5 4.5L19 7" />,
  play: <path d="M7 4.5v15l12.5-7.5z" fill="currentColor" stroke="none" />,
  spark: (
    <path
      d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"
      fill="currentColor"
      stroke="none"
    />
  ),
  home: (
    <>
      <path d="M3 11l9-7 9 7" />
      <path d="M5 10v10h14V10" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3.5" />
      <path d="M2.5 20a6.5 6.5 0 0 1 13 0M16 4.5a3.5 3.5 0 0 1 0 7M18 14.2a6.5 6.5 0 0 1 3.5 5.8" />
    </>
  ),
  battery: (
    <>
      <rect x="2" y="7" width="17" height="10" rx="2.5" />
      <path d="M22 11v2" />
      <path d="M5.5 10.5h8v3h-8z" fill="currentColor" stroke="none" />
    </>
  ),
  lock: (
    <>
      <rect x="4.5" y="10.5" width="15" height="10" rx="2.5" />
      <path d="M8 10.5v-3a4 4 0 0 1 8 0v3" />
    </>
  ),
  power: (
    <>
      <path d="M12 3v9" />
      <path d="M6.4 6.6a8 8 0 1 0 11.2 0" />
    </>
  ),
  menu: <path d="M4 8h16M4 16h16" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
  logo: (
    <>
      <circle cx="12" cy="12" r="7.5" />
      <circle cx="12" cy="12" r="2.6" fill="currentColor" stroke="none" />
    </>
  ),
} satisfies Record<string, ReactNode>;

export type IconName = keyof typeof paths;

export function Icon({ name, className }: { name: IconName; className?: string }) {
  return (
    <svg
      className={cn("icon", className)}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}

export function Arrow() {
  return <Icon name="arrow" />;
}

export function Brand() {
  return (
    <Link href="/" className="brand" aria-label="Lookzon home">
      <span className="brand-mark">
        <Image src="/brand/lookzon-mark-96.webp" alt="" width={32} height={32} priority />
      </span>
      lookzon<span className="brand-dot">.</span>
    </Link>
  );
}

export function PlayBadge() {
  return (
    <a className="play-badge" href={playStoreUrl}>
      <Icon name="play" />
      <span>
        <small>GET IT ON</small>
        <strong>Google Play</strong>
      </span>
    </a>
  );
}
