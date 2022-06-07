import { db } from '../firebase';
import { collection, addDoc } from "firebase/firestore"; 
import express from 'express';
import cors from 'cors';
import { async } from '@firebase/util';
const app = express()
const router = express.Router()

app.use(cors())

router.post('/', async function (req, res) {
    app.get('https://jsonplaceholder.typicode.com/posts', {

    })
})

try {
  const docRef = await addDoc(collection(db, "placeholder"), {
    
  });
  console.log("Document written with ID: ", docRef.id);
} catch (e) {
  console.error("Error adding document: ", e);
}

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