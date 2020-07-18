const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;
require("dotenv").config();

function removeBid(id) {
  return new Promise((resolve, reject) => {
    MongoClient.connect(
      process.env.PRODUCTION_DB,
      { useUnifiedTopology: true },
      (err, db) => {
        if (err) reject(err);
        else {
          console.log("removing");
          db.db("olx")
            .collection("bidding")
            .deleteMany({ ref: new ObjectId(id) })
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
module.exports = removeBid;
