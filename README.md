# Aarunya Counselling Center

A single-page marketing website for **Aarunya Counselling Center**, a mental health counselling practice run by **Shailaja Gondlaya, Consultant Psychologist**, based in Habsiguda, Hyderabad, India.

The site introduces the practice, lists counselling and assessment services, and provides contact details for prospective clients.

## Tech Stack

- **[React 19](https://react.dev/)** — UI library
- **[Vite 8](https://vitejs.dev/)** — build tool and dev server
- **[Tailwind CSS 4](https://tailwindcss.com/)** (via `@tailwindcss/vite`) — utility-first styling with a custom theme
- **[Oxlint](https://oxc.rs/)** — fast Rust-based linter

No backend, router, or state management library is used — the entire site is a single page with anchor-linked navigation.

## Features

- Sticky, responsive **Navbar** with a mobile hamburger menu and smooth-scroll anchor links (`#home`, `#about`, `#services`, `#contact`)
- **Hero** section introducing the practice
- **About** section for the counsellor's bio
- **Services** section split into two categories:
  - *Counselling*: Individual / Family / Group counselling, Behaviour Modification, Stress Management, Relaxation Therapy, Domestic Violence & Couple Therapy, Managing Teenage Psycho-Social Issues
  - *Assessments*: Developmental Assessment, Intelligence Assessment, Learning Disability Assessment, Behavioural Assessment
- **Contact** section with phone numbers, email, and clinic address
- **Footer** with social links
- Custom Tailwind theme tokens (brand teal palette) defined in `src/index.css`

## Project Structure

```
aarunya-counselling-center/
├── index.html
├── public/
│   └── favicon.svg
├── src/
│   ├── main.jsx           # React entry point
│   ├── App.jsx             # Page layout, assembles all sections
│   ├── index.css           # Tailwind import + custom theme tokens
│   └── components/
│       ├── Navbar.jsx
│       ├── Hero.jsx
│       ├── About.jsx
│       ├── Services.jsx
│       ├── Contact.jsx
│       └── Footer.jsx
├── vite.config.js
└── .oxlintrc.json
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended)
- npm

### Installation

```bash
npm install
```

### Available Scripts

| Command           | Description                                      |
| ----------------- | ------------------------------------------------- |
| `npm run dev`      | Start the local dev server with hot module reload |
| `npm run build`    | Build a production bundle to `dist/`              |
| `npm run preview`  | Preview the production build locally              |
| `npm run lint`     | Lint the codebase with Oxlint                     |

## Roadmap / Known Gaps

The site is functional but still has a few placeholders to fill in before it's fully production-ready:

- **About bio**: the counsellor's bio text is currently a placeholder and needs real content
- **Contact form**: is frontend-only right now — it isn't wired up to an email delivery service yet (e.g. Formspree or EmailJS)
- **Social links**: the footer's Instagram/Facebook/LinkedIn icons currently point to placeholder (`#`) links
- **Deployment**: no hosting/deployment config exists yet (the production build in `dist/` can be deployed to any static host, e.g. Vercel, Netlify, or GitHub Pages)

## License

Proprietary — all rights reserved. This site is built for the exclusive use of Aarunya Counselling Center.
