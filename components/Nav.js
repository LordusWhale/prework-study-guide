import Link from "next/link"
import { useState } from "react";
import { Login } from "./Login";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth"
import { auth } from "../firebase/firebase";
import { useAuth } from "./Auth";
export const Nav = () => {
    const [menu, setMenu] = useState(true)
    const { currentUser } = useAuth();
    const [modalOn, setModalOn] = useState(false);

    const logout = async () => {
        const authGet = getAuth();
        await signOut(authGet).then(() => {
            console.log("success")
        })
        location.reload();
    }

    const clicked = () => {
        setModalOn(true)
    }


    return (
        <div>
            <nav className="hidden lg:flex w-full h-28 bg-gray-900 justify-between items-center">
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
                    onClick={() => currentUser ? logout() : clicked()}>{currentUser ? "Logout" : "Login"}</button>
                {modalOn && <Login setModalOn={setModalOn} />}

            </nav>
            <nav className="lg:hidden flex bg-gray-900 w-full py-10 justify-between p-5 text-gray-200">
            <Link href="/" className="text-white font-bold text-xl  ">
                    <a className="text-white font-bold text-3xl">STUDY GUIDE</a>
                </Link>
                <button className='md:hidden' onClick={() => setMenu(prev => !prev)}>
                    {menu ? <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                        : <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>}
                </button>
                {modalOn && <Login setModalOn={setModalOn} />}
            </nav>
            {menu ? <></> :

                <ul className='lg:hidden absolute flex w-full flex-col text-left px-10 py-5 gap-4 z-30 bg-gray-900'>
                    <Link href="/html" >
                        <a className="p-3 bg-gray-300 text-black rounded-md " onClick={() => {
                            setMenu(true)
                        }} >HTML</a>
                    </Link>
                    <Link href="/css" >
                        <a className="p-3 bg-gray-300 text-black rounded-md "onClick={() => {
                            setMenu(true)
                        }}>CSS</a>
                    </Link>
                    <Link href="/javascript" >
                        <a className="p-3 bg-gray-300 text-black rounded-md " onClick={() => {
                            setMenu(true)
                        }}>JAVASCRIPT</a>
                    </Link>
                    <Link href="/git">
                        <a className="p-3 bg-gray-300 text-black rounded-md " onClick={() => {
                            setMenu(true)
                        }}>GIT</a>
                    </Link>
                    <button className="p-3 bg-blue-900 text-white rounded-md"
                        onClick={() => currentUser ? logout() : clicked()}>
                        {currentUser ? "Logout" : "Login"}
                    </button>
                </ul>
            }
        </div>
    )
}