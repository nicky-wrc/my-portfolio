import Link from "next/link";
export default function NotFound() {
  return (
    <main id="main-content" className="not-found">
      <span className="section-badge">404 · PAGE NOT FOUND</span>
      <h1>
        Lost in <em>space?</em>
      </h1>
      <p>This page doesn’t exist. Let’s get you back to the portfolio.</p>
      <Link className="gradient-button" href="/">
        Back to home ↗
      </Link>
      <Link className="text-link" href="/projects">
        Explore projects
      </Link>
    </main>
  );
}
