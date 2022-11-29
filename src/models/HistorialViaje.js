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
    hora: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    fechaSalida: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    horaSalida: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    origen: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    destino: {
      type: DataTypes.STRING,
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
