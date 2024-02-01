import { importJSON } from "@/app/firebase/config";
import type { NextRequest, NextResponse } from "next/server";

type ResponseData = {
  message: string;
};

export async function GET(req: NextRequest, res: NextResponse<ResponseData>) {
  try {
    importJSON();
    return Response.json({ message: "Data imported successfully" });
  } catch (error) {
    return Response.json({ message: "Error importing data" });
  }
}
