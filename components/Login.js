import { login } from "../firebase/functions";
const googleSignIn = require('../public/google.png');
export const Login = ({ setModalOn}) =>{
    const handleOKClick = async () =>{
        await login();
        setModalOn(false)
    }

    const handleCancleClick = () =>{
        setModalOn(false)
    }
    return(
    <div className="bg-zinc-900 opacity-90 fixed inset-0 z-50">
        <div className="flex h-screen justify-center items-center">
            <div className="flex-col justify-center bg-white py-44 px-44 border-4 rounded-xl ">
                <div className="flex text-lg text-black mb-10">Sign in with Google</div>
                <div className="flex flex-col gap-3">
                    <button 
                        className="rounded px-4 py-2 text-white bg-green-400"
                        onClick={()=>handleOKClick()}>Sign in with Google</button>
                        
                    
                    <button className="rounded px-4 py-2 text-white bg-blue-500"
                    onClick={()=>handleCancleClick()}>Cancel</button>
                </div>
            </div>
        </div>
    </div>
    )
}