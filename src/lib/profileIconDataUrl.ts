import { readFile } from "node:fs/promises";
import { join } from "node:path";

export async function getProfileIconDataUrl(): Promise<string> {
  const profileImage = await readFile(
    join(process.cwd(), "public", "nicky_dev.jpg"),
  );

  return `data:image/jpeg;base64,${profileImage.toString("base64")}`;
}
