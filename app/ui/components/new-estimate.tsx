"use client";

import { PlusIcon } from "@heroicons/react/24/outline";
import Button from "../button";
import { createPortal } from "react-dom";
import { useState } from "react";
import NewEstimateModal from "../modals/new-estimate-modal";

const NewEstimate = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  return <>
    <Button onClick={() => { setShowModal(true) }} className="mt-auto mx-auto px-2 py-2 flex flex-row align-middle"><PlusIcon className="w-6 mr-2"></PlusIcon>New Estimate</Button>
    {showModal && createPortal(<NewEstimateModal setShowModal={setShowModal} />, document.body)}
  </>
}

export default NewEstimate;


