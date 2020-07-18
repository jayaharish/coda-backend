const jwt = require("jsonwebtoken");
require("dotenv").config();
function generateToken(payload) {
  return jwt.sign(payload, process.env.SECRET_KEY);
}
module.exports = generateToken;
