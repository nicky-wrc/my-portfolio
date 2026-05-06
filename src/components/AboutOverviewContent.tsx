import ProfileAvatar from "@/components/ProfileAvatar";
import AboutOverviewBulletIcon from "@/components/AboutOverviewBulletIcon";
import { aboutLinks, aboutOverviewBlocks } from "@/data/about";

function renderRichLine(line: string) {
  const parts = line.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-semibold text-slate-100">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

type AboutOverviewContentProps = {
  /** Resume / LinkedIn / GitHub under the photo */
  showCtas?: boolean;
  /** Larger photo LCP when this block is above the fold */
  avatarPriority?: boolean;
};

/**
 * Two-column overview: photo (+ optional CTAs) + Introduction / Overview bullets.
 */
export default function AboutOverviewContent({
  showCtas = false,
  avatarPriority = false,
}: AboutOverviewContentProps) {
  return (
    <div className="relative mx-auto w-full max-w-6xl">
      <div
        className="pointer-events-none absolute left-0 top-0 h-72 w-72 rounded-full bg-violet-600/10 blur-3xl"
        aria-hidden
      />
      <div className="relative grid gap-14 lg:grid-cols-[minmax(0,300px)_minmax(0,1fr)] lg:gap-16 xl:gap-20">
        <div className="flex flex-col items-center lg:items-start">
          <div className="relative mb-8 inline-flex rounded-full p-[3px] shadow-[0_0_40px_-6px_rgba(56,189,248,0.55),0_0_32px_-10px_rgba(167,139,250,0.45)] ring-1 ring-cyan-400/25">
            <div className="rounded-full bg-[#050816] p-[5px]">
              <ProfileAvatar
                priority={avatarPriority}
                size="hero"
                className="!mb-0 [&_.profile-avatar-frame]:shadow-none"
              />
            </div>
          </div>

          {showCtas ? (
            <div className="flex w-full max-w-[300px] flex-wrap justify-center gap-3 lg:justify-start">
              <a
                href={aboutLinks.resumeHref}
                download={aboutLinks.resumeDownloadAs}
                className="inline-flex min-h-11 flex-1 items-center justify-center rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_8px_28px_-6px_rgba(139,92,246,0.5)] transition hover:brightness-110 sm:flex-initial"
              >
                Resume
              </a>
              <a
                href={aboutLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 flex-1 items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_8px_28px_-6px_rgba(37,99,235,0.45)] transition hover:brightness-110 sm:flex-initial"
              >
                LinkedIn
              </a>
              <a
                href={aboutLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 flex-1 items-center justify-center rounded-xl border border-slate-700 bg-[#0c101f] px-5 py-2.5 text-sm font-semibold text-slate-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition hover:border-slate-500 hover:bg-[#121726] sm:flex-initial"
              >
                GitHub
              </a>
            </div>
          ) : null}
        </div>

        <div className="min-w-0 text-center lg:pt-2 lg:text-left">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.28em] text-slate-500">
            Introduction
          </p>
          <h2 className="mb-10 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[3.35rem] lg:leading-[1.08] xl:text-7xl">
            Overview<span className="text-cyan-400/90">.</span>
          </h2>

          <div className="space-y-7 text-base leading-relaxed text-slate-300 sm:text-[1.05rem] sm:leading-relaxed">
            {aboutOverviewBlocks.map((block, idx) => (
              <div key={idx} className="group/row flex gap-4 text-left">
                <AboutOverviewBulletIcon name={block.icon} />
                <p className="min-w-0">{renderRichLine(block.text)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
