const Route = require("express").Router();
const getProducts = require("../DAO/GetAllProducts");

Route.get("/", (req, res, next) => {
  getProducts()
    .then((result) => res.status(200).json(result))
    .catch((err) => res.status(400).send(err));
});
module.exports = Route;
