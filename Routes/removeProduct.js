const Route = require("express").Router();
const removeProduct = require("../DAO/RemoveProduct");

Route.post("/", (req, res, next) => {
  const id = req.body.id;
  console.log(id);
  removeProduct(id)
    .then((result) => res.status(200).json(result))
    .catch((err) => res.status(400).send(err));
});
module.exports = Route;
