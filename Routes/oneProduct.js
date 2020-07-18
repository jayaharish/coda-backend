const Route = require("express").Router();
const getOneProduct = require("../DAO/GetOneProduct");

Route.post("/", (req, res, next) => {
  const id = req.body.id;
  console.log(id);
  getOneProduct(id)
    .then((result) => res.status(200).json(result))
    .catch((err) => res.status(400).send(err));
});
module.exports = Route;
