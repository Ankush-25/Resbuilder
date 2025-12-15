import express from 'express';
import { logIn, register } from '../controllers/Login.js';
const userRouter = express.Router();

userRouter.post("/login", logIn);
userRouter.post("/register", register);
// userRouter.get(/)


export {userRouter};