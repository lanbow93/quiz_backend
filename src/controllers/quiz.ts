import express, { Request, Response } from "express"
import Quiz from "../models/quiz"
import isLoggedIn from "../utils/isLoggedIn"
import { IRequestWithLoad } from "../utils/InterfacesUsed"

const router = express.Router()

router.use(isLoggedIn)

// Index
router.get("/", async (request:IRequestWithLoad, response: Response) => {
    try{
        const username: string = request.payload.username
        
    } catch(error) {
        response.status(400).json({error})
    }
})


// Destroy
router.delete("/:id" , async (request:Request, response: Response) => {
    try{
        
    } catch(error) {
        response.status(400).json({error})
    }
})

// Update 
router.put("/:id", async (request:Request, response: Response) => {
    try{
        
    } catch(error) {
        response.status(400).json({error})
    }
})

// Create
router.post("/", async (request:Request, response: Response) => {
    try{
        
    } catch(error) {
        response.status(400).json({error})
    }
})


// Show
router.get("/:id", async (request:Request, response: Response) => {
    try{
        
    } catch(error) {
        response.status(400).json({error})
    }
})


export default router;