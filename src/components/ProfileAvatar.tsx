import Image from 'next/image';

type ProfileAvatarProps = {
  priority?: boolean;
  /** default: full hero size; compact keeps 176×176 */
  size?: 'hero' | 'compact';
  className?: string;
};

export default function ProfileAvatar({
  priority = false,
  size = 'hero',
  className = '',
}: ProfileAvatarProps) {
  const frameSize =
    size === 'hero' ? 'w-44 h-44 sm:w-48 sm:h-48' : 'w-44 h-44';
  const sizesAttr =
    size === 'hero' ? '(max-width: 640px) 176px, 192px' : '176px';

  return (
    <div className={`relative inline-flex flex-col items-center group ${className}`}>
      <div
        className="pointer-events-none absolute -inset-10 rounded-full bg-gradient-to-br from-cyan-400/25 via-fuchsia-500/15 to-violet-600/20 blur-3xl opacity-80 transition-opacity duration-700 group-hover:opacity-100"
        aria-hidden
      />
      <div className="relative">
        <div
          className="pointer-events-none absolute -inset-3 rounded-full bg-gradient-to-tr from-cyan-400/35 via-fuchsia-500/25 to-transparent blur-xl opacity-70 transition-opacity duration-500 group-hover:opacity-100"
          aria-hidden
        />
        <div
          className={`profile-avatar-frame ${frameSize} ring-1 ring-white/10 transition-transform duration-500 ease-out will-change-transform group-hover:scale-[1.04]`}
        >
          <div className="relative h-full w-full rounded-full overflow-hidden">
            <Image
              src="/nicky_profile.png"
              alt="Worachat Paranya"
              fill
              sizes={sizesAttr}
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              priority={priority}
            />
            <div
              className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-t from-[#050816]/35 via-transparent to-white/[0.07]"
              aria-hidden
            />
          </div>
        </div>
        <div
          className="absolute bottom-0.5 right-0.5 z-20 drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
          role="status"
          aria-label="Online"
        >
          <span className="relative flex h-5 w-5 items-center justify-center">
            <span
              className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-40 animate-ping"
              aria-hidden
            />
            <span
              className="relative h-[1.125rem] w-[1.125rem] rounded-full bg-gradient-to-br from-emerald-300 to-emerald-600 border-2 border-[#050816] shadow-[0_0_12px_rgba(16,185,129,0.55)]"
              aria-hidden
            />
            <span
              className="pointer-events-none absolute h-1 w-1 rounded-full bg-white shadow-sm"
              aria-hidden
            />
          </span>
        </div>
      </div>
    </div>
  );
}
