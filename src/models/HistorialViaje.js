import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const HistorialV = sequelize.define(
  "historialV",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    idEmpresa: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    idViaje: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    idUser: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    fecha: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },

    hora: {
      type: DataTypes.TIME,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);
