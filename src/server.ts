// Import dependencies
import cookieParser from "cookie-parser";
import { Application, Request, Response } from "express";
import authRouter from "./controllers/auth"
import quizRouter from "./controllers/quiz"
import submissionRouter from "./controllers/submission"
import publicRouter from "./controllers/public"


const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config()


// Application object
const app: Application = express();


// Middleware
app.use(morgan("tiny"));
app.use(cors({
    origin: ["http://localhost:5173", "https://pro-quiz-wizard.netlify.app"],
    credentials: true
}))
app.use(express.json())
app.use(cookieParser())


// Routes
app.use("/auth", authRouter)
app.use("/quiz", quizRouter)
app.use("/user", submissionRouter)
app.use("/public", publicRouter )


app.get("/", (request: Request, response: Response) => {
    response.json({verification: "Server is working"})
})

//Listener
type PortValue = number | undefined | string
const port: PortValue = process.env.PORT
app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
})