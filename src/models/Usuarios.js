import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Usuarios = sequelize.define(
  "Usuarios",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },

    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },

    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    estado: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },

    saldo_inicial: {
      type: DataTypes.DECIMAL(10, 2),
      defaultValue: 0.0,
    },
  },
  {
    tableName: "usuarios",
    timestamps: true,
  }
);

export default Usuarios;
