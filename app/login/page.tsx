'use client'
import Link from "next/link";
import Button from "../ui/button";

export default function Page() {
  return <main className="w-full min-h-screen px-2 grid place-content-center">
    <div className="w-full bg-white dark:bg-gray-700 px-4 rounded block">
      <h1 className="text-3xl text-center mb-2 pt-2">Login</h1>
      <form action="" onSubmit={(event) => {
        event.preventDefault();
      }}>
        <label htmlFor="email">Email
          <input type="email" id="email" placeholder="email@example.com" className="bg-gray-100 w-full rounded px-4 mb-8 py-2 focus:border-blue-500" />
        </label>
        <br />
        <label htmlFor="password">Password
          <input type="password" id="password" placeholder="password" className="bg-gray-100 w-full rounded px-4 mb-8 py-2" />
        </label>
        <Button className="w-full mx-0 mb-8 mt-0">
          <Link href={"/dashboard"}>Login</Link>
        </Button>
      </form>
      <label htmlFor="sign-up" className=""><p className="text-center mb-2">No Account? Create a new one!</p>
        <Button className="w-full mx-0 mb-8 mt-0" id="sign-up" type="submit">
          <Link href={"/dashboard"}>Create New Account</Link>
        </Button>
      </label>
    </div>

  </main>
}