const MongoClient = require('mongodb').MongoClient;

const uri = process.env.URI;
const dbName = process.env.DB_NAME;
const collectionName = process.env.COLLECTION_NAME;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const connect = async () => {
  try {
    await client.connect();
    const collection = client.db(dbName).collection(collectionName);
    console.log("Database connected successfully");
    return collection;
  } catch (err) {
    console.error(err);
  }
};

module.exports = connect;

