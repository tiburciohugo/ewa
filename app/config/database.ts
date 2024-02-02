import { MongoClient, MongoClientOptions } from "mongodb";

if (!process.env.MONGODB_URI) {
  throw new Error("Add Mongo URI to .env.local");
}

const uri: string = String(process.env.MONGODB_URI);
const options: MongoClientOptions = {};

let client: MongoClient = new MongoClient(uri, options);
let clientPromise: Promise<MongoClient> = client.connect();

clientPromise
  .then(() => console.log("MongoDB Connected Successfully"))
  .catch((err) => console.error("MongoDB Connection Error:", err));

export default clientPromise;
