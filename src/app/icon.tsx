import { ImageResponse } from "next/og";
import { getProfileIconDataUrl } from "@/lib/profileIconDataUrl";

export const runtime = "nodejs";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default async function Icon() {
  const src = await getProfileIconDataUrl();
  const dim = 32;

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
