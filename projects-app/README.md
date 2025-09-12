
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
│   ├── server.js              # Express backend (local dev)
│   └── components/
│       ├── nav.jsx            # Navigation bar
│       ├── activity.jsx       # Commit history/activity feed
│       ├── projects.jsx       # Projects section
│       └── introduction.jsx   # Introduction/profile/skills section
├── .env                       # Local environment variables
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
	- Copy `.env.example` to `.env` (or create `.env`) and fill in all `VITE_CLOUDINARY_*` and other required variables.

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
	npm run build
	```
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
- **/api/assets?asset=profile_icon**: Redirects to the asset URL defined in environment variables.

## Redirects and Routing

The `public/_redirects` file ensures:

- `/api/commits` routes to the Netlify function in production.
- `/api/assets` routes to the Netlify function in production.
- All other routes fallback to `index.html` for SPA support.

Example:
```
/api/commits    /.netlify/functions/getCommits   200
/api/assets     /.netlify/functions/getAssets    200
/*              /index.html                     200
```

## Scripts

- `npm run dev` – Start Vite and Express for local development
- `npm run build` – Build the frontend for production
- `npm run lint` – Lint the codebase
- `npm run preview` – Preview the production build locally

## Troubleshooting

- **GitHub API 404 or errors in production:**
	- Make sure your repo owner and name are correct in `getCommits.js`.
	- If your repo is private, set a `GITHUB_TOKEN` in Netlify environment variables.
	- For public repos, no token is needed and the Authorization header should be removed.
	- Ensure your Netlify function runtime is Node 18+ for global `fetch` support.

## License

MIT
