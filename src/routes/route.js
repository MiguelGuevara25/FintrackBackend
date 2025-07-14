import express from "express";
import {
  agregarUsuario,
  obtenerUsuarios,
} from "../controllers/usuarios.controller.js";

const router = express.Router();

router.get("/usuarios", obtenerUsuarios);
router.post("/usuarios", agregarUsuario);

export default router;
