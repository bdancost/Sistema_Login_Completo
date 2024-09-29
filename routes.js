const express = require("express");
const routes = express.Router();

const Logar = require("./src/controllers/logar.js");

routes.post("/", Logar.Login);
routes.post("/register", Logar.Register);

module.exports = routes;
