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
      completionStatus: false,
      finishDate: new Date(),
      userId
    }

    await connectMongoDB();
    const estimateTemplate = await EstimateTemplate.create(newTemplate);
    console.log(estimateTemplate._id.toString());

    return NextResponse.json({ templateId: estimateTemplate._id.toString() }, { status: 201 })
  }


}

