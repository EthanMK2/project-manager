import { NextResponse } from "next/server";
import connectMongoDB from "@/app/lib/mongodb";
import { getServerSession } from "next-auth";
import { EstimateTemplate } from "@/app/models/mongoose/estimateTemplate";

// get
export async function GET(req: Request) {
  const urlEndpoints = req.url.split("/")
  const userId = urlEndpoints[urlEndpoints.length - 1]
  const session = await getServerSession();
  if (!session) {
    return NextResponse.json({ message: "no session" }, { status: 401 })
  } else {

    await connectMongoDB();
    const estimateTemplateList = await EstimateTemplate.find({ userId: userId }).exec();

    return NextResponse.json({ estimateTemplateList }, { status: 201 })
  }


}

// create blank estimate template (except with title)
export async function POST(req: Request) {
  const urlEndpoints = req.url.split("/")
  const userId = urlEndpoints[urlEndpoints.length - 1]
  const session = await getServerSession();
  if (!session) {
    return NextResponse.json({ message: "no session" }, { status: 401 })
  } else {
    const data = await req.json();
    const { estimateTemplateName } = data;
    const newTemplate = {
      title: estimateTemplateName,
      checklist: [],
      contacts: [],
      sources: [],
      address: "",
      completionStatus: "in-progress",
      finishDate: new Date(),
      userId
    }

    await connectMongoDB();
    const estimateTemplate = await EstimateTemplate.create(newTemplate);

    return NextResponse.json({ templateId: estimateTemplate._id.toString() }, { status: 201 })
  }


}

