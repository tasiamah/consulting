import { ImageResponse } from "next/og";
import { company } from "@/content/company";

export const alt = `${company.legalName} — Enterprise Software Consulting`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#061322",
        padding: "68px 72px",
        fontFamily: "sans-serif",
      }}
    >
      {/* Accent wash */}
      <div
        style={{
          position: "absolute",
          top: -180,
          right: -140,
          width: 620,
          height: 620,
          borderRadius: 9999,
          background: "#1a5496",
          opacity: 0.35,
          filter: "blur(120px)",
          display: "flex",
        }}
      />

      <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
        <svg width="52" height="52" viewBox="0 0 36 36" fill="none">
          <rect width="36" height="36" rx="3" fill="#ffffff" />
          <path
            d="M9.5 26.5 18 9.5l8.5 17"
            stroke="#061322"
            strokeWidth="2.4"
            strokeLinecap="square"
          />
          <path
            d="M13.9 20.1h8.2"
            stroke="#061322"
            strokeWidth="2.4"
            strokeLinecap="square"
          />
        </svg>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span
            style={{
              color: "#ffffff",
              fontSize: 30,
              fontWeight: 700,
              letterSpacing: -0.5,
            }}
          >
            A&amp;H
          </span>
          <span
            style={{
              color: "rgba(255,255,255,0.55)",
              fontSize: 13,
              letterSpacing: 4,
            }}
          >
            CONSULTING GROUP
          </span>
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <span
          style={{
            color: "#7eade3",
            fontSize: 17,
            letterSpacing: 4,
            fontWeight: 600,
          }}
        >
          DUBAI · LONDON
        </span>
        <span
          style={{
            color: "#ffffff",
            fontSize: 66,
            lineHeight: 1.08,
            marginTop: 24,
            letterSpacing: -2,
            maxWidth: 940,
          }}
        >
          Software systems that stand up to scrutiny.
        </span>
      </div>

      <div
        style={{
          display: "flex",
          gap: 40,
          borderTop: "1px solid rgba(255,255,255,0.14)",
          paddingTop: 28,
          color: "rgba(255,255,255,0.6)",
          fontSize: 19,
        }}
      >
        <span>Custom Software</span>
        <span>·</span>
        <span>Integration</span>
        <span>·</span>
        <span>Cloud</span>
        <span>·</span>
        <span>Cybersecurity</span>
      </div>
    </div>,
    size,
  );
}
