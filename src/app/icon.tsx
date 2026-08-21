import { ImageResponse } from "next/og";

import { getProfileIconDataUrl } from "@/lib/profileIconDataUrl";

export const runtime = "nodejs";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default async function Icon() {
  const src = await getProfileIconDataUrl();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0d0f12",
          border: "1px solid #29313a",
          borderRadius: 16,
          overflow: "hidden",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element -- ImageResponse requires a native image element. */}
        <img
          src={src}
          alt=""
          width={32}
          height={32}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "58% 59%",
            transform: "scale(2.05)",
          }}
        />
      </div>
    ),
    { ...size },
  );
}
