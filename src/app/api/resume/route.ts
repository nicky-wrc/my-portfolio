import { readFile } from "node:fs/promises";
import path from "node:path";
import { siteConfig } from "@/data/site";

export const runtime = "nodejs";

const resumePath = path.join(
  process.cwd(),
  "public",
  siteConfig.resume.pdf.slice(1),
);

export async function GET() {
  try {
    const resume = await readFile(resumePath);

    return new Response(resume, {
      headers: {
        "Cache-Control": "no-store",
        "Content-Disposition": `inline; filename="${siteConfig.resume.downloadName}"`,
        "Content-Length": resume.byteLength.toString(),
        "Content-Type": "application/pdf",
        "X-Content-Type-Options": "nosniff",
      },
    });
  } catch {
    return Response.json(
      { error: "The resume is temporarily unavailable." },
      {
        status: 404,
        headers: { "Cache-Control": "no-store" },
      },
    );
  }
}
