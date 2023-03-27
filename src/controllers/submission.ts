import express, {  Request, Response } from "express"
import adminLoggedIn from "../utils/AdminLoggedIn"
import Submission from "../models/submission"
import Quiz from "../models/quiz"
import userLoggedIn from "../utils/UserVerified"

const router = express.Router()

// Index
router.get("/index/:id", adminLoggedIn, async (request:any, response: Response) => {
    try{
        const submissions = await Submission.find({quizID: request.params.id})
        response.json(submissions)
    } catch(error) {
        response.status(400).json({error})
    }
})


// Destroy
router.delete("/:id" , adminLoggedIn, async (request: Request, response: Response) => {
    try{
        const submission = await Submission.deleteOne({_id: request.params.id})
        response.json(submission)
    } catch(error) {
        response.status(400).json({error})
    }
})

// Create
router.post("/", async (request: Request, response: Response) => {
    try{
        const submission = await Submission.create(request.body)
        response.json(submission)
    } catch(error) {
        response.status(400).json({error})
    }
})


// Show
router.get("/view/:id", adminLoggedIn, async (request:any, response: Response) => {
    try{
        const submission = await Submission.findOne({ _id: request.params.id})
        response.json(submission)
    } catch(error) {
        response.status(400).json({error})
    }
})

// Access specific quiz after verified
router.get("/access/:id", userLoggedIn, async (request: any, response: Response) => {
    try{
        const quiz = await Quiz.find({_id: request.params.id});
        response.json(quiz)
    } catch(error) {
        response.status(400).json({error})
    }
})


export default router;