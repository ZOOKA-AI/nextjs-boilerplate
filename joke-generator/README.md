# Joke Generator (monorepo)

This folder contains three small projects that use JokeAPI (https://v2.jokeapi.dev):

- web: Static page (index.html) that fetches jokes directly from JokeAPI.
- api: Vercel serverless function that proxies JokeAPI (useful to avoid CORS or add caching).
- cli: Simple Python CLI script to get jokes locally.

Deployment on Vercel (recommended steps):

1) In your Vercel dashboard, create three new projects, each pointing to the same Git repository but with different "Root Directory":
   - Project 1 (Web): Root Directory = joke-generator/web
     - Framework: Other
     - Build Command: (leave blank)
     - Output Directory: .
     - This will deploy the static index.html.

   - Project 2 (API): Root Directory = joke-generator/api
     - Framework: Other (Node.js serverless)
     - Vercel will use the file `index.js` as a serverless function; the endpoint will be: https://<your-api-project>.vercel.app/api
     - The function responds at: /api (root function). To call it: https://<your-api-project>.vercel.app

   - Project 3 (CLI): Not a web app. Keep the CLI in the repo for users to download. If you want a web-accessible endpoint that runs the same code, consider wrapping it into a serverless function.

2) After creating the projects, you can update the web page to call the API proxy instead of JokeAPI directly by editing `joke-generator/web/index.html` to fetch from your deployed API endpoint.

Local testing:

- Web: open joke-generator/web/index.html in a browser.
- API: (locally) run a small server that exports the function, or test with `vercel dev` after installing Vercel CLI.
- CLI: pip install requests; python joke-generator/cli/joke.py

If you want, I can:
- Update the web page to point to your deployed API URL once you create the Vercel projects.
- Create PRs or push to other repos per your preference.
