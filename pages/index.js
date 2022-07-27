import Link from "next/link"
import { useEffect, useState } from "react"
import { Spinner } from "../components/Spinner"


export default function Home() {
  const [study, setStudy] = useState('')
  const [loading, setLoading] = useState(false)

  const getRandomTopic = async () => {
    setLoading(false)
    var check = study;
    console.log(check)
    const topics = ["html", "javascript", "css", "git"]
    var random = Math.floor(Math.random() * topics.length)
    if (topics[random] == check){
      getRandomTopic()
    } 
    setStudy(topics[random])
    await new Promise(r => setTimeout(r, 2000))
    setLoading(true)
  }

  useEffect(() => {

    getRandomTopic();

  }, [])
  return (
    <div className="flex justify-center items-center align-middle">
      <div className="mt-72 items-center justify-center flex flex-col">
        <h1 className="text-3xl text-center">Im studying...</h1>
        {loading ?
          <div className="flex items-center flex-col">
            <Link href={`/${study}`} className="mt-20 text-5xl text-red-600 font-bold underline uppercase">
              <a className="mt-20 text-5xl text-red-600 font-bold underline uppercase">{study}</a>
            </Link>
            {/* <p className="mt-20 text-5xl text-red-600 font-bold underline">{study}</p> */}
            <button className="mt-20 bg-black text-white text-2xl p-6 rounded-lg duration-300 hover:-translate-y-2"
              onClick={()=>getRandomTopic()}
            >
              Generate new
            </button>
          </div>
          :
          <Spinner />
         
        }
      </div>
    </div>
  )
}
