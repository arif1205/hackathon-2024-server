import { Router } from "express";
import expertiesController from "../controller/experties/experties.controller";

const expertiesRouter = Router();

expertiesRouter.post("/create", expertiesController.create_experties);
expertiesRouter.get("/get-all", expertiesController.get_all_experties);

export default expertiesRouter;
