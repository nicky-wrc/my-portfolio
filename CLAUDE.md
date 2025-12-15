# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website for Worachat Paranya, a Computer Science student specializing in Backend Development. Built with Next.js 16 (App Router), React 19, TypeScript, and Tailwind CSS v4.

## Development Commands

```bash
# Development server (runs on http://localhost:3000)
npm run dev

# Production build
npm run build

# Start production server
npm start

# Run ESLint
npm run lint
```

## Architecture

### App Router Structure (Next.js 16 App Router)

The project uses Next.js App Router with the following route structure:
- `/` - Home page (Hero, Projects preview, Skills, Contact form)
- `/about` - About page
- `/projects` - Projects listing page
- `/projects/[slug]` - Individual project detail pages (dynamic route)
- `/contact` - Contact page

All routes are defined in `src/app/` directory with their respective `page.tsx` files.

### Key Directories

- `src/app/` - Next.js App Router pages and layouts
- `src/components/` - Reusable React components (~29 components)
- `src/data/` - Static data files (projects.ts, skills.ts)
- `public/` - Static assets (images, project screenshots)

### Component Architecture

The codebase contains **29 interactive UI components** organized by purpose:

**Animation Components:**
- `ScrollReveal`, `MouseTrail`, `FloatingElements`, `Sparkles`, `Confetti`
- `TypingAnimation`, `AnimatedCounter`, `AnimatedIcon`, `HoverGlow`
- `RippleEffect`, `TextGlitch`, `CursorFollower`

**UI Components:**
- `Navigation`, `Footer`, `ThemeSwitcher`, `ThemeProvider`
- `ProjectCard`, `ProjectImage`, `SkillSection`, `SkillPill`
- `ContactForm`, `SocialIcons`, `ReadyBadge`, `ShimmerButton`
- `GridBackground`, `ParallaxBackground`, `ProgressBar`, `IllustrationSection`, `CardFlip`

**Theme System:**
- Uses React Context (`ThemeProvider`) for client-side theme management
- Supports 3 themes: `dark`, `light`, `default`
- Theme state persisted to localStorage
- Theme classes applied to `<body>` element (not `<html>`)

### Data Management

Project data is stored in typed TypeScript objects (`src/data/projects.ts`, `src/data/skills.ts`):
- `Project` interface defines project structure with slug-based routing
- Projects include: title, description, content, role, tags, category, image, githubUrl, demoUrl
- Dynamic routes (`/projects/[slug]`) use project slugs for navigation

### Styling

- **Tailwind CSS v4** with PostCSS plugin (`@tailwindcss/postcss`)
- Global styles in `src/app/globals.css`
- Custom animations and gradients defined in CSS
- Geist font family (Geist Sans + Geist Mono) via `next/font`

### EmailJS Integration

Contact form uses EmailJS for email sending:
- Configuration via environment variables: `NEXT_PUBLIC_EMAILJS_SERVICE_ID`, `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`, `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
- Setup instructions in `EMAILJS_SETUP.md`
- Form validation and success/error handling with confetti animation on success

### TypeScript Configuration

- Path alias: `@/*` maps to `./src/*`
- Strict mode enabled
- Target: ES2017
- JSX: react-jsx (React 19 automatic JSX transform)

### React Compiler

Next.js config enables React Compiler (`reactCompiler: true`) for React 19 optimizations.

## Important Notes

- All components in `src/components/` that use hooks or browser APIs are marked with `'use client'` directive
- The root layout (`src/app/layout.tsx`) wraps all pages with `ThemeProvider`
- Project images should be placed in `public/` directory and referenced with leading `/`
- Dynamic routes use the slug-based pattern with Next.js generateStaticParams for static generation
- Environment variables must be prefixed with `NEXT_PUBLIC_` to be accessible in client components
