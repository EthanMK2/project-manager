import { SourceType } from "@/app/models/mongoose/source";
import { EnvelopeIcon, PencilSquareIcon, PhoneIcon } from "@heroicons/react/16/solid";

interface EditProps {
  source: SourceType,
  setShowModal: any
}

// TODO: enable editable inputs and send api request on save, and make cancel button

const EditSource = ({ source: { _id, name, description, phoneNumbers, emails, userId }, setShowModal }: EditProps) => {

  return <>
    <div onClick={() => { setShowModal(false) }} id="modal-overlay" className="bg-black opacity-30 w-full h-full absolute top-0 left-0"></div>
    <article className="bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className="flex flex-row mb-4">
        <p className="my-auto ml-2">{name.toUpperCase()}</p>
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
    </article>
  </>
}

export default EditSource;
