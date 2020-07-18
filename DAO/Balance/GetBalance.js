const MongoClient = require("mongodb").MongoClient;
const uri = "mongodb://127.0.0.1:27017/";

function getBalance(email) {
  return new Promise((resolve, reject) => {
    MongoClient.connect(uri, { useUnifiedTopology: true }, (err, db) => {
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
    });
  });
}
module.exports = getBalance;
