const express = require("express");
const path = require("path");

const staticPath = path.resolve(__dirname, "/dist");

const app = express();

app.use(express.static(staticPath));

app.get("*", (req, res, next) => {
  if (req.url === "/graphql") return next();
  res.sendFile(path.resolve(staticPath, "index.html"));
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});
