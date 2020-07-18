const MongoClient = require("mongodb").MongoClient;
require("dotenv").config();

function getUserProducts(email) {
  return new Promise((resolve, reject) => {
    MongoClient.connect(
      process.env.PRODUCTION_DB,
      { useUnifiedTopology: true },
      (err, db) => {
        if (err) reject(err);
        else {
          db.db("olx")
            .collection("products")
            .find({ email })
            .toArray()
            .then((result) => resolve(result))
            .catch((err) => reject(err));
        }
      }
    );
  });
}
module.exports = getUserProducts;
