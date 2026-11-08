# Vanpraseth Tuy — Portfolio

Personal portfolio for graduate software development, junior full-stack development and entry-level cybersecurity applications.

## Local development

```bash
npm ci
npm run dev
```

Open the local URL printed by Vite.

## Production build

```bash
npm run build
npm run preview
```

The static production files are written to `dist/`.

## Project structure

- `src/data/portfolio.ts` — profile, experience, projects, skills and education
- `src/App.tsx` — layout and interactions
- `src/styles.css` — visual design and responsive breakpoints
- `public/` — production-ready images, metadata graphics and resume

Project facts and links are based on the supplied CV and the public repositories under [github.com/Vanpraseth](https://github.com/Vanpraseth).

## Deployment

This is a static Vite site and can be deployed to GitHub Pages, Netlify, Vercel or Cloudflare Pages.

- Build command: `npm run build`
- Output directory: `dist`
- Node version: 20 or later

Canonical and social-image URLs are derived from the deployed origin at runtime. No publication is performed by this repository setup.
