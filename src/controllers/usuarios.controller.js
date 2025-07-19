import Usuarios from "../models/Usuarios.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Roles from "../models/Roles.js";

export const obtenerUsuarios = async (req, res) => {
  try {
    const datos = await Usuarios.findAll();
    res.json(datos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener los usuarios" });
  }
};

export const agregarUsuario = async (req, res) => {
  try {
    const { nombre, email, username, password } = req.body;

    const rolUsuario = await Roles.findOne({ where: { name: "USER" } });

    const hashedPassword = await bcrypt.hash(password, 10);
    await Usuarios.create({
      nombre,
      email,
      username,
      password: hashedPassword,
      roleId: rolUsuario.id,
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

export const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const usuario = await Usuarios.findOne({
      where: { username },
      include: [{ model: Roles }],
    });

    if (!usuario) {
      return res.status(400).json({ error: "Usuario no encontrado" });
    }

    const isMatch = await bcrypt.compare(password, usuario.password);

    if (!isMatch) {
      return res.status(400).json({ error: "Contraseña incorrecta" });
    }

    const token = jwt.sign(
      { userId: usuario.id, role: usuario.Role.name },
      "secretKey",
      {
        expiresIn: "1h",
      }
    );

    res.json({
      message: "Login exitoso",
      token,
      role: usuario.Role.name,
      usuario: {
        id: usuario.id,
        username: usuario.username,
      },
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Error al iniciar sesión" });
  }
};
