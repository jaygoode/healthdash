import pool from "../pool";
import { User } from "../types/UserType";

const createOne = async (user: User) => {
  return await pool.query(
    "insert into users (firstname, lastname, email, weight, age) values($1, $2, $3, $4, $5)",
    [user.firstname, user.lastname, user.email, user.weight, user.age]
  );
};

export default {
  createOne,
};
