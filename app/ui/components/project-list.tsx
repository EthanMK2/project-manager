"use client";
import { ProjectType } from "@/app/models/mongoose/project";
import { useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
import useSWR from "swr";

const ProjectList = () => {

  const { data: session, status } = useSession();

  if (status === "unauthenticated") {
    redirect("/login");
  }

  // @ts-ignore
  const userId = session?.user?.id;

  const fetcher = (input: RequestInfo) => fetch(input).then((res) => res.json())
  
  const { data, error } = useSWR(`/api/home/${userId}`, fetcher);
 
  if (error) return <div>Failed to load</div>

  if (!data) {
    return <ol>LOADING...</ol>
  } else {
    return <ol>
      {data.projectList.map((project: ProjectType) => {
        return <li key={project._id} id={project._id}>
          {project.title}
          {project.address}
          {project.checklist.map((task) => {
            return <p key={task.id}>{task.description}</p>
          })}
          {project.completionStatus}
          {project.contacts.map((contact) => {
            return <div key={contact.id}>FirstName: {contact.firstName} <br />
              LastName: {contact.lastName}</div>
          })}
          {project.expectedPay}
          {project.finishDate?.toString()}
          {project.inspectionSuccessful}
          {project.notes}
          {project.priority}
          {project.shortDescription}
        </li>
      })}
      <li>Item</li>
    </ol>

  }
}

export default ProjectList;

