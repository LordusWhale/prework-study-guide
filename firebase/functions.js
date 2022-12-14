import { signInWithPopup } from "firebase/auth";
import { collection, doc, getDocs, setDoc, deleteDoc, getDoc, updateDoc } from "firebase/firestore";
import { GoogleAuthProvider } from 'firebase/auth';
import { auth, db } from "./firebase";

//functions for firebase login/database

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
            window.location.href = "/"

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

export async function getSingleCard(id, typeOfStudy){
    console.log(typeOfStudy)
    console.log(id)
   const docRef = doc(db, `users/${auth.currentUser.uid}/${typeOfStudy}/${id}`);
   const data = await getDoc(docRef);
   if (data.exists()){
    return data.data();
   }
   else{
    return [1, 2, 3]
   }
}

export async function deleteCardFB(typeOfStudy, docID){
    await deleteDoc(doc(db, `users/${auth.currentUser.uid}/${typeOfStudy}/${docID}`))
}

export async function updateCardFB(docID, typeOfStudy, title, points){
    const docRef = doc(db, `users/${auth.currentUser.uid}/${typeOfStudy}/${docID}`);

    await updateDoc(docRef, {
        title: title,
        points: points
    })
}