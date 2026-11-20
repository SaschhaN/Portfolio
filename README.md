# Portfolio – Sascha Niederhauser

Personal portfolio and CV website built with **React 19, TypeScript, Vite and Tailwind CSS v4**.

Features: dark/light mode (follows the system setting, remembered), EN/DE language switch, project filter by technology, and a contact form via [Web3Forms](https://web3forms.com).

## Run locally

Requires [Node.js](https://nodejs.org) LTS.

```bash
npm install
npm run dev        # http://localhost:5173
```

Other scripts: `npm run build` (type-check + production build into `dist/`), `npm run preview`, `npm run lint`.

## Editing content

All personal content lives in [`src/data/content.ts`](src/data/content.ts): profile, experience, education, skills, languages, interests and projects. Each visible text has an `en` and a `de` version. UI labels (buttons, headings) are in [`src/data/translations.ts`](src/data/translations.ts).

- **Project screenshots:** put images in `public/projects/` and set `image: '/projects/name.webp'` on the project.
- **Links:** set `repoUrl` / `demoUrl` on a project to show Code / Live demo buttons.
- **CV download:** put the PDF at `public/cv.pdf` and set `cvFile: '/cv.pdf'` in `profile`.

## Contact form

1. Get a free access key at <https://web3forms.com> (enter the email address that should receive the messages).
2. Copy `.env.example` to `.env` and paste the key into `VITE_WEB3FORMS_KEY=`.
3. On Vercel, add the same variable under *Project Settings → Environment Variables*, then redeploy.

Without a key, the form shows a hint to use LinkedIn instead.

## Deploy to Vercel

1. Push this repository to GitHub.
2. On <https://vercel.com>, choose **Add New → Project** and import the repository. Vercel detects Vite automatically (build: `npm run build`, output: `dist`).
3. Add `VITE_WEB3FORMS_KEY` as an environment variable and deploy.

Every push to `main` redeploys the site automatically.

## Project structure

```
src/
  components/   UI sections (Navbar, Hero, About, Experience, Skills, Projects, Contact, Footer)
  context/      Theme and language state (React context + hooks)
  data/         Site content and UI translations
  hooks/        useLocalStorage, useReveal (scroll fade-in)
  lib/          Pure helpers (project filtering)
```
