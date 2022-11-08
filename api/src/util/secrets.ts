import dotenv from "dotenv";
import fs from "fs";

if (fs.existsSync(".env")) {
  dotenv.config({ path: ".env" });
}

export const JWT_SECRET = process.env["JWT_SECRET"] as string;
export const SERVER_URI = process.env["SERVER_URI"] as string;
