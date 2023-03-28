import express, { Request, Response, Router } from "express";
import User from "../models/user";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
import Quiz from "../models/quiz";
import { IUserObject, IUserPass } from "../utils/InterfacesUsed";


dotenv.config()

// create router
const router: Router = express.Router()


// Admin Signup Post
router.post("/signup", async (request: Request, response: Response) => {
    try{
        // Hash password
        request.body.password = await bcrypt.hash(request.body.password, await bcrypt.genSalt(10))

        // Generate user
        const user = await User.create(request.body)

        // Response
        response.json({status: "User Created", username: user})
    } catch (error) {
        response.status(400).json(error)
    }
})

// Admin Login Post
router.post("/login", async (request: Request, response: Response) => {
    try {

        const {username, password}: IUserPass = request.body

        //Check for user
        const user: IUserObject = await User.findOne({username})

        if (user){
            const passwordCheck: Boolean = await bcrypt.compare(password, user.password)
            if(passwordCheck) {
                const payload = {username}
                const token = await jwt.sign(payload, process.env.SECRET)
                response.cookie("token", token, {httpOnly: true}).json({payload, status: "logged in"})
            } else {
                response.status(400).json({error: "Password does not match"})
            }
        } else {
            response.status(400).json({error: "User does not exist"})
        }
    } catch(error) {
        response.status(400).json(error)
    }

}) 

// Admin Logout Post
router.post("/logout", async (request: Request, response: Response) => {
    response.clearCookie("token").json({response: "You are Logged Out"})
})

// User quiz verification Post

router.post("/verification/:id" ,async (request:any, response: Response) => {
    try{
        const {password} = request.body
        //Check for existing quiz
        const quiz = await Quiz.findOne({ _id: request.params.id})

        if (quiz) {
            const passwordCheck: Boolean = await bcrypt.compare(password, quiz.password)
            if(passwordCheck) {
                const payload = request.params.id
                const token = await jwt.sign(payload, process.env.SECRET)
                response.cookie("userToken", token, {
                    httpOnly: true,
                    path: "/"
                }).json({payload, status: "logged in"})
            } else {
                response.status(400).json({error: "Password does not match"})
            }
        } else {
            response.status(400).json({error: "Quiz does not exist"})
        }
    } catch(error) {
        response.status(400).json(error)
    }
})

export default router