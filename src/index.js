import express from 'express'
import dotenv from "dotenv"
import connectDB from "./db/index.js";
const app = express()

dotenv.config({
    path : './env'
})

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000 , () => {
        console.log(`server is running on port ${process.env.PORT}`);
    })
})
.catch(
    (error) => {
        console.log("mogoodb connection error : " , error);
    }
)

/*
const app = express()

;(async() => {
    try {
       await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
       app.on("error" , (error) => {
        console.log("error : back end server is not able to communicate")
        throw error 
       })

       app.listen(process.env.PORT , () => {
        console.log(`server is running on port ${process.env.PORT}`)
       })
    } catch (error) {
        console.error("ERROR  : " , error)
        throw err
    }
})()

*/