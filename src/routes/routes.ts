import { Router } from "express";
import { HelloWorld } from "../controllers/user.controllers";

export const userRouter = Router();

userRouter.get("/", HelloWorld);