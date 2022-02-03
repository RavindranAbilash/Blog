const express = require('express');

const app= express();
const dotenv = require('dotenv');
const mongoose = require('mongoose')


dotenv.config(); 

mongoose.connect(process.env.MONGO_URL,()=>console.log("mongodb connected"))




app.listen('5000',()=>{
    console.log('back connected')
})