# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server on http://localhost:3000
- `npm run build` - Build production application
- `npm run start` - Start production server
- `npm run lint` - Run ESLint checks

## Project Architecture

This is a Next.js 15 application using the App Router architecture with TypeScript and Tailwind CSS.

### Key Structure
- **App Router**: Uses `src/app/` directory structure with `layout.tsx` and `page.tsx`
- **TypeScript**: Configured with strict mode and Next.js plugin
- **Styling**: Tailwind CSS v4 with Geist fonts (sans and mono variants)
- **Path Aliases**: `@/*` maps to `./src/*`

### Configuration Files
- `next.config.ts` - Next.js configuration (currently minimal)
- `tsconfig.json` - TypeScript with ES2017 target and strict mode
- `eslint.config.mjs` - ESLint with Next.js core-web-vitals and TypeScript rules
- `postcss.config.mjs` - PostCSS configuration for Tailwind

### Component Patterns
- Uses Next.js Image component for optimized images
- CSS classes follow Tailwind utility-first approach
- Font loading via `next/font/google` with CSS variables