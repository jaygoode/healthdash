import "reflect-metadata";
import { DataSource, Migration } from "typeorm";
import { User } from "./entities/userEntity";
import { Note } from "./entities/noteEntity";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "admin",
  password: "admin",
  database: "healthdashdb",
  synchronize: true,
  logging: false,
  entities: ["./entities/*"],
  migrations: [],
  subscribers: [],
});
