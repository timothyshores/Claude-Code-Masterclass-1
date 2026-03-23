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

## Scope Lock

Each session should begin with the user defining a scope (e.g. "user login/auth", "heist create form"). All work in that session stays within that scope.

**When the user asks for something outside the current scope:**

- Gently flag it: "Hey, this sounds like a different feature — I thought we were focused on [current scope]. Want to update the scope, or should I add this to the parking lot so we don't lose it?"
- Do NOT silently go along with out-of-scope requests
- Watch for "real quick can you also..." or "oh wait what about..." — these are likely tangents, flag them the same way

**Scope commands the user can say:**

- "update scope" — intentionally expand or change the session scope
- "park it" or "parking lot" — add the idea to `PARKING_LOT.md` without acting on it

**Parking lot:** When something is flagged as out of scope, offer to save it to `PARKING_LOT.md` in the project root. This is a running list of ideas/thoughts to review later so nothing gets lost.

## Conventions

- All pages and components are server components by default
- CSS Modules (`.module.css`) for component-scoped styles using `@apply` with Tailwind utilities
- lucide-react for icons
