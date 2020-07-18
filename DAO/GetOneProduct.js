const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;
const uri = "mongodb://127.0.0.1:27017/";

function getProduct(id) {
  return new Promise((resolve, reject) => {
    MongoClient.connect(uri, { useUnifiedTopology: true }, (err, db) => {
      if (err) reject(err);
      else {
        db.db("olx")
          .collection("products")
          .findOne({ _id: new ObjectId(id) })
          .then((result) => resolve(result))
          .catch((err) => reject(err));
      }
    });
  });
}
module.exports = getProduct;
