import { NextResponse } from "next/server";
import connectMongoDB from "@/app/lib/mongodb";
import { getServerSession } from "next-auth";
import { Estimate, EstimateType } from "@/app/models/mongoose/estimate";

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

// create (both from template and from scratch)
export async function POST(req: Request) {
  const urlEndpoints = req.url.split("/")
  const userId = urlEndpoints[urlEndpoints.length - 1]
  const session = await getServerSession();
  if (!session) {
    return NextResponse.json({ message: "no session" }, { status: 401 })
  } else {

    const data = await req.json();
    const { newEstimate } = data;
    const estimate = {
      title: newEstimate.title,
      checklist: newEstimate.checklist,
      contacts: newEstimate.contacts,
      sources: newEstimate.sources,
      address: newEstimate.address,
      completionStatus: newEstimate.completionStatus,
      finishDate: newEstimate.finishDate,
      userId: newEstimate.userId
    }

    await connectMongoDB();
    const postedEstimate = await Estimate.create(estimate);
    return NextResponse.json({ estimateId: postedEstimate._id.toString() }, { status: 201 })
  }


}
