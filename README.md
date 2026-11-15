# cv

Personal website of **Bane Avramović** — Product Owner building AI products
for financial services. Built with Next.js and deployed for free on GitHub
Pages.

**Live site:** https://avramovicbane.github.io/cv/

## Pages

Every page exists in English (`/`) and Serbian (`/sr/`); the EN | SR switch in
the header jumps between the two versions of the page you are on.

- **Home** (`/`) — who I am, an animated credit-workflow card, headline
  numbers, what I do, and this year's new certificates.
- **Work** (`/work/`) — two before/after case studies and the two loops I run
  (client lifecycle, two-week sprint).
- **Career** (`/career/`) — the career as "release notes", plus skills.
- **Certificates** (`/certificates/`) — learning roadmap and a certificate
  gallery with filters and a lightbox.

Every page ends with a contact block. Light/dark toggle and a
⌘K / Ctrl+K quick-jump palette work everywhere.

## Editing content

- `lib/content.ts` — every sentence on the site, in English (`en`) and
  Serbian (`sr`). The two objects have the same shape; change both when you
  change one.
- `lib/site-config.ts` — language-neutral facts: name, email, links and the
  certificate list.

To add a certificate, drop a `.webp` image into `public/certs/` and add an
entry to `certificates` in `lib/site-config.ts` (newest first). Certificates
dated this year get a "New" tag automatically.

To add a language, add it to `LANGS` in `lib/lang.ts`, add its text to
`lib/content.ts`, and copy the `app/(sr)` folder.

`public/og.png` is the preview image shown when the link is shared on
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
