# cv

Personal website of **Bane Avramović** — Product Owner building AI products
for financial services. Built with Next.js and deployed for free on GitHub
Pages.

**Live site:** https://avramovicbane.github.io/cv/

## What's on the site

- **Hero** — an animated, illustrative SME credit workflow (60 → 20 days).
- **Impact** — headline metrics and two interactive before/after case studies.
- **What I do** — the four parts of the job: win, build, lead, fix.
- **How I work** — the client lifecycle and the two-week sprint, as
  auto-playing, clickable loops.
- **Journey** — the career as "release notes", v1.0 → v6.0.
- **Skills**, **Learning** (learning roadmap + certificate gallery with a
  lightbox), and **Contact**.
- Light/dark theme toggle, a ⌘K / Ctrl+K quick-jump palette, and
  reduced-motion support.

## Editing content

All text, numbers, roles, skills and certificates live in one file:

```
lib/site-config.ts
```

Edit it, commit, and push to `main`. Other files to know about:

- `public/Bane-Avramovic-CV.pdf` — the CV behind every "Download CV" button
  (replace the file, keep the name).
- `public/certs/*.webp` — certificate images shown in the gallery. To add a
  certificate, drop an image here and add an entry to `certificates` in
  `lib/site-config.ts`.
- `public/og.png` — the preview image shown when the link is shared on
  LinkedIn, Slack, etc.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000/cv/ (the site runs under the `/cv` sub-path
everywhere, including locally, to match GitHub Pages).

## Deployment

Every push to `main` runs `.github/workflows/deploy.yml`, which builds the
static site (`next build` with `output: "export"`) and publishes it to GitHub
Pages. The repo's **Settings → Pages → Source** must be set to
**GitHub Actions** (already done).

## Tech

Next.js (App Router, static export) · Tailwind CSS v4 · TypeScript ·
self-hosted fonts (Inter, Bricolage Grotesque, Instrument Serif via
Fontsource).
