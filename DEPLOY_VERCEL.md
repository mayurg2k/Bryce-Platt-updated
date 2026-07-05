# Deploying to Vercel

The frontend is a Vite + React app. Follow these steps to deploy to Vercel.

## Project settings on Vercel

When you import the repository, use these settings:

| Setting | Value |
| --- | --- |
| **Root Directory** | `frontend` |
| **Framework Preset** | Vite |
| **Build Command** | `yarn build` (auto-detected) |
| **Output Directory** | `dist` (auto-detected) |
| **Install Command** | `yarn install` (auto-detected) |
| **Node.js Version** | 18.x or 20.x |

`frontend/vercel.json` also configures:

- SPA rewrites so client-side routes (`/insights`, `/about`, `/insights/:id`, etc.) work when refreshed.
- Long-lived immutable caching for hashed asset files and images.

## Environment variables

This is a fully client-side (mocked-data) build. No environment variables are required for Vercel.
If you later add a backend, expose it as a Vite variable:

```
VITE_API_URL=https://your-api.example.com
```

and read it in code with `import.meta.env.VITE_API_URL`.

## Local commands

```bash
cd frontend
yarn install
yarn start   # dev server on http://localhost:3000
yarn build   # production build -> frontend/dist
yarn preview # serve the production build locally
```
