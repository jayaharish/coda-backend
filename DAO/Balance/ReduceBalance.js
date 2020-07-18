const MongoClient = require("mongodb").MongoClient;
const uri = "mongodb://127.0.0.1:27017/";

function reduceBalance(email, amount) {
  return new Promise((resolve, reject) => {
    MongoClient.connect(uri, { useUnifiedTopology: true }, (err, db) => {
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
    });
  });
}
module.exports = reduceBalance;
