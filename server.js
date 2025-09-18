import express from "express";
import fetch from "node-fetch"; // install with: npm install express node-fetch

const app = express();
const PORT = 3000;

app.get("/fetch", async (req, res) => {
  const url = req.query.url;

  if (!url) {
    return res.status(400).send("Missing url parameter");
  }

  try {
    const response = await fetch(url);
    const html = await response.text();
    res.send(html);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching " + url);
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
