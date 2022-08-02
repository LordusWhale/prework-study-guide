import { useState } from "react"
import { DeleteModal } from "./DeleteModal";
import { EditCard } from "./EditCard";


export const Card = ({ heading, body, deleteCard, id, studyType, setCard }) => {
    const [modal, setModal] = useState(false);
    const [editModal, setEditModal] = useState(false);
    return (
        <div className="flex flex-col bg-gray-700 shadow-sm shadow-gray-400 p-4 rounded-lg text-gray-200 max-h-96">
            <div className="flex">
                <h1 className="font-bold text-3xl  border-b p-4 w-full">{heading}</h1>
                <button className="h-6 w-6 right-2 relative z-10" onClick={() => setModal(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                </button>
                <button className="h-6 w-6 right-20 relative z-10" onClick={() => setEditModal(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                    </svg>
                </button>

            </div>

            <ul className="p-10">
                {body.map((b, i) => {
                    return (
                        <li key={i} className="text-xl list-disc">{b}</li>
                    )
                })}
            </ul>
            {modal && <DeleteModal setModal={setModal} deleteCard={deleteCard} id={id} />}
            {editModal && <EditCard id={id} setCard={setCard} studyType={studyType} setModalOn={setEditModal} />}
        </div>
    )
}
