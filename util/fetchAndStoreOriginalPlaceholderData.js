import fetch from 'node-fetch' //MUST DOWNLOAD FOR NODE TO USE HTTP REQUEST FECTH FUNCTION
import { db } from '../firebase.js'
import { doc, setDoc } from 'firebase/firestore'

//STORING DATA TO FIRESTORE FROM A API CALL

//POST
fetch('https://jsonplaceholder.typicode.com/posts') //API CALL
    .then((response) => response.json()) //TURNING RESPONSE TO A JSON() FILE
    .then((posts) => { // USING POST TO DESCRIBE DATA
        posts.forEach(async post => { //LOOPING THRU DATA TO SET EACH AS ITS OWN FILE IN FIRESTORE
        const refDoc = doc(db, 'posts', JSON.stringify(post.id)) // doc(NAME OF DATABASE(exported in firebase.js), RANDOM COLLECTION NAME, ID DATA FROM JSON RESONSE)
        await setDoc(refDoc,{...post}) //SETTING DOC TO FIRESTORE
    });
    })

//COMMENTS
fetch('https://jsonplaceholder.typicode.com/comments')
    .then((response) => response.json())
    .then((comments) => {
        comments.forEach(async comment => {
        const refDoc = doc(db, 'comments', JSON.stringify(comment.id))
        await setDoc(refDoc,{...comment})
    });
})

//ALBUMS
fetch('https://jsonplaceholder.typicode.com/albums')
    .then((response) => response.json())
    .then((albums) => {
        albums.forEach(async album => {
        const refDoc = doc(db, 'albums', JSON.stringify(album.id))
        await setDoc(refDoc,{...album})
    });
    })

//PHOTOS
fetch('https://jsonplaceholder.typicode.com/photos')
    .then((response) => response.json())
    .then((photos) => {
        photos.forEach(async photo => {
        const refDoc = doc(db, 'photos', JSON.stringify(photo.id))
        await setDoc(refDoc,{...photo})
    });
})

//TODOS
fetch('https://jsonplaceholder.typicode.com/todos')
    .then((response) => response.json())
    .then((todos) => {
        todos.forEach(async todo => {
        const refDoc = doc(db, 'todos', JSON.stringify(todo.id))
        await setDoc(refDoc,{...todo})
    });
})

//USERS
fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => {
        users.forEach(async user => {
        console.log(user)
        const refDoc = doc(db, 'user', JSON.stringify(user.id))
        await setDoc(refDoc,{...user})
    });
})

