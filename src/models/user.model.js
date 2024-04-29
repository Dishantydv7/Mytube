import mongoose , {Schema, mongo} from "mongoose"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

const userModel =  new mongoose.Schema({
    username : {
        type : String , 
        required : true , 
        lowercase : true , 
        trim : true , 
        unique : true , 
        index : true
    },
    email : {
        type : String , 
        required : true , 
        lowercase : true , 
        trim : true , 
        unique : true , 
    },
    fullname : {
        type : String , 
        required : true ,  
        trim : true ,  
        index : true
    } , 
    avatar : {
        type : String ,  // will use cloudinary url
        required : true , 
    }, 
    coverImage : {
        type : String ,  // will use cloudinary url
    } , 
    watchHistory : [
        {
            type : mongoose.Schema.Types.ObjectId , 
            ref : "Video"
        } 
    ] , 
    password : {
        type : String , 
        required : [true  , "Password is required"]
    } , 
    refreshToken : {
        type : String , 

    }
} , {timestamps : true})

userModel.pre("save" , async function (next) {
    if (!this.isModified("password")) {
        return next() ;
    }
    this.password = bcrypt.hash(this.password , 8)
    next()
} )

// now designing custom methods

userModel.methods.isPasswordCorrect = async function(password) {
    return await  bcrypt.compare("password ",this.password )
}

userModel.methods.generateAccessToken = function () {
       return  jwt.sign(
           {
               _id: this._id,
               email: this.email,
               username: this.username,
               fullname: this.fullname
           },
           process.env.ACCESS_TOKEN_SECRET,
           {
               expiresIn: process.env.ACCESS_TOKEN_EXPIRY
           }
       )
} 
userModel.methods.generateRefreshToken = function () {
    return  jwt.sign(
           {
               _id: this._id,
           },
           process.env.REFRESH_TOKEN_SECRET,
           {
               expiresIn: process.env.REFRESH_TOKEN_EXPIRY
           }
       )
} 

export const User = mongoose.model("User" , userModel )