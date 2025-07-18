import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Roles = sequelize.define(
  "Roles",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    tableName: "roles",
    timestamps: false,
  }
);

export default Roles;
