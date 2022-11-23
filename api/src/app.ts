import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import usersRouter from "./routers/usersRouter";
import notesRouter from "./routers/notesRouter";
import activitiesRouter from "./routers/activitiesRouter";

dotenv.config({ path: ".env" });
const app = express();

app.set("port", process.env.PORT || 3000);

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.text());

app.use("/api/users", usersRouter);
app.use("/api/notes", notesRouter);
app.use("/api/activities", activitiesRouter);

export default app;
