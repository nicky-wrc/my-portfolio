import { ImageResponse } from "next/og";
import { getProfileIconDataUrl } from "@/lib/profileIconDataUrl";

export const runtime = "nodejs";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default async function AppleIcon() {
  const src = await getProfileIconDataUrl();
  const dim = 180;

  return new ImageResponse(
    (
      <div
        style={{
          width: dim,
          height: dim,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "transparent",
        }}
      >
        <div
          style={{
            width: dim,
            height: dim,
            borderRadius: dim / 2,
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element -- ImageResponse / Satori */}
          <img
            src={src}
            alt=""
            width={dim}
            height={dim}
            style={{
              width: dim,
              height: dim,
              objectFit: "cover",
            }}
          />
        </div>
      </div>
    ),
    { ...size },
  );
}
