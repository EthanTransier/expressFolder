const express = require('express');
const app = express();

// req ==> middleware ==> res



app.get('/', logger, (req, res, next) =>{
    res.send("Home")
})

app.listen(5000, () =>{
    console.log("listening on port 5000")
})