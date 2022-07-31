import Link from "next/link"
import { useState } from "react";
import { Login } from "./Login";
import {getAuth, onAuthStateChanged, signOut} from "firebase/auth"
import { auth } from "../firebase/firebase";
import { useAuth } from "./Auth";
export const Nav = () =>{

    const {currentUser} = useAuth();
    const [modalOn, setModalOn] = useState(false);
   
    const logout =  async () =>{
        const authGet = getAuth();
       await signOut(authGet).then(()=>{
            console.log("success")
        })
       location.reload();
    }

    const clicked = () =>{
      setModalOn(true)
    }


    return(
        <nav className="flex w-full h-28 bg-gray-900 justify-between items-center">
            <Link href="/" className="text-white font-bold text-3xl text-center p-10 ">
                <a className="text-white font-bold text-3xl text-center p-10">STUDY GUIDE</a>
            </Link>
           
            
            <div className="text-white pr-20">
                <Link href="/html" className="p-4 m-6 text-lg rounded-lg px-7 duration-500 hover:bg-slate-300 hover:text-black">
                    <a className="p-4 m-6 text-lg rounded-lg px-7 duration-500 hover:bg-slate-300 hover:text-black ">HTML</a>
                </Link>
                <Link href="/css" className="p-4 m-6 text-lg rounded-lg px-7 duration-500 hover:bg-slate-300 hover:text-black">
                    <a className="p-4 m-6 text-lg rounded-lg px-7 duration-500 hover:bg-slate-300 hover:text-black ">CSS</a>
                </Link>
                <Link href="/javascript" className="p-4 m-6 text-lg rounded-lg px-7 duration-500 hover:bg-slate-300 hover:text-black">
                    <a className="p-4 m-6 text-lg rounded-lg px-7 duration-500 hover:bg-slate-300 hover:text-black ">JAVASCRIPT</a>
                </Link>
                <Link href="/git" className="p-4 m-6 text-lg rounded-lg px-7 duration-500 hover:bg-slate-300 hover:text-black">
                    <a className="p-4 m-6 text-lg rounded-lg px-7 duration-500 hover:bg-slate-300 hover:text-black ">GIT</a>
                </Link>
                
                
            </div>
            <button className="p-4 text-black text-lg rounded-lg mr-20 duration-500 bg-slate-300 hover:translate-y-1"
            onClick={()=>currentUser ? logout() : clicked()}>{currentUser ? "Logout" : "Login"}</button>
             {modalOn && <Login setModalOn={setModalOn} />}
        </nav>
    )
}