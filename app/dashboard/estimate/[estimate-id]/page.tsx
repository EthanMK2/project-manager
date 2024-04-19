"use client";
import { SourceType } from "@/app/models/mongoose/source";
import ContactType from "@/app/models/ts/contactType";
import TaskType from "@/app/models/ts/taskType";
import PageTitle from "@/app/ui/page-title";
import { useSession } from "next-auth/react";
import { redirect, useParams } from "next/navigation";
import useSWR from "swr";

export default function Page() {

  const { data: session, status } = useSession();

  if (status === "unauthenticated") {
    redirect("/login");
  }

  const params = useParams();

  const estimateId = params["estimate-id"].toString()

  // @ts-ignore
  const userId = session?.user?.id;

  const fetcher = (input: RequestInfo) => fetch(input).then((res) => res.json())

  const { data, error } = useSWR(`/api/estimates/${userId}/in-progress/${estimateId}`, fetcher);

  if (error) return <div>Failed to load</div>

  if (!data) {
    return <ol>LOADING...</ol>
  } else {
    const { _id, title, address, checklist, contacts, sources, completionStatus, finishDate } = data.estimate;

    let totalCost = 0;
    checklist.forEach((task: TaskType) => {
      totalCost += +task.cost;
    })

    return <main className="min-h-screen">
      <PageTitle title="Estimate"></PageTitle>
      <h2 className="">{title}</h2>
      <address>{address}</address>
      <ol className="block">
        Task List:
        {checklist.map((task: TaskType) => {
          return <li key={task.description}>
            <p>{task.description}</p>
            <p>{task.cost}</p>
          </li>
        })}
      </ol>
      <div className="flex flex-row">
        <p className="mr-auto">Total:</p>
        <p>{totalCost}</p>
      </div>

      <p>Estimated Finish Date: {finishDate.split("T")[0]}</p>

      <div>
        <p>Contacts</p>
        <ol>
          {contacts.map((contact: ContactType) => {
            return <li key={contact.email}>
              <p>{contact.firstName} {contact.lastName}</p>
              <p>{contact.phoneNumber}</p>
              <p>{contact.email}</p>
            </li>
          })}
        </ol>
        <p>Sources</p>
        <ol>
          {sources.map((source: SourceType) => {
            return <li key={source._id}>
              <p>{source.name}</p>
              <p>{source.phoneNumber}</p>
              <p>{source.email}</p>
            </li>
          })}
        </ol>
      </div>

    </main>
  }
}
