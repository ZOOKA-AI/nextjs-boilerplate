// Vercel Serverless function (Node). Deploy the "api" folder as a Vercel project (or set this file under /api in a Vercel project).
module.exports = async (req, res) => {
  try {
    const allowOffensive = (req.query.allowOffensive === 'true') || (req.headers['x-allow-offensive'] === 'true');
    const blacklist = allowOffensive ? '' : '&blacklistFlags=nsfw,religious,political,racist,sexist';
    const upstream = `https://v2.jokeapi.dev/joke/Any?type=single,twopart${blacklist}`;
    const r = await fetch(upstream);
    if (!r.ok) return res.status(502).json({ error: 'Upstream error' });
    const data = await r.json();
    res.setHeader('Content-Type', 'application/json');
    res.status(200).send(JSON.stringify(data));
  } catch (err) {
    res.status(500).json({ error: String(err) });
  }
};
