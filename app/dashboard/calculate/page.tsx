"use client";

interface savedNumber {
  id: string,
  name: string,
  value: string
}

export default async function Page() {


  //const data = await getNumbers();

  const data: any = []

  data.forEach((num: savedNumber) => {
    data.push({ ...num })
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
