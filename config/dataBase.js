const mongoose = require ('mongoose')
const URL = (process.env.DB_URL)


const connectDB = () =>{
    try {
        mongoose.set ('strictQuery',false)
        mongoose.connect(URL)
        console.log("Connected to DB successfully");
    } catch (error) {
        // console.log(error);
    }
}
module.exports =connectDB