const MongoClient = require("mongodb").MongoClient;
const uri = "mongodb://127.0.0.1:27017/";

function connectToDB(email, password) {
  return new Promise((resolve, reject) => {
    MongoClient.connect(uri, { useUnifiedTopology: true }, (err, db) => {
      if (err) reject(err);
      else {
        db.db("olx")
          .collection("users")
          .findOne({ email: email, password: password })
          .then((doc) => {
            resolve(doc !== null);
          })
          .catch((err) => reject(err));
      }
    });
  });
}
module.exports = connectToDB;
