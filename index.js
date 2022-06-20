import express  from "express";
import cors from "cors";
import bodyParser from "body-parser";
import {db} from '../agile-data/firebase'
import { doc, setDoc, getDoc, collection } from 'firebase/firestore'


const app = express()
app.use(bodyParser)
app.use(cors())

//use to grab data from albums
// const getUserIdFromAlbums = async function () {
//     const albumsRef = await db.collection('albums').get();
//     const docSnap = await getDoc(docRef);
// }
app.get('/albums', async (req, res) => {
    const collRef = collection(db, 'albums')
    const collSnap = await getDoc(collRef)
    console.log(collSnap)
})

//update doc photo and add a user id that matches the useres id for each photo
//get userID where photos.albumId = albums.id
app.post('/addUserId', (req, res) => {
    const reqBod = req.body
    const docRef = doc(db, 'photos', 'userId')
    
    // await set(docRef,{...reqBod})
})

// import { doc, setDoc } from "firebase/firestore"; 

// const cityRef = doc(db, 'cities', 'BJ');
// setDoc(cityRef, { capital: true }, { merge: true });
app.listen(3000,() =>{
    console.log('port 3000 heard you!')
    
})
