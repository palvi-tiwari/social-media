const AllUser = require("../components/AllUser");
const SignUp = require("../components/SignUp");

const Router = require("express").Router();

Router.get("/", (req, res) => {
  return res.status(200).json({
    message: "socail media server started",
  });
});

Router.post("/signup", SignUp);
Router.post("/all-user", AllUser);

module.exports = Router;
