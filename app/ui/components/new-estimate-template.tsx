"use client";

import { PlusIcon } from "@heroicons/react/24/outline";
import Button from "../button";
import { createPortal } from "react-dom";
import { useState } from "react";
import NewEstimateTemplateModal from "../modals/new-estimate-template-modal";

const NewEstimateTemplate = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  return <>
    <Button onClick={() => { setShowModal(true) }} className="mt-auto mx-auto px-2 py-2 flex flex-row align-middle"><PlusIcon className="w-6 mr-2"></PlusIcon>New Template</Button>
    {showModal && createPortal(<NewEstimateTemplateModal setShowModal={setShowModal} />, document.body)}
  </>
}

export default NewEstimateTemplate;
