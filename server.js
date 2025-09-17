const express = require("express");
const fetch = require("node-fetch");
const app = express();
const port = 3000;

app.use(express.static(".")); // serve index.html

// API endpoint to fetch external site
app.get("/fetch", async (req, res) => {
  const url = req.query.url;
  if (!url) return res.status(400).send("No URL provided");

  try {
    const response = await fetch(url);
    const html = await response.text();
    res.send(html);
  } catch (err) {
    res.status(500).send("Error fetching URL: " + err.message);
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});