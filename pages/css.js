import nookies from 'nookies';
import { verifyIdToken } from "../firebase/firebaseAdmin";
import { getCards } from "../firebase/functions";
import { StudyPage } from "../components/StudyPage";


export default function css({cards}){
    
    return(
        <StudyPage cards={cards} studyType="css" />
    )
}

export async function getServerSideProps(ctx){
    const temp = [{title: 'CSS', points: ["Add", "Points"], id: 1}]
    const cookies = nookies.get(ctx);
    if (cookies.token !== 'null'){
        const token = await verifyIdToken(cookies.token);
        const {uid} = token;
        const data = await getCards("css", uid)
        return{
            props: {
                cards: data
            }
        }
    }
    return{
        props:{
            cards: temp
        }
    }
   
}