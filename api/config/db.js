const mongoose = require("mongoose");


const connectDB = async() =>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log("Mongo DB is connected");
    } catch (error) {
        consple.log(error);
    }
}

module.exports = connectDB;