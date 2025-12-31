const mongoose = require("mongoose")

const databaseConnection = async ()=>{
   mongoose
   .connect("mongodb://localhost:27017/book")
   .then(()=>{
        console.log("Databse connected successfully")
   }).catch((err)=>{
        console.log("Database connectin failed", err)
   })
}
module.exports = databaseConnection;