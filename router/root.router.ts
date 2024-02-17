import { Router } from "express";
import authRouter from "./auth.router";
import expertiesRouter from "./experties.router";
import { check_auth } from "../middleware/check_auth";
import studentRouter from "./student.router";
import uploadRouter from "./upload.router";

const rootRouter = Router();

rootRouter.use("/auth", authRouter);
rootRouter.use("/experties", check_auth, expertiesRouter);
rootRouter.use("/student", check_auth, studentRouter);
rootRouter.use("/upload", check_auth, uploadRouter);

export default rootRouter;
