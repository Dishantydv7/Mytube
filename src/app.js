import express from 'express'
import cors from 'cors'

// to perform crud operations on cookies
import cookieParser from 'cookie-parser'

const app = express()

app.use(cors({
    origin : process.env.CORS_ORIGIN , 
    credentials : true 
}))

app.use(express.json({
    limit : "20kb"
}))
// how to handle url based data 
app.use(express.urlencoded({
    extended: true , 
    limit : "20kb"
}))

//  if i want to store public based assets such as any file , pdfs 

app.use(express.static("public"))

// to parse cookies
app.use(cookieParser())

export {app}