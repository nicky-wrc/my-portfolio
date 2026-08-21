import { ImageResponse } from "next/og";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
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
          border: "1px solid #29313a",
          borderRadius: 7,
          color: "#f1f3f5",
          fontFamily: "Arial, sans-serif",
          fontSize: 13,
          fontWeight: 700,
          letterSpacing: "-0.8px",
        }}
      >
        <span style={{ display: "flex", transform: "translateX(-0.4px)" }}>
          WP
        </span>
        <div
          style={{
            position: "absolute",
            right: 4,
            bottom: 3,
            width: 5,
            height: 2,
            borderRadius: 1,
            background: "#6f95b5",
          }}
        />
      </div>
    ),
    { ...size },
  );
}
