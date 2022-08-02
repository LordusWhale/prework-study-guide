
import { useEffect, useState } from "react";



export const Input = ({point, index, setAPoint}) =>{
    const [text, setText] = useState(point)
    useEffect(()=>{
        setText(point)
    }, [point])

    
    const setPoint = (someText) =>{
        setAPoint(index, someText);
        setText(someText)
    }
    return(
        <input className=" bg-transparent text-gray-200 w-full focus:outline-none" type="text" value={text} onChange={(e)=>{
            setPoint(e.target.value)
        }} />
    )
}