import { useState, useRef, useEffect } from "react"
import { addCard } from "../firebase/functions";
import { useAuth } from "./Auth";
export const AddCard = ({ setModalOn, addLocalCard, studyType }) => {
    const {currentUser} = useAuth();
    const [list, setList] = useState([]);
    const [text, setText] = useState("");
    const [title, setTitle] = useState("")

    const addToList = (value) => {
        let temp = [...list];
        temp.push(value);
        setList(temp);
        setText("");
    }
    const createCard = () =>{
        const newCard = {title: title, points: list};
        if (currentUser){
            addCard(studyType, title, list);
            addLocalCard(newCard);
        }
        else{
            let id = JSON.parse(localStorage.getItem(studyType));
            if (!id){
                id = 0;
            } else{
                id = id.length +1;
            }
            const newLocalCard = {title: title, points: list, id: id}
            addLocalCard(newLocalCard);
        }
        setModalOn(false);
        
    }

    const removeFromList = (index) => {
        var temp = [...list];
        var filtered = temp.filter((l, i) => {
            return i !== index;
        })
        setList(filtered);
    }


    let clickRef = useRef();
    useEffect(() => {
        let handler = (e) => {
            if (!clickRef.current?.contains(e.target)) {
                setModalOn(false);
            }
        }
        document.addEventListener("mousedown", handler);

        return () => {
            document.removeEventListener("mousedown", handler);
        }
    }, [])

    return (
        <div className="bg-zinc-900 opacity-95 fixed inset-0 z-50" >
            <div className="flex h-screen justify-center items-center">
                <div className="flex flex-col bg-gray-700 lg:w-1/2 lg:h-1/2 h-1/2 w-3/4   border-4 rounded-xl" ref={clickRef}>
                    <input type="text" className="mt-10 bg-transparent text-gray-200 border-b w-full text-center text-2xl p-3 focus:outline-none" 
                    onChange={(e)=>setTitle(e.target.value)}
                    placeholder="Title..."></input>
                    <ul className="mt-6 list-disc ml-2 text-gray-200">
                        {list.map((l, i) => {
                            return (
                                <div className="flex" key={i}>
                                    <button className="mr-10" onClick={()=>{
                                        removeFromList(i)
                                    }}>-</button>
                                    <li>
                                        {l}
                                    </li>
                                </div>
                            )
                        })}
                        <ul className="flex ml-12 list-disc text-gray-200 w-full">
                        <li className="w-full" >
                            <input type="text" className=" bg-transparent text-gray-200 w-full focus:outline-none"
                              value={text}
                              placeholder="Text..."
                              onChange={(e) => {
                                setText(e.target.value);
                            }}></input>
                        </li>
                        </ul>
                        <button className="ml-8 mt-2 text-lg" onClick={() => { addToList(text) }}>+</button>
                    </ul>
                    <div className="absolute ml-auto mr-auto top-2/3 text-2xl left-0 right-0 text-center text-gray-200">
                        <button className="" onClick={() => createCard()}>Save</button>
                    </div>
                   
                </div>
                
            </div>
        </div>
    )
}
