import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";
import Categorias from "./Categorias.js";
import Usuarios from "./Usuarios.js";

const Gastos = sequelize.define(
  "Gastos",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    monto: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },

    descripcion: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    fecha: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },

    categoriaId: {
      type: DataTypes.INTEGER,
      references: {
        model: Categorias,
        key: "id",
      },
      allowNull: false,
    },

    usuarioId: {
      type: DataTypes.INTEGER,
      references: {
        model: Usuarios,
        key: "id",
      },
      allowNull: false,
    },
  },
  {
    tableName: "gastos",
    timestamps: true,
  }
);

export default Gastos;
