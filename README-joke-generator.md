# Joke Generator (monorepo)

This repository now contains a small random joke generator in three forms:

- web/ : Static HTML page that fetches jokes from JokeAPI (https://v2.jokeapi.dev).
- api/ : Vercel Serverless Function that proxies JokeAPI (useful to avoid CORS or add caching).
- cli/ : Python CLI script to print jokes locally.

I added these files in branch `add-joke-generator`.

How to deploy to Vercel

Option A — Deploy each project separately (recommended):
1) Go to https://vercel.com/import and import this GitHub repository (ZOOKA-AI/nextjs-boilerplate).
2) For the frontend project choose "Root Directory" = `web` and deploy. This will host `web/index.html` as a static site.
3) Import the repo a second time for the API project and set "Root Directory" = `api`. Vercel will deploy the serverless function `api/index.js` and expose it under the deployment URL (e.g. `https://api-yourproject.vercel.app/api`).

Notes:
- The frontend currently calls the JokeAPI directly (`https://v2.jokeapi.dev`). If you prefer the frontend to call your API proxy instead, update `web/index.html` fetch URL to point to your deployed API endpoint and redeploy.
- The Python CLI is not a web service; keep it in `cli/` and run locally (`pip install requests` then `python cli/joke.py`).

What I did
- Created a new branch `add-joke-generator` and added the web, api, and cli files.

Next steps I can do for you
- Merge these changes into your repository's default branch (`main`) as a PR.
- Set up two Vercel Projects (web + api) and connect them automatically (requires access to your Vercel account).
- Update the frontend to call the API proxy by default and wire environment variables in Vercel.

Tell me which next step you want me to do (create PR, deploy to Vercel for you, or anything else).