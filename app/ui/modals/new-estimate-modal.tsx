"use client";

import { useContext, useState } from "react"
import Button from "../button";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { EstimateTemplateContext } from "@/app/context/estimate-template-context";
import { EstimateTemplateType } from "@/app/models/mongoose/estimateTemplate";
import { clsx } from "clsx";
import { CheckIcon } from "@heroicons/react/24/outline";
import { EstimateType } from "@/app/models/mongoose/estimate";

interface modalProps {
  setShowModal: any
}

const NewEstimateModal = ({ setShowModal }: modalProps) => {

  const context = useContext(EstimateTemplateContext);

  const { data: session, status } = useSession();
  const router = useRouter();

  // @ts-ignore
  const userId = session?.user?.id;

  const [name, setName] = useState<string>("");
  const [usingTemplate, setUsingTemplate] = useState<boolean>(false);
  const [selectedTemplate, setSelectedTemplate] = useState<EstimateTemplateType | null>(null);

  const usingTemplateHelper = () => {

    setUsingTemplate((prevVal) => {
      if (prevVal) {
        setSelectedTemplate(null);
        return false;
      } else {
        return true;
      }
    })
  }

  return <>
    <div onClick={() => { setShowModal(false) }} id="modal-overlay" className="bg-black opacity-30 w-full h-full absolute top-0 left-0"></div>
    <form className="w-11/12 sm:w-fit p-4 sm:p-8 rounded-2xl bg-white fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <h2 className="mb-2 text-center text-2xl">New Estimate</h2>
      <label htmlFor="estimate-name">Name
        <input onChange={(e) => { setName(e.target.value) }} type="text" placeholder="Estimate Name" className="mb-4 w-full p-2 border" required />
      </label>
      <div className="flex flex-row mb-2">

        <input className="w-6 h-6 mr-2" type="checkbox" onChange={usingTemplateHelper} />
        <label htmlFor="using-template-checkbox">Create From Template?</label>

      </div>

      {usingTemplate && <ol className="h-48 lg:w-96 overflow-y-auto">
        {context?.estimateTemplates?.map((template) => {
          return <li onClick={() => {
            setSelectedTemplate(template);
          }} className={clsx({
            "py-4 px-2 rounded-lg flex flex-row !bg-green-500 hover:cursor-pointer !text-white": selectedTemplate?._id === template._id,
            "py-4 px-2 rounded-lg flex flex-row bg-white hover:cursor-pointer": true
          })} key={template._id}><CheckIcon className="w-6 mr-2 text-white"></CheckIcon>{template.title}
          </li>

        })}
      </ol>}

      <div className="flex flex-row">
        <Button onClick={(e) => {
          e.preventDefault();
          setShowModal(false);
        }} className="bg-white !text-black hover:underline hover:bg-white mr-auto">Cancel</Button>
        <Button onClick={async (e) => {
          e.preventDefault();
          if (!name) {
            // setError here
            return
          }

          if (usingTemplate && !selectedTemplate) {
            // setError here
            return
          }

          // post new estimate data either from template or scratch
          if (usingTemplate && selectedTemplate) {
            const newEstimate: EstimateType = {...selectedTemplate, _id: "", title: name, userId: userId}
            const res = await fetch(`/api/estimates/${userId}`, {
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                newEstimate: newEstimate
              }),
              method: "POST",
            })

            if (res.ok) {
              const newEstimateId = await res.json();
              const id = newEstimateId.estimateId;
              router.push(`/dashboard/estimate/${id}`);
            }
          } else {
            const newEstimate: EstimateType = {
              _id: "",
              title: name,
              checklist: [],
              contacts: [],
              sources: [],
              address: "",
              completionStatus: "",
              finishDate: new Date(),
              userId: userId
            }
            const res = await fetch(`/api/estimates/${userId}`, {
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                newEstimate: newEstimate
              }),
              method: "POST",
            })

            if (res.ok) {
              const newEstimateId = await res.json();
              const id = newEstimateId.estimateId;
              router.push(`/dashboard/estimate/${id}`);
            }
          }

        }} className="px-4 py-2 mt-2">Create</Button>
      </div>
    </form>
  </>
}

export default NewEstimateModal;

