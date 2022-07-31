import { signInWithPopup } from "firebase/auth";
import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import { GoogleAuthProvider } from 'firebase/auth';
import { auth, db } from "./firebase";



export async function login() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
        .then(async (result) => {
            const user = result.user;
            try {
                const studyTypes = ["html", "css", "javascript", "git"]
                await setDoc(doc(db, "users", user.uid), {
                    uid: user.uid,
                    photoUrl: user.photoURL
                });
                for (let i = 0; i< studyTypes.length; i++){
                    await addCard(studyTypes[i], "Press the + button to add a card", ["Add", "Some", "Points"])
                }
            } catch (e) {
                console.error("Error adding document: ", e);
            }
        }).catch((error) => {
            const credential = GoogleAuthProvider.credentialFromError(error);

        })
}

export async function addCard(typeOfStudy, title, points) {
    const newCard = doc(collection(db, `users/${auth.currentUser.uid}/${typeOfStudy}`))
    try {
        await setDoc(newCard, {
            title: title,
            points: points,
            id: newCard.id
        })
    } catch(error){
       console.log(error.message)
    }
}

export async function getCards(typeOfStudy, uid){
    let cards = [];
    const getCardSnapshot = getDocs(collection(db, `users/${uid}/${typeOfStudy}`));

    (await getCardSnapshot).forEach((doc)=>{
        cards.push(doc.data())
    })


    return cards;

}