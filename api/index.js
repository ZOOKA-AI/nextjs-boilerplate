// Vercel Serverless function: returns a random joke from JokeAPI
// Place this file at the root of a Vercel project or in a subdirectory when importing the repo.

module.exports = async (req, res) => {
  try {
    const allowOffensive = req.query.allowOffensive === 'true';
    const blacklist = allowOffensive ? '' : '&blacklistFlags=nsfw,religious,political,racist,sexist';
    const url = `https://v2.jokeapi.dev/joke/Any?type=single,twopart${blacklist}`;
    const r = await fetch(url);
    if (!r.ok) return res.status(502).json({ error: 'Upstream error' });
    const data = await r.json();
    res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate=120');
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
