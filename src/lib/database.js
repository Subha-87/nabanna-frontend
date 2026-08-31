const mongoose = require('mongoose');
//const path = require('path');
const MONGO_URI = process.env.MONGODB_URI

//require('dotenv').config({path:'../.env.local'});
const connectDB = async() => {
     try {
        if(!MONGO_URI){
            throw new Error("MONGO_URI is not defined in environment variables")
        }
        const conn = await mongoose.connect(MONGO_URI)
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error("DataBase Connection Error:", error.message);
        process.exit(1);
    }
}

module.exports = connectDB
module.exports.default = connectDB