# cv

Personal website of **Bane Avramović** — Product Owner building AI products
for financial services. Built with Next.js and deployed for free on GitHub
Pages.

**Live site:** https://avramovicbane.github.io/cv/

## Pages

- **Home** (`/`) — who I am, an animated credit-workflow card, and what I do.
- **Work** (`/work/`) — two before/after case studies and the two loops I run
  (client lifecycle, two-week sprint).
- **Career** (`/career/`) — the career as "release notes", plus skills.
- **Certificates** (`/certificates/`) — learning roadmap and a certificate
  gallery with a lightbox.

Every page ends with a short contact block. Light/dark toggle and a
⌘K / Ctrl+K quick-jump palette work everywhere.

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
