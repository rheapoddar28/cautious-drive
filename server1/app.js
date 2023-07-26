const dotenv=require("dotenv");
//const mongoose=require('mongoose');
const express= require('express');
const app=express();

dotenv.config({path:'./config.env'});
require("./db/connection");
//const User=require('./model/AccSchema');

app.use(express.json())
app.use(require('./router/auth'));
const PORT=process.env.PORT;


/*app.get('/', (req,res)=>{
    res.send("Hello world");
})
const middleware=(req, res,next)=>{
    console.log("hello middleware");
    next();
}

app.get('/about', middleware, (req,res)=>{
    res.send("Hello world from contacts");
})*/

app.listen(PORT,()=>{
    console.log("Server is running ")
}) 
