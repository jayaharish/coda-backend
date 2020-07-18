const addBalance = require("../../DAO/Balance/AddBalance");
const Route = require("express").Router();

Route.post("/add", (req, res, next) => {
  const amount = req.body.amount;
  verifyAndGetToken(req.cookies.user)
    .then((email) => {
      addBalance(email, amount)
        .then((result) => res.status(200).json(result))
        .catch((err) => res.status(400).send(err));
    })
    .catch((err) => res.status(401).send(err));
});

module.exports = Route;
