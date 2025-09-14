
# Projects App

> A full-stack React + Express + Vite application for showcasing projects, commit history, and asset management. Deployed to Netlify with serverless functions.

## Features

- Responsive React UI with Introduction, Projects, and Activity panels
- Project cards: smooth hover, image stays bright, and readable title/description boxes on hover (no green card border)
- Navigation icons turn white on hover for contrast
- Commit Activity: shows message, author, repository name, and relative time
- Asset management via environment variables, served securely by a Netlify Function
- Local Express API for dev; Netlify Functions in production

## Project Structure

```
├── netlify/
│   └── functions/
│       ├── getAssets.js       # Assets link redirector
│       └── getCommits.js      # GitHub commits fetcher
├── public/
│   └── _redirects             # SPA routing + API rewrites
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   ├── server.js              # Local-only Express proxy
│   └── components/
│       ├── nav.jsx
│       ├── activity.jsx
│       ├── projects.jsx
│       └── introduction.jsx
├── package.json
├── vite.config.js
└── README.md
```

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm

### Local Development

```sh
npm install
npm run dev
```

Open http://localhost:5173

### Environment Variables

Create `.env` in the project root with keys your app uses, for example:

```
VITE_CLOUDINARY_MERN_IMAGE=
VITE_CLOUDINARY_TIBIA_OPTIMIZER_BACKGROUND=
VITE_CLOUDINARY_CHAT_BACKGROUND=
VITE_CLOUDINARY_TIBIA_OPTIMIZER_LINK=
VITE_CLOUDINARY_CHAT_LINK=

VITE_CLOUDINARY_CV_LINK=
VITE_CLOUDINARY_LINKEDIN_LINK=
VITE_CLOUDINARY_MAIL_LINK=
VITE_CLOUDINARY_GITHUB_LINK=
VITE_CLOUDINARY_DISCORD_LINK=

VITE_CLOUDINARY_CV_ICON=
VITE_CLOUDINARY_LINKEDIN_ICON=
VITE_CLOUDINARY_MAIL_ICON=
VITE_CLOUDINARY_GITHUB_ICON=
VITE_CLOUDINARY_DISCORD_ICON=
```

### Build

```sh
npm run build
```

Artifacts in `dist/`.

### Deploy (Netlify)

- Publish directory: `dist`
- Functions directory: `netlify/functions`
- Ensure `public/_redirects` is present in `dist/_redirects`
- Functions runtime: Node 18+

### API Endpoints

- `/api/commits` – recent commits (Netlify Function in production)
- `/api/assets?asset=<name>` – redirects to env-defined asset URL

## License

MIT — see `LICENSE` for details.
