import { useEffect, useState } from "react";
import { Card } from "./Card";
import { AddCard } from "./AddCard";
import { useAuth } from "./Auth";
import { deleteCardFB } from "../firebase/functions";
export const StudyPage = ({ cards, studyType }) => {
    const [modal, setModal] = useState(false);
    const {currentUser} = useAuth();
    const [localCard, setlocalCard] = useState([]);
    useEffect(() => {
        setlocalCard(cards)
    }, [])

    const addLocalCard = (newCard) => {
        setlocalCard(prev => [...prev, newCard])
    }
    const deleteCard = async (id) =>{
        let filtered = localCard.filter(card=>{
            return card.id !== id;
        })
        if (currentUser){
            await deleteCardFB(studyType, id)
            setlocalCard(filtered);
        } else{
            setlocalCard(filtered);
        }
        
    }
    return (
        <div className="bg-gray-800 h-screen">
            {modal && <AddCard setModalOn={setModal} addLocalCard={addLocalCard} studyType={studyType} />}
            <div className="flex w-full justify-end items-center">
                <button className="relative top-5 right-10 w-14 h-14 text-3xl bg-gray-900 text-gray-200 rounded-full flex justify-center
                 items-center duration-500 hover:bg-gray-200 hover:text-black"
                 onClick={() => setModal(true)}>+</button>
            </div>

            <div className="grid grid-cols-2 gap-10 p-10 max-w-full">
                {localCard.map((c, i) => {
                    return (
                        <Card heading={c.title} body={c.points} id={c.id} deleteCard={deleteCard} key={c.id} />
                    )
                })}

            </div>
        </div>
    )
}