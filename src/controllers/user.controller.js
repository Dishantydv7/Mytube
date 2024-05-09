
import asyncHandler from "../utils/asyncHandler.js"

const userRegister = asyncHandler(async (req, res) => {
    res.status(200).json({
        message : "ok"
    })
})

const loginRegister = asyncHandler(async (req , res) => {
    res.status(201).json({
        message : "Successfully logged in the User."
    })
})

const userChangePassword = asyncHandler(async (req , res) => {
    res.status(200).json({
        message : "Hello their, who are you ?"
    })
})