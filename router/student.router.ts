import { Router } from "express";
import studentController from "../controller/student/student.controller";

const studentRouter = Router();

studentRouter.get("/get-profile", studentController.get_profile_controller);

studentRouter.patch(
	"/update-profile/:id",
	studentController.update_profile_controller
);

studentRouter.post(
	"/create-profile",
	studentController.create_profile_controller
);

export default studentRouter;
