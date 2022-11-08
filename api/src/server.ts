import express from "express";
import app from "./app";
import { SERVER_URI } from "./util/secrets";
import pool from "./pool";

const serverUrl = SERVER_URI;

pool
  .connect({
    database: "",
    host: "localhost",
    user: "johnny",
    port: 5432,
  })
  .then(async () => {
    const serverStartMsg = "Express server started on port: ",
      port = process.env.PORT;
  });

app.listen(app.get("port"), () => {
  console.log(
    "App is running at http://localhost:%d in %s mode",
    app.get("port"),
    app.get("env")
  );
  console.log(" Press CRTL-C to stop\n");
});
