import { useState } from "react"
import { DeleteModal } from "./DeleteModal";


export const Card = ({ heading, body, deleteCard, id }) => {
    const [modal, setModal] = useState(false);
    return (
        <div className="flex flex-col bg-gray-700 shadow-sm shadow-gray-400 p-4 rounded-lg text-gray-200 max-h-96">
            <div className="flex">
                <h1 className="font-bold text-3xl  border-b p-4 w-full">{heading}</h1>
                <button className="h-6 w-6 right-2 relative" onClick={()=>setModal(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
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
            {modal && <DeleteModal setModal={setModal} deleteCard={deleteCard} id={id}/>}
        </div>
    )
}
