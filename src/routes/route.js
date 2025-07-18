import express from "express";
import {
  agregarUsuario,
  eliminarUsuario,
  login,
  obtenerUsuarios,
} from "../controllers/usuarios.controller.js";
import { obtenerCategorias } from "../controllers/categorias.controller.js";

const router = express.Router();

router.get("/usuarios", obtenerUsuarios);
router.post("/usuarios", agregarUsuario);
router.delete("/usuarios/:id", eliminarUsuario);

router.post("/login", login);

router.get("/categorias", obtenerCategorias);

export default router;
