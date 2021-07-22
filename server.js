require("dotenv").config();
const express = require("express");
const app = express();
const http = require("http");
const port = process.env.PORT || 5000;
const server = http.createServer(app);

app.get("*", (req, res) => {
  res.send("hello from simple server :)");
});

server.listen(port, () =>
  console.log("> Server is up and running on port : " + port)
);
