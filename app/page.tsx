"use client";
import Link from "next/link";
import Button from "./ui/button";
import Image from "next/image";
import { auth } from "@/app/lib/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/navigation";

export default function Home() {
  
  return <>
    <header className="p-12 text-4xl"><h1 className="block">
      Logis Projects
    </h1></header>
    <main className="lg:pt-32 lg:px-16 xl:px-32 p-2 lg:max-w-[1800px] lg:mx-auto">
      <section className="min-h-screen" id="intro">
        <div className="bg-white dark:bg-gray-700 py-16 rounded-md lg:px-32">
          <h1 className="text-3xl text-center md:text-5xl">
            The #1 Project Management Software For <br /><strong className="text-blue-500">On-Site Contractors</strong>
          </h1>
          <div className="flex flex-col mt-4">
            <Button className="md:mx-auto md:w-64 md:text-xl"><Link href={"/login"} className=" font-bold">Login</Link></Button>
            <Button className="md:mx-auto md:w-64 md:text-xl"><Link href={"/login"} className=" font-bold">Sign Up</Link></Button>
            <Image src={"/preview-placeholder.png"} alt="Logis Projects Dashboard Preview" width={1080} height={1080} className="self-center rounded mt-4"></Image>
          </div>
        </div>
      </section>

      <section className="min-h-screen">
        <h1 className="text-3xl text-center my-16 md:text-5xl">The Best App For <strong className="text-blue-500">All Trades</strong>.</h1>
        <div className="bg-white dark:bg-gray-700 lg:py-0 py-16 rounded-md text-center md:text-3xl">
          <p className="text-xl md:text-3xl lg:py-16">Oversee work site status and tasks.</p>
          <Image src={"/preview-placeholder.png"} alt="Logis Projects Dashboard Preview GIF" width={1080} height={1080} className="rounded lg:my-0 mt-4 mb-16 md:px-4 lg:mx-auto"></Image>
          <p className="text-xl md:text-3xl lg:pb-16 lg:pt-28">Manage project tasks, inspections, estimates, and more.</p>
          <Image src={"/preview-placeholder.png"} alt="Logis Projects Dashboard Preview GIF" width={1080} height={1080} className="rounded lg:my-0 mt-4 mb-16 md:px-4 lg:mx-auto"></Image>
          <p className="text-xl md:text-3xl lg:pb-16 lg:pt-28">Convert estimates to projects, then projects to invoices.</p>
          <Image src={"/preview-placeholder.png"} alt="Logis Projects Dashboard Preview GIF" width={1080} height={1080} className="rounded lg:my-0 mt-4 mb-16 md:px-4 lg:mx-auto"></Image>
        </div>
      </section>

      <section className="min-h-screen grid place-content-center lg:max-w-[40rem] lg:mx-auto" id="cta">
        <h1 className="text-xl text-center md:text-4xl">Landscape, Electricty, Plumbing, Construction, HVAC, and everything else involving hands-on projects. If you're on-site, <strong className="text-blue-500">you need our site</strong>!</h1>
        <div className="flex flex-col mt-4">
          <Button className="md:mx-auto md:w-64 md:text-xl"><Link href={"/login"} className=" font-bold">Try Free</Link></Button>
        </div>
      </section>
      {/* footer here */}
    </main></>


}
