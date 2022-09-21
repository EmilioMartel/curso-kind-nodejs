const express = require('express');

const app = express();


//rutas
app.get("/", async(req, res) => {
    res.send("hello world desde kubernetes en la version 0.0.3");
})

app.listen(3000, () => {
    console.log("the app is running on port 3000");
})