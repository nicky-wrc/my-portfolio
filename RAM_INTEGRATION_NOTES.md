# Ram portfolio integration

The reference inventory contains 215 files. Its active homepage composes Hero,
About, Skills, Work, ActivityMetrics, GitHubContributions, MarqueeBanner and Contact.
The reference uses Next.js 16, React 19, Tailwind 3, Framer Motion, GSAP and Lenis.
This portfolio keeps its existing Next.js 16 / React 19 / Tailwind 4 configuration.

## Design adaptations

- Word-mask headings use the reference's 70-degree word reveal, 0.8-second easing,
  and short stagger. Project and About cards use individual scroll entrances.
- Workflow follows the reference's three small cards plus two wide cards, lime
  accents, small animated diagrams, and pointer-following glow. Copy describes
  Worachat's existing projects and learning approach. The project-mix bars count
  `src/data/projects.ts`; other diagrams illustrate a process rather than results.
- GitHub uses the reference's green activity grid, heading reveal and card entrance.
- Intro uses personal Worachat lettering, a left-to-right reveal and zoom exit.
  The WP monogram is personal artwork, not the reference owner's RB mark.
  Yellowtail is loaded through the existing next/font pipeline.
- Skills retains its rotating words with upright typography. Projects and Contact
  headings use the same sans-serif typography throughout.
- Motion respects reduced-motion preferences. The discarded 21st.dev container
  component and standalone stock-photo demo are not used.

## Live contributions

`/api/github-contributions` reads the public GitHub contribution calendar for
`siteConfig.github.handle`. It joins calendar dates and levels with accessible
count labels, validates the parsed data, and caches successful upstream reads
for one hour. No GitHub token or new environment variable is needed.

The reference's randomized fallback is intentionally omitted. Upstream failures
or markup changes return an unavailable state with retry and a working profile
link. Counts represent GitHub's public calendar and its displayed date range.
This integration depends on that public HTML format remaining compatible.

Existing project routes, featured selection, search/filter/sort controls, EmailJS,
resume image viewer and PDF endpoint remain connected to their existing data.
No new npm package is installed and no environment file is changed.

## Navigation

The top pill uses Lucide icons, spring highlights, hover feedback and the rotating
border treatment from the reference. Same-page anchors are intercepted in the
capture phase, before Next Link handles the hash. Lenis scrolls to the section
with a brief content fade; Home and the personal logo target absolute scroll zero.
Links retain real URLs and modified clicks retain normal browser behavior.
Cross-route links disable Next's automatic scroll so the mounted scroll controller
can animate to the requested section. Reduced motion skips scrolling animation
and fading. Desktop, tablet and mobile checks cover all five destinations,
repeated Home clicks, cross-route navigation and the mobile menu.
