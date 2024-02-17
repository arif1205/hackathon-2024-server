import { Router } from "express";
import searchController from "../controller/search/search.controller";

const searchRouter = Router();

searchRouter.get("/teacher", searchController.teacher_search_controller);

export default searchRouter;
