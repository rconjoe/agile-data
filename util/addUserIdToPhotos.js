import { db } from '../firebase.js'
import { collection, getDocs, updateDoc , doc, setDoc} from "firebase/firestore"; 

//PULLING ALL USERIds FROM ALBUMS COLLECTION
async function UserIdFromAlbums() {
    const querySnapshot = await getDocs(collection(db, "albums"));
    
    querySnapshot.forEach((doc) => {
    console.log(doc.data().userId);
    return doc.data().userId
    });
}
// UserIdFromAlbums()

async function getAlbumIdFromAlbums() {
    const querySnapshot = await getDocs(collection(db, "albums"));
    querySnapshot.forEach((doc) => {
    console.log(doc.data().id);
    return doc.data().id
    });
}
// getAlbumIdFromAlbums()
// const cityRef = doc(db, 'cities', 'BJ');
// setDoc(cityRef, { capital: true }, { merge: true });
//ADD USERID TO PHOTOS
async function setUserIdToPhotoColl() {
    const albumsSnapShot = await getDocs(collection(db, "albums"));
    const photoRef = doc(db, "photos", "userId");
    albumsSnapShot.forEach((doc => {
        setDoc(photoRef, { merge: true });
    }))
    console.log(photoRef)
    // await updateDoc(photoRef, {
    // userId: UserIdFromAlbums
    // });

}
setUserIdToPhotoColl()