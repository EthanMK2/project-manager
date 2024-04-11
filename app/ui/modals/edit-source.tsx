"use client";

import { SourceType } from "@/app/models/mongoose/source";
import { EnvelopeIcon, PhoneIcon, TrashIcon } from "@heroicons/react/16/solid";
import Button from "../button";
import { useState } from "react";

interface EditProps {
  source: SourceType,
  setShowModal: any,
  saveSource: any,
  deleteSource: any
}

const EditSource = ({ source: { _id, name, description, phoneNumber, email, userId }, setShowModal, saveSource, deleteSource }: EditProps) => {

  const initialSource = { _id, name, description, phoneNumber, email, userId }

  const [sourceVals, setSourceVals] = useState<SourceType>({ ...initialSource })

  return <>
    <div onClick={() => { setShowModal(false) }} id="modal-overlay" className="bg-black opacity-30 w-full h-full absolute top-0 left-0"></div>
    <form className="w-11/12 sm:w-fit p-4 sm:p-8 rounded-2xl bg-white fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <label htmlFor="name">Name
        <input onChange={(e) => {
          setSourceVals((prevVal) => {
            return { ...prevVal, name: e.target.value }
          })
        }} name="name" type="text" placeholder="Name" defaultValue={`${name}`} className="mb-4 w-full p-2 border"></input>
      </label>
      <label htmlFor="description">Description
        <input onChange={(e) => {
          setSourceVals((prevVal) => {
            return { ...prevVal, description: e.target.value }
          })
        }} name="description" type="text" placeholder="Description" defaultValue={`${description}`} className="mb-4 w-full p-2 border"></input>
      </label>

      <p>Phone Number</p>
      <div className="flex flex-row items-center">
        <PhoneIcon className="w-8 mr-2 text-blue-600"></PhoneIcon>

        <input onChange={(e) => {
          setSourceVals((prevVal) => {
            return { ...prevVal, phoneNumber: e.target.value }
          })
        }} type="text" placeholder="Phone Number" defaultValue={`${phoneNumber}`} className="p-2 border"></input>

      </div>

      <p className="mt-4">Email</p>
      <div className="flex flex-row mb-2">
        <EnvelopeIcon className="text-blue-600 w-8 mr-2"></EnvelopeIcon>
        <input onChange={(e) => {
          setSourceVals((prevVal) => {
            return { ...prevVal, email: e.target.value }
          })
        }} type="email" placeholder="Email" defaultValue={`${email}`} className="p-2 border"></input>
      </div>
      <div className="flex flex-row">
        
        {initialSource._id && <Button onClick={(e) => {
          e.preventDefault();
          if (window.confirm("DELETE SOURCING CONTACT: Are you sure?")) {
            deleteSource(sourceVals);
            setShowModal(false);
          }
        }} className="px-2 text-red-500 bg-white hover:bg-red-500 hover:text-white"><TrashIcon className="w-6"></TrashIcon></Button>}

        <Button onClick={(e) => {
          e.preventDefault();
          setShowModal(false)
        }} className="!text-black bg-white hover:bg-white hover:underline ml-auto" >Cancel</Button>
        <Button onClick={(e) => {
          e.preventDefault();
          console.log(sourceVals)

          saveSource(sourceVals);

          setShowModal(false);
        }} className="py-2 px-4 ml-8" >Save</Button>
      </div>
    </form>
  </>
}

export default EditSource;
