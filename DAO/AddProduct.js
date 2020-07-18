const MongoClient = require("mongodb").MongoClient;
require("dotenv").config();

function insertProduct(email, title, description, price, category) {
  return new Promise((resolve, reject) => {
    MongoClient.connect(
      process.env.PRODUCTION_DB,
      { useUnifiedTopology: true },
      (err, db) => {
        if (err) reject(err);
        else {
          console.log("inserting");
          db.db("olx")
            .collection("products")
            .insertOne({ email, title, description, price, category })
            .then((res) => {
              console.log(res);
              resolve(res);
            })
            .catch((err) => reject(err));
        }
      }
    );
  });
}
module.exports = insertProduct;
