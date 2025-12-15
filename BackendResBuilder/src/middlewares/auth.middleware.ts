import type { NextFunction, Request, Response } from "express";
import { verifyAuthToken } from "../utils/jwt.js";
import { log } from "../logger/Logger.js";

const authChecker = (req:Request,res:Response, next:NextFunction):void=>{
    try {
        const authHeader = req.header("Authorization");
        if  (!authHeader){
            res.status(400).json({success: "false",message:"Auth Token is not Provided!"});
            return;
        }
        const token:string = authHeader.replace("Bearer ",'').trim();
        const decoded = verifyAuthToken(token)
        req.user= decoded
        next()
    } catch (error) { 
        log.error("InvalidToken",error as Error)
        res.status(401).json({ success:"false",message: 'Invalid token' });
    }

}