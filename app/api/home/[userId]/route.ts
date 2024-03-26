import { NextResponse } from "next/server";
import { Project } from "@/app/models/mongoose/project";
import connectMongoDB from "@/app/lib/mongodb";
import { getServerSession } from "next-auth";

// get projects for dashboard
export async function GET(req: Request) {
  const urlEndpoints = req.url.split("/")
  const userId = urlEndpoints[urlEndpoints.length - 1]
  console.log(userId)
  const session = await getServerSession();
  if (!session) {
    return NextResponse.json({message: "no session"}, {status: 401})
  } else {
    //const Project = mongoose.model("projects", projectSchema)
    await connectMongoDB();
    const projectList = await Project.find({ userId: userId }).exec();

    return NextResponse.json({ projectList }, { status: 201 })
  }


}
