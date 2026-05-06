export type OverviewBlock = {
  title: string;
  body: string;
};

export type ParsedProjectContent = {
  blocks: OverviewBlock[];
  techNotes: string[];
};

/**
 * Split long project prose into scannable blocks and trailing "tech" sentences.
 */
export function parseProjectContent(content: string): ParsedProjectContent {
  const parts = content
    .split(/\.\s+/)
    .map((s) => s.trim().replace(/\.$/, ''))
    .filter((s) => s.length > 10);

  const techNotes: string[] = [];
  const featureParts: string[] = [];

  for (const p of parts) {
    if (/^(พัฒนาด้วย|ใช้)\b/.test(p)) {
      techNotes.push(p.endsWith('.') ? p : `${p}.`);
    } else {
      featureParts.push(p);
    }
  }

  const blocks: OverviewBlock[] = featureParts.map((text) => {
    const parenThat = text.match(/^(.+?\([^)]+\))\s+ที่\s*([\s\S]+)$/);
    if (parenThat) {
      return { title: parenThat[1].trim(), body: parenThat[2].trim() };
    }

    const thatOnly = text.match(/^(.+?)\s+ที่\s+([\s\S]+)$/);
    if (
      thatOnly &&
      thatOnly[1].length >= 4 &&
      thatOnly[1].length <= 130 &&
      thatOnly[2].length >= 8
    ) {
      return { title: thatOnly[1].trim(), body: thatOnly[2].trim() };
    }

    if (text.length > 90) {
      const commaIdx = text.indexOf(',');
      if (commaIdx > 20 && commaIdx < 95) {
        return {
          title: text.slice(0, commaIdx).trim(),
          body: text.slice(commaIdx + 1).trim(),
        };
      }
    }

    return { title: '', body: text };
  });

  return { blocks, techNotes };
}

export function countOverviewBlocks(content: string): number {
  const { blocks, techNotes } = parseProjectContent(content);
  return blocks.length + (techNotes.length > 0 ? 1 : 0);
}
