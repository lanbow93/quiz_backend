import { NextFunction, Response } from "express";
import jwt from "jsonwebtoken"



async function userLoggedIn  (request: any, response: Response, next: NextFunction){
    try {
        // Check if token is in the cookies
        const { userToken = false} = request.cookies;
        if (userToken) {
            // Verify token
            const payload = await jwt.verify(userToken, process.env.SECRET);
            // Add payload to request
            request.payload = payload;
            next()
        } else {
            throw "Not Verified"
        }
    } catch (error) {
        response.status(400).json({error})
    }
}

export default userLoggedIn