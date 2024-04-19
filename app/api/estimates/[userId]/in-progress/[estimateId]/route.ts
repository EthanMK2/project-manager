import { NextResponse } from "next/server";
import connectMongoDB from "@/app/lib/mongodb";
import { getServerSession } from "next-auth";
import { Estimate, EstimateType } from "@/app/models/mongoose/estimate";


export async function GET(req: Request) {
  const urlEndpoints = req.url.split("/")
  const estimateId = urlEndpoints[urlEndpoints.length - 1]
  const session = await getServerSession();
  if (!session) {
    return NextResponse.json({ message: "no session" }, { status: 401 })
  } else {

    await connectMongoDB();
    // TODO: do findOne.populate().exec() to get the sources list of refs
    // also need to redo the estimate schema
    const estimate = await Estimate.findOne({ _id: estimateId }).exec();
    return NextResponse.json({ estimate }, { status: 201 })
  }


}
