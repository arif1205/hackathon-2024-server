import { Router } from "express";
import authRouter from "./auth.router";
import expertiesRouter from "./experties.router";
import { check_auth } from "../middleware/check_auth";
import studentRouter from "./student.router";
import uploadRouter from "./upload.router";
import teacherRouter from "./teacher.router";
import searchRouter from "./search.router";

const rootRouter = Router();

rootRouter.use("/auth", authRouter);
rootRouter.use("/experties", check_auth, expertiesRouter);
rootRouter.use("/student", check_auth, studentRouter);
rootRouter.use("/teacher", check_auth, teacherRouter);
rootRouter.use("/upload", check_auth, uploadRouter);
rootRouter.use("/search", check_auth, searchRouter);

export default rootRouter;
