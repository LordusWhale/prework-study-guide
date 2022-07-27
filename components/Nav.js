import Link from "next/link"



export const Nav = () =>{
    return(
        <nav className="flex w-full h-28 bg-black justify-between items-center">
            <h1 className="text-white font-bold text-3xl text-center p-10">Study Guide</h1>
            <ul className="text-white pr-20">
                <a href="#" className="p-4 m-6 text-lg rounded-lg px-7 duration-500 hover:bg-red-900 ">
                <Link href="#">HTML</Link>
                </a>
                <a href="#" className="p-4 m-6 text-lg rounded-lg px-7 duration-500 hover:bg-red-900 ">
                <Link href="#">CSS</Link>
                </a>
                <a href="#" className="p-4 m-6 text-lg rounded-lg px-7 duration-500 hover:bg-red-900 ">
                <Link href="#">JAVASCRIPT</Link>
                </a>
                <a href="#" className="p-4 m-6 text-lg rounded-lg px-7 duration-500 hover:bg-red-900 ">
                <Link href="#">GIT</Link>
                </a>
                
                
            </ul>
            <a href="#" className="p-4 text-white text-lg rounded-lg mr-20 duration-500 bg-red-900 hover:translate-y-1 ">
                <Link href="#">Login</Link>
            </a>
        </nav>
    )
}