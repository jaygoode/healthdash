import { Router } from "express";
import usersController from "../controllers/usersController";

const usersRouter = Router();

usersRouter.get("/", usersController.getAll);
usersRouter.post("/", usersController.createUser);
usersRouter.patch("/", usersController.updateUser);
usersRouter.delete("/", usersController.deleteUser);

export default usersRouter;
