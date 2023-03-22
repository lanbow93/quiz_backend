import express, {  Response } from "express"
import isLoggedIn from "../utils/isLoggedIn"
import Quiz from "../models/quiz"

const router = express.Router()

router.use(isLoggedIn)

// Index
router.get("/", async (request:any, response: Response) => {
    try{
        const username = request.payload.username
        const quizzes = await Quiz.find({username})
        response.json(quizzes)
    } catch(error) {
        response.status(400).json({error})
    }
})


// Destroy
router.delete("/:id" , async (request:any, response: Response) => {
    try{
        const username = request.payload.username
        request.body.username = username
        const quiz = await Quiz.deleteOne({_id: request.params.id, username})
        response.json(quiz)
    } catch(error) {
        response.status(400).json({error})
    }
})

// Update 
router.put("/:id", async (request:any, response: Response) => {
    try{
        const username = request.payload.username
        request.body.username = username
        const quiz = await Quiz.findByIdAndUpdate(request.params.id, request.body, {new: true} )
        response.json(quiz)
    } catch(error) {
        response.status(400).json({error})
    }
})

// Create
router.post("/", async (request:any, response: Response) => {
    try{
        const username = request.payload.username
        request.body.username = username
        const quiz = await Quiz.create(request.body)
        console.log(quiz)
        response.json(quiz)
    } catch(error) {
        response.status(400).json({error})
    }
})


// Show
router.get("/:id", async (request:any, response: Response) => {
    try{
        const username = request.payload.username
        const quiz = await Quiz.findOne({username, _id: request.params.id})
        response.json(quiz)
    } catch(error) {
        response.status(400).json({error})
    }
})


export default router;