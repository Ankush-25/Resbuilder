import express from 'express';
import { getProfile, logIn, register } from '../controllers/Login.ts';
import { authChecker } from '../middlewares/auth.middleware.ts';
const userRouter = express.Router();

userRouter.post("/login", logIn);
userRouter.post("/register", register);
userRouter.get("/profile/:id", authChecker, getProfile)
// userRouter.post("/logOut",authChecker, logOut)


export {userRouter};