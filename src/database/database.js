import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("companydb", "vitrauser", "virtualdevs.22", {
  host: "34.233.108.120",
  dialect: "mysql",
});
