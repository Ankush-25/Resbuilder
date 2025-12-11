import express from 'express';
import { loginTheUser } from '../controllers/Login.js';
const userRouter = express.Router();

userRouter.post("/login", loginTheUser)


export {userRouter};