import Categorias from "../models/Categorias.js";

export const obtenerCategorias = async (req, res) => {
  try {
    const categorias = await Categorias.findAll();
    res.json(categorias);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener categorías" });
  }
};
