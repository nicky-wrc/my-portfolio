import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <main id="main-content" className="min-h-screen text-slate-100 flex flex-col">
      <Navigation />

      <div className="flex-grow flex items-center justify-center px-6">
        <div className="text-center max-w-lg">
          <div className="mb-8">
            <span className="text-9xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 text-transparent bg-clip-text">
              404
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Page Not Found
          </h1>

          <p className="text-slate-400 text-lg mb-8">
            The page you are looking for does not exist or has been moved.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40 hover:scale-105 transform"
            >
              Go Home
            </Link>
            <Link
              href="/projects"
              className="px-8 py-3 border border-slate-600/50 hover:border-cyan-400 text-slate-300 hover:text-cyan-300 rounded-xl font-semibold transition-all duration-300"
            >
              View Projects
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
