import { Router } from "express";
import authRouter from "./auth.router";
import expertiesRouter from "./experties.router";
import { check_auth } from "../middleware/check_auth";

const rootRouter = Router();

rootRouter.use("/auth", authRouter);
rootRouter.use("/experties", check_auth, expertiesRouter);

export default rootRouter;
