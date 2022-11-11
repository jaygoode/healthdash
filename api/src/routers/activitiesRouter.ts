import { Router } from "express";
import activitiesController from "../controllers/activitiesController";

const activitiesRouter = Router();

activitiesRouter.get("/", activitiesController.getAll);
activitiesRouter.get("/", activitiesController.getOneById);
activitiesRouter.post("/", activitiesController.createActivity);
activitiesRouter.patch("/", activitiesController.updateActivity);
activitiesRouter.delete("/", activitiesController.deleteActivity);

export default activitiesRouter;
