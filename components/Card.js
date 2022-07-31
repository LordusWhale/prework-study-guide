

export const Card = ({heading, body}) =>{

    return(
        <div className="flex flex-col bg-gray-700 shadow-sm shadow-gray-400 p-4 rounded-lg text-gray-200 max-h-96">
            <h1 className="font-bold text-3xl  border-b p-4">{heading}</h1>
            <ul className="p-10">
               {body.map((b, i)=>{
                return(
                    <li key={i} className="text-xl list-disc">{b}</li>
                )
               })}
            </ul>
        </div>
    )
}