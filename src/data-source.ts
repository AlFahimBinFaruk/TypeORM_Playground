import "reflect-metadata";
import { DataSource } from "typeorm";

// entries
import { Blog } from "./entity/blog";

// data source has all the models and db realated info

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "./db/database.sqlite",
  logging: false,
  entities: [Blog],
  synchronize: true,
});
