const reduceBalance = require("../../DAO/Balance/GetBalance");
const Route = require("express").Router();
const verifyAndGetToken = require("./VerifyAndGetToken");

Route.post("/reduce", (req, res, next) => {
  const amount = req.body.amount;
  const email = req.body.email;
  verifyAndGetToken(req.cookies.user)
    .then((result) => {
      reduceBalance(email, amount)
        .then((result) => res.status(200).json(result))
        .catch((err) => res.status(400).send(err));
    })
    .catch((err) => res.status(401).send(err));
});

module.exports = Route;
