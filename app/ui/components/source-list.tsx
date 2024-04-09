"use client";
import { SourceType } from "@/app/models/mongoose/source";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { PlusIcon } from "@heroicons/react/16/solid";
import useSWR from "swr";
import Button from "../button";
import Source from "./source";

const SourceList = () => {

  const { data: session, status } = useSession();

  if (status === "unauthenticated") {
    redirect("/login");
  }

  // @ts-ignore
  const userId = session?.user?.id;

  const fetcher = (input: RequestInfo) => fetch(input).then((res) => res.json())

  const { data, error } = useSWR(`/api/sourcing/${userId}`, fetcher);

  if (error) return <div>Failed to load</div>

  if (!data) {
    return <ol>LOADING...</ol>
  } else {
    return <ol className="p-2 grid sm:grid-cols-2">
      <Button className="w-full m-0 py-0 sm:w-fit sm:ml-auto sm:block sm:col-span-2"><p className="inline align-middle font-bold text-xl"></p><PlusIcon className="w-12 sm:w-8 inline m-auto"></PlusIcon></Button>

      {data.sourceList.map((source: SourceType) => {
        return <li className="mt-4 p-2 sm:mx-8 xl:mx-16 border-2 rounded-2xl" key={source._id}>
          <Source source={source}></Source>
        </li>
      })}
    </ol>

  }
}

export default SourceList;