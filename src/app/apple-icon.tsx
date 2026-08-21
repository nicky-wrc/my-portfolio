import { ImageResponse } from "next/og";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          background: "#0d0f12",
          border: "6px solid #29313a",
          color: "#f1f3f5",
          fontFamily: "Arial, sans-serif",
          fontSize: 68,
          fontWeight: 700,
          letterSpacing: "-5px",
        }}
      >
        <span style={{ display: "flex", transform: "translateX(-2px)" }}>
          WP
        </span>
        <div
          style={{
            position: "absolute",
            right: 25,
            bottom: 22,
            width: 29,
            height: 7,
            borderRadius: 4,
            background: "#6f95b5",
          }}
        />
      </div>
    ),
    { ...size },
  );
}
