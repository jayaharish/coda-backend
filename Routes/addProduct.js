const Route = require("express").Router();
const insertProduct = require("../DAO/AddProduct");
const jwt = require("jsonwebtoken");
require("dotenv").config();

Route.post("/", (req, res, next) => {
  const title = req.body.title;
  const description = req.body.description;
  const price = req.body.price;
  const category = req.body.category;
  const user = req.cookies.user;
  if (!title || !description || !price) {
    res.status(401).send();
    return;
  }
  jwt.verify(user, process.env.SECRET_KEY, (err, { email }) => {
    console.log(title, description, price);
    insertProduct(email, title, description, price, category)
      .then((result) => {
        res.status(200).send(result);
      })
      .catch((err) => {
        console.log(err);
        res.status(401).send(error);
      });
  });
});
module.exports = Route;
