const MongoClient = require("mongodb").MongoClient;
require("dotenv").config();

function reduceBalance(email, amount) {
  return new Promise((resolve, reject) => {
    MongoClient.connect(
      process.env.PRODUCTION_DB,
      { useUnifiedTopology: true },
      (err, db) => {
        if (err) reject(err);
        else {
          console.log("reducing");
          db.db("olx")
            .collection("users")
            .updateOne({ email: email }, { $inc: { balance: -amount } })
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
module.exports = reduceBalance;
