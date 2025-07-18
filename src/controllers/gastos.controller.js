import Gastos from "../models/Gastos.js";

export const obtenerGastos = async (req, res) => {
  try {
    const datos = await Gastos.findAll();
    res.json(datos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener los gastos" });
  }
};
