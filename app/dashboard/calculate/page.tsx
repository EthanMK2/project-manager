"use client";

import { getDocs, collection } from "firebase/firestore";
import { db } from "@/app/lib/firebase";
import { auth } from "@/app/lib/firebase";
import dynamic from "next/dynamic";

interface savedNumber {
  id: string,
  name: string,
  value: string
}

async function CalculatePage() {


  //const data = await getNumbers();

  const numbersSnapshot = auth.currentUser ? await getDocs(collection(db, "users", `${auth.currentUser?.uid}`, "savedNumbers")) : [];

  const data: any = []

  numbersSnapshot.forEach((doc) => {
    data.push({ ...doc.data(), id: doc.id })
  });

  return <main className="min-h-screen">
    {data.map((num: savedNumber) => {
      return <div key={num.id}>
        <p>{num.name}</p>
        <p>{num.value}</p>
      </div>
    })}
  </main>
}

const Page = dynamic(() => Promise.resolve(CalculatePage), {
  ssr: false,
})

export default Page;
