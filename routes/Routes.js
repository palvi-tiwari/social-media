const AllUser = require("../components/AllUser");
const SignUp = require("../components/SignUp");
const login = require("../components/login");
const VerifyToken = require("./VerifyToken");

const Router = require("express").Router();

Router.get("/", (req, res) => {
  return res.status(200).json({
    message: "socail media server started",
  });
});

Router.post("/signup", SignUp);
Router.post("/login", login);
Router.get("/all-user", VerifyToken, AllUser);

module.exports = Router;
