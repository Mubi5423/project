const mongoose = require("mongoose")

const connectDB = async() =>{
    try{
        mongoose.connect("mongodb://localhost:27017/web11",{

        });
        console.log("connect successfully");
    }catch(error){
        console.error("Connection failed");
    }
}
module.exports = connectDB