"use client";
import { SourceType } from "@/app/models/mongoose/source"
import { PhoneIcon, PencilSquareIcon, EnvelopeIcon } from "@heroicons/react/16/solid";
import Button from "../button";
import { useState } from "react";
import EditSource from "../modals/edit-source";
import { createPortal } from "react-dom";

interface SourceProps {
  source: SourceType
}

const Source = ({ source: { _id, name, description, phoneNumbers, emails, userId } }: SourceProps) => {

  const [showEditModal, setShowEditModal] = useState<boolean>(false);


  return <article>
    <div className="flex flex-row mb-4">
      <p className="my-auto ml-2">{name.toUpperCase()}</p>
      <Button onClick={() => {
        setShowEditModal(true)
      }} className="ml-auto mb-auto p-2"><PencilSquareIcon className="w-4 h-4"></PencilSquareIcon></Button>
    </div>
    <p>{description}</p>
    <div className="flex flex-row mt-6">
      <PhoneIcon className="w-8 mr-2 text-blue-600"></PhoneIcon>
      <p className=" my-auto">{phoneNumbers.map((phoneNumber) => {
        return <a key={phoneNumber} href={`tel:${phoneNumber}`} className="underline block text-blue-600">{phoneNumber}</a>
      })}</p>
    </div>
    <div className="flex flex-row mt-6">
      <EnvelopeIcon className="text-blue-600 w-8 mr-2"></EnvelopeIcon>
      <div className="my-auto">
        {emails.map((email) => {
          return <div key={email}>{email}</div>
        })}
      </div>
    </div>
    {showEditModal && createPortal(<EditSource source={{_id, name, description, phoneNumbers, emails, userId}} setShowModal={setShowEditModal}></EditSource>, document.body)}
  </article>
}

export default Source;
