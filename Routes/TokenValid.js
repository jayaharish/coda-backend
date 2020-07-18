const Route = require("express").Router();
require("dotenv").config();
const jwt = require("jsonwebtoken");

Route.get("/", (req, res, next) => {
  const token = req.cookies.user;
  if (token == null) res.status(401).send();
  else {
    const payload = jwt.verify(
      token,
      process.env.SECRET_KEY,
      (err, payload) => {
        if (err) res.status(401).send();
        else res.status(200).send(payload);
      }
    );
  }
});
module.exports = Route;
