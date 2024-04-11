import { NextResponse } from "next/server";
import { Source, SourceType } from "@/app/models/mongoose/source";
import connectMongoDB from "@/app/lib/mongodb";
import { getServerSession } from "next-auth";
import { News_Cycle } from "next/font/google";

// get sourcing contacts
export async function GET(req: Request) {
  const urlEndpoints = req.url.split("/")
  const userId = urlEndpoints[urlEndpoints.length - 1]
  const session = await getServerSession();
  if (!session) {
    return NextResponse.json({ message: "no session" }, { status: 401 })
  } else {
    await connectMongoDB();
    const sourceList = await Source.find({ userId: userId }).exec();

    return NextResponse.json({ sourceList }, { status: 201 })
  }


}

// update sources
export async function PUT(req: Request) {
  const urlEndpoints = req.url.split("/")
  const userId = urlEndpoints[urlEndpoints.length - 1]
  const session = await getServerSession();
  if (!session) {
    return NextResponse.json({ message: "no session" }, { status: 401 })
  } else {
    const data = await req.json();
    const { source } = data;
    const newSource = {
      name: source.name,
      description: source.description,
      phoneNumber: source.phoneNumber,
      email: source.email,
      userId: source.userId
    }

    await connectMongoDB();
    await Source.updateOne({ "_id": source._id }, newSource, { upsert: true })

    return NextResponse.json({ message: "updated" }, { status: 201 })
  }


}

// create sources
export async function POST(req: Request) {
  const urlEndpoints = req.url.split("/")
  const userId = urlEndpoints[urlEndpoints.length - 1]
  const session = await getServerSession();
  if (!session) {
    return NextResponse.json({ message: "no session" }, { status: 401 })
  } else {
    const data = await req.json();
    const { source } = data;
    const newSource = {
      name: source.name,
      description: source.description,
      phoneNumber: source.phoneNumber,
      email: source.email,
      userId: source.userId
    }

    await connectMongoDB();
    await Source.create(newSource);

    return NextResponse.json({ message: "created" }, { status: 201 })
  }


}