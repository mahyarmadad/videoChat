require("dotenv").config();
const express = require("express");
const app = express();

const port = process.env.PORT || 5000;
const cors = require("cors");
const server = require("http").createServer(app);
const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:3000",
  },
});
const colors = require("colors");

app.use(cors());

let users = [];
io.on("connection", (socket) => {
  console.log(`User Connected to IO : >> ${socket.id}`.underline.brightBlue);
  users.push(socket.id);

  socket.on("pre-offer", (data) => {
    const { type, code } = data;
    const connectedPeer = users.find((user) => user == code);
    console.log(`connectedPeer`, connectedPeer);
    if (connectedPeer) {
      const data = { callerId: socket.id, type };
      io.to(code).emit("pre-offer", data);
    }
  });

  socket.on("disconnect", () => {
    console.log(`User disconnect`.brightCyan);
    const newUser = users.filter((user) => user !== socket.id);
    users = newUser;
  });
});

app.get("*", (req, res) => {
  res.send("hello from simple server :)");
});

server.listen(port, () =>
  console.log("> Server is up and running on port : " + port)
);
