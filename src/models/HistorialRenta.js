import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const HistorialR = sequelize.define(
  "historialR",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    idUser: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    nombreEmpresa: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    fecha: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },

    dias: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    total: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);
