const express = require("express");
const cors = require("cors");
const routes = require("./routes/Routes");
const app = express();
const { createServer } = require("http");
const { Server } = require("socket.io");
const htttpServer = createServer();
const path = require("path");

//Connect MongoDB here

require("./database/DatabaseConnection");

app.use(express.json());

//Setup CORs error
app.use(cors());

//socket io

const SocketServer = (htttpServer) => {
  const io = new Server(htttpServer);
  io.on("connection", function (socket) {
    console.log("Connected");
    socket.on("Hello", (msg) => {
      io.emit("Hello", msg);
    });
  });
  return io;
};
SocketServer(htttpServer);
htttpServer.listen("7000");

//All routes here
app.use("/api/v1", routes);

//Upload file

app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static(path.join(__dirname, "./uploadFiles")));

//Port listen in 8000
app.listen(8000);
