import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen p-24">
      <h1 className="block">
        Project Management Application
      </h1>
      <div>By Ethan Klukkert</div>
      <div className="flex flex-col">
        <div>
          <button className="bg-sky-300 rounded p-2 m-2 hover:bg-sky-400"><Link href={"/login"}>Login</Link></button>
          <button className="bg-sky-300 rounded p-2 m-2 hover:bg-sky-400"><Link href={"/dashboard"}>Home</Link></button>
        </div>


      </div>


    </main>
  );
}
