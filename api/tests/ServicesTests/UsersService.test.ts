import pool from "../../src/pool";
import jest from "jest";
import { describe, expect, test } from "@jest/globals";

beforeAll(async () => {
  await pool.connect({
    host: "localhost",
    user: "johnny",
    database: "testDB",
  });
});

afterAll(async () => {
  await pool.close();
});
