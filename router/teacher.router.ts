import { Router } from "express";
import teacherController from "../controller/teacher/teacher.controller";

const teacherRouter = Router();

teacherRouter.get("/get-profile", teacherController.get_profile_controller);

teacherRouter.patch(
	"/update-profile/:id",
	teacherController.update_profile_controller
);

teacherRouter.post(
	"/create-profile",
	teacherController.create_profile_controller
);

export default teacherRouter;
