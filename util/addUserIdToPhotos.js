import { db } from '../firebase.js'
import { collection, getDoc, updateDoc , doc, setDoc} from "firebase/firestore"; 

//PULLING ALL USERIds FROM ALBUMS COLLECTION
async function UserIdFromAlbums() {
    const querySnapshot = await getDocs(collection(db, "albums"));
    
    querySnapshot.forEach((doc) => {
    console.log(doc.data().userId);
    return doc.data().userId
    });
}
// UserIdFromAlbums()
let albumData = []
async function getAlbumIdFromAlbums() {
    const querySnapshot = await getDocs(collection(db, "albums"));
    querySnapshot.forEach((doc) => {
    // console.log(doc.data().id);
    albumData.push(doc.data().id)
    });
}

// const cityRef = doc(db, 'cities', 'BJ');
// setDoc(cityRef, { capital: true }, { merge: true });
//ADD USERID TO PHOTOS
async function setUserIdToPhotoColl() {
    let albumArr = []
    let photoArr = []
//50
    for (let i = 1; i < 50; i++){
        const photosSnapShot = await getDoc(doc(db, "photos", `${i}`));
        const albumsSnapShot = await getDoc(doc(db, "albums", `${photosSnapShot.data().albumId}`));
        
        setTimeout(async () => {
            await updateDoc(photosSnapShot.ref, {
            userId: albumsSnapShot.data().userId
            });

        },1000)

    }
    // 

    //USED TO EXTRACT ALL OF THE DATA TO ITERATE OVER    
    //itereate only 5 times
//         albumArr.push(doc.data())
// ]    falbumsSnapShot((doc => { 

        
//     }))
    // photosSnapShot.forEach((doc) => {
    //     photoArr.push(doc.data())
    // })
    // // if album id === photos albumid update photo using album user.id
    // for (let i = 1; i < 5000; i++){
    //     const albumId = photoArr[i].albumId
    //     if (!albumArr[albumId]) {
    //         console.log(albumId)
    //     }
    //     const userId = albumArr[albumId].userId

    //     const updatedPhoto = {
    //         ...photoArr[i],
    //         userId //when user
    //     }
    //     console.log(updatedPhoto)
    //         // await updateDoc(photoRef, {
    //         //    userId: albumArr[i].userId
    //         // });

        
        
    // }

}
  
 setUserIdToPhotoColl()

// updateUser() {
//         this.db.collection('yourDbCollection').doc('ifYourIdCostumized').update({
//             age: newAgeHere
//         })
//             .then(function () {
//                 console.log("Document successfully updated!");
//             }).catch(function (error) {
//                 console.error("Error removing document: ", error);

//             });
//     }