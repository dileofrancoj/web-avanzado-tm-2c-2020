const MongoClient = require("mongodb").MongoClient;

async function pool() {
  // Connection URL
  const url = "mongodb://localhost:27017/";
  // Database Name
  const dbName = "personas";
  let client;
  try {
    client = await MongoClient.connect(url);

    const db = client.db(dbName);

    return db;
  } catch (err) {
    console.log(err.stack);
  }
}
module.exports = { pool };
