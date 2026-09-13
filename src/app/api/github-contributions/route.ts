import { siteConfig } from "@/data/site";
import {
  parseContributions,
  type Contributions,
} from "@/lib/github-contributions";

export async function GET() {
  try {
    const response = await fetch(
      `https://github.com/users/${encodeURIComponent(siteConfig.github.handle)}/contributions`,
      {
        headers: { Accept: "text/html" },
        next: { revalidate: 3600 },
        signal: AbortSignal.timeout(10000),
      },
    );
    if (!response.ok) throw new Error("GitHub unavailable");
    const days = parseContributions(await response.text());
    const data: Contributions = {
      username: siteConfig.github.handle,
      days,
      total: days.reduce((sum, day) => sum + day.count, 0),
      updatedAt: new Date().toISOString(),
    };
    return Response.json(data, {
      headers: { "Cache-Control": "public, max-age=300, s-maxage=3600" },
    });
  } catch {
    return Response.json(
      { error: "GitHub activity is temporarily unavailable." },
      { status: 502, headers: { "Cache-Control": "no-store" } },
    );
  }
}
