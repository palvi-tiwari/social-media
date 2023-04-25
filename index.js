const express = require("express");
const cors = require("cors");
const routes = require("./routes/Routes");
const app = express();
const http = require("http").createServer(app);

//Connect MongoDB here
require("./database/DatabaseConnection");

app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

//Setup CORs error
app.use(cors());

//All routes here
app.use("/api/v1", routes);

//Port listen in 8000
app.listen(8000);

//socket io

const io = require("socket.io")(http);
io.on("connection", (socket) => {
  console.log("socket io connected....");
});
