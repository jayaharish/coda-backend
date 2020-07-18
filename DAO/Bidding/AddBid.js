const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;
require("dotenv").config();

function insertBid(email, id, amount, seller) {
  return new Promise((resolve, reject) => {
    MongoClient.connect(
      process.env.PRODUCTION_DB,
      { useUnifiedTopology: true },
      (err, db) => {
        if (err) reject(err);
        else {
          console.log("inserting");
          db.db("olx")
            .collection("bidding")
            .insertOne({
              email,
              ref: new ObjectId(id),
              amount: amount,
              seller: seller,
            })
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
module.exports = insertBid;
