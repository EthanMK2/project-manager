import Link from "next/link";

export default function Page() {
  return <main className="w-full min-h-screen p-24">
    <h1>Login</h1>
    <button className="bg-sky-300 rounded p-2 m-2 hover:bg-sky-400">
      <Link href={"/dashboard"}>Home</Link>
    </button>
  </main>
}