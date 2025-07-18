import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Categorias = sequelize.define(
  "Categorias",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    tableName: "categorias",
    timestamps: false,
  }
);

export default Categorias;
