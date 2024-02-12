'use client'
import Link from "next/link";
import Button from "../ui/button";
import { createAccount } from "../lib/auth";

export default function Page() {
  async function createNewAccount(formData: FormData) {
    const res = await createAccount(formData);
    if (res) {
      // redirect
      console.log("successfully created! Redirect!")
    } else {
      console.log("failed to create, notify user")
    }
  }

  return <main className="w-full min-h-screen px-2 grid place-content-center">
    <div className="w-full max-w-[400px] bg-white dark:bg-gray-700 px-4 rounded block">
      <h1 className="text-3xl text-center mb-2 pt-2">Sign Up</h1>
      <form action={createNewAccount}>
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