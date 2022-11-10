import "reflect-metadata";
import { DataSource, DataSourceOptions, Migration } from "typeorm";
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
  entities: [User, Note],
  migrations: [],
  subscribers: [],
});

//CLASS NEEDED FOR TESTING MOCK DB
// export class CustomDataSource {
//   public AppDataSource: DataSource = new DataSource({
//     type: "postgres",
//   host: "localhost",
//   port: 5432,
//   username: "admin",
//   password: "admin",
//   database: "healthdashdb",
//   synchronize: true,
//   logging: false,
//   entities: ["./entities/*"],
//   migrations: [],
//   subscribers: [],
//   })
//   constructor(public options?: DataSourceOptions) {
//     this.AppDataSource = new DataSource(options)
//   }
// }
