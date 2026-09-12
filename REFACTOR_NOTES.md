# Portfolio design refactor

The visual design and animation components are adapted from the local Ram-PortFolio reference. Published profile information, skills, project records, and contact details belong to Worachat Paranya.

## Architecture

- `src/data/site.ts`: profile, social links, resume URLs, navigation.
- `src/data/projects.ts`: 12 original projects, featured order, case studies, legacy slug aliases.
- `src/data/skills.ts`: original skill groups. The animated icon list derives from these groups.
- `src/components/layout`: motion providers, Lenis scroll integration, shared footer.
- `src/components/sections`: adapted hero, backgrounds, and marquees.
- `src/styles/portfolio.css`: adapted layout and responsive styles.
- `src/app/globals.css` and `animations.css`: reference styles and keyframes, using Tailwind CSS 4.

The `exam/` reference is excluded from TypeScript and ESLint and is not imported by the production application.

## Routes

- `/`: intro, animated hero, about bento grid, skill marquees, project search, contact CTA.
- `/projects`: complete searchable archive, category filters, featured/alphabetical sorting, grid/list views.
- `/projects/[slug]`: statically generated details with original metadata and permanent legacy redirects.
- `/contact`: original EmailJS form in the new design.
- `/resume`: PDF viewer, download, and HTML fallback.
- `/about`: redirects to the homepage about section.

## Motion

GSAP coordinates the intro and scroll transitions. Lenis handles smooth scrolling. Framer Motion handles entrance, hover, and layout transitions. Reduced-motion preferences disable the intro, smooth scrolling, custom cursor, and particle/comet backgrounds and replace moving skills with a static list.

The intro uses the owner's name as typography, pending a personal signature or logo. Background graphics are code-generated; no additional image-generation service is required.

## Optional content awaiting the owner

Certificates, awards, work-history claims, visitor counters, GitHub activity statistics, chatbot, and terminal are omitted pending supplied information and preference. No reference-owner statistics are presented as Worachat's achievements.

The existing files named after projects contain placeholder imagery. Cards use technology illustrations until screenshots are supplied. Add a verified local screenshot path to the optional `previewImage` field in a project record to display it. Original descriptions and case studies are preserved; missing descriptions and metrics remain omitted.

## Configuration

The existing EmailJS variables remain unchanged: `NEXT_PUBLIC_EMAILJS_SERVICE_ID`, `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`, and `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`. See `EMAILJS_SETUP.md` and `DEPLOYMENT_SETUP.md`. Missing configuration produces an explicit form error; direct email links remain available.

Run `npm run lint` and `npm run build`. On Windows with PowerShell script restrictions, use `npm.cmd`.

## Reference attribution

Adapted from Rameshwar Bhagwat's Ram-PortFolio source supplied in `exam/Ram-PortFolio-master`, especially its hero, background effects, about heading, marquees, cursor, footer, and visual tokens.
