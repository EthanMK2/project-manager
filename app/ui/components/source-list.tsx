"use client";
import { SourceType } from "@/app/models/mongoose/source";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import useSWR from "swr";

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
    return <ol>
      {data.sourceList.map((source: SourceType) => {
        return <li key={source._id}>
          {source.name}
          <br />
          {source.description}
          {source.phoneNumbers.map((phoneNumber) => {
            return <p key={phoneNumber}>Phone: {phoneNumber}</p>
          })}
          {source.emails.map((email) => {
            return <div key={email}>Email: {email}</div>
          })}
        </li>
      })}
      <li>Source List</li>
    </ol>

  }
}

export default SourceList;