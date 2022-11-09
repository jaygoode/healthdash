import pool from "../../src/pool";
import jest from "jest";
import { describe, expect, test } from "@jest/globals";
import { User } from "../../src/types/UserType";
import { user1 } from "../fixtures/users";
import UserServices from "../../src/services/UserServices";

beforeAll(async () => {
  await pool.connect({
    host: "localhost",
    user: "johnny",
    database: "testDB",
  });
});

beforeEach(async () => {
  await UserServices.createOne(user1);
});

afterAll(async () => {
  await pool.close();
});
