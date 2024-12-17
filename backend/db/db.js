import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config()

function connectToDb(){
    mongoose.connect(process.env.DB_CONNECT)
    .then(() => {
        console.log("connected to db")
    })
    .catch(err => {
        console.log("some error")
        console.log(err)
    }) 

}

export default connectToDb;