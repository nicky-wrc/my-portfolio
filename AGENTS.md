# Repository Guidelines

## Project Structure & Module Organization

This repository is a Next.js 16 portfolio using the App Router, React 19, and TypeScript. Route pages, layouts, metadata routes, and global CSS live in `src/app/`; dynamic project pages use `src/app/projects/[slug]/`. Reusable UI and animation code belongs in `src/components/`. Keep portfolio content in `src/data/` and shared helpers in `src/lib/` rather than embedding large data objects in pages. Static images, the resume PDF, and other directly served files live in `public/`.

## Build, Test, and Development Commands

- `npm ci` installs the exact dependency versions from `package-lock.json`.
- `npm run dev` starts the local development server at `http://localhost:3000`.
- `npm run lint` runs the Next.js core-web-vitals and TypeScript ESLint rules.
- `npm run build` creates a production build and catches type or route-generation failures.
- `npm run start` serves the completed production build locally.

Run lint and build before opening a pull request.

## Coding Style & Naming Conventions

Use strict TypeScript and two-space indentation. Follow the existing component style and let `eslint.config.mjs` be authoritative. Name React component files and exports in PascalCase (`ProjectCard.tsx`), variables and helpers in camelCase, and route directories in lowercase. Prefer the `@/` alias for imports from `src/`. Add `'use client'` only to components that require hooks, browser APIs, or event handlers. Keep styling in Tailwind utility classes or `src/app/globals.css`; reuse existing visual primitives before adding near-duplicates.

## Testing Guidelines

No application test framework or coverage threshold is currently configured. For every change, run `npm run lint` and `npm run build`, then manually verify affected routes at common desktop and mobile widths. Exercise interactive behavior such as navigation, animations, dynamic project routes, and contact-form states. If tests are introduced, use `*.test.ts` or `*.test.tsx` names and add the corresponding command to `package.json`.

## Commit & Pull Request Guidelines

Recent history uses short, imperative subjects such as `Add projects`; keep commits focused and make the subject describe the user-visible change. Pull requests should include a concise summary, validation performed, and linked issue when applicable. Include before/after screenshots for visual changes and call out new environment variables or deployment steps.

## Security & Configuration

Configure EmailJS through `NEXT_PUBLIC_EMAILJS_SERVICE_ID`, `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`, and `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`; see `EMAILJS_SETUP.md`. Never commit `.env.local` or credentials. Review `DEPLOYMENT_SETUP.md` when changing hosting or production configuration.
