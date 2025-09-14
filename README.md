
# Projects App

>A full-stack React + Express + Vite application for showcasing projects, commit history, and asset management, deployed on Netlify with serverless functions.

## Features

- **Modern React UI**: Responsive, themed interface with navigation, project panels, and commit history.
- **Commit History Panel**: Displays recent git commits from the backend.
- **Asset Management**: All asset URLs (images, links, icons) are managed via environment variables and served through a Netlify serverless function for secure, dynamic access.
- **Express API**: Backend API for commit history, proxied in development via Vite.
- **Netlify Functions**: Production API endpoints and asset redirects handled by Netlify serverless functions.
- **SPA Routing**: Client-side routing with React Router and Netlify `_redirects` for seamless navigation.
- **Environment Variable Support**: Uses `.env` for local development and Netlify environment variables for production.

## Project Structure

```
├── netlify/
│   └── functions/
│       ├── getAssets.js       # Netlify function for asset redirects
│       └── getCommits.js      # Netlify function for commit history
├── public/
│   └── _redirects             # Netlify redirects for SPA and API
├── src/
│   ├── App.jsx                # Main React app
│   ├── main.jsx               # Entry point
│   ├── index.css              # Global styles
├── package.json               # Scripts and dependencies
├── vite.config.js             # Vite config with API proxy
└── README.md                  # Project documentation
```

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm

### Local Development

1. **Clone the repository:**
	```sh
	git clone <your-repo-url>
	cd projects-app
	```

2. **Install dependencies:**
	```sh
	npm install
	```

3. **Set up environment variables:**
4. **Start the development servers:**
	```sh
	npm run dev
	```
	- This runs both the Vite frontend and Express backend (with API proxying). The Express backend is only used locally; in production, Netlify functions handle API routes.

5. **View the app:**
	- Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```sh
npm run build
```
- Output is in the `dist/` folder.
- Ensure `public/_redirects` is copied to `dist/_redirects` for Netlify deployment.

### Deploying to Netlify

1. **Connect your repo to Netlify.**
2. **Set environment variables** in the Netlify dashboard (same as in `.env`).
3. **Set build command:**
	```sh
4. **Set publish directory:**
	```
	dist
	```
5. **Functions directory:**
	```
	netlify/functions
	```
6. **Ensure `_redirects` is present in `dist/` after build.**
7. **Node version for Netlify Functions:**
	- This project uses the global `fetch` API in Netlify functions (Node 18+). No need for `node-fetch`.
	- If you get errors about `fetch` not being defined, set your Netlify function runtime to Node 18+ (see Netlify docs or add a `netlify.toml` with `[functions] node_version = "18"`).

## Environment Variables

All asset URLs and external links are managed via environment variables. Example:

```
VITE_CLOUDINARY_PROFILE_ICON=...
VITE_CLOUDINARY_CODE_EFFECT_LINK=...
VITE_CLOUDINARY_MERN_IMAGE=...
# ...etc
```

These are used by both the frontend and the Netlify function for secure, dynamic asset access.

## API Endpoints

- **/api/commits** (local Express, or Netlify function in production): Returns recent git commit history. Uses the global `fetch` API in production (Node 18+).
## Redirects and Routing

- `/api/assets` routes to the Netlify function in production.
- All other routes fallback to `index.html` for SPA support.

Example:
```
/api/commits    /.netlify/functions/getCommits   200
/api/assets     /.netlify/functions/getAssets    200

- `npm run build` – Build the frontend for production
- `npm run lint` – Lint the codebase
- `npm run preview` – Preview the production build locally

## Troubleshooting


# Projects App

- **GitHub API 404 or errors in production:**

## Features

- Responsive React UI with Introduction, Projects, and Activity panels
- Project cards: smooth hover, image stays bright, and readable title/description boxes on hover (no green card border)
- Navigation icons turn white on hover for contrast
- Commit Activity: shows message, author, repository name, and relative time
- Asset management via environment variables, served securely by a Netlify Function
- Local Express API for dev; Netlify Functions in production

## Repository layout

This repo contains the app inside the `projects-app/` folder:

```
projects-app/
	netlify/functions/        # Netlify Functions: getAssets, getCommits
	public/_redirects         # SPA routing + API rewrites
	src/                      # React app (components, styles)
	package.json, vite.config.js, README.md
```

## Quick start

1) Clone, then enter the app folder

```sh
git clone <your-repo-url>
cd Projects/projects-app
```

2) Install and run

```sh
npm install
npm run dev
```

App: http://localhost:5173

## Environment variables (examples)

Create `.env` in `projects-app/` with the variables your assets use:

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

## Build and deploy (Netlify)

```sh
npm run build
```

- Publish dir: `dist`
- Functions dir: `netlify/functions`
- Ensure `public/_redirects` gets copied to `dist/_redirects`
- Netlify Functions runtime: Node 18+

## API routes

- `/api/commits` → get recent commits (Netlify Function in prod)
- `/api/assets?asset=<name>` → redirects to the asset URL from env

## License

MIT
	- Make sure your repo owner and name are correct in `getCommits.js`.
	- If your repo is private, set a `GITHUB_TOKEN` in Netlify environment variables.
	- For public repos, no token is needed and the Authorization header should be removed.
	- Ensure your Netlify function runtime is Node 18+ for global `fetch` support.

## License

MIT
