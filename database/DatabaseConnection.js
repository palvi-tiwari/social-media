const mongoose = require("mongoose");
mongoose
  //Server connection URL
  .connect("mongodb://localhost:27017/social-media-app", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    dbName: "social-media-app",
  })
  .then(() => {
    console.log("connection successfully.....");
  })
  .catch((err) => {
    console.log("connection Failed.....", err);
  });
