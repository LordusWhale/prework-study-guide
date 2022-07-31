import { login } from "../firebase/functions";
import GoogleImage from '../public/google-sign-in.png';
import Image from "next/dist/client/image";
export const Login = ({ setModalOn}) =>{
    const handleOKClick = async () =>{
        await login();
        setModalOn(false)
    }

    const handleCancleClick = () =>{
        setModalOn(false)
        console.log(Image)
    }
    return(
    <div className="bg-zinc-900 opacity-90 fixed inset-0 z-50">
        <div className="flex h-screen justify-center items-center">
            <div className="flex-col justify-center bg-gray-700 py-20 px-20 border-4 rounded-xl ">
               
                <div className="flex flex-col gap-3">
                   
                    <button 
                        onClick={()=>handleOKClick()}><Image src={GoogleImage} /></button>
                        
                    
                    <button className="rounded px-4 py-2 text-white bg-blue-500"
                    onClick={()=>handleCancleClick()}>Cancel</button>
                </div>
            </div>
        </div>
    </div>
    )
}