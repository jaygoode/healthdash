import pool from "../../src/pool";
import jest from "jest";
import { describe, expect, test } from "@jest/globals";
import { User } from "../../src/types/Types";
import { user1, user2 } from "../fixtures/users";
import UserServices from "../../src/services/UserServices";

async function createUser() {
  const user = {
    id: 1,
    firstname: "johnny",
    lastname: "nylund",
    email: "johnny@gmail.com",
    password: "@Aa123",
    role: "admin",
    username: "jay",
    weight: 95,
    age: 23,
    noteId: 2,
    activityId: 1,
  };
  return await UserServices.createOne(user);
}

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

afterEach(async () => {
  await pool.deleteTable("users");
});

describe("test user services", () => {
  test("able to get all users", async () => {
    const users = await UserServices.getAllUsers();
    expect(users.length).toBe(1);
    expect(users[0].firstname).toEqual(user1.firstname);
    expect(users[1].lastname).toEqual(user2.lastname);
  });
  it("should get a user with id", async () => {
    const user = await createUser();
    const found = await UserServices.getUserById(user._id);
    expect(found.firstname).toEqual(user.firstname);
    expect(found._id).toEqual(user._id);
  });
  it("should create a user", async () => {
    const user = await createUser();
    expect(user).toHaveProperty("_id");
    expect(user).toHaveProperty("firstname", "johnny");
    expect(user).toHaveProperty("role", "admin");
  });
  it("should update an existing user", async () => {
    const user = await createUser();
    const update = {
      firstname: "jaimie",
    };
    const updated = await UserServices.updateOne(user._id, update);
    expect(updated).toHaveProperty("_id", user._id);
    expect(updated).toHaveProperty("firstname", "jaimie");
  });

  it("should delete an existing user", async () => {
    expect.assertions(1);
    const user = await createUser();
    await UserServices.deleteOne(user._id);
    return UserServices.getUserById(user._id).catch((e) => {
      expect(e.message).toBe(`User ${user._id} not found.`);
    });
  });
});
