import { Router } from "express";
import uploadController from "../controller/upload/upload.controller";

const uploadRouter = Router();

uploadRouter.post("/", uploadController.upload_controller);

export default uploadRouter;
