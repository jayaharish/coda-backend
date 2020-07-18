const MongoClient = require("mongodb").MongoClient;
require("dotenv").config();

function connectToDB(email, password) {
  return new Promise((resolve, reject) => {
    MongoClient.connect(
      process.env.PRODUCTION_DB,
      { useUnifiedTopology: true },
      (err, db) => {
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
      }
    );
  });
}
module.exports = connectToDB;
