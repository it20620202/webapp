const express= require("express");
const mongoose= require("mongoose");
const dotenv= require("dotenv");
const bodyParser= require("body-parser");
const cors= require("cors");
const app= express();
require("dotenv").config();

const PORT = process.env.PORT|| 8070;
app.use(cors());
app.use(express.json());

const URL=process.env.MONGODB_URL;
mongoose.connect(URL,
    {
        useCreateIndex: true,
        useNewUrlParser:true,
        useUnifiedTopologyL:true,
        usrFindAndModify:true
    })
const connection=mongoose.connection;
connection.once("open",()=>{
    console.log("MongoDB Connection successfull");
})
app.listen(PORT,()=>{
console.log('Server is up and running onport number:${PORT}')
})