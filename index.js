const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  res.json({ message: "ok" });
});
app.post('https://jsonplaceholder.typicode.com/posts',async(req,res) =>{
    const reqBod = req.body
    const docRef = doc(firestore, "placeholder", reqBod.name);
    await setDoc(docRef,{...reqBod})   
    res.send('Data Recieved in DB')
    console.log(reqBod)
});






app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
