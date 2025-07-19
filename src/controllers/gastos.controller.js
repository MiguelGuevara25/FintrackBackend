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

export const agregarGasto = async (req, res) => {
  try {
    await Gastos.create(req.body);
    res.status(201).json({ message: "Gasto agregado exitosamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al guardar el gasto" });
  }
};
