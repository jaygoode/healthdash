import { Router } from "express";
import notesController from "../controllers/notesController";

const activitiesRouter = Router();

activitiesRouter.get("/", activitiesController.getAll);
activitiesRouter.post("/", activitiesController.createNote);
activitiesRouter.patch("/", activitiesController.updateNote);
activitiesRouter.delete("/", activitiesController.deleteNote);

export default activitiesRouter;
