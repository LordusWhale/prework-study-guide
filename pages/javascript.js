import { getCards } from "../firebase/functions";
import { StudyPage } from "../components/StudyPage";
import { useEffect, useState } from 'react';
import { getAuth } from "firebase/auth"
import { Spinner } from '../components/Spinner';



export default function Javascript() {

    const [cards, setCards] = useState([{ title: 'JAVASCRIPT', points: ["Add", "Points"], id: 1 }])
    const [loading, setLoading] = useState(true);

    const getData = async () => {
        const user = getAuth();
        if (user.currentUser) {
            const data = await getCards("javascript", user.currentUser.uid);
            setCards(data);
        } else{
            const data = localStorage.getItem("javascript");
            if (data){
                setCards(JSON.parse(data));
            }
        }
        setLoading(false);

    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <>
            {loading ? <Spinner page={true} /> :
                <StudyPage cards={cards} studyType="javascript" />}
        </>

    )
}