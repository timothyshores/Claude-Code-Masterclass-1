# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Pocket Heist — a Next.js 16 (App Router) office heist mission planning app built with React 19, TypeScript (strict), and Tailwind CSS v4.

## Commands

- `npm run dev` — start dev server (port 3000)
- `npm run build` — production build
- `npm run lint` — run ESLint
- `npm test` — run Vitest (watch mode)
- `npx vitest run` — run tests once
- `npx vitest run tests/components/Navbar.test.tsx` — run a single test file

## Architecture

**Routing:** Next.js App Router with two route groups:

- `app/(public)/` — unauthenticated pages (splash, login, signup, preview)
- `app/(dashboard)/` — authenticated pages with Navbar (heists list, create, [id] detail)

**Layouts:** RootLayout → PublicLayout (`<main className="public">`) or DashboardLayout (Navbar + main).

**Components:** Located in `components/` using barrel exports (`index.ts`). Each component has its own directory with a CSS Module file that uses `@reference "../app/globals.css"` to access Tailwind theme tokens.

**Styling:** Tailwind CSS v4 via PostCSS. Custom theme colors defined in `app/globals.css` under `@theme` (primary purple `#C27AFF`, secondary pink `#FB64B6`, dark backgrounds). Global utility classes: `.page-content`, `.center-content`, `.form-title`.

**Testing:** Vitest with jsdom, Testing Library, and jest-dom matchers. Tests live in `tests/` mirroring the source structure. Globals enabled (no need to import `describe`/`it`/`expect`).

**Path alias:** `@/*` maps to project root.

## Conventions

- All pages and components are server components by default
- CSS Modules (`.module.css`) for component-scoped styles using `@apply` with Tailwind utilities
- lucide-react for icons
