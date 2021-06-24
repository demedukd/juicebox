// const express = require("express");
const appRouter = require("express").Router();

appRouter.use((req, res, next) => {
  console.log(req.originalUrl);

  next();
});
appRouter.get("/", (req, res, next) => {
  res.send({ message: "welcome to my app" });
});

appRouter.get("/", (req, res, next) => {
  res.send({ message: "welcome to my app" });
});

appRouter.post("/sayHello", (req, res, next) => {
  res.send({ message: "thanks for the data!" });
});

const apiRouter = require("./api");
server.use("/api", apiRouter);

module.exports = appRouter;
