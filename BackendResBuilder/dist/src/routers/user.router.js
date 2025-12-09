import express from 'express';
const userRouter = express.Router();
const hello = () => (console.log("hello"));
userRouter.get("/profile", hello);
export { userRouter };
//# sourceMappingURL=user.router.js.map