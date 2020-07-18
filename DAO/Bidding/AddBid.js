const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;
const uri = "mongodb://127.0.0.1:27017/";

function insertBid(email, id, amount, seller) {
  return new Promise((resolve, reject) => {
    MongoClient.connect(uri, { useUnifiedTopology: true }, (err, db) => {
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
    });
  });
}
module.exports = insertBid;
