// Import dependencies
import cookieParser from "cookie-parser";
import { Application, Request, Response } from "express";
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config()


// Application object
const app: Application = express();


// Middleware
app.use(morgan("tiny"));
app.use(cors({}))
app.use(express.json())
app.use(cookieParser())


// Routes
app.get("/", (request: Request, response: Response) => {
    response.json({verification: "Server is working"})
})


//Listener
type PortValue = number | undefined | string
const port: PortValue = process.env.PORT
app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
})