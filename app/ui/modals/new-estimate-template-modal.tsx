"use client";

import { useState } from "react"
import Button from "../button";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

interface modalProps {
  setShowModal: any
}

const NewEstimateTemplateModal = ({ setShowModal }: modalProps) => {

  const { data: session, status } = useSession();
  const router = useRouter();

  // @ts-ignore
  const userId = session?.user?.id;

  const [templateName, setTemplateName] = useState<string>("");

  return <>
    <div onClick={() => { setShowModal(false) }} id="modal-overlay" className="bg-black opacity-30 w-full h-full absolute top-0 left-0"></div>
    <form className="w-11/12 sm:w-fit p-4 sm:p-8 rounded-2xl bg-white fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <h2 className="mb-2 text-center text-2xl">New Template</h2>
      <label htmlFor="estimate-template-name">Name
        <input onChange={(e) => { setTemplateName(e.target.value) }} type="text" placeholder="Estimate Template Name" className="mb-4 w-full p-2 border" required />
      </label>
      <div className="flex flex-row">
        <Button onClick={(e) => {
          e.preventDefault();
          setShowModal(false);
        }} className="bg-white !text-black hover:underline hover:bg-white mr-auto">Cancel</Button>
        <Button onClick={async (e) => {
          e.preventDefault();
          const res = await fetch(`/api/estimateTemplates/${userId}`, {
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              estimateTemplateName: templateName
            }),
            method: "POST"
          })

          if (res.ok) {
            const newTemplateId = await res.json();
            const id = newTemplateId.templateId;
            router.push(`/dashboard/estimate-templates/${id}`);
          }

        }} className="px-4 py-2">Create</Button>
      </div>
    </form>
  </>
}

export default NewEstimateTemplateModal;
