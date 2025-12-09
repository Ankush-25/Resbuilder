import express from "express";
import { userRouter } from "./user.router.ts";
import { basepath } from "../configs/global.config.js";
const mainRouter = express.Router();

mainRouter.use(userRouter);
mainRouter.get(basepath, (req, res) => (
    res.send("Welcome to the ResBuilder")
))
export { mainRouter };