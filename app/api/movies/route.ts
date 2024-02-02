import clientPromise from "@/app/config/database";
import { NextResponse } from "next/server";

export async function GET(req: Request, res: Response) {
  try {
    const client = await clientPromise;

    const db = client.db("ewa");

    const mediaCollection = db.collection("Media");

    const documents = await mediaCollection.find({}).toArray();

    return NextResponse.json(documents);
  } catch (error) {
    console.error("API error", error);
    return NextResponse.json({
      error: "Failed to fetch documents from the media collection",
    });
  }
}
