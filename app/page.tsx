import Link from "next/link";
import Button from "./ui/button";
import Image from "next/image";

export default function Home() {
  return <>
    <header className="p-12 text-4xl"><h1 className="block">
      Logis Projects
    </h1></header>
    <main className="p-2">
      <section className="min-h-screen" id="intro">
        <h1 className="text-3xl text-center">
          The #1 Project Management Software For <br /><strong className="text-blue-500">On-Site Contractors</strong>
        </h1>
        <div className="flex flex-col mt-4">
          <Button className=""><Link href={"/login"} className=" font-bold">Login</Link></Button>
          <Button className=""><Link href={"/login"} className=" font-bold">Sign Up</Link></Button>
          <Image src={"/preview-placeholder.png"} alt="Logis Projects Dashboard Preview" width={600} height={600} className="rounded mt-4"></Image>
        </div>

      </section>

      <section className="min-h-screen">
        <h1 className="text-3xl text-center mb-16">The Best App For <strong className="text-blue-500">All Trades</strong>.</h1>
        <p className="text-xl">Oversee work site status and tasks.</p>
        <Image src={"/preview-placeholder.png"} alt="Logis Projects Dashboard Preview GIF" width={600} height={600} className="rounded mt-4 mb-16"></Image>
        <p className="text-xl">Manage project tasks, inspections, estimates, and more.</p>
        <Image src={"/preview-placeholder.png"} alt="Logis Projects Dashboard Preview GIF" width={600} height={600} className="rounded mt-4 mb-16"></Image>
      </section>

      <section className="min-h-screen grid place-content-center" id="cta">
        <h1 className="text-xl text-center">Landscape, Electricty, Plumbing, Construction, HVAC, and everything else involving hands-on projects. If you're on-site, <strong className="text-blue-500">you need our site</strong>!</h1>
        <div className="flex flex-col mt-4">
          <Button className=""><Link href={"/login"} className=" font-bold">Try Free</Link></Button>
        </div>
      </section>

    </main></>


}
