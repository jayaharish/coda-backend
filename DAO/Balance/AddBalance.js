const MongoClient = require("mongodb").MongoClient;
require("dotenv").config();

function addBalance(email, amount) {
  return new Promise((resolve, reject) => {
    MongoClient.connect(
      process.env.PRODUCTION_DB,
      { useUnifiedTopology: true },
      (err, db) => {
        if (err) reject(err);
        else {
          console.log("adding");
          db.db("olx")
            .collection("users")
            .updateOne(
              { email: email },
              { $inc: { balance: parseInt(amount) } }
            )
            .then((res) => {
              console.log(res);
              resolve({ balance: res.balance });
            })
            .catch((err) => {
              console.log("error occured", err);
              reject(err);
            });
        }
      }
    );
  });
}
module.exports = addBalance;
