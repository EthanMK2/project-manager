import { NextResponse } from "next/server";
import connectMongoDB from "@/app/lib/mongodb";
import { getServerSession } from "next-auth";
import { Estimate } from "@/app/models/mongoose/estimate";

// get all titles
export async function GET(req: Request) {
  const urlEndpoints = req.url.split("/")
  const userId = urlEndpoints[urlEndpoints.length - 1]
  const session = await getServerSession();
  if (!session) {
    return NextResponse.json({ message: "no session" }, { status: 401 })
  } else {

    await connectMongoDB();
    const estimateList = await Estimate.find({ userId: userId }, { title: 1 }).exec();
    return NextResponse.json({ estimateList }, { status: 201 })
  }


}
