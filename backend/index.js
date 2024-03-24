const port = 4000;
const express = require("express");
const app = express();
const mongoose  = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");

const path = require("path");
const cors = require("cors");

app.use(express.json());
app.use(cors());

//database connection with mongodb

mongoose.connect("mongodb+srv://shreyashtidke751:shreyash@cluster0.xnavpma.mongodb.net/Ecommerce")

//API Creation

app.get("/",(req,res)=>{
    res.send("Express app is running")
})


//Image Storage Engine







app.listen(port,(error)=>{
    if(!error){
        console.log("Server Running on port "+port)
    }
    else{
        console.log("Error : "+error)
    }
})