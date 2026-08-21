import { readFile } from "node:fs/promises";
import path from "node:path";
import { siteConfig } from "@/data/site";

export const runtime = "nodejs";

const resumePath = path.join(
  process.cwd(),
  "public",
  "Worachat_Resume_Backend_Developer.pdf",
);

export async function GET() {
  try {
    const resume = await readFile(resumePath);

    return new Response(resume, {
      headers: {
        "Cache-Control": "public, max-age=3600, must-revalidate",
        "Content-Disposition": `attachment; filename="${siteConfig.resume.downloadName}"`,
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
