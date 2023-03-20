import { NextFunction, Response } from "express";
import jwt from "jsonwebtoken"
import { IPayload, IRequestWithLoad } from "./InterfacesUsed";



async function isLoggedIn  (request: IRequestWithLoad, response: Response, next: NextFunction){
    try {
        // Check if token is in the cookies
        const { token = false} = request.cookies;
        if (token) {
            // Verify token
            console.log(typeof await jwt.verify(token, process.env.SECRET))
            const payload: IPayload = await jwt.verify(token, process.env.SECRET);
            // Add payload to request
            request.payload = payload;
        } else {
            throw "Not logged In"
        }
    } catch (error) {
        response.status(400).json({error})
    }
}

export default isLoggedIn