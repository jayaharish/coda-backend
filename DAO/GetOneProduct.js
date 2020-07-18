const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;
require("dotenv").config();

function getProduct(id) {
  return new Promise((resolve, reject) => {
    MongoClient.connect(
      process.env.PRODUCTION_DB,
      { useUnifiedTopology: true },
      (err, db) => {
        if (err) reject(err);
        else {
          db.db("olx")
            .collection("products")
            .findOne({ _id: new ObjectId(id) })
            .then((result) => resolve(result))
            .catch((err) => reject(err));
        }
      }
    );
  });
}
module.exports = getProduct;
