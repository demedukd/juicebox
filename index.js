const PORT = 3000;
const express = require("express");
const server = express();

const bodyParser = require("body-parser");

server.use(bodyParser.json());

server.use((req, res, next) => {
  console.log("Body is now", req.body);
  next();
});

const appRouter = require("./routes");
server.use("/app", appRouter);

server.listen(PORT, () => {
  console.log("The server is up on port", PORT);
});
server.use((req, res, next) => {
  console.log("<____Body Logger START____>");
  console.log(req.body);
  console.log("<_____Body Logger END_____>");

  next();
});
