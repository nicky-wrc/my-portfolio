export interface ContributionDay {
  date: string;
  count: number;
  level: number;
}
export interface Contributions {
  username: string;
  days: ContributionDay[];
  total: number;
  updatedAt: string;
}

/** Parse GitHub's public calendar, joining cells with their accessible count labels. */
export function parseContributions(html: string): ContributionDay[] {
  const counts = new Map<string, number>();
  for (const match of html.matchAll(
    /<tool-tip\b([^>]*)>([\s\S]*?)<\/tool-tip>/g,
  )) {
    const id = match[1].match(/\bfor="([^"]+)"/)?.[1];
    const label = match[2].replace(/<[^>]+>/g, "").trim();
    const number = label.match(/^([\d,]+) contributions?\b/);
    if (id && (number || /^No contributions\b/.test(label))) {
      counts.set(id, number ? Number(number[1].replaceAll(",", "")) : 0);
    }
  }
  const days: ContributionDay[] = [];
  for (const match of html.matchAll(/<td\b([^>]*\bdata-date="[^"]+"[^>]*)>/g)) {
    const attributes = match[1];
    const date = attributes.match(/\bdata-date="(\d{4}-\d{2}-\d{2})"/)?.[1];
    const id = attributes.match(/\bid="([^"]+)"/)?.[1];
    const level = Number(attributes.match(/\bdata-level="([0-4])"/)?.[1]);
    const count = id ? counts.get(id) : undefined;
    if (!date || !Number.isInteger(level) || count === undefined)
      throw new Error("Incomplete contribution calendar");
    days.push({ date, count, level });
  }
  days.sort((a, b) => a.date.localeCompare(b.date));
  if (
    days.length < 300 ||
    new Set(days.map((day) => day.date)).size !== days.length
  )
    throw new Error("Invalid contribution calendar");
  return days;
}
