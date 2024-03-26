'use client'

import { inter } from "./fonts";
import Link from "next/link";
import Button from "./button";
import { signOut } from "next-auth/react";


export default function NavLinks() {

  return <div className={`pt-4 bg-white h-full ${inter.className}`}>
    <Link className="text-3xl hover:bg-sky-100 px-4 block py-4 lg:text-xl lg:px-8" href="/dashboard">Home</Link>
    <hr />
    <Link className="text-3xl hover:bg-sky-100 px-4 block py-4 lg:text-xl lg:px-8" href="/dashboard/create-job">Create Job</Link>
    <hr />
    <Link className="text-3xl hover:bg-sky-100 px-4 block py-4 lg:text-xl lg:px-8" href="/dashboard/estimate">Estimate</Link>
    <hr />
    <Link className="text-3xl hover:bg-sky-100 px-4 block py-4 lg:text-xl lg:px-8" href="/dashboard/calculate">Calculate</Link>
    <hr />
    <Link className="text-3xl hover:bg-sky-100 px-4 block py-4 lg:text-xl lg:px-8" href="/dashboard/sourcing">Sourcing</Link>
    <hr />
    <Link className="text-3xl hover:bg-sky-100 px-4 block py-4 lg:text-xl lg:px-8" href="/dashboard/closing-inspection">Closing Inspection</Link>
    <hr />
    <Link className="text-3xl hover:bg-sky-100 px-4 block py-4 lg:text-xl lg:px-8" href="/dashboard/history">History</Link>
    <hr />
    <Button onClick={() => {
      signOut()
      // ignoring this "user.id" error due to next-auth package issues
      // @ts-ignore
    }}>Sign Out</Button>
  </div>
}