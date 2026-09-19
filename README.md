# cv

Personal CV / résumé site, built with Next.js and deployed for free on
GitHub Pages.

**Live site:** https://avramovicbane.github.io/cv/

## Editing content

Everything on the page — name, role, about text, experience, education,
skills, and projects — is defined in one file:

```
lib/site-config.ts
```

Edit that file, commit, and push to `main`. No other files need to change
for a normal content update.

## Adding your résumé PDF

Drop your CV as a PDF at `public/resume.pdf` (that exact name). The
"Résumé" button in the header links to it automatically.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000/cv/ (note the `/cv` — the site is configured to
run under that sub-path everywhere, including locally, so it matches
production).

## Deployment

Deployment is automatic: every push to `main` triggers the
`.github/workflows/deploy.yml` GitHub Actions workflow, which builds the
site as static HTML/CSS/JS (`next build` with `output: "export"`) and
publishes it to GitHub Pages.

**One-time setup** (only needed once, already done if the site is live):
in the repo's **Settings → Pages**, set "Build and deployment → Source" to
**GitHub Actions**.

## Tech

- [Next.js](https://nextjs.org/) (App Router, static export)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
