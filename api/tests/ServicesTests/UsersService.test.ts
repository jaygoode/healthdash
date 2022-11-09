import pool from "../../src/pool";
import jest from "jest";
import { describe, expect, test } from "@jest/globals";
import { User } from "../../src/types/UserType";

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

const createOne = async (user: User) => {
  await pool.query(
    "insert into users (firstname, lastname, email, weight, age) values($1, $2, $3, $4, $5)",
    [user.firstname, user.lastname, user.email, user.weight, user.age]
  );
};
