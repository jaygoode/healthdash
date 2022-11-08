import express from "express";
import app from "./app";
import { SERVER_URI } from "./util/secrets";

const serverUrl = SERVER_URI;

app.listen(app.get("port"), () => {});
