import express from "express";
import path from "path";

const staticPath = path.resolve(__dirname, "../dist");

export default app => {
  app.use(express.static(staticPath));

  app.get("*", (req, res, next) => {
    if (req.url === "/graphql") return next();
    res.sendFile(path.resolve(staticPath, "index.html"));
  });
};
