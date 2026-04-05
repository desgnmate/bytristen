# By Tristen — Fine Art Wedding Photographer

A multi-page editorial photography portfolio built with **Next.js 15** (App Router), **Tailwind CSS v4**, and **Framer Motion**.

## Tech Stack

- **Framework:** Next.js 15 (App Router, Turbopack)
- **Styling:** Tailwind CSS v4 + custom CSS variables
- **Animations:** Framer Motion (`motion/react`) + Lenis smooth scroll
- **Language:** TypeScript
- **UI Components:** shadcn/ui (Radix primitives)

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — hero, portfolio highlights, Instagram feed |
| `/about` | About — photographer bio and story gallery |
| `/wedding` | Wedding — wedding photography portfolio |
| `/commercial` | Commercial — commercial work portfolio |
| `/contact` | Contact — inquiry form |

## Getting Started

```bash
npm install
npm run dev
```

The dev server runs at `http://localhost:3000` using **Turbopack** (required because the project path contains `!` characters which Webpack cannot handle).

## Project Structure

```
src/
├── app/                  # Next.js App Router (pages & layouts)
│   ├── layout.tsx        # Root layout (nav, footer, global CSS)
│   ├── page.tsx          # Home page
│   ├── about/            # About page
│   ├── wedding/          # Wedding portfolio
│   ├── commercial/       # Commercial portfolio
│   └── contact/          # Contact form
├── components/
│   ├── layout/           # Navbar, Footer
│   ├── motion/           # FadeIn, ParallaxImage, FloatItem, SmoothScroll
│   ├── ui/               # shadcn/ui components
│   └── figma/            # Figma-exported components
├── styles/               # Global CSS, Tailwind config, fonts
└── imports/              # Legacy imported assets
public/
├── images/               # Photography assets
└── imports/              # Instagram feed + logo
```

## Important Notes

- **Turbopack is required:** The `--turbopack` flag is used in both `dev` and `build` scripts because the project directory contains `!` characters which Webpack treats as loader syntax delimiters.
- **Client Components:** All pages use `"use client"` because they rely on Framer Motion animations and scroll-linked effects.
- **SEO:** Each page has server-rendered metadata (title, description, OpenGraph) defined in its `page.tsx` route file.