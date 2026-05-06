import Link from 'next/link';
import Footer from '@/components/Footer';
import GridBackground from '@/components/GridBackground';

export default function NotFound() {
  return (
    <main id="main-content" className="min-h-screen text-slate-100 flex flex-col relative overflow-hidden">
      <GridBackground />

      <div className="flex-grow flex items-center justify-center px-6 relative z-10">
        <div className="text-center max-w-lg">
          <p className="font-script text-2xl text-cyan-200/90 mb-2">— signal lost —</p>
          <div className="mb-8">
            <span className="font-display font-extrabold text-[8rem] leading-none text-holo">
              404
            </span>
          </div>

          <h1 className="font-display text-2xl md:text-3xl uppercase tracking-wider text-white mb-4">
            Page <span className="text-holo-pink">Not Found</span>
          </h1>

          <p className="text-slate-400 text-lg mb-8">
            The page you are looking for does not exist or has been moved.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="btn-holo">
              Go Home
            </Link>
            <Link href="/projects" className="btn-holo-ghost">
              View Projects
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
