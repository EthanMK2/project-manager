import { NextResponse } from "next/server";
import { Project } from "@/app/models/mongoose/project";

// get projects for dashboard
export async function GET(req: Request) {
  const urlEndpoints = req.url.split("/")
  const userId = urlEndpoints[urlEndpoints.length - 1]
  console.log(userId)

  //const Project = mongoose.model("projects", projectSchema)
  const projectList = await Project.find({userId: userId}).exec();

  return NextResponse.json({ message: `yourId: ${userId}`, projectList }, { status: 201 })
}
