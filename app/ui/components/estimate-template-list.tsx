"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import useSWR from "swr";
import { DocumentIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useContext } from "react";
import EstimateTemplateContextProvider, { EstimateTemplateContext } from "@/app/context/estimate-template-context";
import { TemplateContext } from "next/dist/shared/lib/app-router-context.shared-runtime";

interface estimateTemplateTitles {
  title: string,
  _id: string
}

const EstimateTemplateList = () => {
  const { data: session, status } = useSession();

  if (status === "unauthenticated") {
    redirect("/login");
  }

  const context = useContext(EstimateTemplateContext);

  // @ts-ignore
  const userId = session?.user?.id;

  const fetcher = (input: RequestInfo) => fetch(input).then((res) => res.json())

  const { data, error } = useSWR(`/api/estimateTemplates/${userId}`, fetcher);

  if (error) return <div>Failed to load</div>

  if (data) {
    context?.setEstimateTemplates(data.estimateTemplateList)
  }

  if (!data) {
    return <ol>LOADING...</ol>
  } else {
    return <ol>
      {data.estimateTemplateList.map((estimateTemplate: estimateTemplateTitles) => {
        return <li key={estimateTemplate._id} className="flex flex-row bg-white rounded-md m-4 p-2">
          <DocumentIcon className="w-8 text-blue-500 hidden md:block"></DocumentIcon>
          <p className="my-auto font-bold px-1 text-lg">{estimateTemplate.title}</p>
          <Link href={`/dashboard/estimate-templates/${estimateTemplate._id}`} className="my-auto ml-auto p-2 text-sm bg-blue-500 rounded-full text-white hover:bg-blue-300 transition-all">Edit</Link>
        </li>
      })}
    </ol>
  }
}

export default EstimateTemplateList;
