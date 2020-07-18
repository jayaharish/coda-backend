const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;
const uri = "mongodb://127.0.0.1:27017/";

function getAll(email) {
  return new Promise((resolve, reject) => {
    MongoClient.connect(uri, { useUnifiedTopology: true }, (err, db) => {
      if (err) reject(err);
      else {
        console.log("retrieving");
        db.db("olx")
          .collection("bidding")
          .find({ seller: email })
          .toArray()
          .then((res) => {
            console.log(res);
            resolve(res);
          })
          .catch((err) => reject(err));
      }
    });
  });
}
module.exports = getAll;
