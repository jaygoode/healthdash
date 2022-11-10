import { Router } from "express";
import notesController from "../controllers/notesController";

const notesRouter = Router();

notesRouter.get("/", notesController.getAll);
notesRouter.post("/", notesController.createNote);
notesRouter.patch("/", notesController.updateNote);
notesRouter.delete("/", notesController.deleteNote);

export default notesRouter;
