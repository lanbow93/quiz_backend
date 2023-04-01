import express, {  Response } from "express";
import Quiz from "../models/quiz";
import userLoggedIn from "../utils/UserVerified";

const router = express.Router();

// Index
router.get("/", async (request:any , response: Response) => {
    try{
        const quizzes = await Quiz.find({isPublic: true}).sort({"title": 1})
        response.json(quizzes)
    } catch(error) {
        response.status(400).json({error})
    }
})

// Access specific quiz after verified
router.get("/access/:id", userLoggedIn, async (request: any, response: Response) => {
    try{
        const quiz = await Quiz.findOne({_id: request.params.id});
        response.json(quiz)
    } catch(error) {
        response.status(400).json({error})
    }
})

export default router