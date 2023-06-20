const mongoose = require('mongoose');
const dotenv = require("dotenv").config();
const mongoURI =process.env.mongoURI

const connectToMongo = ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to Mongo Successfully");
    })
}

module.exports = connectToMongo;