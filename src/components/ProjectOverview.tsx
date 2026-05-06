import ScrollReveal from '@/components/ScrollReveal';
import { parseProjectContent } from '@/lib/projectContent';

const ACCENT_BAR = [
  'from-cyan-400 via-cyan-500 to-teal-500',
  'from-fuchsia-400 via-pink-500 to-rose-500',
  'from-violet-400 via-purple-500 to-fuchsia-500',
  'from-emerald-400 via-teal-400 to-cyan-500',
] as const;

export default function ProjectOverview({ content }: { content: string }) {
  const { blocks, techNotes } = parseProjectContent(content);
  const techMerged = techNotes.join(' ');

  return (
    <div className="cyber-card p-6 md:p-8 overflow-hidden relative group/overview">
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-gradient-to-br from-cyan-500/12 via-fuchsia-500/8 to-transparent blur-3xl motion-safe:transition-transform motion-safe:duration-700 group-hover/overview:scale-110"
        aria-hidden
      />
      <div className="scan-line opacity-50" />

      <div className="relative flex flex-wrap items-end justify-between gap-4 mb-6 md:mb-8">
        <h3 className="font-display text-lg md:text-xl uppercase tracking-[0.18em] text-white flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-cyan-400/25 bg-gradient-to-br from-cyan-500/15 to-fuchsia-500/10 shadow-[0_0_20px_-6px_rgba(0,229,255,0.45)] motion-safe:animate-pulse-glow">
            <span className="text-holo-cyan text-[0.85rem] font-bold leading-none">◇</span>
          </span>
          <span>
            Project <span className="text-holo-cyan">Overview</span>
          </span>
        </h3>
        <p className="font-mono text-[0.62rem] md:text-[0.68rem] tracking-[0.24em] text-slate-500 uppercase">
          {blocks.length} modules
          {techNotes.length > 0 ? ' · stack' : ''}
        </p>
      </div>

      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
        {blocks.map((block, i) => (
          <ScrollReveal key={i} delay={Math.min(i * 55, 400)} direction="up">
            <article
              className="group/card relative h-full overflow-hidden rounded-xl border border-cyan-400/12 bg-gradient-to-br from-[#0a0e2c]/85 to-[#050816]/92 px-4 py-4 md:px-5 md:py-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-sm motion-safe:transition-all motion-safe:duration-300 hover:border-cyan-400/40 hover:shadow-[0_12px_40px_-20px_rgba(0,229,255,0.35)] hover:-translate-y-0.5"
            >
              <div
                className={`absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b ${ACCENT_BAR[i % ACCENT_BAR.length]} opacity-90 motion-safe:transition-all motion-safe:duration-300 group-hover/card:opacity-100 group-hover/card:shadow-[0_0_14px_rgba(0,229,255,0.35)]`}
                aria-hidden
              />
              <div
                className="pointer-events-none absolute -right-8 top-1/2 h-24 w-24 -translate-y-1/2 rounded-full bg-cyan-400/5 blur-2xl motion-safe:transition-opacity motion-safe:duration-500 opacity-0 group-hover/card:opacity-100"
                aria-hidden
              />

              {block.title ? (
                <>
                  <h4 className="font-display text-[0.72rem] md:text-[0.78rem] uppercase tracking-[0.14em] text-white/95 leading-snug pr-2 mb-2 group-hover/card:text-cyan-100/95 motion-safe:transition-colors">
                    {block.title}
                  </h4>
                  {block.body.length > 180 ? (
                    <details className="group/details project-overview-details">
                      <summary className="cursor-pointer list-none text-slate-400 text-sm leading-relaxed [&::-webkit-details-marker]:hidden">
                        <span className="inline-flex items-center gap-2 text-cyan-300/85 hover:text-fuchsia-300/90 motion-safe:transition-colors">
                          <span className="h-px w-6 bg-gradient-to-r from-cyan-400/60 to-transparent" />
                          ดูรายละเอียด
                          <span className="project-overview-caret text-[0.65rem] inline-block motion-safe:transition-transform">
                            ▸
                          </span>
                        </span>
                      </summary>
                      <p className="mt-3 text-sm text-slate-400/95 leading-relaxed border-t border-white/[0.06] pt-3 pl-1">
                        {block.body}
                      </p>
                    </details>
                  ) : (
                    <p className="text-sm text-slate-400/95 leading-relaxed pl-0.5">{block.body}</p>
                  )}
                </>
              ) : (
                <p className="text-sm text-slate-300/90 leading-relaxed">{block.body}</p>
              )}
            </article>
          </ScrollReveal>
        ))}
      </div>

      {techMerged ? (
        <ScrollReveal direction="up" delay={200}>
          <div className="relative mt-8 rounded-xl border border-fuchsia-400/20 bg-[#050816]/80 overflow-hidden motion-safe:transition-all motion-safe:duration-300 hover:border-fuchsia-400/40 hover:shadow-[0_0_32px_-14px_rgba(255,46,209,0.35)]">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-fuchsia-400/35 to-transparent" />
            <div className="flex items-center gap-3 px-4 py-3 md:px-5 border-b border-white/[0.06]">
              <span className="font-display text-[0.65rem] tracking-[0.28em] uppercase text-fuchsia-300/90">
                Stack &amp; architecture
              </span>
              <span className="h-1 w-1 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.7)]" />
            </div>
            <p className="px-4 py-4 md:px-5 text-[0.8rem] md:text-sm text-slate-400/95 leading-relaxed font-mono">
              {techMerged}
            </p>
          </div>
        </ScrollReveal>
      ) : null}
    </div>
  );
}
