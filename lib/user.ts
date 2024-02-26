import clientPromise from "@/app/config/database";
import { User } from "@/app/types/types";
import { MongoClient, Collection } from "mongodb";

class UserRepository {
  private collection: Promise<Collection>;

  constructor() {
    this.collection = this.init();
  }

  private async init(): Promise<Collection> {
    const client = await clientPromise;
    const db = client.db("ewa");
    return db.collection("Users");
  }

  public async find(filter: object): Promise<any[]> {
    const collection = await this.collection;
    return collection.find(filter).toArray();
  }

  public async findOne(filter: object): Promise<any | null> {
    const collection = await this.collection;
    return collection.findOne(filter);
  }

  public async insertOne(doc: object): Promise<any> {
    const collection = await this.collection;
    return collection.insertOne(doc);
  }
}

export const userRepository = new UserRepository();

export async function fetchUser(email: string) {
  const client = await clientPromise;
  const db = client.db("ewa");
  const usersCollection = db.collection("Users");
  const user: User | null = await usersCollection.findOne<User>({ email });
  if (!user) {
    return null;
  }
  return user;
}

export async function fetchUsers() {
  const client = await clientPromise;
  const db = client.db("ewa");
  const usersCollection = db.collection("Users");
  const users = await usersCollection.find({}).toArray();
  return users;
}
