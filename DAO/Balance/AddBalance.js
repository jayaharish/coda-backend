const MongoClient = require("mongodb").MongoClient;
const uri = "mongodb://127.0.0.1:27017/";

function addBalance(email, amount) {
  return new Promise((resolve, reject) => {
    MongoClient.connect(uri, { useUnifiedTopology: true }, (err, db) => {
      if (err) reject(err);
      else {
        console.log("adding");
        db.db("olx")
          .collection("users")
          .updateOne({ email: email }, { $inc: { balance: parseInt(amount) } })
          .then((res) => {
            console.log(res);
            resolve({ balance: res.balance });
          })
          .catch((err) => {
            console.log("error occured", err);
            reject(err);
          });
      }
    });
  });
}
module.exports = addBalance;
