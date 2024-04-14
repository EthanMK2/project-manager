import { NextResponse } from "next/server";
import connectMongoDB from "@/app/lib/mongodb";
import { getServerSession } from "next-auth";
import { EstimateTemplate } from "@/app/models/mongoose/estimateTemplate";

// get all titles
export async function GET(req: Request) {
  const urlEndpoints = req.url.split("/")
  const userId = urlEndpoints[urlEndpoints.length - 1]
  const session = await getServerSession();
  if (!session) {
    return NextResponse.json({ message: "no session" }, { status: 401 })
  } else {
    
    await connectMongoDB();
    const estimateTemplateList = await EstimateTemplate.find({}).exec();
    console.log(estimateTemplateList)

    return NextResponse.json({ estimateTemplateList }, { status: 201 })
  }


}

