'use client'
import Link from "next/link";
import Button from "../ui/button";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";


export default function Page() {
  const router = useRouter();

  async function login(formData: FormData) {
    const email = formData.get("email")
    const password = formData.get("password")

    if (!email || !password) {
      console.log("missing email or password")
      return
    }

    try {
      const res = await signIn("credentials", {
        email, 
        password,
        redirect: false
      })

      if (res?.error) {
        console.log("signin error has occurred");
        return;
      }

      router.replace("/dashboard");
    } catch (error) {

    }

  }

  return <main className="w-full min-h-screen px-2 grid place-content-center">
    <div className="w-full bg-white dark:bg-gray-700 px-4 rounded block">
      <h1 className="text-3xl text-center mb-2 pt-2">Login</h1>
      <form action={login}>
        <label htmlFor="email">Email
          <input name="email" type="email" id="email" placeholder="email@example.com" className="bg-gray-100 w-full rounded px-4 mb-8 py-2 focus:border-blue-500" />
        </label>
        <br />
        <label htmlFor="password">Password
          <input name="password" type="password" id="password" placeholder="password" className="bg-gray-100 w-full rounded px-4 mb-8 py-2" />
        </label>
        <Button className="w-full mx-0 mb-8 mt-0">
          Login
        </Button>
      </form>
      <label htmlFor="sign-up" className=""><p className="text-center mb-2">No Account? Create a new one!</p>
        <Link href={"/signup"}>
          <Button className="w-full mx-0 mb-8 mt-0" id="sign-up" type="submit">
            Create New Account
          </Button>
        </Link>
      </label>
    </div>

  </main>
}