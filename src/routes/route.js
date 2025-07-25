import express from "express";
import {
  agregarUsuario,
  eliminarUsuario,
  login,
  obtenerUsuarios,
} from "../controllers/usuarios.controller.js";
import { obtenerCategorias } from "../controllers/categorias.controller.js";
import {
  agregarGasto,
  eliminarGasto,
  obtenerGastos,
} from "../controllers/gastos.controller.js";
import { verificarToken } from "../middlewares/verificarToken.js";

const router = express.Router();

router.get("/usuarios", obtenerUsuarios);
router.post("/usuarios", agregarUsuario);
router.delete("/usuarios/:id", eliminarUsuario);

router.post("/login", login);

router.get("/categorias", obtenerCategorias);

router.get("/gastos", verificarToken, obtenerGastos);
router.post("/gastos", verificarToken, agregarGasto);
router.delete("/gastos/:id", eliminarGasto);

export default router;
