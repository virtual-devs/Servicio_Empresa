import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Viaje = sequelize.define(
  "viajes",
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

    origen: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    destino: {
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

    precio: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },

    asientos: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    asientosDisp: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    imagen: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);
