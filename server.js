const express = require("express");
const fetch = require("node-fetch");
const path = require("path");

const app = express();
const PORT = 3000;

// Serve static files (index.html, etc.)
app.use(express.static(path.join(__dirname)));

// API endpoint: fetch external HTML
app.get("/fetch", async (req, res) => {
  const url = req.query.url;
  if (!url) return res.status(400).send("Missing URL");

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Bad response");

    let html = await response.text();

    // Replace <title>...</title> with about:blank
    html = html.replace(/<title[\s\S]*?<\/title>/i, "<title>about:blank</title>");

    res.send(html);
  } catch (err) {
    res.status(500).send("Error fetching site: " + err.message);
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});