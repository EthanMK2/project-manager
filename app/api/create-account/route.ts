import { NextResponse } from "next/server";
import connectMongoDB from "@/app/lib/mongodb"
import User from "@/app/models/user";
import bcrypt from "bcryptjs";


export async function POST(request: Request) {
  try {
    const data = await request.json()
    const { email, password } = data
    const hashedPassword = await bcrypt.hash(password, 10)
    console.log("about to send this email: ", email)
    console.log("about to send this password: ", password)

    await connectMongoDB();
    const userExists = await User.findOne({email}).select("_id");

    if (userExists) {
      return NextResponse.error();
    }

    await User.create({ email, password: hashedPassword })

    return NextResponse.json({ message: "user created" }, { status: 201 })

  } catch (error) {
    return NextResponse.error();
  }



}

export function GET() {
  return NextResponse.json("Get create-account route stuff.")
}
