const express = require("express");
const databaseConnection = require("./database");

//database connection
databaseConnection();

const app = express();

app.get("/", (req, res)=>{
    res.send("Hello World");
});

app.listen(8000, ()=>{
    console.log("Port is listening on 8000");
})