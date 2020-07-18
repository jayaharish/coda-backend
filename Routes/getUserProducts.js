const Route = require("express").Router();
const jwt = require("jsonwebtoken");
require("dotenv").config();
const getUserProducts = require("../DAO/GetAllUserProducts");

Route.get("/", (req, res, next) => {
  const user = req.cookies.user;
  if (!user) {
    res.status(401).send();
    return;
  }
  jwt.verify(user, process.env.SECRET_KEY, (err, result) => {
    if (err) res.status(401).send();
    else {
      getUserProducts(result.email)
        .then((result) => res.status(200).json(result))
        .catch((err) => res.status(500).send(err));
    }
  });
});
module.exports = Route;
