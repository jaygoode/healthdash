import pool from "../pool";

const createTable = async () => {
  await pool.query(
    "create table if not exists users(\
            id serial primary key,\
            firstname varchar not null,\
            lastname varchar not null,\
            email varchar not null, \
            weight varchar not null,\
            age varchar not null)"
  );
};

export default {
  createTable,
};
