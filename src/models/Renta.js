import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Renta = sequelize.define(
  "rentas",
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

    asientos: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    transmision: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    aire: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    modelo: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    imagen: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    detalles: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    disponible: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    precio: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);
