'use client'
import Link from "next/link";
import Button from "../ui/button";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

export default function Page() {
  const router = useRouter()

  async function createAccount(formData: FormData) {

    // check for errors (client)
    const data = {
      email: formData.get("email"),
      password: formData.get("password"),
      passwordConfirm: formData.get("password-confirm")
    }

    if (!data.email || !data.password) {
      console.log("no email, or, no password, or neither")
      return false
    }

    const email = data.email.toString()
    const password = data.password.toString()
    const passwordConfirm = data.passwordConfirm?.toString() // do validation

    try {

      const res = await fetch("api/create-account", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email, password
        })
      })

      if (res.ok) {
        // will this login race the mongodb user creation?
        console.log("signed up");
        const res = await signIn("credentials", {
          email, 
          password,
          redirect: false
        })
  
        if (res?.error) {
          console.log("signin error has occurred");
          return;
        }

        router.push('/dashboard');

      } else {
        console.log("failed to create user or already exists");
      }
      

    } catch (error) {
      console.log(error)
      return false
    }
    return true;
  }

  return <main className="w-full min-h-screen px-2 grid place-content-center">
    <div className="w-full max-w-[400px] bg-white dark:bg-gray-700 px-4 rounded block">
      <h1 className="text-3xl text-center mb-2 pt-2">Sign Up</h1>
      <form action={createAccount}>
        <label htmlFor="email">Email
          <input name="email" type="email" id="email" placeholder="email@example.com" className="bg-gray-100 w-full rounded px-4 mb-8 py-2 focus:border-blue-500" />
        </label>
        <br />
        <label htmlFor="password">Password
          <input name="password" type="password" id="password" placeholder="new password" className="bg-gray-100 w-full rounded px-4 mb-8 py-2" />
        </label>
        <label htmlFor="password-confirm">Confirm Password
          <input name="password-confirm" type="password" id="password-confirm" placeholder="new password" className="bg-gray-100 w-full rounded px-4 mb-8 py-2" />
        </label>
        <Button className="w-full mx-0 mb-8 mt-0">
          Create Account
        </Button>
      </form>
      <label htmlFor="sign-up" className=""><p className="text-center mb-2">Already Have an Account? Login.</p>
        <Link href={"/login"}>
          <Button className="w-full mx-0 mb-8 mt-0" id="sign-up" type="submit">
            Login
          </Button>
        </Link>
      </label>
    </div>

  </main>
}