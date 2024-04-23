import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.ATLAS_URI || 5050;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

try {
  await client.connect();

  await client.db("admin").command({ ping: 1 });
  console.log("DB connection - SUCCESS!");
} catch (err) {
  console.log("DB connection - FAILED", err);
}

let db = client.db("art_landing_page"); // IF YOU HAVE NOT CREATED A DB , WORRY NOT ! THIS WILL AUTOMATICALLY CREATE ONE FOR YOU!

export default db;
