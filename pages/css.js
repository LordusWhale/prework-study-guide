import { getCards } from "../firebase/functions";
import { StudyPage } from "../components/StudyPage";
import { useEffect, useState } from 'react';
import { getAuth } from "firebase/auth"
import { Spinner } from '../components/Spinner';
import Head from "next/head";

export default function Css() {

    const [cards, setCards] = useState([{ title: 'CSS', points: ["Add", "Points"], id: 1 }])
    const [loading, setLoading] = useState(true);

    const getData = async () => {
        const user = getAuth();
        if (user.currentUser) {
            const data = await getCards("css", user.currentUser.uid);
            setCards(data);
            setLoading(false);
        } else{
            const data = localStorage.getItem("css");
            if (data){
                setCards(JSON.parse(data));
            }else{
                localStorage.setItem("css", JSON.stringify(cards))
            }
        }
        setLoading(false)

    }
    useEffect(() => {
        getData();
    }, [])

    return (
        <>
        <Head>
            <title>Css</title>
        </Head>
            {loading ? <Spinner page={true} /> :
                <StudyPage cards={cards} studyType="css" />}
        </>

    )
}

