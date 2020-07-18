const extractBalance = require("../../DAO/Balance/GetBalance");
const Route = require("express").Router();
const verifyAndGetToken = require("./VerifyAndGetToken");

Route.get("/", (req, res, next) => {
  verifyAndGetToken(req.cookies.user)
    .then((result) => {
      extractBalance()
        .then((result) => res.status(200).json(result))
        .catch((err) => res.status(400).send(err));
    })
    .catch((err) => res.status(401).send(err));
});

module.exports = Route;
