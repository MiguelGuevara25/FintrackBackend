import express from "express";
import {
  agregarUsuario,
  eliminarUsuario,
  login,
  obtenerUsuarios,
} from "../controllers/usuarios.controller.js";
import { obtenerCategorias } from "../controllers/categorias.controller.js";
import { agregarGasto, obtenerGastos } from "../controllers/gastos.controller.js";

const router = express.Router();

router.get("/usuarios", obtenerUsuarios);
router.post("/usuarios", agregarUsuario);
router.delete("/usuarios/:id", eliminarUsuario);

router.post("/login", login);

router.get("/categorias", obtenerCategorias);

router.get("/gastos", obtenerGastos);
router.post("/gastos", agregarGasto);

export default router;
