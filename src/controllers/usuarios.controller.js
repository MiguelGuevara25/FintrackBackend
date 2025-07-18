import Usuarios from "../models/Usuarios.js";
import bcrypt from "bcryptjs";

export const obtenerUsuarios = async (req, res) => {
  try {
    const datos = await Usuarios.findAll();
    res.json(datos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener las conexiones" });
  }
};

export const agregarUsuario = async (req, res) => {
  try {
    const { nombre, email, username, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);
    await Usuarios.create({
      nombre,
      email,
      username,
      password: hashedPassword,
    });

    res.status(201).json({ message: "Usuario agregado exitosamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al guardar el usuario" });
  }
};

export const eliminarUsuario = async (req, res) => {
  try {
    const { id } = req.params;
    const eliminado = await Usuarios.destroy({ where: { id } });

    if (!eliminado) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    res.status(200).json({ message: "Usuario eliminado exitosamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al eliminar el usuario" });
  }
};
