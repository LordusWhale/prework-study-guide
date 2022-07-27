import Link from "next/link"



export const Nav = () =>{
    return(
        <nav className="flex w-full h-28 bg-black justify-between items-center">
            <Link href="/" className="text-white font-bold text-3xl text-center p-10">
                <a className="text-white font-bold text-3xl text-center p-10">STUDY GUIDE</a>
            </Link>
           
            
            <div className="text-white pr-20">
                <Link href="#" className="p-4 m-6 text-lg rounded-lg px-7 duration-500 hover:bg-red-900">
                    <a className="p-4 m-6 text-lg rounded-lg px-7 duration-500 hover:bg-red-900 ">HTML</a>
                </Link>
                <Link href="#" className="p-4 m-6 text-lg rounded-lg px-7 duration-500 hover:bg-red-900">
                    <a className="p-4 m-6 text-lg rounded-lg px-7 duration-500 hover:bg-red-900 ">CSS</a>
                </Link>
                <Link href="#" className="p-4 m-6 text-lg rounded-lg px-7 duration-500 hover:bg-red-900">
                    <a className="p-4 m-6 text-lg rounded-lg px-7 duration-500 hover:bg-red-900 ">JAVASCRIPT</a>
                </Link>
                <Link href="#" className="p-4 m-6 text-lg rounded-lg px-7 duration-500 hover:bg-red-900">
                    <a className="p-4 m-6 text-lg rounded-lg px-7 duration-500 hover:bg-red-900 ">GIT</a>
                </Link>
                
                
            </div>
            <Link href="#" className="p-4 text-white text-lg rounded-lg mr-20 duration-500 bg-red-900 hover:translate-y-1 ">
                <a className="p-4 text-white text-lg rounded-lg mr-20 duration-500 bg-red-900 hover:translate-y-1 ">LOGIN</a>
            </Link>
        </nav>
    )
}