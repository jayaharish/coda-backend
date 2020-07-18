const MongoClient = require("mongodb").MongoClient;
require("dotenv").config();

function getBalance(email) {
  return new Promise((resolve, reject) => {
    MongoClient.connect(
      process.env.PRODUCTION_DB,
      { useUnifiedTopology: true },
      (err, db) => {
        if (err) reject(err);
        else {
          console.log("fetching");
          db.db("olx")
            .collection("users")
            .findOne({ email: email })
            .then((res) => {
              console.log(res);
              resolve({ balance: res.balance });
            })
            .catch((err) => reject(err));
        }
      }
    );
  });
}
module.exports = getBalance;
