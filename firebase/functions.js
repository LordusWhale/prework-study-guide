import { signInWithPopup } from "firebase/auth";
import { collection, doc, getDocs, setDoc, deleteDoc } from "firebase/firestore";
import { GoogleAuthProvider } from 'firebase/auth';
import { auth, db } from "./firebase";



export async function login() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
        .then(async (result) => {
            const user = result.user;
            try {
                await setDoc(doc(db, "users", user.uid), {
                    uid: user.uid,
                    photoUrl: user.photoURL
                });
            } catch (e) {
                console.error("Error adding document: ", e);
            }

        }).catch((error) => {
            const credential = GoogleAuthProvider.credentialFromError(error);
            console.log(credential);
            console.log(error);
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

export async function deleteCardFB(typeOfStudy, docID){
    await deleteDoc(doc(db, `users/${auth.currentUser.uid}/${typeOfStudy}/${docID}`))
}