import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import usersRouter from "./routers/usersRouter";

dotenv.config({ path: ".env" });
const app = express();

app.set("port", process.env.PORT || 3000);

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.text());

app.use("/api/users", usersRouter);

export default app;
