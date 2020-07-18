const route = require("express").Router();
const checkUser = require("../DAO/Signin");
const generateToken = require("../generateToken");

route.post("/", async (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  console.log(email, password);
  console.log(req.body);
  checkUser(email, password)
    .then((result) => {
      if (result) {
        const token = generateToken({ email });
        res.cookie("user", token, {
          maxAge: 30 * 60 * 1000,
          httpOnly: true,
        });
        res.status(200).send();
      } else res.status(401).send();
    })
    .catch((err) => {
      console.log(err);
      res.status(401).send();
    });
});

module.exports = route;
