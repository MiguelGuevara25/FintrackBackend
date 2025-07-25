import Categorias from "../models/Categorias.js";
import Gastos from "../models/Gastos.js";
import Usuarios from "../models/Usuarios.js";

export const obtenerGastos = async (req, res) => {
  try {
    const usuarioId = req.user.userId;

    const datos = await Gastos.findAll({
      where: { usuarioId },
      include: [
        {
          model: Categorias,
          as: "categoria",
        },
        {
          model: Usuarios,
          as: "usuario",
        },
      ],
    });
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

export const eliminarGasto = async (req, res) => {
  try {
    const { id } = req.params;
    const eliminado = await Gastos.destroy({ where: { id } });

    if (!eliminado) {
      return res.status(404).json({ message: "Gasto no encontrado" });
    }

    res.status(200).json({ message: "Gasto eliminado exitosamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al eliminar el gasto" });
  }
};
