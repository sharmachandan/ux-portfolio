# UX Design Leader Portfolio

A portfolio website for a design leader at a Fortune 1 retailer, built with Astro and Tailwind CSS.

## Features

- **Home**: Hero, featured case studies, awards teaser, leadership principles preview, blog section, contact CTA
- **Case Studies**: Filterable grid by impact category (Strategy, Team Enablement, Execution), detailed case study pages
- **About**: Professional bio, experience timeline, what I do, contact
- **Leadership Principles**: 6 principles with descriptions and examples
- **Awards**: International design awards (Awwwards, FWA, Red Dot, Webby, IDEA)
- **Blog**: Listing and post pages (ready for content)

## Tech Stack

- Astro 4
- Tailwind CSS
- @tailwindcss/typography
- Sanity CMS (optional, for blog content)
- TypeScript

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) to view the site.

## Build

```bash
npm run build
```

## Deploy (Cloudflare Pages)

This repo is set up for [Cloudflare Pages](https://developers.cloudflare.com/pages/) with a static Astro build (`dist/`).

**Git integration (recommended):** In the Cloudflare dashboard, create a Pages project from this repository and set:

- **Build command:** `npm run build`
- **Build output directory:** `dist`
- **Node version:** `20` (this repo includes `.nvmrc`)

Add any public env vars your build needs (for example `PUBLIC_SANITY_PROJECT_ID` and `PUBLIC_SANITY_DATASET` if you use Sanity).

**CLI:** After [`wrangler login`](https://developers.cloudflare.com/workers/wrangler/install-and-update/), deploy with:

```bash
npm run pages:deploy
```

Configuration lives in `wrangler.toml` (`pages_build_output_dir` points at `./dist`). To preview the built site locally with Pages routing:

```bash
npm run build && npm run pages:dev
```

## Project Structure

```
src/
├── components/       # Reusable components
├── content/          # Markdown content (case-studies, blog)
├── data/             # Leadership principles, awards
├── layouts/          # Page layouts
├── pages/            # Routes
└── styles/           # Global CSS
```

## Adding Content

### Case Studies

Add `.md` or `.mdx` files to `src/content/case-studies/` with frontmatter:

```yaml
---
title: "Project Title"
company: "Company Name"
outcome: "Quantified result"
role: "Player + Coach, N designers"
impactCategories: ["Strategy", "Team Enablement", "Execution"]
featured: true
problem: "One-line problem statement"
---
```

### Blog Posts

**Option A: Sanity CMS** (recommended)

1. Create a project at [sanity.io/manage](https://sanity.io/manage) or run `npx sanity login` then `npx sanity init`
2. Copy `.env.example` to `.env` and add your `PUBLIC_SANITY_PROJECT_ID` and `PUBLIC_SANITY_DATASET`
3. Run `npm run studio` to open Sanity Studio locally, or `npm run studio:deploy` to deploy it to `*.sanity.studio`
4. Add blog posts in the Studio; they appear on the site after the next build

**Option B: Markdown files**

Add `.md` or `.mdx` files to `src/content/blog/`:

```yaml
---
title: "Post Title"
date: 2024-01-15
excerpt: "Short description"
tags: ["tag1", "tag2"]
---
```

### Customization

- **Leadership principles**: Edit `src/data/leadership-principles.ts`
- **Awards**: Edit `src/data/awards.ts`
- **Contact email**: Update `mailto:hello@example.com` in `src/pages/index.astro` and `src/pages/about.astro`
- **Personal details**: Update hero, about page, and meta descriptions
