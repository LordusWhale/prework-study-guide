import nookies from 'nookies';
import { verifyIdToken } from "../firebase/firebaseAdmin";
import { getCards } from "../firebase/functions";
import { StudyPage } from "../components/StudyPage";

export default function html({cards}) {

    return (
       <StudyPage cards={cards} studyType="html" />
    )
}

export async function getServerSideProps(ctx){
    const temp = [{title: 'HTML', points: ["Add", "Points"]}]
    const cookies = nookies.get(ctx);

    if (cookies.token !== 'null'){
        const token = await verifyIdToken(cookies.token);
        const {uid} = token;
        const data = await getCards("html", uid)
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
