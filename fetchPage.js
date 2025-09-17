// fetchPage.js
const fetch = require("node-fetch"); // npm install node-fetch

async function webHtml(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("HTTP error " + response.status);
    return await response.text();
  } catch (err) {
    throw err;
  }
}

// Example usage:
webHtml("https://example.com").then(html => {
  console.log(html);
}).catch(err => {
  console.error(err);
});
