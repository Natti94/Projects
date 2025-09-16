# Projects App

>Portfolio with a local Express helper for development and Netlify Functions in production. Shows projects, recent commits, and serves asset links via environment variables.

## Repo layout

This repository contains the app inside the `projects-app/` folder:

```
projects-app/
	netlify/
		functions/
			getAssets.js   # Netlify Function: redirects to asset URLs from env
			getCommits.js  # Netlify Function: fetch recent commits from GitHub
	public/
		_redirects       # SPA routing + API rewrites for Netlify
	src/
		App.jsx, main.jsx, index.css, server.js (local dev Express API)
	package.json, vite.config.js
```

## Features

- Responsive React UI (Introduction, Projects, Activity)
- Commit Activity (message, author, repo, relative time)
- Asset links served via a Netlify Function using env variables
- Local Express API for dev; Netlify Functions in production

## Local development

In `projects-app/`:

```sh
npm install
npm run dev
```

- App will be at http://localhost:5173
- Vite proxies `/api/*` to the local Express server (see `vite.config.js`).
- Locally, only `/api/commits` is handled by Express (`src/server.js`).

- To test Netlify Functions locally (e.g., `/api/assets`), use Netlify Dev:
	- Install: `npm i -g netlify-cli`
	- Run from `projects-app/`: `netlify dev`

## Environment variables

Create `projects-app/.env` with the variables your assets use, for example:

```
VITE_CLOUDINARY_MERN_IMAGE=
VITE_CLOUDINARY_TIBIA_OPTIMIZER_CARD=

VITE_CLOUDINARY_TIBIA_OPTIMIZER_LINK=
VITE_CLOUDINARY_CHAT_CARD=
VITE_CLOUDINARY_CHAT_LINK=

VITE_CLOUDINARY_QUIZ_CARD=
VITE_CLOUDINARY_QUIZ_LINK=
VITE_CLOUDINARY_WEATHER_CARD=

VITE_CLOUDINARY_WEATHER_LINK=
VITE_CLOUDINARY_CV_ICON=
VITE_CLOUDINARY_CV_LINK=

VITE_CLOUDINARY_LINKEDIN_ICON=
VITE_CLOUDINARY_LINKEDIN_LINK=
VITE_CLOUDINARY_MAIL_ICON=

VITE_CLOUDINARY_MAIL_LINK=
VITE_CLOUDINARY_GITHUB_ICON=
VITE_CLOUDINARY_GITHUB_LINK=

VITE_CLOUDINARY_DISCORD_ICON=
VITE_CLOUDINARY_DISCORD_LINK=
```

## API endpoints

- Dev (local Express):
	- `GET /api/commits` — returns recent commits from local git history
- Production (Netlify Functions):

	- `GET /api/commits` → `/.netlify/functions/getCommits`
	- `GET /api/assets?asset=<name>` → `/.netlify/functions/getAssets` (redirects to the URL from env)

`public/_redirects` contains the rules used by Netlify:

```
/api/commits    /.netlify/functions/getCommits   200
/api/assets     /.netlify/functions/getAssets    200

/*              /index.html                      200
```

Notes for `getCommits.js`:

- Uses GitHub’s public API. Update `owner`/`repo` as needed.
- For private repos, set `GITHUB_TOKEN` in Netlify env and add the Authorization header.
- Functions run on Node 18+ where `fetch` is global.

## Build and deploy (Netlify)

```sh
npm run build
```

- Publish directory: `dist`
- Functions directory: `netlify/functions`
- Ensure `_redirects` is present in `dist/` after build (Vite will copy from `public/`).

- Netlify Functions runtime: Node 18+

## Troubleshooting

- If `/api/assets` works in production but 404s locally, run with Netlify Dev (`netlify dev`) to proxy functions.
- If GitHub API returns 403/404, verify repo path and auth (token for private repos).

## License

MIT
	- Make sure your repo owner and name are correct in `getCommits.js`.
	- If your repo is private, set a `GITHUB_TOKEN` in Netlify environment variables.
	- For public repos, no token is needed and the Authorization header should be removed.
	- Ensure your Netlify function runtime is Node 18+ for global `fetch` support.

## License

MIT
