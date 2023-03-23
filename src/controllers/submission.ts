import express, {  Response } from "express"
import adminLoggedIn from "../utils/AdminLoggedIn"
import Submission from "../models/submission"

const router = express.Router()


// Index
router.get("/index/:id", adminLoggedIn, async (request:any, response: Response) => {
    try{
        const submissions = await Submission.find({_id: request.params.id})
        response.json(submissions)
    } catch(error) {
        response.status(400).json({error})
    }
})


// Destroy
router.delete("/:id" , adminLoggedIn, async (request:any, response: Response) => {
    try{
        const submission = await Submission.deleteOne({_id: request.params.id})
        response.json(submission)
    } catch(error) {
        response.status(400).json({error})
    }
})

// Create
router.post("/", async (request:any, response: Response) => {
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
        const username = request.payload.username
        const submission = await Submission.findOne({username, _id: request.params.id})
        response.json(submission)
    } catch(error) {
        response.status(400).json({error})
    }
})


export default router;