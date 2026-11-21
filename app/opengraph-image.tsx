import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Lookzon — family safety app with live location, crash detection and a Hindi voice assistant";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const icon = await readFile(join(process.cwd(), "app/icon.png"));
  const iconSrc = `data:image/png;base64,${icon.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          backgroundColor: "#0b0f14",
          backgroundImage: "linear-gradient(135deg, #0f2a26 0%, #0b0f14 45%, #0b0f14 60%, #1c1838 100%)",
          color: "#e8eef2",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={iconSrc} width={84} height={84} alt="" />
          <div style={{ display: "flex", fontSize: 52, fontWeight: 700, letterSpacing: -2 }}>
            <span>lookzon</span>
            <span style={{ color: "#ff9a1f" }}>.</span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 76, fontWeight: 700, letterSpacing: -3, lineHeight: 1.05 }}>
            Know your family is safe.
          </div>
          <div style={{ fontSize: 76, fontWeight: 700, letterSpacing: -3, lineHeight: 1.1, color: "#5eead4" }}>
            Without asking.
          </div>
        </div>

        <div style={{ display: "flex", gap: 14, fontSize: 26, color: "#b3bec8" }}>
          {["Live location", "Crash detection", "Safe zones", "Hindi voice assistant"].map((t) => (
            <div
              key={t}
              style={{
                display: "flex",
                padding: "10px 20px",
                borderRadius: 999,
                border: "1px solid rgba(232,238,242,0.18)",
                background: "rgba(255,255,255,0.04)",
              }}
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size },
  );
}
