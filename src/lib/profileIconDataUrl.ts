import { readFile } from "node:fs/promises";
import { join } from "node:path";

export async function getProfileIconDataUrl(): Promise<string> {
  const buf = await readFile(
    join(process.cwd(), "public", "nicky_profile.png"),
  );
  return `data:image/png;base64,${buf.toString("base64")}`;
}
