const MongoClient = require("mongodb").MongoClient;
const uri = "mongodb://127.0.0.1:27017/";

function getProducts() {
  return new Promise((resolve, reject) => {
    MongoClient.connect(uri, { useUnifiedTopology: true }, (err, db) => {
      if (err) reject(err);
      else {
        db.db("olx")
          .collection("products")
          .find({})
          .toArray()
          .then((result) => resolve(result))
          .catch((err) => reject(err));
      }
    });
  });
}
module.exports = getProducts;
