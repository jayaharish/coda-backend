const extractBalance = require("../DAO/Balance/GetBalance");
const reduceBalance = require("../DAO/Balance/ReduceBalance");
const addBalance = require("../DAO/Balance/AddBalance");
const Route = require("express").Router();
const verifyAndGetToken = require("./VerifyAndGetToken");

Route.get("/", (req, res, next) => {
  verifyAndGetToken(req.cookies.user)
    .then((result) => {
      extractBalance(result)
        .then((result) => res.status(200).json(result))
        .catch((err) => res.status(400).send(err));
    })
    .catch((err) => res.status(401).send(err));
});

Route.post("/reduce", (req, res, next) => {
  const amount = req.body.amount;
  const email = req.body.email;
  verifyAndGetToken(req.cookies.user)
    .then((result) => {
      reduceBalance(email, amount)
        .then((result) => {
          console.log("deducted amount", amount);
          res.status(200).json(result);
        })
        .catch((err) => res.status(400).send(err));
    })
    .catch((err) => res.status(401).send(err));
});

Route.post("/add", (req, res, next) => {
  const amount = req.body.amount;
  verifyAndGetToken(req.cookies.user)
    .then((email) => {
      addBalance(email, amount)
        .then((result) => {
          console.log("added amount ", amount, "to ", email);
          res.status(200).json(result);
        })
        .catch((err) => res.status(400).send(err));
    })
    .catch((err) => res.status(401).send(err));
});

module.exports = Route;
