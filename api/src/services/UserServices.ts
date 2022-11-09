import pool from "../pool";
import { User } from "../types/UserType";

const createOne = async (user: User) => {
  return await pool.query(
    "insert into users (firstname, lastname, email, weight, age) values($1, $2, $3, $4, $5)",
    [user.firstname, user.lastname, user.email, user.weight, user.age]
  );
};

const getUserById = async (id: string) => {
  try {
    const result = await pool.query(
      "select * from students where students.id = $1",
      [id]
    );
    return result?.rows;
  } catch (error) {
    return error.message;
  }
};

export default {
  createOne,
};
