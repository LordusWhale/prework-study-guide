import { useEffect, useState } from "react"
import { getSingleCard, updateCardFB } from "../firebase/functions"
import { useRef } from "react"
import { Input } from "./Input"
import { auth } from "../firebase/firebase"


export const EditCard = ({ setModalOn, studyType, id, setCard }) => {
    const [title, setTitle] = useState("")
    const [points, setPoints] = useState([]);
    const [newPoint, setNewPoint] = useState("");

    useEffect(() => {
        const getCardData = async () => {
            if (auth.currentUser) {
                const data = await getSingleCard(id, studyType);
                setTitle(data.title)
                setPoints(data.points)
            } else {
                const data = JSON.parse(localStorage.getItem(studyType));
                let card = data.filter((d) => {
                    return d.id == id;
                })
                card = card[0];
                setTitle(card.title)
                setPoints(card.points)
            }
        }
        getCardData();
    }, [])


    const updateCard = async () => {
        if (!auth.currentUser) {
            let card = { title: title, points: points, id: id };
            let data = JSON.parse(localStorage.getItem(studyType));
            let index = data.map((d, i) => {
                if (d.id == id) {
                    return i
                }
            });
            data[index] = card;
            localStorage.setItem(studyType, JSON.stringify(data));
            setCard(data);
        } else{
            await updateCardFB(id, studyType, title, points);
        }

        setModalOn(false);
    }

    const addPoint = (text) => {
        let temp = [...points];
        temp.push(text);
        setPoints(temp);
        setNewPoint("");
    }


    const removeFromList = (index) => {
        let temp = [...points];

        let filtered = temp.filter((l, i) => {
            return i !== index;
        })
        setPoints(filtered);
    }


    const setAPoint = (index, value) => {
        let newValue = [...points];
        newValue[index] = value;
        console.log(points);
        setPoints(newValue);
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
            {points && <div className="flex h-screen justify-center items-center">
                <div className="flex flex-col bg-gray-700 lg:w-1/2 lg:h-1/2 h-1/2 w-3/4   border-4 rounded-xl" ref={clickRef}>
                    {title && <input type="text" className="mt-10 bg-transparent text-gray-200 border-b w-full text-center text-2xl p-3 focus:outline-none"
                        placeholder="Title..." value={title} onChange={(e) => {
                            setTitle(e.target.value)
                        }}></input>}
                    <ul className="mt-6 list-disc ml-2 text-gray-200">
                        {points.map((l, i) => {
                            return (
                                <div className="flex" key={i}>
                                    <button className="mr-10" onClick={() => removeFromList(i)}>-</button>
                                    <li>
                                        <Input point={l} index={i} setAPoint={setAPoint} />
                                    </li>
                                </div>
                            )
                        })}
                        <ul className="flex ml-12 list-disc text-gray-200 w-full">
                            <li className="w-full" >
                                <input type="text" className=" bg-transparent text-gray-200 w-full focus:outline-none"
                                    value={newPoint}
                                    placeholder="Text..."
                                    onChange={(e) => {
                                        setNewPoint(e.target.value);
                                    }}
                                >

                                </input>
                            </li>
                        </ul>
                        <button className="ml-8 mt-2 text-lg" onClick={() => {
                            addPoint(newPoint)
                        }}>+</button>
                    </ul>
                    <div className="absolute ml-auto mr-auto top-2/3 text-2xl left-0 right-0 text-center text-gray-200">
                        <button className="" onClick={() => {
                            updateCard();
                        }}>Save</button>
                    </div>

                </div>

            </div>}
        </div>
    )
}