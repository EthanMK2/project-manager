"use client";
import { SourceType } from "@/app/models/mongoose/source";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { PlusIcon } from "@heroicons/react/16/solid";
import useSWR from "swr";
import Button from "../button";
import Source from "./source";
import { useState } from "react";
import { createPortal } from "react-dom";
import EditSource from "../modals/edit-source";

const SourceList = () => {

  const { data: session, status } = useSession();

  if (status === "unauthenticated") {
    redirect("/login");
  }

  const [showAddModal, setShowAddModal] = useState(false);

  // @ts-ignore
  const userId = session?.user?.id;

  const fetcher = (input: RequestInfo) => fetch(input).then((res) => res.json())

  const { data, error, mutate } = useSWR(`/api/sourcing/${userId}`, fetcher);

  if (error) return <div>Failed to load</div>

  if (!data) {
    return <ol>LOADING...</ol>
  } else {
    return <ol className="p-2 grid sm:grid-cols-2">
      <Button onClick={() => { setShowAddModal(true) }} className="w-full m-0 py-0 sm:w-fit sm:ml-auto sm:block sm:col-span-2"><p className="inline align-middle font-bold text-xl"></p><PlusIcon className="w-12 sm:w-8 inline m-auto"></PlusIcon></Button>
      {showAddModal && createPortal(<EditSource source={{ _id: "", name: "", description: "", phoneNumber: "", email: "", userId }} setShowModal={setShowAddModal} saveSource={createSource} deleteSource={deleteSource}></EditSource>, document.body)}
      
      {data.sourceList.map((source: SourceType) => {
        return <li className="mt-4 p-2 sm:mx-8 xl:mx-16 border-2 rounded-2xl" key={source._id}>
          <Source source={source} saveSource={saveSource} deleteSource={deleteSource}></Source>
        </li>
      })}
    </ol>

  }

  function saveSource(source: SourceType) {
    fetch(`/api/sourcing/${source.userId}`, {
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        source: source
      }),
      method: "PUT"
    })
    mutate({ ...data })
  }

  function createSource(source: SourceType) {
    fetch(`/api/sourcing/${source.userId}`, {
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        source: source
      }),
      method: "POST"
    })
    mutate({ ...data })
  }

  function deleteSource(source: SourceType) {
    fetch(`/api/sourcing/${source.userId}`, {
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        source: source
      }),
      method: "DELETE"
    })
    mutate({ ...data })
  }
}



export default SourceList;