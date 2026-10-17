import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#0a1e34",
      }}
    >
      <svg width="44" height="44" viewBox="0 0 36 36" fill="none">
        <path
          d="M9.5 26.5 18 9.5l8.5 17"
          stroke="#fff"
          strokeWidth="2.8"
          strokeLinecap="square"
        />
        <path
          d="M13.9 20.1h8.2"
          stroke="#fff"
          strokeWidth="2.8"
          strokeLinecap="square"
        />
      </svg>
    </div>,
    size,
  );
}
