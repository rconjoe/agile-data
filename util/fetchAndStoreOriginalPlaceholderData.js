import { db } from '../firebase';
import { collection, addDoc } from "firebase/firestore"; 
import express from 'express';
import cors from 'cors';
import { async } from '@firebase/util';
const app = express()
const router = express.Router()

app.use(cors())
app.use(bodyParser.json())// for endpoints

app.post('https://jsonplaceholder.typicode.com/posts',async(req,res) =>{
    const reqBod = req.body
    const docRef = doc(firestore, "placeholder", reqBod.name);
    await setDoc(docRef,{...reqBod})   
    res.send('Data Recieved in DB')
    console.log()
});

// fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: 'POST',
//   body: JSON.stringify({
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));