import { NextResponse } from "next/server";
import { Source } from "@/app/models/mongoose/source";
import connectMongoDB from "@/app/lib/mongodb";
import { getServerSession } from "next-auth";

// get sourcing contacts
export async function GET(req: Request) {
  const urlEndpoints = req.url.split("/")
  const userId = urlEndpoints[urlEndpoints.length - 1]
  const session = await getServerSession();
  if (!session) {
    return NextResponse.json({message: "no session"}, {status: 401})
  } else {
    await connectMongoDB();
    const sourceList = await Source.find({ userId: userId }).exec();

    return NextResponse.json({ sourceList }, { status: 201 })
  }


}