# Project Overview

This is a portfolio website built with React and Vite. It uses React Router for navigation and includes several other dependencies for UI components and functionality.

## Building and Running

*   **Development:** `npm run dev`
*   **Build:** `npm run build`
*   **Preview:** `npm run preview`

## Development Conventions

The project uses ESLint for code linting. The configuration is in `eslint.config.js`.

---

## Data and Dynamic Content

* All project details (title, description, slug, image, tech stack, etc.)  
  are stored in a data file — typically `src/data/projects.js` or `src/data/projects.json`.
* The `/projects` page lists all projects by mapping over that data.
* The `/projects/:slug` route uses a single `Project.jsx` component that loads content based on the slug.

