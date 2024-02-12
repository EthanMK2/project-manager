import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { NextResponse } from "next/server";

interface AccountProps {
  email: string,
  password: string
}

export async function POST(request: Request) {
  const data = await request.json()
  const {email, password} = data
  console.log("about to send this email: ", email)
  console.log("about to send this password: ", password)
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      console.log("signed up")
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage)
      // ..
    });
  return NextResponse.json("")
}

export function GET() {
  return NextResponse.json("Get create-account route stuff.")
}
