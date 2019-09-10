const mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;
const mongoURL =
   "mongodb+srv://vik:ccc83f78@cluster0-7vd0x.mongodb.net/shop?retryWrites=true&w=majority";

let _db;

const initDb = callback => {
   if (_db) {
      console.log("Database is already initialyzed!");
      return callback(null, _db);
   }
   MongoClient.connect(mongoURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
   })
      .then(client => {
         _db = client;
         callback(null, _db);
      })
      .catch(err => {
         callback(err);
      });
};

const getDb = () => {
   if (!_db) {
      throw Error("Database is not initialyzed!");
   }
   return _db;
};

module.exports = {
   initDb,
   getDb
};
