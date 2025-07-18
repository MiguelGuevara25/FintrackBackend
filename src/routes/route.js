import express from "express";
import {
  agregarUsuario,
  eliminarUsuario,
  login,
  obtenerUsuarios,
} from "../controllers/usuarios.controller.js";

const router = express.Router();

router.get("/usuarios", obtenerUsuarios);
router.post("/usuarios", agregarUsuario);
router.delete("/usuarios/:id", eliminarUsuario);

router.post("/login", login);

export default router;
