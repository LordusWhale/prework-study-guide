import { getCards } from "../firebase/functions";
import { StudyPage } from "../components/StudyPage";
import { useEffect, useState } from 'react';
import { getAuth } from "firebase/auth"
import { Spinner } from '../components/Spinner';



export default function html() {

    const [cards, setCards] = useState([])
    const [loading, setLoading] = useState(true);
    const user = getAuth();
    const getData = async () => {
        
        if (user.currentUser) {
            const data = await getCards("html", user.currentUser.uid);
            setCards(data);
            setLoading(false);
        } else {
            setCards([{ title: 'HTML', points: ["Add", "Points"], id: 1 }])
            setLoading(false)
        }
    }
    useEffect(() => {
        getData();
    }, [])

    return (
        <>
            {loading ? <Spinner page={true}/> :
                <StudyPage cards={cards} studyType="css" />}
        </>

    )
}