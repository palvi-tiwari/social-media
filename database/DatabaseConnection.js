const mongoose = require("mongoose");
mongoose
  //Server connection URL
  .connect("mongodb://localhost:27017", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "social-media-app",
  })
  .then(() => {
    console.log("connection successfully.....");
  })
  .catch((err) => {
    console.log("Oops connection Failed.....", err);
  });
