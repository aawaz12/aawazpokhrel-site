# aawazpokhrel.com

Personal website for Aawaz Pokhrel. Built with [Astro](https://astro.build) —
minimal, modern, static. Sections: intro, research, interests, posts (blog),
and a LinkedIn connect link.

## Run locally

```bash
npm install
npm run dev      # start dev server (http://localhost:4321)
npm run build    # build static site into dist/
npm run preview  # preview the production build
```

## Editing content

All placeholder content lives in a few easy-to-edit files:

| What | File |
| --- | --- |
| Name, tagline, bio, **LinkedIn URL**, email, socials | `src/config.ts` |
| Research / publications + interests list | `src/data.ts` |
| Blog posts | `src/content/posts/*.md` (one Markdown file per post) |

### Add a blog post

Create a new file `src/content/posts/my-post.md`:

```markdown
---
title: "My post title"
description: "Short summary."
date: 2025-06-01
tags: ["notes"]
---

Write your post in Markdown here.
```

Posts are sorted newest-first automatically. Set `draft: true` in the
front-matter to hide a post.

## Design notes

- Theme tokens (colors, spacing, type) are in `src/styles/global.css`.
- Light/dark mode toggle is in the header; the choice is saved per visitor.
- Layout, header, and footer live in `src/layouts` and `src/components`.

## Deploy

The build output in `dist/` is plain static files and works on GitHub Pages,
Netlify, Vercel, or any static host. Before deploying, set your final domain in
`astro.config.mjs` (`site: 'https://aawazpokhrel.com'`).
