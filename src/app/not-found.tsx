import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main-content" className="not-found">
      <div>
        <p className="not-found-code">404 / ROUTE_NOT_FOUND</p>
        <h1>That page isn&apos;t here.</h1>
        <p>
          The address may be incorrect, or the page may have moved. Return to the
          portfolio or continue with the project archive.
        </p>
        <nav className="not-found-actions" aria-label="404 recovery links">
          <Link href="/" className="button button-primary">
            Return home
          </Link>
          <Link href="/projects" className="button button-secondary">
            Browse projects
          </Link>
        </nav>
      </div>
    </main>
  );
}
