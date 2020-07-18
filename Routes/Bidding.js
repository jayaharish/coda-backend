const Route = require("express").Router();
const addbid = require("../DAO/Bidding/AddBid");
const removebid = require("../DAO/Bidding/RemoveBid");
const rejectbid = require("../DAO/Bidding/RejectBid");
const VerifyAndGetToken = require("./VerifyAndGetToken");
const getAll = require("../DAO/Bidding/GetAll");

const sendEmail = require("../sendMail");

Route.post("/add", (req, res, next) => {
  const amount = req.body.amount;
  const id = req.body.id;
  const seller = req.body.seller;
  VerifyAndGetToken(req.cookies.user).then((email) => {
    addbid(email, id, amount, seller)
      .then((result) => {
        sendEmail(
          seller,
          "New bidding added",
          `user with email ${email} has bidded amount Rs.${amount}`
        );
        res.status(200).send();
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send();
      });
  });
});

Route.post("/remove", (req, res, next) => {
  const id = req.body.id;
  const buyer = req.body.buyer;
  sendEmail(
    buyer,
    "Your bid is accepted",
    "Seller has accepted your price and delivery process is started"
  );
  removebid(id)
    .then((result) => {
      res.status(200).send();
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send();
    });
});

Route.post("/reject", (req, res, next) => {
  const id = req.body.id;
  const buyer = req.body.buyer;
  sendEmail(
    buyer,
    "Your bid is rejected",
    "Seller feels your price is too low for his/her product"
  );
  rejectbid(id)
    .then((result) => {
      res.status(200).send();
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send();
    });
});

Route.get("/", (req, res, next) => {
  VerifyAndGetToken(req.cookies.user)
    .then((email) => {
      getAll(email)
        .then((result) => res.status(200).json(result))
        .catch((err) => res.status(401).send());
    })
    .catch((err) => res.status(401).send());
});

module.exports = Route;
