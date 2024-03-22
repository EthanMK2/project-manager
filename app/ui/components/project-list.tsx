"use client";
import { ProjectType } from "@/app/models/mongoose/project";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

const ProjectList = () => {

  const { data: session } = useSession();
  const [projectList, setProjectList] = useState<Array<ProjectType>>([]);

  // @ts-ignore
  const userId = session?.user?.id;

  useEffect(() => {
    if (session?.user) {
      fetch(`api/home/${userId}`).then((req) => {
        return req.json();
      }).then((data) => {
        console.log(data)
        setProjectList(data.projectList);
      })
    }
  }, [])

  return <ol>
    <li>
      {projectList.map((project) => {
        return <div>
          {project.title}
          <br />
          {project.address}
          <br />
          {project.checklist.map((task) => {
            return task.description
          })}
          <br />
          {project.completionStatus}
          <br />
          {project.contacts.map((contact) => {
            return <div>FirstName: {contact.firstName} <br />
              LastName: {contact.lastName}</div>
          })}
          <br />
          {project.expectedPay}
          <br />
          {project.finishDate?.toString()}
          <br />
          {project.inspectionSuccessful}
          <br />
          {project.notes}
          <br />
          {project.priority}
          <br />
          {project.shortDescription}
        </div>
      })}
    </li>
  </ol>

}

export default ProjectList;
