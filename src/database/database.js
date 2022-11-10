import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("companydb", "daniel", "Daniel_23", {
  host: "localhost",
  dialect: "mysql",
});
