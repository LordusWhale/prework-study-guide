export const DeleteModal = ({setModal}) =>{
    return(
        <div className="bg-zinc-900 opacity-90 fixed inset-0 z-50">
        <div className="flex h-screen justify-center items-center">
            <div className="flex-col justify-center bg-gray-400 py-20 px-5  rounded-xl ">
                <div className="flex text-lg text-black mb-10">Are you sure you want to delete?</div>
                <div className="flex flex-row justify-center gap-3">
                    <button className="bg-gray-900 w-20 h-8 text-lg rounded-md ">Yes</button>
                    <button className="bg-gray-900 w-20 h-8 text-lg rounded-md" onClick={()=>setModal(false)}>Cancel</button>
                </div>
            </div>
        </div>
    </div>
    )
}