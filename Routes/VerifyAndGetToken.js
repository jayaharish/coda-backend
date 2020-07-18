const jwt = require("jsonwebtoken");
require("dotenv").config();

function VerifyAndGetToken(user) {
  return new Promise((resolve, reject) => {
    jwt.verify(user, process.env.SECRET_KEY, (err, user) => {
      if (err) reject(err);
      resolve(user.email);
    });
  });
}
module.exports = VerifyAndGetToken;
