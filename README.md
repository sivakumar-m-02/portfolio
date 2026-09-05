# Sivakumar M — Portfolio

A modern, animated, fully responsive developer portfolio built from Sivakumar's resume.

## Stack
- React 18 + Vite
- Tailwind CSS (custom design tokens in `tailwind.config.js`)
- Framer Motion for animation
- lucide-react for icons

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build     # production build -> dist/
npm run preview   # preview the production build
```

## Editing content

All resume content (name, skills, projects, experience, education, etc.) lives in
one place: `src/data/resumeData.js`. Edit that file to update the site — no need
to touch the components.

## Structure

```
src/
  components/   Section + UI components (Hero, Skills, Projects, PhoneFrame, ...)
  data/         resumeData.js — single source of truth for all content
  hooks/        useTheme (dark/light mode), useTypewriter (hero rotating role)
  App.jsx       Assembles all sections
  index.css     Design system utilities (glass, grain overlay, focus states)
public/
  Sivakumar_M_Resume.pdf   Linked from the "Download Resume" buttons
```

## Design notes
- Dark, glass-morphism UI by default with a light mode toggle (persisted to localStorage).
- The recurring "phone frame" motif in the hero and project cards reflects the
  React Native / mobile-development focus of the resume.
- Respects `prefers-reduced-motion`.
- Replace the placeholder GitHub/LinkedIn URLs in `src/data/resumeData.js` with
  real profile links before publishing.

## Deploying
The `dist/` folder from `npm run build` is static and can be deployed to
Vercel, Netlify, GitHub Pages, or any static host.
