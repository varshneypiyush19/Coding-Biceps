const mongoose = require("mongoose")
// const DB_NAME ="newbackend";
require("dotenv").config();
const connectDb = async()=>{
    try {
        const connectionInstance = await mongoose.connect(process.env.MONGODB_URL)
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MONGODB connection FAILED ", error);
        process.exit(1)
    }
}
module.exports = connectDb;