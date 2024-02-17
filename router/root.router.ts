import { Router } from "express";
import authRouter from "./auth.router";
import expertiesRouter from "./experties.router";
import { check_auth } from "../middleware/check_auth";
import studentRouter from "./student.router";

const rootRouter = Router();

rootRouter.use("/auth", authRouter);
rootRouter.use("/experties", check_auth, expertiesRouter);
rootRouter.use("/student", check_auth, studentRouter);

export default rootRouter;
