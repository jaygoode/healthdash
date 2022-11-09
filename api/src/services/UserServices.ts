import pool from "../pool";
import { User } from "../types/UserType";

const getAllUsers = async () => {
  try {
    const result = await pool.query("select * from users");
    return result?.rows;
  } catch (error) {
    return error.message;
  }
};

const createOne = async (user: User) => {
  try {
    return await pool.query(
      "insert into users (firstname, lastname, email, weight, age) values($1, $2, $3, $4, $5)",
      [user.firstname, user.lastname, user.email, user.weight, user.age]
    );
  } catch (error) {
    return error.message;
  }
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

const deleteAll = async (database: string) => {
  return await pool.query("delete * from users");
};

export default {
  getAllUsers,
  createOne,
  getUserById,
};
